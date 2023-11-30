"use client";
import { useUser } from "@/components/user/hooks/useUser";

import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

function extractInitials(name) {
  if (!name) return "";
  const words = name.split(" ");
  const initials = words.map((word) => word[0].toUpperCase()).join("");
  return initials;
}

function capitalizeFirstLetters(sentence) {
  if (!sentence) return "";

  const words = sentence.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedSentence = capitalizedWords.join(" ");
  return capitalizedSentence;
}

export const CustomAvatar = () => {
  const { user } = useUser();

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="relative w-min">
          <Avatar
            name={extractInitials(user?.name)}
            className="bg-pink text-white text-sm font-semibold"
          />
          <ChevronDown
            className="absolute bottom-0 bg-slate-400 rounded-full right-0"
            size={14}
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile">
          <div className="flex gap-4 items-center">
            <Avatar
              name={extractInitials(user?.name)}
              className="bg-purple text-white text-sm font-semibold"
            />
            <div>
              <div className="text-lg font-semibold">
                {capitalizeFirstLetters(user?.name)}
              </div>
              <div className="text-xs">{user?.email}</div>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem key="logout" className="text-danger mt-2" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
