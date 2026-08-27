import React, { useState, useRef, useEffect } from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { mockProducts, type Product } from '../../data/mockProducts';

interface NavbarProps {
    cartCount?: number;
    onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onOpenCart }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            setIsDropdownOpen(false);
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = mockProducts.filter(
                (product) =>
                    product.name.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query)
            );
            setSearchResults(filtered);
            setIsDropdownOpen(true);
        }
    }, [searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="w-full bg-white py-4 px-6 sm:px-12 sticky top-0 z-50 border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                
               {/* 1. Left: Logo Image Slot */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <img 
                            src="/TECLINE-ONE.png" 
                            alt="Logo" 
                            className="h-6 w-auto object-contain cursor-pointer"
                        />
                    </a>
                </div>

                {/* 2. Center: Highlighted Home Link with Hover Underline */}
                <div className="hidden md:flex items-center space-x-8">
                    <a 
                        href="/" 
                        className="text-black font-semibold bg-gray-100 px-3 py-1.5 rounded-md relative group transition-all"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* 3. Right Section: Extended Search Bar & Icons */}
                <div className="flex items-center space-x-6">
                    
                    {/* Extended Functional Search Bar */}
                    <div className="relative" ref={searchRef}>
                        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-64 sm:w-80 md:w-96 focus-within:ring-1 focus-within:ring-black">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent text-xs sm:text-sm focus:outline-none w-full text-black placeholder-gray-500"
                            />
                            <Search className="w-4 h-4 text-gray-600 ml-2 cursor-pointer flex-shrink-0" />
                        </div>

                        {/* Search Results Dropdown */}
                        {isDropdownOpen && (
                            <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto z-50">
                                {searchResults.length > 0 ? (
                                    searchResults.map((product) => (
                                        <a
                                            key={product.id}
                                            href={`/product/${product.id}`}
                                            className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 border-b border-gray-100 last:border-none transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <div>
                                                <p className="text-sm font-medium text-black">{product.name}</p>
                                                <span className="text-xs text-gray-500">{product.category}</span>
                                            </div>
                                            <span className="text-xs font-semibold text-black">${product.price}</span>
                                        </a>
                                    ))
                                ) : (
                                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                        No products found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Icons: Wishlist & Cart */}
                    <div className="flex items-center space-x-4">
                        <a href="/wishlist" className="relative text-black hover:text-gray-600 transition-colors">
                            <Heart className="w-6 h-6" />
                        </a>
                        <button 
                            onClick={onOpenCart} 
                            className="relative text-black hover:text-gray-600 transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;