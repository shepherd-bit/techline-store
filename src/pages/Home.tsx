import React from 'react';
import QuickSalesBar from '../components/home/QuickSalesBar';
import HeroSection from '../components/home/HeroSection';
import Categories from '../components/home/Categories';
import NewArrivals from '../components/home/NewArrivals';
import Offers from '../components/home/Offers';
import OurProductsSection from '../components/home/OurProductsSection';
import Promotion from '../components/home/Promotion';

export const Home: React.FC = () => {
    return (
        <main className="home-page">
            <QuickSalesBar />
            <HeroSection />
            <Categories />
            <NewArrivals />
            <Offers />
            <OurProductsSection />
            <Promotion />
        </main>
    );
};

export default Home;