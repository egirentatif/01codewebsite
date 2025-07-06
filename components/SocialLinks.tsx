"use client"

import SocialIcon from './SocialIcon'

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialIcon 
        src="/animations/instagram.webm"
        href="https://instagram.com"
        size={48}
        className="hover:scale-110 transition-transform duration-300"
      />
      <SocialIcon 
        src="/animations/telegram.webm"
        href="https://telegram.com"
        size={48}
        className="hover:scale-110 transition-transform duration-300"
      />
      <SocialIcon 
        src="/animations/whatsapp.webm"
        href="https://whatsapp.com"
        size={48}
        className="hover:scale-110 transition-transform duration-300"
      />
    </div>
  )
}
