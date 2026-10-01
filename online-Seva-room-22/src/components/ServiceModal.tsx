import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, AlertTriangle, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import {
  ServiceItem,
  CONTACT_PUSHPENDRA,
  CONTACT_PIYUSH,
  ROOM_INFO,
  getWhatsAppUrl,
  getServiceName,
  getServiceDesc,
  getServiceTokenDisplay,
  getServiceTokenNote,
  getServiceProcessingTime,
  getServiceRequiredDocs,
  getServiceHelpPoints,
  getServiceImportantNote,
} from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const { t, language, isHindi } = useLanguage();
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (doc: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [doc]: !prev[doc],
    }));
  };

  const title = getServiceName(service, language);
  const subtitle = isHindi ? service.englishName : service.name;
  const description = getServiceDesc(service, language);
  const tokenDisplay = getServiceTokenDisplay(service, language);
  const tokenNote = getServiceTokenNote(service, language);
  const processingTime = getServiceProcessingTime(service, language);
  const requiredDocs = getServiceRequiredDocs(service, language);
  const helpPoints = getServiceHelpPoints(service, language);
  const importantNote = getServiceImportantNote(service, language);

  const whatsAppMsg = isHindi
    ? `नमस्ते Pushpendra (Room 22),\n\nमुझे *${service.name}* के बारे में पूछना है।\n• सर्विस चार्ज: ₹${service.serviceFee} (पहली बार ₹${service.firstTimeFee})\n• टोकन शुल्क: ${service.tokenFeeDisplay}\n\nमैं कब रूम नंबर 22 आ सकता हूँ? कृपया आवश्यक डाक्यूमेंट्स व प्रक्रिया बताएं।`
    : `Hello Pushpendra (Room 22),\n\nI want to inquire about *${service.englishName}*.\n• Service Fee: ₹${service.serviceFee} (First visit ₹${service.firstTimeFee})\n• Official Token: ${tokenDisplay}\n\nWhen can I visit Room No. 22? Please guide me on required documents.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      
      {/* Modal Dialog Card */}
      <div
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border-2 border-slate-200 text-slate-900 my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Modal Header */}
        <div className="bg-[#0b1f3f] text-white p-5 sm:p-6 relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            aria-label={t.modalClose}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
              {service.category}
            </span>
            <span className="text-xs text-slate-300">
              {ROOM_INFO.roomNumber}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading pr-10">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            {subtitle} • {service.portalName}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm leading-relaxed">
          
          {/* About Service */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1">
              {isHindi ? 'यह सेवा क्या है?' : 'About This Service'}
            </h4>
            <p className="text-slate-700">{description}</p>
          </div>

          {/* DEDICATED TOKEN & FEE BREAKDOWN BOX */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-2xl p-4 sm:p-5 border-2 border-amber-300">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>{t.modalPortalTokenBoxTitle}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-xs">
                <span className="text-slate-500 font-medium block">{t.ourServiceFeeLabel}</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-heading font-black text-2xl text-[#0b1f3f]">
                    ₹{service.serviceFee}
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full text-[11px]">
                    {t.firstTimeStudentOffer}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {isHindi
                    ? '(फॉर्म भरने, डॉक्यूमेंट रीसाइज, जांच व सबमिशन सहायता)'
                    : '(Form filling, document resizing, verification & submission assistance)'}
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-xs">
                <span className="text-slate-500 font-medium block">{t.govtPortalTokenLabel}</span>
                <div className="font-heading font-black text-2xl text-amber-600 mt-1">
                  {tokenDisplay}
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  {tokenNote}
                </p>
              </div>
            </div>
          </div>

          {/* What Help is Provided */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
              {t.modalWhatWeDo}
            </h4>
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {helpPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Checklist of Documents */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-amber-600" />
                {t.modalChecklistTitle}
              </h4>
              <span className="text-[11px] text-slate-400">
                {Object.values(checkedDocs).filter(Boolean).length}/{requiredDocs.length} {isHindi ? 'तैयार' : 'ready'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              {t.modalChecklistSub}
            </p>

            <div className="space-y-2">
              {requiredDocs.map((doc, idx) => {
                const isChecked = !!checkedDocs[doc];
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => toggleDoc(doc)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 text-xs ${
                      isChecked
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span>{doc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Processing Time */}
          <div className="flex items-center gap-2 bg-slate-100 p-3 rounded-xl text-xs text-slate-700">
            <Clock className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              <b>{t.modalEstimatedTime}</b> {processingTime}
            </span>
          </div>

          {/* Important Instructions / Biometric Warning */}
          {importantNote && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>{t.modalImportantNotice}</span>
              </div>
              <p className="leading-relaxed">{importantNote}</p>
            </div>
          )}

        </div>

        {/* Modal Footer with Direct WhatsApp & Call Buttons */}
        <div className="bg-slate-100 p-4 sm:p-5 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center gap-2.5 justify-between">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <span className="font-bold text-slate-900">{ROOM_INFO.roomNumber}</span> • {t.modalRoomFooter}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT_PUSHPENDRA.phone}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t.modalCallBtn}</span>
            </a>

            <a
              href={getWhatsAppUrl(CONTACT_PUSHPENDRA.phone, whatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-2.5 px-5 rounded-xl text-xs sm:text-sm shadow-md transition hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.modalWhatsappBtn}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
