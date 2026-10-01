import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, RefreshCw } from 'lucide-react';
import {
  SERVICES_LIST,
  CONTACT_PUSHPENDRA,
  getWhatsAppUrl,
  getServiceName,
  getServiceTokenDisplay,
} from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

export const TokenCalculator: React.FC = () => {
  const { t, language, isHindi } = useLanguage();
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
    if (isHindi) {
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
    } else {
      let msg = `Hello Pushpendra (Room 22),\n\nI want to get forms filled for the following services:\n`;
      selectedServices.forEach((s, idx) => {
        let tokenText = getServiceTokenDisplay(s, 'en');
        if (s.id === 'otr-registration') {
          tokenText = otrCategory === 'reserved' ? '₹400 (Reserved SC/ST/OBC/EWS/PWD)' : '₹600 (General)';
        }
        msg += `\n${idx + 1}. *${s.englishName}*\n   - Service Fee: ₹${serviceChargePerTask}\n   - Token Fee: ${tokenText}\n`;
      });
      msg += `\n-----------------------\n`;
      msg += `📊 *Estimated Summary:*\n`;
      msg += `• Selected Services: ${selectedServices.length}\n`;
      msg += `• Service Charge (${isFirstTime ? 'First-time ₹20/task' : '₹25/task'}): ₹${totalServiceCharge}\n`;
      msg += `• Official Govt Token: ₹${totalTokenAmount}${hasVariableTokens ? ' (+ University challan separately)' : ''}\n`;
      msg += `• *Total Estimated Amount: ₹${totalServiceCharge + totalTokenAmount}*\n\n`;
      msg += `Please let me know when I can visit Room No. 22 and what documents to bring.`;
      return msg;
    }
  };

  const clearAll = () => setSelectedIds([]);

  return (
    <section id="calculator" className="py-14 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{t.calcBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
            {t.calcHeading}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            {t.calcSubheading}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selector Form */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-5 sm:p-7 border border-slate-700 space-y-6">
            
            {/* Student Offer Toggle */}
            <div className="bg-slate-900/90 rounded-2xl p-4 border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-sm text-white block">
                  {t.calcStudentToggleLabel}
                </span>
                <span className="text-xs text-amber-300 font-medium">
                  {t.calcStudentDiscountTag}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl shrink-0 border border-slate-700">
                <button
                  type="button"
                  onClick={() => setIsFirstTime(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    isFirstTime ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isHindi ? 'हाँ, पहली बार (₹20)' : 'Yes, 1st Time (₹20)'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsFirstTime(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    !isFirstTime ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isHindi ? 'नियमित (₹25)' : 'Regular (₹25)'}
                </button>
              </div>
            </div>

            {/* OTR Category Selector if OTR is selected */}
            {selectedIds.includes('otr-registration') && (
              <div className="bg-blue-950/40 rounded-2xl p-4 border border-blue-500/40 space-y-2">
                <div className="text-xs font-bold text-blue-200">
                  {t.calcOtrCategoryLabel}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setOtrCategory('reserved')}
                    className={`p-2.5 rounded-xl border text-left font-semibold transition ${
                      otrCategory === 'reserved'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    <div>{isHindi ? 'SC / ST / OBC / EWS / दिव्यांग' : 'SC / ST / OBC / EWS / PWD'}</div>
                    <div className="text-[11px] opacity-80">{isHindi ? 'टोकन: ₹400' : 'Token: ₹400'}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOtrCategory('general')}
                    className={`p-2.5 rounded-xl border text-left font-semibold transition ${
                      otrCategory === 'general'
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    <div>{isHindi ? 'सामान्य वर्ग (General)' : 'General Category'}</div>
                    <div className="text-[11px] opacity-80">{isHindi ? 'टोकन: ₹600' : 'Token: ₹600'}</div>
                  </button>
                </div>
              </div>
            )}

            {/* Service Selection List */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  {t.calcSelectServicesTitle}
                </span>
                <span className="text-xs text-amber-400 font-bold">
                  {t.calcSelectedCount} {selectedIds.length}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                {SERVICES_LIST.map((service) => {
                  const isSelected = selectedIds.includes(service.id);
                  const title = getServiceName(service, language);
                  const tokenText = getServiceTokenDisplay(service, language);

                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-amber-400/15 border-amber-400 text-white'
                          : 'bg-slate-900/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border mt-0.5 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-amber-400 border-amber-400 text-slate-950 font-black'
                            : 'border-slate-600 bg-slate-800'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold truncate">
                          {title}
                        </div>
                        <div className="text-[11px] text-amber-300/90 mt-0.5">
                          {tokenText}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{t.calcClearAll}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Invoice / Summary Box */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-amber-400 space-y-5">
            
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                {t.calcSummaryTitle}
              </span>
              <h3 className="font-heading font-black text-xl text-[#0b1f3f] mt-0.5">
                Room No. 22 Invoice
              </h3>
            </div>

            {selectedServices.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-xs">
                {t.calcNoServiceSelected}
              </div>
            ) : (
              <>
                {/* Selected List */}
                <div className="space-y-2 max-h-48 overflow-y-auto text-xs">
                  {selectedServices.map((s) => {
                    let tokenStr = getServiceTokenDisplay(s, language);
                    if (s.id === 'otr-registration') {
                      tokenStr = otrCategory === 'reserved' ? '₹400' : '₹600';
                    }
                    const title = getServiceName(s, language);

                    return (
                      <div key={s.id} className="flex items-center justify-between py-1.5 border-b border-slate-100">
                        <div className="pr-2">
                          <div className="font-bold text-slate-800">{title}</div>
                          <div className="text-[11px] text-slate-500">
                            {isHindi ? 'टोकन:' : 'Token:'} <span className="font-semibold text-blue-700">{tokenStr}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold text-slate-900">
                            + ₹{serviceChargePerTask}
                          </div>
                          <div className="text-[10px] text-emerald-600 font-semibold">{t.perService}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtotals Calculation Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>{isHindi ? 'कुल सेवाएँ:' : 'Total Tasks:'}</span>
                    <span className="font-bold text-slate-900">{selectedServices.length}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>
                      {t.calcServiceFeeTotal} ({selectedServices.length} × ₹{serviceChargePerTask}):
                    </span>
                    <span className="font-bold text-slate-900">₹{totalServiceCharge}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>{t.calcGovtTokenTotal}</span>
                    <span className="font-bold text-blue-700">₹{totalTokenAmount}</span>
                  </div>

                  {hasVariableTokens && (
                    <div className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                      {isHindi
                        ? '* कॉलेज/यूनिवर्सिटी परीक्षा फॉर्म का चालान शुल्क आपके पाठ्यक्रम अनुसार पोर्टल पर अलग से होगा।'
                        : '* University examination form fee will be charged as per your specific course on the portal.'}
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between text-sm sm:text-base">
                    <span className="font-extrabold text-slate-900">{t.calcTotalEstimated}</span>
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
                    <span>{t.calcSendWhatsappQuote}</span>
                  </a>

                  <p className="text-[11px] text-center text-slate-500 leading-tight">
                    {t.calcTransparentNote}
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
