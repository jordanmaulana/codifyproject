import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userdata"));
    setUser(userData);
  }, []);

  return { user };
};
