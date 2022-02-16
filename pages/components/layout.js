import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/img/logo.svg'
import fb from '../../public/img/facebook.svg'
import ig from '../../public/img/instagram.svg'
import spotify from '../../public/img/spotify.svg'

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem('logoShown');

    if (!shown) {
      localStorage.setItem('logoShown', true);
      setInterval(() => {
        setShowNav(true)
      }, 4000)
    } else {
      setShowNav(true)
    }

  }, [])

  return (
    <>

      {!showNav &&
        <div className="flex h-screen">
          <div className="m-auto">
            <a onClick={() => setShowNav(true)}><Image src={logo} alt="Krokodil Bar Logo"></Image></a>
          </div>
        </div>
      }

      {showNav &&
        <>
          <div className="fixed bottom-12 right-12 flex-col hidden desktop:flex">
            <div><a href="https://www.facebook.com/zumkrokodil/"><Image src={fb} alt="Krokodil Bar auf Facebook"></Image></a></div>
            <div><a href="https://www.instagram.com/zum_krokodil/"><Image src={ig} alt="Krokodil Bar auf Instagram"></Image></a></div>
            <div><a href="https://open.spotify.com/user/kngmhvd1po58va6m0do92b8up?si=VcT0wOZ0Q_-mzohfhFQivw"><Image src={spotify} alt="Krokodil Bar auf Spotify"></Image></a></div>
          </div>

          <div className="fixed top-[50px] left-[70px] hidden desktop:block">
            <Link href="/"><a><Image src={logo} alt="Krokodil Bar Logo"></Image></a></Link>
          </div>

          <div className="max-w-full desktop:max-w-screen-desktop mx-auto font-rubik">
            {children}
          </div>
        </>
      }
    </>
  )
}
