import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/img/logo.png'
import fb from '../../public/img/facebook.svg'
import ig from '../../public/img/instagram.svg'
import spotify from '../../public/img/spotify.svg'

export default function Layout({ children }) {
  return (
    <>

      <div className="fixed bottom-12 right-12 flex-col hidden desktop:flex">
        <div><Image src={fb} alt="Krokodil Bar auf Facebook"></Image></div>
        <div><Image src={ig} alt="Krokodil Bar auf Instagram"></Image></div>
        <div><Image src={spotify} alt="Krokodil Bar auf Spotify"></Image></div>
      </div>

      <div className="fixed top-12 left-12 hidden desktop:block">
        <Link href="/"><a><Image src={logo} alt="Krokodil Bar Logo"></Image></a></Link>
      </div>

      <div className="max-w-full pb-10 desktop:max-w-screen-desktop mx-auto font-rubik">
        {children}
      </div>
    </>
  )
}
