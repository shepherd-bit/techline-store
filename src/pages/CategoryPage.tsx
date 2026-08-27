import { useState } from 'react';
import { mockProducts } from '../data/mockProducts';
import { Star, ShoppingCart, ArrowLeft, Check } from 'lucide-react';

interface CategoryPageProps {
    category: string;
    onSelectProduct: (product: any) => void;
    onBackToHome: () => void;
    onAddToCart: (product: any, isAdding?: boolean, quantity?: number) => void;
}

export default function CategoryPage({ category, onSelectProduct, onBackToHome, onAddToCart }: CategoryPageProps) {
    // Filter products based on the selected category (case-insensitive match)
    const filteredProducts = mockProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    // Track the persistent ADDED/REMOVED state for each button individually using string IDs
    const [addedProductsState, setAddedProductsState] = useState<Map<string, boolean>>(new Map());

    const handleCartActionClick = (product: any) => {
        const currentlyAdded = addedProductsState.get(product.id) || false;
        const actionIsNowAdding = !currentlyAdded;

        // 1. Update local state Map for this specific product ID instantly
        setAddedProductsState((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(product.id, actionIsNowAdding);
            return newMap;
        });

        // 2. Notify parent component to update the cart counter and items list
        if (onAddToCart) {
            onAddToCart(product, actionIsNowAdding, 1);
        }
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Top Navigation / Back Button */}
            <button 
                onClick={onBackToHome}
                className="flex items-center space-x-2 text-gray-600 hover:text-black mb-8 transition-colors cursor-pointer group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-sm">Back to Home</span>
            </button>

            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-4 h-8 bg-red-600 rounded"></div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-black uppercase">
                    {category}
                </h1>
            </div>

            {/* Product Grid or Empty State */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => {
                        const isCurrentlyAdded = addedProductsState.get(product.id) || false;

                        return (
                            <div 
                                key={product.id}
                                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden"
                            >
                                {/* Product Image Container */}
                                <div 
                                    onClick={() => onSelectProduct(product)}
                                    className="w-full h-52 bg-gray-50 rounded-lg overflow-hidden relative cursor-pointer flex items-center justify-center p-4"
                                >
                                    <img 
                                        src={product.images[0]} 
                                        alt={product.name} 
                                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />  
                                </div>

                                {/* Add to Cart Quick Action / Toggle Button */}
                                <button 
                                    onClick={() => handleCartActionClick(product)}
                                    className={`w-full py-2.5 rounded-lg text-xs font-medium transition-all duration-300 flex items-center justify-center space-x-2 mt-4 cursor-pointer ${
                                        isCurrentlyAdded
                                            ? 'bg-gray-600 text-white' // Dark Gray when added
                                            : 'bg-black text-white opacity-0 group-hover:opacity-100 hover:bg-gray-900' // Black on hover when not added
                                    }`}
                                >
                                    {isCurrentlyAdded ? (
                                        <>
                                            <Check className="w-4 h-4 text-white" />
                                            <span>Added To Cart</span>
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart className="w-4 h-4 text-white" />
                                            <span>Add To Cart</span>
                                        </>
                                    )}
                                </button>

                                {/* Product Details */}
                                <div className="mt-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 
                                            onClick={() => onSelectProduct(product)}
                                            className="font-semibold text-gray-900 text-sm line-clamp-1 cursor-pointer hover:text-red-600 transition-colors"
                                        >
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <span className="text-red-600 font-bold text-base">
                                                ${product.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-1.5 mt-3">
                                        <div className="flex items-center text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className={`w-3.5 h-3.5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} 
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-500 text-xs font-medium">
                                            (88)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="py-20 text-center bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-gray-500 text-lg">No products found in this category right now.</p>
                    <button 
                        onClick={onBackToHome}
                        className="mt-4 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Return to Home
                    </button>
                </div>
            )}
        </div>
    );
}