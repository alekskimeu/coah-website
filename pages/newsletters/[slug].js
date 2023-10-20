import Image from "next/image";

import ReactHtmlParser from "react-html-parser";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { Layout } from "@/components";

import image from "../../assets/item.png";

export default function Newsletter({ newsletter }) {
  return (
    <Layout>
      <section className="pt-[3rem] pb-[5rem]">
        <div className="post-container mx-auto">
          <Image
            src={image}
            className="w-full h-[470px] object-cover rounded-t-xl mb-6"
          />

          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-lg text-[#283891]">{newsletter.title}</h1>
              {/* <span className="text-gray-500">8 min read</span> */}
            </div>
            <span className="text-gray-400">{newsletter.createdAt}</span>
          </div>

          <div className="mt-4">
            <div className="text-gray-700">
              {ReactHtmlParser(newsletter.content)}
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

export const getStaticProps = async (context) => {
  const url = `${process.env.BASE_URL}/newsletters/${context.params.slug}`;

  const response = await fetch(url);
  const newsletter = await response.json();
  return { props: { newsletter } };
};

export const getStaticPaths = async () => {
  const url = `${process.env.BASE_URL}/newsletters`;

  const response = await fetch(url);
  const newsletters = await response.json();

  const slugs = newsletters.map((newsletter) => newsletter.slug);

  const paths = slugs.map((slug) => ({
    params: { slug: slug.toString() },
  }));

  return { paths, fallback: false };
};
