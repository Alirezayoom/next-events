import { useRouter } from "next/router";

const EventId = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>event details</h1>
    </div>
  );
};

export default EventId;
