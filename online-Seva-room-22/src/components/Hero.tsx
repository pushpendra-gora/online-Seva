import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, User } from 'lucide-react';
import { CONTACT_PUSHPENDRA, CONTACT_PIYUSH, ROOM_INFO, getWhatsAppUrl } from '../data/servicesData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#0b1f3f] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b-4 border-amber-400">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-1/4 -z-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 -z-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, intro, actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-amber-300 text-xs sm:text-sm font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>विद्यार्थियों का अपना विश्वसनीय ऑनलाइन सहायता केंद्र</span>
              <span className="bg-amber-400 text-slate-950 px-2 py-0.2 rounded-full text-xs font-black">
                {ROOM_INFO.roomNumber}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight">
              विद्यार्थियों के लिए <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                ऑनलाइन सेवा केंद्र
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              PAN Card (New & Minor to Major), छात्रवृत्ति (Scholarship), जन आधार, आधार कार्ड, SSO ID, OTR पंजीयन और APAAR ID का कार्य सही व किफायती दर पर करवाएं।
            </p>

            {/* WhatsApp Direct Action & Quick Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मुझे ऑनलाइन सेवा केंद्र (Room 22) से फॉर्म भरवाने के लिए सहायता चाहिए।')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/30 text-base transition-all hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
                <span>सीधे WhatsApp पर बात करें</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-amber-300 font-bold px-5 py-3.5 rounded-xl border border-amber-400/40 text-base transition hover:border-amber-400"
              >
                <span>सभी सेवाएँ व टोकन लिस्ट</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-700/60 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>त्रुटिरहित फॉर्म सबमिशन</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>पारदर्शी सरकारी टोकन</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{ROOM_INFO.roomNumber} में सीधा प्रवेश</span>
              </div>
            </div>

            {/* Contact Person Bar */}
            <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    {CONTACT_PUSHPENDRA.name}
                    <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                      {CONTACT_PUSHPENDRA.displayPhone}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    सहायक: {CONTACT_PIYUSH.name} ({CONTACT_PIYUSH.displayPhone})
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <a
                  href={`tel:${CONTACT_PUSHPENDRA.phone}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  कॉल करें
                </a>
                <a
                  href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मैं रूम 22 के बारे में पूछना चाहता हूँ।')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Rate Highlight Ticket */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-white to-slate-50 text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-400">
              
              {/* Decorative side ticket cutouts */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#0b1f3f] rounded-full"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#0b1f3f] rounded-full"></div>

              {/* Header inside ticket */}
              <div className="text-center pb-4 border-b-2 border-dashed border-slate-300">
                <span className="bg-amber-100 text-amber-900 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider border border-amber-300">
                  आधिकारिक सेवा शुल्क सूची
                </span>
                <h3 className="font-heading font-black text-2xl text-[#0b1f3f] mt-2">
                  विद्यार्थी रियायती दरें
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  सभी विद्यार्थियों के लिए न्यूनतम व उचित सेवा शुल्क
                </p>
              </div>

              {/* Price Tier 1: Regular */}
              <div className="py-5 flex items-center justify-between border-b border-dashed border-slate-300">
                <div>
                  <div className="text-xs uppercase font-extrabold text-slate-500 tracking-wide">
                    सामान्य सेवा शुल्क
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    प्रत्येक ऑनलाइन काम / फॉर्म
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-0.5">
                    ✓ त्रुटिरहित फॉर्म सबमिशन
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-heading font-black text-4xl text-[#0b1f3f]">
                    ₹25
                  </div>
                  <div className="text-xs text-slate-500 font-medium">प्रति कार्य</div>
                </div>
              </div>

              {/* Price Tier 2: First Time Student */}
              <div className="py-5 flex items-center justify-between bg-amber-50/80 -mx-6 px-6 sm:-mx-8 sm:px-8 border-b-2 border-dashed border-amber-300">
                <div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
                    विशेष छूट (Special Offer)
                  </span>
                  <div className="text-sm font-extrabold text-slate-900 mt-1">
                    पहली बार आने वाले विद्यार्थियों हेतु
                  </div>
                  <div className="text-xs text-amber-800 font-semibold">
                    ₹5 की सीधी छूट प्रति कार्य
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-heading font-black text-4xl text-amber-600 bg-amber-200/80 px-2 py-0.5 rounded-xl inline-block">
                    ₹20
                  </div>
                  <div className="text-xs text-slate-600 font-bold">प्रथम कार्य शुल्क</div>
                </div>
              </div>

              {/* Clear Token / Govt Fee Note */}
              <div className="pt-4 space-y-2">
                <div className="bg-slate-100 rounded-xl p-3 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="text-amber-600 font-black">●</span>
                    टोकन / पोर्टल / सरकारी शुल्क अलग से:
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    यह ₹25/₹20 शुल्क केवल फॉर्म भरने की मदद (Service Charge) का है। यदि किसी फॉर्म पर सरकारी टोकन या चालान लागू है (जैसे PAN ₹107, OTR ₹400 आदि), तो वह सरकारी फीस सीधे पोर्टल पर देय होगी। छात्रवृत्ति जैसे फॉर्मों पर टोकन बिल्कुल <b>₹0 (फ्री)</b> है।
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
