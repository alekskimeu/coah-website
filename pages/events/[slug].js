import Image from "next/image";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { Layout } from "@/components";

export default function Event({ event }) {
  return (
    <Layout>
      <section className="pt-[3rem] pb-[5rem]">
        <div className="post-container mx-auto">
          <Image
            width="100"
            height="450"
            src={event.featuredImage}
            quality={80}
            className="w-full h-[450px] object-cover rounded-t-xl mb-6"
          />

          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-lg text-[#283891]">
                {event.title}
              </h1>
              <span className="text-gray-500 text-sm">{event.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarMonthOutlinedIcon
                style={{ color: "#61677A", opacity: ".5" }}
              />
              <span className="text-xs opacity-90 pt-1 text-[#61677A]">
                {event.date}
              </span>
            </div>{" "}
          </div>

          <div className="mt-4">
            <p className="text-gray-700">{event.description}</p>
          </div>

          {/* <div className="mt-6">
            <IconButton style={{ backgroundColor: "#EAF1FB" }}>
              <ShareIcon style={{ opacity: ".5" }} />
            </IconButton>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const url = `${process.env.BASE_URL}/events/${context.params.slug}`;

  const response = await fetch(url);
  const event = await response.json();
  return { props: { event } };
};

export const getStaticPaths = async () => {
  const url = `${process.env.BASE_URL}/events`;

  const response = await fetch(url);
  const events = await response.json();

  const slugs = events?.map((event) => event?.slug);

  const paths = slugs?.map((slug) => ({
    params: { slug: slug?.toString() },
  }));

  return { paths, fallback: false };
};
