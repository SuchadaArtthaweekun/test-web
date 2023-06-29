
import AddCircleIcon from '@mui/icons-material/AddCircle';

import React, { useState } from 'react';

interface ButtonProps {
  initialPosition: { x: number; y: number };
}

const FloatingButton: React.FC<ButtonProps> = ({ initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);

  const rimPositions = [
    { x: 0, y: 0 }, // Top-left corner
    { x: window.innerWidth, y: 0 }, // Top-right corner
    { x: 0, y: window.innerHeight }, // Bottom-left corner
    { x: window.innerWidth, y: window.innerHeight }, // Bottom-right corner
  ];

  const getClosestRimPosition = (currentPosition: { x: number; y: number }) => {
    let closestRimPosition = rimPositions[0];
    let minDistance = distance(currentPosition, rimPositions[0]);

    for (let i = 1; i < rimPositions.length; i++) {
      const currentDistance = distance(currentPosition, rimPositions[i]);
      if (currentDistance < minDistance) {
        minDistance = currentDistance;
        closestRimPosition = rimPositions[i];
      }
    }

    return closestRimPosition;
  };

  const distance = (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', ''); // Required for dragging in some browsers
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    setPosition(newPosition);
  };

  const handleDragEnd = () => {
    const closestRimPosition = getClosestRimPosition(position);
    setPosition(closestRimPosition);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        // Add styles for your floating button
      }}
    >
      <AddCircleIcon/>
    </div>
  );
};

export default FloatingButton;
