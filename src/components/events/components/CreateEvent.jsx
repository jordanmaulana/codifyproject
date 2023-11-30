"use client";

import { GradientButton } from "@/components/shared-ui/GradientButton";
import { Input } from "@nextui-org/react";
import React from "react";
import { useCreateEvent } from "../hooks/useCreateEvent";

export const CreateEvent = () => {
  const { handleChange, handleSubmitData } = useCreateEvent();

  return (
    <main className="space-y-3 max-w-xs m-auto">
      <Input
        name="name"
        type="email"
        label="Event Name"
        className="w-72"
        onChange={handleChange}
      />
      <Input
        name="description"
        type="text"
        label="Description"
        className="w-72"
        onChange={handleChange}
      />
      <Input
        name="location"
        type="text"
        label="Location"
        className="w-72"
        onChange={handleChange}
      />
      <Input
        name="date"
        type="text"
        label="Date"
        className="w-72"
        onChange={handleChange}
      />
      <div className="w-72 mt-4">
        <GradientButton title={"SUBMIT"} clicked={handleSubmitData} />
      </div>
    </main>
  );
};
