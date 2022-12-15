import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-u";

const HomePage = (props) => {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
}

export default HomePage;
