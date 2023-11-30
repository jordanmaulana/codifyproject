import { EventDetail } from "@/components/events/components/EventDetail";
import React from "react";
import { EVENT_URL } from "@/config/apiUrl";

async function getData(id) {
  const res = await fetch(`${EVENT_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

/// example id 6f0701e1-d61c-446c-ab04-9503a56ef46d
export default async function Page({ params }) {
  const { data } = await getData(params.id);

  return <EventDetail data={data} />;
}
