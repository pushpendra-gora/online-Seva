import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Globe } from 'lucide-react';
import { CONTACT_PUSHPENDRA, CONTACT_PIYUSH, ROOM_INFO, getWhatsAppUrl } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, isHindi } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#0b1f3f] text-white shadow-lg border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Room Badge */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400 text-slate-950 font-extrabold flex items-center justify-center text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform font-heading">
              22
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-wide text-white">
                  {isHindi ? (
                    <>ऑनलाइन सेवा <span className="text-amber-400">केंद्र</span></>
                  ) : (
                    <>Online Seva <span className="text-amber-400">Kendra</span></>
                  )}
                </span>
                <span className="hidden sm:inline-block bg-amber-400/20 text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-400/40">
                  {ROOM_INFO.roomNumber}
                </span>
              </div>
              <p className="text-xs text-slate-300 hidden sm:block">
                {t.brandSubtitle}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            <a href="#services" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t.navServices}
            </a>
            <a href="#pricing" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t.navPricing}
            </a>
            <a href="#calculator" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t.navCalculator}
            </a>
            <a href="#faq" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t.navFaq}
            </a>
            <a href="#contact" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t.navContact}
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Language Toggle in Navbar */}
            <div className="flex items-center bg-slate-800/90 rounded-xl p-1 border border-slate-700 mr-1">
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  isHindi ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
                title="हिंदी में देखें"
              >
                🇮🇳 HI
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  !isHindi ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
                title="View in English"
              >
                🇬🇧 EN
              </button>
            </div>

            <a
              href={`tel:${CONTACT_PUSHPENDRA.phone}`}
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-xl border border-slate-700 transition"
              title={t.callPushpendra}
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{CONTACT_PUSHPENDRA.displayPhone}</span>
            </a>

            <a
              href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, t.whatsappDirectMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-950/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.whatsappChat}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language switch & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  isHindi ? 'bg-amber-400 text-slate-950' : 'text-slate-300'
                }`}
              >
                HI
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  !isHindi ? 'bg-amber-400 text-slate-950' : 'text-slate-300'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07152b] border-t border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-slate-800 text-xs text-amber-300 font-bold">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {ROOM_INFO.roomNumber}
            </span>
            <span>{ROOM_INFO.timings}</span>
          </div>

          <div className="grid gap-2 text-base font-semibold">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              📋 {t.navServices}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              💰 {t.navPricing}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              🧮 {t.navCalculator}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              ❓ {t.navFaq}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              📞 {t.navContact}
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, t.whatsappDirectMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              {isHindi ? 'Pushpendra को सीधे WhatsApp करें' : 'WhatsApp Pushpendra Directly'}
            </a>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${CONTACT_PUSHPENDRA.phone}`}
                className="flex items-center justify-center gap-1.5 bg-slate-800 text-white py-2 rounded-lg font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Pushpendra
              </a>
              <a
                href={`tel:${CONTACT_PIYUSH.phone}`}
                className="flex items-center justify-center gap-1.5 bg-slate-800 text-white py-2 rounded-lg font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Piyush
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
