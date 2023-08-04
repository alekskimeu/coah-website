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

import image from "../assets/item.png";
import learn from "../assets/learning.png";

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
      {/* <AboutHero /> */}
      <section className="py-[5rem]">
        <div className="container mx-auto bg-[#283891] rounded-2xl py-[5rem] px-[3rem] flex flex-col gap-15 lg:gap-10">
          <div className="max-w-sm flex-none mb-10 lg:mb-0">
            <h1 className="text-white text-xl font-semibold mb-2">
              Who we are
            </h1>
            <p className="text-white opacity-80">
              The world breaks everyone, and afterwards, many are strong at the
              broken places.
            </p>
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
