import React from "react";
import { EventHeader } from "./EventHeader";
import Link from "next/link";
import { Button } from "@nextui-org/react";

import { Footer } from "@/components/shared-ui/Footer";
import Image from "next/image";
import { cookies } from "next/headers";

export function EventDetail({ data }) {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId").value;

  const isMyEvent = data.authorId === userId;

  let participants = <div />;
  if (isMyEvent) {
    participants = (
      <div className="my-8 px-8">
        <div className="text-headerText text-2xl font-bold">
          Participants: {data.participants.length}
        </div>
        <div className="grid grid-cols-8 mt-2">
          {data.participants.length > 0 ? (
            data?.participants.map((person) => {
              return <div>{person.name}</div>;
            })
          ) : (
            <div>
              You don't have any participants yet. You can cry in the corner T_T
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div>
      <EventHeader data={data} />
      {participants}
      <div className="mt-16 flex justify-center gap-8  items-end relative">
        <Image src="/meeting.png" width={545} height={303} />
        <div>
          <div className="text-4xl font-bold">
            {isMyEvent ? (
              <span>Create more interesting event!</span>
            ) : (
              <span>Make your own event!</span>
            )}
          </div>
          <div className="max-w-md mt-2">
            {isMyEvent ? (
              <span>
                Looks like you're doing great! Wanna try something new? 🚀✨
              </span>
            ) : (
              <span>
                Get ready to unleash your creativity, make waves, and own the
                spotlight in your very own blockbuster event! 🚀✨
              </span>
            )}
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
