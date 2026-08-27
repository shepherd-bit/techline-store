import { useState, useEffect } from 'react';
import { Heart, Eye, Star, ArrowLeft, ArrowRight, Check, Plus } from 'lucide-react';
import { mockProducts } from '../../data/mockProducts';

interface OffersProps {
    // Expecting the handler to accept the product, boolean state, and optional quantity
    onCartAction?: (product: any, isAdding: boolean, quantity?: number) => void;
    // Callback handler to navigate to Product Details view
    onSelectProduct?: (product: any) => void;
}

export default function Offers({ onCartAction, onSelectProduct }: OffersProps) {
    const offerProducts = mockProducts.slice(0, 4);
    const [favorites, setFavorites] = useState<string[]>([]);
    
    // Track the persistent ADDED/REMOVED state for each button individually using string IDs
    const [addedProductsState, setAddedProductsState] = useState<Map<string, boolean>>(new Map());

    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 17,
        seconds: 18,
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

    const toggleFavorite = (id: string) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleCartActionClick = (product: any) => {
        // Determine the NEXT state for THIS specific item
        const currentlyAdded = addedProductsState.get(product.id) || false;
        const actionIsNowAdding = !currentlyAdded;

        // 1. Update local state Map for *this specific* product ID instantly
        setAddedProductsState((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(product.id, actionIsNowAdding);
            return newMap;
        });

        // 2. Notify parent component to update global counter and cart items
        if (onCartAction) {
            onCartAction(product, actionIsNowAdding, 1);
        }
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 border-b border-gray-200">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                <div>
                    <div className="flex items-center space-x-3 mb-3">
                        <span className="w-4 h-9 bg-red-600 rounded-sm inline-block"></span>
                        <span className="text-red-600 font-semibold text-sm sm:text-base">Offers</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black">
                            Flash Sales
                        </h2>
                        
                        {/* Countdown Timer */}
                        <div className="flex items-center space-x-3 mt-4 lg:mt-0 font-bold text-black text-xl sm:text-2xl">
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500">Days</span>
                                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                            </div>
                            <span className="text-red-500 font-bold pb-4">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500">Hours</span>
                                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                            </div>
                            <span className="text-red-500 font-bold pb-4">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500">Minutes</span>
                                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                            </div>
                            <span className="text-red-500 font-bold pb-4">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500">Seconds</span>
                                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Navigation Arrows */}
                <div className="flex space-x-2 self-end md:self-auto">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-black" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ArrowRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {offerProducts.map((product) => {
                    const isFavorited = favorites.includes(product.id);
                    
                    // Check persistent state from Map using product.id string directly
                    const isCurrentlyAdded = addedProductsState.get(product.id) || false;
                    
                    const productImage = Array.isArray(product.images) ? product.images[0] : (product as any).image;

                    return (
                        <div key={product.id} className="flex flex-col group">
                            {/* Card Image Container with Heavy Shadows */}
                            <div className="relative bg-[#F5F5F5] rounded-md h-[270px] sm:h-[300px] flex items-center justify-center overflow-hidden shadow-xl shadow-black/15 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/25">
                                
                                {/* Discount Badge */}
                                <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-3 py-1 rounded z-10">
                                    {(product as any).discount || '-30%'}
                                </span>

                                {/* Action Icons */}
                                <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(product.id);
                                        }}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                                    >
                                        <Heart
                                            className={`w-4 h-4 transition-colors ${
                                                isFavorited
                                                    ? 'text-yellow-500 fill-yellow-400'
                                                    : 'text-black hover:text-red-500'
                                            }`}
                                        />
                                    </button>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (onSelectProduct) onSelectProduct(product);
                                        }}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                                        title="View Details"
                                    >
                                        <Eye className="w-4 h-4 text-black" />
                                    </button>
                                </div>

                                {/* Product Image - Clickable to open details */}
                                <img
                                    src={productImage}
                                    alt={product.name}
                                    onClick={() => {
                                        if (onSelectProduct) onSelectProduct(product);
                                    }}
                                    className="max-h-[60%] max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                                />

                                {/* Hover-Reveal Toggle Button */}
                                <button
                                    onClick={() => handleCartActionClick(product)}
                                    className={`absolute bottom-0 left-0 w-full py-2.5 text-sm font-medium transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 cursor-pointer ${
                                        isCurrentlyAdded
                                            ? 'bg-gray-600 text-white translate-y-0' 
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

                            {/* Product Info - Clickable Name */}
                            <div className="mt-4 space-y-1">
                                <h3 
                                    onClick={() => {
                                        if (onSelectProduct) onSelectProduct(product);
                                    }}
                                    className="font-semibold text-black truncate hover:text-red-600 transition-colors cursor-pointer"
                                >
                                    {product.name}
                                </h3>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-600 font-semibold">${product.price}</span>
                                    {(product as any).originalPrice && (
                                        <span className="text-red-500 line-through text-sm font-medium">
                                            ${(product as any).originalPrice}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center space-x-1 pt-1">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(product.rating || 4)
                                                        ? 'fill-current'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-xs font-semibold pl-1">
                                        ({(product as any).reviews || (product as any).ratingCount || 80})
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}