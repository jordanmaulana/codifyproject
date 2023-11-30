"use client";

import { useUser } from "@/components/user/hooks/useUser";
import { useState } from "react";
import { CREATE_EVENT_URL } from "@/config/apiUrl";

export const useCreateEvent = () => {
  const { user } = useUser();

  const [data, setData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    authorId: user?.id,
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmitData() {
    data.authorId = user?.id;
    setLoading(true);
    const res = await fetch(CREATE_EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
  }

  return {
    loading,
    handleChange,
    handleSubmitData,
  };
};
