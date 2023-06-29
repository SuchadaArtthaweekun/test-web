import ChatIcon from "@mui/icons-material/Chat";
import React, { useState } from "react";
import "./FloatingCss.css";
import Draggable from "react-draggable";
import Fab from '@mui/material/Fab';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

interface FloatingButtonProps {
  onOpenPopover: any;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({ onOpenPopover }) => {
  const [isPlaying, setPlaying] = useState(false);

  const handleFabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPlaying(!isPlaying);
  };
  return (

    <Draggable handle=".fab-drag-handle">
    <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
      <Fab
        color="primary"
        onClick={(e)=>{
          handleFabClick(e)
          onOpenPopover(e)
        }}
        className="fab-drag-handle"
      >
        {isPlaying ? <MessageIcon /> : <SendIcon />}
      </Fab>
    </div>
  </Draggable>

  //   <Draggable>
  //     <button className="floating-button" onClick={onOpenPopover}>
  //       <ChatIcon />
  //     </button>
  //   </Draggable>
  );
};

export default FloatingButton;
