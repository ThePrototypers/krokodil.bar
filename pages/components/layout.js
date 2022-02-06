import Image from 'next/image'

import logo from '../../public/img/logo.png'

export default function Layout({ children }) {
  return (
    <>

      <div className="fixed top-12 left-12 hidden desktop:block">
        <Image src={logo} alt="Krokodil Bar Logo"></Image>
      </div>

      <div className="max-w-full desktop:max-w-screen-desktop mx-auto font-rubik">
        {children}
      </div>
    </>
  )
}
