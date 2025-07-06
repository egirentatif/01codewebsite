"use client";

import React from 'react';

const AnimasiLogo = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <video
        src="/animations/checklist.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-16 h-16"
      />
    </div>
  );
};

export default AnimasiLogo;
