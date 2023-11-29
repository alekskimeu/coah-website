import Head from "next/head";
import { Layout, Newsletter, TopNewsletter, NoData } from "../components";
import { getSortedNewslettersData } from "@/util/newsletters";

export default function Newsletters({ newsletters }) {
  return (
    <Layout>
      <Head>
        <title>COAH - Newsletters </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>
      <section className="pt-[4rem] pb-[5rem]">
          {newsletters.length > 1 ?
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            {newsletters
              .slice(0, 2)
              .map((newsletter) => (
                <TopNewsletter
                  key={newsletter.id}
                  image={newsletter.coverImage}
                  title={newsletter.title}
                  content={newsletter.description}
                  date={newsletter.createdAt}
                  time={8}
                  height="250px"
                />
              ))}
        </div>
        : 
        <NoData />
      }
      </section>

      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[8rem] lg:gap-16">
          {newsletters.length > 2 &&
            newsletters.map((newsletter) => (
              <Newsletter
                key={newsletter.id}
                image={newsletter.coverImage}
                title={newsletter.title}
                content={newsletter.description}
                date={newsletter.createdAt}
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
//   const url = `${process.env.BASE_URL}/newsletters`;

//   const response = await fetch(url);
//   const newsletters = await response.json();
//   return { props: { newsletters } };
// };


// Fetch posts from file system
export async function getStaticProps() {
  const newsletters = getSortedNewslettersData();

  return {
    props: { newsletters },
  };
}