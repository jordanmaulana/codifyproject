"use client";

import { GradientButton } from "@/components/shared-ui/GradientButton";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import { useCreateEvent } from "../hooks/useCreateEvent";

export const CreateEvent = () => {
  const { loading, handleChange, handleSubmitData } = useCreateEvent();

  return (
    <main className="flex flex-col gap-4 max-w-xs m-auto">
      <Input
        name="name"
        type="email"
        label="Event Name"
        className="w-72"
        onChange={handleChange}
      />
      <Textarea
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
        <GradientButton
          title={"SUBMIT"}
          clicked={handleSubmitData}
          isDisabled={loading}
        />
      </div>
    </main>
  );
};
