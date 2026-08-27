import { useState } from 'react';

// Home Sub-components
import QuickSalesBar from './components/home/QuickSalesBar';
import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import Offers from './components/home/Offers';
import Categories from './components/home/Categories';
import Promotion from './components/home/Promotion';
import OurProductsSection from './components/home/OurProductsSection';
import NewArrivals from './components/home/NewArrivals';
import ServiceGuarantees from './components/home/ServiceGuarantees';
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
  const [selectedCategory, setSelectedCategory] = useState<string>('Phones');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Cart count state
  const [cartCount, setCartCount] = useState<number>(0);

  // Handler for adding/removing items
  const handleCartAction = (isAdding: boolean) => {
    if (isAdding) {
      setCartCount((prev) => prev + 1);
    } else {
      setCartCount((prev) => Math.max(0, prev - 1));
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
          <>
            <HeroSection />
            <Offers onCartAction={handleCartAction} />
            <Categories onSelectCategory={handleSelectCategory} />
            <Promotion />
            <OurProductsSection onCartAction={handleCartAction} />
            <NewArrivals />
            <ServiceGuarantees />
          </>
        )}

        {currentPage === 'category' && (
          <CategoryPage 
            category={selectedCategory}
            onSelectProduct={handleSelectProduct}
            onBackToHome={() => setCurrentPage('home')}
            onAddToCart={() => handleCartAction(true)}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetails 
            product={selectedProduct}
            onBackToHome={() => setCurrentPage('home')}
            onAddToCart={() => handleCartAction(true)}
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