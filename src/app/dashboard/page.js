import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { CustomAvatar } from "@/components/shared-ui/CustomAvatar";

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;

  const payload = verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);

  return (
    <div>
      <CustomAvatar name={payload.name} role={payload.role} />
    </div>
  );
}
