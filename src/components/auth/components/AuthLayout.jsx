import React from "react";
import Image from "next/image";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <div className="relative hidden lg:block bg-gradient-to-br from-pink to-purple">
        <div className="absolute w-full h-full opacity-10">
          <Image src="/banner_bg.png" fill className="object-cover" alt="" />
        </div>
        <div className="flex flex-col relative w-full h-full justify-center items-center">
          <div className="relative w-[200px] h-[64px] ">
            <Image
              src="/logo.png"
              fill
              className="object-scale-down"
              alt="logo"
            />
          </div>
          <div className="text-white text-opacity-70 text-md px-36">
            Look no further! Our tickets are the simplest way for you to
            experience a live event.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <section>{children}</section>
      </div>
    </main>
  );
};
