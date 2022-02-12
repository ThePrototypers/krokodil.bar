import { importAllPosts } from "utils/news";
import { parseISO, format } from 'date-fns'

import Layout from 'pages/components/layout.js'
import Headline from 'pages/components/headline'

export async function getStaticProps() {
  // Get posts for the first page
  const posts = await importAllPosts();

  return {
    props: {
      posts
    },
  };
}

export default function News({ posts }) {
  return (
    <Layout>

      <Headline title="Aktuelles" />

      <div className="space-y-20 mt-8 mb-10 desktop:mt-14">
        {
          posts.map((post, idx) => {
            return (
              <div
                key={idx}
                className="bg-white py-11 px-2 desktop:p-16 desktop:rounded-3xl bg-repeat"
                style={{ backgroundImage: "url('/img/tile.png')", backgroundSize: "25%" }}
              >
                <div>
                  <h5 className="text-krokodil-yellow-dark font-yanone font-semibold text-base2 desktop:text-2xl">{
                    format(parseISO(post.attributes.date), 'd.MM.y')
                  }</h5>
                  <h3 className="uppercase s3 text-krokodil-yellow-dark desktop:mt-[6px]">{post.attributes.title}</h3>

                  <div className="prose-xl">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout >
  )
}
