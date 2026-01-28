import { Plane, Calendar, Search, ArrowRightLeft, ChevronDown, Star, MapPin, Briefcase, FileText, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

type BookingHeroProps = {
    mode?: 'flights' | 'hotels' | 'visa' | 'management';
};

export default function BookingHero({ mode = 'flights' }: BookingHeroProps) {
    const isHotels = mode === 'hotels';
    const isVisa = mode === 'visa';
    const isManagement = mode === 'management';
    const isFlights = mode === 'flights';

    const getHeroContent = () => {
        if (isManagement) return {
            title: <>Optimize your <span className="inline-block">Enterprise</span> Travel Strategy</>,
            desc: "Institutional-grade management for Ghana's corporate leaders. Reduce spend, ensure safety, and simplify manifest oversight.",
            image: "/management-hero.png",
            stats: "28k+ Global Partnerships"
        };
        if (isVisa) return {
            title: <>Expedited <span className="inline-block">Business Visas</span> & Passports</>,
            desc: "Skip the queues. We leverage direct diplomatic channels to secure travel documentation for your executive team.",
            image: "/visa-passport-hero.png",
            stats: "99.4% Approval Rate"
        };
        if (isHotels) return {
            title: <>Save up to <span className="inline-block">45%</span> on luxury hotel stays globally</>,
            desc: "Satguru unlocks exclusive access to private corporate rates at 5-star properties you won't find on public sites.",
            image: "/hotel-hero.png",
            stats: "1.2M+ Property Network"
        };
        return {
            title: <>Save up to <span className="inline-block">64%</span> on international business class</>,
            desc: "Yes, seriously! Satguru unlocks exclusive access to private fares you won't find on Expedia or Hotwire.",
            image: "/individuals-hero.png",
            stats: "Trustpilot Excellent"
        };
    };

    const content = getHeroContent();

    return (
        <section className="relative min-h-[90vh] flex flex-col pt-32 pb-20 px-4 lg:px-20 overflow-hidden bg-[#0a2e0c]">
            <div className="absolute inset-0 z-0">
                <img
                    src={content.image}
                    alt="Premium Travel Experience"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-[#0a2e0c]/10" />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col flex-1 justify-center">
                <div className="mb-12 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                    >
                        {content.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-white/90 font-medium mb-8 leading-relaxed"
                    >
                        <span className="font-bold">Satguru Enterprise.</span> {content.desc}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#FF5A06] text-[#FF5A06]" />
                                ))}
                            </div>
                            <span className="text-white font-bold tracking-tight">{content.stats}</span>
                        </div>
                        <p className="text-white/70 text-sm font-bold pl-4 uppercase tracking-[0.2em]">Top rated in West Africa</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full bg-white rounded-[2rem] shadow-2xl p-8 lg:p-10"
                >
                    <div className="flex flex-wrap items-center gap-8 mb-8">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <span className="text-sm font-bold text-slate-900 group-hover:text-[#FF5A06] transition-colors uppercase tracking-widest">
                                {isHotels ? "Hotel & Resort" : isVisa ? "Business Visa" : isManagement ? "Strategy Portal" : "Round Trip"}
                            </span>
                            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#FF5A06]" />
                        </div>
                        <div className="w-[1px] h-6 bg-slate-200" />
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <span className="text-sm font-bold text-slate-900 group-hover:text-[#FF5A06] transition-colors uppercase tracking-widest">
                                {isManagement ? "Enterprise Audit" : "1 Passenger"}
                            </span>
                            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#FF5A06]" />
                        </div>
                    </div>

                    <div className={cn("grid items-center gap-0 border border-slate-200 rounded-2xl overflow-hidden mb-6",
                        (isHotels || isVisa || isManagement) ? "lg:grid-cols-[1.5fr_1fr_1fr_auto]" : "lg:grid-cols-[1fr_auto_1fr_1fr_1fr_auto]"
                    )}>
                        {isFlights && (
                            <>
                                <div className="p-6 border-r border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#117513]/10 group-hover:text-[#117513] transition-all">
                                        <Plane className="w-5 h-5 rotate-45" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">From*</span>
                                        <span className="block text-lg font-bold text-slate-900">Departure</span>
                                    </div>
                                </div>
                                <div className="relative z-10 -mx-4 h-full flex items-center justify-center">
                                    <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-[#FF5A06] hover:shadow-lg transition-all">
                                        <ArrowRightLeft className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="p-6 border-r border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#117513]/10 group-hover:text-[#117513] transition-all">
                                        <Plane className="w-5 h-5 -rotate-[135deg]" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">To*</span>
                                        <span className="block text-lg font-bold text-slate-900">Destination</span>
                                    </div>
                                </div>
                            </>
                        )}

                        {(isHotels || isVisa || isManagement) && (
                            <div className="p-6 border-r border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#117513]/10 group-hover:text-[#117513] transition-all">
                                    {isHotels ? <MapPin className="w-5 h-5" /> : isVisa ? <Globe className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                        {isHotels ? "Location" : isVisa ? "Embassy/Country" : "Company Domain"}
                                    </span>
                                    <span className="block text-lg font-bold text-slate-900">
                                        {isHotels ? "Where to?" : isVisa ? "Select Country" : "Enter Email"}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="p-6 border-r border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#117513]/10 group-hover:text-[#117513] transition-all">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    {isFlights ? "Departure" : isHotels ? "Check-in" : isVisa ? "Submission" : "Audit Date"}
                                </span>
                                <span className="block text-lg font-bold text-slate-900">24/02/2026</span>
                            </div>
                        </div>

                        <div className="p-6 border-r border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#117513]/10 group-hover:text-[#117513] transition-all">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    {isFlights ? "Return" : isHotels ? "Check-out" : isVisa ? "Passport Type" : "Fleet Size"}
                                </span>
                                <span className="block text-lg font-bold text-slate-900">
                                    {isFlights ? "24/02/2026" : isHotels ? "26/02/2026" : isVisa ? "Standard Business" : "50+ Travelers"}
                                </span>
                            </div>
                        </div>

                        <div className="h-full bg-[#FF5A06] hover:bg-[#e65105] transition-colors">
                            <button className="w-full lg:w-20 h-full flex items-center justify-center text-white p-6">
                                <Search className="w-8 h-8" />
                            </button>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-400 font-medium font-bold uppercase tracking-widest">
                        {isManagement ? "* Bespoke strategy audit for enterprises with 20+ annual international manifests." :
                            isVisa ? "* Subject to diplomatic timelines. Urgent 'Same-Day' processing available for select regions." :
                                "* Direct wholesale rates subject to availability at time of confirmation."}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
