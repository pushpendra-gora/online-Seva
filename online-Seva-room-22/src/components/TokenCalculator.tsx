import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, AlertCircle, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST, CONTACT_PUSHPENDRA, getWhatsAppUrl } from '../data/servicesData';

export const TokenCalculator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['pan-new', 'scholarship-post-matric']);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [otrCategory, setOtrCategory] = useState<'reserved' | 'general'>('reserved');

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = SERVICES_LIST.filter((s) => selectedIds.includes(s.id));

  // Compute Service Charge total
  const serviceChargePerTask = isFirstTime ? 20 : 25;
  const totalServiceCharge = selectedServices.length * serviceChargePerTask;

  // Compute Government / Portal Token totals
  let totalTokenAmount = 0;
  let hasVariableTokens = false;

  selectedServices.forEach((s) => {
    if (s.id === 'otr-registration') {
      totalTokenAmount += otrCategory === 'reserved' ? 400 : 600;
    } else if (typeof s.tokenFeeValue === 'number') {
      totalTokenAmount += s.tokenFeeValue;
    } else {
      hasVariableTokens = true;
    }
  });

  // Generate WhatsApp formatted invoice message
  const generateWhatsAppMessage = () => {
    let msg = `नमस्ते Pushpendra (Room 22),\n\nमुझे निम्नलिखित सेवाओं के लिए फॉर्म भरवाना है:\n`;
    
    selectedServices.forEach((s, idx) => {
      let tokenText = s.tokenFeeDisplay;
      if (s.id === 'otr-registration') {
        tokenText = otrCategory === 'reserved' ? '₹400 (SC/ST/OBC/EWS/दिव्यांग)' : '₹600 (General)';
      }
      msg += `\n${idx + 1}. *${s.name}*\n   - सर्विस चार्ज: ₹${serviceChargePerTask}\n   - टोकन/पोर्टल फीस: ${tokenText}\n`;
    });

    msg += `\n-----------------------\n`;
    msg += `📊 *कुल अनुमानित विवरण:*\n`;
    msg += `• चुनी गई सेवाएँ: ${selectedServices.length}\n`;
    msg += `• सर्विस चार्ज (${isFirstTime ? 'पहली बार ₹20/काम' : '₹25/काम'}): ₹${totalServiceCharge}\n`;
    msg += `• सरकारी/पोर्टल टोकन फीस: ₹${totalTokenAmount}${hasVariableTokens ? ' (+ कॉलेज/यूनिवर्सिटी चालान अलग से)' : ''}\n`;
    msg += `• *कुल अनुमानित राशि: ₹${totalServiceCharge + totalTokenAmount}*\n\n`;
    msg += `कृपया बताएं कि मैं Room No. 22 में कौन-से समय आ सकता हूँ और क्या-क्या दस्तावेज साथ लाने हैं?`;

    return msg;
  };

  const selectAll = () => setSelectedIds(SERVICES_LIST.map((s) => s.id));
  const clearAll = () => setSelectedIds([]);

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-slate-900 to-[#0b1f3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>लाइव टोकन एवं फीस कैलकुलेटर</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
            किस काम में कितना टोकन लगेगा? तुरंत जांचें
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            अपनी आवश्यक सेवाएँ चुनें, टोकन व सर्विस चार्ज का अलग-अलग पारदर्शी हिसाब देखें और सीधे WhatsApp पर भेजें।
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Services Selection List */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-xl">
            
            {/* Quick Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-700">
              <div>
                <span className="font-heading font-bold text-lg text-white">
                  काम चुनें ({selectedIds.length} चयनित)
                </span>
                <p className="text-xs text-slate-400">एक या एक से अधिक सेवाएँ चुन सकते हैं</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1.5 rounded-lg transition"
                >
                  सब हटाएं
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedIds(['pan-new', 'scholarship-post-matric', 'otr-registration'])}
                  className="text-xs bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-400/40 transition"
                >
                  लोकप्रिय 3 काम
                </button>
              </div>
            </div>

            {/* Services List with Checkboxes */}
            <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
              {SERVICES_LIST.map((service) => {
                const isChecked = selectedIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`cursor-pointer rounded-xl p-3 sm:p-3.5 border transition-all flex items-start justify-between gap-3 ${
                      isChecked
                        ? 'bg-amber-400/10 border-amber-400/80 shadow-sm'
                        : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-amber-400 border-amber-400 text-slate-950 font-bold'
                            : 'border-slate-500 bg-slate-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-sm text-white">{service.name}</span>
                          <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.2 rounded font-medium">
                            {service.category}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {service.shortDesc}
                        </div>
                      </div>
                    </div>

                    {/* Token Display Badge on Item */}
                    <div className="text-right shrink-0">
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md ${
                          service.isTokenFree
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}
                      >
                        टोकन: {service.tokenFeeDisplay}
                      </span>
                      <div className="text-[11px] text-slate-400 mt-1">
                        सर्विस: ₹{isFirstTime ? service.firstTimeFee : service.serviceFee}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Special OTR Category Selector if OTR is chosen */}
            {selectedIds.includes('otr-registration') && (
              <div className="mt-4 p-3 bg-blue-950/60 rounded-xl border border-blue-500/40 text-xs">
                <div className="font-bold text-blue-200 mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-blue-400" />
                  <span>OTR (वन टाइम रजिस्ट्रेशन) सरकारी फीस श्रेणी चुनें:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOtrCategory('reserved');
                    }}
                    className={`py-1.5 px-3 rounded-lg font-bold border transition text-center ${
                      otrCategory === 'reserved'
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    SC / ST / OBC / EWS (₹400)
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOtrCategory('general');
                    }}
                    className={`py-1.5 px-3 rounded-lg font-bold border transition text-center ${
                      otrCategory === 'general'
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    General वर्ग (₹600)
                  </button>
                </div>
              </div>
            )}

            {/* First Time Student Toggle */}
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between bg-amber-400/10 p-3 rounded-xl border border-amber-400/30">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="first-time-toggle"
                  checked={isFirstTime}
                  onChange={(e) => setIsFirstTime(e.target.checked)}
                  className="w-4 h-4 text-amber-500 rounded focus:ring-amber-400 border-slate-600 bg-slate-700"
                />
                <label htmlFor="first-time-toggle" className="text-xs sm:text-sm font-bold text-amber-200 cursor-pointer">
                  🎉 क्या आप पहली बार आ रहे हैं? (₹5 की छूट प्रति काम)
                </label>
              </div>
              <span className="text-xs font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                {isFirstTime ? '₹20 / काम' : '₹25 / काम'}
              </span>
            </div>

          </div>

          {/* Right Column: Live Bill & WhatsApp Action */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-amber-400 space-y-5">
            
            <div className="border-b pb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                अनुमानित टोकन व खर्च सारांश
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-[#0b1f3f] mt-0.5">
                पारदर्शी बिल विवरण
              </h3>
            </div>

            {selectedServices.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-sm">
                बाईं ओर की सूची से कोई सेवा चुनें।
              </div>
            ) : (
              <>
                {/* Breakdown List */}
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1 text-xs">
                  {selectedServices.map((s) => {
                    let tokenStr = s.tokenFeeDisplay;
                    if (s.id === 'otr-registration') {
                      tokenStr = otrCategory === 'reserved' ? '₹400' : '₹600';
                    }
                    return (
                      <div key={s.id} className="flex items-center justify-between py-1.5 border-b border-slate-100">
                        <div className="pr-2">
                          <div className="font-bold text-slate-800">{s.name}</div>
                          <div className="text-[11px] text-slate-500">
                            टोकन: <span className="font-semibold text-blue-700">{tokenStr}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold text-slate-900">
                            + ₹{serviceChargePerTask}
                          </div>
                          <div className="text-[10px] text-emerald-600 font-semibold">सर्विस चार्ज</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotals Calculation Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>कुल सेवाएँ (Total Tasks):</span>
                    <span className="font-bold text-slate-900">{selectedServices.length} काम</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>
                      सर्विस चार्ज ({selectedServices.length} × ₹{serviceChargePerTask}):
                    </span>
                    <span className="font-bold text-slate-900">₹{totalServiceCharge}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>सरकारी / पोर्टल टोकन शुल्क:</span>
                    <span className="font-bold text-blue-700">₹{totalTokenAmount}</span>
                  </div>

                  {hasVariableTokens && (
                    <div className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                      * कॉलेज/यूनिवर्सिटी परीक्षा फॉर्म का चालान शुल्क आपके पाठ्यक्रम अनुसार पोर्टल पर अलग से होगा।
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between text-sm sm:text-base">
                    <span className="font-extrabold text-slate-900">कुल अनुमानित खर्च:</span>
                    <div className="text-right">
                      <span className="font-heading font-black text-2xl sm:text-3xl text-emerald-600">
                        ₹{totalServiceCharge + totalTokenAmount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Redirect Button */}
                <div className="space-y-2 pt-1">
                  <a
                    href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-700/20 text-sm sm:text-base transition hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>WhatsApp पर यह लिस्ट भेजें</span>
                  </a>

                  <p className="text-[11px] text-center text-slate-500 leading-tight">
                    क्लिक करते ही आपके मोबाइल पर पुष्पेंद्र जी का WhatsApp चैट खुलेगा और यह पूरा हिसाब पहले से टाइप मिलेगा।
                  </p>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
