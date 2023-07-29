import { Layout, Activity, SectionHeader } from "@/components";

import image from "../assets/item.png";

export default function Activities() {
  return (
    <Layout>
      <section className="pt-[4rem] pb-[5rem]">
        <SectionHeader
            title="What we do"
            description="The world breaks everyone, and afterwards, many are strong at the broken places."
        />
        <div className="container mx-auto activities">
            <Activity
                image={image}
                title="Football"
                description="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            />
            <Activity
                image={image}
                title="Computer Training"
                description="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            /> 
            <Activity
                image={image}
                title="Life Skills"
                description="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            />       
        </div>
      </section>
    </Layout>
  );
}
