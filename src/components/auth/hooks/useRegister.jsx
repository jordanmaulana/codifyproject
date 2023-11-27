"use client";

import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  async function handleSubmitRegister() {
    const { name, email, password } = registerData;
    let error = "";
    console.log(name);
    console.log(email);
    console.log(password);

    if (!name) error += "Name must not be empty\n";
    if (!email) error += "Email must not be empty\n";
    if (!password) error += "Password must not be empty";

    if (error) {
      alert(error);
      return;
    }

    setLoading(true);

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!data) {
      setLoading(false);
      toast.error("Error registering!");
      return;
    }

    setLoading(false);
    toast.success("User registered, please login...");
  }

  return { loading, handleChange, handleSubmitRegister };
};
