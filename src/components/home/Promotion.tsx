import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Promotion() {
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 23,
        minutes: 59,
        seconds: 35,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 overflow-hidden font-sans">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/30 flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 min-h-[520px]"
            >
                {/* Left Content: Staggered Text & Minimalist Floating Countdown */}
                <div className="z-20 flex flex-col items-start space-y-8 max-w-xl">
                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
                    >
                        Enhance Your <br />
                        Music Experience
                    </motion.h2>

                    {/* Floating Numbers Countdown */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center space-x-6 sm:space-x-8 text-white"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-4xl font-extrabold tracking-wide">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-400 mt-1">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-4xl font-extrabold tracking-wide">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-400 mt-1">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-4xl font-extrabold tracking-wide">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-400 mt-1">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl sm:text-4xl font-extrabold tracking-wide">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-400 mt-1">Seconds</span>
                        </div>
                    </motion.div>

                    {/* Buy Now Button with Hover Scale */}
                    <div className="pt-2">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#00FF66] hover:bg-[#00E05B] text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded transition-colors shadow-lg shadow-[#00FF66]/20 cursor-default"
                        >
                            Buy Now!
                        </motion.button>
                    </div>
                </div>

                {/* Right Image Slot: Massively Enlarged & Shifted Left */}
                <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="mt-8 lg:mt-0 z-10 flex items-center justify-center lg:absolute lg:right-[-80px] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[65%]"
                >
                    <img 
                        src="./jbl-speaker.png" 
                        alt="JBL Speaker Promotion" 
                        className="max-h-[550px] sm:max-h-[680px] lg:max-h-[820px] w-auto object-contain drop-shadow-[0_35px_50px_rgba(255,255,255,0.25)] scale-125 lg:scale-135"
                    />
                </motion.div>

                {/* Decorative background radial glow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-l from-white/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
        </section>
    );
}