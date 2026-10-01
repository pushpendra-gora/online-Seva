import React from 'react';
import { Globe, Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROOM_INFO } from '../data/servicesData';

export const LanguageSelectModal: React.FC = () => {
  const { isModalOpen, closeModal, selectLanguageAndClose, language } = useLanguage();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border-2 border-amber-400 text-slate-900 relative my-6 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-modal-title"
      >
        
        {/* Optional Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition"
          aria-label="Close language selector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header with Brand */}
        <div className="bg-[#0b1f3f] text-white p-6 sm:p-7 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{ROOM_INFO.roomNumber} • ऑनलाइन सेवा केंद्र</span>
          </div>

          <h2
            id="language-modal-title"
            className="text-2xl sm:text-3xl font-black font-heading tracking-tight"
          >
            अपनी भाषा चुनें <br />
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl">
              Select Your Language
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
            वेबसाइट को अपनी सुविधानुसार हिंदी या अंग्रेज़ी में देखने के लिए नीचे दिए गए विकल्प पर क्लिक करें।
          </p>
        </div>

        {/* Modal Body: Two Large Language Options */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Option 1: Hindi */}
          <button
            type="button"
            onClick={() => selectLanguageAndClose('hi')}
            className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 group ${
              language === 'hi'
                ? 'bg-amber-50/90 border-amber-500 shadow-md ring-2 ring-amber-300/60'
                : 'bg-white border-slate-200 hover:border-amber-400 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl shrink-0 group-hover:scale-110 transition-transform">
                🇮🇳
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-xl text-slate-900 group-hover:text-[#0b1f3f]">
                    हिंदी (Hindi)
                  </span>
                  {language === 'hi' && (
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                      सक्रिय / Active
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-snug">
                  समस्त सेवाएँ, सरकारी टोकन, डाक्यूमेंट्स व फीस हिंदी में देखें।
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-amber-400 text-slate-950 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 font-bold" />
            </div>
          </button>

          {/* Option 2: English */}
          <button
            type="button"
            onClick={() => selectLanguageAndClose('en')}
            className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 group ${
              language === 'en'
                ? 'bg-blue-50/90 border-blue-600 shadow-md ring-2 ring-blue-300/60'
                : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl shrink-0 group-hover:scale-110 transition-transform">
                🇬🇧
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-xl text-slate-900 group-hover:text-[#0b1f3f]">
                    English
                  </span>
                  {language === 'en' && (
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-snug">
                  View all services, govt tokens, required documents & fees in English.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 font-bold" />
            </div>
          </button>

        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              आप बाद में भी पेज के सबसे ऊपर दिए गए बटन से कभी भी भाषा बदल सकते हैं।
            </span>
          </p>
        </div>

      </div>

    </div>
  );
};
