"use client";

import { GradientButton } from "@/components/shared-ui/GradientButton";
import { Button } from "@nextui-org/react";
import React from "react";
import { useJoinEvent } from "../hooks/useJoinEvent";

export const JoinEvent = (eventId) => {
    //console.log(eventId);
  const { loading, handleJoinData } = useJoinEvent(eventId);

  return (
    <Button className="bg-red w-44 text-white rounded-[50px]" onClick={handleJoinData}>
              Join
            </Button>
    
  );
};
