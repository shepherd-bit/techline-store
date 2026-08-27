import { motion } from 'framer-motion';
import { Truck, Headphones, ShieldCheck } from 'lucide-react';

export default function ServiceGuarantees() {
    const guarantees = [
        {
            icon: <Truck className="w-6 h-6 text-black group-hover:text-green-700 transition-colors duration-300" />,
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
        },
        {
            icon: <Headphones className="w-6 h-6 text-black group-hover:text-green-700 transition-colors duration-300" />,
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-black group-hover:text-green-700 transition-colors duration-300" />,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
        },
    ];

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-16 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {guarantees.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                    >
                        {/* Icon Container with Spring Hover Effect */}
                        <motion.div 
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-green-50 flex items-center justify-center shadow-md mb-6"
                        >
                            {item.icon}
                        </motion.div>

                        {/* Title & Description with smooth upward slide */}
                        <motion.div 
                            initial={{ y: 0 }}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-2"
                        >
                            <h3 className="font-bold text-gray-900 text-base tracking-wider">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 group-hover:text-gray-700 text-sm leading-relaxed transition-colors duration-300">
                                {item.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}