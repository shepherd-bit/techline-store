import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';

interface AllProductsProps {
    onSelectProduct: (product: any) => void;
    onBackToHome: () => void;
    onAddToCart: (product: any) => void;
}

export default function AllProducts({ onSelectProduct, onBackToHome, onAddToCart }: AllProductsProps) {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Header & Back Navigation */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-6">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="w-4 h-9 bg-red-600 rounded-sm inline-block"></span>
                        <span className="text-red-600 font-semibold text-sm sm:text-base">Our Store</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
                        All Products Catalog ({mockProducts.length})
                    </h1>
                </div>

                <button 
                    onClick={onBackToHome}
                    className="bg-black text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors self-start md:self-auto cursor-pointer"
                >
                    Back to Home
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockProducts.map((product) => {
                    const primaryImage = product.images?.[0] || product.images[0];

                    return (
                        <div 
                            key={product.id}
                            className="group relative flex flex-col bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Top Badges & Action Buttons */}
                            <div className="relative w-full h-[220px] bg-gray-50 rounded-md flex items-center justify-center p-4 overflow-hidden mb-4">
                                {product.isNewArrival && (
                                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                                        NEW
                                    </span>
                                )}

                                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                                    <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                        <Heart className="w-4 h-4 text-gray-700" />
                                    </button>
                                    <button 
                                        onClick={() => onSelectProduct(product)}
                                        className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                                    >
                                        <Eye className="w-4 h-4 text-gray-700" />
                                    </button>
                                </div>

                                <img 
                                    src={primaryImage} 
                                    alt={product.name} 
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    onClick={() => onSelectProduct(product)}
                                />

                                {/* Quick Add Button Overlay */}
                                <button 
                                    onClick={() => onAddToCart(product)}
                                    className="absolute bottom-0 inset-x-0 bg-black text-white text-xs font-medium py-2.5 flex items-center justify-center space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    <span>Add To Cart</span>
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col flex-grow">
                                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                    {product.category}
                                </span>
                                <h3 
                                    onClick={() => onSelectProduct(product)}
                                    className="font-medium text-gray-900 text-base line-clamp-1 hover:text-red-600 transition-colors cursor-pointer"
                                >
                                    {product.name}
                                </h3>

                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-red-600 font-semibold text-base">${product.price}.00</span>
                                </div>

                                {/* Rating and Reviews */}
                                <div className="flex items-center space-x-2 mt-2">
                                    <div className="flex items-center text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} 
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-xs">({product.reviewsCount || 88})</span>
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