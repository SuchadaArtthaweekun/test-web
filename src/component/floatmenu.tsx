import ChatIcon from "@mui/icons-material/Chat";
import React, { useState } from "react";
import "./FAB/FloatingCss.css";
import Draggable from "react-draggable";

function Floatmenu() {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event: { clientX: any; clientY: any; }) => {
    setIsDragging(true);
    setDragStartPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
    if (isDragging) {
      const deltaX = event.clientX - dragStartPosition.x;
      const deltaY = event.clientY - dragStartPosition.y;
      setButtonPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));
      setDragStartPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{ position: 'relative', height: '100vh' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        style={{
          position: 'absolute',
          top: buttonPosition.y,
          left: buttonPosition.x,
        }}
        onMouseDown={handleMouseDown}
      >
        Leave
      </button>
    </div>
  );
}

export default Floatmenu;
