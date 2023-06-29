import ChatIcon from "@mui/icons-material/Chat";
import React, { useState } from "react";
import "./FloatingCss.css";
import Draggable from "react-draggable";

interface FloatingButtonProps {
  onOpenPopover: any;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({ onOpenPopover }) => {
  return (
    <Draggable>
      <button className="floating-button" onClick={onOpenPopover}>
        <ChatIcon />
      </button>
    </Draggable>
  );
};

export default FloatingButton;
