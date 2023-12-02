"use client";

import { useState } from "react";
import { LOGIN_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSubmitLogin() {
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status !== 200) {
      setLoading(false);
      toast.error("Error login!");
      return;
    }

    Cookies.set("token", data.token);
    Cookies.set("userId", data.data.id);
    localStorage.setItem("userdata", JSON.stringify(data.data));

    setLoading(false);
    toast.success("Login succesfully, redirecting...");
    setTimeout(() => router.push("/events"), 2000);
  }

  return {
    loading,
    handleChange,
    handleSubmitLogin,
    togglePasswordVisibility,
    isPasswordVisible,
  };
};
