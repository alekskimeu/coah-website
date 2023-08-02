import Head from 'next/head'
import {
  DonateCard,
  DonateHero,
  Item,
  Layout,
  SectionHeader,
  PaypalCard,
} from "@/components";

import image from "../assets/item.png";
import mpesa from "../assets/mpesa.png";
import visa from "../assets/visa.png";

export default function Donate() {
  return (
    <Layout>
      <Head>
        <title>COAH - Donate </title>
        <meta name="description" content="A community based organization located in Mathare Nairobi, Kenya aiming to eradicate poverty through sport for holistic development." />
      </Head>
      <DonateHero />

      <section className="py-[5rem]">
        <SectionHeader
          title="Make a Difference"
          description="The world breaks everyone, and afterwards, many are strong at the broken places."
        />

        <div className="container mx-auto">
          <div className="items">
            <Item
              image={image}
              title="Education"
              description="The world breaks everyone, and afterwards, many are strong at the broken places."
            />
            <Item
              image={image}
              title="Education"
              description="The world breaks everyone, and afterwards, many are strong at the broken places."
            />
            <Item
              image={image}
              title="Education"
              description="The world breaks everyone, and afterwards, many are strong at the broken places."
            />
          </div>
        </div>
      </section>

      <section className="py-[5rem] bg-[#f2f5f9]" id="donate">
        <SectionHeader
          title="Make a Donation"
          description="The world breaks everyone, and afterwards, many are strong at the broken places."
        />

        <div className="container mx-auto flex flex-col gap-10 md:flex-row justify-around">
          <DonateCard image={mpesa} />

          <PaypalCard />
          <DonateCard image={visa} />
        </div>
      </section>
    </Layout>
  );
}
