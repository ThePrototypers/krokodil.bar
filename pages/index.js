import Layout from 'pages/components/layout.js'
import Link from 'next/link'
import Image from 'next/image'

import fb from '../public/img/facebook.svg'
import ig from '../public/img/instagram.svg'
import spotify from '../public/img/spotify.svg'

export default function Home() {

  return (
    <Layout>

      <>
        <div className="fixed bottom-12 w-full justify-center align-middle flex desktop:hidden">
          <div><a href="https://www.facebook.com/zumkrokodil/"><Image src={fb} alt="Krokodil Bar auf Facebook"></Image></a></div>
          <div className="ml-12"><a href="https://www.instagram.com/zum_krokodil/"><Image src={ig} alt="Krokodil Bar auf Instagram"></Image></a></div>
          <div className="ml-12"><a href="https://open.spotify.com/user/kngmhvd1po58va6m0do92b8up?si=VcT0wOZ0Q_-mzohfhFQivw"><Image src={spotify} alt="Krokodil Bar auf Spotify"></Image></a></div>
        </div>

        <div className="absolute inset-0 flex pb-28 desktop:pb-0">
          <div className="m-auto">
            <div className="flex flex-col uppercase text-center space-y-4 desktop:space-y-6">
              <Link href="/news"><a className="s1 hover:text-krokodil-yellow-dark">Aktuelles</a></Link>
              <Link href="/menu"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Karte</a></Link>
              <Link href="/impressions"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Impressionen</a></Link>
              <Link href="/contact"><a href="#" className="s1 hover:text-krokodil-yellow-dark">Kontakt</a></Link>
              <a href="https://rcvr.app//checkin?a=2c62ce2f-d341-47cf-8797-56934042bd79&k=%2BepHMqvLQngY49DWujSpEQz2rf2z4s%2BdA%2FR8Dv%2BJyxY%3D" className="s1 hover:text-krokodil-yellow-dark">Covid Tracing</a>
            </div>
          </div>
        </div>
      </>

    </Layout>
  )
}
