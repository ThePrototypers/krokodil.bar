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
        <div className="flex absolute inset-0">
          <div className="m-auto cursor-pointer h-[50%] desktop:h-[60%]">

            <div className="w-screen h-full relative">
              <a onClick={() => setShowNav(true)}>
                <Image src={logo} alt="Krokodil Bar Logo" layout="fill" objectFit="contain" ></Image>
              </a>
            </div>
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

          <div className="hidden fixed desktop:block desktop:top-[17px] desktop:left-[17px] wide:top-[50px] wide:left-[70px]">
            <Link href="/"><a><Image src={logo} alt="Krokodil Bar Logo"></Image></a></Link>
          </div>

          <div className="max-w-full desktop:max-w-4xl wide:max-w-4xl mx-auto font-rubik">
            {children}
          </div>
        </>
      }
    </>
  )
}
