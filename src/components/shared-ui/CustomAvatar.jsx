"use client";
import { useUser } from "@/components/user/hooks/useUser";
import { extractInitials, capitalizeFirstLetters } from "@/lib/string_library";

import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

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
