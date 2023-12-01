import React from "react";
import { Card } from "@/components/events/components/Card";
import { EVENT_URL } from "@/config/apiUrl";
import Link from "next/link";
import { EventHeader } from "./EventHeader";
import { Footer } from "@/components/shared-ui/Footer";

async function getEvents() {
  //console.log(GET_EVENT_URL);
  const res = await fetch(EVENT_URL, {
    cache: "no-store",
  });
  const result = await res.json();
  return result;
}

export default async function ListEvent() {
  const { data } = await getEvents();

  const newestEvent = data[0];

  return (
    <div>
      <EventHeader data={newestEvent} />
      <div id="explore" className="max-w-5xl m-auto mb-16">
        <h1 className="text-headerText text-4xl font-bold mt-16 mb-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 m-1 gap-7 max-h-screen  overflow-y-auto">
          {data?.map((data) => {
            return (
              <Link href={`/events/${data.id}`}>
                <Card
                  key={data.id}
                  id={data.id}
                  createdAt={data.createdAt}
                  updatedAt={data.updatedAt}
                  name={data.name}
                  description={data.description}
                  location={data.location}
                  date={data.date}
                  isBanned={data.isBanned}
                  authorId={data.authorId}
                  participants={data.participants}
                  author={data.author}
                  participantsQty={data.participants.length}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
