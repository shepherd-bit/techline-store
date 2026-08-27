import React from 'react';

import HeroSection from '../components/home/HeroSection';
import Offers from '../components/home/Offers';
import Categories from '../components/home/Categories';
import Promotion from '../components/home/Promotion';
import OurProductsSection from '../components/home/OurProductsSection';
import NewArrivals from '../components/home/NewArrivals';
import ServiceGuarantees from '../components/home/ServiceGuarantees';

interface HomeProps {
    onSelectCategory: (categoryName: string) => void;
    onCartAction: (product: any, isAdding: boolean, quantity?: number) => void;
    onViewAllProducts: () => void;
    onSelectProduct: (product: any) => void;
}

export const Home: React.FC<HomeProps> = ({ 
    onSelectCategory, 
    onCartAction, 
    onViewAllProducts, 
    onSelectProduct 
}) => {
    return (
        <main className="home-page">
            <HeroSection />
            <Offers 
                onCartAction={onCartAction} 
                onSelectProduct={onSelectProduct} 
            />
            <Categories onSelectCategory={onSelectCategory} />
            <Promotion />
            <OurProductsSection 
                onCartAction={onCartAction} 
                onViewAllProducts={onViewAllProducts}
                onSelectProduct={onSelectProduct} 
            />
            <NewArrivals />
            <ServiceGuarantees />
        </main>
    );
};

export default Home;