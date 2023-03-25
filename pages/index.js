import Link from 'next/link'

import {
  HomeActivity,
  Event,
  Featured,
  GetInvolved,
  HomeHero,
  Layout,
  Post,
} from "@/components";

import football from "../assets/football.png";
import lifeskills from "../assets/lifeskills.png";
import computer from "../assets/computer.png";

import image from '../assets/item.png'
import learn from '../assets/learning.png'

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <section className="py-[5rem]">
        <div className="container mx-auto bg-[#17403F] rounded-2xl py-[5rem] px-[3rem] flex items-center gap-10">
          <div className="max-w-sm flex-none">
            <h1 className="text-white text-xl font-semibold mb-2">What we do</h1>
            <p className="text-white opacity-80">
              The world breaks everyone, and afterwards, many are strong at the
              broken places.
            </p>
          </div>

          <div className="grow grid grid-cols-3 gap-5">
            <HomeActivity icon={football} title="Football" />
            <HomeActivity icon={lifeskills} title="Life Skills" />
            <HomeActivity icon={computer} title="Computer Training" />
          </div>
        </div>
      </section>

      <section className="py-[7rem]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-semibold text-xl">Recent News</h1>
            <Link href="/blog">All News</Link>
          </div>

          <div className="grid grid-cols-2 gap-14">
              <Post image={image} title="Mathare Clean Up Service" content="This is the second part of the SMM starter pack series of articles. If you made it this far, you must be... " date="2 days ago" />
              <Post image={image} title="Community Reach Out" content="This is the second part of the SMM starter pack series of articles. If you made it this far, you must be... " date="2 days ago" />
          </div>       
        </div>
      </section>

      <section className="py-[7rem] bg-[#17403F]">
        <div className="container mx-auto">
          <Featured image={learn} title="Computer Training" description="The world breaks everyone, and afterwards, many are strong at the broken places. The world breaks everyone, and afterwards, many are strong at the broken places."  />
        </div>
      </section>

      <section className="py-[7rem]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-semibold text-xl">Upcoming Events</h1>
            <Link href="/events">All Events</Link>
          </div>

          <div className="grid grid-cols-2 gap-14">
              <Event image={image} title="Norway Cup 2022" venue="Norway" content="This is the second part of the SMM starter pack series of articles. If you made it this far, you must be... " date="20 Oct, 2022" />
              <Event image={image} title="U14 Tournament" venue="Komarock" content="This is the second part of the SMM starter pack series of articles. If you made it this far, you must be... " date="20 Oct, 2022" />
          </div>       
        </div>
      </section>

      <section className="bg-[#17403F] py-[7rem]">
        <div className="container mx-auto">
          <GetInvolved />
        </div>
      </section>
    </Layout>
  );
}
