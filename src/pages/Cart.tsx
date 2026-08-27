import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { CartItem } from '../App';

interface CartProps {
    cartItems: CartItem[];
    onUpdateQuantity: (productId: string, newQuantity: number) => void;
    onRemoveItem: (productId: string) => void;
    onReturnToShop: () => void;
    onProceedToCheckout: () => void;
}


export default function Cart({
    cartItems,
    onUpdateQuantity,
    onRemoveItem,
    onReturnToShop,
    onProceedToCheckout,
}: CartProps) {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponApplied, setCouponApplied] = useState(false);

    const handleApplyCoupon = () => {
        if (couponCode.trim().toUpperCase() === 'DISCOUNT10') {
            setDiscount(0.1); // 10% discount
            setCouponApplied(true);
        } else {
            alert('Invalid coupon code. Try "DISCOUNT10"');
        }
    };

    const subtotal = cartItems.reduce((acc, item) => {
        const price = Number(item.product.price) || 0;
        return acc + price * item.quantity;
    }, 0);

    const discountAmount = subtotal * discount;
    const finalTotal = subtotal - discountAmount;

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-10">
                <span className="cursor-pointer hover:underline" onClick={onReturnToShop}>
                    Home
                </span>{' '}
                / <span className="text-black font-medium">Cart</span>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center py-20 flex flex-col items-center justify-center space-y-4">
                    <p className="text-xl text-gray-600 font-medium">Your Cart is currently empty.</p>
                    <button
                        onClick={onReturnToShop}
                        className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Return To Shop
                    </button>
                </div>
            ) : (
                <>
                    {/* Cart Table Header */}
                    <div className="hidden md:grid grid-cols-4 bg-white shadow-sm rounded-md p-6 font-medium text-black mb-6 border border-gray-100">
                        <div>Product</div>
                        <div className="text-center">Price</div>
                        <div className="text-center">Quantity</div>
                        <div className="text-right">Subtotal</div>
                    </div>

                    {/* Cart Items List */}
                    <div className="space-y-4 mb-8">
                        {cartItems.map((item) => {
                            const product = item.product;
                            const productImage = Array.isArray(product.images)
                                ? product.images[0]
                                : product.image || '';
                            const price = Number(product.price) || 0;
                            const itemSubtotal = price * item.quantity;

                            return (
                                <div
                                    key={product.id}
                                    className="relative grid grid-cols-1 md:grid-cols-4 items-center bg-white shadow-sm rounded-md p-6 border border-gray-100 gap-4"
                                >
                                    {/* Product Column with Removal Cross/Button */}
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => onRemoveItem(product.id)}
                                            className="absolute top-3 left-3 md:static w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                                            title="Remove Item"
                                        >
                                            <span className="text-xs font-bold">×</span>
                                        </button>
                                        <img
                                            src={productImage}
                                            alt={product.name}
                                            className="w-16 h-16 object-contain bg-gray-50 rounded p-1"
                                        />
                                        <span className="font-medium text-black text-base line-clamp-1">
                                            {product.name}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="text-left md:text-center font-medium text-black">
                                        <span className="md:hidden text-gray-500 text-xs mr-2">Price:</span>
                                        ${price.toLocaleString()}
                                    </div>

                                    {/* Quantity Stepper */}
                                    <div className="flex items-center justify-start md:justify-center">
                                        <div className="flex items-center border border-gray-300 rounded px-3 py-1.5 space-x-3 bg-white">
                                            <span className="font-medium text-black w-6 text-center">
                                                {String(item.quantity).padStart(2, '0')}
                                            </span>
                                            <div className="flex flex-col space-y-0.5">
                                                <button
                                                    onClick={() => onUpdateQuantity(product.id, item.quantity + 1)}
                                                    className="cursor-pointer hover:text-green-700"
                                                >
                                                    <ChevronUp className="w-3.5 h-3.5 text-gray-600" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        onUpdateQuantity(
                                                            product.id,
                                                            Math.max(1, item.quantity - 1)
                                                        )
                                                    }
                                                    className="cursor-pointer hover:text-green-700"
                                                >
                                                    <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtotal */}
                                    <div className="text-right font-bold text-black">
                                        <span className="md:hidden text-gray-500 text-xs mr-2 font-normal">Subtotal:</span>
                                        ${itemSubtotal.toLocaleString()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
                        <button
                            onClick={onReturnToShop}
                            className="w-full sm:w-auto px-8 py-3 border border-gray-400 rounded-md font-medium text-black hover:border-black transition-colors cursor-pointer"
                        >
                            Return To Shop
                        </button>
                        <button
                            onClick={() => alert('Cart is already up to date!')}
                            className="w-full sm:w-auto px-8 py-3 border border-gray-400 rounded-md font-medium text-black hover:border-black transition-colors cursor-pointer"
                        >
                            Update Cart
                        </button>
                    </div>

                    {/* Bottom Section: Coupon & Cart Totals */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Coupon Box */}
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="border border-gray-400 rounded-md px-4 py-3 outline-none focus:border-black flex-grow text-sm"
                            />
                            <button
                                onClick={handleApplyCoupon}
                                className="bg-red-600 text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                            >
                                Apply Coupon
                            </button>
                        </div>

                        {/* Cart Total Box */}
                        <div className="border border-black rounded-md p-6 bg-white space-y-4">
                            <h3 className="text-lg font-bold text-black mb-2">Cart Total</h3>
                            
                            <div className="flex justify-between py-3 border-b border-gray-200 text-sm">
                                <span className="text-gray-600">Subtotal:</span>
                                <span className="font-medium text-black">${subtotal.toLocaleString()}</span>
                            </div>

                            {couponApplied && (
                                <div className="flex justify-between py-3 border-b border-gray-200 text-sm text-green-700 font-medium">
                                    <span>Discount (10%):</span>
                                    <span>-${discountAmount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="flex justify-between py-3 border-b border-gray-200 text-sm">
                                <span className="text-gray-600">Shipping:</span>
                                <span className="font-medium text-black">Free</span>
                            </div>

                            <div className="flex justify-between py-3 text-base font-bold text-black">
                                <span>Total:</span>
                                <span>${finalTotal.toLocaleString()}</span>
                            </div>

                            <div className="pt-2 flex justify-center">
                                <button
                                    onClick={onProceedToCheckout}
                                    className="w-full bg-red-600 text-white py-3.5 rounded-md font-medium text-sm hover:bg-red-700 transition-colors cursor-pointer text-center"
                                >
                                    Procees to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}