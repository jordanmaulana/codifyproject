"use client";
import Link from "next/link";
import Image from "next/image";

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
    <div>
      <Image
        src="https://picsum.photos/345/200"
        className="rounded-lg shadow-lg"
        width={345}
        height={200}
      />
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
