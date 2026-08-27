import { useState } from 'react';
import { Star, Heart, Eye, ShoppingCart, Check } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';

interface AllProductsProps {
    onSelectProduct: (product: any) => void;
    onBackToHome: () => void;
    onAddToCart: (product: any, isAdding: boolean, quantity: number) => void;
}

export default function AllProducts({ onSelectProduct, onBackToHome, onAddToCart }: AllProductsProps) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [addedProductsState, setAddedProductsState] = useState<Map<string, boolean>>(new Map());

    const toggleFavorite = (id: string) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleCartAction = (product: any) => {
        const id = product.id;
        const currentlyAdded = addedProductsState.get(id) || false;
        const actionIsNowAdding = !currentlyAdded;

        setAddedProductsState((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(id, actionIsNowAdding);
            return newMap;
        });

        if (onAddToCart) {
            onAddToCart(product, actionIsNowAdding, 1);
        }
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Header & Back Navigation */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-6">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="w-4 h-9 bg-green-700 rounded-sm inline-block"></span>
                        <span className="text-green-700 font-semibold text-sm sm:text-base uppercase tracking-wide">Our Store</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
                        All Products Catalog ({mockProducts.length})
                    </h1>
                </div>

                <button 
                    onClick={onBackToHome}
                    className="bg-black text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors self-start md:self-auto cursor-pointer shadow"
                >
                    Back to Home
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockProducts.map((product) => {
                    const primaryImage = Array.isArray(product.images) ? product.images[0] : (product as any).image;
                    const isFavorited = favorites.includes(product.id);
                    const isCurrentlyAdded = addedProductsState.get(product.id) || false;

                    return (
                        <div 
                            key={product.id}
                            className="group relative flex flex-col bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Top Badges & Action Buttons */}
                            <div className="relative w-full h-[220px] bg-[#F5F5F5] rounded-md flex items-center justify-center p-4 overflow-hidden mb-4">
                                {product.isNewArrival && (
                                    <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-xs font-semibold px-2.5 py-1 rounded z-10">
                                        NEW
                                    </span>
                                )}

                                <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
                                    <button 
                                        onClick={() => toggleFavorite(product.id)}
                                        className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                                    >
                                        <Heart className={`w-4 h-4 transition-colors ${isFavorited ? 'text-yellow-500 fill-yellow-400' : 'text-black hover:text-red-500'}`} />
                                    </button>
                                    <button 
                                        onClick={() => onSelectProduct(product)}
                                        className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                                    >
                                        <Eye className="w-4 h-4 text-black" />
                                    </button>
                                </div>

                                <img 
                                    src={primaryImage} 
                                    alt={product.name} 
                                    className="max-h-[160px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    onClick={() => onSelectProduct(product)}
                                />

                                {/* Quick Add Button Overlay */}
                                <button 
                                    onClick={() => handleCartAction(product)}
                                    className={`absolute bottom-0 inset-x-0 py-2.5 text-xs font-medium flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out cursor-pointer ${
                                        isCurrentlyAdded
                                            ? 'bg-gray-700 text-white translate-y-0'
                                            : 'bg-black text-white translate-y-full group-hover:translate-y-0 hover:bg-gray-900'
                                    }`}
                                >
                                    {isCurrentlyAdded ? (
                                        <Check className="w-4 h-4 text-white" />
                                    ) : (
                                        <ShoppingCart className="w-4 h-4 text-white" />
                                    )}
                                    <span>{isCurrentlyAdded ? 'Added To Cart' : 'Add To Cart'}</span>
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col flex-grow">
                                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                    {product.category}
                                </span>
                                <h3 
                                    onClick={() => onSelectProduct(product)}
                                    className="font-semibold text-black text-base line-clamp-1 hover:text-green-700 transition-colors cursor-pointer"
                                >
                                    {product.name}
                                </h3>

                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-green-700 font-bold text-base">${product.price}.00</span>
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through text-sm">
                                            ${product.originalPrice}.00
                                        </span>
                                    )}
                                </div>

                                {/* Rating and Reviews */}
                                <div className="flex items-center space-x-2 mt-2">
                                    <div className="flex items-center text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} 
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-xs font-medium">({product.reviewsCount || 88})</span>
                                </div>

                                {/* Color Dots if available */}
                                {product.colors && product.colors.length > 0 && (
                                    <div className="flex items-center space-x-1.5 mt-3">
                                        {product.colors.map((color: string, idx: number) => (
                                            <span 
                                                key={idx}
                                                style={{ backgroundColor: color === '#white' ? '#fff' : color }}
                                                className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-block"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}