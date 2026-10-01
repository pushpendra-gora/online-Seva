import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_PUSHPENDRA, CONTACT_PIYUSH, ROOM_INFO, getWhatsAppUrl } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyToClipboard = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold mb-2">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>सीधा संपर्क (Direct Contact)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading text-[#0b1f3f]">
            कॉल करें, WhatsApp करें या सीधे Room No. 22 आएं
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            हमेशा विद्यार्थियों की मदद के लिए उपलब्ध। नीचे दिए गए नंबरों पर एक क्लिक में WhatsApp चैट शुरू करें।
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Pushpendra Gora */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 border-2 border-amber-400 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl">
              मुख्य संचालक
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-700 flex items-center justify-center font-heading font-black text-xl mb-4 border border-amber-300">
                PG
              </div>
              <h3 className="font-heading font-black text-2xl text-slate-900">
                {CONTACT_PUSHPENDRA.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mb-3">ऑनलाइन सेवा केंद्र संचालक</p>
              
              <div className="bg-white p-3 rounded-xl border border-slate-200 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">मोबाइल नंबर</span>
                  <a
                    href={`tel:${CONTACT_PUSHPENDRA.phone}`}
                    className="font-heading font-black text-xl text-[#0b1f3f] hover:text-amber-600 transition"
                  >
                    {CONTACT_PUSHPENDRA.displayPhone}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT_PUSHPENDRA.phone)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
                  title="नंबर कॉपी करें"
                >
                  {copiedPhone === CONTACT_PUSHPENDRA.phone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मुझे ऑनलाइन सेवा केंद्र से सहायता चाहिए।')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-4 rounded-xl shadow-md text-sm transition hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>पुष्पेंद्र से WhatsApp चैट</span>
              </a>

              <a
                href={`tel:${CONTACT_PUSHPENDRA.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>सीधा कॉल करें</span>
              </a>
            </div>
          </div>

          {/* Card 2: Piyush */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-slate-400 transition">
            <div className="absolute top-0 right-0 bg-slate-200 text-slate-700 text-[10px] font-bold uppercase px-3 py-1 rounded-bl-xl">
              सहायक संचालक
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-heading font-black text-xl mb-4 border border-blue-200">
                P
              </div>
              <h3 className="font-heading font-black text-2xl text-slate-900">
                {CONTACT_PIYUSH.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mb-3">ऑनलाइन सहायता दल</p>
              
              <div className="bg-white p-3 rounded-xl border border-slate-200 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">मोबाइल नंबर</span>
                  <a
                    href={`tel:${CONTACT_PIYUSH.phone}`}
                    className="font-heading font-black text-xl text-[#0b1f3f] hover:text-blue-600 transition"
                  >
                    {CONTACT_PIYUSH.displayPhone}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT_PIYUSH.phone)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
                  title="नंबर कॉपी करें"
                >
                  {copiedPhone === CONTACT_PIYUSH.phone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppUrl(CONTACT_PIYUSH.phone, 'नमस्ते पीयूष जी! मुझे सेवा केंद्र से जानकारी चाहिए।')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-4 rounded-xl shadow-md text-sm transition hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>पीयूष जी से WhatsApp चैट</span>
              </a>

              <a
                href={`tel:${CONTACT_PIYUSH.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>सीधा कॉल करें</span>
              </a>
            </div>
          </div>

          {/* Card 3: Room 22 Info */}
          <div className="bg-[#0b1f3f] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between border border-amber-400/40 relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-400/20 text-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full border border-amber-400/40">
                  स्थान (Location)
                </span>
                <MapPin className="w-5 h-5 text-amber-400 animate-bounce" />
              </div>

              <div className="text-center py-4">
                <div className="text-xs text-slate-300 uppercase tracking-widest font-bold">
                  कैंपस सहायता केंद्र
                </div>
                <div className="font-heading font-black text-5xl text-amber-400 tracking-tight my-1">
                  22
                </div>
                <div className="font-bold text-lg text-white">
                  Room Number 22
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-700 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><b>समय:</b> {ROOM_INFO.timings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>विद्यार्थियों के लिए विशेष सहायता व शांतिपूर्ण माहौल</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, 'नमस्ते पुष्पेंद्र! मैं अभी Room No. 22 आ रहा हूँ। क्या आप उपलब्ध हैं?')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 px-4 rounded-xl text-sm transition hover:scale-105 active:scale-95"
              >
                <span>रूम 22 आने से पहले मैसेज करें</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
          <p>
            <b>महत्वपूर्ण अस्वीकरण (Disclaimer):</b> यह सेवा केंद्र (Room No. 22) केवल ऑनलाइन फॉर्म भरने, डाटा प्रविष्टि, दस्तावेज स्कैनिंग एवं आवेदन प्रक्रिया में मार्गदर्शन सहायता प्रदान करता है। किसी भी सरकारी योजना, छात्रवृत्ति, पैन कार्ड, जन आधार अथवा प्रवेश परीक्षा की अंतिम स्वीकृति/सत्यापन संबंधित सरकारी विभाग एवं अधिकृत संस्था के नियमों व दस्तावेजों के आधार पर ही होती है। आधिकारिक पोर्टल/सरकारी टोकन शुल्क यदि लागू हो, तो वह सर्विस चार्ज (₹25 / पहली बार ₹20) से अलग होता है।
          </p>
        </div>

      </div>
    </section>
  );
};
