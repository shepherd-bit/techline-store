import { motion } from 'framer-motion';

export default function NewArrivals() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-12 font-sans">
            {/* Section Header */}
            <div className="flex flex-col space-y-2 mb-8">
                <div className="flex items-center space-x-3">
                    <div className="w-4 h-8 bg-green-700 rounded-sm"></div>
                    <span className="text-sm font-semibold text-green-700 tracking-wide uppercase">Featured</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                    New Arrival
                </h2>
            </div>

            {/* Grid Layout matching the reference image structure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Left Large Card (PlayStation 5) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                    className="relative group bg-black rounded-lg overflow-hidden flex flex-col justify-end p-8 sm:p-12 min-h-[500px] sm:min-h-[600px] shadow-xl"
                >
                    {/* Background/Product Image Space - Enlarged */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
                        <img 
                            src="./ps5-2.png" 
                            alt="PlayStation 5" 
                            className="max-h-[480px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                    {/* Content Overlay */}
                    <div className="relative z-10 max-w-sm space-y-3">
                        <motion.h3 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl sm:text-3xl font-semibold text-white tracking-wide"
                        >
                            PlayStation 5
                        </motion.h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Black and White version of the PS5 coming out on sale with next-gen performance.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column Grid (3 sub-cards) */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    
                    {/* Top Right Card (Samsung Galaxy Z Fold) - Shifted Midway to the Right */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="relative group bg-black rounded-lg overflow-hidden flex flex-col justify-end p-6 sm:p-8 min-h-[280px] shadow-xl"
                    >
                        {/* Background/Product Image Space - Shifted Midway Right */}
                        <div className="absolute inset-0 flex items-center justify-end pr-12 sm:pr-16 p-4 overflow-hidden">
                            <img 
                                src="./zfold-1.png" 
                                alt="Samsung Galaxy Z Fold" 
                                className="max-h-[230px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none"></div>

                        {/* Content Overlay */}
                        <div className="relative z-10 max-w-xs space-y-2">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                Galaxy Z Fold
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                Experience dual-screen productivity and folding innovation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom Row: 2 Split Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        
                        {/* Bottom Left Card (Apple Vision Pro) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group bg-black rounded-lg overflow-hidden flex flex-col justify-end p-6 min-h-[280px] shadow-xl"
                        >
                            {/* Background/Product Image Space - Enlarged */}
                            <div className="absolute inset-0 flex items-center justify-center p-3 overflow-hidden">
                                <img 
                                    src="./vision-pro.jpg" 
                                    alt="Apple Vision Pro" 
                                    className="max-h-[190px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                            {/* Content Overlay */}
                            <div className="relative z-10 space-y-1.5">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    Vision Pro
                                </h3 >
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    Spatial computing for an immersive digital workspace.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bottom Right Card (Sony WH-1000XM5) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group bg-black rounded-lg overflow-hidden flex flex-col justify-end p-6 min-h-[280px] shadow-xl"
                        >
                            {/* Background/Product Image Space - Enlarged */}
                            <div className="absolute inset-0 flex items-center justify-center p-3 overflow-hidden">
                                <img 
                                    src="./audio-0.png" 
                                    alt="Sony WH-1000XM5" 
                                    className="max-h-[190px] w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                            {/* Content Overlay */}
                            <div className="relative z-10 space-y-1.5">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    Audio Tech
                                </h3>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    Industry-leading noise canceling wireless headphones.
                                </p>
                            </div>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}