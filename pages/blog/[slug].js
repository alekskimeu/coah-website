import Image from "next/image";

import parse from "html-react-parser";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { Layout } from "../../components";

import { getAllPostsSlugs, getSinglePost } from "../../util/posts";
import Markdown from "react-markdown";

export default function Post({ post }) {
  return (
    <Layout>
      <section className="pt-[3rem] pb-[5rem]">
        <div className="post-container mx-auto">
          <Image
            height="450"
            width="100"
            src={post.coverImage}
            className="w-full h-[450px] object-cover rounded-t-xl mb-6"
          />

          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-lg text-[#283891]">
                {post.title}
              </h1>
              {/* <span className="text-gray-500">8 min read</span> */}
            </div>
            <span className="text-gray-400">{post.createdAt}</span>
          </div>

          <div className="mt-4">
            <div className="text-gray-700">
              {/* {parse(post.content)} */}
              <Markdown>{post.content}</Markdown>
            </div>
          </div>

          {/* <div className="mt-6">
                        <IconButton style={{ backgroundColor: "#EAF1FB" }}>
                            <ShareIcon style={{ opacity: ".5" }} />
                        </IconButton>
                    </div> */}
        </div>
      </section>
    </Layout>
  );
}

// export const getStaticProps = async (context) => {
//   const url = `${process.env.BASE_URL}/posts/${context.params.slug}`;

//   const response = await fetch(url);
//   const post = await response.json();
//   return { props: { post } };
// };

// export const getStaticPaths = async () => {
//   const url = `${process.env.BASE_URL}/posts`;

//   const response = await fetch(url);
//   const posts = await response.json();

//   const slugs = posts?.map((post) => post?.slug);

//   const paths = slugs?.map((slug) => ({
//     params: { slug: slug?.toString() },
//   }));

//   return { paths, fallback: false };
// };

export async function getStaticPaths() {
  // Return a list of possible values for slug
  const paths = getAllPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

// Fetch post from file system
export async function getStaticProps({ params }) {
  // Fetch particular post given slug in params
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
  };
}
