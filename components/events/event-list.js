import classes from "../../styles/event-list.module.css";
import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;

  return (
    <div>
      <ul className={classes.list}>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            lcoation={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
