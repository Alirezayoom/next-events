import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventId = () => {
  const router = useRouter();
  console.log(router.query);

  const eventId = router.query.eventid;
  const event = getEventById(eventId);

  if (!event) {
    return <p>no event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};

export default EventId;
