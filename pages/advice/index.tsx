import html2canvas from 'html2canvas';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Lottie from 'react-lottie-player';
import { CSSTransition } from 'react-transition-group';

export default function Advice() {
    const router = useRouter();
    const { concern } = router.query;


    const state_concern = useRef<string | null>(null);
    const [advice, setAdvice] = useState<string | null>(null);
    const [saint, setSaint] = useState<string | null>(null);
    const [saintImage, setSaintImage] = useState<string | null>(null);

    const init = () => {
        state_concern.current = null;
        setAdvice(null);
        setSaint(null);
        setSaintImage(null);
    }

    const backToHome = () => {
        router.push('/');
        init();
    }




    useEffect(() => {
        if (router.isReady) {
            const string_concern = concern?.toString();

            if (string_concern && !state_concern.current) {
                console.log(string_concern);
                state_concern.current = string_concern;  // 값을 저장하려면 .current 프로퍼티를 사용합니다.
                getAdvice(string_concern);
            }
        }
    }, [router.isReady, concern]);

    const getAdvice = (concern: string) => {
        const eventSource = new EventSource(
            `http://localhost:8000/getAdvice/${encodeURIComponent(concern)}`, { withCredentials: true });

        eventSource.addEventListener("message", (event: any) => {
            setAdvice((prevState) => {
                if (prevState === null) {
                    return event.data
                }
                const middleState = prevState + event.data;
                checkSaint(middleState);
                return prevState + event.data
            })
        });

        eventSource.addEventListener("error", (event: any) => {
            console.log(event);
            eventSource.close();
        });

        eventSource.addEventListener("open", (event: any) => {
            console.log(event);
        });
    }

    // advice에서 string 포함을 확인. 
    const checkSaint = (advice: string) => {
        if (saint === null) {
            if (advice.includes('석가')) {
                setSaint('석가');
                setSaintImage('/buda.png');
            } else if (advice.includes('예수')) {
                setSaint('예수');
                setSaintImage('/jesus.png');
            } else if (advice.includes('공자')) {
                setSaint('공자');
                setSaintImage('/confucius.png');
            } else if (advice.includes('소크라테스')) {
                setSaint('소크라테스');
                setSaintImage('/socrates.png');
            }
        }
    }



    const handleDownloadClick = () => {
        // const element = document.querySelector('#__next > main > div > div.h-\[80\%\].aspect-\[512\/840\].items-end.flex.flex-col.relative > div.relative.aspect-\[512\/768\].h-\[90\%\]'); // 캡처할 요소 선택
        // if (element === null) return;
        const htmlElement = document.getElementById('saint-card');
        if (htmlElement === null) return;
        html2canvas(htmlElement, { useCORS: true }).then((canvas) => {
            const imgURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgURL;
            // image이름은 고민 앞으로 10자리 자르기

            const filename = state_concern.current;
            if (filename === null) return;
            const length_limit = 10;
            if (filename.length > length_limit) {
                link.download = filename.slice(0, length_limit) + '.png'; // 다운로드될 파일명
            } else {
                link.download = filename + '.png'; // 다운로드될 파일명
            }

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    const handleSendClick = () => {
        // 전송 로직 구현
    };

    function getFontSize(text: string | null) {
        if (text === null) return 'text-[20px]';
        const length = text.length;
        if (length <= 50) return 'text-[20px]';
        if (length <= 100) return 'text-[18px]';
        if (length <= 150) return 'text-[16px]';

        return 'text-[14px]';

    }




    return (
        <>
            <main className="flex items-center font-gowun-dodum justify-center h-screen bg-center bg-no-repeat bg-cover bg-[#0D121A]" style={{ backgroundImage: "url('background_up.png')" }}>
                <div className="w-full h-full bg-black bg-opacity-80 flex flex-col justify-center items-center relative">
                    <div className='absolute top-0 w-full h-[10%] flex sm:justify-start justify-center'>
                        <button onClick={backToHome} className="hover:animate-pulse" title='홈으로 돌아가기'>
                            <h2 className='text-white text-[40px] py-5 sm:pl-10'>
                                천상의 조언
                            </h2>
                        </button>

                    </div>
                    {
                        saintImage &&
                        <CSSTransition
                            in={!!saintImage}
                            timeout={1500}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className='h-[80%] aspect-[512/840] items-end flex flex-col relative'>
                                <div className="relative aspect-[512/768] h-[90%] shadow" id='saint-card'>
                                    <Image src={saintImage} width={512} height={768} alt='saint' />
                                    <div className={`absolute min-h-[20%] h-max py-1 bottom-[2%] ${getFontSize(advice)} left-1/2 -translate-x-1/2 w-[90%] bg-black bg-opacity-80 text-white font-gowun-dodum border-[1px] border-white rounded-[10px] text-center drop-shadow flex items-center whitespace-normal tracking-widest px-[3%] leading-[30px]`}>
                                        {advice}
                                    </div>
                                </div>
                                <div className='flex sm:w-[90%] w-[80%] h-[5%] mt-2 mr-6 justify-end'>
                                    <button onClick={handleDownloadClick} className="hover:animate-pulse">
                                        <Image src="/icon_download.png" width={43} height={43} alt='download' title='조언 다운로드하기' />
                                    </button>
                                    <button onClick={handleSendClick} className="hover:animate-pulse">
                                        <Image src="/icon_send.png" width={43} height={43} alt='send' title='조언 공유하기' />
                                    </button>
                                </div>
                                <div className='absolute bottom-[-50px] w-full h-[10%] flex justify-center items-center'>
                                    <button onClick={backToHome} className='bg-black h-[80%] w-[40%] bg-opacity-80 rounded-[10px] border border-white hover:bg-opacity-40' title='홈으로 가서 조언받기'>
                                        <span className='text-white'>
                                            한번 더 조언받기
                                        </span>
                                    </button>

                                </div>
                            </div>


                        </CSSTransition>
                    }
                    {
                        !saintImage &&
                        <CSSTransition
                            in={!saintImage}
                            timeout={1500}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className='h-[80%] aspect-[512/840] flex flex-col justify-center items-center'>
                                <Lottie
                                    loop
                                    animationData={require('../../public/animation_loading.json')}
                                    play
                                    style={{ width: 150, height: 150 }}
                                />
                                <span className='text-white font-gowun-dodum text-[25px]'>
                                    조언을 받아오는 중...
                                </span>
                            </div>

                        </CSSTransition>
                    }

                </div>
            </main >
        </>

    );
}
