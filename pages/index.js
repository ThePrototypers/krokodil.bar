import Head from 'next/head'

import Layout from 'pages/components/layout.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Krokodil.bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        test
      </Layout>

    </div>
  )
}
