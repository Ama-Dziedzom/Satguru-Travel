import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = ({ onLinkClick }: { onLinkClick: (view: any) => void }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Solutions",
            links: [
                { name: "Corporate Travel", view: "corporate" },
                { name: "Leisure Booking", view: "flights" },
                { name: "Visa & Passport", view: "visa" },
                { name: "MICE & Events", view: "management" },
                { name: "Strategic Solutions", view: "solutions" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Satguru", view: "about" },
                { name: "Our Presence", view: "landing" },
                { name: "Contact Desk", view: "contact" },
                { name: "Careers", href: "#" },
                { name: "News & Media", href: "#" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "24/7 Priority Desk", href: "#" },
                { name: "Contact Support", view: "contact" },
                { name: "Travel Advisories", href: "#" },
                { name: "Safety Protocols", href: "#" },
                { name: "Privacy Policy", href: "#" }
            ]
        }
    ];

    const socialLinks = [
        { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
        { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" }
    ];

    return (
        <footer className="bg-[#0a2e0c] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#117513]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF5A06]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-8 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-4 mb-8 cursor-pointer" onClick={() => onLinkClick('landing')}>
                            <div className="w-12 h-12 p-2 bg-white rounded-xl shadow-luxury overflow-hidden">
                                <img src="/logo.png" alt="Satguru Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col -space-y-1">
                                <span className="font-black text-xl tracking-tight">SATGURU</span>
                                <span className="text-[8px] font-black tracking-[0.4em] uppercase text-white/40">TRAVEL GHANA</span>
                            </div>
                        </div>

                        <p className="text-lg text-white/50 font-medium leading-relaxed mb-10 max-w-sm italic font-merriweather">
                            "Redefining global mobility with institutional-grade precision and local hospitality since 1989."
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FF5A06] group-hover:bg-[#FF5A06] group-hover:text-white transition-luxury">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">+233 (0) 302 123 4567</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FF5A06] group-hover:bg-[#FF5A06] group-hover:text-white transition-luxury">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">corporate@satgurutravel.com.gh</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF5A06] mb-8">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            {link.view ? (
                                                <button
                                                    onClick={() => onLinkClick(link.view)}
                                                    className="text-white/40 hover:text-white text-sm font-bold transition-luxury flex items-center group gap-2 text-left"
                                                >
                                                    {link.name}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-luxury" />
                                                </button>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    className="text-white/40 hover:text-white text-sm font-bold transition-luxury flex items-center group gap-2"
                                                >
                                                    {link.name}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-luxury" />
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Location / Newsletter Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF5A06] mb-8">
                            Headquarters
                        </h4>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-8 hover:border-white/20 transition-luxury group">
                            <div className="flex gap-4 mb-4">
                                <MapPin className="w-5 h-5 text-[#117513] shrink-0" />
                                <p className="text-sm font-bold leading-relaxed text-white/70 italic font-merriweather">
                                    123 Liberation Road,<br />
                                    Airport Residential Area<br />
                                    Accra, Ghana
                                </p>
                            </div>
                            <button
                                onClick={() => window.open('https://maps.google.com', '_blank')}
                                className="text-[10px] font-black uppercase tracking-widest text-[#FF5A06] flex items-center gap-2 mt-4 hover:gap-4 transition-all"
                            >
                                Get Directions <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#FF5A06] hover:bg-white/10 transition-luxury"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                        © {currentYear} SATGURU TRAVEL & TOURS (GH) LTD. ALL RIGHTS RESERVED.
                    </div>

                    <div className="flex gap-12">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-[#117513]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-luxury">Global Network</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-[#FF5A06]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-luxury">IATA Accredited</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-white/20 text-[10px] font-black">
                        <span>PRIVACY</span>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <span>TERMS</span>
                        <div className="w-1 h-1 rounded-full bg-white/10" />
                        <span>COOKIE POLICY</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
