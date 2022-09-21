import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "./events-search";

const Events = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
};

export default Events;
