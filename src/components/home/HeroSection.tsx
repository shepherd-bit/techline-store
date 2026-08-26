import React, { useState, useEffect } from 'react';
import { ArrowRight, Laptop, Watch, Camera, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselSlide {
    id: number;
    title: string;
    subtitle: string;
    discount: string;
    image: string;
    link: string;
    // Added an icon property for each slide
    icon: React.ReactNode;
}

const slides: CarouselSlide[] = [
    {
        id: 1,
        subtitle: 'iPhone 17 Pro Max',
        title: 'Up to 10% off Voucher',
        discount: '10%',
        image: './hero-images/iphone-17.png',
        link: '/product/phone-1',
        icon: (
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.1-1.9-14.24-6.08-3.58-2.95-7.48-7.63-11.71-14.05-6.54-9.95-11.66-20.9-15.34-32.85-3.69-11.95-5.53-23.36-5.53-34.22 0-14.28 3.73-25.79 11.19-34.54 7.47-8.75 16.74-13.2 27.81-13.35 5.1 0 10.36 1.3 15.77 3.9 5.42 2.6 9.07 3.9 10.96 3.9 2.06 0 5.96-1.38 11.71-4.14 5.75-2.77 11.03-4.05 15.84-3.84 10.31.54 18.79 4.38 25.44 11.53-9.52 5.81-14.15 13.79-13.9 23.94.22 7.74 3.19 14.11 8.91 19.11 5.72 5 12.65 7.6 20.79 7.8-1.95 6.09-4.78 12.18-8.5 18.27zm-27.16-98.3c0-7.39 2.67-14.31 8.01-20.75 5.34-6.44 11.97-10.22 19.9-11.33.11 1.09.16 2.07.16 2.94 0 7.07-2.67 14.05-8.01 20.95-5.34 6.9-11.97 10.74-19.9 11.53-.11-.87-.16-1.95-.16-3.34z" />
            </svg>
        )
    },
    {
        id: 2,
        subtitle: 'TitanBook Pro 16"',
        title: 'Next-Gen Creator Power',
        discount: '15%',
        image: './hero-images/titanBook-pro.png',
        link: '/product/comp-1',
        icon: <Laptop className="w-5 h-5 text-white" />
    },
    {
        id: 3,
        subtitle: 'Chronos Elite Titanium',
        title: 'Adventure Ready Smartwatch',
        discount: '20%',
        image: './hero-images/chronos-elite.png',
        link: '/product/watch-1',
        icon: <Watch className="w-5 h-5 text-white" />
    },
    {
        id: 4,
        subtitle: 'Aether Cinema 8K',
        title: 'Pro Studio Capture Suite',
        discount: '12%',
        image: './hero-images/aether-cinema.webp',
        link: '/product/cam-1',
        icon: <Camera className="w-5 h-5 text-white" />
    },
    {
        id: 5,
        subtitle: 'Acoustic Master Pro',
        title: 'Immersive Spatial Audio',
        discount: '25%',
        image: './hero-images/acoustic-master.png',
        link: '/product/head-1',
        icon: <Headphones className="w-5 h-5 text-white" />
    },
];

export const HeroSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll carousel every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const categories = [
        { name: 'Smartphones', path: '/category/Smartphones' },
        { name: 'Computers', path: '/category/Computers' },
        { name: 'Smartwatches', path: '/category/Smartwatches' },
        { name: 'Cameras', path: '/category/Cameras' },
        { name: 'Headphones', path: '/category/Headphones' },
        { name: 'Gaming', path: '/category/Gaming' },
    ];

    const slideVariants = {
        enter: { x: '100%', opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 }
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">

                {/* Left Side: Tech Categories List with Bulge & Underline Animation */}
                <div className="w-full lg:w-1/5 border-r border-gray-200 pr-6 hidden lg:flex flex-col space-y-3">
                    {categories.map((cat, idx) => (
                        <motion.a
                            key={idx}
                            href={cat.path}
                            className="relative text-black font-medium py-1.5 inline-block w-fit"
                            whileHover={{ x: 8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <span>{cat.name}</span>
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Right Side: Hero Banner Carousel with Smooth Sliding */}
                <div className="w-full lg:w-4/5 relative">
                    <div className="relative bg-black/90 backdrop-blur-md text-white rounded-xl overflow-hidden h-[270px] sm:h-[315px] flex items-center px-8 sm:px-14 shadow-2xl shadow-black/40">

                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                className="absolute inset-0 flex items-center px-8 sm:px-14 w-full h-full"
                            >
                                {/* Slide Content */}
                                <div className="z-10 max-w-md space-y-3">
                                    <div className="flex items-center space-x-3">
                                        {/* Dynamic Icon Rendering */}
                                        {slides[currentIndex].icon}
                                        <span className="text-sm sm:text-base font-light tracking-wide">
                                            {slides[currentIndex].subtitle}
                                        </span>
                                    </div>

                                    <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight">
                                        {slides[currentIndex].title}
                                    </h1>

                                    <a
                                        href={slides[currentIndex].link}
                                        className="inline-flex items-center space-x-2 text-sm sm:text-base font-medium border-b border-white pb-1 hover:text-gray-300 transition-colors pt-1"
                                    >
                                        <span>Shop Now</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Carousel Image Slot */}
                                <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-1/2 h-4/5 flex items-center justify-center">
                                    <img
                                        src={slides[currentIndex].image}
                                        alt={slides[currentIndex].subtitle}
                                        className="max-h-full max-w-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index
                                            ? 'bg-red-500 w-6'
                                            : 'bg-gray-500 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;