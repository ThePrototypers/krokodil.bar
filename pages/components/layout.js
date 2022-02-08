import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/img/logo.png'

export default function Layout({ children }) {
  return (
    <>

      <div className="fixed top-12 left-12 hidden desktop:block">
        <Link href="/"><a><Image src={logo} alt="Krokodil Bar Logo"></Image></a></Link>
      </div>

      <div className="max-w-full pb-10 desktop:max-w-screen-desktop mx-auto font-rubik">
        {children}
      </div>
    </>
  )
}
