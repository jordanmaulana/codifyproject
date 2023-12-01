"use client";
import Link from "next/link";
import Image from "next/image";
import { getDay, getMonthAbbreviation } from "@/lib/date_library";

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
    <div className="rounded-lg shadow-lg max-w-[345px]">
      <Image
        src="https://picsum.photos/345/200"
        width={345}
        height={200}
        className="rounded-t-lg"
      />
      <div className="flex gap-4 p-4">
        <div className="flex flex-col items-center mt-1">
          <div className="text-xs text-darkPurple font-bold">
            {getMonthAbbreviation(date)}
          </div>
          <div className="text-2xl font-bold">{getDay(date)}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold  line-clamp-2">{name}</div>
          <div className="text-grey line-clamp-4 text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
  return (
    <div
      id={id}
      className="flex flex-row justify-between border border-gray-400 m-4 mb-0 p-4 rounded-tl-md rounded-tr-md"
    >
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-slate-700 text-sm italic break-words">
          {description}
        </div>
        <div className="text-sm pt-2">{date}</div>
        <div className="text-sm pt-2">{location}</div>

        <div className="text-sm pt-2">{createdAt}</div>
        <div className="text-sm pt-2">{updatedAt}</div>
        <div className="text-sm pt-2">{isBanned}</div>
        <div className="text-sm pt-2">{authorId}</div>
        <div className="text-sm pt-2">{participantsQty}</div>
        <Link href={`/events/${id}`} className="text-blue-600 underline">
          View Detail
        </Link>
      </div>
    </div>
  );
};
