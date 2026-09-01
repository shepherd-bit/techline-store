import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockProducts, type Product } from './data/mockProducts';

// Home Sub-components & Page
import QuickSalesBar from './components/home/QuickSalesBar';
import Navbar from './components/home/Navbar';
import Home from './pages/Home';
import Footer from './components/home/Footer';

// Pages & Modals
import AllProducts from './pages/AllProducts';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export interface CartItem {
    product: Product;
    quantity: number;
}

export default function App() {
    const [currentPage, setCurrentPage] = useState<string>(() => {
        return window.location.hash.replace('#', '') || 'home';
    });

    const [selectedCategory, setSelectedCategory] = useState<string>(() => {
        return sessionStorage.getItem('tecline_selected_category') || 'Smartphones';
    });

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => {
        const saved = sessionStorage.getItem('tecline_selected_product');
        return saved ? JSON.parse(saved) : null;
    });

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = sessionStorage.getItem('tecline_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('tecline_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const handlePopState = () => {
            const hash = window.location.hash.replace('#', '');
            setCurrentPage(hash || 'home');
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const changePage = (page: string) => {
        setCurrentPage(page);
        window.location.hash = page;
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [currentPage]);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleCartAction = (product: Product, isAdding: boolean, quantity: number = 1) => {
        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
            if (isAdding) {
                if (existingIndex > -1) {
                    const updated = [...prevItems];
                    updated[existingIndex] = {
                        ...updated[existingIndex],
                        quantity: updated[existingIndex].quantity + quantity,
                    };
                    return updated;
                }
                return [...prevItems, { product, quantity }];
            } else {
                if (existingIndex > -1) {
                    return prevItems.filter((item) => item.product.id !== product.id);
                }
                return prevItems;
            }
        });
    };

    const handleUpdateQuantity = (productId: string | number, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
        } else {
            setCartItems((prev) =>
                prev.map((item) =>
                    item.product.id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const handleRemoveItem = (productId: string | number) => {
        setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    };

    const handleSelectCategory = (categoryName: string) => {
        setSelectedCategory(categoryName);
        sessionStorage.setItem('tecline_selected_category', categoryName);
        changePage('category');
    };

    const handleSelectProduct = (productOrId: Product | string | number) => {
        let product: Product | undefined = typeof productOrId === 'object' ? productOrId : undefined;
        if (typeof productOrId === 'string' || typeof productOrId === 'number') {
            product = mockProducts.find((p) => p.id === productOrId);
        }
        if (product) {
            setSelectedProduct(product);
            sessionStorage.setItem('tecline_selected_product', JSON.stringify(product));
            changePage('product-detail');
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
            <QuickSalesBar />

            <Navbar 
                cartCount={cartCount} 
                onOpenCart={() => changePage('cart')} 
                onSelectProduct={handleSelectProduct}
            />

            <main className="flex-grow overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {currentPage === 'home' && (
                            <Home 
                                onSelectCategory={handleSelectCategory}
                                onCartAction={(product, isAdding, qty) => handleCartAction(product, isAdding, qty || 1)}
                                onViewAllProducts={() => changePage('all-products')}
                                onSelectProduct={handleSelectProduct}
                            />
                        )}

                        {currentPage === 'category' && (
                            <CategoryPage 
                                category={selectedCategory}
                                onSelectProduct={handleSelectProduct}
                                onBackToHome={() => changePage('home')}
                                onAddToCart={(product, isAdding, qty) => handleCartAction(product, isAdding ?? true, qty || 1)}
                            />
                        )}

                        {currentPage === 'product-detail' && (
                            <ProductDetails 
                                product={selectedProduct}
                                onBackToHome={() => changePage('home')}
                                onAddToCart={(product, isAdding, quantity) => handleCartAction(product, isAdding, quantity)}
                            />
                        )}

                        {currentPage === 'all-products' && (
                            <AllProducts 
                                onSelectProduct={handleSelectProduct}
                                onBackToHome={() => changePage('home')}
                                onAddToCart={(product, isAdding, qty) => handleCartAction(product, isAdding ?? true, qty || 1)}
                            />
                        )}

                        {currentPage === 'cart' && (
                            <Cart 
                                cartItems={cartItems}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemoveItem={handleRemoveItem}
                                onReturnToShop={() => changePage('home')}
                                onProceedToCheckout={() => changePage('checkout')}
                            />
                        )}

                        {currentPage === 'checkout' && (
                            <Checkout 
                                cartItems={cartItems}
                                onBackToCart={() => changePage('cart')}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}