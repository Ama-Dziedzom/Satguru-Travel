import { motion } from 'framer-motion';
import {
    Briefcase,
    Shield,
    Globe,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Navigation,
    FileText,
    Users,
    Package,
    Palmtree,
    Key
} from 'lucide-react';

const ServicesHero = () => {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-end px-8 lg:px-20 pb-20 pt-40 overflow-hidden bg-[#0a2e0c]">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-premium.png"
                    alt="Luxury Services"
                    className="w-full h-full object-cover scale-105 opacity-60"
                />
                <div className="absolute inset-0 hero-gradient-overlay" />
            </div>

            <div className="max-w-[1600px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="sub-header mb-10 flex items-center gap-4 font-manrope">
                        <div className="w-10 h-[1px] bg-[#FF5A06]" />
                        <span>The Satguru Ecosystem</span>
                    </div>
                    <h1 className="text-7xl lg:text-[10rem] mb-12 text-white leading-[0.85] tracking-ultra">
                        Our <br />
                        <span className="text-white/30">Services.</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-white/50 font-medium leading-relaxed max-w-2xl">
                        From institutional-grade travel management to white-glove executive concierge, we provide the infrastructure for global mobility.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCard = ({
    title,
    desc,
    icon: Icon,
    image,
    tags,
    index
}: {
    title: string;
    desc: string;
    icon: any;
    image: string;
    tags: string[];
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group bg-white rounded-[3rem] overflow-hidden shadow-luxury border border-slate-100 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e0c]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#117513] mb-8 group-hover:bg-[#117513] group-hover:text-white transition-luxury">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-[#0a2e0c] mb-4 uppercase tracking-tight">{title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed italic font-merriweather mb-8 flex-grow">
                    {desc}
                </p>
                <button className="flex items-center gap-4 text-[#0a2e0c] font-black uppercase tracking-widest text-xs group-hover:text-[#FF5A06] transition-luxury">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
};

const ServicesGrid = () => {
    const services = [
        {
            title: "Corporate Travel Management",
            desc: "Full-scale travel management covering everything from managed booking and ticketing to institutional auditing.",
            icon: Briefcase,
            image: "/service-management.png",
            tags: ["360° Service", "Enterprise"]
        },
        {
            title: "Leisure Travel Booking",
            desc: "Bespoke vacation planning and exclusive holiday packages for individuals and families worldwide.",
            icon: Palmtree,
            image: "/bespoke-travel.png",
            tags: ["Holiday", "Luxury"]
        },
        {
            title: "Visa & Passport Processing",
            desc: "Expert diplomatic desk access for expedited visa processing and comprehensive travel documentation audit.",
            icon: FileText,
            image: "/visa-hero.png",
            tags: ["Expert", "Reliable"]
        },
        {
            title: "Cargo & Global Logistics",
            desc: "Reliable freight solutions and supply chain management for complex institutional and commercial needs.",
            icon: Package,
            image: "/corporate-global-mobility.png",
            tags: ["Freight", "Supply Chain"]
        },
        {
            title: "Premium Car Rentals",
            desc: "Seamless end-to-end ground logistics and corporate car rental solutions across 70+ global markets.",
            icon: Key,
            image: "/executive-travel.png",
            tags: ["Ground", "Mobility"]
        },
        {
            title: "MICE & Strategic Events",
            desc: "End-to-end logistics for Meetings, Incentives, Conferences, and large-scale corporate summits.",
            icon: Users,
            image: "/service-mice.png",
            tags: ["Logistics", "Events"]
        }
    ];

    return (
        <section className="py-40 bg-slate-50">
            <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SectorSpecialization = () => {
    const sectors = [
        {
            name: "Energy & Mining",
            desc: "Managing complex crew rotations and remote site travel for Ghana's extractives industry.",
            icon: <BarChart3 />
        },
        {
            name: "Diplomatic & NGO",
            desc: "Tailored mobility solutions for diplomatic missions and international development organizations.",
            icon: <Globe />
        },
        {
            name: "Finance & Fintech",
            desc: "Highly responsive travel management for the fast-paced financial services sector.",
            icon: <Shield />
        },
        {
            name: "Infrastructure",
            desc: "Coordinating travel for large-scale engineering and construction projects across West Africa.",
            icon: <Navigation />
        }
    ];

    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-5">
                        <div className="sub-header mb-8">Specialized Verticals</div>
                        <h2 className="text-5xl lg:text-7xl font-black text-[#0a2e0c] mb-10 leading-tight">
                            Sector <br />
                            <span className="text-[#FF5A06]">Expertise.</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                            Certain industries demand more than standard travel services. We have built dedicated desks with sector-specific knowledge to handle your unique requirements.
                        </p>
                        <div className="space-y-6">
                            {['Dedicated Sector Key Account Managers', '24/7 Emergency Response Protocols', 'Complex Itinerary Engineering', 'GH-specific compliance reporting'].map(item => (
                                <div key={item} className="flex items-center gap-4 text-sm font-bold text-[#0a2e0c] uppercase tracking-widest">
                                    <CheckCircle2 className="w-5 h-5 text-[#117513]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
                        {sectors.map((sector, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-luxury group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#FF5A06] mb-8 group-hover:bg-[#FF5A06] group-hover:text-white transition-luxury">
                                    {sector.icon}
                                </div>
                                <h4 className="text-2xl font-black text-[#0a2e0c] mb-4 uppercase tracking-tight">{sector.name}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed italic font-merriweather">{sector.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechnologySection = () => {
    return (
        <section className="py-40 bg-[#0a2e0c] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="/travel-analytics.png" className="w-full h-full object-cover blur-sm" />
            </div>

            <div className="max-w-[1600px] mx-auto px-8 lg:px-20 relative z-10">
                <div className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-12 lg:p-24 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-[#FF5A06] text-white text-[10px] font-black uppercase tracking-widest mb-10">
                                The Satguru Portal
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 tracking-ultra">
                                Strategic <br />Management.
                            </h2>
                            <p className="text-xl text-white/50 font-medium leading-relaxed mb-12">
                                Our proprietary platform integrates with your existing operations to provide seamless spend visibility, automated approvals, and zero-leakage policy compliance.
                            </p>
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <div className="text-4xl font-black text-[#FF5A06] mb-2">Live</div>
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Management Portal</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-[#FF5A06] mb-2">Auto</div>
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Expense Reconciliation</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-premium bg-slate-800 border border-white/20">
                                <img src="/travel-analytics.png" alt="Platform Interface" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 glass-card-dark p-8 rounded-3xl hidden lg:block border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-[#117513] animate-pulse" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Real-time Traveler Tracking</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5A06] text-[10px] font-black">+42</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "How does Satguru handle emergency travel?",
            a: "Our 24/7 Global Response Center is staffed by senior consultants who can modify bookings, arrange emergency evacuations, and provide real-time security alerts."
        },
        {
            q: "Can you integrate with our corporate ERP?",
            a: "Yes, our portal supports API integrations with major ERP systems like SAP, Oracle, and Microsoft Dynamics for seamless financial reconciliation."
        },
        {
            q: "What is your approach to cost optimization?",
            a: "We use a combination of proprietary fare engineering algorithms, corporate negotiated rates, and strategic route planning to reduce annual spend by 18-24%."
        }
    ];

    return (
        <section className="py-40 bg-white">
            <div className="max-w-4xl mx-auto px-8 text-center">
                <div className="sub-header mb-12 text-center">Support & Governance</div>
                <h2 className="text-5xl font-black text-[#0a2e0c] mb-20">Frequently Asked <span className="text-[#FF5A06]">Inquiries.</span></h2>
                <div className="text-left space-y-12">
                    {faqs.map((faq, i) => (
                        <div key={i} className="pb-12 border-b border-slate-100">
                            <h4 className="text-2xl font-black text-[#0a2e0c] mb-6 uppercase tracking-tight">{faq.q}</h4>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed italic font-merriweather">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function ServicesView() {
    return (
        <div className="bg-slate-50">
            <ServicesHero />
            <ServicesGrid />
            <SectorSpecialization />
            <TechnologySection />
            <FAQSection />

            {/* Final CTA */}
            <section className="py-40">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                    <div className="bg-[#FF5A06] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-luxury">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
                        <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-ultra relative z-10">Scale Your Mobility.</h2>
                        <p className="text-xl lg:text-3xl font-medium mb-16 opacity-80 max-w-3xl mx-auto relative z-10">
                            Schedule a capability briefing or request a strategic audit of your current corporate travel program.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            <button className="bg-[#0a2e0c] text-white px-16 py-8 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-white hover:text-[#FF5A06] transition-luxury shadow-2xl">
                                Request Audit
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-16 py-8 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-white/20 transition-luxury">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
