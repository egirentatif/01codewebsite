"use client"

import { useState } from "react"

interface SocialIconProps {
  src: string
  size?: number
  href: string
  className?: string
}

const SocialIcon = ({ src, size = 48, href, className = "" }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-transform duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`w-${size} h-${size} transition-transform duration-300 object-cover`}
        style={{ 
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          filter: isHovered ? 'brightness(1.2)' : 'none'
        }}
      />
    </a>
  )
}

export default SocialIcon
