import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-u";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="find a lot of great events that allow you to evolve"
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
      revalidate: 1800,
    },
  };
}

export default HomePage;
