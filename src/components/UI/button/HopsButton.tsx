import React from "react";
import { Button } from "@mui/material";

interface HopsButtonProps {
  onClick?: (event: any) => void;
  children?: string;
  type?: string;
}
const HopsButton: React.FC<HopsButtonProps> = ({ onClick, children }) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          background: "black",
          color: "white"
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default HopsButton;
