import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const WA_NUMBER = '917306808867'
const WA_MESSAGE = encodeURIComponent('Hello Metro Mind Hospital, I have an enquiry and would like to connect with you.')

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" role="complementary" aria-label="WhatsApp contact">

      {/* Popup card */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-72 mb-1"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M16.004 0C7.164 0 0 7.16 0 16c0 2.824.74 5.48 2.03 7.79L0 32l8.42-2.2A15.93 15.93 0 0016 32c8.836 0 16-7.16 16-16S24.836 0 16.004 0zm0 29.2a13.1 13.1 0 01-6.7-1.83l-.48-.29-4.98 1.3 1.33-4.84-.32-.5A13.03 13.03 0 012.8 16C2.8 8.706 8.707 2.8 16 2.8S29.2 8.706 29.2 16 23.293 29.2 16 29.2zm7.23-9.77c-.4-.2-2.35-1.16-2.71-1.29-.37-.13-.63-.2-.9.2-.27.4-1.03 1.29-1.26 1.55-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.05-1.98-2.35-2.21-2.75-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.14-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.76c-.26 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34s1.43 3.87 1.63 4.14c.2.26 2.8 4.27 6.78 5.99.95.41 1.69.65 2.26.83.95.3 1.82.26 2.5.16.76-.11 2.35-.96 2.68-1.89.33-.92.33-1.7.23-1.87-.1-.16-.37-.27-.77-.47z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">Metro Mind Hospital</p>
                <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Typically replies in minutes
                </p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close WhatsApp popup"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 mb-3 leading-relaxed">
              Hello! How can we help you today? Send us a message for appointments, queries, or emergencies.
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] hover:bg-[#20c05a] text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setExpanded(v => !v)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with Metro Mind Hospital on WhatsApp"
        aria-expanded={expanded}
      >
        {/* Pulse rings */}
        {!expanded && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 delay-75" style={{ animationDelay: '0.5s' }} />
          </>
        )}

        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
                <path d="M16.004 0C7.164 0 0 7.16 0 16c0 2.824.74 5.48 2.03 7.79L0 32l8.42-2.2A15.93 15.93 0 0016 32c8.836 0 16-7.16 16-16S24.836 0 16.004 0zm0 29.2a13.1 13.1 0 01-6.7-1.83l-.48-.29-4.98 1.3 1.33-4.84-.32-.5A13.03 13.03 0 012.8 16C2.8 8.706 8.707 2.8 16 2.8S29.2 8.706 29.2 16 23.293 29.2 16 29.2zm7.23-9.77c-.4-.2-2.35-1.16-2.71-1.29-.37-.13-.63-.2-.9.2-.27.4-1.03 1.29-1.26 1.55-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.05-1.98-2.35-2.21-2.75-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.14-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.76c-.26 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34s1.43 3.87 1.63 4.14c.2.26 2.8 4.27 6.78 5.99.95.41 1.69.65 2.26.83.95.3 1.82.26 2.5.16.76-.11 2.35-.96 2.68-1.89.33-.92.33-1.7.23-1.87-.1-.16-.37-.27-.77-.47z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
