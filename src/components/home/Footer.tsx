import { Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white font-sans pt-16 pb-8 border-t border-gray-900">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-gray-800">
                
                {/* Column 1: Exclusive / Subscribe */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-wider">TechLine</h2>
                    <h3 className="text-lg font-medium">Subscribe</h3>
                    <p className="text-gray-400 text-sm">Get 10% off your first order</p>
                    <div className="relative flex items-center max-w-[240px]">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="bg-transparent border border-gray-600 rounded-md py-2.5 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white w-full pr-10"
                        />
                        <button className="absolute right-3 text-gray-400 hover:text-white transition-colors">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Column 2: Support (Massachusetts Address) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Support</h3>
                    <div className="text-gray-400 text-sm space-y-2 leading-relaxed">
                        <p>1200 Boylston Street,<br />Boston, MA 02215,<br />United States</p>
                        <p className="pt-1">techline.store@gmail.com</p>
                        <p>+1 (800) 555-0199</p>
                    </div>
                </div>

                {/* Column 3: Quick Link */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Quick Link</h3>
                    <ul className="text-gray-400 text-sm space-y-3">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Column 4: Download App (No Social Media Icons) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Download App</h3>
                    <p className="text-gray-400 text-xs">Save $3 with App New User Only</p>
                    <div className="flex items-center space-x-3">
                        <div className="bg-white p-1 rounded w-24 h-24 flex items-center justify-center text-black text-xs font-bold text-center border border-gray-700">
                            [QR CODE]
                        </div>
                        <div className="space-y-2 flex flex-col justify-center">
                            <div className="bg-black border border-gray-700 rounded px-3 py-1.5 flex items-center space-x-2 cursor-pointer hover:border-gray-500 transition-colors">
                                <span className="text-[10px] text-gray-300 leading-tight">Get it on <br /><strong className="text-xs text-white">Google Play</strong></span>
                            </div>
                            <div className="bg-black border border-gray-700 rounded px-3 py-1.5 flex items-center space-x-2 cursor-pointer hover:border-gray-500 transition-colors">
                                <span className="text-[10px] text-gray-300 leading-tight">Download on the <br /><strong className="text-xs text-white">App Store</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright Bottom Bar */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 text-center text-gray-600 text-xs">
                © Copyright 2026. All rights reserved.
            </div>
        </footer>
    );
}