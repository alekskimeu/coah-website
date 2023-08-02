import Head from 'next/head'

import { Layout, Activity, SectionHeader } from "@/components";

import image from "../assets/item.png";

export default function Activities() {
  return (
    <Layout>
      <Head>
        <title>COAH - Activities </title>
        <meta name="description" content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development." />
      </Head>
      <section className="pt-[4rem] pb-[5rem]">
        <SectionHeader
            title="What we do"
            description="The world breaks everyone, and afterwards, many are strong at the broken places."
        />
        <div className="container mx-auto activities">
            <Activity
                image={image}
                title="Football"
                description="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            />
            <Activity
                image={image}
                title="Computer Training"
                description="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            /> 
            <Activity
                image={image}
                title="Life Skills"
                description="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            />       
        </div>
      </section>
    </Layout>
  );
}
