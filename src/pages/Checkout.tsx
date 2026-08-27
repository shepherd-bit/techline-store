import { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

interface Product {
    id: string | number;
    name: string;
    price: number;
    image?: string;
    images?: string[];
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface CheckoutProps {
    cartItems: CartItem[];
    onBackToCart: () => void;
    onOrderSuccess?: () => void;
}

interface BillingFormData {
    firstName: string;
    companyName: string;
    streetAddress: string;
    apartment: string;
    townCity: string;
    phoneNumber: string;
    emailAddress: string;
    saveInfo: boolean;
}

const STORAGE_KEY = 'e_commerce_saved_billing_info';

export default function Checkout({ cartItems, onBackToCart, onOrderSuccess }: CheckoutProps) {
    const [formData, setFormData] = useState<BillingFormData>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Failed to parse saved billing info', e);
            }
        }
        return {
            firstName: '',
            companyName: '',
            streetAddress: '',
            apartment: '',
            townCity: '',
            phoneNumber: '',
            emailAddress: '',
            saveInfo: true,
        };
    });

    const [paymentMethod, setPaymentMethod] = useState<'bank' | 'cash'>('bank');
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    const shipping = 0; 
    const total = subtotal + shipping;

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate required billing fields first
        if (!formData.firstName || !formData.streetAddress || !formData.townCity || !formData.phoneNumber || !formData.emailAddress) {
            alert('Please fill in all required billing fields.');
            return;
        }

        if (formData.saveInfo) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }

        // Branch based on payment method
        if (paymentMethod === 'bank') {
            setIsPaymentModalOpen(true);
        } else {
            // Cash on delivery completes instantly
            finalizeOrder();
        }
    };

    const finalizeOrder = () => {
        setIsOrderPlaced(true);
        if (onOrderSuccess) {
            onOrderSuccess();
        }
    };

    if (isOrderPlaced) {
        return (
            <div className="w-full max-w-[1200px] mx-auto px-4 py-24 text-center font-sans">
                <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col items-center">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                    <h2 className="text-2xl font-bold text-black mb-2">Order Placed Successfully!</h2>
                    <p className="text-gray-600 text-sm mb-6">
                        Thank you for your purchase, {formData.firstName}. Your order has been received and is being processed.
                    </p>
                    <button
                        onClick={onBackToCart}
                        className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors w-full cursor-pointer"
                    >
                        Return to Shop
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-10">
                <button 
                    onClick={onBackToCart}
                    className="hover:text-black transition-colors flex items-center space-x-1 cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Account</span>
                </button>
                <span>/</span>
                <span>My Account</span>
                <span>/</span>
                <span>Product</span>
                <span>/</span>
                <span>View Cart</span>
                <span>/</span>
                <span className="text-black font-medium">CheckOut</span>
            </div>

            <h1 className="text-3xl font-bold text-black tracking-tight mb-10">
                Billing Details
            </h1>

            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Left Side: Billing Form Fields */}
                <div className="lg:col-span-6 space-y-6">
                    <div>
                        <label className="block text-sm text-gray-500 mb-2">First Name<span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="firstName"
                            required
                            pattern="[A-Za-zÀ-ÿ\s]+"
                            title="Please enter letters only (no numbers or symbols)."
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Company Name</label>
                        <input 
                            type="text" 
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Street Address<span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="streetAddress"
                            required
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Apartment, floor, etc. (optional)</label>
                        <input 
                            type="text" 
                            name="apartment"
                            value={formData.apartment}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Town/City<span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="townCity"
                            required
                            pattern="[A-Za-zÀ-ÿ\s]+"
                            title="Please enter letters only for the city name."
                            value={formData.townCity}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Phone Number<span className="text-red-500">*</span></label>
                        <input 
                            type="tel" 
                            name="phoneNumber"
                            required
                            pattern="[0-9+\-\s()]+"
                            title="Please enter a valid phone number format."
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Email Address<span className="text-red-500">*</span></label>
                        <input 
                            type="email" 
                            name="emailAddress"
                            required
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F5F5] border border-transparent focus:border-black rounded-md px-4 py-3 text-sm outline-none transition-all"
                        />
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                        <input 
                            type="checkbox" 
                            name="saveInfo"
                            id="saveInfo"
                            checked={formData.saveInfo}
                            onChange={handleInputChange}
                            className="w-5 h-5 accent-red-600 rounded cursor-pointer"
                        />
                        <label htmlFor="saveInfo" className="text-sm text-black select-none cursor-pointer">
                            Save this information for faster check-out next time
                        </label>
                    </div>
                </div>

                {/* Right Side: Order Summary & Payment */}
                <div className="lg:col-span-6 bg-white p-2">
                    {/* Cart Items List */}
                    <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                        {cartItems.length === 0 ? (
                            <p className="text-sm text-gray-500">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-[#F5F5F5] rounded p-1 flex items-center justify-center shrink-0">
                                            <img 
                                                src={item.product.image || (item.product.images && item.product.images[0])} 
                                                alt={item.product.name} 
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-black line-clamp-1">{item.product.name}</h4>
                                            <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-black">${item.product.price * item.quantity}</span>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Totals Breakdown */}
                    <div className="space-y-4 border-t border-gray-200 pt-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="font-medium text-black">${subtotal}</span>
                        </div>
                        <div className="border-t border-gray-200"></div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Shipping:</span>
                            <span className="font-medium text-black">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                        </div>
                        <div className="border-t border-gray-200"></div>
                        <div className="flex justify-between text-base font-semibold">
                            <span className="text-black">Total:</span>
                            <span className="text-black">${total}</span>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="paymentMethod" 
                                    checked={paymentMethod === 'bank'}
                                    onChange={() => setPaymentMethod('bank')}
                                    className="w-4 h-4 accent-black cursor-pointer"
                                />
                                <span className="text-sm font-medium text-black">Bank</span>
                            </label>

                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-5 bg-gray-100 rounded border border-gray-200" />
                                <div className="w-8 h-5 bg-gray-100 rounded border border-gray-200" />
                                <div className="w-8 h-5 bg-gray-100 rounded border border-gray-200" />
                                <div className="w-8 h-5 bg-gray-100 rounded border border-gray-200" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="paymentMethod" 
                                    checked={paymentMethod === 'cash'}
                                    onChange={() => setPaymentMethod('cash')}
                                    className="w-4 h-4 accent-black cursor-pointer"
                                />
                                <span className="text-sm font-medium text-black">Cash on delivery</span>
                            </label>
                        </div>
                    </div>

                    {/* Place Order Button */}
                    <button
                        type="submit"
                        disabled={cartItems.length === 0}
                        className={`w-full mt-8 py-4 rounded-md text-white font-medium text-sm transition-colors ${
                            cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 cursor-pointer'
                        }`}
                    >
                        Place Order
                    </button>
                </div>

            </form>

            {/* Payment Modal Component */}
            <PaymentModal 
                totalAmount={total}
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                onSuccess={() => {
                    setIsPaymentModalOpen(false);
                    finalizeOrder();
                }}
            />
        </div>
    );
}