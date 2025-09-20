"use client";

import confetti from "canvas-confetti";
import React, { forwardRef } from "react";

const ConfettiStars = forwardRef(function ConfettiStars(props, ref) {
  const handleClick = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="relative">
      <button
        className="confetti-stars"
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        Trigger Stars
      </button>
    </div>
  );
});

export default ConfettiStars;
