import { useRouter } from "next/router";
import ResultsTitle from "../../components/events/results-title";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const EventFilter = () => {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  console.log(filterData);

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (numYear > 2030 || numYear < 2020 || numMonth > 12 || numMonth < 1) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>not found!</p>
        </ErrorAlert>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>no events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default EventFilter;
