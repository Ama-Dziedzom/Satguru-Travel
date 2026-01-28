
const partners = [
    { name: 'IATA', logo: 'IATA Accredited Agency' },
    { name: 'Emirates', logo: 'Preferred Partner' },
    { name: 'British Airways', logo: 'Silver Partner' },
    { name: 'Ethiopian', logo: 'Top Agent Award' },
    { name: 'GT Bank', logo: 'Corporate Partner' },
    { name: 'MTN', logo: 'MoMo Accepted' },
];

const Partners = () => {
    return (
        <div className="bg-slate-50 py-12 border-y border-slate-100">
            <div className="section-container">
                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
                    Trusted by Industry Leaders & Financial Partners
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center">
                            <span className="text-lg font-black text-slate-800 tracking-tighter">{partner.name}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">{partner.logo}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
