import React from "react";

export const Footer = () => {
  return (
    <footer className="text-center bg-black px-8 py-4 w-full">
      <div className="flex justify-between items-end text-white">
        <div className="gap-2 flex">
          <p> Special Thanks to</p>
          <a
            href="https://www.devscale.id/"
            target="_blank"
            className="underline text-blue-500"
          >
            devscale.id
          </a>
          ❤️
        </div>

        <p className="font-xs italic">
          Codify: Bintang Koesoema, Jordan Maulana, Rifqi Izzatur
        </p>

        <div className="flex gap-2">
          <p>Design by</p>
          <a
            href="https://www.figma.com/community/file/1090519574420411612/website-event-ticketing"
            target="_blank"
            className="underline text-blue-500"
          >
            Avi Yansah
          </a>
        </div>
      </div>
    </footer>
  );
};
