import Head from "next/head";

import { Layout, Activity, SectionHeader, NoData } from "../components";

import { activities } from "../data/activities";

export default function Activities() {
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
        {activities.length > 0 ?
          <div className="container mx-auto activities">
            {activities.map((activity) => (
                <Activity
                  key={activity.id}
                  image={activity.image}
                  title={activity.title}
                  description={activity.description}
                />
              ))}
          </div>
          : 
          <NoData />
        }
      </section>
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const url = `${process.env.BASE_URL}/activities`;

//   const response = await fetch(url);
//   const activities = await response.json();
//   return { props: { activities } };
// };
