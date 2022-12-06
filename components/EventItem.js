import Link from "next/link";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadDate}</time>
          </div>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>

      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
