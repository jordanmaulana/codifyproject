import { EventDetail } from "@/components/events/components/EventDetail";
import React from "react";

/// example id 6f0701e1-d61c-446c-ab04-9503a56ef46d
export default function Page({ params }) {
  return <EventDetail id={params.id} />;
}
