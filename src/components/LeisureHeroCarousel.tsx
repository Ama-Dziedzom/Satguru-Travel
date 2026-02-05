import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Plane, Star, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

const slides = [
    {
        subtitle: "Expert Travel Planning",
        title: <>Crafting Your <br /><span className="text-white/30">Perfect Escape.</span></>,
        desc: "Satguru is the gold standard in leisure travel. We don't just book trips; we architect experiences that stay with you forever.",
        image: "/individuals-hero.png",
        tag: "Planning Excellence"
    },
    {
        subtitle: "Bespoke Leisure Bookings",
        title: <>Luxury <br /><span className="text-white/30">Redefined.</span></>,
        desc: "From secluded tropical hideaways to vibrant metropolitan dreams—unlock exclusive rates and personalized service for your leisure travels.",
        image: "/bespoke-travel.png",
        tag: "Premium Bookings"
    },
    {
        subtitle: "World-Class Exploration",
        title: <>The World <br /><span className="text-white/30">In Your Hands.</span></>,
        desc: "Leverage our 70-country network to discover the globe. Our experts handle the complex planning so you can focus on the pure magic of discovery.",
        image: "/about-hero-v3.png",
        tag: "Global Support"
    }
];

export default function LeisureHeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

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
                        alt="Leisure Travel Excellence"
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

                            <div className="max-w-2xl">
                                <p className="text-lg lg:text-xl text-white/50 font-medium leading-relaxed mb-12 italic font-merriweather">
                                    {slides[currentSlide].desc}
                                </p>

                                <div className="flex flex-wrap items-center gap-8">
                                    <div className="flex items-center gap-4 text-white/40">
                                        <div className="w-12 h-[1px] bg-white/20" />
                                        <span className="text-sm font-black uppercase tracking-[0.2em]">Crafting Memories Since 1989</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-[#FF5A06] text-[#FF5A06]" />)}
                                        </div>
                                        <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">Top Leisure Expert</span>
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
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">Start Your <br /> Leisure Journey</h3>
                                </motion.div>
                            </AnimatePresence>

                            <div className="space-y-4 mb-10">
                                <button className="w-full bg-[#FF5A06] text-white py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#0a2e0c] transition-luxury flex items-center justify-center gap-3 group">
                                    <Plane className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Explore Packages
                                </button>
                                <button className="w-full bg-white/10 text-white border border-white/20 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-luxury flex items-center justify-center gap-3">
                                    <Heart className="w-5 h-5" />
                                    Bespoke Planning
                                </button>
                            </div>

                            {/* Progress Dots */}
                            <div className="flex gap-3 justify-center mb-0">
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

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FF5A06]">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Global Desk</p>
                                        <p className="text-xs text-white font-bold">70+ Countries Presence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust Indicator */}
                    <div className="flex items-center justify-center gap-4 px-8 opacity-40 grayscale group-hover:grayscale-0 transition-luxury">
                        <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">Ghana's Premier Leisure Hub</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent shadow-luxury" />
            </div>
        </section>
    );
}
