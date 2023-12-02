"use client";

import { GradientButton } from "@/components/shared-ui/GradientButton";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import { useCreateEvent } from "../hooks/useCreateEvent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CreateEvent = () => {
  const { loading, handleChange, handleSubmitData, date, handleDateChange } =
    useCreateEvent();

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
      <div className="relative">
        <DatePicker
          name="date"
          selected={date}
          onChange={handleDateChange} //only when value has changed
          className="bg-gray-100 w-72 h-16 p-2 text-sm border-0 rounded-lg focus:outline-none"
          dateFormat={"yyyy-MM-dd"}
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Date
        </label>
      </div>

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
