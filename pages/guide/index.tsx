import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable tailwindcss/no-contradicting-classname */
export default function Guide() {
    return (
        <main className="w-screen min-h-screen h-full bg-black font-do-hyeon text-white flex flex-col items-center">
            {/* 상단바 */}
            <div className="w-full h-[10%] min-h-[106px] flex justify-center items-center">
                <div className="w-[80%] h-full flex justify-center items-center">
                    <h1 className="min-w-max max-w-[260px] h-full font-gowun-dodum text-[40px] flex items-center">
                        천상의 조언
                    </h1>
                    <div className="w-full h-full justify-end hidden md:flex relative">
                        {/* 네비게이트 */}
                        <div className="w-[72%] h-full flex justify-end items-center">
                            <Link href="/about" className="font-gowun-dodum text-[20px] hover:underline min-w-[106px]">
                                About
                            </Link>
                            <Link href="/contact" className="font-gowun-dodum text-[20px] hover:underline min-w-[106px]">
                                Contact
                            </Link>
                        </div>
                        {/* 조언받기 버튼 */}
                        <div className="w-[28%] max-w-[210px] h-full flex justify-end items-center">
                            <button className="h-[60%] w-full ml-2 text-center border-[1px] border-white border-opacity-[70%] rounded-[30px]">
                                <h2 className="text-[20px] font-gowun-dodum">
                                    조언받기 →
                                </h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 구분선 */}
            <div className="w-full h-[1px] bg-white bg-opacity-[20%]" />
            {/* 히어로 */}
            <div className="md:w-[80%] w-full h-[90%] min-h-[870px] flex justify-start items-center relative">
                <div className="absolute max-w-[615px]  h-[100%] md:right-0 right-1/2 md:translate-x-0 translate-x-1/2 bottom-0">
                    <Image src="/angel_trans.png" width={615} height={859} alt="hero" />
                </div>


                {/* 히어로설명 */}
                <div className="md:w-[80%] w-screen h-max flex flex-col justify-center md:items-start items-center md:mt-[0px] sm:mt-[500px] mt-[300px]">
                    <h1 className="md:text-[70px] sm:text-[60px] text-[36px]  bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                        고민 속에서 나아가세요.
                    </h1>
                    <h2 className="md:text-[25px] text-[20px] text-gray-400 md:text-start text-center" >
                        천상의 조언은 고민하는 이들에게 위로를,<br />
                        해답을 찾는 이들에게 지혜를 제공합니다.<br />
                        AI를 통한 4대 성인의 고민상담 서비스를 이용해보세요.
                    </h2>
                    {/* 조언받기 버튼 */}
                    <div className="min-w-[360px] min-h-[100px] flex justify-start items-center">
                        <button className="min-h-[60px] w-full text-center border-[1px] border-[#FFA6FB] border-opacity-[70%] rounded-[30px]">
                            <h2 className="text-[26px] text-[#FFA6FB] tracking-widest font-gowun-dodum">
                                조언받기 &gt;
                            </h2>
                        </button>
                    </div>
                </div>
            </div>
            {/* 구분선 */}
            <div className="w-[80%] h-[1px] bg-white bg-opacity-[60%]" />
            {/* 세부설명 */}
            <div className="w-[80%] mb-20 flex flex-col justify-start items-center">
                {/* 소크라테스 */}
                <div className="w-[100%] min-h-[70%] mt-[5%] flex">
                    <div className="w-[50%] flex justify-start items-center">
                        <Image src={'/portrait_socrates.png'} width={725} height={725} alt="socrates" />
                    </div>
                    <div className="w-[50%] flex justify-center items-center">
                        <h1 className="md:text-[60px] sm:text-[30px] text-[15px] bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                            어느 고민도 듣습니다.
                        </h1>
                    </div>
                </div>
                {/* 석가 */}
                <div className="w-[100%] min-h-[70%] mt-[5%] flex">
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className="md:text-[60px] sm:text-[30px] text-[15px] bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                            조언을 드립니다.
                        </h1>
                        {/* 조언받기 버튼 */}
                        <div className="min-w-[50%] min-h-[10%] flex justify-start items-center pt-2">
                            <button className="w-full text-center border-[1px] border-[#FFA6FB] border-opacity-[70%] rounded-[30px]">
                                <h2 className="md:text-[26px] sm:text-[22px] text-[12px]  text-[#FFA6FB] tracking-widest font-gowun-dodum">
                                    조언받기 &gt;
                                </h2>
                            </button>
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-start items-center">
                        <Image src={'/portrait_buda.png'} width={725} height={725} alt="socrates" />
                    </div>
                </div>
                {/* 공자 */}
                <div className="w-[100%] min-h-[70%] mt-[5%] flex">
                    <div className="w-[50%] flex justify-start items-center">
                        <Image src={'/portrait_confucius.png'} width={725} height={725} alt="socrates" />
                    </div>
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className="md:text-[60px] sm:text-[30px] text-[15px] bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                            그림, 조언 모두
                        </h1>
                        <h1 className="md:text-[60px] sm:text-[30px] text-[15px] bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                            생성형 AI 사용
                        </h1>
                        <h2 className="md:text-[25px] sm:text-[20px] text-[12px] text-gray-400 text-center" >
                            개인 정보 및 고민 전부 일체<br />
                            저장되지 않습니다.
                        </h2>
                    </div>
                </div>
                {/* 예수 */}
                <div className="w-[100%] min-h-[70%] mt-[5%] flex">
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className="md:text-[60px] sm:text-[30px] text-[15px] bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                            심각한 고민은
                        </h1>
                        <h1 className="md:text-[60px] sm:text-[30px] text-[15px] bg-gradient-to-b from-white via-pink-200 to-[#ff00f5] bg-clip-text text-transparent">
                            전문가를 찾아가세요.
                        </h1>
                        <h2 className="md:text-[25px] sm:text-[20px] text-[12px] text-gray-400 text-center" >
                            조언은 AI를 통해 생성됩니다.<br />
                            심각한 고민은 전문가와의<br />
                            상담이 필요합니다.
                        </h2>
                    </div>
                    <div className="w-[50%] flex justify-start items-center">
                        <Image src={'/portrait_jesus.png'} width={725} height={725} alt="socrates" />
                    </div>
                </div>
            </div>
            {/* 구분선 */}
            <div className="w-[80%] h-[1px] bg-white bg-opacity-[60%]" />
            {/* 푸터 */}
            <div className="w-full h-[10%] min-h-[106px] flex justify-center items-center">
                <div className="w-[80%] h-full flex justify-center items-center">
                    <h1 className="min-w-max max-w-[260px] h-full font-gowun-dodum text-[30px] flex items-center">
                        천상의 조언
                    </h1>
                    <div className="w-full h-full justify-end flex relative">
                        {/* 네비게이트 */}
                        <div className="w-[72%] h-full flex justify-end items-center">
                            <Link href="/about" className="font-gowun-dodum sm:text-[20px] text-[12px] hover:underline sm:min-w-[106px] min-w-[56px] text-end">
                                About
                            </Link>
                            <Link href="/support" className="font-gowun-dodum sm:text-[20px] text-[12px] hover:underline sm:min-w-[106px] min-w-[56px] text-end">
                                Support
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}

