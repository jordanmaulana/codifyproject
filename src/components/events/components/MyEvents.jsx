import { Footer } from "@/components/shared-ui/Footer";
import { Header } from "@/components/shared-ui/Header";
import { Card } from "./Card";
import React from "react";

export const MyEvents = ({ data }) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 m-1">
        {data?.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              name={data.name}
              description={data.description}
              location={data.location}
              date={data.date}
              isBanned={data.isBanned}
              authorId={data.authorId}
              participants={data.participants}
              author={data.author}
              participantsQty={data.participants.length}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
