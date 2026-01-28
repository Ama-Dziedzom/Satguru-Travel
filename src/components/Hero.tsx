import { Shield, Clock, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-brand-blue">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Premium Travel Experiences"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-transparent" />
            </div>

            <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6">
                        <Award className="w-3 h-3" />
                        <span>Trusted in Ghana Since 1989</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                        Your Trusted <span className="text-brand-gold text-white/90">Travel Management</span> Partner in Ghana
                    </h1>
                    <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
                        Elevating corporate travel for Ghanaian businesses with world-class solutions.
                        Streamlined bookings, cost optimization, and 24/7 global support.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary bg-brand-gold text-brand-blue hover:bg-brand-gold/90 border-none px-8 py-4 text-base font-bold">
                            Get a Corporate Quote
                        </button>
                        <button className="btn-secondary bg-white/10 text-white border-white/20 backdrop-blur-sm px-8 py-4 text-base hover:bg-white/20 font-bold transition-all">
                            Personal Travel
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                <Shield className="w-5 h-5 text-brand-gold" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Secure Booking</p>
                                <p className="text-xs text-slate-400">Official IATA Partner</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                <Clock className="w-5 h-5 text-brand-gold" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">24/7 Support</p>
                                <p className="text-xs text-slate-400">Local & Global Assistance</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Feature Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="glass-card p-8 rounded-3xl max-w-md ml-auto border-white/30">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-brand-blue font-extrabold text-xl">Travel Intelligence</h3>
                                <p className="text-slate-500 text-sm font-medium">Real-time tracking & reports</p>
                            </div>
                            <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center">
                                <Globe className="text-brand-blue w-6 h-6" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { label: 'Policy Compliance', value: '98%', color: 'bg-green-500' },
                                { label: 'Cost Savings', value: '25%', color: 'bg-brand-blue' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold text-slate-600">{item.label}</span>
                                        <span className="font-bold text-brand-blue">{item.value}</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className={cn("h-full rounded-full", item.color)} style={{ width: item.value }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-black text-brand-blue">500+</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Corporate Clients</p>
                            </div>
                            <div className="text-center border-l border-slate-100">
                                <p className="text-2xl font-black text-brand-blue">24/7</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Dedicated Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
