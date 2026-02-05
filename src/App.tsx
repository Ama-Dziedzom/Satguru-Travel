import { Plane, ArrowRight, MessageSquare, Menu, X, Star, Briefcase, BarChart3, Shield, MapPin, Phone, Mail, Globe, CheckCircle2, Palmtree, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import BookingHero from './components/BookingHero';
import GhanaSection from './components/GhanaSection';
import Partners from './components/Partners';
import IndividualsView from './components/IndividualsView';
import ServicesView from './components/ServicesView';
import Footer from './components/Footer';
import TravelCalculator from './components/TravelCalculator';

// --- Navbar (WoodNest Inspired) ---
const Navbar = ({ onBookNow, onLogoClick, onLinkClick, isBookingView }: { onBookNow: () => void, onLogoClick: () => void, onLinkClick: (view: any) => void, isBookingView?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About US', view: 'about' },
    { name: 'For Businesses', view: 'corporate' },
    { name: 'For Individuals', view: 'flights' },
    { name: 'Visa&Passport', view: 'visa' },
    { name: 'Services', view: 'services' },
    { name: 'Travel calculator', view: 'calculator', icon: Calculator },
  ];

  const lightMode = isBookingView;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 py-8 lg:px-12",
      isScrolled
        ? (lightMode ? "py-4 bg-white shadow-lg" : "py-4 bg-[#0a2e0c]/80 backdrop-blur-xl border-b border-white/5")
        : (lightMode ? "py-6 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "py-10 bg-transparent")
    )}>
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo Integration */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={onLogoClick}>
          <div className={cn("w-14 h-14 p-2 rounded-2xl shadow-luxury group overflow-hidden", lightMode ? "bg-slate-50 border border-slate-100" : "bg-white")}>
            <img src="/logo.png" alt="Satguru Logo" className="w-full h-full object-contain group-hover:scale-110 transition-luxury" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={cn("font-black text-2xl tracking-ultra", lightMode ? "text-[#0a2e0c]" : "text-white")}>SATGURU</span>
            <span className={cn("text-[10px] font-black tracking-[0.4em] uppercase", lightMode ? "text-slate-400" : "text-white/40")}>TRAVEL GHANA</span>
          </div>
        </div>

        {/* Minimal Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onLinkClick(link.view)}
              className={cn(
                "font-bold text-[13px] tracking-tight transition-all duration-300",
                lightMode
                  ? "text-slate-600 hover:text-[#117513]"
                  : "text-white/60 hover:text-white"
              )}
            >
              {link.name}
            </button>
          ))}
          <button
            className={cn("btn-pillar", lightMode ? "bg-[#117513] text-white hover:bg-[#0a2e0c] rounded-lg px-6 py-2.5" : "")}
            onClick={() => onLinkClick('contact')}
          >
            {lightMode ? "Contact Support" : "Talk to an Expert"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden", lightMode ? "text-slate-900" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={cn("lg:hidden absolute top-0 right-0 bottom-0 w-80 p-12 shadow-2xl z-50 min-h-screen", lightMode ? "bg-white" : "bg-[#0a2e0c]")}
          >
            <div className="flex flex-col gap-10 mt-20">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    onLinkClick(link.view);
                    setMobileMenuOpen(false);
                  }}
                  className={cn("text-3xl font-black text-left", lightMode ? "text-[#0a2e0c]" : "text-white")}
                >
                  {link.name}
                </button>
              ))}
              <hr className={cn("border-t", lightMode ? "border-slate-100" : "border-white/10")} />
              <button
                onClick={() => {
                  onBookNow();
                  setMobileMenuOpen(false);
                }}
                className={cn("btn-pillar w-full py-6 text-lg", lightMode ? "bg-[#117513] text-white" : "")}
              >
                {lightMode ? "Get Discount" : "Book Now"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section (WoodNest Specific Layout) ---
const Hero = ({ onLinkClick }: { onLinkClick: (view: any) => void }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 lg:px-20 pb-20 pt-40 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-premium.png"
          alt="Luxury Corporate Experience"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16 items-end">
        {/* Left Side: Large Typography */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sub-header mb-10 flex items-center gap-4 font-manrope">
              <div className="w-10 h-[1px] bg-[#FF5A06]" />
              <span>Redefining Global Mobility</span>
            </div>
            <h1 className="text-7xl lg:text-[10rem] mb-12">
              Corporate <br />
              <span className="text-white/30">Excellence.</span>
            </h1>

            <div className="max-w-xl">
              <p className="text-lg lg:text-xl text-white/50 font-medium leading-relaxed mb-12">
                The undisputed leader in corporate travel management since 1989.
                Optimizing institutional mobility and delivering world-class travel experiences across Africa.
              </p>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#FF5A06]">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm font-black text-white tracking-widest leading-none">4.9/5</span>
                </div>
                <div className="w-[1px] h-6 bg-white/20" />
                <span className="text-sm text-white/40 font-bold uppercase tracking-[0.2em]">Trusted by 1,200+ Ghanaian Corporations</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Floating Dark Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <div className="glass-card-dark p-10 rounded-[3rem] shadow-premium">
            <h3 className="text-2xl font-black mb-8 text-white">Start Your <br /> Journey</h3>

            <div className="space-y-4 mb-10">
              <button
                onClick={() => onLinkClick('corporate')}
                className="w-full bg-white text-[#0a2e0c] py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-luxury flex items-center justify-center gap-3"
              >
                <Briefcase className="w-5 h-5" />
                For Businesses
              </button>
              <button
                onClick={() => onLinkClick('flights')}
                className="w-full bg-white/10 text-white border border-white/20 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-luxury flex items-center justify-center gap-3"
              >
                <Globe className="w-5 h-5" />
                For Individuals
              </button>
            </div>

            <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest text-center">
              Global Network • 24/7 Support • Ghana Expertise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Corporate Benefits Section ---
const CorporateBenefits = () => {
  const benefits = [
    {
      title: "Managed Booking & Ticketing",
      desc: "Comprehensive flight management with priority desk access and institutional-grade fare engineering for maximum ROI.",
      icon: <Plane className="w-6 h-6" />
    },
    {
      title: "360° Ground & Hotel Logistics",
      desc: "End-to-end management of hotel procurement and corporate car rentals, ensuring seamless transitions in every city.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Duty of Care & Compliance",
      desc: "24/7 real-time tracking and automated policy enforcement to ensure absolute security and budget control.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="corporate" className="py-32 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-7xl font-black text-[#0a2e0c] mb-8 leading-tight">
              The Premier Partner for <br /><span className="text-[#FF5A06]">Corporate Excellence.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
              Satguru Travel is the definitive choice for institutional mobility. We don't just book trips—we serve as your strategic partner, managing your entire corporate travel ecosystem with global precision and local expertise.
            </p>
            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#117513]/10 flex items-center justify-center text-[#117513] shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0a2e0c] mb-2">{benefit.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 px-10 py-5 bg-[#0a2e0c] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#FF5A06] transition-luxury">
              Talk to a Corporate Expert
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img
                src="/corporate-benefits.png"
                alt="Corporate Decision Making"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card-dark p-8 rounded-3xl hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5A06] animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-[#FF5A06]">Strategic Corporate Partnership</span>
              </div>
              <p className="text-2xl font-black text-white">Institutional Value</p>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Unrivaled Support & Global Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services List ---
const DetailedServices = ({ onServiceClick, onMoreClick }: { onServiceClick: (type: string) => void, onMoreClick: () => void }) => {
  const serviceList = [
    {
      id: 'corporate',
      title: 'Corporate Travel Management',
      desc: 'Full-scale travel management covering everything from managed booking to institutional auditing.',
      icon: <Briefcase className="w-12 h-12" />,
      image: "/service-management.png"
    },
    {
      id: 'flights',
      title: 'Leisure Travel Booking',
      desc: 'Bespoke vacation planning and exclusive holiday packages for individuals and families.',
      icon: <Palmtree className="w-12 h-12" />,
      image: "/bespoke-travel.png"
    },
    {
      id: 'visa',
      title: 'Visa & Passport Processing',
      desc: 'Expert diplomatic desk access for expedited visa processing and travel documentation.',
      icon: <Shield className="w-12 h-12" />,
      image: "/visa-hero.png",
    },
  ];

  return (
    <section id="solutions" className="py-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-block px-4 py-1 rounded-full bg-[#117513]/10 text-[#117513] text-xs font-black uppercase tracking-widest mb-6">
            Our Ecosystem
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-[#0a2e0c] mb-8 leading-tight">
            Tailored Solutions <br /> for <span className="text-[#FF5A06]">Every Journey.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20 }}
              className="group cursor-pointer bg-slate-50 rounded-[3rem] p-8 transition-luxury hover:bg-[#0a2e0c] hover:shadow-2xl"
              onClick={() => onServiceClick(service.id)}
            >
              <div className="mb-8 aspect-square rounded-[2rem] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-luxury" />
              </div>
              <div className="text-[#FF5A06] mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0a2e0c] group-hover:text-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 group-hover:text-white/60 font-medium leading-relaxed italic mb-8 text-sm font-merriweather">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-[#0a2e0c] group-hover:text-[#FF5A06] font-black uppercase tracking-widest text-[10px]">
                <span>Explore Service</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}

          {/* "And Many More" Card */}
          <motion.div
            whileHover={{ y: -20 }}
            className="group cursor-pointer bg-[#FF5A06] rounded-[3rem] p-8 transition-luxury hover:bg-[#0a2e0c] hover:shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
            onClick={onMoreClick}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="text-white mb-8 group-hover:scale-110 transition-luxury">
              <Globe className="w-20 h-20" />
            </div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
              And Many <br /> More...
            </h3>
            <p className="text-white/80 font-medium leading-relaxed italic mb-10 text-sm font-merriweather max-w-[200px]">
              Discover our full suite of premium travel and logistics solutions.
            </p>
            <div className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs py-4 px-8 bg-white/10 rounded-2xl group-hover:bg-[#FF5A06] transition-luxury backdrop-blur-sm">
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Solutions Detailed Section ---
const SolutionsView = () => {
  const sections = [
    { title: "Institutional Mobility", subtitle: "Fleet & Deployment", desc: "Coordinated travel for multinational teams with centralized billing.", icon: <Globe /> },
    { title: "Financial Engineering", subtitle: "Cost Optimization", desc: "Proprietary tax-efficient routing and consolidated expense reporting.", icon: <BarChart3 /> },
    { title: "Executive Concierge", subtitle: "VIP Services", desc: "White-glove handling for diplomatic and board-level delegations.", icon: <Star /> }
  ];

  return (
    <div className="pt-40 pb-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <h2 className="text-7xl font-black text-[#0a2e0c] mb-20 tracking-ultra">Our Strategic <br /><span className="text-[#FF5A06]">Ecosystem.</span></h2>
        <div className="grid lg:grid-cols-3 gap-16">
          {sections.map((s, i) => (
            <div key={i} className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-luxury">
              <div className="text-[#FF5A06] mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg">{s.icon}</div>
              <p className="text-[#117513] text-xs font-black uppercase tracking-widest mb-4">{s.subtitle}</p>
              <h3 className="text-3xl font-black text-[#0a2e0c] mb-6 uppercase">{s.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic font-merriweather">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- About Section ---
const AboutView = () => (
  <div className="pt-40 pb-20 bg-[#0a2e0c] text-white">
    <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div>
          <div className="sub-header mb-8 text-[#FF5A06]">Since 1989</div>
          <h2 className="text-7xl font-black mb-12 tracking-ultra">Legacy of <br />Excellence in Ghana.</h2>
          <p className="text-xl text-white/60 font-medium leading-relaxed mb-12">
            Satguru Travel was founded on the principle of bridging the gap between local hospitality and global standards. Over three decades, we have expanded to over 70 countries, becoming the largest travel management network in West Africa.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-5xl font-black text-[#FF5A06] mb-2">70+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Countries Presence</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#FF5A06] mb-2">3k+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Institutional Clients</p>
            </div>
          </div>
        </div>
        <div className="rounded-[4rem] overflow-hidden shadow-luxury rotate-2">
          <img src="/about-hero-v3.png" className="w-full h-full object-cover aspect-[4/5]" />
        </div>
      </div>
    </div>
  </div>
);

// --- Contact Section ---
const ContactView = () => (
  <div className="pt-40 pb-20 bg-slate-50">
    <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-7xl font-black text-[#0a2e0c] mb-12 tracking-ultra">Connect with <br /><span className="text-[#FF5A06]">The Desk.</span></h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#117513] shrink-0"><MapPin /></div>
              <div>
                <h4 className="text-xl font-bold text-[#0a2e0c] mb-2">Accra Headquarters</h4>
                <p className="text-slate-500 font-medium">123 Liberation Road, Airport Residential Area<br />Accra, Ghana</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#117513] shrink-0"><Phone /></div>
              <div>
                <h4 className="text-xl font-bold text-[#0a2e0c] mb-2">Corporate Priority Line</h4>
                <p className="text-slate-500 font-medium">+233 (0) 302 123 4567<br />Mon-Fri 08:00 - 18:00</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#117513] shrink-0"><Mail /></div>
              <div>
                <h4 className="text-xl font-bold text-[#0a2e0c] mb-2">Institutional Inquiries</h4>
                <p className="text-slate-500 font-medium">corporate@satgurutravel.com.gh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-12 rounded-[3rem] shadow-luxury">
          <h3 className="text-2xl font-black text-[#0a2e0c] mb-8">Request Strategic Consultation</h3>
          <div className="space-y-6">
            <input className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold" placeholder="Full Name" />
            <input className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold" placeholder="Corporate Email" />
            <textarea className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold min-h-[150px]" placeholder="Briefly describe your institutional requirements..." />
            <button className="w-full py-6 bg-[#117513] text-white font-black rounded-2xl uppercase tracking-widest hover:bg-[#0a2e0c] transition-luxury">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);



// --- Corporate Hero Carousel ---
const CorporateHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      subtitle: "360° Managed Services",
      title: <>Maximum <br /><span className="text-white/30">ROI.</span></>,
      desc: "Beyond ticketing, we manage your entire mobility footprint—from hotel procurement to global car rentals—delivering up to 24% annual savings.",
      image: "/corporate-fare-engineering.png",
      tag: "CFO Intelligence"
    },
    {
      subtitle: "Global Mobility Solutions",
      title: <>Local <br /><span className="text-white/30">Precision.</span></>,
      desc: "Leverage our 70-country infrastructure to move your teams seamlessly from Accra to the world's most remote markets.",
      image: "/corporate-global-mobility.png",
      tag: "Operations Scale"
    },
    {
      subtitle: "Uncompromising Duty of Care",
      title: <>Absolute <br /><span className="text-white/30">Security.</span></>,
      desc: "24/7 real-time tracking and crisis response protocols. We ensure your most valuable assets are safe, anywhere, anytime.",
      image: "/corporate-duty-of-care.png",
      tag: "HR & People First"
    },
    {
      subtitle: "MICE & Strategic Events",
      title: <>White Glove <br /><span className="text-white/30">Execution.</span></>,
      desc: "From board-level retreats to large-scale summits, we manage the complex logistics of your high-stakes corporate gatherings.",
      image: "/corporate-mice-events.png",
      tag: "Strategic Impact"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 lg:px-20 pb-20 pt-40 overflow-hidden bg-[#0a2e0c]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Corporate Excellence"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16 items-end">
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sub-header mb-10 flex items-center gap-4 font-manrope">
                <div className="w-10 h-[1px] bg-[#FF5A06]" />
                <span className="text-[#FF5A06] uppercase tracking-[0.3em] font-black italic">{slides[currentSlide].subtitle}</span>
              </div>
              <h2 className="text-7xl lg:text-[10rem] mb-12 text-white leading-[0.85] tracking-ultra">
                {slides[currentSlide].title}
              </h2>

              <div className="max-w-xl">
                <p className="text-lg lg:text-xl text-white/50 font-medium leading-relaxed mb-12">
                  {slides[currentSlide].desc}
                </p>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-4 text-white/40">
                    <div className="w-12 h-[1px] bg-white/20" />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">Trusted by 1,200+ Ghanaian Corporations</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card-dark p-12 rounded-[4rem] shadow-premium-deep border border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="mb-8"
                >
                  <p className="text-[#FF5A06] text-xs font-black uppercase tracking-[0.3em] mb-4">{slides[currentSlide].tag}</p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Request <br />Strategic Audit</h3>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-4 mb-10">
                <button className="w-full bg-[#FF5A06] text-white py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#0a2e0c] transition-luxury flex items-center justify-center gap-3">
                  <Briefcase className="w-5 h-5" />
                  Executive Briefing
                </button>
                <button className="w-full bg-white/10 text-white border border-white/20 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-luxury flex items-center justify-center gap-3">
                  <Globe className="w-5 h-5" />
                  Capability Statement
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex gap-3 justify-center">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={cn(
                      "h-1.5 transition-all duration-700 rounded-full",
                      currentSlide === i ? "w-10 bg-[#FF5A06]" : "w-4 bg-white/10"
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CorporateView = () => (
  <div className="bg-white">
    {/* Dynamic Hero Carousel */}
    <CorporateHeroCarousel />

    {/* Strategic Pillars Section */}
    <section className="py-20 lg:py-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-40">
          <div>
            <h3 className="text-5xl lg:text-7xl font-black text-[#0a2e0c] mb-12 leading-tight">
              The Ultimate Partner for <br />
              <span className="text-[#FF5A06]">Corporate Mobility.</span>
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
              Corporate travel demands more than a booking engine—it requires a comprehensive management partner. From global ticketing and hotel procurement to seamless car rentals, we handle the entire spectrum of institutional travel.
            </p>

            <div className="space-y-12">
              {[
                {
                  title: "Managed Booking & Ticketing",
                  desc: "Our priority desks handle the full cycle of corporate ticketing, ensuring optimal routing and maximum fare engineering savings.",
                  icon: <BarChart3 className="w-8 h-8" />
                },
                {
                  title: "Uncompromising Duty of Care",
                  desc: "24/7 real-time tracking and crisis response protocols. We know where your team is, and we ensure they're safe.",
                  icon: <Shield className="w-8 h-8" />
                },
                {
                  title: "Automated Policy Compliance",
                  desc: "Zero-leakage travel policies managed through our portal. No more out-of-policy bookings or unapproved spend.",
                  icon: <CheckCircle2 className="w-8 h-8" />
                }
              ].map((pillar, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#117513] group-hover:bg-[#117513] group-hover:text-white transition-luxury shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#0a2e0c] mb-3 uppercase tracking-tight">{pillar.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed italic font-merriweather">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden aspect-[4/5] shadow-luxury rotate-2 group">
              <img src="/executive-travel.png" className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card-dark p-10 rounded-[3rem] shadow-premium max-w-xs">
              <p className="text-[#FF5A06] text-xs font-black uppercase tracking-widest mb-4">CFO Intelligence</p>
              <p className="text-3xl font-black text-white">$4.5M+</p>
              <p className="text-sm text-white/40 font-bold uppercase tracking-widest mt-2 leading-tight">Average annual spend optimized for our Tier-1 partners.</p>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-[#0a2e0c] rounded-[4rem] p-12 lg:p-24 overflow-hidden relative group">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="/travel-analytics.png" alt="Platform UI" className="w-full h-full object-cover scale-110 blur-sm group-hover:scale-100 group-hover:blur-none transition-luxury duration-1000" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-widest mb-8">
                The SATGURU Portal
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-12 tracking-ultra">Total Control, <br />Every Step.</h3>
              <p className="text-xl text-white/60 font-medium leading-relaxed mb-12">
                Our enterprise platform provides a bird's-eye view of your entire global operations. Manage travel, track teams, and approve requests from a single, high-security management portal.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-[#FF5A06] mb-2">Live</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">Traveler Heatmaps</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-[#FF5A06] mb-2">Auto</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">Expense Reconciliation</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card-dark p-10 rounded-[3rem] border border-white/10">
                <h4 className="text-xl font-bold text-white mb-8">Platform Features:</h4>
                <ul className="space-y-6">
                  {['Institutional Billing Integration', '24/7 Priority Support Chat', 'Custom Policy Workflows', 'GH-specific Tax Reporting', 'Global Inventory Access'].map(item => (
                    <li key={item} className="flex items-center gap-4 text-white/60 font-bold text-sm uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-[#117513]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Tiered Solutions */}
    <section className="py-40 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20 text-center mb-24">
        <div className="sub-header mb-6">Service Levels</div>
        <h3 className="text-6xl font-black text-[#0a2e0c] mb-12">Tailored for Your <span className="text-[#FF5A06]">Scale.</span></h3>
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              tier: "Managed Business",
              target: "SMEs & Fast-Growing Startups",
              features: ["Standard Online Booking Tool", "24/7 General Support", "Monthly Spend Reports", "Flight & Hotel Discounts"],
              cta: "Start Scaling"
            },
            {
              tier: "Enterprise Strategic",
              target: "Multinational Corporations",
              features: ["Dedicated Key Account Manager", "Custom Policy Enforcement", "ERP/Fintech Integration", "Priority 24/7 Desk", "VIP Lounge Access"],
              cta: "Talk to an Expert",
              highlight: true
            },
            {
              tier: "Specialized Sector",
              target: "Energy, Mining & NGO",
              features: ["Complex Crew Rotations", "Charter Management", "High-Security Logistics", "Diplomatic Desk Access", "24/7 Crisis Hotline"],
              cta: "Consult Sector Lead"
            }
          ].map((tier, i) => (
            <div key={i} className={cn(
              "p-12 rounded-[4rem] text-left transition-luxury",
              tier.highlight ? "bg-[#0a2e0c] text-white shadow-2xl scale-105 z-10" : "bg-white border border-slate-100 hover:shadow-xl"
            )}>
              <div className={cn("text-xs font-black uppercase tracking-widest mb-4", tier.highlight ? "text-[#FF5A06]" : "text-[#117513]")}>{tier.target}</div>
              <h4 className="text-3xl font-black mb-10 uppercase tracking-tight">{tier.tier}</h4>
              <ul className="space-y-6 mb-12">
                {tier.features.map(f => (
                  <li key={f} className={cn("flex items-center gap-4 text-sm font-bold uppercase tracking-widest", tier.highlight ? "text-white/60" : "text-slate-500")}>
                    <CheckCircle2 className={cn("w-5 h-5", tier.highlight ? "text-[#FF5A06]" : "text-[#117513]")} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-6 rounded-2xl font-black uppercase tracking-widest transition-luxury",
                tier.highlight ? "bg-white text-[#0a2e0c] hover:bg-[#FF5A06] hover:text-white" : "bg-slate-100 text-[#0a2e0c] hover:bg-[#0a2e0c] hover:text-white"
              )}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sector Focus Section */}
    <section className="py-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h3 className="text-5xl lg:text-7xl font-black text-[#0a2e0c] mb-8 leading-tight italic font-merriweather">
              "We provide the infrastructure for the leaders who build Ghana's future."
            </h3>
            <p className="text-xl text-slate-500 font-medium leading-relaxed italic font-merriweather">
              From the oil rigs of the Jubilee Field to the diplomatic missions in Accra, Satguru is the silent engine behind Ghana's most critical travel operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="px-12 py-6 bg-[#0a2e0c] text-white font-black rounded-2xl uppercase tracking-widest hover:bg-[#FF5A06] transition-luxury">
                Request a Corporate Quote
              </button>
              <button className="px-12 py-6 border-2 border-[#0a2e0c] text-[#0a2e0c] font-black rounded-2xl uppercase tracking-widest hover:bg-[#0a2e0c] hover:text-white transition-luxury">
                Download Capability Statement
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: <BarChart3 />, label: "Energy & Mining", count: "140+ Projects" },
              { icon: <Shield />, label: "Diplomatic & NGO", count: "300+ Missions" },
              { icon: <Briefcase />, label: "Financial Services", count: "50+ Institutions" },
              { icon: <Globe />, label: "Manufacturing", count: "80+ Plants" }
            ].map((sector, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] hover:bg-[#0a2e0c] hover:text-white transition-luxury group">
                <div className="text-[#FF5A06] mb-6 group-hover:scale-110 transition-luxury">{sector.icon}</div>
                <h5 className="text-xl font-black uppercase mb-2">{sector.label}</h5>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40">{sector.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <div className="bg-[#FF5A06] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-ultra relative z-10">Elevate Your Strategy.</h2>
          <p className="text-xl lg:text-3xl font-medium mb-16 opacity-80 max-w-3xl mx-auto relative z-10">
            Schedule a strategic consultation with our Country Manager to audit your current travel spend.
          </p>
          <button className="bg-white text-[#FF5A06] px-16 py-8 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-[#0a2e0c] hover:text-white transition-luxury relative z-10">
            Book Strategic Audit
          </button>
        </div>
      </div>
    </section>
  </div>
);


// --- Main App ---
export default function App() {
  const [view, setView] = useState<'landing' | 'flights' | 'hotels' | 'visa' | 'management' | 'solutions' | 'corporate' | 'about' | 'contact' | 'services' | 'calculator'>('landing');

  return (
    <div className="bg-[#0a2e0c] min-h-screen selection:bg-[#FF5A06] selection:text-white">
      <Navbar
        onBookNow={() => setView('flights')}
        onLogoClick={() => setView('landing')}
        onLinkClick={(v) => setView(v)}
        isBookingView={['solutions', 'contact'].includes(view)}
      />

      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onLinkClick={(v) => setView(v)} />
            <Partners />
            <CorporateBenefits />
            <GhanaSection />
            <div className="bg-white">
              <DetailedServices
                onServiceClick={(type) => {
                  setView(type as any);
                }}
                onMoreClick={() => setView('services')}
              />
            </div>
          </motion.div>
        ) : view === 'about' ? (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <AboutView />
          </motion.div>
        ) : view === 'contact' ? (
          <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <ContactView />
          </motion.div>
        ) : view === 'solutions' ? (
          <motion.div key="solutions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <SolutionsView />
          </motion.div>
        ) : view === 'corporate' ? (
          <motion.div key="corporate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <CorporateView />
          </motion.div>
        ) : view === 'services' ? (
          <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <ServicesView />
          </motion.div>
        ) : view === 'flights' ? (
          <motion.div key="flights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <IndividualsView />
          </motion.div>
        ) : view === 'calculator' ? (
          <motion.div key="calculator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TravelCalculator />
          </motion.div>
        ) : (
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BookingHero mode={view as any} />
            {/* You can add more specific content here */}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onLinkClick={(v) => setView(v)} />

      {/* Dynamic WhatsApp Integration */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-12 right-12 z-50 w-20 h-20 bg-[#FF5A06] text-white rounded-full shadow-2xl flex items-center justify-center transition-luxury group"
      >
        <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-luxury" />
      </motion.button>
    </div>
  );
}
