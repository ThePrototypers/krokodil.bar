import Head from 'next/head'

import Layout from 'pages/components/layout.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Krokodil.bar</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Layout>
        test
      </Layout>

    </div>
  )
}
