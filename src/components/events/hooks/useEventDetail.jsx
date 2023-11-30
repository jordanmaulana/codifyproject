"use client";
import React from "react";
import { useState, useEffect } from "react";

export const useEventDetail = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(data);
  }, []);

  return {
    data,
  };
};
