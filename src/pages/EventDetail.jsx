import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch event" }), {
      status: 500,
    });
  }
  return response;
};

export const action = async ({ request, params }) => {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event" }), {
      status: 500,
    });
  }
  return redirect("/events");
};
