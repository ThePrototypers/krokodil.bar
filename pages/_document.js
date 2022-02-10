import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // <Html className="bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/img/bg.jpeg')" }}>
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
        <link
          rel="preload"
          href="/fonts/Rubik-Regular.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Rubik-Medium.woff"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
