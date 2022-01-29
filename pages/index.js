import Head from 'next/head'
import Script from 'next/script'

import Layout from 'pages/components/layout.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Krokodil.bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <Layout>
        test
      </Layout>

    </div>
  )
}
