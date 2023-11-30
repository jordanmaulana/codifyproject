"use client";

import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { GradientButton } from "@/components/shared-ui/GradientButton";

export const Login = () => {
  const {
    loading,
    handleChange,
    handleSubmitLogin,
    togglePasswordVisibility,
    isPasswordVisible,
  } = useLogin();

  return (
    <main className="space-y-3 p-16 rounded-lg flex flex-col shadow-xl">
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
      <Input
        name="email"
        type="email"
        label="Email Address"
        onChange={handleChange}
        className="w-72"
      />
      <Input
        name="password"
        label="Password"
        onChange={handleChange}
        className="w-72"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOff /> : <Eye />}
          </button>
        }
        type={isPasswordVisible ? "text" : "password"}
      />
      <div className="mt-8" />
      <GradientButton
        isDisabled={loading}
        clicked={handleSubmitLogin}
        title={"Login"}
      />
      <div className="flex gap-1 text-sm justify-center">
        <div>Don't have an account?</div>
        <Link href="/register" className="text-blue-600 underline">
          Register here
        </Link>
      </div>
    </main>
  );
};
