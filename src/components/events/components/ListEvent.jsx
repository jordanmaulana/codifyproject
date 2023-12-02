import React from "react";
import { Card } from "@/components/events/components/Card";
import { EVENT_URL } from "@/config/apiUrl";
import Link from "next/link";
import { EventHeader } from "./EventHeader";
import { Footer } from "@/components/shared-ui/Footer";
import Image from "next/image";
import { Button } from "@nextui-org/react";

async function getEvents() {
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
      <main id="explore" className="max-w-5xl m-auto mb-16">
        <h1 className="text-headerText text-4xl font-bold mt-16 mb-2 px-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 m-1 gap-7 max-h-screen overflow-y-auto p-8">
          {data?.map((data) => {
            return (
              <Link href={`/events/${data.id}`} key={data.id}>
                <Card
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
      </main>
      <div className="mt-16 flex justify-center gap-8  items-end relative">
        <Image src="/meeting.png" width={545} height={303} />
        <div>
          <div className="text-4xl font-bold">Make your own event!</div>
          <div className="max-w-md mt-2">
            Get ready to unleash your creativity, make waves, and own the
            spotlight in your very own blockbuster event! 🚀✨
          </div>
          <Link href={"/events/myevents"}>
            <Button className="bg-red w-72 h-14 text-white rounded-[50px] font-bold mt-5 mb-8">
              Create Event
            </Button>
          </Link>
        </div>
        <div className="w-full h-64 bg-lightPurple absolute bottom-0 -z-10" />
      </div>
      <Footer />
    </div>
  );
}
