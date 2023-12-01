import React from "react";
import { Card } from "@/components/events/components/Card";
import { EVENT_URL } from "@/config/apiUrl";

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

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-full">
          <div className="p-2 pl-6 text-lg font-semibold bg-slate-100">
            <h1>Event Lists </h1>
          </div>
          <div className="flex flex-row justify-center h-screen bg-slate-100">
            <div className="max-h-screen">
              <div className="grid grid-cols-1 lg:grid-cols-3 m-1 gap-7">
                {data?.map((data) => {
                  return (
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
