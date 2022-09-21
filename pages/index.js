import Link from "next/link";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data.js";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
