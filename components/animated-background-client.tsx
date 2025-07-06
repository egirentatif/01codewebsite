"use client"

import dynamic from 'next/dynamic'

export const AnimatedBackground = dynamic(
  () => import('./animated-background').then((mod) => mod.AnimatedBackground),
  { ssr: false }
)
