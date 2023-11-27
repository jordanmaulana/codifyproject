"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
    author }) => {
  const router = useRouter();
  

  async function handleDelete() {
    var result = confirm("Want to delete?");
    if (result) {
        //Logic to delete the item
        /* await fetch(`https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([`${id}`])
        });
        router.refresh(); */
    }
    
  }

  async function handleUpdate() {
    /* const res = await fetch(`https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr`, {
        method: "PUT",
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({"_id":`${id}`,"name":`${name}`,"tanggal":`${tanggal}`,"jenis":`${jenis}`,"keterangan":currentDesc})
      //body: JSON.stringify({ content: currentContent }),
    });
    const data = await res.json();
    setOnEdit(false); */
    router.refresh();
  }

  return (
    <div>
    <div id={id} className="flex flex-row justify-between border border-gray-400 m-4 mb-0 p-4 rounded-tl-md rounded-tr-md">
        <div>
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-slate-700 text-sm italic break-words">{description}</div>
            <div className="text-sm font-mono pt-2">{date}</div>
            <div className="text-sm font-mono pt-2">{location}</div>
            
            <div className="text-sm font-mono pt-2">{createdAt}</div>
            <div className="text-sm font-mono pt-2">{updatedAt}</div>
            <div className="text-sm font-mono pt-2">{isBanned}</div>
            <div className="text-sm font-mono pt-2">{authorId}</div>
        </div>
        </div>
        
    </div>
  );
};
