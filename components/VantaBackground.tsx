"use client";

import React, { useEffect, useRef } from 'react';

interface VantaOptions {
  el: HTMLElement;
  THREE: any;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  highlightColor?: number;
  midtoneColor?: number;
  baseColor?: number;
}

const VantaBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if scripts are already loaded
    if (window.THREE && window.VANTA) {
      if (containerRef.current) {
        window.VANTA.FOG({
          el: containerRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x8c7947,
          midtoneColor: 0x1a39d9,
          baseColor: 0x8038d9
        } as VantaOptions);
      }
      return;
    }

    // Tambahkan script Three.js
    const threeScript = document.createElement('script');
    threeScript.src = process.env.NEXT_PUBLIC_THREEJS_URL || 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.crossOrigin = 'anonymous';
    threeScript.async = false;
    threeScript.defer = true;
    threeScript.id = 'three-script';
    
    // Tambahkan script Vanta
    const vantaScript = document.createElement('script');
    vantaScript.src = process.env.NEXT_PUBLIC_VANTA_URL || 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js';
    vantaScript.crossOrigin = 'anonymous';
    vantaScript.async = false;
    vantaScript.defer = true;
    vantaScript.id = 'vanta-script';

    // Load scripts secara berurutan
    threeScript.onload = () => {
      document.head.appendChild(vantaScript);
    };

    vantaScript.onload = () => {
      if (containerRef.current) {
        window.VANTA.FOG({
          el: containerRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x8c7947,
          midtoneColor: 0x1a39d9,
          baseColor: 0x8038d9
        } as VantaOptions);
      }
    };

    document.head.appendChild(threeScript);

    return () => {
      // Cleanup script yang ditambahkan
      const threeScript = document.getElementById('three-script');
      const vantaScript = document.getElementById('vanta-script');
      if (threeScript) threeScript.remove();
      if (vantaScript) vantaScript.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default VantaBackground;
