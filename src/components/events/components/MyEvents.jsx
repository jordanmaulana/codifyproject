import { Footer } from "@/components/shared-ui/Footer";
import { Card } from "./Card";
import React from "react";
import Link from "next/link";
import { EventHeader } from "./EventHeader";
import { CreateEvent } from "./CreateEvent";

export const MyEvents = ({ data }) => {
  return (
    <div>
      <EventHeader />
      <div className="flex gap-16 divide-x-2 items-start">
        <div id="explore" className="mx-24 mb-16 w-full flex-1">
          <h1 className="text-headerText text-4xl font-bold mt-16 mb-8">
            My Events
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 m-1 gap-7 max-h-screen  overflow-y-auto">
            {data.length > 0 ? (
              data?.map((data) => {
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
              })
            ) : (
              <div>
                Time to shake things up! No event? No problem! Let's craft an
                epic experience from scratch. Get ready to unleash your
                creativity, make waves, and own the spotlight in your very own
                blockbuster event! 🚀✨
              </div>
            )}
          </div>
        </div>

        <div className="px-24 ">
          <h1 className="text-headerText text-4xl font-bold mt-16 mb-8">
            Create Event
          </h1>
          <CreateEvent />
        </div>
      </div>
      <Footer />
    </div>
  );
};
