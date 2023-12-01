import { MyEvents } from "@/components/events/components/MyEvents";
import React from "react";
import { EVENT_URL } from "@/config/apiUrl";
import { cookies } from "next/headers";

async function getData() {
  const cookieStore = cookies();

  const userId = cookieStore.get("userId").value;

  const res = await fetch(`${EVENT_URL}?userid=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function Page() {
  const { data } = await getData();

  return <MyEvents data={[]} />;
}
