import Layout from 'pages/components/layout.js'
import Link from 'next/link'
import Image from 'next/image'

import fb from '../public/img/facebook.svg'
import ig from '../public/img/instagram.svg'
import spotify from '../public/img/spotify.svg'

export default function Home() {
  return (
    <Layout>

      <div className="fixed bottom-12 right-12 flex-col hidden desktop:flex">
        <div><Image src={fb} alt="Krokodil Bar auf Facebook"></Image></div>
        <div><Image src={ig} alt="Krokodil Bar auf Instagram"></Image></div>
        <div><Image src={spotify} alt="Krokodil Bar auf Spotify"></Image></div>
      </div>

      <div className="fixed bottom-12 w-full justify-center align-middle flex desktop:hidden">
        <div><Image src={fb} alt="Krokodil Bar auf Facebook"></Image></div>
        <div className="ml-12"><Image src={ig} alt="Krokodil Bar auf Instagram"></Image></div>
        <div className="ml-12"><Image src={spotify} alt="Krokodil Bar auf Spotify"></Image></div>
      </div>

      <div className="mt-24 flex flex-col uppercase text-center space-y-4 desktop:space-y-12 desktop:mt-44">
        <Link href="/news"><a className="s1 hover:text-krokodil-yellow-dark">Aktuelles</a></Link>
        <Link href="/menu"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Karte</a></Link>
        <Link href="/impressions"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Impressionen</a></Link>
        <Link href="/contact"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Kontakt</a></Link>
        <Link href="/covid-tracing"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Covid Tracing</a></Link>
      </div>

    </Layout>
  )
}
