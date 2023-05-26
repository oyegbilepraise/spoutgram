import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script  src="https://www.googletagmanager.com/gtag/js?id=G-P58EPQ4N9R" defer ></script>
      <script src="/ga.js" defer ></script>
      </Head>
      <body className="appBody__main" style={{overflowY: "scroll"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
