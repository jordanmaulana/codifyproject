"use client";
import { useState, useEffect } from "react";
import { EVENT_URL } from "@/config/apiUrl";

export const useEventDetail = (id) => {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await fetch(`${EVENT_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    console.log(`get event detail ${EVENT_URL}/${id}`);
    getData();
  }, []);

  return {
    data,
  };
};
