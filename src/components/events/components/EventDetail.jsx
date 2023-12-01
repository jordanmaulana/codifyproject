"use client";
import React from "react";
import Image from "next/image";
import { Header } from "@/components/shared-ui/Header";
import { Footer } from "@/components/shared-ui/Footer";
import { Button } from "@nextui-org/react";
import { Calendar, MapPin } from "lucide-react";
import { JoinEvent } from "./JoinEvent";


export async function EventDetail({ data }) {
  //console.log({data});
  return (
    <div className="relative bg-gradient-to-br from-pink via-purple to-purple ">
      <div className="relative z-10">
        <Header />
        <main className="p-32 flex gap-16 text-white">
          <Image
            src="https://picsum.photos/800/600"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-8 py-8">
            <div className="text-5xl font-bold">{data?.name}</div>
            <div>{data?.description}</div>

            <div className="flex gap-4">
              <div className="flex gap-2">
                <Calendar />
                {data?.date}
              </div>
              <div className="flex gap-2">
                <MapPin />
                {data?.location}
              </div>
            </div>
            <JoinEvent eventId={data?.id}/>
            
          </div>
        </main>
        <Footer />
      </div>
      <div className="absolute top-0 w-full h-full opacity-10 -z-0">
        <Image src="/banner_bg.png" fill className="object-cover" alt="" />
      </div>
    </div>
  );
}
