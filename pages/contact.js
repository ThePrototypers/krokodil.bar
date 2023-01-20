import Layout from "pages/components/layout.js";
import Headline from "pages/components/headline";
import Link from "next/link";

export default function Impressions() {
  return (
    <Layout>
      <Headline title="Kontakt" />

      <div className="pt-11 mb-10 desktop:mt-14">
        <div
          className="bg-white py-11 px-2 desktop:p-16 desktop:rounded-3xl bg-repeat"
          style={{
            backgroundImage: "url('/img/tile.png')",
            backgroundSize: "25%",
          }}
        >
          <div className="text-center desktop:flex-row">
            <h3 className="s3 uppercase text-krokodil-yellow-dark">
              Zum Krokodil
            </h3>
            <div className="mt-5 font-rubik font-medium text-[20px]">
              <div>Weserstrasse 19, 12045 Berlin</div>
              <a href="tel:03039720706">Tel: 030 - 39720706</a>
              <div>
                <a href="mailto:schnapp@krokodil.bar">schnapp@krokodil.bar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white mb-10 py-11 desktop:p-16 desktop:rounded-3xl bg-repeat"
        style={{
          backgroundImage: "url('/img/tile.png')",
          backgroundSize: "25%",
        }}
      >
        <div className="text-center desktop:flex-row space-y-10 text-[20px]">
          <h3 className="s3 uppercase text-krokodil-yellow-dark">
            Reservierungen
          </h3>

          <p>
            Reservierungen können{" "}
            <a
              className="border-b"
              href="https://app.resmio.com/zum-krokodil/widget"
            >
              hier
            </a>{" "}
            direkt Online durchgeführt werden
          </p>
        </div>
      </div>

      <h3 className="mt-[80px] desktop:mt-24 s3 text-center uppercase text-krokodil-yellow-dark">
        <Link href="/impress">Impressum</Link>
      </h3>
    </Layout>
  );
}
