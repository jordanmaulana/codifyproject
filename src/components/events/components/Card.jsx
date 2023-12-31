"use client";
import Link from "next/link";
import Image from "next/image";
import { getDay, getMonthAbbreviation } from "@/lib/date_library";
import { Users } from "lucide-react";

export const Card = ({
  id,
  createdAt,
  updatedAt,
  name,
  description,
  location,
  date,
  isBanned,
  authorId,
  participants,
  author,
  participantsQty,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md max-w-[345px] h-full bg-white">
      <Image
        src="https://picsum.photos/345/200"
        width={345}
        height={200}
        className="rounded-t-lg"
      />
      <div className="flex gap-4 p-4 h-full">
        <div className="flex flex-col items-center mt-1">
          <div className="text-xs text-darkPurple font-bold">
            {getMonthAbbreviation(date)}
          </div>
          <div className="text-2xl font-bold">{getDay(date)}</div>
        </div>
        <div className="flex flex-col w-full h-full ">
          <div className="text-xl font-bold  line-clamp-2">{name}</div>
          <div className="text-grey line-clamp-4 text-sm grow">
            {description}
          </div>
          <div className="flex gap-1 items-center self-end mt-2">
            {participantsQty}
            <Users size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
