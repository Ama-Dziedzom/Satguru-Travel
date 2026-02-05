import { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plane,
    Hotel,
    Car,
    Utensils,
    FileText,
    Calculator,
    ArrowRight,
    Users,
    Calendar,
    MapPin,
    Sparkles,
    Download,
    RefreshCw,
    CheckCircle2,
    TrendingUp,
    Globe,
    Crown,
    Briefcase,
    Building2,
    Star,
    Bus,
    CarTaxiFront,
} from 'lucide-react';

// Icon components for selection options
const FlightEconomyIcon = () => <Plane className="w-5 h-5" />;
const FlightPremiumIcon = () => <Plane className="w-5 h-5" />;
const FlightBusinessIcon = () => <Briefcase className="w-5 h-5" />;
const FlightFirstIcon = () => <Crown className="w-5 h-5" />;

const HotelBudgetIcon = () => <Building2 className="w-5 h-5" />;
const HotelStandardIcon = () => <Hotel className="w-5 h-5" />;
const HotelPremiumIcon = () => <Star className="w-5 h-5" />;
const HotelLuxuryIcon = () => <Crown className="w-5 h-5" />;

const TransportBusIcon = () => <Bus className="w-5 h-5" />;
const TransportRideShareIcon = () => <CarTaxiFront className="w-5 h-5" />;
const TransportCarIcon = () => <Car className="w-5 h-5" />;
const TransportPremiumCarIcon = () => <Car className="w-5 h-5" />;
const TransportDriverIcon = () => <Users className="w-5 h-5" />;

// --- Destination Data ---
const destinations = [
    { name: 'London, UK', code: 'LHR', region: 'Europe', baseFlight: 1200, visaFee: 150, dailyHotel: 180, dailyMeals: 80, currency: 'GBP' },
    { name: 'New York, USA', code: 'JFK', region: 'North America', baseFlight: 1400, visaFee: 185, dailyHotel: 250, dailyMeals: 100, currency: 'USD' },
    { name: 'Dubai, UAE', code: 'DXB', region: 'Middle East', baseFlight: 800, visaFee: 120, dailyHotel: 200, dailyMeals: 90, currency: 'AED' },
    { name: 'Paris, France', code: 'CDG', region: 'Europe', baseFlight: 1100, visaFee: 95, dailyHotel: 175, dailyMeals: 85, currency: 'EUR' },
    { name: 'Lagos, Nigeria', code: 'LOS', region: 'Africa', baseFlight: 350, visaFee: 0, dailyHotel: 120, dailyMeals: 50, currency: 'NGN' },
    { name: 'Johannesburg, SA', code: 'JNB', region: 'Africa', baseFlight: 550, visaFee: 0, dailyHotel: 100, dailyMeals: 45, currency: 'ZAR' },
    { name: 'Nairobi, Kenya', code: 'NBO', region: 'Africa', baseFlight: 400, visaFee: 50, dailyHotel: 90, dailyMeals: 40, currency: 'KES' },
    { name: 'Amsterdam, Netherlands', code: 'AMS', region: 'Europe', baseFlight: 1050, visaFee: 95, dailyHotel: 160, dailyMeals: 75, currency: 'EUR' },
    { name: 'Singapore', code: 'SIN', region: 'Asia', baseFlight: 1100, visaFee: 0, dailyHotel: 180, dailyMeals: 60, currency: 'SGD' },
    { name: 'Beijing, China', code: 'PEK', region: 'Asia', baseFlight: 950, visaFee: 140, dailyHotel: 120, dailyMeals: 50, currency: 'CNY' },
];

interface FlightClass {
    name: string;
    multiplier: number;
    icon: ReactNode;
}

interface HotelType {
    name: string;
    multiplier: number;
    icon: ReactNode;
}

interface TransportOption {
    name: string;
    dailyCost: number;
    icon: ReactNode;
}

const flightClasses: FlightClass[] = [
    { name: 'Economy', multiplier: 1, icon: <FlightEconomyIcon /> },
    { name: 'Premium Economy', multiplier: 1.6, icon: <FlightPremiumIcon /> },
    { name: 'Business', multiplier: 3.2, icon: <FlightBusinessIcon /> },
    { name: 'First Class', multiplier: 5.5, icon: <FlightFirstIcon /> },
];

const hotelTypes: HotelType[] = [
    { name: 'Budget (2-3 Star)', multiplier: 0.5, icon: <HotelBudgetIcon /> },
    { name: 'Standard (3-4 Star)', multiplier: 1, icon: <HotelStandardIcon /> },
    { name: 'Premium (4-5 Star)', multiplier: 1.8, icon: <HotelPremiumIcon /> },
    { name: 'Luxury (5 Star+)', multiplier: 3, icon: <HotelLuxuryIcon /> },
];

const transportOptions: TransportOption[] = [
    { name: 'Public Transport', dailyCost: 15, icon: <TransportBusIcon /> },
    { name: 'Ride-sharing (Uber/Bolt)', dailyCost: 45, icon: <TransportRideShareIcon /> },
    { name: 'Car Rental (Economy)', dailyCost: 80, icon: <TransportCarIcon /> },
    { name: 'Car Rental (Premium)', dailyCost: 150, icon: <TransportPremiumCarIcon /> },
    { name: 'Private Driver', dailyCost: 200, icon: <TransportDriverIcon /> },
];

const TravelCalculator = () => {
    // Form State
    const [destination, setDestination] = useState('');
    const [travelers, setTravelers] = useState(1);
    const [tripDuration, setTripDuration] = useState(5);
    const [flightClass, setFlightClass] = useState(0);
    const [hotelType, setHotelType] = useState(1);
    const [transportType, setTransportType] = useState(1);
    const [includeVisa, setIncludeVisa] = useState(true);
    const [includeMeals, setIncludeMeals] = useState(true);
    const [showResults, setShowResults] = useState(false);

    // Get selected destination data
    const selectedDest = useMemo(() =>
        destinations.find(d => d.code === destination),
        [destination]
    );

    // Calculate costs
    const calculations = useMemo(() => {
        if (!selectedDest) return null;

        const flightCost = selectedDest.baseFlight * flightClasses[flightClass].multiplier * travelers * 2; // Round trip
        const hotelCost = selectedDest.dailyHotel * hotelTypes[hotelType].multiplier * tripDuration * Math.ceil(travelers / 2); // Assume 2 per room
        const transportCost = transportOptions[transportType].dailyCost * tripDuration;
        const mealsCost = includeMeals ? selectedDest.dailyMeals * tripDuration * travelers : 0;
        const visaCost = includeVisa ? selectedDest.visaFee * travelers : 0;

        const subtotal = flightCost + hotelCost + transportCost + mealsCost + visaCost;
        const contingency = subtotal * 0.1; // 10% contingency
        const total = subtotal + contingency;

        return {
            flight: flightCost,
            hotel: hotelCost,
            transport: transportCost,
            meals: mealsCost,
            visa: visaCost,
            subtotal,
            contingency,
            total,
            perPerson: total / travelers,
            perDay: total / tripDuration,
        };
    }, [selectedDest, travelers, tripDuration, flightClass, hotelType, transportType, includeMeals, includeVisa]);

    const handleCalculate = () => {
        if (selectedDest && travelers > 0 && tripDuration > 0) {
            setShowResults(true);
        }
    };

    const handleReset = () => {
        setDestination('');
        setTravelers(1);
        setTripDuration(5);
        setFlightClass(0);
        setHotelType(1);
        setTransportType(1);
        setIncludeVisa(true);
        setIncludeMeals(true);
        setShowResults(false);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen">
            {/* Dark Hero Section for navbar visibility */}
            <div className="bg-gradient-to-br from-[#0a2e0c] via-[#0a2e0c] to-[#1a4a1c] pt-40 pb-20">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-widest mb-8">
                            <Calculator className="w-4 h-4" />
                            Free Online Resource
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                            Travel Expense <br />
                            <span className="text-[#FF5A06]">Calculator</span>
                        </h1>
                        <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                            Plan your trip budget with precision. Get instant estimates for flights, hotels,
                            transportation, and more—whether you're traveling for business or leisure.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Calculator Content */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
                <div className="max-w-[1600px] mx-auto px-8 lg:px-20">

                    {/* Main Calculator Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
                    >
                        <AnimatePresence mode="wait">
                            {!showResults ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="p-8 lg:p-16"
                                >
                                    {/* Step Indicators */}
                                    <div className="flex items-center justify-center gap-4 mb-12">
                                        {['Destination', 'Details', 'Preferences'].map((step, i) => (
                                            <div key={step} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#117513] text-white flex items-center justify-center font-bold text-sm">
                                                    {i + 1}
                                                </div>
                                                <span className="text-sm font-bold text-[#0a2e0c] hidden md:block">{step}</span>
                                                {i < 2 && <div className="w-12 h-[2px] bg-slate-200 hidden md:block" />}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-12">
                                        {/* Left Column - Trip Basics */}
                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-black text-[#0a2e0c] flex items-center gap-3 uppercase tracking-tight">
                                                <MapPin className="w-6 h-6 text-[#FF5A06]" />
                                                Trip Details
                                            </h3>

                                            {/* Destination Select */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-widest">
                                                    Destination from Accra
                                                </label>
                                                <select
                                                    value={destination}
                                                    onChange={(e) => setDestination(e.target.value)}
                                                    className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-slate-100 text-[#0a2e0c] font-bold focus:border-[#117513] focus:outline-none transition-all appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select your destination</option>
                                                    {destinations.map(dest => (
                                                        <option key={dest.code} value={dest.code}>
                                                            {dest.name} ({dest.region})
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Travelers */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-widest">
                                                    Number of Travelers
                                                </label>
                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                                                        className="w-14 h-14 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-2xl transition-all"
                                                    >
                                                        −
                                                    </button>
                                                    <div className="flex-1 flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border-2 border-slate-100">
                                                        <Users className="w-5 h-5 text-[#117513]" />
                                                        <span className="text-2xl font-black text-[#0a2e0c]">{travelers}</span>
                                                        <span className="text-sm text-slate-500 font-bold">{travelers === 1 ? 'traveler' : 'travelers'}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => setTravelers(Math.min(20, travelers + 1))}
                                                        className="w-14 h-14 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-2xl transition-all"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Duration */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-widest">
                                                    Trip Duration (Nights)
                                                </label>
                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={() => setTripDuration(Math.max(1, tripDuration - 1))}
                                                        className="w-14 h-14 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-2xl transition-all"
                                                    >
                                                        −
                                                    </button>
                                                    <div className="flex-1 flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border-2 border-slate-100">
                                                        <Calendar className="w-5 h-5 text-[#117513]" />
                                                        <span className="text-2xl font-black text-[#0a2e0c]">{tripDuration}</span>
                                                        <span className="text-sm text-slate-500 font-bold">{tripDuration === 1 ? 'night' : 'nights'}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => setTripDuration(Math.min(90, tripDuration + 1))}
                                                        className="w-14 h-14 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-2xl transition-all"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Preferences */}
                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-black text-[#0a2e0c] flex items-center gap-3 uppercase tracking-tight">
                                                <Sparkles className="w-6 h-6 text-[#FF5A06]" />
                                                Preferences
                                            </h3>

                                            {/* Flight Class */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-widest">
                                                    Flight Class
                                                </label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {flightClasses.map((fc, i) => (
                                                        <button
                                                            key={fc.name}
                                                            onClick={() => setFlightClass(i)}
                                                            className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center gap-3 ${flightClass === i
                                                                ? 'border-[#117513] bg-[#117513]/5'
                                                                : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                                                                }`}
                                                        >
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${flightClass === i ? 'bg-[#117513] text-white' : 'bg-slate-200 text-slate-600'}`}>
                                                                {fc.icon}
                                                            </div>
                                                            <span className={`font-bold text-sm ${flightClass === i ? 'text-[#117513]' : 'text-slate-600'}`}>
                                                                {fc.name}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Hotel Type */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-widest">
                                                    Accommodation
                                                </label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {hotelTypes.map((ht, i) => (
                                                        <button
                                                            key={ht.name}
                                                            onClick={() => setHotelType(i)}
                                                            className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center gap-3 ${hotelType === i
                                                                ? 'border-[#117513] bg-[#117513]/5'
                                                                : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                                                                }`}
                                                        >
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${hotelType === i ? 'bg-[#117513] text-white' : 'bg-slate-200 text-slate-600'}`}>
                                                                {ht.icon}
                                                            </div>
                                                            <span className={`font-bold text-sm ${hotelType === i ? 'text-[#117513]' : 'text-slate-600'}`}>
                                                                {ht.name}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Transport */}
                                            <div>
                                                <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-widest">
                                                    Local Transportation
                                                </label>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {transportOptions.map((to, i) => (
                                                        <button
                                                            key={to.name}
                                                            onClick={() => setTransportType(i)}
                                                            className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${transportType === i
                                                                ? 'border-[#117513] bg-[#117513]/5'
                                                                : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                                                                }`}
                                                        >
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${transportType === i ? 'bg-[#117513] text-white' : 'bg-slate-200 text-slate-600'}`}>
                                                                {to.icon}
                                                            </div>
                                                            <div className="flex-1">
                                                                <span className={`font-bold text-sm block ${transportType === i ? 'text-[#117513]' : 'text-slate-600'}`}>
                                                                    {to.name}
                                                                </span>
                                                                <span className="text-xs text-slate-400">~${to.dailyCost}/day</span>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Toggles */}
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <div
                                                        onClick={() => setIncludeVisa(!includeVisa)}
                                                        className={`w-14 h-8 rounded-full transition-all flex items-center px-1 ${includeVisa ? 'bg-[#117513]' : 'bg-slate-200'
                                                            }`}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full bg-white shadow-md transition-all ${includeVisa ? 'translate-x-6' : 'translate-x-0'
                                                            }`} />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-600 group-hover:text-[#0a2e0c]">Include Visa</span>
                                                </label>
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <div
                                                        onClick={() => setIncludeMeals(!includeMeals)}
                                                        className={`w-14 h-8 rounded-full transition-all flex items-center px-1 ${includeMeals ? 'bg-[#117513]' : 'bg-slate-200'
                                                            }`}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full bg-white shadow-md transition-all ${includeMeals ? 'translate-x-6' : 'translate-x-0'
                                                            }`} />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-600 group-hover:text-[#0a2e0c]">Include Meals</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Calculate Button */}
                                    <div className="mt-12 flex justify-center">
                                        <button
                                            onClick={handleCalculate}
                                            disabled={!destination}
                                            className={`px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-lg flex items-center gap-4 transition-all ${destination
                                                ? 'bg-[#FF5A06] text-white hover:bg-[#0a2e0c] shadow-2xl hover:shadow-3xl'
                                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                                }`}
                                        >
                                            <Calculator className="w-6 h-6" />
                                            Calculate Estimate
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Results Header */}
                                    <div className="bg-gradient-to-br from-[#0a2e0c] to-[#1a4a1c] p-8 lg:p-16 text-white">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <CheckCircle2 className="w-6 h-6 text-[#FF5A06]" />
                                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">
                                                        Estimate Complete
                                                    </span>
                                                </div>
                                                <h2 className="text-4xl lg:text-5xl font-black mb-2">
                                                    Trip to <span className="text-[#FF5A06]">{selectedDest?.name}</span>
                                                </h2>
                                                <p className="text-white/60 font-medium">
                                                    {travelers} {travelers === 1 ? 'traveler' : 'travelers'} • {tripDuration} nights • {flightClasses[flightClass].name}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Total Estimated Cost</p>
                                                <p className="text-5xl lg:text-6xl font-black text-[#FF5A06]">
                                                    {formatCurrency(calculations?.total || 0)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Breakdown */}
                                    <div className="p-8 lg:p-16">
                                        <h3 className="text-2xl font-black text-[#0a2e0c] mb-8 uppercase tracking-tight flex items-center gap-3">
                                            <TrendingUp className="w-6 h-6 text-[#FF5A06]" />
                                            Detailed Breakdown
                                        </h3>

                                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                                            {/* Cost Items */}
                                            <div className="space-y-4">
                                                {[
                                                    { icon: <Plane className="w-5 h-5" />, label: 'Flights (Round Trip)', value: calculations?.flight || 0, color: 'bg-blue-50 text-blue-600' },
                                                    { icon: <Hotel className="w-5 h-5" />, label: `Accommodation (${tripDuration} nights)`, value: calculations?.hotel || 0, color: 'bg-purple-50 text-purple-600' },
                                                    { icon: <Car className="w-5 h-5" />, label: 'Local Transportation', value: calculations?.transport || 0, color: 'bg-amber-50 text-amber-600' },
                                                    { icon: <Utensils className="w-5 h-5" />, label: includeMeals ? 'Meals & Per Diem' : 'Meals (Not Included)', value: calculations?.meals || 0, color: 'bg-green-50 text-green-600' },
                                                    { icon: <FileText className="w-5 h-5" />, label: includeVisa ? 'Visa & Documentation' : 'Visa (Not Included)', value: calculations?.visa || 0, color: 'bg-red-50 text-red-600' },
                                                ].map((item, i) => (
                                                    <motion.div
                                                        key={item.label}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                                                                {item.icon}
                                                            </div>
                                                            <span className="font-bold text-slate-700">{item.label}</span>
                                                        </div>
                                                        <span className="text-xl font-black text-[#0a2e0c]">
                                                            {formatCurrency(item.value)}
                                                        </span>
                                                    </motion.div>
                                                ))}

                                                {/* Contingency */}
                                                <div className="flex items-center justify-between p-5 bg-amber-50 rounded-2xl border-2 border-amber-200">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                                                            <Sparkles className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <span className="font-bold text-slate-700 block">Contingency Fund</span>
                                                            <span className="text-xs text-slate-500">10% buffer for unexpected costs</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-xl font-black text-amber-600">
                                                        {formatCurrency(calculations?.contingency || 0)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Summary Cards */}
                                            <div className="space-y-6">
                                                <div className="bg-gradient-to-br from-[#117513] to-[#0a2e0c] p-8 rounded-3xl text-white">
                                                    <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Per Person</p>
                                                    <p className="text-4xl font-black mb-4">{formatCurrency(calculations?.perPerson || 0)}</p>
                                                    <div className="h-[1px] bg-white/10 my-4" />
                                                    <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Per Day</p>
                                                    <p className="text-4xl font-black">{formatCurrency(calculations?.perDay || 0)}</p>
                                                </div>

                                                <div className="bg-slate-100 p-8 rounded-3xl">
                                                    <h4 className="font-bold text-[#0a2e0c] mb-4 flex items-center gap-2">
                                                        <Globe className="w-5 h-5 text-[#FF5A06]" />
                                                        Trip Summary
                                                    </h4>
                                                    <ul className="space-y-3 text-sm">
                                                        <li className="flex justify-between">
                                                            <span className="text-slate-500">Origin</span>
                                                            <span className="font-bold text-[#0a2e0c]">Accra, Ghana (ACC)</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span className="text-slate-500">Destination</span>
                                                            <span className="font-bold text-[#0a2e0c]">{selectedDest?.name}</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span className="text-slate-500">Flight Class</span>
                                                            <span className="font-bold text-[#0a2e0c]">{flightClasses[flightClass].name}</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span className="text-slate-500">Accommodation</span>
                                                            <span className="font-bold text-[#0a2e0c]">{hotelTypes[hotelType].name}</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span className="text-slate-500">Transport</span>
                                                            <span className="font-bold text-[#0a2e0c]">{transportOptions[transportType].name}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-slate-100">
                                            <button
                                                onClick={handleReset}
                                                className="px-8 py-5 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-3"
                                            >
                                                <RefreshCw className="w-5 h-5" />
                                                Calculate Again
                                            </button>
                                            <button
                                                className="px-8 py-5 rounded-2xl bg-[#117513] text-white font-bold uppercase tracking-widest hover:bg-[#0a2e0c] transition-all flex items-center justify-center gap-3"
                                            >
                                                <Download className="w-5 h-5" />
                                                Download Estimate PDF
                                            </button>
                                            <button
                                                className="px-8 py-5 rounded-2xl bg-[#FF5A06] text-white font-bold uppercase tracking-widest hover:bg-[#0a2e0c] transition-all flex items-center justify-center gap-3"
                                            >
                                                Get Exact Quote
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Disclaimer */}
                                        <p className="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto">
                                            * This is an estimate based on average market rates and is for planning purposes only.
                                            Actual costs may vary based on travel dates, availability, and current exchange rates.
                                            Contact Satguru Travel for an accurate, personalized quote.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Promotional Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 bg-gradient-to-r from-[#0a2e0c] to-[#1a4a1c] rounded-[3rem] p-12 lg:p-16 text-white text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A06]/20 rounded-full -mr-48 -mt-48 blur-3xl" />
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl font-black mb-6">
                                Need a More Accurate Quote?
                            </h3>
                            <p className="text-white/60 font-medium max-w-2xl mx-auto mb-8">
                                Our travel consultants can provide exact pricing with exclusive corporate rates,
                                seasonal discounts, and package deals that aren't reflected in this calculator.
                            </p>
                            <button className="px-12 py-6 bg-[#FF5A06] text-white font-black rounded-2xl uppercase tracking-widest hover:bg-white hover:text-[#0a2e0c] transition-all">
                                Talk to a Travel Expert
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TravelCalculator;
