import React from 'react';
import { motion, type Variants } from 'framer-motion';

export const QuickSalesBar: React.FC = () => {
    // The promotional text you want to animate
    const message = "Summer Sale For All Tech & Free Express Delivery - OFF 50%!";

    // Split text into individual characters for letter-by-letter animation
    const letters = Array.from(message);

    // Variants for the container to stagger children animations
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03, // Speed of letter appearance progression
                delayChildren: 0.2,
            },
        },
    };

    // Variants for individual letters sliding/fading in
    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <div className="w-full bg-black text-white text-xs sm:text-sm py-2 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="hidden sm:block w-1/4"></div>

                {/* Animated Text Container */}
                <motion.div
                    className="flex flex-wrap justify-center items-center text-center font-normal tracking-wide"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            style={{ display: char === ' ' ? 'inline' : 'inline-block', whiteSpace: 'pre' }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.a
                        href="/products"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, duration: 0.4 }}
                        className="ml-3 font-semibold underline underline-offset-4 hover:text-gray-300 transition-colors cursor-pointer"
                    >
                        ShopNow
                    </motion.a>
                </motion.div>

                <div className="w-full sm:w-1/4 flex justify-end"></div>
            </div>
        </div>
    );
};

export default QuickSalesBar;