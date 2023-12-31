import Head from "next/head";
import { Layout, BlogPost, TopPost, NoData } from "../components";
import { getSortedPostsData } from "../util/posts";

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>COAH - Blog </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>
      <section className="pt-[4rem] pb-[5rem]">
        {posts.length > 0 ? (
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            {posts?.slice(0, 2).map((post) => (
              <TopPost
                key={post.id}
                image={post.coverImage}
                title={post.title}
                content={post.content}
                date={post.createdAt}
                time={8}
                height="250px"
              />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </section>

      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[8rem] lg:gap-16">
          {posts.length > 2 &&
            posts
              ?.slice(2)
              .map((post) => (
                <BlogPost
                  key={post.id}
                  image={post.coverImage}
                  title={post.title}
                  content={post.content}
                  date={post.createdAt}
                  time={8}
                  height="250px"
                />
              ))}
        </div>
      </section>
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const url = `${process.env.BASE_URL}/posts`;

//   const response = await fetch(url);
//   const posts = await response.json();
//   return { props: { posts } };
// };

// Fetch posts from file system
export async function getStaticProps() {
  const posts = getSortedPostsData();

  return {
    props: { posts },
  };
}
