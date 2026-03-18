import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Smartphone, TrendingUp, Users, 
  CheckCircle2, Monitor, LayoutTemplate,
  Server, Share2, ArrowRight, Star,
  Search, Facebook, Twitter, Instagram,
  IndianRupee, Rocket,
  ShieldCheck, Heart, Zap, Briefcase, Stethoscope,
  Utensils, Scissors, Dumbbell, Home, GraduationCap,
  MapPin, Clock, MessageCircle, Building2, Factory, Phone,
  FileText, Shield, Globe2, Menu, X, ShoppingCart,
  ExternalLink, AlertTriangle,
  TrendingUp as TrendingIcon
} from "lucide-react";
import { cn } from "./lib/utils";
import React, { useState, useEffect } from "react";

const LOGO_URL = "https://raw.githubusercontent.com/XzeBitOP/SorenAssets/0385f974fa45012b25cdb9e9ab825d3dd10a7065/Website%20images/6D2E38AE-E45F-4861-96EB-B2FC8B03F4A2.png";
const VIDEO_URL = "https://raw.githubusercontent.com/bumbumdumdum/Website-media/228b75dc532ce4847376361eb60e702adf384cf7/gemini_generated_video_8CF985E8.mov";

type Language = 'en' | 'hi';

const translations = {
  en: {
    nav: {
      demo: "Demo Site",
      services: "Services",
      templates: "Templates",
      pricing: "Pricing",
      portfolio: "Highlights",
      contact: "Contact",
      about: "About Us",
      book: "Book Consultation"
    },
    about: {
      title: "The Story Behind The Søren Studio",
      p1: "The Søren Studio was founded by two friends who shared a common vision: to bridge the gap between traditional businesses and the digital world. With backgrounds in owning and running successful ventures, we experienced firsthand the challenges of scaling in a competitive market.",
      p2: "As we grew our own businesses, we realized that having a strong online presence wasn't just an option—it was the single most important factor for sustainable growth. We saw many talented business owners struggling because their digital 'storefront' didn't match the quality of their physical work.",
      p3: "We decided to combine our expertise in business operations and digital strategy to create a service that treats your website not just as a page, but as a growth engine. Our mission is to handle the technical complexity so you can focus on what you do best: running your business.",
      team: {
        nimeet: {
          name: "Nimeet Shah",
          role: "Trent Consultant"
        },
        kenil: {
          name: "Dr. Kenil Shah",
          role: "Owner XzeCure, ObeCure & Working Doctor"
        }
      }
    },
    hero: {
      title: "How Much Business",
      titleAccent: "Are You Losing?",
      aiSubtitle: "Answer 5 simple questions to see how many customers you’re missing.",
      startAudit: "👉 Start Free Audit",
      bookBtn: "Book Free Consultation",
      workBtn: "View Our Work",
      demoPlaceholder: "Enter your business name"
    },
    social: {
      trusted: "Trusted by Growing Businesses",
      quote: "Helping businesses launch online in just 7 days."
    },
    services: {
      title: "Everything you need to succeed online.",
      subtitle: "We don't just build websites; we build digital engines that drive growth for your business.",
      startBtn: "Start your project",
      benefit: "Benefit"
    },
    templates: {
      title: "Websites We Create",
      subtitle: "Tailored designs for every industry.",
      viewDemo: "View Demo"
    },
    pricing: {
      title: "Transparent Pricing",
      subtitle: "Invest in your digital growth.",
      choose: "Choose",
      monthly: "Monthly Option",
      downPayment: "Down payment",
      savesMoney: "Yearly plan saves money.",
      totalYearly: "Total yearly cost",
      plan: "Plan",
      benefit: "Benefit",
      mostPopular: "Most Popular",
      value: "Most Value",
      smallBiz: "Small Business Friendly",
      bookBtn: "Confirm Booking via WhatsApp",
      starter: {
        name: "Starter",
        desc: "Best for small businesses starting their online presence.",
        benefit: "Establishes professional trust. Customers stop losing faith in your brand because you lack a digital presence.",
        features: ["1 Static Website", "Mobile optimized", "Hosting included", "Contact form", "WhatsApp button", "Google Maps location"],
        originalPrice: "₹7,000",
        price: "₹5,000"
      },
      growth: {
        name: "Growth",
        desc: "Includes everything in Starter plus:",
        benefit: "Starts driving inquiries. You go from being invisible to being found by local customers actively searching for you.",
        features: ["Interactive website features", "Up to 2 websites", "Monthly website updates", "Google Business profile setup", "WhatsApp inquiry automation"],
        originalPrice: "₹20,000",
        price: "₹15,000"
      },
      business: {
        name: "Business",
        desc: "Includes everything in Growth plus:",
        benefit: "Dominates local market. Your business becomes the first choice on Google and Social Media in your area.",
        features: ["Unlimited website updates", "Instagram page setup", "4 Instagram posts per month", "Basic SEO setup", "Priority support"],
        originalPrice: "₹60,000",
        price: "₹45,000"
      },
      brand: {
        name: "Brand",
        desc: "Includes everything in Business plus:",
        benefit: "Scales your revenue automatically. A 24/7 sales machine that books appointments and handles leads without your manual effort.",
        features: ["Advanced interactive website", "Booking system", "Reservation system", "Enquiry forms", "12 Instagram posts per month", "Social media content design", "Social media posting"],
        originalPrice: "₹1,50,000",
        price: "₹1,20,000"
      },
      enterprise: {
        name: "Enterprise",
        desc: "Includes everything in Brand plus:",
        benefit: "Total Market Authority. You focus 100% on operations while we act as your full-scale digital growth department.",
        features: ["AI Voice Assistant Integration", "On-site business visit", "Professional content creation", "Custom website design", "Full digital presence management", "Marketing consultation"],
        originalPrice: "₹5,00,000",
        price: "₹3,00,000"
      }
    },
    usp: {
      title: "Our Enterprise USP",
      subtitle: "Exclusive features for large-scale growth"
    },
    interactiveDemo: {
      title: "See What We Build",
      subtitle: "Experience our premium websites across all devices."
    },
    footer: {
      tagline: "The Søren Studio — Turning Businesses Into Online Brands.",
      desc: "We build premium websites and manage digital presence to help businesses reach more customers online.",
      links: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved."
    },
    webTypes: {
      title: "Static vs Interactive Website",
      subtitle: "(Simple Explanation)",
      static: "Static Website",
      staticDesc: "Shows information about your business. Visitors can see information but cannot interact much.",
      interactive: "Interactive Website",
      interactiveDesc: "Visitors can take actions directly on the website. This helps businesses generate leads and bookings online.",
      examples: "Examples",
      leads: "Generates Leads"
    },
    addons: {
      title: "Optional Add-Ons",
      subtitle: "Clients can add these services anytime.",
      addBtn: "Add to Plan"
    },
    stats: {
      websites: "Websites Created",
      businesses: "Businesses Online",
      launch: "Average Launch"
    },
    portfolio: {
      title: "Our Project Highlights",
      subtitle: "Real-world examples of how we transform businesses.",
      project1: {
        title: "XzeCure",
        highlight: "Enterprise Project",
        desc: "A high-scale security platform featuring an AI-powered headboard and a comprehensive Admin dashboard for total control.",
        link: "https://www.XzeCure.com"
      },
      project2: {
        title: "Innovative Services",
        highlight: "Static Website",
        desc: "A clean, professional static website designed to establish a strong digital presence and build customer trust.",
        link: "https://innovativeservices.vercel.app"
      },
      project3: {
        title: "RetroStrip",
        highlight: "Mobile App",
        desc: "A fun mobile app that turns your phone into a vintage photo booth. Capture classic film-strip style photos instantly on your device.",
        link: "https://retro-strip.vercel.app/"
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to grow? Let's talk about your project.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! We'll contact you soon.",
      error: "Something went wrong. Please try again."
    },
    audit: {
      q1: "Do you have a professional website?",
      q2: "Can customers find your business on Google?",
      q3: "Can customers contact you instantly online?",
      q4: "Do customers book or order directly from you online?",
      q5: "Do you regularly get new customers from the internet?",
      options: {
        yes: "Yes",
        no: "No",
        sometimes: "Sometimes",
        topResults: "Yes (appears in top results)",
        notSure: "Not sure",
        whatsapp: "Yes (WhatsApp / call button)"
      },
      results: {
        title: "Your Business Visibility Score",
        missingCustomers: "Customers You’re Missing",
        revenueLoss: "Estimated Revenue Loss",
        competitors: "Your Competitors Are Doing This:",
        comp1: "Getting found on Google",
        comp2: "Receiving daily enquiries",
        comp3: "Converting via WhatsApp",
        solution: "With GetBizOnline:",
        recovery: "You can recover this in 7 days",
        cta: "Get My Business Online",
        powerMove: "Businesses like yours are gaining 2–5 new customers daily through online presence.",
        perMonth: "per month",
        customersMonth: "customers/month"
      }
    }
  },
  hi: {
    nav: {
      demo: "Demo Site",
      services: "Services",
      templates: "Templates",
      pricing: "Pricing",
      portfolio: "हाइलाइट्स",
      contact: "संपर्क",
      about: "हमारे बारे में",
      book: "Consultation बुक करें"
    },
    about: {
      title: "The Søren Studio के पीछे की कहानी",
      p1: "The Søren Studio की स्थापना दो दोस्तों द्वारा की गई थी जिन्होंने एक साझा दृष्टिकोण साझा किया था: पारंपरिक व्यवसायों और डिजिटल दुनिया के बीच की खाई को पाटना। सफल उद्यमों के मालिक होने और चलाने की पृष्ठभूमि के साथ, हमने प्रतिस्पर्धी बाजार में विस्तार की चुनौतियों का प्रत्यक्ष अनुभव किया।",
      p2: "जैसे-जैसे हमने अपने स्वयं के व्यवसायों को बढ़ाया, हमें एहसास हुआ कि एक मजबूत ऑनलाइन उपस्थिति होना केवल एक विकल्प नहीं था - यह निरंतर विकास के लिए सबसे महत्वपूर्ण कारक था। हमने कई प्रतिभाशाली व्यवसाय मालिकों को संघर्ष करते देखा क्योंकि उनका डिजिटल 'स्टोरफ्रंट' उनके भौतिक काम की गुणवत्ता से मेल नहीं खाता था।",
      p3: "हमने अपनी व्यावसायिक संचालन और डिजिटल रणनीति की विशेषज्ञता को मिलाकर एक ऐसी सेवा बनाने का निर्णय लिया जो आपकी वेबसाइट को केवल एक पेज के रूप में नहीं, बल्कि एक विकास इंजन के रूप में मानती है। हमारा मिशन तकनीकी जटिलता को संभालना है ताकि आप उस पर ध्यान केंद्रित कर सकें जो आप सबसे अच्छा करते हैं: अपना व्यवसाय चलाना।",
      team: {
        nimeet: {
          name: "Nimeet Shah",
          role: "Trent Consultant"
        },
        kenil: {
          name: "Dr. Kenil Shah",
          role: "Owner XzeCure, ObeCure और वर्किंग डॉक्टर"
        }
      }
    },
    hero: {
      title: "आप कितना बिजनेस",
      titleAccent: "खो रहे हैं?",
      aiSubtitle: "यह देखने के लिए 5 सरल प्रश्नों के उत्तर दें कि आप कितने ग्राहकों को खो रहे हैं।",
      startAudit: "👉 फ्री ऑडिट शुरू करें",
      bookBtn: "Free Consultation बुक करें",
      workBtn: "हमारा काम देखें",
      demoPlaceholder: "अपने बिजनेस का नाम दर्ज करें"
    },
    social: {
      trusted: "बढ़ते Businesses द्वारा भरोसेमंद",
      quote: "Businesses को केवल 7 दिनों में Online लॉन्च करने में मदद करना।"
    },
    services: {
      title: "Online सफल होने के लिए आपको जो कुछ भी चाहिए।",
      subtitle: "हम केवल Websites नहीं बनाते; हम Digital Engines बनाते हैं जो आपके Business के विकास को गति देते हैं।",
      startBtn: "अपना Project शुरू करें",
      benefit: "लाभ"
    },
    templates: {
      title: "Websites जो हम बनाते हैं",
      subtitle: "हर Industry के लिए अनुकूलित Design।",
      viewDemo: "Demo देखें"
    },
    pricing: {
      title: "पारदर्शी Pricing",
      subtitle: "अपने Digital विकास में निवेश करें।",
      choose: "चुनें",
      monthly: "Monthly Option",
      downPayment: "Down payment",
      savesMoney: "Yearly plan पैसे बचाता है।",
      totalYearly: "Total yearly cost",
      plan: "Plan",
      benefit: "लाभ",
      mostPopular: "सबसे लोकप्रिय",
      value: "सबसे अच्छा मूल्य",
      smallBiz: "छोटे Business के लिए अनुकूल",
      bookBtn: "WhatsApp के माध्यम से बुकिंग की पुष्टि करें",
      starter: {
        name: "Starter",
        desc: "अपना Online अस्तित्व शुरू करने वाले छोटे Businesses के लिए सबसे अच्छा।",
        benefit: "पेशेवर विश्वास स्थापित करता है। ग्राहक आपके ब्रांड पर विश्वास करना बंद नहीं करते क्योंकि आपके पास डिजिटल उपस्थिति नहीं है।",
        features: ["1 Static Website", "Mobile optimized", "Hosting शामिल है", "Contact form", "WhatsApp बटन", "Google Maps लोकेशन"],
        originalPrice: "₹7,000",
        price: "₹5,000"
      },
      growth: {
        name: "Growth",
        desc: "Starter में सब कुछ शामिल है प्लस:",
        benefit: "पूछताछ शुरू करता है। आप अदृश्य होने से उन स्थानीय ग्राहकों द्वारा खोजे जाने तक जाते हैं जो सक्रिय रूप से आपकी तलाश कर रहे हैं।",
        features: ["Interactive website फीचर्स", "2 Websites तक", "Monthly website अपडेट", "Google Business प्रोफाइल सेटअप", "WhatsApp पूछताछ ऑटोमेशन"],
        originalPrice: "₹20,000",
        price: "₹15,000"
      },
      business: {
        name: "Business",
        desc: "Growth में सब कुछ शामिल है प्लस:",
        benefit: "स्थानीय बाजार पर हावी होता है। आपका व्यवसाय आपके क्षेत्र में Google और सोशल मीडिया पर पहली पसंद बन जाता है।",
        features: ["Unlimited website अपडेट", "Instagram पेज सेटअप", "प्रति माह 4 Instagram पोस्ट", "Basic SEO सेटअप", "Priority सपोर्ट"],
        originalPrice: "₹60,000",
        price: "₹45,000"
      },
      brand: {
        name: "Brand",
        desc: "Business में सब कुछ शामिल है प्लस:",
        benefit: "आपके राजस्व को स्वचालित रूप से बढ़ाता है। एक 24/7 सेल्स मशीन जो आपके मैन्युअल प्रयास के बिना अपॉइंटमेंट बुक करती है और लीड्स संभालती है।",
        features: ["Advanced interactive website", "Booking सिस्टम", "Reservation सिस्टम", "Enquiry फॉर्म", "प्रति माह 12 Instagram पोस्ट", "Social media कंटेंट डिज़ाइन", "Social media पोस्टिंग"],
        originalPrice: "₹1,50,000",
        price: "₹1,20,000"
      },
      enterprise: {
        name: "Enterprise",
        desc: "Brand में सब कुछ शामिल है प्लस:",
        benefit: "कुल बाजार अधिकार। आप पूरी तरह से संचालन पर ध्यान केंद्रित करते हैं जबकि हम आपके पूर्ण-स्तरीय डिजिटल विकास विभाग के रूप में कार्य करते हैं।",
        features: ["AI वॉयस असिस्टेंट इंटीग्रेशन", "On-site business विज़िट", "Professional कंटेंट निर्माण", "Custom website डिज़ाइन", "Full digital उपस्थिति मैनेजमेंट", "Marketing कंसल्टेशन"],
        originalPrice: "₹5,00,000",
        price: "₹3,00,000"
      }
    },
    usp: {
      title: "हमारा Enterprise USP",
      subtitle: "बड़े पैमाने पर विकास के लिए विशेष सुविधाएँ"
    },
    interactiveDemo: {
      title: "देखें कि हम क्या बनाते हैं",
      subtitle: "सभी डिवाइस पर हमारी प्रीमियम वेबसाइटों का अनुभव करें।"
    },
    footer: {
      tagline: "The Søren Studio — Businesses को Online Brands में बदलना।",
      desc: "हम प्रीमियम वेबसाइटें बनाते हैं और व्यवसायों को अधिक ग्राहकों तक पहुंचने में मदद करने के लिए डिजिटल उपस्थिति का प्रबंधन करते हैं।",
      links: "त्वरित लिंक",
      contact: "संपर्क",
      rights: "सर्वाधिकार सुरक्षित।"
    },
    webTypes: {
      title: "Static vs Interactive Website",
      subtitle: "(सरल स्पष्टीकरण)",
      static: "Static Website",
      staticDesc: "आपके Business के बारे में जानकारी दिखाता है। Visitors जानकारी देख सकते हैं लेकिन बहुत अधिक Interact नहीं कर सकते।",
      interactive: "Interactive Website",
      interactiveDesc: "Visitors Website पर सीधे कार्रवाई कर सकते हैं। यह Businesses को Leads और Bookings उत्पन्न करने में मदद करता है।",
      examples: "उदाहरण",
      leads: "Leads उत्पन्न करता है"
    },
    addons: {
      title: "Optional Add-Ons",
      subtitle: "Clients इन सेवाओं को कभी भी जोड़ सकते हैं।",
      addBtn: "Plan में जोड़ें"
    },
    stats: {
      websites: "Websites बनाई गईं",
      businesses: "Businesses Online",
      launch: "Average Launch"
    },
    portfolio: {
      title: "हमारे प्रोजेक्ट हाइलाइट्स",
      subtitle: "हम व्यवसायों को कैसे बदलते हैं, इसके वास्तविक उदाहरण।",
      project1: {
        title: "XzeCure",
        highlight: "Enterprise Project",
        desc: "एक उच्च-स्तरीय सुरक्षा प्लेटफ़ॉर्म जिसमें AI-संचालित हेडबोर्ड और पूर्ण नियंत्रण के लिए एक व्यापक एडमिन डैशबोर्ड है।",
        link: "https://www.XzeCure.com"
      },
      project2: {
        title: "Innovative Services",
        highlight: "Static Website",
        desc: "एक स्वच्छ, पेशेवर स्टेटिक वेबसाइट जिसे एक मजबूत डिजिटल उपस्थिति स्थापित करने और ग्राहकों का विश्वास बनाने के लिए डिज़ाइन किया गया है।",
        link: "https://innovativeservices.vercel.app"
      },
      project3: {
        title: "RetroStrip",
        highlight: "मोबाइल ऐप",
        desc: "एक मज़ेदार मोबाइल ऐप जो आपके फोन को विंटेज फोटो बूथ में बदल देता है। अपने डिवाइस पर तुरंत क्लासिक फिल्म-स्ट्रिप स्टाइल फोटो कैप्चर करें।",
        link: "https://retro-strip.vercel.app/"
      }
    },
    contact: {
      title: "Free Strategy Call बुक करें",
      subtitle: "आइए चर्चा करें कि हम आपके Business को Online कैसे बढ़ा सकते हैं।",
      name: "नाम",
      email: "Email",
      phone: "फोन नंबर",
      message: "संदेश",
      send: "WhatsApp के माध्यम से बुकिंग की पुष्टि करें",
      sending: "भेज रहे हैं...",
      success: "संदेश भेज दिया गया! हम जल्द ही आपसे संपर्क करेंगे।",
      error: "कुछ गलत हो गया। कृपया पुनः प्रयास करें।"
    },
    audit: {
      q1: "क्या आपके पास एक पेशेवर वेबसाइट है?",
      q2: "क्या ग्राहक Google पर आपका व्यवसाय ढूंढ सकते हैं?",
      q3: "क्या ग्राहक आपसे ऑनलाइन तुरंत संपर्क कर सकते हैं?",
      q4: "क्या ग्राहक आपसे सीधे ऑनलाइन बुकिंग या ऑर्डर करते हैं?",
      q5: "क्या आपको नियमित रूप से इंटरनेट से नए ग्राहक मिलते हैं?",
      options: {
        yes: "हाँ",
        no: "नहीं",
        sometimes: "कभी-कभी",
        topResults: "हाँ (शीर्ष परिणामों में दिखाई देता है)",
        notSure: "पक्का नहीं पता",
        whatsapp: "हाँ (WhatsApp / कॉल बटन)"
      },
      results: {
        title: "आपका बिजनेस विजिबिलिटी स्कोर",
        missingCustomers: "ग्राहक जो आप खो रहे हैं",
        revenueLoss: "अनुमानित राजस्व हानि",
        competitors: "आपके प्रतिस्पर्धी यह कर रहे हैं:",
        comp1: "Google पर पाए जा रहे हैं",
        comp2: "दैनिक पूछताछ प्राप्त कर रहे हैं",
        comp3: "WhatsApp के माध्यम से कनवर्ट कर रहे हैं",
        solution: "GetBizOnline के साथ:",
        recovery: "आप इसे 7 दिनों में रिकवर कर सकते हैं",
        cta: "अपना बिजनेस ऑनलाइन लाएं",
        powerMove: "आप जैसे व्यवसाय ऑनलाइन उपस्थिति के माध्यम से प्रतिदिन 2-5 नए ग्राहक प्राप्त कर रहे हैं।",
        perMonth: "प्रति माह",
        customersMonth: "ग्राहक/माह"
      }
    }
  }
};

// --- Components ---

function StartupAnimation({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-tmo-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-lg px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <img src={LOGO_URL} alt="Logo" className="h-24 w-auto rounded-2xl shadow-[0_0_50px_rgba(250,204,21,0.3)]" />
        </motion.div>

        {/* Growing Profits */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-4 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10"
        >
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Revenue Growth</p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-green-400"
            >
              +340% Profits
            </motion.p>
          </div>
        </motion.div>

        {/* Growing Customers */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center gap-4 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10"
        >
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Customer Base</p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-blue-400"
            >
              10k+ New Users
            </motion.p>
          </div>
        </motion.div>

        {/* Popularity */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex items-center gap-4 bg-tmo-gold/10 p-4 rounded-2xl border border-tmo-gold/20"
        >
          <div className="w-12 h-12 bg-tmo-gold/20 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-tmo-gold" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-tmo-gold/40">Market Status</p>
            <p className="text-xl font-bold text-tmo-gold">#1 Trending Studio</p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-[-60px] left-6 right-6 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-tmo-gold"
          />
        </div>
      </div>

      {/* Background Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 10,
            opacity: 0 
          }}
          animate={{ 
            y: -100,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 2 
          }}
          className="absolute w-1 h-1 bg-tmo-gold rounded-full"
        />
      ))}
    </motion.div>
  );
}

function ConversionBubble({ message, isVisible }: { message: string, isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, scale: 0.5, y: -20, x: "-50%" }}
          className="fixed bottom-24 left-1/2 z-[110] bg-white text-tmo-black px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-tmo-gold flex items-center gap-4 min-w-[280px]"
        >
          <div className="w-12 h-12 bg-tmo-gold/20 rounded-full flex items-center justify-center shrink-0">
            <TrendingIcon className="w-6 h-6 text-tmo-gold" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-tmo-black/40 mb-1">Estimated Growth</p>
            <p className="text-sm font-bold leading-tight">{message}</p>
          </div>
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute bottom-0 left-0 h-1 bg-tmo-gold rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Cart({ items, onRemove }: { items: string[], onRemove: (item: string) => void }) {
  if (items.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-[100] bg-tmo-gold text-tmo-black p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4"
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-tmo-black text-tmo-gold text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-tmo-gold">
          {items.length}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-wider">Items Added</span>
        <span className="text-sm font-medium truncate max-w-[150px]">{items[items.length - 1]}</span>
      </div>
      <a 
        href="#pricing" 
        className="bg-tmo-black text-tmo-gold px-4 py-2 rounded-xl text-xs font-bold hover:bg-white transition-colors"
      >
        View Plans
      </a>
    </motion.div>
  );
}

function Navbar({ lang, setLang, currentPage, setCurrentPage }: { 
  lang: Language, 
  setLang: (l: Language) => void,
  currentPage: string,
  setCurrentPage: (p: string) => void
}) {
  const t = translations[lang].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: lang === 'hi' ? "होम" : "Home" },
    { id: 'services', label: t.services },
    { id: 'portfolio', label: t.portfolio },
    { id: 'demo', label: t.demo },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'portfolio') {
      setCurrentPage('home');
      setIsMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById('portfolio');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tmo-gold backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-3">
          <img src={LOGO_URL} alt="The Søren Studio Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
          <span className="font-serif font-bold text-xl tracking-tight hidden sm:block text-tmo-black">The Søren Studio</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-tmo-black/80">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "hover:text-tmo-black transition-colors",
                currentPage === link.id ? "text-tmo-black font-bold" : "text-tmo-black/70"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-black/5 rounded-full p-1 border border-black/10">
            <button 
              onClick={() => setLang('en')}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", lang === 'en' ? "bg-tmo-black text-tmo-gold" : "text-black/50 hover:text-black")}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('hi')}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", lang === 'hi' ? "bg-tmo-black text-tmo-gold" : "text-black/50 hover:text-black")}
            >
              हिन्दी
            </button>
          </div>
          
          {/* Hamburger Toggle */}
          <button 
            className="md:hidden text-tmo-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button 
            onClick={() => handleNavClick('contact')}
            className="hidden sm:block bg-tmo-black text-tmo-gold px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-tmo-black transition-colors"
          >
            {t.book}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-tmo-gold border-b border-black/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "text-left text-lg font-medium",
                currentPage === link.id ? "text-tmo-black font-bold" : "text-tmo-black/80"
              )}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-tmo-black text-tmo-gold px-6 py-3 rounded-xl font-bold text-center"
          >
            {t.book}
          </button>
        </motion.div>
      )}
    </nav>
  );
}

function BusinessAudit({ lang }: { lang: Language }) {
  const t = translations[lang].audit;
  const [step, setStep] = useState(0); // 0: Start, 1-5: Questions, 6: Results
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      id: 1,
      text: t.q1,
      options: [
        { text: t.options.yes, points: 20 },
        { text: t.options.no, points: 0 }
      ]
    },
    {
      id: 2,
      text: t.q2,
      options: [
        { text: t.options.topResults, points: 30 },
        { text: t.options.sometimes, points: 15 },
        { text: t.options.no, points: 0 }
      ]
    },
    {
      id: 3,
      text: t.q3,
      options: [
        { text: t.options.whatsapp, points: 15 },
        { text: t.options.no, points: 0 }
      ]
    },
    {
      id: 4,
      text: t.q4,
      options: [
        { text: t.options.yes, points: 15 },
        { text: t.options.no, points: 0 }
      ]
    },
    {
      id: 5,
      text: t.q5,
      options: [
        { text: t.options.yes, points: 20 },
        { text: t.options.notSure, points: 10 },
        { text: t.options.no, points: 0 }
      ]
    }
  ];

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);
    if (step < 5) {
      setStep(step + 1);
    } else {
      setStep(6);
    }
  };

  const calculateResults = () => {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    let status = "";
    let revenueLoss = "";
    let missingCustomers = "";
    let color = "";

    if (totalScore <= 40) {
      status = lang === 'hi' ? "उच्च हानि 🚨" : "High loss 🚨";
      revenueLoss = "₹50,000 – ₹1,00,000";
      missingCustomers = "200 – 400";
      color = "text-red-500";
    } else if (totalScore <= 70) {
      status = lang === 'hi' ? "मध्यम हानि ⚠️" : "Moderate loss ⚠️";
      revenueLoss = "₹20,000 – ₹50,000";
      missingCustomers = "100 – 200";
      color = "text-yellow-500";
    } else {
      status = lang === 'hi' ? "सुधार की गुंजाइश 👍" : "Good but can improve 👍";
      revenueLoss = "₹10,000 – ₹20,000";
      missingCustomers = "50 – 100";
      color = "text-green-500";
    }

    return { totalScore, status, revenueLoss, missingCustomers, color };
  };

  if (step === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 mb-12"
      >
        <button 
          onClick={() => setStep(1)}
          className="shimmer-gold-bg text-tmo-black px-10 py-5 rounded-2xl font-bold text-xl hover:scale-[1.05] transition-all shadow-2xl flex items-center gap-3 mx-auto"
        >
          {translations[lang].hero.startAudit}
        </button>
      </motion.div>
    );
  }

  if (step <= 5) {
    const q = questions[step - 1];
    return (
      <div className="mt-8 mb-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(step / 5) * 100}%` }}
            className="h-full bg-tmo-gold"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-4"
          >
            <span className="text-tmo-gold font-mono text-sm mb-2 block">Question {step} of 5</span>
            <h3 className="text-2xl font-serif font-bold mb-8 text-white">{q.text}</h3>
            <div className="grid gap-4">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.points)}
                  className="w-full text-left p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-tmo-gold transition-all text-white font-medium flex justify-between items-center group"
                >
                  {opt.text}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  const results = calculateResults();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-8 mb-12 max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-[2rem] p-8 md:p-12 shadow-2xl text-left"
    >
      <div className="text-center mb-10">
        <h3 className="text-xl text-white/60 mb-2">{t.results.title}</h3>
        <div className="text-7xl font-serif font-black text-tmo-gold mb-4">
          {results.totalScore} <span className="text-2xl text-white/40">/ 100</span>
        </div>
        <div className={cn("text-2xl font-bold", results.color)}>
          {results.status}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-2 text-red-400">
            <Users className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-xs">{t.results.missingCustomers}</span>
          </div>
          <div className="text-3xl font-bold text-white">~{results.missingCustomers}</div>
          <div className="text-white/40 text-sm">{t.results.customersMonth}</div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-2 text-red-400">
            <TrendingIcon className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-xs">{t.results.revenueLoss}</span>
          </div>
          <div className="text-3xl font-bold text-white">{results.revenueLoss}</div>
          <div className="text-white/40 text-sm">{t.results.perMonth}</div>
        </div>
      </div>

      <div className="space-y-8 mb-10">
        <div>
          <h4 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">{t.results.competitors}</h4>
          <ul className="space-y-3">
            {[t.results.comp1, t.results.comp2, t.results.comp3].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-tmo-gold/10 border border-tmo-gold/20">
          <div className="flex items-center gap-3 mb-2 text-tmo-gold">
            <Rocket className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-xs">{t.results.solution}</span>
          </div>
          <p className="text-xl font-bold text-white mb-4">{t.results.recovery}</p>
          <p className="text-white/60 text-sm italic">
            "{t.results.powerMove}"
          </p>
        </div>
      </div>

      <button 
        onClick={() => {
          const pricingSection = document.getElementById('pricing');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="w-full shimmer-gold-bg text-tmo-black py-5 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3"
      >
        {t.results.cta}
        <ArrowRight className="w-6 h-6" />
      </button>
      
      <button 
        onClick={() => {
          setStep(0);
          setAnswers([]);
        }}
        className="w-full mt-4 text-white/40 hover:text-white/60 text-sm transition-colors"
      >
        {lang === 'hi' ? "फिर से शुरू करें" : "Restart Audit"}
      </button>
    </motion.div>
  );
}

function Hero({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src={VIDEO_URL} type="video/quicktime" />
          <source src={VIDEO_URL} type="video/mp4" />
          {/* Fallback if mov doesn't play */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-tmo-black/10 via-tmo-black/40 to-tmo-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Language Toggle in Hero as requested */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20">
            <button 
              onClick={() => setLang('en')}
              className={cn("px-6 py-2 rounded-full text-sm font-bold transition-all", lang === 'en' ? "bg-tmo-gold text-tmo-black shadow-lg" : "text-white/70 hover:text-white")}
            >
              English
            </button>
            <button 
              onClick={() => setLang('hi')}
              className={cn("px-6 py-2 rounded-full text-sm font-bold transition-all", lang === 'hi' ? "bg-tmo-gold text-tmo-black shadow-lg" : "text-white/70 hover:text-white")}
            >
              हिन्दी
            </button>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6"
        >
          {t.title} <span className="text-tmo-gold italic">{t.titleAccent}</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 font-light flex items-center justify-center gap-3 flex-wrap"
        >
          {t.aiSubtitle}
        </motion.div>

        <BusinessAudit lang={lang} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto shimmer-gold-bg text-tmo-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            {t.bookBtn} <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors"
          >
            {t.workBtn}
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingIcon icon={Globe} className="top-1/4 left-1/4" delay={0} />
      <FloatingIcon icon={Smartphone} className="top-1/3 right-1/4" delay={1} />
      <FloatingIcon icon={TrendingUp} className="bottom-1/3 left-1/3" delay={2} />
      <FloatingIcon icon={Users} className="bottom-1/4 right-1/3" delay={3} />
    </section>
  );
}

function FloatingIcon({ icon: Icon, className, delay }: { icon: any, className: string, delay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      className={cn("absolute hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-tmo-gold", className)}
    >
      <Icon className="w-8 h-8" />
    </motion.div>
  );
}

function SocialProof({ lang }: { lang: Language }) {
  const t = translations[lang].social;
  const industriesEn = ["Restaurants", "Clinics", "Gyms", "Salons", "Real Estate", "Coaching Institutes"];
  const industriesHi = ["रेस्टोरेंट", "क्लीनिक", "जिम", "सैलून", "रियल एस्टेट", "कोचिंग संस्थान"];
  const industries = lang === 'hi' ? industriesHi : industriesEn;
  
  return (
    <section className="py-20 border-b border-white/5 bg-tmo-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-8">{t.trusted}</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
          {industries.map((industry, i) => (
            <span key={i} className="text-xl md:text-2xl font-serif italic text-white/80">{industry}</span>
          ))}
        </div>
        <p className="mt-10 text-tmo-gold font-medium">"{t.quote}"</p>
      </div>
    </section>
  );
}

function InteractiveDemo({ lang }: { lang: Language }) {
  const t = translations[lang].interactiveDemo;
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>

        <div className="relative flex justify-center items-end h-[400px] md:h-[600px]">
          {/* Laptop */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="absolute z-10 w-[80%] md:w-[60%] max-w-3xl bottom-0 shadow-2xl shadow-black/50 rounded-t-xl overflow-hidden border-t border-x border-white/10 bg-zinc-900"
          >
            <div className="h-6 bg-zinc-800 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Restaurant Demo" className="w-full h-auto object-cover opacity-80" />
          </motion.div>

          {/* Tablet */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="absolute z-20 w-[30%] md:w-[25%] max-w-sm bottom-0 left-[5%] md:left-[15%] shadow-2xl shadow-black/50 rounded-t-xl overflow-hidden border-t border-x border-white/10 bg-zinc-900"
          >
             <div className="h-4 bg-zinc-800 border-b border-white/10 flex items-center justify-center">
               <div className="w-1 h-1 rounded-full bg-white/20"></div>
             </div>
            <img src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1887&auto=format&fit=crop" alt="Gym Demo" className="w-full h-auto object-cover opacity-80" />
          </motion.div>

          {/* Phone */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="absolute z-30 w-[20%] md:w-[15%] max-w-xs bottom-0 right-[10%] md:right-[20%] shadow-2xl shadow-black/50 rounded-t-2xl overflow-hidden border-t border-x border-white/10 bg-zinc-900"
          >
            <div className="h-5 bg-zinc-800 border-b border-white/10 flex items-center justify-center">
               <div className="w-8 h-1 rounded-full bg-white/20"></div>
             </div>
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="Clinic Demo" className="w-full h-auto object-cover opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MiniWebsitePreview({ type, name, isFull = false }: { type: string, name: string, isFull?: boolean }) {
  const themes: Record<string, any> = {
    restaurant: {
      primary: "text-orange-500",
      bg: "bg-orange-500",
      accent: "bg-orange-50",
      icon: Utensils,
      hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      items: ["Signature Pizza", "Pasta Carbonara", "Garden Salad"],
      cta: "Reserve Table",
      sections: ["Menu", "Gallery", "Reviews"]
    },
    clinic: {
      primary: "text-blue-600",
      bg: "bg-blue-600",
      accent: "bg-blue-50",
      icon: Stethoscope,
      hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
      items: ["General Checkup", "Dental Care", "Pediatrics"],
      cta: "Book Appointment",
      sections: ["Doctor Profile", "Services", "Testimonials"]
    },
    gym: {
      primary: "text-red-600",
      bg: "bg-red-600",
      accent: "bg-zinc-900",
      icon: Dumbbell,
      hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      items: ["Weight Training", "Cardio Zone", "Yoga Classes"],
      cta: "Join Now",
      sections: ["Plans", "Trainers", "Schedule"]
    },
    salon: {
      primary: "text-pink-500",
      bg: "bg-pink-500",
      accent: "bg-pink-50",
      icon: Scissors,
      hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
      items: ["Hair Styling", "Facial Spa", "Manicure"],
      cta: "Book Appointment",
      sections: ["Services", "Gallery", "Offers"]
    },
    coaching: {
      primary: "text-indigo-600",
      bg: "bg-indigo-600",
      accent: "bg-indigo-50",
      icon: GraduationCap,
      hero: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
      items: ["Maths Mastery", "Science Lab", "English Prep"],
      cta: "Enquire Now",
      sections: ["Courses", "Faculty", "Results"]
    },
    realestate: {
      primary: "text-amber-600",
      bg: "bg-amber-600",
      accent: "bg-amber-50",
      icon: Home,
      hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      items: ["Luxury Villas", "Modern Flats", "Commercial Space"],
      cta: "Contact Agent",
      sections: ["Listings", "Map", "Enquiry"]
    },
    enterprise: {
      primary: "text-slate-800",
      bg: "bg-slate-800",
      accent: "bg-slate-50",
      icon: Building2,
      hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      items: ["Manufacturing", "Supply Chain", "Global Export"],
      cta: "Get Quote",
      sections: ["Products", "Factory", "Contact"]
    }
  };

  const theme = themes[type] || themes.enterprise;
  const Icon = theme.icon;

  return (
    <div className={cn("w-full h-full flex flex-col bg-white text-slate-900 font-sans overflow-hidden", isFull ? "text-base" : "text-[8px]")}>
      {/* Mini Nav */}
      <nav className={cn("flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-white shrink-0", isFull ? "h-16" : "h-8")}>
        <div className="flex items-center gap-1">
          <Icon className={cn(theme.primary, isFull ? "w-6 h-6" : "w-3 h-3")} />
          <span className="font-bold truncate max-w-[80px]">{name}</span>
        </div>
        <div className="flex gap-2">
          {theme.sections.map((s: string, i: number) => (
            <div key={i} className="hidden md:block text-[6px] font-medium text-slate-400">{s}</div>
          ))}
          <div className="w-4 h-1 bg-slate-200 rounded-full md:hidden"></div>
        </div>
      </nav>

      {/* Mini Hero */}
      <div className="relative flex-1 overflow-y-auto scrollbar-hide">
        <div className={cn("relative overflow-hidden", isFull ? "h-80" : "h-24")}>
          <img src={theme.hero} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
            <h4 className={cn("text-white font-bold mb-2", isFull ? "text-4xl" : "text-xs")}>{name}</h4>
            <p className={cn("text-white/80 mb-4", isFull ? "text-lg" : "text-[6px]")}>
              {type === 'restaurant' ? "Experience the finest taste in town." :
               type === 'clinic' ? "Your health is our top priority." :
               type === 'gym' ? "Push your limits, achieve your goals." :
               "Premium services tailored for your needs."}
            </p>
            <button className={cn("text-white px-4 py-1 rounded-full font-bold shadow-lg transform active:scale-95 transition-transform", theme.bg, isFull ? "text-sm py-3 px-10" : "text-[6px]")}>
              {theme.cta}
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-4 space-y-6">
          {/* Category Specific Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h5 className={cn("font-bold", isFull ? "text-xl" : "text-[8px]")}>
                {type === 'restaurant' ? "Our Menu" : 
                 type === 'clinic' ? "Specializations" : 
                 type === 'gym' ? "Our Classes" : "Our Services"}
              </h5>
              <span className={cn("text-slate-400 font-medium", isFull ? "text-sm" : "text-[6px]")}>View All</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {theme.items.map((item: string, i: number) => (
                <div key={i} className={cn("p-3 rounded-lg border border-slate-100 flex items-center justify-between group hover:border-slate-200 transition-colors", theme.accent)}>
                  <span className="font-medium">{item}</span>
                  <ArrowRight className={cn("w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity", theme.primary)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PREMIUM_TEMPLATES = [
  { borderAccent: "border-tmo-gold" },
  { borderAccent: "border-indigo-500" },
  { borderAccent: "border-emerald-500" },
  { borderAccent: "border-rose-500" },
  { borderAccent: "border-amber-500" }
];

function DemoSite({ lang, likedDemo, setLikedDemo }: { lang: Language, likedDemo: boolean, setLikedDemo: (l: boolean) => void }) {
  const t = translations[lang].hero;
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("restaurant");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedType, setSubmittedType] = useState("restaurant");
  const [templateIndex, setTemplateIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName.trim()) {
      setSubmittedName(businessName);
      setSubmittedType(businessType);
      setTemplateIndex(Math.floor(Math.random() * PREMIUM_TEMPLATES.length));
    }
  };

  const tpl = PREMIUM_TEMPLATES[templateIndex];
  const industries = [
    { id: 'restaurant', label: lang === 'hi' ? "रेस्टोरेंट" : "Restaurant" },
    { id: 'clinic', label: lang === 'hi' ? "क्लीनिक" : "Clinic" },
    { id: 'gym', label: lang === 'hi' ? "जिम" : "Gym" },
    { id: 'salon', label: lang === 'hi' ? "सैलून" : "Salon" },
    { id: 'coaching', label: lang === 'hi' ? "कोचिंग" : "Coaching" },
    { id: 'realestate', label: lang === 'hi' ? "रियल एस्टेट" : "Real Estate" },
    { id: 'enterprise', label: lang === 'hi' ? "एंटरप्राइज" : "Enterprise" },
  ];

  return (
    <section id="demo" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{lang === 'hi' ? "अंतर देखें" : "See The Difference"}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{lang === 'hi' ? "यह देखने के लिए कि एक प्रीमियम वेबसाइट बेसिक वेबसाइट की तुलना में कैसी दिखती है, अपने बिजनेस का नाम और प्रकार चुनें।" : "Enter your business name and type to see what a premium website looks like compared to a basic one."}</p>
        </div>

        {!submittedName ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="text" 
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder={t.demoPlaceholder} 
              className="bg-tmo-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors"
              required
            />
            <select 
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="bg-tmo-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors appearance-none"
              required
            >
              {industries.map(ind => (
                <option key={ind.id} value={ind.id} className="bg-zinc-900">{ind.label}</option>
              ))}
            </select>
            <button 
              type="submit" 
              className="bg-tmo-gold text-tmo-black px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors"
            >
              {lang === 'hi' ? "Demo उत्पन्न करें" : "Generate Demo"}
            </button>
          </form>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Design 1: Basic */}
            <div className="flex flex-col gap-4">
              <div className="border border-white/20 rounded-xl overflow-hidden bg-white h-[600px] flex flex-col">
                <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 overflow-y-auto bg-amber-50 text-black font-sans flex flex-col">
                  <header className="p-6 border-b border-gray-300 bg-white shrink-0">
                    <h1 className="text-3xl font-bold text-blue-900">{submittedName}</h1>
                    <nav className="mt-4">
                      <ul className="flex gap-4 text-blue-600 underline text-sm">
                        <li>{lang === 'hi' ? "होम" : "Home"}</li>
                        <li>{lang === 'hi' ? "हमारे बारे में" : "About Us"}</li>
                        <li>{lang === 'hi' ? "सेवाएं" : "Services"}</li>
                        <li>{lang === 'hi' ? "संपर्क" : "Contact"}</li>
                      </ul>
                    </nav>
                  </header>
                  <main className="p-6 flex-1">
                    <h2 className="text-xl font-bold mb-4">{lang === 'hi' ? `${submittedName} में आपका स्वागत है` : `Welcome to ${submittedName}`}</h2>
                    <p className="mb-4 text-gray-700">{lang === 'hi' ? "हम अपने ग्राहकों के लिए सर्वोत्तम सेवाएं प्रदान करते हैं। हम जो करते हैं उसके बारे में अधिक जानने के लिए आज ही हमसे संपर्क करें।" : "We provide the best services for our customers. Contact us today to learn more about what we do."}</p>
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 border border-gray-400 mb-4">
                      [Image Placeholder]
                    </div>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>{lang === 'hi' ? "गुणवत्ता सेवा" : "Quality Service"}</li>
                      <li>{lang === 'hi' ? "किफायती कीमतें" : "Affordable Prices"}</li>
                      <li>{lang === 'hi' ? "ग्राहक संतुष्टि" : "Customer Satisfaction"}</li>
                    </ul>
                  </main>
                  <footer className="p-6 bg-gray-200 border-t border-gray-300 text-sm text-gray-600 shrink-0">
                    <p>{lang === 'hi' ? "संपर्क" : "Contact"}: +91 1122434455</p>
                    <p className="mt-2 text-blue-600 underline">Facebook | Twitter</p>
                    <p className="mt-4 text-xs text-gray-500">© 2023 {submittedName}</p>
                  </footer>
                </div>
              </div>
              <p className="text-center font-bold text-white/50 text-xl tracking-widest uppercase mt-2">{lang === 'hi' ? "दूसरे क्या बनाते हैं" : "What Others make"}</p>
            </div>

            {/* Design 2: Premium */}
            <div className="flex flex-col gap-4">
              <div className={cn("border rounded-xl overflow-hidden h-[600px] flex flex-col relative shadow-2xl shadow-black/50 group", tpl.borderAccent)}>
                <MiniWebsitePreview type={submittedType} name={submittedName} isFull={true} />
                
                {/* Heart Button */}
                <button 
                  onClick={() => setLikedDemo(!likedDemo)}
                  className={cn(
                    "absolute top-6 right-6 p-4 rounded-full backdrop-blur-md border transition-all duration-300 z-50",
                    likedDemo 
                      ? "bg-red-500 border-red-400 text-white scale-110 shadow-lg shadow-red-500/40" 
                      : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  )}
                >
                  <Heart className={cn("w-6 h-6", likedDemo && "fill-current")} />
                </button>

                {likedDemo && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-tmo-gold text-tmo-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl z-50"
                  >
                    {lang === 'hi' ? "आपको यह डिज़ाइन पसंद आया!" : "You liked this design!"}
                  </motion.div>
                )}
              </div>
              <p className="text-center font-bold text-tmo-gold text-xl tracking-widest uppercase mt-2">{lang === 'hi' ? "हम क्या बनाते हैं" : "What We make"}</p>
            </div>
          </div>
        )}
        
        {submittedName && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setSubmittedName("")}
              className="text-white/50 hover:text-white transition-colors underline"
            >
              {lang === 'hi' ? "दूसरा Business नाम आज़माएं" : "Try another business name"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function EnterpriseUSP({ lang }: { lang: Language }) {
  const t = translations[lang].usp;
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-tmo-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">{t.subtitle}</p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                {t.title}
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-tmo-gold/10 rounded-2xl flex items-center justify-center shrink-0 border border-tmo-gold/20">
                    <Zap className="w-6 h-6 text-tmo-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{lang === 'hi' ? "डेटा-संचालित ऑडिट" : "Data-Driven Audit"}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {lang === 'hi' ? "हमारा उन्नत सिस्टम आपके डिजिटल पदचिह्न का विश्लेषण करता है और तत्काल सुधार योजना प्रदान करता है।" : "Our advanced system analyzes your digital footprint and provides an instant improvement plan."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-tmo-gold/10 rounded-2xl flex items-center justify-center shrink-0 border border-tmo-gold/20">
                    <TrendingUp className="w-6 h-6 text-tmo-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{lang === 'hi' ? "कस्टम कनवर्जन इंजन" : "Custom Conversion Engine"}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {lang === 'hi' ? "हम आपके बिजनेस के लिए विशिष्ट मॉडल बनाते हैं जो ग्राहकों के व्यवहार का विश्लेषण करते हैं।" : "We build custom models specific to your business that analyze customer behavior."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 bg-tmo-black border border-white/10 p-8 rounded-[3rem] shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-auto text-[10px] text-white/30 font-mono tracking-widest uppercase">{lang === 'hi' ? "बिजनेस डैशबोर्ड" : "Business Dashboard"}</div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{lang === 'hi' ? "कुल विज़िटर्स" : "Total Visitors"}</p>
                    <p className="text-2xl font-bold text-white">12,482</p>
                  </div>
                  <div className="text-green-400 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +24%
                  </div>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${20 + Math.random() * 80}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 bg-tmo-gold/20 rounded-t-sm border-t border-x border-tmo-gold/30"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{lang === 'hi' ? "कनवर्जन" : "Conversions"}</p>
                    <p className="text-lg font-bold text-tmo-gold">8.4%</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{lang === 'hi' ? "रेवेन्यू" : "Revenue"}</p>
                    <p className="text-lg font-bold text-white">₹2.4L</p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-tmo-gold/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tmo-gold/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ lang, onAddToCart }: { lang: Language, onAddToCart: (item: string) => void }) {
  const t = translations[lang].services;
  const services = [
    {
      icon: LayoutTemplate,
      title: lang === 'hi' ? "Website निर्माण" : "Website Creation",
      desc: lang === 'hi' ? "विज़िटर्स को ग्राहकों में बदलने के लिए डिज़ाइन की गई कस्टम वेबसाइटें।" : "Custom websites designed to convert visitors into customers.",
      benefit: lang === 'hi' ? "भरोसा बनाकर और खरीदारी या बुकिंग को आसान बनाकर विज़िटर्स को भुगतान करने वाले ग्राहकों में बदलता है।" : "Turns visitors into paying customers by building trust and making it easy to buy or book.",
      benefitIcon: IndianRupee,
      animation: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <motion.div 
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 right-4"
          >
            <Monitor className="w-12 h-12" />
          </motion.div>
        </div>
      )
    },
    {
      icon: Search,
      title: lang === 'hi' ? "Google Ranking सेटअप" : "Google Ranking Setup",
      desc: lang === 'hi' ? "Google Business प्रोफाइल ऑप्टिमाइज़ेशन, लोकल कीवर्ड सेटअप, मैप इंटीग्रेशन, रिव्यू सेटअप और बेसिक SEO।" : "Google Business profile optimization, local keyword setup, map integration, review setup, and basic website SEO.",
      price: "₹5,999",
      benefit: lang === 'hi' ? "जब लोकल ग्राहक आपकी सेवाओं की खोज करते हैं तो आपको Google पर आसानी से खोजने योग्य बनाता है।" : "Makes you easily discoverable on Google when local customers search for your services.",
      benefitIcon: Rocket,
      animation: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <motion.div 
            animate={{ 
              x: [10, 80, 10, 40, 10], 
              y: [10, 30, 60, 20, 10] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute"
          >
            <Search className="w-16 h-16 text-tmo-gold/40" />
          </motion.div>
        </div>
      )
    },
    {
      icon: Server,
      title: lang === 'hi' ? "होस्टिंग और मेंटेनेंस" : "Hosting & Maintenance",
      desc: lang === 'hi' ? "अपडेट और सुरक्षा के साथ तेज़ होस्टिंग शामिल है।" : "Fast hosting with updates and security included.",
      benefit: lang === 'hi' ? "आपकी साइट को तेज़, सुरक्षित और 24/7 ऑनलाइन रखता है ताकि आप डाउनटाइम के कारण कभी ग्राहक न खोएं।" : "Keeps your site fast, secure, and online 24/7 so you never lose a customer to downtime.",
      benefitIcon: ShieldCheck
    },
    {
      icon: Share2,
      title: lang === 'hi' ? "सोशल मीडिया मैनेजमेंट" : "Social Media Management",
      desc: lang === 'hi' ? "आपके ब्रांड के लिए प्रोफेशनल Instagram कंटेंट।" : "Professional Instagram content for your brand.",
      benefit: lang === 'hi' ? "एक वफादार समुदाय बनाता है और आपके ब्रांड को बार-बार बिजनेस के लिए याद रखता है।" : "Builds a loyal community and keeps your brand top-of-mind for repeat business.",
      benefitIcon: Heart,
      animation: (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0.5, 1.2, 0.8],
                y: [-20, -60],
                x: (i - 2) * 20
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.4,
                ease: "easeOut"
              }}
              className="absolute bottom-10 left-1/2 text-tmo-gold"
            >
              {i % 2 === 0 ? <Heart className="w-4 h-4 fill-current" /> : <MessageCircle className="w-4 h-4" />}
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-32 bg-tmo-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.title}</h2>
            <p className="text-white/60 text-lg mb-8">{t.subtitle}</p>
            <button 
              onClick={() => onAddToCart("Full Digital Package")}
              className="inline-flex items-center gap-2 shimmer-gold font-semibold hover:text-white transition-colors"
            >
              {lang === 'hi' ? "अपना प्रोजेक्ट शुरू करें" : "Start your project"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col group relative overflow-hidden"
              >
                {s.animation}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <s.icon className="w-10 h-10 text-tmo-gold" />
                  <button 
                    onClick={() => onAddToCart(s.title)}
                    className="p-2 bg-white/5 rounded-full hover:shimmer-gold-bg hover:text-tmo-black transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1 relative z-10">{s.desc}</p>
                {s.price && <p className="text-tmo-gold font-bold mb-4 relative z-10">{s.price}</p>}
                <div className="bg-tmo-gold/10 border border-tmo-gold/20 rounded-xl p-4 mt-auto group-hover:border-tmo-gold/40 transition-colors relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 shimmer-gold-bg text-tmo-black rounded-lg">
                      <s.benefitIcon className="w-4 h-4" />
                    </div>
                    <p className="text-tmo-gold text-xs font-bold uppercase tracking-widest shimmer-gold">{lang === 'hi' ? "फायदा" : "Benefit"}</p>
                  </div>
                  <p className="text-white/90 text-sm mt-2 leading-tight">{s.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Language }) {
  const t = translations[lang].about;
  return (
    <section id="about" className="py-32 bg-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-tmo-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tmo-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              {t.title}
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center group hover:bg-white/10 transition-colors"
            >
              <div className="w-20 h-20 bg-tmo-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-10 h-10 text-tmo-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">{t.team.nimeet.name}</h3>
              <p className="text-tmo-gold font-medium text-sm uppercase tracking-widest">{t.team.nimeet.role}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center group hover:bg-white/10 transition-colors"
            >
              <div className="w-20 h-20 bg-tmo-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-10 h-10 text-tmo-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">{t.team.kenil.name}</h3>
              <p className="text-tmo-gold font-medium text-sm uppercase tracking-widest">{t.team.kenil.role}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthCalculator({ lang }: { lang: Language }) {
  const [adSpend, setAdSpend] = useState(5000);
  const [cpc, setCpc] = useState(15);
  const [convRate, setConvRate] = useState(2);

  const reach = Math.floor(adSpend / cpc);
  const leads = Math.floor(reach * (convRate / 100));
  const avgOrderValue = 2500;
  const profit = leads * avgOrderValue;

  return (
    <section id="growth-calculator" className="py-24 bg-tmo-black border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {lang === 'hi' ? "अपने बिजनेस की ग्रोथ देखें" : "Calculate Your Business Growth"}
          </h2>
          <p className="text-white/60">
            {lang === 'hi' ? "स्लाइडर्स को एडजस्ट करें और देखें कि विज्ञापन आपके बिजनेस को कैसे बदल सकते हैं" : "Adjust the sliders to see how ads can transform your business"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white/5 p-8 rounded-[2rem] border border-white/10">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "मासिक विज्ञापन बजट" : "Monthly Ad Spend"}</label>
                <span className="text-tmo-gold font-bold">₹{adSpend.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="1000" max="100000" step="1000" 
                value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-tmo-gold"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "प्रति क्लिक लागत (CPC)" : "Cost Per Click (CPC)"}</label>
                <span className="text-tmo-gold font-bold">₹{cpc}</span>
              </div>
              <input 
                type="range" min="5" max="100" step="1" 
                value={cpc} onChange={(e) => setCpc(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-tmo-gold"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "कनवर्जन रेट (%)" : "Conversion Rate (%)"}</label>
                <span className="text-tmo-gold font-bold">{convRate}%</span>
              </div>
              <input 
                type="range" min="0.5" max="10" step="0.5" 
                value={convRate} onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-tmo-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{lang === 'hi' ? "अनुमानित पहुंच" : "Estimated Reach"}</p>
              <p className="text-3xl font-bold text-white">{reach.toLocaleString()} <span className="text-sm font-normal text-white/40">{lang === 'hi' ? "लोग" : "people"}</span></p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{lang === 'hi' ? "पोटेंशियल लीड्स" : "Potential Leads"}</p>
              <p className="text-3xl font-bold text-tmo-gold">{leads.toLocaleString()}</p>
            </div>
            <div className="bg-tmo-gold p-6 rounded-2xl">
              <p className="text-tmo-black/60 text-xs uppercase tracking-wider mb-1">{lang === 'hi' ? "अनुमानित रेवेन्यू" : "Estimated Revenue"}</p>
              <p className="text-4xl font-bold text-tmo-black">₹{profit.toLocaleString()}</p>
              <p className="text-tmo-black/40 text-[10px] mt-2 italic">* {lang === 'hi' ? "₹2,500 की औसत ऑर्डर वैल्यू के आधार पर" : "Based on ₹2,500 average order value"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AddOns({ lang, onSelectAddOn }: { lang: Language, onSelectAddOn: (addon: string) => void }) {
  const t = translations[lang].addons;
  const addons = [
    { 
      name: lang === 'hi' ? "अतिरिक्त Website पेज" : "Extra Website Page", 
      price: "₹499", 
      period: lang === 'hi' ? "/ वर्ष प्रति पेज" : "/ year per page", 
      desc: lang === 'hi' ? "अधिक स्थान चाहिए? अधिक कंटेंट दिखाने के लिए अपनी वेबसाइट में कभी भी अतिरिक्त पेज जोड़ें।" : "Need more space? Add extra pages to your website anytime to showcase more content.",
      benefit: lang === 'hi' ? "आपको विशिष्ट सेवाओं या उत्पादों का विवरण देने की अनुमति देता है, जिससे SEO और ग्राहक की समझ में सुधार होता है।" : "Allows you to detail specific services or products, improving SEO and customer understanding."
    },
    { 
      name: lang === 'hi' ? "प्रोफेशनल फोटोशूट" : "Professional Photoshoot", 
      price: "₹10,000", 
      desc: lang === 'hi' ? "दुकान, उत्पादों, टीम और कार्यक्षेत्र की उच्च गुणवत्ता वाली तस्वीरें। वेबसाइट और सोशल मीडिया के लिए बिल्कुल सही।" : "High-quality photos of shop, products, team, and workspace. Perfect for website and social media.",
      benefit: lang === 'hi' ? "उच्च गुणवत्ता वाले दृश्यों के साथ आपके ब्रांड के कथित मूल्य को तुरंत बढ़ाता है और अपार विश्वास बनाता है।" : "Instantly elevates your brand's perceived value and builds immense trust with high-quality visuals.",
      animation: (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ 
                duration: 0.2, 
                repeat: Infinity, 
                repeatDelay: 1.5 + Math.random() * 2,
                delay: i * 0.5
              }}
              className="absolute inset-0 bg-white"
            />
          ))}
        </div>
      )
    },
    { 
      name: lang === 'hi' ? "Google / Facebook पेज + Ad सेटअप" : "Google / Facebook Page + Ad Setup", 
      price: "₹5,999", 
      desc: lang === 'hi' ? "इसमें Google Business पेज सेटअप, Facebook बिजनेस पेज सेटअप और विज्ञापन अभियान सेटअप शामिल है। (विज्ञापन चलाने की लागत Google/Facebook को अलग से भुगतान की जाती है।)" : "Includes Google Business page setup, Facebook business page setup, and Advertisement campaign setup. (Ad running cost paid separately to Google/Facebook.)",
      benefit: lang === 'hi' ? "आपके बिजनेस को सीधे उन लोगों के सामने रखता है जो सक्रिय रूप से वह खरीदना चाहते हैं जो आप बेचते हैं।" : "Puts your business directly in front of people actively looking to buy what you sell.",
      showTryNow: true
    },
    { 
      name: lang === 'hi' ? "Google Ranking सेटअप" : "Google Ranking Setup", 
      price: "₹5,999", 
      period: lang === 'hi' ? "एक बार" : "one-time",
      desc: lang === 'hi' ? "इसमें शामिल है: Google Business प्रोफाइल ऑप्टिमाइज़ेशन, लोकल कीवर्ड सेटअप, Google मैप इंटीग्रेशन, रिव्यू सेटअप, बेसिक वेबसाइट SEO।" : "Includes: Google Business profile optimization, local keyword setup, map integration, review setup, basic website SEO.",
      benefit: lang === 'hi' ? "आपके बिजनेस को लोकल सर्च परिणामों में सबसे ऊपर ले जाता है, जिससे आपके दरवाजे पर मुफ्त, उच्च-इरादे वाला ट्रैफ़िक आता है।" : "Pushes your business to the top of local search results, driving free, high-intent traffic to your door.",
      showTryNow: true
    }
  ];

  const handleTryNow = () => {
    const element = document.getElementById('growth-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-tmo-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.title}</h2>
          <p className="text-white/60 text-lg">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col relative overflow-hidden group">
              {addon.animation && addon.animation}
              <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold shimmer-gold">{addon.price}</span>
                {addon.period && <span className="text-white/50 text-sm ml-1">{addon.period}</span>}
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">{addon.desc}</p>
              <div className="bg-tmo-gold/10 border border-tmo-gold/20 rounded-lg p-3 mb-4">
                <p className="text-tmo-gold text-xs font-medium shimmer-gold"><span className="font-bold">{lang === 'hi' ? "लाभ" : "Benefit"}:</span> {addon.benefit}</p>
              </div>
              
              <div className="flex flex-col gap-2 mt-auto">
                {addon.showTryNow && (
                  <button 
                    onClick={handleTryNow}
                    className="w-full py-2 rounded-full text-sm font-semibold bg-tmo-gold text-tmo-black hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    {lang === 'hi' ? "अभी आज़माएं" : "Try Now"}
                  </button>
                )}
                <button 
                  onClick={() => onSelectAddOn(addon.name)}
                  className="w-full py-2 rounded-full text-sm font-semibold bg-white/10 text-white hover:shimmer-gold-bg hover:text-tmo-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t.addBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ lang, onSelectPlan }: { lang: Language, onSelectPlan: (plan: string) => void }) {
  const t = translations[lang].pricing;
  
  const getEmiDetails = (priceStr: string) => {
    // Extract number from string like "₹5,000" or "₹3,00,000"
    const price = parseInt(priceStr.replace(/[₹,]/g, ''));
    if (isNaN(price)) return null;
    
    const advance = Math.floor(price * 0.6);
    const remaining = price - advance;
    const monthly = Math.ceil(remaining / 12);
    
    return {
      advance: `₹${advance.toLocaleString()}`,
      monthly: `₹${monthly.toLocaleString()}`,
      total: `₹${(advance + (monthly * 12)).toLocaleString()}`
    };
  };

  const plans = [
    { 
      ...t.starter,
      badge: t.smallBiz,
      popular: false,
      period: lang === 'hi' ? "/ वर्ष" : "/ year",
      emi: getEmiDetails(t.starter.price)
    },
    { 
      ...t.growth,
      badge: t.value,
      popular: false,
      period: lang === 'hi' ? "/ वर्ष" : "/ year",
      emi: getEmiDetails(t.growth.price)
    },
    { 
      ...t.business,
      popular: true, 
      badge: t.mostPopular,
      period: lang === 'hi' ? "/ वर्ष" : "/ year",
      emi: getEmiDetails(t.business.price)
    },
    { 
      ...t.brand,
      badge: undefined,
      popular: false,
      period: lang === 'hi' ? "/ वर्ष" : "/ year",
      emi: getEmiDetails(t.brand.price)
    },
    { 
      ...t.enterprise,
      badge: undefined,
      popular: false,
      period: lang === 'hi' ? "/ वर्ष" : "/ year",
      emi: getEmiDetails(t.enterprise.price)
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-tmo-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border flex flex-col",
                plan.popular ? "bg-zinc-900 border-tmo-gold shadow-2xl shadow-tmo-gold/10 lg:-translate-y-4" : "bg-white/5 border-white/10"
              )}
            >
              {plan.badge && (
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className={cn(
                    "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg",
                    plan.popular ? "bg-white text-black" : "bg-white text-black"
                  )}
                >
                  {plan.badge}
                </motion.div>
              )}
              <h3 className="text-2xl font-serif mb-2 mt-2 flex items-center gap-2">
                {plan.name === "Starter" && <Star className="w-5 h-5 text-tmo-gold fill-tmo-gold" />}
                <span>{plan.name} {t.plan}</span>
              </h3>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-white/40 text-lg line-through">{plan.originalPrice}</span>
                  <span className={cn("text-4xl font-bold", plan.popular ? "text-tmo-gold" : "text-white")}>{plan.price}</span>
                  <span className="text-white/50 text-sm ml-1">{plan.period}</span>
                </div>
              </div>
              <p className="text-sm text-white/70 mb-4 min-h-[40px]">{plan.desc}</p>
              
              <div className="bg-tmo-gold/10 border border-tmo-gold/20 rounded-lg p-3 mb-6">
                <p className="text-tmo-gold text-xs font-medium shimmer-gold"><span className="font-bold">{t.benefit}:</span> {plan.benefit}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-tmo-gold shrink-0 mt-0.5" />
                    <span className="text-sm leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.emi && (
                <div className="mb-8 p-4 bg-black/40 rounded-xl border border-white/5 text-sm">
                  <p className="font-semibold text-white/90 mb-2">{t.monthly}</p>
                  <p className="text-white/60 text-xs mb-3">{lang === 'hi' ? "आसान भुगतान विकल्प (60% एडवांस):" : "Easy Payment Option (60% Advance):"}</p>
                  <ul className="space-y-1 text-white/80 mb-3">
                    <li>• {t.downPayment}: <span className="font-medium text-white">{plan.emi.advance}</span></li>
                    <li>• {lang === 'hi' ? "मासिक" : "Monthly"}: <span className="font-medium text-white">{plan.emi.monthly}{lang === 'hi' ? "/माह" : "/mo"}</span></li>
                  </ul>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/90 font-medium">{t.totalYearly} = {plan.emi.total}</p>
                    <p className="text-tmo-gold text-xs mt-1">({t.savesMoney})</p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => onSelectPlan(plan.name)}
                className={cn(
                  "w-full py-3 rounded-full text-center font-semibold transition-all duration-300 mt-auto",
                  plan.popular ? "shimmer-gold-bg text-tmo-black hover:scale-105" : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {t.choose} {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteTypes({ lang }: { lang: Language }) {
  const t = translations[lang].webTypes;
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.title}</h2>
          <p className="text-white/60 text-lg">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-white">{t.static}</h3>
            <p className="text-white/70 mb-6">{t.staticDesc}</p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-tmo-gold mb-2">{t.examples}:</p>
                <ul className="list-disc pl-5 text-white/80 space-y-1">
                  <li>{lang === 'hi' ? "हमारे बारे में" : "About us"}</li>
                  <li>{lang === 'hi' ? "सेवाएं" : "Services"}</li>
                  <li>{lang === 'hi' ? "संपर्क विवरण" : "Contact details"}</li>
                  <li>{lang === 'hi' ? "लोकेशन" : "Location"}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-tmo-black border border-tmo-gold/30 p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-tmo-gold/5">
            <div className="absolute top-0 right-0 bg-tmo-gold text-tmo-black px-4 py-1 rounded-bl-xl font-bold text-xs uppercase tracking-wider">{t.leads}</div>
            <h3 className="text-2xl font-bold mb-4 text-tmo-gold">{t.interactive}</h3>
            <p className="text-white/70 mb-6">{t.interactiveDesc}</p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-tmo-gold mb-2">{t.examples}:</p>
                <ul className="list-disc pl-5 text-white/80 space-y-1">
                  <li>{lang === 'hi' ? "अपॉइंटमेंट बुक करें" : "Book appointment"}</li>
                  <li>{lang === 'hi' ? "टेबल रिजर्व करें" : "Reserve table"}</li>
                  <li>{lang === 'hi' ? "पूछताछ भेजें" : "Send enquiry"}</li>
                  <li>{lang === 'hi' ? "प्रोडक्ट ऑर्डर करें" : "Order product"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats({ lang }: { lang: Language }) {
  const t = translations[lang].stats;
  return (
    <section className="py-20 bg-tmo-gold text-tmo-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-5xl font-serif font-bold mb-2">100+</div>
            <div className="font-medium uppercase tracking-wider text-sm opacity-80">{t.websites}</div>
          </div>
          <div>
            <div className="text-5xl font-serif font-bold mb-2">50+</div>
            <div className="font-medium uppercase tracking-wider text-sm opacity-80">{t.businesses}</div>
          </div>
          <div>
            <div className="text-5xl font-serif font-bold mb-2">7 {lang === 'hi' ? "दिन" : "Days"}</div>
            <div className="font-medium uppercase tracking-wider text-sm opacity-80">{t.launch}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio({ lang }: { lang: Language }) {
  const t = translations[lang].portfolio;
  const projects = [
    {
      title: t.project1.title,
      highlight: t.project1.highlight,
      desc: t.project1.desc,
      link: t.project1.link,
      url: "xzecure.com",
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: t.project2.title,
      highlight: t.project2.highlight,
      desc: t.project2.desc,
      link: t.project2.link,
      url: "innovativeservices.vercel.app",
      color: "from-emerald-600 to-teal-700"
    },
    {
      title: t.project3.title,
      highlight: t.project3.highlight,
      desc: t.project3.desc,
      link: t.project3.link,
      url: "retro-strip.app",
      color: "from-orange-600 to-red-700",
      noLink: true,
      isApp: true
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-tmo-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={cn(
                "absolute -inset-1 bg-gradient-to-r blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200",
                project.color
              )} />
              <div className="relative bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full">
                {/* Browser Header / App Header */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  {!project.isApp ? (
                    <>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex-1 max-w-md mx-auto bg-black/40 rounded-md py-1 px-3 text-[10px] text-white/40 font-mono text-center truncate">
                        {project.url}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 text-white/40">
                      <Smartphone className="w-3 h-3" />
                      <span className="text-[10px] font-mono uppercase tracking-wider">Mobile Application</span>
                    </div>
                  )}
                </div>

                {/* Preview Area */}
                <div className="aspect-video relative overflow-hidden bg-black">
                  <iframe 
                    src={project.link} 
                    className="w-full h-[200%] border-none pointer-events-none scale-[0.5] origin-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    title={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-tmo-gold">
                      {project.highlight}
                    </span>
                    {!project.noLink && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="mt-auto">
                    {!project.noLink ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
                      >
                        View Live Project
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 cursor-default">
                        {project.isApp ? (
                          lang === 'hi' ? "ऐप प्रीव्यू" : "App Preview Only"
                        ) : (
                          lang === 'hi' ? "प्रोजेक्ट प्रीव्यू" : "Project Preview Only"
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ 
  lang,
  selectedPlan, 
  selectedAddOns, 
  likedDemo,
  onPlanChange, 
  onAddOnChange 
}: { 
  lang: Language;
  selectedPlan: string; 
  selectedAddOns: string[]; 
  likedDemo: boolean;
  onPlanChange: (plan: string) => void;
  onAddOnChange: (addons: string[]) => void;
}) {
  const t = translations[lang].contact;
  const tPricing = translations[lang].pricing;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `*New Strategy Call Request*\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Business Type:* ${businessType}\n`;
    if (date) message += `*Preferred Date:* ${date}\n`;
    if (time) message += `*Preferred Time:* ${time}\n`;
    message += `*Selected Plan:* ${selectedPlan || 'None'}\n`;
    message += `*Selected Add-ons:* ${selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'None'}\n`;
    message += `*Liked Demo Design:* ${likedDemo ? 'Yes ❤️' : 'No'}`;
    
    const whatsappUrl = `https://wa.me/916352654556?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const removeAddOn = (addonToRemove: string) => {
    onAddOnChange(selectedAddOns.filter(a => a !== addonToRemove));
  };

  const industriesEn = ["Restaurant / Cafe", "Clinic / Healthcare", "Gym / Fitness", "Salon / Spa", "Real Estate", "Other"];
  const industriesHi = ["रेस्टोरेंट / कैफे", "क्लीनिक / स्वास्थ्य सेवा", "जिम / फिटनेस", "सैलून / स्पा", "रियल एस्टेट", "अन्य"];
  const industries = lang === 'hi' ? industriesHi : industriesEn;

  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-tmo-black border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.title}</h2>
            <p className="text-white/60">{t.subtitle}</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{t.name}</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors" placeholder={lang === 'hi' ? "राहुल कुमार" : "John Doe"} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "फोन नंबर" : "Phone Number"}</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "Business का प्रकार" : "Business Type"}</label>
                <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors appearance-none" required>
                  <option value="" className="bg-zinc-900">{lang === 'hi' ? "Industry चुनें" : "Select Industry"}</option>
                  {industries.map((ind, idx) => (
                    <option key={idx} value={ind} className="bg-zinc-900">{ind}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "चुना गया Plan" : "Selected Plan"}</label>
                <select 
                  value={selectedPlan}
                  onChange={(e) => onPlanChange(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors appearance-none"
                >
                  <option value="" className="bg-zinc-900">{lang === 'hi' ? "अभी निश्चित नहीं है" : "Not sure yet"}</option>
                  <option value="Starter" className="bg-zinc-900">{tPricing.starter.name} {tPricing.plan} (₹5,000/yr)</option>
                  <option value="Growth" className="bg-zinc-900">{tPricing.growth.name} {tPricing.plan} (₹10,000/yr)</option>
                  <option value="Business" className="bg-zinc-900">{tPricing.business.name} {tPricing.plan} (₹20,000/yr)</option>
                  <option value="Brand" className="bg-zinc-900">{tPricing.brand.name} {tPricing.plan} (₹50,000/yr)</option>
                  <option value="Enterprise" className="bg-zinc-900">{tPricing.enterprise.name} {tPricing.plan} (₹1.5 lakh/yr)</option>
                </select>
              </div>
            </div>

            {selectedAddOns.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "चुने गए Add-Ons" : "Selected Add-Ons"}</label>
                <div className="flex flex-wrap gap-2">
                  {selectedAddOns.map((addon, i) => (
                    <div key={i} className="bg-tmo-gold/20 border border-tmo-gold/50 text-tmo-gold px-3 py-1.5 rounded-lg text-sm flex items-center gap-2">
                      {addon}
                      <button type="button" onClick={() => removeAddOn(addon)} className="hover:text-white transition-colors">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "पसंदीदा तारीख" : "Preferred Date"}</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors [color-scheme:dark]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{lang === 'hi' ? "पसंदीदा समय" : "Preferred Time"}</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors [color-scheme:dark]" />
              </div>
            </div>
            <button type="submit" className="w-full shimmer-gold-bg text-tmo-black font-bold text-lg py-4 rounded-xl hover:scale-[1.02] transition-all mt-4">
              {tPricing.bookBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Language }) {
  const t = translations[lang].footer;
  const tNav = translations[lang].nav;
  return (
    <footer className="bg-tmo-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="The Søren Studio Logo" className="h-12 md:h-16 w-auto object-contain rounded-xl" />
              <span className="font-serif font-bold text-2xl tracking-tight">The Søren Studio</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              {t.desc}
            </p>
            <h3 className="text-xl font-serif font-medium text-tmo-gold">{t.tagline}</h3>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">{t.links}</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-tmo-gold transition-colors">{lang === 'hi' ? "होम" : "Home"}</a></li>
              <li><a href="#portfolio" className="hover:text-tmo-gold transition-colors">{lang === 'hi' ? "हाइलाइट्स" : "Highlights"}</a></li>
              <li><a href="#services" className="hover:text-tmo-gold transition-colors">{tNav.services}</a></li>
              <li><a href="#templates" className="hover:text-tmo-gold transition-colors">{tNav.templates}</a></li>
              <li><a href="#pricing" className="hover:text-tmo-gold transition-colors">{tNav.pricing}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">{t.contact}</h4>
            <ul className="space-y-4 text-white/60">
              <li>+91 63526 54556</li>
              <li>contact@thesorenstudio.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© {new Date().getFullYear()} The Søren Studio. {t.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{lang === 'hi' ? "गोपनीयता नीति" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'hi' ? "सेवा की शर्तें" : "Terms of Service"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [likedDemo, setLikedDemo] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [showCartAnimation, setShowCartAnimation] = useState(false);
  const [conversionMessage, setConversionMessage] = useState("");
  const [showConversion, setShowConversion] = useState(false);
  const [showStartup, setShowStartup] = useState(true);

  const getGainMessage = (item: string) => {
    const itemLower = item.toLowerCase();
    if (itemLower.includes("starter")) return "Estimated gain: 50-100 new local customers per month.";
    if (itemLower.includes("growth")) return "Estimated gain: 150-250 high-intent leads per month.";
    if (itemLower.includes("business")) return "Estimated gain: 300-500 customers via local SEO dominance.";
    if (itemLower.includes("brand")) return "Estimated gain: 800-1200 customers through automated sales funnel.";
    if (itemLower.includes("enterprise")) return "Estimated gain: 2000+ customers with full digital department.";
    if (itemLower.includes("google ranking")) return "Estimated gain: 200-300 customers from local search visibility.";
    if (itemLower.includes("website creation")) return "Estimated gain: 40% increase in visitor-to-customer conversion.";
    if (itemLower.includes("social media")) return "Estimated gain: 500+ brand impressions and 50+ direct leads.";
    if (itemLower.includes("photoshoot")) return "Estimated gain: 25% increase in brand trust and engagement.";
    return "Estimated gain: 100-200 new customer interactions.";
  };

  const addToCart = (item: string, targetSection: string = 'pricing') => {
    setCartItems(prev => [...prev, item]);
    setShowCartAnimation(true);
    
    // Trigger conversion bubble
    setConversionMessage(getGainMessage(item));
    setShowConversion(true);
    setTimeout(() => setShowConversion(false), 2000);

    setTimeout(() => setShowCartAnimation(false), 3000);
    
    if (targetSection === 'pricing') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetSection === 'contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    addToCart(plan + " Plan", 'contact');
  };

  const handleSelectAddOn = (addon: string) => {
    if (!selectedAddOns.includes(addon)) {
      setSelectedAddOns([...selectedAddOns, addon]);
      addToCart(addon, 'contact');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <>
            <Services lang={lang} onAddToCart={(item) => addToCart(item, 'pricing')} />
            <EnterpriseUSP lang={lang} />
            <WebsiteTypes lang={lang} />
            <GrowthCalculator lang={lang} />
            <AddOns lang={lang} onSelectAddOn={handleSelectAddOn} />
            <Pricing lang={lang} onSelectPlan={handleSelectPlan} />
          </>
        );
      case 'demo':
        return (
          <>
            <DemoSite lang={lang} likedDemo={likedDemo} setLikedDemo={setLikedDemo} />
            <InteractiveDemo lang={lang} />
          </>
        );
      case 'about':
        return <About lang={lang} />;
      case 'contact':
        return (
          <Contact 
            lang={lang}
            selectedPlan={selectedPlan} 
            selectedAddOns={selectedAddOns} 
            likedDemo={likedDemo}
            onPlanChange={setSelectedPlan} 
            onAddOnChange={setSelectedAddOns} 
          />
        );
      default:
        return (
          <>
            <Hero lang={lang} setLang={setLang} />
            <SocialProof lang={lang} />
            <Stats lang={lang} />
            <Portfolio lang={lang} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-tmo-black text-white selection:bg-tmo-gold selection:text-tmo-black">
      <AnimatePresence>
        {showStartup && <StartupAnimation onComplete={() => setShowStartup(false)} />}
      </AnimatePresence>
      <Navbar lang={lang} setLang={setLang} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <ConversionBubble message={conversionMessage} isVisible={showConversion} />
      <Cart items={cartItems} onRemove={(item) => setCartItems(prev => prev.filter(i => i !== item))} />
      <Footer lang={lang} />
    </div>
  );
}
