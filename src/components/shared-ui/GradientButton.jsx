import React from "react";
import { Button } from "@nextui-org/react";

export const GradientButton = ({ isDisabled, clicked, title }) => {
  return (
    <Button
      isDisabled={isDisabled}
      className="bg-gradient-to-br from-pink to-purple text-white"
      onClick={clicked}
    >
      {title}
    </Button>
  );
};