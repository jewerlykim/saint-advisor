import axios from "axios";
import Head from "next/head"
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Web() {
  const [concern, setConcern] = useState("");
  const [advice, setAdvice] = useState("");

  const router = useRouter();


  const handleConcernChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setConcern(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    console.log(concern);

    // concern 예외 처리 후 router 바꿈
    if (concern === "") {
      toast.error("고민을 입력해주세요.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
      });
      return;
    }

    const length_limit = 100;
    if (concern.length > length_limit) {
      toast.error(`${length_limit.toString()}자 이내로 입력해주세요.`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
      });
      return;
    }


    // const eventSource = new EventSource(
    //   `http://localhost:8000/getAdvice/${encodeURIComponent(concern)}`, { withCredentials: true });


    // eventSource.addEventListener("message", (event: any) => {
    //   setAdvice((prevState) => {
    //     return prevState + event.data
    //   })
    // });

    // eventSource.addEventListener("error", (event: any) => {
    //   console.log(event);
    //   eventSource.close();
    // });

    // eventSource.addEventListener("open", (event: any) => {
    //   console.log(event);
    // });



  };


  const handleKeyPress = (event: { key: string; }) => {
    // alert("엔터키 눌림");
    if (event.key === "Enter") {
      alert("엔터키 눌림");
      // handleSubmit();
    }
  };






  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://github.com/jewerlykim/jewel-blog/assets/75651834/9e699ea1-8a28-401f-9657-f6edcf3b08c9"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Playfair+Display&display=swap" rel="stylesheet" />
        <title>천상의 조언</title>
      </Head>
      <main className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover bg-[#0D121A]" style={{ backgroundImage: "url('background_up.png')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="h-[182px] font-gowun-dodum sm:text-[100px] text-[75px] text-center text-white tracking-[-6px] drop-shadow">천상의 조언</h1>

          <form onSubmit={handleSubmit} className="items-center justify-center">
            <input
              className="md:w-[880px] sm:w-[440px] w-screen h-[72px] rounded-[45px] border-2 border-white bg-black bg-opacity-[63%] text-white text-center tracking-[2px] font-gowun-dodum sm:text-[35px] text-[20px] placeholder:text-[#F5F5F5] placeholder:opacity-[50%] focus:outline-none focus:border-[#F5F5F5] focus:placeholder-opacity-[0%]"
              type="text"
              placeholder="고민을 입력하세요."
              value={concern}
              onChange={handleConcernChange}
            >
            </input>

          </form>
          <button onClick={handleSubmit} className="text-white w-[100px] h-[50px] border-2 border-white bg-black bg-opacity-[70%] rounded-[20px] text-[20px] mt-3 flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 ease-in-out">
            <span>조언받기</span>
          </button>

          <div className="h-[30px]" />
          <div className="flex flex-col sm:w-[650px] sm:h-[280px] rounded-[20px] border-2 border-white bg-black bg-opacity-[70%] text-white tracking-[7px] font-gowun-dodum text-[20px] justify-center pb-10 px-5" >
            <h1 className="text-[25px] text-center">
              조언 지침서
            </h1>
            <div className="h-5" />
            <h2>
              ✓ 개인정보는 저장되지 않습니다.
            </h2>
            <h2>
              ✓ 4대 성인의 철학을 바탕으로 조언을 드립니다.
            </h2>
            <h2>
              ✓ 고민이 아닌 내용은 조언을 드릴 수 없습니다.
            </h2>
            <h2>
              ⭑ AI가 답변을 드리니, 심각한 고민은 전문가에게 상담을 받으세요.
            </h2>

          </div>
          <ToastContainer />



        </div>

      </main>


    </>
  )
}
