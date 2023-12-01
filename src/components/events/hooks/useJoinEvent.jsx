"use client";

import { useUser } from "@/components/user/hooks/useUser";
import { useEffect, useState } from "react";
import { JOIN_EVENT_URL } from "@/config/apiUrl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useJoinEvent = (evId) => {
  const router = useRouter();
  //console.log(evId);

  const { user } = useUser();

  const [userData, setUserData] = useState({});
  //console.log(userData); 

  useEffect(()=> {
      setUserData(localStorage.getItem('userdata'));
  }, [])
  //console.log(userData); 

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: evId.eventId,
  });
  //console.log(data);

  const [loading, setLoading] = useState(false);

  async function handleJoinData() {
    const userdatalocal = JSON.parse( userData );
    data.name = userdatalocal.name;
    data.email = userdatalocal.email;
    //console.log(JSON.stringify(data));
    //console.log(JOIN_EVENT_URL);
    setLoading(true);
    const res = await fetch(JOIN_EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const datares = await res.json();

    if (!datares) {
      setLoading(false);
      toast.error("Oops.. Error joining Event! Please contact Admin.");
      return;
    }

    setLoading(false);
    toast.success("User joined event succesfully");

    router.refresh();
  }

  return {
    loading,
    handleJoinData,
  };
};
