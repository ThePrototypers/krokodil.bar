import Layout from 'pages/components/layout.js'

export default function Impressions() {
  return (
    <Layout>
      <h1 className="text-center uppercase mt-8 s1 desktop:mt-28">Kontakt</h1>

      <div className="space-y-20 desktop:mt-14">
        <div
          className="bg-white p-8 desktop:p-16 desktop:rounded-3xl bg-repeat"
          style={{ backgroundImage: "url('/img/tile.png')" }}
        >
          <div className="text-center font-rubik desktop:flex-row">
            <h3 className="s3 uppercase text-krokodil-yellow-dark">Zum Krokodil</h3>
            <div className="mt-5 font-bold">
              <div>Weserstrasse 19, 12045 Berlin</div>
              <div>Tel: 030-38720706</div>
              <div><a href="mailto:schnapp@krokodil.bar">schnapp@krokodil.bar</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-20 desktop:mt-14">
        <div
          className="bg-white p-8 desktop:p-16 desktop:rounded-3xl bg-repeat"
          style={{ backgroundImage: "url('/img/tile.png')" }}
        >
          <div className="text-center font-rubik desktop:flex-row space-y-10">
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
      </div>

    </Layout >
  )
}
