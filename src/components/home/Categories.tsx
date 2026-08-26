import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    { name: 'Phones', icon: Smartphone, path: '/category/phones' },
    { name: 'Computers', icon: Monitor, path: '/category/computers' },
    { name: 'Smartwatches', icon: Watch, path: '/category/smartwatches' },
    { name: 'Cameras', icon: Camera, path: '/category/cameras' },
    { name: 'Headphones', icon: Headphones, path: '/category/headphones' },
    { name: 'Gaming', icon: Gamepad2, path: '/category/gaming' },
];

export default function Categories() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 border-b border-gray-200">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                <div>
                    <div className="flex items-center space-x-3 mb-3">
                        <span className="w-4 h-9 bg-red-600 rounded-sm inline-block"></span>
                        <span className="text-red-600 font-semibold text-sm sm:text-base">Categories</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black">
                        Browse By Category
                    </h2>
                </div>

                {/* Navigation Arrows */}
                <div className="flex space-x-2 self-end md:self-auto">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-black" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ArrowRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-4 pb-4">
                {categories.map((cat) => {
                    const IconComponent = cat.icon;

                    return (
                        <motion.a
                            key={cat.name}
                            href={cat.path}
                            whileHover={{ scale: 1.08, y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="group relative flex flex-col items-center justify-center h-[170px] rounded-md bg-white border border-gray-200 shadow-xl shadow-black/10 hover:bg-black hover:text-white hover:border-black hover:shadow-2xl hover:shadow-black/30 transition-colors duration-300"
                        >
                            <IconComponent
                                className="w-10 h-10 mb-4 text-black group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                            />
                            <span className="text-sm font-medium tracking-wide">
                                {cat.name}
                            </span>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}