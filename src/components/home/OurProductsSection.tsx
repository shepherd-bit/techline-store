import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Star, Check, Plus } from 'lucide-react';
import { mockProducts } from '../../data/mockProducts';

interface OurProductsSectionProps {
    onCartAction?: (isAdding: boolean) => void;
}

export default function OurProductsSection({ onCartAction }: OurProductsSectionProps) {
    // Select 8 random or featured products from mockProducts
    const [products] = useState(() => {
        const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    });

    const [favorites, setFavorites] = useState<string[]>([]);
    
    // Track persistent ADDED/REMOVED state for each button individually using string IDs
    const [addedProductsState, setAddedProductsState] = useState<Map<string, boolean>>(new Map());

    const toggleFavorite = (id: string) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleCartAction = (id: string) => {
        const currentlyAdded = addedProductsState.get(id) || false;
        const actionIsNowAdding = !currentlyAdded;

        // 1. Update local state Map for this specific product ID instantly
        setAddedProductsState((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(id, actionIsNowAdding);
            return newMap;
        });

        // 2. Notify parent component/App to update global counter
        if (onCartAction) {
            onCartAction(actionIsNowAdding);
        }
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-12 font-sans">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        {/* Darker green shade for the indicator block and label */}
                        <div className="w-4 h-8 bg-green-700 rounded-sm"></div>
                        <span className="text-sm font-semibold text-green-700 tracking-wide uppercase">Our Products</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                        Explore Our Products
                    </h2>
                </div>
            </div>

            {/* Products Grid: 4 columns x 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                {products.map((product) => {
                    const isFavorited = favorites.includes(product.id);
                    const isCurrentlyAdded = addedProductsState.get(product.id) || false;
                    const productImage = Array.isArray(product.images) ? product.images[0] : (product as any).image;

                    return (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[280px] bg-[#F5F5F5] rounded-lg flex items-center justify-center overflow-hidden p-6 shadow-md">
                                {/* New Badge */}
                                {(product as any).isNew && (
                                    <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-xs font-semibold px-2.5 py-1 rounded z-10">
                                        NEW
                                    </span> 
                                 )}

                                {/* Action Buttons (Wishlist & Quick View) */}
                                <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
                                    <button 
                                        onClick={() => toggleFavorite(product.id)}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                                    >
                                        <Heart className={`w-4 h-4 transition-colors ${isFavorited ? 'text-yellow-500 fill-yellow-400' : 'text-black hover:text-red-500'}`} />
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                                        <Eye className="w-4 h-4 text-black" />
                                    </button>
                                </div>

                                {/* Product Image */}
                                <img 
                                    src={productImage} 
                                    alt={product.name} 
                                    className="max-h-[180px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Interactive Add To Cart Button */}
                                <button
                                    onClick={() => handleCartAction(product.id)}
                                    className={`absolute bottom-0 left-0 w-full py-2.5 text-sm font-medium transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 ${
                                        isCurrentlyAdded
                                            ? 'bg-gray-700 text-white translate-y-0'
                                            : 'bg-black text-white translate-y-full group-hover:translate-y-0 hover:bg-gray-900'
                                    }`}
                                >
                                    {isCurrentlyAdded ? (
                                        <Check className="w-4 h-4 text-white" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-white" />
                                    )}
                                    <span>{isCurrentlyAdded ? 'Added To Cart' : 'Add To Cart'}</span>
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="mt-4 flex flex-col space-y-1.5">
                                <h3 className="font-semibold text-black text-base line-clamp-1">
                                    {product.name}
                                </h3>
                                
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-700 font-bold">
                                        ${product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through text-sm">
                                            ${product.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Rating and Reviews */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-4 h-4 ${i < Math.floor(product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} 
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-xs font-medium">
                                        ({product.reviewsCount || 55})
                                    </span>
                                </div>

                                {/* Color Options (if available) */}
                                {product.colors && product.colors.length > 0 && (
                                    <div className="flex items-center space-x-1.5 pt-1">
                                        {product.colors.map((color, idx) => (
                                            <span 
                                                key={idx} 
                                                className="w-3.5 h-3.5 rounded-full border border-gray-300"
                                                style={{ backgroundColor: color }}
                                            ></span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* View All Button with Heartbeat Scaling Animation & Double Width */}
            <div className="flex justify-center mt-8">
                <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-full max-w-md"
                >
                    <a
                        href="/all-products"
                        className="block w-full bg-black text-white text-center font-medium py-4 rounded-md shadow-lg hover:bg-gray-900 transition-colors"
                    >
                        View All Products
                    </a>
                </motion.div>
            </div>
        </section>
    );
}