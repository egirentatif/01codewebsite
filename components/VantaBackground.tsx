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
    // Tambahkan script Three.js
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.async = true;
    threeScript.onload = () => {
      // Setelah Three.js dimuat, tambahkan script Vanta
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js';
      vantaScript.async = true;
      vantaScript.onload = () => {
        if (containerRef.current) {
          // Inisialisasi Vanta dengan konfigurasi yang diinginkan
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
      document.body.appendChild(vantaScript);
    };
    document.body.appendChild(threeScript);

    return () => {
      // Cleanup script yang ditambahkan
      const scripts = document.querySelectorAll('script');
      scripts.forEach((script: HTMLScriptElement) => {
        if (script.src.includes('three.min.js') || script.src.includes('vanta.fog.min.js')) {
          script.remove();
        }
      });
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
