import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/YanoneKaffeesatz-Light.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YanoneKaffeesatz-Medium.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YanoneKaffeesatz-SemiBold.woff"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/img/bg.jpeg')" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
