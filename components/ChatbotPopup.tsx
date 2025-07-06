'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

interface QuickAction {
  icon: string;
  label: string;
  action: string;
}

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const greetings = {
    en: 'Hi there! How can we assist you?',
    id: 'Halo! Ada yang bisa kami bantu?'
  } as const;

  const quickActions = {
    en: [
      { icon: '💬', label: 'Ask about 01Bot', action: '01Bot' },
      { icon: '🛡️', label: 'Ask about 01Shield', action: '01Shield' },
      { icon: '📄', label: 'See Pricing', action: 'Pricing' }
    ],
    id: [
      { icon: '💬', label: 'Tanya tentang 01Bot', action: '01Bot' },
      { icon: '🛡️', label: 'Tanya tentang 01Shield', action: '01Shield' },
      { icon: '📄', label: 'Lihat Harga', action: 'Pricing' }
    ]
  } as const;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#12A6F5] to-[#0E76B3] text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        💬
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              className="fixed bottom-24 right-8 w-[380px] max-w-[90vw] bg-white rounded-2xl shadow-xl p-4 dark:bg-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{greetings[language]}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ✖️
                </motion.button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                {quickActions[language].map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      // Handle action click
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <span>{action.icon}</span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <textarea
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/20"
                  placeholder="Type your message..."
                  rows={3}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
