import { motion } from "framer-motion";
import { 
  Globe, Smartphone, TrendingUp, Users, 
  CheckCircle2, Monitor, LayoutTemplate,
  Server, Share2, ArrowRight, Star,
  Search, Loader2, Facebook, Twitter, Instagram,
  AlertCircle, CheckCircle, IndianRupee, Rocket,
  ShieldCheck, Heart, Zap, Award, Briefcase, Stethoscope,
  Utensils, Scissors, Dumbbell, Home, GraduationCap,
  MapPin, Clock, MessageCircle, Building2, Factory, Phone,
  FileText, Shield, Globe2, Menu, X
} from "lucide-react";
import { cn } from "./lib/utils";
import React, { useState } from "react";

const LOGO_URL = "https://raw.githubusercontent.com/XzeBitOP/SorenAssets/0385f974fa45012b25cdb9e9ab825d3dd10a7065/Website%20images/6D2E38AE-E45F-4861-96EB-B2FC8B03F4A2.png";
const VIDEO_URL = "https://raw.githubusercontent.com/bumbumdumdum/Website-media/228b75dc532ce4847376361eb60e702adf384cf7/gemini_generated_video_8CF985E8.mov";

const BUSINESS_DATABASE = [
  "Tata Consultancy Services", "Infosys", "Tech Mahindra", "Azilen Technologies", "eInfochips",
  "Agile Infoways", "RadixWeb", "TatvaSoft", "RapidOps", "Netclues", "Prompt Softech",
  "Bacancy Technology", "Hyperlink Infosystem", "OpenXcell", "Vrinsoft Technology",
  "AllianceTek", "Magneto IT Solutions", "AddWeb Solution", "Bytes Technolab", "Codal",
  "WPWeb Infotech", "Brainvire Infotech", "i-HiddenTalent", "SharpQuest", "Instinctools",
  "Agashiye Restaurant", "Gordhan Thal", "Rajwadu", "Vishalla", "Barbeque Nation Ahmedabad",
  "The Green House", "Swati Snacks", "Tomato’s Restaurant", "Mirch Masala", "Timpani Restaurant",
  "Pakwan Dining Hall", "Honest Restaurant", "Sankalp Restaurant", "Gwalia Sweets", "Upper Crust Cafe",
  "Jawed Habib Salon", "Kapil’s Salon", "Lakme Salon", "Enrich Salon", "K3 Salon",
  "Femiluxe Salon", "Kallistaa Salon", "Blades & Scissors Salon", "Toni & Guy Salon", "Looks Salon",
  "Apollo Hospitals Ahmedabad", "Sterling Hospital", "Shalby Hospital", "Zydus Hospital",
  "KD Hospital", "HCG Cancer Centre", "SAL Hospital", "Narayana Multispeciality Hospital",
  "CIMS Hospital", "XzeCure Home care", "Adani Realty", "Godrej Properties", "Shilp Group",
  "Bakeri Group", "Arvind SmartSpaces", "Ganesh Housing", "Savvy Infrastructure", "Shivalik Group",
  "Siddhi Group", "Shyam Group", "Allen Career Institute Ahmedabad", "Aakash Institute",
  "BYJU’S Tuition Centre", "Career Launcher Ahmedabad", "IMS Learning Centre", "TIME Coaching Centre",
  "Resonance Coaching", "Toppers Academy", "Eklavya Education", "Knowledge High School",
  "Gold’s Gym Ahmedabad", "Anytime Fitness", "Cult Fit", "Bodyline Gym", "Fitness First Ahmedabad",
  "Ozone Fitness", "Talwalkars Gym", "Muscle Factory Gym", "Spartan Fitness", "Iron Paradise Gym",
  "Hyatt Regency Ahmedabad", "Taj Skyline", "ITC Narmada", "Novotel Ahmedabad", "Courtyard by Marriott",
  "Lemon Tree Hotel", "Pride Plaza Hotel", "Fortune Landmark Hotel", "Radisson Blu Ahmedabad", "The Fern Hotel"
];

type Language = 'en' | 'hi';

const translations = {
  en: {
    nav: {
      demo: "Demo Site",
      services: "Services",
      templates: "Templates",
      pricing: "Pricing",
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
      title: "Turn Clicks Into",
      titleAccent: "Customers",
      aiSubtitle: "Dont get lost in world of",
      checkAi: "Run a real-time AI & SEO audit on any business.",
      placeholder: "Enter business name (e.g. 'Sharma Sweets Mumbai')...",
      checkBtn: "Audit Now",
      searching: "Auditing...",
      searchingOn: "AI is searching Google for",
      resultHigh: "Excellent! Your business has a strong online presence.",
      resultLow: "Your business is invisible or has poor SEO. You are losing customers daily.",
      bookBtn: "Book Free Consultation",
      workBtn: "View Our Work",
      auditDetails: "Audit Details",
      websiteFound: "Website Found",
      noWebsite: "No Website Found",
      seoScore: "SEO Score"
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
        benefit: "Establishes your professional online identity so customers can find and trust you.",
        features: ["1 Static Website", "Mobile optimized", "Hosting included", "Contact form", "WhatsApp button", "Google Maps location"]
      },
      growth: {
        name: "Growth",
        desc: "Includes everything in Starter plus:",
        benefit: "Automates inquiries and captures leads, saving you time while growing your customer base.",
        features: ["Interactive website features", "Up to 2 websites", "Monthly website updates", "Google Business profile setup", "WhatsApp inquiry automation"]
      },
      business: {
        name: "Business",
        desc: "Includes everything in Growth plus:",
        benefit: "Dominates local search and social media, turning your online presence into a consistent revenue stream.",
        features: ["Unlimited website updates", "Instagram page setup", "4 Instagram posts per month", "Basic SEO setup", "Priority support"]
      },
      brand: {
        name: "Brand",
        desc: "Includes everything in Business plus:",
        benefit: "Provides a fully automated booking and sales machine, scaling your business without extra manual work.",
        features: ["Advanced interactive website", "Booking system", "Reservation system", "Enquiry forms", "12 Instagram posts per month", "Social media content design", "Social media posting"]
      },
      enterprise: {
        name: "Enterprise",
        desc: "Includes everything in Brand plus:",
        benefit: "A complete hands-off digital department, allowing you to focus purely on operations while we handle all growth.",
        features: ["On-site business visit", "Professional content creation", "Custom website design", "Full digital presence management", "Marketing consultation"]
      }
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
    }
  },
  hi: {
    nav: {
      demo: "Demo Site",
      services: "Services",
      templates: "Templates",
      pricing: "Pricing",
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
      title: "Clicks को",
      titleAccent: "Customers में बदलें",
      aiSubtitle: "Ai की दुनिया में न खोएं",
      checkAi: "किसी भी Business का रियल-टाइम AI और SEO ऑडिट करें।",
      placeholder: "Business का नाम दर्ज करें (जैसे 'शर्मा स्वीट्स मुंबई')...",
      checkBtn: "अभी ऑडिट करें",
      searching: "ऑडिट हो रहा है...",
      searchingOn: "AI Google पर खोज रहा है",
      resultHigh: "उत्कृष्ट! आपके Business की ऑनलाइन उपस्थिति बहुत मजबूत है।",
      resultLow: "आपका Business अदृश्य है या SEO खराब है। आप रोज़ाना ग्राहक खो रहे हैं।",
      bookBtn: "Free Consultation बुक करें",
      workBtn: "हमारा काम देखें",
      auditDetails: "ऑडिट विवरण",
      websiteFound: "Website मिली",
      noWebsite: "Website नहीं मिली",
      seoScore: "SEO स्कोर"
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
        benefit: "आपकी प्रोफेशनल Online पहचान बनाता है ताकि ग्राहक आपको ढूंढ सकें और आप पर भरोसा कर सकें।",
        features: ["1 Static Website", "Mobile optimized", "Hosting शामिल है", "Contact form", "WhatsApp बटन", "Google Maps लोकेशन"]
      },
      growth: {
        name: "Growth",
        desc: "Starter में सब कुछ शामिल है प्लस:",
        benefit: "पूछताछ को ऑटोमेट करता है और Leads कैप्चर करता है, जिससे आपका समय बचता है और आपका ग्राहक आधार बढ़ता है।",
        features: ["Interactive website फीचर्स", "2 Websites तक", "Monthly website अपडेट", "Google Business प्रोफाइल सेटअप", "WhatsApp पूछताछ ऑटोमेशन"]
      },
      business: {
        name: "Business",
        desc: "Growth में सब कुछ शामिल है प्लस:",
        benefit: "लोकल सर्च और सोशल मीडिया पर हावी होता है, जिससे आपकी Online उपस्थिति एक निरंतर आय स्रोत में बदल जाती है।",
        features: ["Unlimited website अपडेट", "Instagram पेज सेटअप", "प्रति माह 4 Instagram पोस्ट", "Basic SEO सेटअप", "Priority सपोर्ट"]
      },
      brand: {
        name: "Brand",
        desc: "Business में सब कुछ शामिल है प्लस:",
        benefit: "एक पूरी तरह से ऑटोमेटेड बुकिंग और सेल्स मशीन प्रदान करता है, बिना अतिरिक्त मैन्युअल काम के आपके Business को बढ़ाता है।",
        features: ["Advanced interactive website", "Booking सिस्टम", "Reservation सिस्टम", "Enquiry फॉर्म", "प्रति माह 12 Instagram पोस्ट", "Social media कंटेंट डिज़ाइन", "Social media पोस्टिंग"]
      },
      enterprise: {
        name: "Enterprise",
        desc: "Brand में सब कुछ शामिल है प्लस:",
        benefit: "एक पूर्ण डिजिटल विभाग, जो आपको पूरी तरह से संचालन पर ध्यान केंद्रित करने की अनुमति देता है जबकि हम सभी विकास को संभालते हैं।",
        features: ["On-site business विज़िट", "Professional कंटेंट निर्माण", "Custom website डिज़ाइन", "Full digital उपस्थिति मैनेजमेंट", "Marketing कंसल्टेशन"]
      }
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
    }
  }
};

// --- Components ---

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
    { id: 'demo', label: t.demo },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (id: string) => {
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

function AiSearch({ lang }: { lang: Language }) {
  const t = translations[lang].hero;
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchEngine, setSearchEngine] = useState("");
  const [result, setResult] = useState<{ 
    rating: number, 
    name: string, 
    hasWebsite: boolean,
    summary: string,
    details: string[]
  } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    setResult(null);
    
    const engines = ["Local Database Search", "SEO Analysis", "Presence Audit", "Website Check"];
    let step = 0;
    const interval = setInterval(() => {
      setSearchEngine(engines[step % engines.length]);
      step++;
    }, 1000);

    // Simulate 4-5 second search
    setTimeout(() => {
      clearInterval(interval);
      const found = BUSINESS_DATABASE.some(biz => 
        biz.toLowerCase().includes(query.toLowerCase()) || 
        query.toLowerCase().includes(biz.toLowerCase())
      );

      if (found) {
        const score = Math.floor(Math.random() * (90 - 85 + 1)) + 85;
        setResult({
          rating: score,
          name: query,
          hasWebsite: true,
          summary: `${query} is a well-established business in our database with a strong digital foundation.`,
          details: [
            "Official website detected and verified",
            "Google Business profile is active and optimized",
            "Strong social media presence across platforms",
            "Mobile responsiveness is excellent",
            "Page load speed is within optimal range"
          ]
        });
      } else {
        setResult({
          rating: 15,
          name: query,
          hasWebsite: false,
          summary: "We couldn't find this business in our verified database. This usually means a weak or non-existent digital presence.",
          details: [
            "No official website found in our records",
            "Google Business profile is unoptimized or missing",
            "Low social media visibility",
            "Potential loss of 70% online customers",
            "Immediate digital intervention recommended"
          ]
        });
      }
      setIsSearching(false);
    }, 4500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-8 mb-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
    >
      <p className="text-white/90 font-medium mb-4 text-sm md:text-base">{t.checkAi}</p>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.placeholder} 
          className="flex-1 bg-tmo-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tmo-gold transition-colors"
          required
        />
        <button 
          type="submit" 
          disabled={isSearching}
          className="bg-tmo-gold text-tmo-black px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          {isSearching ? t.searching : t.checkBtn}
        </button>
      </form>

      {isSearching && (
        <div className="mt-6 text-center animate-pulse">
          <p className="text-tmo-gold font-mono text-sm">{t.searchingOn} {searchEngine}...</p>
        </div>
      )}

      {result && !isSearching && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 overflow-hidden rounded-3xl bg-tmo-black/90 border border-white/10 shadow-2xl"
        >
          {/* Header with Score */}
          <div className="p-8 border-b border-white/10 bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 className="font-serif text-3xl font-bold mb-2">{result.name}</h4>
                <div className="flex items-center gap-3">
                  {result.hasWebsite ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5" /> {t.websiteFound}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5" /> {t.noWebsite}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em] mb-1">{t.seoScore}</div>
                    <div className={cn(
                      "text-5xl font-black tabular-nums leading-none",
                      result.rating > 70 ? "text-green-400" : result.rating > 30 ? "text-yellow-400" : "text-red-400"
                    )}>
                      {result.rating}
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-white/5 flex items-center justify-center relative overflow-hidden">
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-20",
                        result.rating > 70 ? "bg-green-400" : result.rating > 30 ? "bg-yellow-400" : "bg-red-400"
                      )}
                      style={{ height: `${result.rating}%`, top: `${100 - result.rating}%` }}
                    />
                    <Award className={cn(
                      "w-8 h-8 relative z-10",
                      result.rating > 70 ? "text-green-400" : result.rating > 30 ? "text-yellow-400" : "text-red-400"
                    )} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${result.rating}%` }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className={cn(
                "h-full relative",
                result.rating > 70 ? "bg-green-400" : result.rating > 30 ? "bg-yellow-400" : "bg-red-400"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-tmo-gold">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">AI Summary</span>
              </div>
              <p className="text-lg text-white/90 leading-relaxed font-serif italic">
                "{result.summary}"
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{t.auditDetails}</div>
                <ul className="space-y-3">
                  {result.details.map((detail, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      key={i} 
                      className="flex items-start gap-3 text-sm text-white/60 group"
                    >
                      <div className="mt-1.5 p-0.5 rounded-full bg-tmo-gold/20 text-tmo-gold group-hover:bg-tmo-gold group-hover:text-tmo-black transition-colors">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="group-hover:text-white/90 transition-colors">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <a 
                  href="#contact" 
                  className="w-full py-4 rounded-xl bg-tmo-gold text-tmo-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {lang === 'hi' ? "ऑडिट रिपोर्ट ठीक करें" : "Fix Audit Report"} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
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
          {t.aiSubtitle} <span className="text-5xl md:text-7xl font-serif font-bold text-tmo-gold leading-none">Ai</span>
        </motion.div>

        <AiSearch lang={lang} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-tmo-gold text-tmo-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            {t.bookBtn} <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#templates" 
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
              placeholder={t.placeholder} 
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

function Services({ lang }: { lang: Language }) {
  const t = translations[lang].services;
  const services = [
    {
      icon: LayoutTemplate,
      title: lang === 'hi' ? "Website निर्माण" : "Website Creation",
      desc: lang === 'hi' ? "विज़िटर्स को ग्राहकों में बदलने के लिए डिज़ाइन की गई कस्टम वेबसाइटें।" : "Custom websites designed to convert visitors into customers.",
      benefit: lang === 'hi' ? "भरोसा बनाकर और खरीदारी या बुकिंग को आसान बनाकर विज़िटर्स को भुगतान करने वाले ग्राहकों में बदलता है।" : "Turns visitors into paying customers by building trust and making it easy to buy or book.",
      benefitIcon: IndianRupee
    },
    {
      icon: Search,
      title: lang === 'hi' ? "Google Ranking सेटअप" : "Google Ranking Setup",
      desc: lang === 'hi' ? "Google Business प्रोफाइल ऑप्टिमाइज़ेशन, लोकल कीवर्ड सेटअप, मैप इंटीग्रेशन, रिव्यू सेटअप और बेसिक SEO।" : "Google Business profile optimization, local keyword setup, map integration, review setup, and basic website SEO.",
      price: "₹5,999",
      benefit: lang === 'hi' ? "जब लोकल ग्राहक आपकी सेवाओं की खोज करते हैं तो आपको Google पर आसानी से खोजने योग्य बनाता है।" : "Makes you easily discoverable on Google when local customers search for your services.",
      benefitIcon: Rocket
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
      benefitIcon: Heart
    }
  ];

  return (
    <section id="services" className="py-32 bg-tmo-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.title}</h2>
            <p className="text-white/60 text-lg mb-8">{t.subtitle}</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-tmo-gold font-semibold hover:text-white transition-colors">
              {lang === 'hi' ? "अपना प्रोजेक्ट शुरू करें" : "Start your project"} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
              >
                <s.icon className="w-10 h-10 text-tmo-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                {s.price && <p className="text-tmo-gold font-bold mb-4">{s.price}</p>}
                <div className="bg-tmo-gold/10 border border-tmo-gold/20 rounded-xl p-4 mt-auto group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-tmo-gold text-tmo-black rounded-lg group-hover:scale-110 transition-transform">
                      <s.benefitIcon className="w-4 h-4" />
                    </div>
                    <p className="text-tmo-gold text-xs font-bold uppercase tracking-widest">{lang === 'hi' ? "फायदा" : "Benefit"}</p>
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

function Pricing({ lang, onSelectPlan }: { lang: Language, onSelectPlan: (plan: string) => void }) {
  const t = translations[lang].pricing;
  const plans = [
    { 
      name: t.starter.name, 
      price: "₹5,000", 
      period: lang === 'hi' ? "/ वर्ष" : "/ year", 
      badge: t.smallBiz,
      desc: t.starter.desc,
      benefit: t.starter.benefit,
      features: t.starter.features,
      monthlyOption: { 
        downPayment: "₹3,000", 
        monthly: lang === 'hi' ? "₹200/माह" : "₹200/month", 
        total: "₹5,400", 
        note: t.savesMoney 
      }
    },
    { 
      name: t.growth.name, 
      price: "₹10,000", 
      period: lang === 'hi' ? "/ वर्ष" : "/ year", 
      badge: t.value,
      desc: t.growth.desc,
      benefit: t.growth.benefit,
      features: t.growth.features 
    },
    { 
      name: t.business.name, 
      price: "₹20,000", 
      period: lang === 'hi' ? "/ वर्ष" : "/ year", 
      popular: true, 
      badge: t.mostPopular,
      desc: t.business.desc,
      benefit: t.business.benefit,
      features: t.business.features 
    },
    { 
      name: t.brand.name, 
      price: "₹50,000", 
      period: lang === 'hi' ? "/ वर्ष" : "/ year", 
      desc: t.brand.desc,
      benefit: t.brand.benefit,
      features: t.brand.features 
    },
    { 
      name: t.enterprise.name, 
      price: lang === 'hi' ? "₹1.5 लाख" : "₹1.5 lakh", 
      period: lang === 'hi' ? "/ वर्ष" : "/ year", 
      desc: t.enterprise.desc,
      benefit: t.enterprise.benefit,
      features: t.enterprise.features 
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
                    plan.popular ? "bg-tmo-gold text-tmo-black" : "bg-white text-black"
                  )}
                >
                  {plan.badge}
                </motion.div>
              )}
              <h3 className="text-2xl font-serif mb-2 mt-2 flex items-center gap-2">
                {plan.name === "Starter" && <Star className="w-5 h-5 text-tmo-gold fill-tmo-gold" />}
                {plan.name} {t.plan}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-white/50 text-sm ml-1">{plan.period}</span>
              </div>
              <p className="text-sm text-white/70 mb-4 min-h-[40px]">{plan.desc}</p>
              
              <div className="bg-tmo-gold/10 border border-tmo-gold/20 rounded-lg p-3 mb-6">
                <p className="text-tmo-gold text-xs font-medium"><span className="font-bold">{t.benefit}:</span> {plan.benefit}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-tmo-gold shrink-0 mt-0.5" />
                    <span className="text-sm leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.monthlyOption && (
                <div className="mb-8 p-4 bg-black/40 rounded-xl border border-white/5 text-sm">
                  <p className="font-semibold text-white/90 mb-2">{t.monthly}</p>
                  <p className="text-white/60 text-xs mb-3">{lang === 'hi' ? "यदि ग्राहक मासिक भुगतान पसंद करते हैं:" : "If customers prefer monthly payment:"}</p>
                  <ul className="space-y-1 text-white/80 mb-3">
                    <li>• {t.downPayment}: <span className="font-medium text-white">{plan.monthlyOption.downPayment}</span></li>
                    <li>• <span className="font-medium text-white">{plan.monthlyOption.monthly}</span></li>
                  </ul>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/90 font-medium">{t.totalYearly} = {plan.monthlyOption.total}</p>
                    <p className="text-tmo-gold text-xs mt-1">({plan.monthlyOption.note})</p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => onSelectPlan(plan.name)}
                className={cn(
                  "w-full py-3 rounded-full text-center font-semibold transition-colors mt-auto",
                  plan.popular ? "bg-tmo-gold text-tmo-black hover:bg-white" : "bg-white/10 text-white hover:bg-white/20"
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
      benefit: lang === 'hi' ? "उच्च गुणवत्ता वाले दृश्यों के साथ आपके ब्रांड के कथित मूल्य को तुरंत बढ़ाता है और अपार विश्वास बनाता है।" : "Instantly elevates your brand's perceived value and builds immense trust with high-quality visuals."
    },
    { 
      name: lang === 'hi' ? "Google / Facebook पेज + Ad सेटअप" : "Google / Facebook Page + Ad Setup", 
      price: "₹5,999", 
      desc: lang === 'hi' ? "इसमें Google Business पेज सेटअप, Facebook बिजनेस पेज सेटअप और विज्ञापन अभियान सेटअप शामिल है। (विज्ञापन चलाने की लागत Google/Facebook को अलग से भुगतान की जाती है।)" : "Includes Google Business page setup, Facebook business page setup, and Advertisement campaign setup. (Ad running cost paid separately to Google/Facebook.)",
      benefit: lang === 'hi' ? "आपके बिजनेस को सीधे उन लोगों के सामने रखता है जो सक्रिय रूप से वह खरीदना चाहते हैं जो आप बेचते हैं।" : "Puts your business directly in front of people actively looking to buy what you sell."
    },
    {
      name: lang === 'hi' ? "Google Ranking सेटअप" : "Google Ranking Setup",
      price: "₹5,999",
      period: lang === 'hi' ? "एक बार" : "one-time",
      desc: lang === 'hi' ? "इसमें शामिल है: Google Business प्रोफाइल ऑप्टिमाइज़ेशन, लोकल कीवर्ड सेटअप, Google मैप इंटीग्रेशन, रिव्यू सेटअप, बेसिक वेबसाइट SEO।" : "Includes: Google Business profile optimization, local keyword setup, map integration, review setup, basic website SEO.",
      benefit: lang === 'hi' ? "आपके बिजनेस को लोकल सर्च परिणामों में सबसे ऊपर ले जाता है, जिससे आपके दरवाजे पर मुफ्त, उच्च-इरादे वाला ट्रैफ़िक आता है।" : "Pushes your business to the top of local search results, driving free, high-intent traffic to your door."
    }
  ];

  return (
    <section className="py-24 bg-tmo-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.title}</h2>
          <p className="text-white/60 text-lg">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col">
              <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-tmo-gold">{addon.price}</span>
                {addon.period && <span className="text-white/50 text-sm ml-1">{addon.period}</span>}
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">{addon.desc}</p>
              <div className="bg-tmo-gold/10 border border-tmo-gold/20 rounded-lg p-3 mb-4">
                <p className="text-tmo-gold text-xs font-medium"><span className="font-bold">{lang === 'hi' ? "लाभ" : "Benefit"}:</span> {addon.benefit}</p>
              </div>
              <button 
                onClick={() => onSelectAddOn(addon.name)}
                className="w-full py-2 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors mt-auto"
              >
                {t.addBtn}
              </button>
            </div>
          ))}
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
            <button type="submit" className="w-full bg-tmo-gold text-tmo-black font-bold text-lg py-4 rounded-xl hover:bg-white transition-colors mt-4">
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

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAddOn = (addon: string) => {
    if (!selectedAddOns.includes(addon)) {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <>
            <Services lang={lang} />
            <WebsiteTypes lang={lang} />
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-tmo-black text-white selection:bg-tmo-gold selection:text-tmo-black">
      <Navbar lang={lang} setLang={setLang} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
