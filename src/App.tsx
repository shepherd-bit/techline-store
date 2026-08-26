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

// Pages & Modals (for future routing or state switching)
import AllProducts from './pages/AllProducts';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentModal from './components/PaymentModal';

export default function App() {
  // Simple state to simulate page switching later via links
  const [currentPage, setCurrentPage] = useState<'home' | 'all-products'>('home');

  // Cart count state
  const [cartCount, setCartCount] = useState<number>(0);

  // Updated handler: now accepts the boolean 'isAdding' parameter
  const handleCartAction = (isAdding: boolean) => {
    if (isAdding) {
        // Increment count if the item was added
        setCartCount((prev) => prev + 1);
    } else {
        // Decrement count if the item was removed
        setCartCount((prev) => Math.max(0, prev - 1)); // Prevent negative count
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* 1. Quick Sales Bar */}
      <QuickSalesBar />

      {/* 2. Navigation bar with dynamic cart count */}
      <Navbar cartCount={cartCount} />

      {/* Main Content Area */}
      {currentPage === 'home' ? (
        <main className="flex-grow">
          <HeroSection />
          {/* Pass the updated handler to Offers */}
          <Offers onCartAction={handleCartAction} />
          <Categories />
          <Promotion />
          <OurProductsSection />
          <NewArrivals />
          <ServiceGuarantees />
        </main>
      ) : (
        <AllProducts />
      )}

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}