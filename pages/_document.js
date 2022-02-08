import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/Rubik-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YanoneKaffeesatz-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
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
