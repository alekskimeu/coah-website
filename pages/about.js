import Head from "next/head";

import { GetInvolved, Layout, MissionVision, CoreValues } from "@/components";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>COAH - About </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>

      <section className="pt-[2rem]">
        <div className="container mx-auto py-[5rem] flex gap-[8rem] mission-container">
          <div className="max-w-sm flex-none mb-10 lg:mb-0">
            <h1 className="text-xl font-semibold mb-2 uppercase">Who we are</h1>
            <p className="opacity-80">
              We are a community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development.
            </p>
          </div>
          <MissionVision />
        </div>
      </section>

      <CoreValues />

      <section className="bg-[#283891] py-[7rem]">
        <div className="container mx-auto">
          <GetInvolved />
        </div>
      </section>
    </Layout>
  );
}
