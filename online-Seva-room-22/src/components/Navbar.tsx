import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { CONTACT_PUSHPENDRA, CONTACT_PIYUSH, ROOM_INFO, getWhatsAppUrl } from '../data/servicesData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                  ऑनलाइन सेवा <span className="text-amber-400">केंद्र</span>
                </span>
                <span className="hidden sm:inline-block bg-amber-400/20 text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-400/40">
                  {ROOM_INFO.roomNumber}
                </span>
              </div>
              <p className="text-xs text-slate-300 hidden sm:block">
                विद्यार्थियों हेतु समस्त ऑनलाइन व टोकन फॉर्म सहायता
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            <a href="#services" className="text-slate-200 hover:text-amber-400 transition-colors">
              सेवाएँ एवं टोकन
            </a>
            <a href="#pricing" className="text-slate-200 hover:text-amber-400 transition-colors">
              फीस व नियम
            </a>
            <a href="#faq" className="text-slate-200 hover:text-amber-400 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-slate-200 hover:text-amber-400 transition-colors">
              संपर्क (Contact)
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_PUSHPENDRA.phone}`}
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-xl border border-slate-700 transition"
              title="पुष्पेंद्र को कॉल करें"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{CONTACT_PUSHPENDRA.displayPhone}</span>
            </a>

            <a
              href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मुझे ऑनलाइन सेवा केंद्र (Room 22) से सहायता चाहिए।')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-950/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp चैट</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              📋 सभी सेवाएँ एवं टोकन लिस्ट
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              💰 फीस व टोकन नियम
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              ❓ सवाल और जवाब (FAQ)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200"
            >
              📞 संपर्क (Contact Details)
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मुझे सेवा केंद्र से जानकारी चाहिए।')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              पुष्पेंद्र को सीधे WhatsApp करें
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
