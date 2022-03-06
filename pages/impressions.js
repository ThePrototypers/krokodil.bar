import Layout from "pages/components/layout.js";
import Headline from "pages/components/headline";

export default function Impressions() {
  return (
    <Layout>
      <Headline title="Impressionen" />
      <div className="flex flex-col flex-wrap mt-8 p-2 desktop:p-0 desktop:flex-row desktop:mt-12">
        <div className="w-full desktop:w-1/2">
          <div className="desktop:p-2 mb-5">
            <img src="/img/gallery/Kroko_2.jpg" />
          </div>
          <div className="desktop:p-2 mb-5">
            <img src="/img/gallery/Kroko_4.jpg" />
          </div>
          <div className="desktop:p-2">
            <img src="/img/gallery/Kroko_Bar1.jpg" />
          </div>
        </div>
        <div className="w-full desktop:w-1/2">
          <div className="desktop:p-2 mb-5">
            <img src="/img/gallery/Kroko_3.jpg" />
          </div>
          <div className="desktop:p-2 mb-5">
            <img src="/img/gallery/Kroko_5.jpeg" />
          </div>
          <div className="desktop:p-2">
            <img src="/img/gallery/Kroko_Raucherraum1.jpg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
