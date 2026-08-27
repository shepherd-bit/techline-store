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
import PaymentModal from './components/PaymentModal';

export default function App() {
  // Navigation state: 'home', 'all-products', 'category', 'product-detail', 'cart', 'checkout'
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Smartphones');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Cart count state
  const [cartCount, setCartCount] = useState<number>(0);

  // Handler for adding/removing items (supports quantity increments)
  const handleCartAction = (isAdding: boolean, quantity: number = 1) => {
    if (isAdding) {
      setCartCount((prev) => prev + quantity);
    } else {
      setCartCount((prev) => Math.max(0, prev - quantity));
    }
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

      {/* 2. Navigation bar with dynamic cart count */}
      <Navbar cartCount={cartCount} />

      {/* Main Content Area Routing */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home 
            onSelectCategory={handleSelectCategory}
            onCartAction={(isAdding) => handleCartAction(isAdding, 1)}
          />
        )}

        {currentPage === 'category' && (
          <CategoryPage 
            category={selectedCategory}
            onSelectProduct={handleSelectProduct}
            onBackToHome={() => setCurrentPage('home')}
            onAddToCart={(product) => handleCartAction(true, 1)}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetails 
            product={selectedProduct}
            onBackToHome={() => setCurrentPage('home')}
            onAddToCart={(_product, quantity) => handleCartAction(true, quantity)}
          />
        )}

        {currentPage === 'all-products' && (
          <AllProducts />
        )}

        {currentPage === 'cart' && (
          <Cart />
        )}

        {currentPage === 'checkout' && (
          <Checkout />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}