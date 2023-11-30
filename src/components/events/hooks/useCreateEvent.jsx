"use client";

import { useState } from "react";

export const useCreateEvent = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    authorId: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmitData() {
    console.log(data);
  }

  return {
    handleChange,
    handleSubmitData,
  };
};
