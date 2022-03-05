import Layout from "pages/components/layout.js";
import Headline from "pages/components/headline";
import Link from "next/link";

export default function Impress() {
  return (
    <Layout>
      <Headline title="Impressum" />

      <div className="pt-11 mb-10 desktop:mt-14">
        <div
          className="bg-white py-11 px-2 desktop:p-16 desktop:rounded-3xl bg-repeat"
          style={{
            backgroundImage: "url('/img/tile.png')",
            backgroundSize: "25%",
          }}
        >
          <div className="text-center desktop:flex-row space-y-10 text-[20px]">
            <h3 className="s3 uppercase text-krokodil-yellow-dark">
              Impressum
            </h3>

            <p>
              Tillmans & Zielke GbR
              <br />
              Weserstrasse 19
              <br />
              12045 Berlin
              <br />
            </p>

            <p>
              Geschäfsführer: Marlon Zielke, Sebastian Tillmans
              <br />
              Steuernummer: 16/605/01013
              <br />
              UsID: DE316930449
              <br />
            </p>

            <p>
              Design & Umsetzung
              <br />
              Prototypers GbR
              <br />
              <Link href="https://theprototypers.de">
                https://theprototypers.de
              </Link>
            </p>

            <p>
              Haftungsausschluss
              <br />
              Haftung für Inhalte Die Inhalte unserer Seiten wurden mit größter
              Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte kön nen wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Geset zen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <p>
              Haftung für Links
              <br />
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auc h keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkt en Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erke nnbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <p>
              Urheberrecht
              <br />
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstel lers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzd em auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir d erartige Inhalte umgehend entfernen.
            </p>

            <p>
              Datenschutz
              <br />
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielswe ise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr
              ückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
              darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich.
              <br />
              <br />
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
