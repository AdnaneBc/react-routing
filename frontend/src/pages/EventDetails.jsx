import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  return (
    <>
      <h1>Events Details</h1>
      <p>{eventId}</p>
    </>
  );
};

export default EventDetails;
