import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <body className="bg-cover bg-fixed" style={{ backgroundImage: "url('/img/bg.jpeg')" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
