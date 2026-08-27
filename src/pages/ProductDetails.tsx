import { useState } from 'react';
import { Star, Heart, Truck, RefreshCw, Minus, Plus, ArrowLeft } from 'lucide-react';

interface ProductDetailsProps {
    product: any;
    onBackToHome: () => void;
    onAddToCart: (product: any, quantity: number) => void;
}

export default function ProductDetails({ product, onBackToHome, onAddToCart }: ProductDetailsProps) {
    // Fallback if no product is selected yet
    if (!product) {
        return (
            <div className="w-full max-w-[1400px] mx-auto px-4 py-20 text-center">
                <p className="text-gray-500 mb-4">No product selected.</p>
                <button 
                    onClick={onBackToHome}
                    className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    // State for main focused image, quantity, selected color, and size
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '#white');
    const [selectedSize, setSelectedSize] = useState<string>('M');

    const images = product.images || [product.image];
    const currentMainImage = images[selectedImageIndex] || images[0];

    const handleQuantityChange = (increment: boolean) => {
        if (increment) {
            setQuantity((prev) => prev + 1);
        } else {
            setQuantity((prev) => Math.max(1, prev - 1));
        }
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Breadcrumb / Back Navigation */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-10">
                <button 
                    onClick={onBackToHome}
                    className="hover:text-black transition-colors flex items-center space-x-1 cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Account</span>
                </button>
                <span>/</span>
                <span className="hover:text-black cursor-pointer">{product.category}</span>
                <span>/</span>
                <span className="text-black font-medium">{product.name}</span>
            </div>

            {/* Main Product Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Side: Image Gallery Thumbnails & Main Focus Image */}
                <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
                    {/* Vertical Thumbnails */}
                    <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible">
                        {images.map((imgUrl: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImageIndex(idx)}
                                className={`w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-lg p-2 border-2 transition-all flex items-center justify-center cursor-pointer shrink-0 ${
                                    selectedImageIndex === idx ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                                }`}
                            >
                                <img src={imgUrl} alt={`${product.name} thumbnail ${idx}`} className="h-full w-full object-contain" />
                            </button>
                        ))}
                    </div>

                    {/* Main Focused Image Preview */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-8 flex items-center justify-center h-[400px] sm:h-[500px] border border-gray-100 relative">
                        <img 
                            src={currentMainImage} 
                            alt={product.name} 
                            className="max-h-full max-w-full object-contain transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Right Side: Product Details & Purchase Actions */}
                <div className="lg:col-span-5 flex flex-col">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                        {product.name}
                    </h1>

                    {/* Rating & Stock Status */}
                    <div className="flex items-center space-x-4 mt-3">
                        <div className="flex items-center text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.floor(product.rating || 5) ? 'fill-current' : 'text-gray-300'}`} 
                                />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">
                            ({product.reviewsCount || 150} Reviews)
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className={`text-sm font-medium ${product.inStock !== false ? 'text-emerald-500' : 'text-red-500'}`}>
                            {product.inStock !== false ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl sm:text-3xl font-semibold text-black mt-4">
                        ${product.price}.00
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed border-b border-gray-200 pb-6">
                        {product.description || 'High quality product with premium finish and durable design built for everyday use.'}
                    </p>

                    {/* Colors Selection */}
                    {product.colors && product.colors.length > 0 && (
                        <div className="flex items-center space-x-4 mt-6">
                            <span className="text-sm font-medium text-gray-700">Colours:</span>
                            <div className="flex items-center space-x-2">
                                {product.colors.map((colorHex: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedColor(colorHex)}
                                        style={{ backgroundColor: colorHex === '#white' ? '#ffffff' : colorHex }}
                                        className={`w-5 h-5 rounded-full border border-gray-300 transition-transform cursor-pointer ${
                                            selectedColor === colorHex ? 'ring-2 ring-black scale-110' : ''
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Size Selection */}
                    <div className="flex items-center space-x-4 mt-6">
                        <span className="text-sm font-medium text-gray-700">Size:</span>
                        <div className="flex items-center space-x-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-9 h-9 rounded-md border text-sm font-medium transition-colors cursor-pointer flex items-center justify-center ${
                                        selectedSize === size 
                                            ? 'bg-red-600 text-white border-red-600' 
                                            : 'border-gray-300 text-gray-700 hover:border-black'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Buy / Cart Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden self-start">
                            <button 
                                onClick={() => handleQuantityChange(false)}
                                className="px-3 py-3 hover:bg-gray-100 transition-colors cursor-pointer text-gray-600"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-6 font-semibold text-base">{quantity}</span>
                            <button 
                                onClick={() => handleQuantityChange(true)}
                                className="px-3 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Buy Now / Add to Cart Button */}
                        <button 
                            onClick={() => onAddToCart(product, quantity)}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors cursor-pointer shadow-sm text-center"
                        >
                            Add To Cart
                        </button>

                        {/* Wishlist Button */}
                        <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center">
                            <Heart className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    {/* Delivery & Return Guarantees Box */}
                    <div className="mt-10 border border-gray-200 rounded-md divide-y divide-gray-200">
                        <div className="flex items-start space-x-4 p-4">
                            <Truck className="w-6 h-6 text-black mt-1" />
                            <div>
                                <h4 className="font-medium text-sm text-black">Free Delivery</h4>
                                <p className="text-xs text-gray-500 underline cursor-pointer mt-0.5">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4">
                            <RefreshCw className="w-6 h-6 text-black mt-1" />
                            <div>
                                <h4 className="font-medium text-sm text-black">Return Delivery</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}