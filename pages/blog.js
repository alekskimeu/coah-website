import Head from 'next/head'
import { Layout, BlogPost, TopPost } from "@/components";

import image from "../assets/item.png";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>COAH - Blog </title>
        <meta name="description" content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development." />
      </Head>
      <section className="pt-[4rem] pb-[5rem]">

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        <TopPost
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
        />
        <TopPost
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
        />       
        </div>
      </section>

      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[8rem] lg:gap-16">
          <BlogPost
            image={image}
            title="Mathare Clean Up Service"
            date="2 days ago"
            time={8}
            height="250px"
          />
          <BlogPost
            image={image}
            title="Mathare Clean Up Service"
            date="2 days ago"
            time={8}
            height="250px"
          />
          <BlogPost
            image={image}
            title="Mathare Clean Up Service"
            date="2 days ago"
            time={8}
            height="250px"
          />
          <BlogPost
            image={image}
            title="Mathare Clean Up Service"
            date="2 days ago"
            time={8}
            height="250px"
          />
        </div>
      </section>
    </Layout>
  );
}
