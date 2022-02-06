import { countPosts, importAllPosts } from "utils/news";
import { format } from 'date-fns'

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
      <h1 className="text-center font-yanone uppercase text-krokodil-yellow text-4xl mt-8 desktop:mt-28 desktop:text-7xl">Aktuelles</h1>
      <div className="space-y-20 mt-8 desktop:mt-14">
        {
          posts.map((post) => {
            return (
              <div key={post.title} className="bg-white p-8 desktop:p-16 desktop:rounded-3xl">
                <div>
                  <h5 className="text-krokodil-yellow font-yanone desktop:text-2xl">{post.attributes.date}</h5>
                  <h3 className="uppercase text-krokodil-yellow font-yanone desktop:mt-[6px] desktop:text-4xl">{post.attributes.title}</h3>

                  <div className="prose">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
