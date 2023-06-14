import axios from "axios";
import Head from "next/head"
import React, { useState } from "react";
// import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../lp-items"

export default function Web() {
  const [concern, setConcern] = useState("");
  const [advice, setAdvice] = useState("");

  const handleConcernChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setConcern(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(concern);



    const eventSource = new EventSource(
      `http://localhost:8000/getAdvice/${encodeURIComponent(concern)}`, { withCredentials: true });


    eventSource.addEventListener("message", (event: any) => {
      setAdvice((prevState) => {
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
        <title>Saint Advisor</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <label>
          Your Concern:
          <input type="text" value={concern} onChange={handleConcernChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {advice && <div>Advice: {advice}</div>}

    </>
  )
}
