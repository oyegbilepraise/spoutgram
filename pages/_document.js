import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-P58EPQ4N9R" />
      <script src="/ga.js" />
      </Head>
      <body className="appBody__main">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
