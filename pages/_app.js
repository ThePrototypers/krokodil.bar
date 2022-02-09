import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Script src="https://cdn.usefathom.com/script.js" data-site="DNCTHVAD" defer></Script>
    </>
  )
}

export default MyApp
