"use client";

import dynamic from 'next/dynamic';

const DynamicVantaBackground = dynamic(() => import('./VantaBackground'), {
  ssr: false
});

export default function ClientVantaBackground() {
  return <DynamicVantaBackground />;
}
