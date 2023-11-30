"use client";
import React from "react";
import Image from "next/image";
import { useEventDetail } from "../hooks/useEventDetail";
import { Header } from "@/components/shared-ui/Header";
import { Footer } from "@/components/shared-ui/footer";

export const EventDetail = ({ id }) => {
  const { data } = useEventDetail(id);

  return (
    <div className="relative bg-gradient-to-br from-pink to-purple">
      <div className="relative z-10">
        <Header />
        <main className="p-32">
          <img
            src="https://picsum.photos/800/600"
            className="rounded-lg shadow-lg"
          />
        </main>
        <Footer />
      </div>
      <div className="absolute top-0 w-full h-full opacity-10 -z-0">
        <Image src="/banner_bg.png" fill className="object-cover" alt="" />
      </div>
    </div>
  );
};
