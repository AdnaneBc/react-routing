import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const title = data.get("title");
  const description = data.get("description");
  const date = data.get("date");
  const image = data.get("image");
  const eventData = { title, description, date, image };
  const response = await fetch("http://localhost:8080/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not create event" }), {
      status: 500,
    });
  }
  return redirect("/events");
};
