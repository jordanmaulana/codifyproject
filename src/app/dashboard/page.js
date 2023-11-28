import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;

  const payload = verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);

  return <div>{payload.name}</div>;
}
