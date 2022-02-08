import Layout from 'pages/components/layout.js'

export default function Impressions() {
  return (
    <Layout>
      <h1 className="text-center uppercase mt-8 s1 desktop:mt-28">Kontakt</h1>
      <div className="text-center leading-10 font-rubik text-3xl text-krokodil-yellow flex-col mt-8 desktop:flex-row desktop:mt-12">
        <div>Weserstrasse 19, 12045 Berlin</div>
        <div>Tel: 030-38720706</div>
        <div><a href="mailto:schnapp@krokodil.bar">schnapp@krokodil.bar</a></div>
      </div>
      <div className="mt-20 font-rubik text-sm leading-5 text-krokodil-yellow space-y-8">
        <p>
          Tillmans & Zielke Gbr.<br />
          Weser Straße 19<br />
          12045 Berlin<br />
        </p>

        <p>
          Geschäfsführer: Marlon Zielke<br />
          Steuernummer: 16/605/01013<br />
          UsID: DE316930449<br />
          Datenschutzerklärung:<br />
          Es werden keine personenbezogenen Daten erhoben, gespeichert oder ausgewertet. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </Layout >
  )
}
