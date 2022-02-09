import Layout from 'pages/components/layout.js'

export default function Impressions() {
  return (
    <Layout>
      <h1 className="text-center uppercase mt-8 s1 desktop:mt-28">Impressionen</h1>
      <div className="flex flex-col mt-8 p-2 desktop:p-0 desktop:flex-row desktop:mt-12">
        <div className="w-full desktop:w-1/2">
          <div className="desktop:p-2 mb-5"><img src="/img/gallery/Kroko_2.jpg" /></div>
          <div className="desktop:p-2 mb-5"><img src="/img/gallery/Kroko_4.jpg" /></div>
        </div>
        <div className="w-full desktop:w-1/2">
          <div className="desktop:p-2 mb-5"><img src="/img/gallery/Kroko_3.jpg" /></div>
          <div className="desktop:p-2"><img src="/img/gallery/Kroko_5.jpeg" /></div>
        </div>
      </div>
    </Layout >
  )
}
