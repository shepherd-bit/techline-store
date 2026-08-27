import { Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white font-sans pt-16 pb-8 border-t border-gray-900">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-gray-800">
                
                {/* Column 1: Logo / Subscribe */}
                <div className="space-y-4">
                    {/* Logo Image Placeholder */}
                    <div className="flex items-center">
                        <img 
                            src="./TECLINE-white.png" 
                            alt="TechLine Logo" 
                            className="h-4 w-auto object-contain"
                        />
                    </div>
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

                {/* Column 4: Download App (QR Code & Store Badges) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Download App</h3>
                    <p className="text-gray-400 text-xs">Save $3 with App New User Only</p>
                    
                    <div className="flex items-center space-x-3">
                        {/* Visual QR Code Box */}
                        <div className="bg-white p-2 rounded-lg w-24 h-24 flex flex-col items-center justify-center shadow-md">
                            <div className="w-full h-full border-2 border-dashed border-black/40 rounded flex items-center justify-center">
                                <span className="text-[10px] text-black font-extrabold tracking-tighter">QR CODE</span>
                            </div>
                        </div>

                        {/* Store Buttons with SVGs */}
                        <div className="space-y-2 flex flex-col justify-center">
                            {/* Google Play Button */}
                            <div className="bg-black border border-gray-700 hover:border-gray-500 rounded px-3 py-1.5 flex items-center space-x-2.5 cursor-pointer transition-all">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.492 1.492 0 0 1-.61-1.21V3.024c0-.493.226-.95.61-1.21zM15.208 13.416l2.118 2.118-11.455 6.618 9.337-8.736zm0-2.832L5.871 1.848l11.455 6.618-2.118 2.118zm1.768 1.768l2.929 1.691c.731.422.731 1.11 0 1.532l-2.929 1.691-2.118-2.118 2.118-2.796z"/>
                                </svg>
                                <div className="leading-tight">
                                    <p className="text-[9px] text-gray-300">Get it on</p>
                                    <p className="text-xs font-semibold text-white">Google Play</p>
                                </div>
                            </div>

                            {/* App Store Button */}
                            <div className="bg-black border border-gray-700 hover:border-gray-500 rounded px-3 py-1.5 flex items-center space-x-2.5 cursor-pointer transition-all">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.31c.56-.69.94-1.65.84-2.61-.84.03-1.86.56-2.45 1.25-.52.6-.98 1.58-.85 2.54.94.07 1.9-.49 2.46-1.18z"/>
                                </svg>
                                <div className="leading-tight">
                                    <p className="text-[9px] text-gray-300">Download on the</p>
                                    <p className="text-xs font-semibold text-white">App Store</p>
                                </div>
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