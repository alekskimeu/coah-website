import Head from "next/head";
import { Layout, PlayerCard } from "../components";

import image from "../assets/player.png";

export default function Team() {
  return (
    <Layout>
      <Head>
        <title>COAH - Team </title>
        <meta
          name="description"
          content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development."
        />
      </Head>
      <section className="pt-[3rem]">
        <div className="container mx-auto">
          <div className="border-b pb-3">
            <h1 className="uppercase text-xl font-bold">Goalkeepers</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
          </div>
        </div>
      </section>

      <section className="pt-[3rem]">
        <div className="container mx-auto">
          <div className="border-b pb-3">
            <h1 className="uppercase text-xl font-bold">Defenders</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
          </div>
        </div>
      </section>

      <section className="pt-[3rem]">
        <div className="container mx-auto">
          <div className="border-b pb-3">
            <h1 className="uppercase text-xl font-bold">Midfielders</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
          </div>
        </div>
      </section>
      <section className="pt-[3rem]">
        <div className="container mx-auto">
          <div className="border-b pb-3">
            <h1 className="uppercase text-xl font-bold">Forwards</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
            <PlayerCard
              image={image}
              number={1}
              firstName="John"
              lastName="Doe"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
