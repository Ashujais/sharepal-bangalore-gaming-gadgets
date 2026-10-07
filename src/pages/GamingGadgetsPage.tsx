import React from 'react';
import { Header } from '../components/Header/Header';
import { CategoryBar } from '../components/Header/CategoryBar';
import { HeroBanner } from '../components/Hero/HeroBanner';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import { SocialProof } from '../components/Sections/SocialProof';
import { FAQSection } from '../components/Sections/FAQSection';
import { SEOContent } from '../components/Sections/SEOContent';
import { Footer } from '../components/Footer/Footer';
import { FloatingControls } from '../components/FloatingElements/FloatingControls';
import { ProductDetailModal } from '../components/Modals/ProductDetailModal';
import { CartDrawer } from '../components/Modals/CartDrawer';
import { CityModal } from '../components/Modals/CityModal';
import { DatePickerModal } from '../components/Modals/DatePickerModal';
import { SearchModal } from '../components/Modals/SearchModal';
import { productsData } from '../data/products';

export const GamingGadgetsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 pt-[108px] lg:pt-[84px]">
        {/* Sticky Category Navigation */}
        <CategoryBar />

        {/* Hero Banner with Gaming Gradient */}
        <HeroBanner />

        {/* Main Product Listing with all 23 products */}
        <ProductGrid products={productsData} />

        {/* Social Proof & Impact Stats */}
        <SocialProof />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Expandable SEO Content */}
        <SEOContent />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Floating Date Selector and WhatsApp Button */}
      <FloatingControls />

      {/* Interactive Modals and Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CityModal />
      <DatePickerModal />
      <SearchModal />
    </div>
  );
};
