import Link from "next/link";
import Head from "next/head";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import {
  HomeActivity,
  Event,
  Featured,
  GetInvolved,
  HomeHero,
  Layout,
  HomePost,
} from "@/components";

import football from "../assets/football.png";
import lifeskills from "../assets/lifeskills.png";
import computer from "../assets/computer.png";

import learn from "../assets/learning.png";

export default function Home({ posts, events }) {
  return (
    <Layout>
      <Head>
        <title>COAH - Home </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>
      <HomeHero />
      <section className="py-[5rem]">
        <div className="container mx-auto bg-[#283891] rounded-2xl py-[5rem] px-[3rem] flex flex-col gap-15 lg:gap-10">
          <div className="max-w-sm flex-none mb-10 lg:mb-0">
            <h1 className="text-white text-xl font-semibold mb-2">
              What we do
            </h1>
            <p className="text-white opacity-80">
              The world breaks everyone, and afterwards, many are strong at the
              broken places.
            </p>
          </div>

          <div className="grow grid grid-cols-1 gap-10 lg:grid-cols-3 home-activities">
            <HomeActivity icon={football} title="Football" />
            <HomeActivity icon={lifeskills} title="Life Skills" />
            <HomeActivity icon={computer} title="Computer Training" />
          </div>
        </div>
      </section>

      <section className="py-[7rem]">
        <div className="container mx-auto">
          {/* <div className="flex justify-between items-center mb-8">
            <h1 className="font-semibold text-xl">Recent News</h1>
            <Link href="/blog">All News</Link>
          </div> */}

          <div className="home-posts-container">
            <div className="flex flex-1 flex-col gap-5">
              <div className="flex justify-between items-center gap-3">
                <h1 className="text-darker text-3xl font-bold">Blog Corner</h1>
                <Link href="/blog" className="posts-link">
                  All Posts <ArrowRightAltOutlinedIcon className="opacity-75" />
                </Link>
              </div>
              <p>
                The world breaks everyone and afterward many are strong at the
                broken places. But those that will not break it kills. It kills
                the very good and the very gentle and the very brave
                impartially. If you are none of these you can be sure it will
                kill you too but there will be no special hurry.
              </p>

              <Link
                href="/blog"
                className="block mt-3 w-fit rounded-md bg-[#283891] text-white py-2 px-5 all-posts-link text-sm"
              >
                All Posts <ArrowRightAltOutlinedIcon className="opacity-70" />
              </Link>
            </div>

            <div className="flex flex-1 gap-10 home-posts pb-5">
              {posts.length > 0 &&
                posts.map((post) => (
                  <HomePost
                    key={post.id}
                    image={post.coverImage}
                    title={post.title}
                    content={post.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[7rem] bg-[#283891]">
        <div className="container mx-auto">
          <Featured
            image={learn}
            title="Computer Training"
            description="The world breaks everyone, and afterwards, many are strong at the broken places. The world breaks everyone, and afterwards, many are strong at the broken places."
          />
        </div>
      </section>

      <section className="py-[7rem]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-semibold text-xl">Upcoming Events</h1>
            <Link href="/events">
              All Events <ArrowRightAltOutlinedIcon className="opacity-75" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {events.length > 0 &&
              events
                .slice(0, 2)
                .map((event) => (
                  <Event
                    key={event.id}
                    image={event.featuredImage}
                    title={event.title}
                    venue={event.venue}
                    content={event.description}
                    date={event.date}
                  />
                ))}
          </div>
        </div>
      </section>

      <section className="bg-[#283891] py-[7rem]">
        <div className="container mx-auto">
          <GetInvolved />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const blogUrl = `${process.env.BASE_URL}/blog`;
  const eventsUrl = `${process.env.BASE_URL}/events`;

  const response = await fetch(blogUrl);
  const posts = await response.json();

  const data = await fetch(eventsUrl);
  const events = await data.json();

  return { props: { posts, events } };
};
