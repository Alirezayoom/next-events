import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/dist/client/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "./events-search";

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default Events;
