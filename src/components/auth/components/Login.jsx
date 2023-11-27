"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export const Login = () => {
  const {
    loading,
    handleChange,
    handleSubmitLogin,
    toggleVisibility,
    isVisible,
  } = useLogin();

  return (
    <main className="space-y-3 p-24 rounded-lg flex flex-col shadow-xl">
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
      <h1 className="text-lg font-semibold">Log in</h1>
      <Input name="email" type="email" label="Email Address" />
      <Input
        name="password"
        label="Password"
        onChange={handleChange}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? <EyeOff /> : <Eye />}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />
      <Button
        isDisabled={loading}
        className="bg-gradient-to-br from-pink to-purple text-white"
        onClick={handleSubmitLogin}
      >
        Login
      </Button>
      <div className="flex gap-1 text-sm">
        <div>Don't have an account ?</div>
        <Link href="/register" className="text-blue-600 underline">
          Register here
        </Link>
      </div>
    </main>
  );
};