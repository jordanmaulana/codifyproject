"use client";

import { Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";
import Image from "next/image";
import { GradientButton } from "@/components/shared-ui/GradientButton";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="space-y-3 p-16 rounded-lg flex flex-col shadow-xl ">
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
      <Input
        name="name"
        label="Name"
        onChange={handleChange}
        className="w-72"
      />
      <Input
        name="email"
        label="Email Address"
        onChange={handleChange}
        className="w-72"
      />
      <Input
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
        className="w-72"
      />
      <div className="mt-8" />

      <GradientButton
        className="mt-16"
        isDisabled={loading}
        clicked={handleSubmitRegister}
        title={"Register"}
      />
      <div className="flex gap-1 text-sm justify-center">
        <div>Have an account ?</div>
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>
      </div>
    </main>
  );
};
