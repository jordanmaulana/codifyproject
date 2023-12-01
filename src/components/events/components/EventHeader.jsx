import React from "react";
import Image from "next/image";
import { Header } from "@/components/shared-ui/Header";
import { Button } from "@nextui-org/react";
import { Calendar, MapPin } from "lucide-react";
import { capitalizeFirstLetters } from "@/lib/string_library";
import Link from "next/link";
import { Users } from "lucide-react";

export async function EventHeader({ data }) {
  return (
    <div className="relative bg-gradient-to-br from-pink via-purple to-purple">
      <div className="relative z-10">
        <Header />
        <Content data={data} />
      </div>
      <div className="absolute top-0 w-full h-full opacity-10 -z-0">
        <Image src="/banner_bg.png" fill className="object-cover" alt="" />
      </div>
    </div>
  );
}

const Content = ({ data }) => {
  if (!data) return <div />;
  return (
    <div className="p-16 flex gap-16 text-white">
      <Image
        src="https://picsum.photos/636/476"
        width={636}
        height={476}
        className="rounded-lg shadow-lg"
      />

      <div className="flex flex-col gap-8 py-8">
        <div className="text-5xl font-bold">{data?.name}</div>
        <div>{data?.description}</div>

        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <Calendar size={18} />
            {data?.date}
          </div>
          <div className="flex gap-2  items-center">
            <MapPin size={18} />
            {capitalizeFirstLetters(data?.location)}
          </div>
          <div className="flex gap-2  items-center">
            {data?.participants.length}
            <Users size={18} />
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="bg-red w-44 h-14 text-white rounded-[50px]">
            Join
          </Button>
          <Link href={`/events/${data.id}`}>
            <Button
              className="w-44 h-14 text-white rounded-[50px]"
              variant="bordered"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
