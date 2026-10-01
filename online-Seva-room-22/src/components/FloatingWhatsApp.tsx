import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT_PUSHPENDRA, CONTACT_PIYUSH, ROOM_INFO, getWhatsAppUrl } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating WhatsApp Button for Tablet & Desktop */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
        {/* Helper Tooltip Badge */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-xl border border-slate-700 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Room 22 • पुष्पेंद्र से सीधे WhatsApp पर पूछें</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* The Action Button */}
        <a
          href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मुझे ऑनलाइन सेवा केंद्र (Room 22) से सहायता चाहिए।')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-4 sm:px-5 py-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 group"
          title="पुष्पेंद्र से WhatsApp पर चैट करें"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline font-heading text-sm">
            WhatsApp सहायता (Room 22)
          </span>
        </a>
      </div>

      {/* Sticky Bottom Quick Action Bar for Mobile Screens */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b1f3f] border-t border-amber-500/40 px-3 py-2 flex items-center gap-2 shadow-2xl pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={`tel:${CONTACT_PUSHPENDRA.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-800 active:bg-slate-700 text-white font-bold py-3 px-3 rounded-xl text-xs"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call: {CONTACT_PUSHPENDRA.displayPhone}</span>
        </a>

        <a
          href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मुझे सेवा केंद्र से जानकारी चाहिए।')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-500 text-white font-black py-3 px-3 rounded-xl text-xs shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp चैट</span>
        </a>
      </div>
    </>
  );
};
