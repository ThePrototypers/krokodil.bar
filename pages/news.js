import { countPosts, importAllPosts } from "utils/news";

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
      <div className="space-y-20">
        {
          posts.map((post) => {
            return (
              <div className="prose">
                <h1 className="text-xl font-bold">{post.attributes.title}</h1>

                <div class>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
