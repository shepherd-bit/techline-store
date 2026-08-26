import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CarouselSlide {
    id: number;
    title: string;
    subtitle: string;
    discount: string;
    image: string;
    link: string;
}

const slides: CarouselSlide[] = [
    {
        id: 1,
        subtitle: 'iPhone 17 Pro Max',
        title: 'Up to 10% off Voucher',
        discount: '10%',
        image: 'img/hero/iphone17-slide1.jpg',
        link: '/product/phone-1'
    },
    {
        id: 2,
        subtitle: 'TitanBook Pro 16"',
        title: 'Next-Gen Creator Power',
        discount: '15%',
        image: 'img/hero/laptop-slide2.jpg',
        link: '/product/comp-1'
    },
    {
        id: 3,
        subtitle: 'Chronos Elite Titanium',
        title: 'Adventure Ready Smartwatch',
        discount: '20%',
        image: 'img/hero/watch-slide3.jpg',
        link: '/product/watch-1'
    },
    {
        id: 4,
        subtitle: 'Aether Cinema 8K',
        title: 'Pro Studio Capture Suite',
        discount: '12%',
        image: 'img/hero/camera-slide4.jpg',
        link: '/product/cam-1'
    },
    {
        id: 5,
        subtitle: 'Acoustic Master Pro',
        title: 'Immersive Spatial Audio',
        discount: '25%',
        image: 'img/hero/audio-slide5.jpg',
        link: '/product/head-1'
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

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                
                {/* Left Side: Tech Categories List (Pushed left & streamlined) */}
                <div className="w-full lg:w-1/5 border-r border-gray-200 pr-6 hidden lg:flex flex-col space-y-3">
                    {categories.map((cat, idx) => (
                        <motion.a
                            key={idx}
                            href={cat.path}
                            className="relative text-black font-medium py-1.5 inline-block w-fit"
                            whileHover={{ x: 6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <span>{cat.name}</span>
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Right Side: Hero Banner Carousel */}
                <div className="w-full lg:w-4/5 relative">
                    <div className="relative bg-black text-white rounded-xl overflow-hidden h-[270px] sm:h-[315px] flex items-center px-8 sm:px-14">
                        
                        {/* Slide Content */}
                        <div className="z-10 max-w-md space-y-3">
                            <div className="flex items-center space-x-3">
                                <span className="text-xl"></span>
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

                        {/* Carousel Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                                        currentIndex === index
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