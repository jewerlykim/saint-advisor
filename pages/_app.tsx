import Head from "next/head"
import "../styles/tailwind.css"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
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
      <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gowun+Dodum&family=Playfair+Display&display=swap" rel="stylesheet" />
      <title>천상의 조언</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
