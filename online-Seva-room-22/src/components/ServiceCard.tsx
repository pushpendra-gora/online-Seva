import React from 'react';
import { MessageCircle, FileText, Clock, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem, CONTACT_PUSHPENDRA, getWhatsAppUrl } from '../data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenDetails }) => {
  const customWhatsAppMsg = `नमस्ते Pushpendra (Room 22),\n\nमुझे *${service.name}* के लिए फॉर्म भरवाना है।\n• सर्विस चार्ज: ₹25 (पहली बार ₹20)\n• सरकारी/पोर्टल टोकन: ${service.tokenFeeDisplay}\n\nकृपया बताएं कि मुझे कौन-कौन से आवश्यक दस्तावेज Room No. 22 लेकर आने होंगे? धन्यवाद!`;

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-amber-400">
      
      {/* Card Header & Category */}
      <div className="p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {service.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate max-w-[120px]">{service.processingTime}</span>
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-[#0b1f3f] transition-colors leading-snug">
            {service.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium">{service.englishName}</p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* KEY HIGHLIGHT: Token / Portal Fee Box */}
        <div className={`rounded-xl p-3 border text-xs ${
          service.isTokenFree
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
            : 'bg-amber-50/70 border-amber-200 text-amber-950'
        }`}>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-extrabold text-[11px] uppercase tracking-wide flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              सरकारी / पोर्टल टोकन:
            </span>
            <span className={`font-black text-xs px-2 py-0.5 rounded-full ${
              service.isTokenFree
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-500 text-slate-950'
            }`}>
              {service.tokenFeeDisplay}
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-tight">
            {service.tokenFeeNote}
          </p>
        </div>

        {/* Biometric Warning if applicable */}
        {service.biometricRequired && (
          <div className="flex items-center gap-1.5 text-[11px] text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-lg">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>आधार केंद्र पर बायोमेट्रिक अनिवार्य है (मार्गदर्शन उपलब्ध)</span>
          </div>
        )}

        {/* Required Documents preview pills */}
        <div className="pt-1">
          <div className="text-[11px] font-bold text-slate-500 mb-1.5">ज़रूरी दस्तावेज:</div>
          <div className="flex flex-wrap gap-1.5">
            {service.requiredDocs.slice(0, 3).map((doc, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 truncate max-w-[190px]"
                title={doc}
              >
                ✓ {doc}
              </span>
            ))}
            {service.requiredDocs.length > 3 && (
              <span className="text-[11px] text-slate-400 font-semibold self-center">
                +{service.requiredDocs.length - 3} और
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Rates & Actions */}
      <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-100 space-y-3">
        {/* Fee breakdown row */}
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[11px] font-medium text-slate-500">हमारी सेवा सहायता शुल्क:</div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-black text-2xl text-[#0b1f3f]">
                ₹{service.serviceFee}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                पहली बार ₹{service.firstTimeFee}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-slate-400 block">टोकन अतिरिक्त</span>
            <span className="text-xs font-bold text-slate-700">{service.portalName.split('/')[0]}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => onOpenDetails(service)}
            className="flex items-center justify-center gap-1.5 bg-[#0b1f3f] hover:bg-[#13305f] text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>पूरी जानकारी</span>
          </button>

          <a
            href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, customWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl shadow-sm transition hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </article>
  );
};
