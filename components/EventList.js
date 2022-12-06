import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
