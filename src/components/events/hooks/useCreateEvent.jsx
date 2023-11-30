"use client";

import { useUser } from "@/components/user/hooks/useUser";
import { useState } from "react";

export const useCreateEvent = () => {
  const { user } = useUser();

  const [data, setData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    authorId: user?.id,
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
