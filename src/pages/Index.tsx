import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackVisitor } from '../utils/visitorTracking';
import SalesPopup from '../components/SalesPopup';
import WhatsAppPopup from '../components/WhatsAppPopup';

const TopNavbar = React.lazy(() => import('../components/TopNavbar'));
const BrandNavbar = React.lazy(() => import('../components/BrandNavbar'));
const MainNavbar = React.lazy(() => import('../components/MainNavbar'));
const Hero = React.lazy(() => import('../components/Hero'));
const Products = React.lazy(() => import('../components/Products'));
const Men = React.lazy(() => import('../components/Men'));
const BrandIntro = React.lazy(() => import('../components/BrandIntro'));
const NewCollection = React.lazy(() => import('../components/NewCollection'));
const BrandLocation = React.lazy(() => import('../components/BrandLocation'));
const Footer = React.lazy(() => import('../components/Footer'));
const LoadingScreen = React.lazy(() => import('../components/LoadingScreen'));
const GiftCollection = React.lazy(() => import('../components/GiftCollection'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    trackVisitor('Accueil');
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
              staggerChildren: 0.1
            }}
          >
            <Suspense fallback={<div></div>}>
              <TopNavbar />
              <BrandNavbar />
              <div className="hidden lg:block">
                <MainNavbar />
              </div>
              
              <Hero />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1.8 }}
              >
                <Products />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 2 }}
              >
                <NewCollection />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 2.2 }}
              >
                <Men />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 2.4 }}
              >
                <BrandIntro />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 2.6 }}
              >
                <GiftCollection />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 2.8 }}
              >
                <BrandLocation />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 3 }}
              >
                <Footer />
              </motion.div>
        <WhatsAppPopup />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;