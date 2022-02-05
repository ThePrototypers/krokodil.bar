import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/Rubik-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/YanoneKaffeesatz-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <title>Krokodil Bar</title>
      </Head>
      <body className="bg-cover bg-fixed" style={{ backgroundImage: "url('/img/bg.jpeg')" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
