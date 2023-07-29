import Link from "next/link";
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

import image from "../assets/item.png";
import learn from "../assets/learning.png";

export default function Home() {
  return (
    <Layout>
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
                Canada is one of the most dynamic and multicultural countries
                across the globe. Offering free public healthcare and education
                to all its citizens and permanent residents, it also has an
                extremely high quality of living and one of the strongest
                economies in the world.
              </p>

              <Link
                href="/blog"
                className="block mt-3 w-fit rounded-full bg-[#283891] text-white py-3 px-8 all-posts-link"
              >
                All Posts <ArrowRightAltOutlinedIcon className="opacity-75" />
              </Link>
            </div>

            <div className="flex items-center flex-1 gap-10 home-posts py-5">
              {/* TODO: Scrollable posts */}
              <HomePost
                image={image}
                title="Mathare Clean Up Service"
                content="This is the second part of the SMM starter pack series of articles."
              />
              <HomePost
                image={image}
                title="Community Reach Out"
                content="This is the second part of the SMM starter pack series of articles."
              />
              <HomePost
                image={image}
                title="Community Reach Out"
                content="This is the second part of the SMM starter pack series of articles."
              />
              <HomePost
                image={image}
                title="Community Reach Out"
                content="This is the second part of the SMM starter pack series of articles."
              />
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
            <Event
              image={image}
              title="Norway Cup 2022"
              venue="Norway"
              content="This is the second part of the SMM starter pack series of articles."
              date="20 Oct, 2022"
            />
            <Event
              image={image}
              title="U14 Tournament"
              venue="Komarock"
              content="This is the second part of the SMM starter pack series of articles."
              date="20 Oct, 2022"
            />
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
