import { Plane, Hotel, Landmark, Headphones, BarChart3, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Plane className="w-8 h-8" />,
        title: "Managed Global Ticketing",
        description: "Priority flight management with institutional-grade fare engineering and 24/7 dedicated ticketing desks.",
        tag: "Core Mobility"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "360° Corporate Travel",
        description: "End-to-end management from managed booking to ticketing, hotel procurement, and car rentals.",
        tag: "B2B Expert"
    },
    {
        icon: <Hotel className="w-8 h-8" />,
        title: "Accommodation Management",
        description: "Direct access to institutional hospitality rates and seamless hotel management for your global teams.",
        tag: "Global Reach"
    },
    {
        icon: <Landmark className="w-8 h-8" />,
        title: "Visa & Passport Services",
        description: "Expert guidance and processing for visa applications, ensuring a hassle-free travel documentation process.",
        tag: "Documentation"
    },
    {
        icon: <Calendar className="w-8 h-8" />,
        title: "MICE & Strategic Events",
        description: "Professional planning for Meetings, Incentives, Conferences, and Events across West Africa.",
        tag: "Events"
    },
    {
        icon: <Headphones className="w-8 h-8" />,
        title: "Institutional Support",
        description: "24/7 emergency travel assistance and dedicated account management for corporate partners.",
        tag: "Always On"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">Corporate Excellence</h2>
                    <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                        The Premier Partner for Institutional Travel
                    </h3>
                    <p className="text-slate-600 text-lg">
                        As Africa's leading travel management company, Satguru delivers unrivaled 360° solutions tailored for the continent's most prestigious organizations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand-blue/10 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 mb-4">
                                {service.tag}
                            </div>
                            <h4 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:gap-3 transition-all">
                                Learn More <Plane className="w-4 h-4 rotate-45" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 lg:p-12 rounded-[2.5rem] bg-brand-blue text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-extrabold mb-6">Streamline Your Corporate Mobility</h3>
                            <p className="text-slate-300 text-lg mb-8">
                                Revolutionize your company's travel with a 360° management partner. Reduce costs by up to 30% while
                                providing your employees with a premium, managed travel experience.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 rounded-xl bg-brand-gold text-brand-blue font-bold hover:bg-brand-gold/90 transition-colors">
                                    Setup Corporate Program
                                </button>
                                <button className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm">
                                    Download Corporate Brochure
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Policy Controls', desc: 'Auto-enforce travel budgets' },
                                { label: 'Expense Tracking', desc: 'Consolidated monthly billing' },
                                { label: 'Duty of Care', desc: 'Real-time traveler safety' },
                                { label: 'Local Support', desc: 'Ghana-based account managers' },
                            ].map((item) => (
                                <div key={item.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h5 className="font-bold text-brand-gold mb-1">{item.label}</h5>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Decorative background circle */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Services;
