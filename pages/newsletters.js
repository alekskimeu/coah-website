import { Layout, Newsletter, TopNewsletter } from "@/components";

import image from "../assets/item.png";

export default function Newsletters() {
  return (
    <Layout>
      <section className="pt-[3rem] pb-[5rem]">

        <div className="container mx-auto grid grid-cols-2 gap-14">
        <TopNewsletter
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
        />
        <TopNewsletter
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
        />       
        </div>
      </section>

      <section>
      <div className="container mx-auto grid grid-cols-2 gap-16">
          <Newsletter
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
          />
          <Newsletter
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
          />
          <Newsletter
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
          />
          <Newsletter
            image={image}
            title="Mathare Clean Up Service"
            content="This is the second part of the SMM starter pack series of articles. This is the second part of the SMM starter pack series of articles. "
            date="2 days ago"
            time={8}
            height="250px"
          />
        </div>
      </section>
    </Layout>
  );
}
