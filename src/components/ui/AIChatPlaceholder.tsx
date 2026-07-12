"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export function AIChatPlaceholder() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5 }}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-luxury-lg hover:bg-primary transition-colors"
        aria-label="AI Assistant"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-4 z-50 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl bg-white dark:bg-navy-light shadow-luxury-lg border border-gray-100 dark:border-white/10 sm:left-6 sm:max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-navy p-4 text-white">
              <p className="font-heading font-semibold">NVRR Assistant</p>
              <p className="text-xs text-white/60">AI-powered project advisor</p>
            </div>
            <div className="p-4 h-48 flex items-center justify-center">
              <p className="text-sm text-navy/50 dark:text-white/50 text-center">
                AI Chat Assistant coming soon. For immediate assistance, please use WhatsApp or our contact form.
              </p>
            </div>
            <div className="border-t border-gray-100 dark:border-white/10 p-3 flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about our projects..."
                className="flex-1 rounded-lg border border-gray-200 dark:border-white/10 bg-surface dark:bg-navy px-3 py-2 text-sm outline-none"
                disabled
              />
              <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-white" disabled>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
