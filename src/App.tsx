import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PerspectiveGallery } from './components/PerspectiveGallery';
import { SaleBanners } from './components/SaleBanners';
import { BrandLogos } from './components/BrandLogos';
import { MarqueeTicker } from './components/MarqueeTicker';
import { WhatWeOffer } from './components/WhatWeOffer';
import { GiftFinder } from './components/GiftFinder';
import { ProductCatalog } from './components/ProductCatalog';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { WishlistModal } from './components/WishlistModal';
import { AuthModal } from './components/AuthModal';
import { Product } from './types';

export const AppContent: React.FC = () => {
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5]">
      {/* 1. Top dark green announcement bar matching Image 1 */}
      <TopBanner />

      {/* 2. Main Header with colorful logo & cart capsule */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero section with whimsical background & playful typography (Image 1) */}
        <HeroSection />

        {/* 4. 5 Skewed 3D Perspective Photo Cards & Section Kicker (Image 2) */}
        <PerspectiveGallery />

        {/* 5. 3 Promotional Cards: Green, Orange 48%, Blue 20% (Image 3) */}
        <SaleBanners />

        {/* 6. Partner / Category Emblems Strip (Image 3) */}
        <BrandLogos />

        {/* 7. Golden Yellow Infinite Scrolling Announcement Ribbon (Image 4) */}
        <MarqueeTicker />

        {/* 8. "What Can We Offer" with 01-02-03 offerings & collage with stickers (Image 4) */}
        <WhatWeOffer />

        {/* 9. Interactive 3-step Gift Finder Quiz */}
        <GiftFinder onQuickView={(prod) => setSelectedProductForQuickView(prod)} />

        {/* 10. Filterable Best Selling Products Grid */}
        <ProductCatalog onQuickView={(prod) => setSelectedProductForQuickView(prod)} />

        {/* 11. Customer Reviews & Testimonials */}
        <Testimonials />

        {/* 12. Gift Club 15% Off Newsletter Banner */}
        <Newsletter />
      </main>

      {/* 13. Full Footer with Store Details & Back-to-Top button */}
      <Footer />

      {/* Modals & Slide-out Drawers */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />
      
      <QuickViewModal
        product={selectedProductForQuickView}
        onClose={() => setSelectedProductForQuickView(null)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(prod) => setSelectedProductForQuickView(prod)}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onQuickView={(prod) => setSelectedProductForQuickView(prod)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
