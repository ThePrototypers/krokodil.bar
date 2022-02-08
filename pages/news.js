import { importAllPosts } from "utils/news";
import { parseISO, format } from 'date-fns'

import Layout from 'pages/components/layout.js'

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
      <h1 className="text-center uppercase mt-8 s1 desktop:mt-28">Aktuelles</h1>
      <div className="space-y-20 mt-8 desktop:mt-14">
        {
          posts.map((post) => {
            return (
              <div
                key={post.title}
                className="bg-white p-8 desktop:p-16 desktop:rounded-3xl bg-repeat"
                style={{ backgroundImage: "url('/img/tile.png')" }}
              >
                <div>
                  <h5 className="text-krokodil-yellow-dark font-yanone font-semibold desktop:text-2xl">{
                    format(parseISO(post.attributes.date), 'd.MM.y')
                  }</h5>
                  <h3 className="uppercase s3 text-krokodil-yellow-dark desktop:mt-[6px]">{post.attributes.title}</h3>

                  <div className="prose-lg">
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
