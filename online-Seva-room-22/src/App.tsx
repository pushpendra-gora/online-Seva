import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, ShieldCheck, Phone, MessageCircle, MapPin, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TokenCalculator } from './components/TokenCalculator';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SERVICES_LIST, ServiceItem, CONTACT_PUSHPENDRA, CONTACT_PIYUSH, ROOM_INFO, getWhatsAppUrl } from './data/servicesData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('सभी');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = useMemo(() => {
    return ['सभी', 'PAN Card', 'Scholarship', 'Jan Aadhaar', 'SSO & OTR', 'APAAR ID', 'Aadhaar'];
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SERVICES_LIST.filter((item) => {
      const matchCategory = selectedCategory === 'सभी' || item.category === selectedCategory;
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.englishName.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.tokenFeeDisplay.toLowerCase().includes(q) ||
        item.portalName.toLowerCase().includes(q) ||
        item.requiredDocs.some((d) => d.toLowerCase().includes(q));

      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 pb-16 sm:pb-0">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Transparency & Rules Section (Pricing overview) */}
      <section id="pricing" className="py-8 bg-amber-400 text-slate-950 border-b border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-slate-950 text-amber-400 font-extrabold flex items-center justify-center shrink-0 text-lg font-heading">
                ₹
              </span>
              <div>
                <h3 className="font-heading font-black text-xl text-slate-950">
                  स्पष्ट व पारदर्शी फीस नियम (No Hidden Charges)
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  सर्विस चार्ज: <b>₹25 प्रति काम</b> • पहली बार आने वाले छात्रों के लिए: <b>₹20 प्रति काम</b> • सरकारी/पोर्टल टोकन फीस बिल्कुल अलग
                </p>
              </div>
            </div>

            <div className="text-xs font-bold bg-slate-950 text-white px-3.5 py-2 rounded-xl shrink-0">
              ✓ 100% पारदर्शी टोकन रसीद
            </div>
          </div>
        </div>
      </section>

      {/* Services Explorer Section */}
      <section id="services" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>समस्त ऑनलाइन सेवाएँ एवं सरकारी टोकन</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-[#0b1f3f]">
              अपनी आवश्यकता अनुसार सेवा चुनें
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              हर सेवा के कार्ड में संबंधित सरकारी टोकन व फीस स्पष्ट लिखी है। सीधे जानकारी देखें या WhatsApp करें।
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs self-start md:self-end">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>कुल उपलब्ध सेवाएँ: {SERVICES_LIST.length}</span>
          </div>
        </div>

        {/* Filter Controls: Search & Category Chips */}
        <div className="space-y-4 mb-8">
          
          {/* Search Input Box */}
          <div className="relative max-w-xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="काम या दस्तावेज खोजें (जैसे: PAN, छात्रवृत्ति, Aadhaar, OTR, बैंक, आय)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#0b1f3f] text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpenDetails={(s) => setActiveModalService(s)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-300 p-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-800">
              "{searchQuery}" से संबंधित कोई सेवा नहीं मिली
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              यदि आपका काम यहाँ सूची में नहीं दिख रहा है, तो सीधे पुष्पेंद्र जी को WhatsApp पर बताएं। हम कॉलेज व सरकारी संबंधित सभी ऑनलाइन काम करते हैं।
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('सभी');
                }}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl transition"
              >
                सभी सेवाएँ देखें
              </button>
              <a
                href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, `नमस्ते पुष्पेंद्र जी! मुझे "${searchQuery}" से संबंधित काम करवाना है, क्या यह हो जाएगा?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp पर पूछें
              </a>
            </div>
          </div>
        )}

      </section>

      {/* Live Interactive Token & Cost Calculator */}
      <TokenCalculator />

      {/* FAQ Section */}
      <FAQSection />

      {/* Direct Contact & Room 22 Section */}
      <ContactSection />

      {/* Service Detail Modal Dialog */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />

      {/* Floating WhatsApp and Mobile Quick Bar */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <footer className="bg-[#07152b] text-slate-300 pt-12 pb-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800 text-sm">
            
            {/* Col 1: About */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center font-heading text-sm">
                  22
                </div>
                <span className="font-heading font-extrabold text-xl text-white">
                  विद्यार्थी ऑनलाइन सेवा केंद्र
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                विद्यार्थियों के सभी जरूरी फॉर्म—पैन कार्ड (New & Minor to Major), छात्रवृत्ति, जन आधार, आधार कार्ड, SSO ID, OTR और APAAR ID—न्यूनतम सेवा शुल्क (₹25 / पहली बार ₹20) और पारदर्शी सरकारी टोकन पर त्वरित भरवाएं।
              </p>
              <div className="text-xs text-amber-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>स्थान: {ROOM_INFO.roomNumber} ({ROOM_INFO.timings})</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-3">महत्वपूर्ण लिंक्स</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-amber-400 transition">सभी सेवाएँ एवं टोकन</a></li>
                <li><a href="#pricing" className="hover:text-amber-400 transition">फीस एवं नियम</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition">अक्सर पूछे जाने वाले सवाल</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition">सीधा संपर्क</a></li>
              </ul>
            </div>

            {/* Col 3: Direct Contact */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm mb-3">सीधा संपर्क</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-white font-bold">{CONTACT_PUSHPENDRA.name}</div>
                  <a href={`tel:${CONTACT_PUSHPENDRA.phone}`} className="text-amber-400 hover:underline">
                    📞 {CONTACT_PUSHPENDRA.displayPhone}
                  </a>
                </div>
                <div className="pt-1">
                  <div className="text-white font-bold">{CONTACT_PIYUSH.name}</div>
                  <a href={`tel:${CONTACT_PIYUSH.phone}`} className="text-amber-400 hover:underline">
                    📞 {CONTACT_PIYUSH.displayPhone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              © 2026 ऑनलाइन सेवा केंद्र - Room No. 22 • Pushpendra Gora & Piyush. All rights reserved.
            </div>
            <div className="text-slate-400 text-center sm:text-right">
              प्रत्येक काम ₹25 • पहली बार आने वाले छात्रों के लिए ₹20 + सरकारी टोकन
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
