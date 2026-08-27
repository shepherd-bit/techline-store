import React from 'react';
import QuickSalesBar from '../components/home/QuickSalesBar';
import HeroSection from '../components/home/HeroSection';
import Categories from '../components/home/Categories';
import NewArrivals from '../components/home/NewArrivals';
import Offers from '../components/home/Offers';
import OurProductsSection from '../components/home/OurProductsSection';
import Promotion from '../components/home/Promotion';

interface HomeProps {
    onSelectCategory: (categoryName: string) => void;
    onCartAction: (isAdding: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectCategory, onCartAction }) => {
    return (
        <main className="home-page">
            <QuickSalesBar />
            <HeroSection />
            <Categories onSelectCategory={onSelectCategory} />
            <NewArrivals />
            <Offers onCartAction={onCartAction} />
            <OurProductsSection onCartAction={onCartAction} />
            <Promotion />
        </main>
    );
};

export default Home;