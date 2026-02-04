import { MapPin, CheckCircle2, Briefcase, MessageCircle } from 'lucide-react';

const GhanaSection = () => {
    const localBenefits = [
        {
            title: "Bespoke Corporate Billing",
            description: "Flexible credit terms and consolidated monthly invoicing tailored to meet Ghanaian institutional requirements.",
            icon: <Briefcase className="w-6 h-6 text-brand-gold" />
        },
        {
            title: "Regional Expertise",
            description: "Deep understanding of West African travel corridors (Accra to Lagos, Abidjan, Monrovia).",
            icon: <MapPin className="w-6 h-6 text-brand-gold" />
        },
        {
            title: "Local Visa Support",
            description: "Specialized assistance for Schengen, UK, US, Dubai, and South Africa visas for Ghanaian citizens.",
            icon: <CheckCircle2 className="w-6 h-6 text-brand-gold" />
        },
        {
            title: "WhatsApp First Support",
            description: "Fast responses via our dedicated Ghana WhatsApp Business line for urgent travel needs.",
            icon: <MessageCircle className="w-6 h-6 text-brand-gold" />
        }
    ];

    const popularRoutes = [
        { route: "Accra → London", price: "From GHS 12,500", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=400" },
        { route: "Accra → Dubai", price: "From GHS 8,200", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400" },
        { route: "Accra → Johannesburg", price: "From GHS 7,500", image: "https://images.unsplash.com/photo-1544833058-e70f9ca25c17?auto=format&fit=crop&q=80&w=400" },
        { route: "Kumasi → Lagos", price: "From GHS 4,800", image: "https://images.unsplash.com/photo-1522071823942-da36e9ade521?auto=format&fit=crop&q=80&w=400" },
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden text-slate-900">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-brand-blue font-black text-sm uppercase tracking-[0.3em] mb-4">Local Knowledge, Global Reach</h2>
                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            The Trusted Partner for Ghanaian Business for <span className="text-brand-blue">Over 3 Decades.</span>
                        </h3>

                        <div className="space-y-10">
                            {localBenefits.map((benefit) => (
                                <div key={benefit.title} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-luxury flex items-center justify-center border border-slate-100">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl text-slate-900 mb-2">{benefit.title}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-8 rounded-[2rem] border-2 border-brand-gold/10 bg-brand-gold/5 flex gap-8 items-center">
                            <div className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center shadow-luxury shrink-0">
                                <MessageCircle className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <p className="font-black text-xl text-brand-dark">Need help right now?</p>
                                <p className="text-brand-dark/60 font-medium mb-4">Chat with our Accra-based team on WhatsApp</p>
                                <a
                                    href="https://wa.me/233000000000"
                                    className="inline-flex items-center gap-2 font-black text-brand-blue border-b-2 border-brand-blue pb-1 hover:text-brand-gold hover:border-brand-gold transition-luxury group"
                                >
                                    <span>Start WhatsApp Chat</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {popularRoutes.map((route, idx) => (
                                <div
                                    key={route.route}
                                    className={`relative rounded-3xl overflow-hidden shadow-lg group ${idx % 2 !== 0 ? 'mt-8' : ''}`}
                                >
                                    <img src={route.image} alt={route.route} className="w-full h-72 object-cover group-hover:scale-110 transition-luxury" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <p className="font-black text-xl mb-1">{route.route}</p>
                                        <p className="text-brand-gold text-sm font-black uppercase tracking-widest">{route.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Ghanaian Flag Accent */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
                            <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="600" height="133.3" fill="#cf0921" />
                                <rect y="133.3" width="600" height="133.3" fill="#fbd116" />
                                <rect y="266.6" width="600" height="133.3" fill="#006b3f" />
                                <path d="M300 142l18.4 56.6h59.6L330 234l18.4 56.6L300 255.4l-48.4 35.2 18.4-56.6-48-35.4h59.6z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GhanaSection;
