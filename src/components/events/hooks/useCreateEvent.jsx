"use client";

import { useUser } from "@/components/user/hooks/useUser";
import { useState } from "react";
import { EVENT_URL } from "@/config/apiUrl";
import { useRouter } from "next/navigation";
import moment from "moment/moment";

export const useCreateEvent = () => {
  const router = useRouter();

  const { user } = useUser();

  const [data, setData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    authorId: user?.id,
  });

  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState(new Date());

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmitData() {
    data.authorId = user?.id;
    if (!validateInput()) return;
    setLoading(true);
    const res = await fetch(EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
    router.refresh();
  }

  function handleDateChange(date) {
    setDate(date);
    const formattedDate = moment(date).format("YYYY-MM-DD");
    setData({ ...data, ["date"]: formattedDate });
  }

  function validateInput() {
    let error = "";

    if (!data.name) error += "Name must not be empty\n";
    if (!data.description) error += "Description must not be empty\n";
    if (!data.location) error += "Location must not be empty\n";
    if (!data.date) error += "Date must not be empty";

    if (error) {
      alert(error);
      return false;
    }
    return true;
  }

  return {
    loading,
    handleChange,
    handleSubmitData,
    date,
    handleDateChange,
  };
};
