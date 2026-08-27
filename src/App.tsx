import { useState } from 'react';

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
    product: any;
    quantity: number;
}

export default function App() {
    // Navigation state: 'home', 'all-products', 'category', 'product-detail', 'cart', 'checkout'
    const [currentPage, setCurrentPage] = useState<string>('home');
    const [selectedCategory, setSelectedCategory] = useState<string>('Smartphones');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    // Cart items state: stores actual products and their quantities
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Compute total badge count dynamically from cart items
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Advanced cart action handler (handles adding, updating quantities, or removing by toggle/uncheck)
    const handleCartAction = (product: any, isAdding: boolean, quantity: number = 1) => {
        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);

            if (isAdding) {
                if (existingIndex > -1) {
                    // If already in cart, update quantity
                    const updated = [...prevItems];
                    updated[existingIndex] = {
                        ...updated[existingIndex],
                        quantity: updated[existingIndex].quantity + quantity,
                    };
                    return updated;
                } else {
                    // Add new item
                    return [...prevItems, { product, quantity }];
                }
            } else {
                // Removing or unchecking entirely
                if (existingIndex > -1) {
                    return prevItems.filter((item) => item.product.id !== product.id);
                }
                return prevItems;
            }
        });
    };

    // Direct handlers for Cart page UI (quantity updates / item removals)
    const handleUpdateQuantity = (productId: string, newQuantity: number) => {
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

    const handleRemoveItem = (productId: string) => {
        setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    };

    // Category selection handler
    const handleSelectCategory = (categoryName: string) => {
        setSelectedCategory(categoryName);
        setCurrentPage('category');
    };

    // Product selection handler
    const handleSelectProduct = (product: any) => {
        setSelectedProduct(product);
        setCurrentPage('product-detail');
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
            {/* 1. Quick Sales Bar */}
            <QuickSalesBar />

            {/* 2. Navigation bar with dynamic cart count and cart page navigation trigger */}
            <Navbar 
                cartCount={cartCount} 
                onOpenCart={() => setCurrentPage('cart')} 
            />

            {/* Main Content Area Routing */}
            <main className="flex-grow">
                {currentPage === 'home' && (
                    <Home 
                        onSelectCategory={handleSelectCategory}
                        onCartAction={(product, isAdding, qty) => handleCartAction(product, isAdding, qty || 1)}
                        onViewAllProducts={() => setCurrentPage('all-products')}
                    />
                )}

                {currentPage === 'category' && (
                    <CategoryPage 
                        category={selectedCategory}
                        onSelectProduct={handleSelectProduct}
                        onBackToHome={() => setCurrentPage('home')}
                        onAddToCart={(product, isAdding, qty) => handleCartAction(product, isAdding ?? true, qty || 1)}
                    />
                )}

                {currentPage === 'product-detail' && (
                    <ProductDetails 
                        product={selectedProduct}
                        onBackToHome={() => setCurrentPage('home')}
                        onAddToCart={(product, isAdding, quantity) => handleCartAction(product, isAdding, quantity)}
                    />
                )}

                {currentPage === 'all-products' && (
                    <AllProducts 
                        onSelectProduct={handleSelectProduct}
                        onBackToHome={() => setCurrentPage('home')}
                        onAddToCart={(product, isAdding, qty) => handleCartAction(product, isAdding ?? true, qty || 1)}
                    />
                )}

                {currentPage === 'cart' && (
                    <Cart 
                        cartItems={cartItems}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                        onReturnToShop={() => setCurrentPage('home')}
                        onProceedToCheckout={() => setCurrentPage('checkout')}
                    />
                )}

                {currentPage === 'checkout' && (
                    <Checkout 
                        cartItems={cartItems}
                        onBackToCart={() => setCurrentPage('cart')}
                    />
                )}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}