import React from "react";
import { CustomAvatar } from "./CustomAvatar";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between py-4 px-8 items-center text-white ">
      <Link href="/events">
        <div className="text-lg">
          <span className="font-extrabold text-lg">Codi</span>
          <span className="text-lg">vent</span>
        </div>
      </Link>
      <div className="flex gap-8 items-center">
        <Link href="/events">Explore</Link>
        <Link href="/events/myevents">My Events</Link>
        <Link href="#footer">Contact Us</Link>
        <CustomAvatar />
      </div>
    </header>
  );
};
