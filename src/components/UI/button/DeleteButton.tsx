import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteButtonProps {
  onClick: (event: any) => void;
  children: string;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, children }) => {
  return (
    <div>
      <Button
        startIcon={<DeleteIcon />}
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

export default DeleteButton;
