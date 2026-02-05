import { motion } from 'framer-motion';
import { Plane, Star, MapPin, ArrowRight, Clock, Tag, Globe, Users, ShieldCheck, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import LeisureHeroCarousel from './LeisureHeroCarousel';

const destinations = [
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
    { name: 'India', image: '/destination-india.png' },
    { name: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
    { name: 'USA', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800' },
    { name: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800' },
    { name: 'Egypt', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800' },
];

const offers = [
    {
        title: 'Angola',
        location: 'Central Africa',
        desc: 'Discover the vibrant culture and stunning landscapes of Angola. From its diverse heritage to breathtaking natural wonders.',
        image: '/offer-angola.png',
        price: '$899',
        duration: '7 Days',
        tag: 'Culture & Nature'
    },
    {
        title: 'Cameroon',
        location: 'West Africa',
        desc: 'Uncover the diverse charm of Cameroon. Delve into its bustling cities, explore lush rainforests, and embrace the vibrant local culture.',
        image: '/offer-cameroon.png',
        price: '$750',
        duration: '5 Days',
        tag: 'Adventure'
    },
    {
        title: 'Ghana Luxury',
        location: 'West Africa',
        desc: 'Experience the "Gate of Africa" with luxury eco-resorts, historical tours, and pristine beaches.',
        image: '/offer-ghana-luxury.png',
        price: '$450',
        duration: '3 Days',
        tag: 'Local Favorite'
    }
];

export default function IndividualsView() {
    return (
        <div className="bg-white">
            <LeisureHeroCarousel />

            {/* Featured Destinations Carousel (Airplane Window Inspired) */}
            <section className="py-24 overflow-hidden bg-slate-50">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                    <div className={cn("flex flex-col md:flex-row justify-between items-end mb-16 gap-8")}>
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-[#117513]/10 text-[#117513] text-xs font-black uppercase tracking-widest mb-6">
                                Featured Destinations
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-[#0a2e0c] leading-tight">
                                Your Dream <br />
                                <span className="text-[#FF5A06]">Adventure Awaits.</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-slate-500 font-medium leading-relaxed italic font-merriweather">
                            "We don't just book flights; we curate personal adventures. From seamless logistics to hidden local secrets, we handle the planning so you can enjoy the map."
                        </p>
                    </div>

                    <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x">
                        {destinations.map((dest, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="flex-shrink-0 w-64 snap-start group cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden border-[8px] border-white shadow-luxury">
                                    {/* Airplane Window Frame Effect */}
                                    <div className="absolute inset-0 border-[15px] border-slate-100/30 rounded-[4.5rem] z-10 pointer-events-none" />
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-10 left-0 right-0 text-center z-20">
                                        <span className="text-white font-black text-2xl uppercase tracking-widest drop-shadow-lg">{dest.name}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exclusive Offers Section */}
            <section className="py-32">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                    <div className="text-center mb-24">
                        <h2 className="text-6xl font-black text-[#0a2e0c] mb-6">Planned <span className="text-[#FF5A06]">Escapes.</span></h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Hand-crafted itineraries designed for the modern explorer. From boutique stays to seamless logistics, every detail is engineered for your discovery.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {offers.map((offer, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-luxury border border-slate-100 hover:shadow-2xl transition-luxury"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000"
                                    />
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#0a2e0c]">
                                            {offer.tag}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                        <div className="flex items-center gap-2 bg-[#FF5A06]/90 backdrop-blur-md px-4 py-2 rounded-xl text-white">
                                            <Tag className="w-4 h-4" />
                                            <span className="text-lg font-black">{offer.price}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[#0a2e0c]">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase tracking-widest">{offer.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-[#117513] text-xs font-black uppercase tracking-widest mb-4">
                                        <MapPin className="w-3 h-3" />
                                        {offer.location}
                                    </div>
                                    <h3 className="text-3xl font-black text-[#0a2e0c] mb-6 group-hover:text-[#FF5A06] transition-colors">{offer.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed italic font-merriweather mb-8 flex-1">
                                        {offer.desc}
                                    </p>
                                    <button className="w-full py-5 bg-[#0a2e0c] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#FF5A06] transition-luxury flex items-center justify-center gap-3">
                                        Explore Itinerary <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Individuals Choose Us */}
            <section className="py-32 bg-[#0a2e0c] text-white">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-widest mb-8">
                                The Satguru Difference
                            </div>
                            <h2 className="text-6xl font-black mb-12 tracking-ultra">Bespoke Travel <br /><span className="text-[#FF5A06]">For You.</span></h2>

                            <div className="space-y-12">
                                {[
                                    {
                                        title: "Bespoke Planning",
                                        desc: "Our travel experts craft custom routes and schedules that perfectly align with your travel goals, not just the nearest airport.",
                                        icon: <Plane className="w-8 h-8" />
                                    },
                                    {
                                        title: "24/7 Personal Concierge",
                                        desc: "From missed connections to last-minute flight changes, our support desk is always awake to help you.",
                                        icon: <ShieldCheck className="w-8 h-8" />
                                    },
                                    {
                                        title: "Tailored Experience",
                                        desc: "We understand that every traveler is unique. We customize every detail to match your individual style and budget.",
                                        icon: <Heart className="w-8 h-8" />
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#FF5A06] group-hover:bg-[#FF5A06] group-hover:text-white transition-luxury shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black mb-3 uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-white/50 font-medium leading-relaxed italic font-merriweather">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[4rem] overflow-hidden aspect-square shadow-luxury rotate-2 group">
                                <img
                                    src="/bespoke-travel.png"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 glass-card-dark p-10 rounded-[3rem] shadow-premium max-w-xs">
                                <div className="flex items-center gap-2 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-[#FF5A06] text-[#FF5A06]" />)}
                                </div>
                                <p className="text-2xl font-black text-white italic font-merriweather">"The service was impeccable. They handled everything."</p>
                                <p className="text-sm text-white/40 font-bold uppercase tracking-widest mt-4">— Kwesi Mensah, Frequent Flyer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Network Section (Mini) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { icon: <Globe />, label: "70+ Countries", sub: "Global Reach" },
                            { icon: <Users />, label: "50k+ Happy Travelers", sub: "Annual Support" },
                            { icon: <Star />, label: "4.9/5 Rating", sub: "Customer Satisfaction" },
                            { icon: <Clock />, label: "24/7 Support", sub: "Always Available" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-[#117513] mb-6 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl">{stat.icon}</div>
                                <h5 className="text-2xl font-black text-[#0a2e0c] mb-1 uppercase">{stat.label}</h5>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
