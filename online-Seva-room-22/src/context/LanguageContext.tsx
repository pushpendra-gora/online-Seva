import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'hi' | 'en';

export interface Translations {
  // Top Banner
  chooseLanguage: string;
  hindiBtn: string;
  englishBtn: string;
  allTimeBanner: string;

  // Navbar
  brandTitle: string;
  brandSubtitle: string;
  navServices: string;
  navPricing: string;
  navCalculator: string;
  navFaq: string;
  navContact: string;
  callPushpendra: string;
  whatsappChat: string;
  whatsappDirectMsg: string;

  // Hero
  heroBadge: string;
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroSubheading: string;
  heroWhatsappBtn: string;
  heroServicesBtn: string;
  heroCalculatorBtn: string;
  heroTrust1: string;
  heroTrust2: string;
  heroTrust3: string;
  heroOperatorName: string;
  heroAssistantName: string;
  heroCallBtn: string;
  heroTicketBadge: string;
  heroTicketTitle: string;
  heroTicketServiceFeeLabel: string;
  heroTicketFirstTimeLabel: string;
  heroTicketFirstTimeNote: string;
  heroTicketTokenLabel: string;
  heroTicketTokenValue: string;
  heroTicketTokenNote: string;
  heroTicketGuarantees: string[];

  // Transparency Bar
  transparencyTitle: string;
  transparencySubtitle: string;
  transparencyBadge: string;

  // Services Explorer
  servicesBadge: string;
  servicesHeading: string;
  servicesSubheading: string;
  servicesTotalAvailable: string;
  searchPlaceholder: string;
  filterAll: string;
  noServicesFound: string;
  clearFilter: string;

  // Service Card
  govtPortalTokenLabel: string;
  biometricNotice: string;
  requiredDocsLabel: string;
  moreDocs: string;
  ourServiceFeeLabel: string;
  firstTimeStudentOffer: string;
  perService: string;
  approxGovtToken: string;
  viewDetailsDocsBtn: string;
  whatsappDirectBtn: string;

  // Service Modal
  modalClose: string;
  modalWhatWeDo: string;
  modalChecklistTitle: string;
  modalChecklistSub: string;
  modalPortalTokenBoxTitle: string;
  modalEstimatedTime: string;
  modalImportantNotice: string;
  modalRoomFooter: string;
  modalCallBtn: string;
  modalWhatsappBtn: string;

  // Calculator
  calcBadge: string;
  calcHeading: string;
  calcSubheading: string;
  calcStudentToggleLabel: string;
  calcStudentDiscountTag: string;
  calcOtrCategoryLabel: string;
  calcSelectServicesTitle: string;
  calcSelectedCount: string;
  calcClearAll: string;
  calcSummaryTitle: string;
  calcSelectedListTitle: string;
  calcNoServiceSelected: string;
  calcServiceFeeTotal: string;
  calcGovtTokenTotal: string;
  calcTotalEstimated: string;
  calcSendWhatsappQuote: string;
  calcTransparentNote: string;

  // FAQ
  faqBadge: string;
  faqHeading: string;
  faqSubheading: string;
  faqNeedHelp: string;

  // Contact
  contactBadge: string;
  contactHeading: string;
  contactSubheading: string;
  operatorTitle: string;
  assistantTitle: string;
  roleOperator: string;
  roleAssistant: string;
  callDirect: string;
  whatsappChatWith: string;
  copyNumber: string;
  numberCopied: string;
  locationCardBadge: string;
  locationCampus: string;
  locationRoomNumber: string;
  locationTimingsLabel: string;
  locationTimingsValue: string;
  locationAtmosphere: string;
  locationComeNowBtn: string;

  // Floating WhatsApp
  floatingTooltip: string;
  floatingButtonLabel: string;
  floatingMobileCall: string;
  floatingMobileChat: string;

  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerDirectContact: string;
  footerRights: string;
  footerPricingNote: string;
}

const translations: Record<Language, Translations> = {
  hi: {
    chooseLanguage: 'भाषा चुनें / Choose Language:',
    hindiBtn: '🇮🇳 हिंदी',
    englishBtn: '🇬🇧 English',
    allTimeBanner: 'Room No. 22 • All Time (24×7) उपलब्ध • विद्यार्थियों के लिए विशेष ऑनलाइन सहायता केंद्र',

    brandTitle: 'ऑनलाइन सेवा केंद्र',
    brandSubtitle: 'विद्यार्थियों हेतु समस्त ऑनलाइन व टोकन फॉर्म सहायता',
    navServices: 'सेवाएँ एवं टोकन',
    navPricing: 'फीस व नियम',
    navCalculator: 'टोकन कैलकुलेटर',
    navFaq: 'FAQ',
    navContact: 'संपर्क (Contact)',
    callPushpendra: 'पुष्पेंद्र को कॉल करें',
    whatsappChat: 'WhatsApp चैट',
    whatsappDirectMsg: 'नमस्ते पुष्पेंद्र! मुझे ऑनलाइन सेवा केंद्र (Room 22) से सहायता चाहिए।',

    heroBadge: 'Room No. 22 • विद्यार्थियों के लिए विशेष ऑनलाइन सेवा केंद्र',
    heroHeadingLine1: 'कॉलेज व सरकारी फॉर्म भरें,',
    heroHeadingLine2: 'बिल्कुल सही और पारदर्शी टोकन के साथ!',
    heroSubheading: 'PAN Card, उत्तर मैट्रिक छात्रवृत्ति, जन आधार, SSO ID, OTR रजिस्ट्रेशन व APAAR ID — सभी सरकारी पोर्टल्स पर बिना किसी गलती के आवेदन कराएं।',
    heroWhatsappBtn: 'सीधे WhatsApp पर बात करें',
    heroServicesBtn: 'सभी सेवाएँ व टोकन लिस्ट',
    heroCalculatorBtn: 'टोकन फीस कैलकुलेटर',
    heroTrust1: 'त्रुटिरहित फॉर्म सबमिशन',
    heroTrust2: 'पारदर्शी सरकारी टोकन',
    heroTrust3: 'Room No. 22 में सीधा प्रवेश',
    heroOperatorName: 'Pushpendra Gora',
    heroAssistantName: 'Piyush',
    heroCallBtn: 'कॉल करें',
    heroTicketBadge: 'आधिकारिक दर सूची (Official Rates)',
    heroTicketTitle: 'हमारा सहायता शुल्क',
    heroTicketServiceFeeLabel: 'नियमित सर्विस चार्ज:',
    heroTicketFirstTimeLabel: 'पहली बार आने वाले छात्रों हेतु:',
    heroTicketFirstTimeNote: 'केवल ₹20 प्रति काम (₹5 की सीधी छूट)',
    heroTicketTokenLabel: 'सरकारी / पोर्टल टोकन:',
    heroTicketTokenValue: 'विभाग अनुसार (NSDL/UIDAI/Govt)',
    heroTicketTokenNote: 'सरकारी टोकन रसीद सीधे आधिकारिक पोर्टल से प्राप्त होगी। कोई छुपा हुआ शुल्क नहीं।',
    heroTicketGuarantees: [
      'फॉर्म का प्रिंट आउट व रसीद तुरंत दी जाती है',
      'डॉक्यूमेंट रीसाइजिंग व फोटो-हस्ताक्षर सही फॉर्मेट में',
      'आवेदन का स्टेटस चेक करने में पूर्ण सहायता',
    ],

    transparencyTitle: 'स्पष्ट व पारदर्शी फीस नियम (No Hidden Charges)',
    transparencySubtitle: 'सर्विस चार्ज: ₹25 प्रति काम • पहली बार आने वाले छात्रों के लिए: ₹20 प्रति काम • सरकारी/पोर्टल टोकन फीस बिल्कुल अलग',
    transparencyBadge: '✓ 100% पारदर्शी टोकन रसीद',

    servicesBadge: 'समस्त ऑनलाइन सेवाएँ एवं सरकारी टोकन',
    servicesHeading: 'अपनी आवश्यकता अनुसार सेवा चुनें',
    servicesSubheading: 'हर सेवा के कार्ड में संबंधित सरकारी टोकन व फीस स्पष्ट लिखी है। सीधे जानकारी देखें या WhatsApp करें।',
    servicesTotalAvailable: 'कुल उपलब्ध सेवाएँ',
    searchPlaceholder: 'सेवा का नाम, टोकन, पोर्टल या दस्तावेज खोजें...',
    filterAll: 'सभी',
    noServicesFound: 'आपकी खोज के अनुसार कोई सेवा नहीं मिली। कृपया दूसरा शब्द खोजें।',
    clearFilter: 'सारे फ़िल्टर हटाएं',

    govtPortalTokenLabel: 'सरकारी / पोर्टल टोकन:',
    biometricNotice: 'आधार केंद्र पर बायोमेट्रिक अनिवार्य है (मार्गदर्शन उपलब्ध)',
    requiredDocsLabel: 'ज़रूरी दस्तावेज:',
    moreDocs: 'और',
    ourServiceFeeLabel: 'हमारी सेवा सहायता शुल्क:',
    firstTimeStudentOffer: 'नए छात्रों हेतु ₹20/काम',
    perService: 'प्रति काम',
    approxGovtToken: 'सरकारी टोकन:',
    viewDetailsDocsBtn: 'पूरा विवरण व डाक्यूमेंट्स',
    whatsappDirectBtn: 'WhatsApp पर पूछें',

    modalClose: 'बंद करें',
    modalWhatWeDo: 'हम आपके लिए क्या-क्या कार्य करेंगे (Our Assistance):',
    modalChecklistTitle: 'आवश्यक डाक्यूमेंट्स चेकलिस्ट:',
    modalChecklistSub: 'Room No. 22 आने से पहले सुनिश्चित करें कि आपके पास ये कागजात उपलब्ध हैं:',
    modalPortalTokenBoxTitle: 'सरकारी / आधिकारिक पोर्टल टोकन विवरण:',
    modalEstimatedTime: 'अनुमानित समय:',
    modalImportantNotice: 'महत्वपूर्ण निर्देश:',
    modalRoomFooter: 'Pushpendra Gora & Piyush',
    modalCallBtn: 'कॉल करें',
    modalWhatsappBtn: 'सीधा WhatsApp खोलें',

    calcBadge: 'ऑनलाइन टोकन कैलकुलेटर',
    calcHeading: 'अपने कुल खर्चे का तुरंत हिसाब लगाएं',
    calcSubheading: 'एक से अधिक फॉर्म भरवाने हैं? अपनी सेवाएँ चुनें और देखें कि कुल सर्विस चार्ज और सरकारी टोकन कितना लगेगा।',
    calcStudentToggleLabel: 'क्या आप पहली बार Room No. 22 आ रहे हैं? (नया छात्र ऑफर)',
    calcStudentDiscountTag: '🎉 पहली बार आने पर प्रति काम ₹20 लगेगा (बचत ₹5/काम)',
    calcOtrCategoryLabel: 'OTR श्रेणी (Category):',
    calcSelectServicesTitle: 'सेवाएँ चुनें (एक या अधिक पर क्लिक करें):',
    calcSelectedCount: 'चुनी गई सेवाएँ:',
    calcClearAll: 'सब हटाएं',
    calcSummaryTitle: 'कुल अनुमानित खर्च (Estimate Summary)',
    calcSelectedListTitle: 'चुनी गई सेवाओं की सूची:',
    calcNoServiceSelected: 'कोई सेवा नहीं चुनी गई है। ऊपर से सेवाएँ सेलेक्ट करें।',
    calcServiceFeeTotal: 'कुल सर्विस चार्ज:',
    calcGovtTokenTotal: 'कुल सरकारी/पोर्टल टोकन:',
    calcTotalEstimated: 'कुल अनुमानित भुगतान:',
    calcSendWhatsappQuote: 'यह बिल सीधे WhatsApp पर भेजें',
    calcTransparentNote: 'सरकारी टोकन का भुगतान सीधे आधिकारिक पोर्टल पर कटता है, जिसकी पक्की रसीद आपको दी जाती है।',

    faqBadge: 'पूछे जाने वाले प्रश्न (FAQ)',
    faqHeading: 'टोकन, फीस व सेवाओं से जुड़े आम सवाल',
    faqSubheading: 'विद्यार्थियों के अक्सर पूछे जाने वाले प्रश्नों के सरल व स्पष्ट उत्तर',
    faqNeedHelp: 'कोई और सवाल है? Pushpendra से सीधे WhatsApp पर पूछें:',

    contactBadge: 'संपर्क एवं स्थान (Contact & Location)',
    contactHeading: 'सीधे रूम नंबर 22 आएं या संपर्क करें',
    contactSubheading: 'हम विद्यार्थियों की सहायता के लिए सदैव उपलब्ध हैं। किसी भी फॉर्म से पहले निसंकोच कॉल या WhatsApp करें।',
    operatorTitle: 'मुख्य संचालक (Main Operator)',
    assistantTitle: 'सह-संचालक (Co-Operator)',
    roleOperator: 'सेवा केंद्र संचालक',
    roleAssistant: 'सहायक संचालक',
    callDirect: 'सीधा कॉल करें',
    whatsappChatWith: 'से WhatsApp चैट',
    copyNumber: 'नंबर कॉपी करें',
    numberCopied: 'कॉपी हो गया!',
    locationCardBadge: 'स्थान (Location)',
    locationCampus: 'कैंपस सहायता केंद्र',
    locationRoomNumber: 'Room Number 22',
    locationTimingsLabel: 'समय:',
    locationTimingsValue: 'All Time (24×7 उपलब्ध)',
    locationAtmosphere: 'विद्यार्थियों के लिए विशेष सहायता व शांतिपूर्ण माहौल',
    locationComeNowBtn: 'मैं Room 22 आ रहा हूँ (WhatsApp)',

    floatingTooltip: 'Room 22 • Pushpendra से सीधे WhatsApp पर पूछें',
    floatingButtonLabel: 'WhatsApp सहायता (Room 22)',
    floatingMobileCall: 'Call करें',
    floatingMobileChat: 'WhatsApp चैट',

    footerDesc: 'विद्यार्थियों के लिए समर्पित कॉलेज व सरकारी फॉर्म सहायता केंद्र। त्रुटिरहित फॉर्म सबमिशन, पारदर्शी सरकारी टोकन और त्वरित सेवा।',
    footerQuickLinks: 'त्वरित लिंक्स',
    footerDirectContact: 'सीधा संपर्क',
    footerRights: 'ऑनलाइन सेवा केंद्र - Room No. 22 • Pushpendra Gora & Piyush. All rights reserved.',
    footerPricingNote: 'प्रत्येक काम ₹25 • पहली बार आने वाले छात्रों के लिए ₹20 + सरकारी टोकन',
  },
  en: {
    chooseLanguage: 'Choose Language / भाषा चुनें:',
    hindiBtn: '🇮🇳 हिंदी',
    englishBtn: '🇬🇧 English',
    allTimeBanner: 'Room No. 22 • Available All Time (24×7) • Student Online Assistance Center',

    brandTitle: 'Online Seva Kendra',
    brandSubtitle: 'Student Online Forms, Government Portals & Token Assistance',
    navServices: 'Services & Tokens',
    navPricing: 'Fees & Rules',
    navCalculator: 'Token Calculator',
    navFaq: 'FAQ',
    navContact: 'Contact',
    callPushpendra: 'Call Pushpendra',
    whatsappChat: 'WhatsApp Chat',
    whatsappDirectMsg: 'Hello Pushpendra! I need assistance from Online Seva Kendra (Room 22).',

    heroBadge: 'Room No. 22 • Dedicated Online Assistance Center for Students',
    heroHeadingLine1: 'Fill College & Govt Forms',
    heroHeadingLine2: 'With Zero Errors & 100% Transparent Tokens!',
    heroSubheading: 'PAN Card, Post-Matric Scholarship, Jan Aadhaar, SSO ID, OTR Registration & APAAR ID — hassle-free application on all government portals.',
    heroWhatsappBtn: 'Chat Directly on WhatsApp',
    heroServicesBtn: 'View All Services & Tokens',
    heroCalculatorBtn: 'Token Fee Calculator',
    heroTrust1: 'Error-Free Submission',
    heroTrust2: 'Transparent Govt Token',
    heroTrust3: 'Walk straight into Room 22',
    heroOperatorName: 'Pushpendra Gora',
    heroAssistantName: 'Piyush',
    heroCallBtn: 'Call Now',
    heroTicketBadge: 'Official Rate Card',
    heroTicketTitle: 'Our Assistance Charges',
    heroTicketServiceFeeLabel: 'Standard Service Charge:',
    heroTicketFirstTimeLabel: 'For First-Time Visiting Students:',
    heroTicketFirstTimeNote: 'Only ₹20 per task (Instant ₹5 Discount)',
    heroTicketTokenLabel: 'Govt / Portal Token:',
    heroTicketTokenValue: 'As per Dept (NSDL/UIDAI/Govt)',
    heroTicketTokenNote: 'Official token receipt generated straight from official portals. No hidden charges.',
    heroTicketGuarantees: [
      'Instant printout and official acknowledgement slip',
      'Accurate photo, signature and document sizing',
      'Complete tracking and status verification support',
    ],

    transparencyTitle: 'Clear & Transparent Fee Policy (No Hidden Charges)',
    transparencySubtitle: 'Service Fee: ₹25 per task • For first-time students: ₹20 per task • Govt/Portal token charged at actuals',
    transparencyBadge: '✓ 100% Authentic Portal Receipts',

    servicesBadge: 'All Online Services & Government Tokens',
    servicesHeading: 'Choose the Service You Need',
    servicesSubheading: 'Each service card clearly states the government token and processing steps. View details or WhatsApp directly.',
    servicesTotalAvailable: 'Total Services Available',
    searchPlaceholder: 'Search service name, token, portal, or document...',
    filterAll: 'All',
    noServicesFound: 'No services found matching your query. Please try another keyword.',
    clearFilter: 'Clear all filters',

    govtPortalTokenLabel: 'Govt / Portal Token:',
    biometricNotice: 'Biometrics required at Aadhaar center (Guidance provided)',
    requiredDocsLabel: 'Required Documents:',
    moreDocs: 'more',
    ourServiceFeeLabel: 'Our Service Assistance Fee:',
    firstTimeStudentOffer: '₹20/task for new students',
    perService: 'per task',
    approxGovtToken: 'Govt Token:',
    viewDetailsDocsBtn: 'Full Details & Documents',
    whatsappDirectBtn: 'Ask on WhatsApp',

    modalClose: 'Close',
    modalWhatWeDo: 'How We Assist You (Our Workflow):',
    modalChecklistTitle: 'Required Documents Checklist:',
    modalChecklistSub: 'Make sure you have these documents ready before visiting Room No. 22:',
    modalPortalTokenBoxTitle: 'Official Portal / Govt Token Breakdown:',
    modalEstimatedTime: 'Estimated Processing Time:',
    modalImportantNotice: 'Important Notice:',
    modalRoomFooter: 'Pushpendra Gora & Piyush',
    modalCallBtn: 'Call Now',
    modalWhatsappBtn: 'Open WhatsApp Directly',

    calcBadge: 'Online Token Calculator',
    calcHeading: 'Calculate Your Total Cost Instantly',
    calcSubheading: 'Need multiple forms filled? Select your services below and get an exact breakdown of service fees and government tokens.',
    calcStudentToggleLabel: 'Are you visiting Room No. 22 for the first time? (New Student Offer)',
    calcStudentDiscountTag: '🎉 First-time student discount: ₹20 per task (Save ₹5/task)',
    calcOtrCategoryLabel: 'OTR Category:',
    calcSelectServicesTitle: 'Select Services (Click to add/remove):',
    calcSelectedCount: 'Selected Services:',
    calcClearAll: 'Clear All',
    calcSummaryTitle: 'Estimated Cost Breakdown',
    calcSelectedListTitle: 'Selected Services List:',
    calcNoServiceSelected: 'No services selected. Click services above to calculate.',
    calcServiceFeeTotal: 'Total Service Fee:',
    calcGovtTokenTotal: 'Total Govt / Portal Tokens:',
    calcTotalEstimated: 'Total Estimated Payment:',
    calcSendWhatsappQuote: 'Send This Invoice to WhatsApp',
    calcTransparentNote: 'Official tokens are paid directly to government portals, and official receipts are handed to you.',

    faqBadge: 'Frequently Asked Questions (FAQ)',
    faqHeading: 'Common Questions About Tokens, Fees & Services',
    faqSubheading: 'Clear, transparent answers to questions commonly asked by college students.',
    faqNeedHelp: 'Have another question? Ask Pushpendra directly on WhatsApp:',

    contactBadge: 'Contact & Location',
    contactHeading: 'Visit Room No. 22 or Reach Out Directly',
    contactSubheading: 'We are always available to help students. Feel free to call or WhatsApp before coming for any form.',
    operatorTitle: 'Main Operator',
    assistantTitle: 'Co-Operator',
    roleOperator: 'Center Lead',
    roleAssistant: 'Assistant Lead',
    callDirect: 'Direct Call',
    whatsappChatWith: 'WhatsApp Chat',
    copyNumber: 'Copy Phone',
    numberCopied: 'Copied!',
    locationCardBadge: 'Location',
    locationCampus: 'Campus Student Help Center',
    locationRoomNumber: 'Room Number 22',
    locationTimingsLabel: 'Timings:',
    locationTimingsValue: 'All Time (24×7 Available)',
    locationAtmosphere: 'Dedicated student assistance with a friendly environment',
    locationComeNowBtn: 'I am coming to Room 22 (WhatsApp)',

    floatingTooltip: 'Room 22 • Ask Pushpendra on WhatsApp',
    floatingButtonLabel: 'WhatsApp Help (Room 22)',
    floatingMobileCall: 'Call Now',
    floatingMobileChat: 'WhatsApp',

    footerDesc: 'Dedicated campus online form and portal assistance center for students. Accurate submissions, transparent tokens, and fast support.',
    footerQuickLinks: 'Quick Links',
    footerDirectContact: 'Direct Contact',
    footerRights: 'Online Seva Kendra - Room No. 22 • Pushpendra Gora & Piyush. All rights reserved.',
    footerPricingNote: '₹25 per task • ₹20 for first-time students + Official Govt Token',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isHindi: boolean;
  isEnglish: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  selectLanguageAndClose: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('app_language');
      if (saved === 'en' || saved === 'hi') return saved;
    } catch {
      // ignore
    }
    return 'hi';
  });

  // Modal opens when web starts (fresh visit or session)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(() => {
    try {
      const dismissed = sessionStorage.getItem('app_lang_selected_session');
      return !dismissed; // Automatically true on start unless user chose in current session
    } catch {
      return true;
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app_language', lang);
      sessionStorage.setItem('app_lang_selected_session', 'true');
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    try {
      sessionStorage.setItem('app_lang_selected_session', 'true');
    } catch {
      // ignore
    }
  };

  const selectLanguageAndClose = (lang: Language) => {
    setLanguage(lang);
    setIsModalOpen(false);
    try {
      sessionStorage.setItem('app_lang_selected_session', 'true');
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    isHindi: language === 'hi',
    isEnglish: language === 'en',
    isModalOpen,
    openModal,
    closeModal,
    selectLanguageAndClose,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
