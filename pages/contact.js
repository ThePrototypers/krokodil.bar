import Layout from 'pages/components/layout.js'
import Headline from 'pages/components/headline'

export default function Impressions() {
  return (
    <Layout>
      <Headline title="Kontakt" />

      <div className="pt-11 mb-10 desktop:mt-14">
        <div
          className="bg-white py-11 px-2 desktop:p-16 desktop:rounded-3xl bg-repeat"
          style={{ backgroundImage: "url('/img/tile.png')", backgroundSize: "60%" }}
        >
          <div className="text-center desktop:flex-row">
            <h3 className="s3 uppercase text-krokodil-yellow-dark">Zum Krokodil</h3>
            <div className="mt-5 font-rubik font-medium">
              <div>Weserstrasse 19, 12045 Berlin</div>
              <div>Tel: 030-38720706</div>
              <div><a href="mailto:schnapp@krokodil.bar">schnapp@krokodil.bar</a></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white mb-10 py-11 desktop:p-16 desktop:rounded-3xl bg-repeat"
        style={{ backgroundImage: "url('/img/tile.png')", backgroundSize: "60%" }}
      >
        <div className="text-center desktop:flex-row space-y-10">
          <h3 className="s3 uppercase text-krokodil-yellow-dark">Impressum</h3>
          <p>
            Tillmans & Zielke Gbr.<br />
            Weser Straße 19<br />
            12045 Berlin<br />
          </p>

          <p>
            Geschäfsführer: Marlon Zielke<br />
            Steuernummer: 16/605/01013<br />
            UsID: DE316930449<br />
          </p>
          <p>
            Datenschutzerklärung:<br />
            Es werden keine personenbezogenen Daten erhoben, gespeichert oder ausgewertet. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
      </div>

    </Layout >
  )
}
