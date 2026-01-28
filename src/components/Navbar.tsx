import { useState, useEffect } from 'react';
import { Menu, X, Globe, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Corporate', href: '#corporate' },
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4",
                isScrolled ? "pt-2" : "pt-6"
            )}
        >
            <div
                className={cn(
                    "max-w-7xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-6 py-3",
                    isScrolled ? "glass-card py-2" : "bg-transparent"
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                        <Globe className="text-brand-gold w-6 h-6" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className={cn("font-extrabold text-xl tracking-tighter", isScrolled ? "text-brand-blue" : "text-white")}>
                            SATGURU
                        </span>
                        <span className={cn("text-[10px] font-bold tracking-[0.2em] uppercase", isScrolled ? "text-slate-500" : "text-slate-300")}>
                            Travel Ghana
                        </span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-medium text-sm hover:text-brand-gold transition-colors",
                                isScrolled ? "text-slate-600" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://wa.me/233000000000"
                        className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp</span>
                    </a>
                    <button className="btn-primary py-2 px-5 text-sm">
                        Book a Trip
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 glass-card rounded-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold text-slate-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <hr className="border-slate-100" />
                        <div className="flex flex-col gap-3">
                            <button className="btn-primary w-full">Book a Trip</button>
                            <button className="btn-secondary w-full flex items-center justify-center gap-2">
                                <MessageSquare className="w-4 h-4" />
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
