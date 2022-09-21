import Link from "next/link";
import classes from "../../styles/event-item.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <div>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <time>{humanReadDate}</time>
            </div>
            <div className={classes.address}>
              <address>{location}</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </li>
    </div>
  );
};

export default EventItem;
