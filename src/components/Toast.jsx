import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-obsidian-900 border border-gold-500 rounded-lg px-6 py-3.5 shadow-2xl flex items-center gap-3 animate-[fade-in-up_0.3s_ease]">
      <CheckCircle2 size={18} className="text-gold-400 flex-shrink-0" />
      <span className="text-xs sm:text-sm text-white font-medium">
        {message}
      </span>
    </div>
  );
}

