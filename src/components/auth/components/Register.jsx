"use client";

import { Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";
import Image from "next/image";
import { GradientButton } from "@/components/shared-ui/Gradientbutton";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="space-y-3 p-24 rounded-lg flex flex-col shadow-xl ">
      <div className="block lg:hidden">
        <div className="relative w-full h-[64px] ">
          <Image
            src="/logo.png"
            fill
            className="object-scale-down bg-gradient-to-br from-pink to-purple rounded-xl"
            alt="logo"
          />
        </div>
      </div>
      <h1 className="text-lg font-semibold">Register</h1>
      <Input name="name" label="Name" onChange={handleChange} />
      <Input name="email" label="Email Address" onChange={handleChange} />
      <Input
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
      />
      <GradientButton
        isDisabled={loading}
        clicked={handleSubmitRegister}
        title={"Register"}
      />
      <div className="flex gap-1">
        <div>Have an account ?</div>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
};
