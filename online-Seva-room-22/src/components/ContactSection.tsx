import React from 'react';
import { Globe, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TopLanguageBanner: React.FC = () => {
  const { language, setLanguage, t, isHindi } = useLanguage();

  return (
    <div className="bg-[#050f1d] text-white border-b border-amber-400/30 text-xs py-2 px-3 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left Side: Room 22 All Time Notice */}
        <div className="flex items-center gap-2 text-slate-300 font-medium text-center sm:text-left">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs">
            {t.allTimeBanner}
          </span>
        </div>

        {/* Right Side: High Visibility Language Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] sm:text-xs">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xs:inline">{t.chooseLanguage}</span>
          </div>

          <div className="inline-flex p-0.5 rounded-full bg-slate-900 border border-slate-700 shadow-inner">
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                isHindi
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              aria-label="हिंदी भाषा चुनें"
            >
              <span>🇮🇳</span>
              <span>हिंदी</span>
            </button>

            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                !isHindi
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              aria-label="Choose English language"
            >
              <span>🇬🇧</span>
              <span>English</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
