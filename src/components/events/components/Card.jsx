"use client";

export const Card = ({ id,
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
    participantsQty
   }) => {
  return (
    <div>
    <div id={id} className="flex flex-row justify-between border border-gray-400 m-4 mb-0 p-4 rounded-tl-md rounded-tr-md">
        <div>
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-slate-700 text-sm italic break-words">{description}</div>
            <div className="text-sm pt-2">{date}</div>
            <div className="text-sm pt-2">{location}</div>

            <div className="text-sm pt-2">{createdAt}</div>
            <div className="text-sm pt-2">{updatedAt}</div>
            <div className="text-sm pt-2">{isBanned}</div>
            <div className="text-sm pt-2">{authorId}</div>
            <div className="text-sm pt-2">{participantsQty}</div>
        </div>
        </div>

    </div>
  )
};
