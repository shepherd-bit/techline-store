import { useState } from 'react';
import { X, Lock, CheckCircle2, CreditCard } from 'lucide-react';

interface PaymentModalProps {
    totalAmount: number;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function PaymentModal({ totalAmount, isOpen, onClose, onSuccess }: PaymentModalProps) {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmitPayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate secure bank payment processing delay
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 1500);
    };

    const handleFinish = () => {
        setIsSuccess(false);
        onSuccess();
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 font-sans animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative border border-gray-100">
                
                {/* Close Button */}
                {!isProcessing && !isSuccess && (
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}

                {/* Success View */}
                {isSuccess ? (
                    <div className="p-8 text-center flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-black">Payment Successful!</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Your payment has been successfully processed. Your order is on the way and will be delivered to you shortly!
                        </p>
                        <button
                            onClick={handleFinish}
                            className="w-full mt-4 bg-black text-white py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                            View Order Status / Return
                        </button>
                    </div>
                ) : (
                    /* Payment Form View */
                    <div className="p-8">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-black">Secure Bank Checkout</h3>
                                <p className="text-xs text-gray-500">Total amount to pay: <span className="font-semibold text-black">${totalAmount}</span></p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmitPayment} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Cardholder Name</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="e.g., John Doe"
                                    pattern="[A-Za-zÀ-ÿ\s]+"
                                    title="Please enter letters only."
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Card Number</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="4000 1234 5678 9010"
                                    maxLength={19}
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-all font-mono"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Expires (MM/YY)</label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="MM/YY"
                                        maxLength={5}
                                        value={expiry}
                                        onChange={(e) => setExpiry(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-all font-mono text-center"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">CVV / CVC</label>
                                    <input 
                                        type="password" 
                                        required
                                        placeholder="123"
                                        maxLength={4}
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded-xl px-4 py-3 text-sm outline-none transition-all font-mono text-center"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-red-600/20 cursor-pointer disabled:bg-gray-400"
                                >
                                    {isProcessing ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Processing Payment...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <Lock className="w-4 h-4" />
                                            <span>Pay ${totalAmount} Now</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="mt-4 flex items-center justify-center space-x-1 text-xs text-gray-400">
                            <Lock className="w-3 h-3" />
                            <span>Encrypted & Secure Bank Gateway Mock</span>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}