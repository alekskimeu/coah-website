import Head from "next/head";
import { Layout, Event, TopEvent, NoData } from "../components";

import { getSortedEventsData } from "../util/events";

export default function Events({ events }) {
  return (
    <Layout>
      <Head>
        <title>COAH - Events </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>
      <section className="pt-[4rem] pb-[5rem]">
        {events.length > 1 ? (
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            {events.slice(0, 2).map((event) => (
              <TopEvent
                key={event.id}
                slug={event.slug}
                image={event.image}
                title={event.title}
                venue={event.venue}
                content={event.content}
                date={event.date}
                time={8}
                height="100px"
              />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </section>

      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[8rem] lg:gap-16">
          {events.length > 2 &&
            events
              .slice(2)
              .map((event) => (
                <Event
                  key={event.id}
                  slug={event.slug}
                  image={event.image}
                  title={event.title}
                  venue={event.venue}
                  content={event.content}
                  date={event.date}
                  time={8}
                  height="100px"
                />
              ))}
        </div>
      </section>
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const url = `${process.env.BASE_URL}/events`;

//   const response = await fetch(url);
//   const events = await response.json();
//   return { props: { events } };
// };

// Fetch events from file system
export async function getStaticProps() {
  const events = getSortedEventsData();

  return {
    props: { events },
  };
}
