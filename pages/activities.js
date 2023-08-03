import Head from "next/head";

import { Layout, Activity, SectionHeader } from "@/components";

import image from "../assets/item.png";

export default function Activities({ activities }) {
  return (
    <Layout>
      <Head>
        <title>COAH - Activities </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>
      <section className="pt-[4rem] pb-[5rem]">
        <SectionHeader
          title="What we do"
          description="The world breaks everyone, and afterwards, many are strong at the broken places."
        />
        <div className="container mx-auto activities">
          {activities.length > 0 &&
            activities.map((activity) => (
              <Activity
                key={activity.id}
                image={activity.activityImage}
                title={activity.title}
                description={activity.description}
              />
            ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const url = `${process.env.BASE_URL}/activities`;

  const response = await fetch(url);
  const activities = await response.json();
  return { props: { activities } };
};
