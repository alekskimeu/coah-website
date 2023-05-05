import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {
  DonateCard,
  DonateHero,
  Item,
  Layout,
  SectionHeader,
} from "@/components";

import image from "../assets/item.png";
import mpesa from "../assets/mpesa.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";

export default function Donate() {
  return (
    <Layout>
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

          <div className="bg-white rounded-3xl shadow-lg border flex justify-center items-center px-10 py-5 cursor-pointer min-h-[150px]">
            <PayPalScriptProvider>
              <PayPalButtons
                fundingSource="paypal"
                style={{ layout: "vertical", label: "donate" }}
              />
            </PayPalScriptProvider>
          </div>
          <DonateCard image={visa} />
        </div>
      </section>
    </Layout>
  );
}
