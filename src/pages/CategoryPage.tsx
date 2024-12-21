import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import BeltsSection from "../components/productsPages/BeltsSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/productsPages/ProductsSection";
import BrandNavbarSection from "@/components/productsPages/BrandNavbarSection";
import MainNavbarProduct from "@/components/productsPages/MainNavbarProduct";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Extract the full path hierarchy
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '' && segment !== 'category');

  useEffect(() => {
    console.log("Current category path:", pathSegments);
    // Show a toast to indicate the current category path
    toast({
      title: "Current Category",
      description: `You are viewing: ${pathSegments.join(' > ')}`,
    });
  }, [location.pathname]);

  // Example of conditional rendering based on path
  const isOutletSection = pathSegments[0] === 'outlet';
  const isSurMesureSection = pathSegments[0] === 'sur-mesure';
  const isAccessoriesSection = pathSegments[0] === 'accessoires';

  // Example of getting specific category details
  const mainCategory = pathSegments[0];
  const subCategory = pathSegments[1];
  const productType = pathSegments[2];

  return (
    <div className="min-h-screen flex flex-col relative">
      <TopNavbar />
        <BrandNavbarSection />
        
        <div className="hidden lg:block">
          <MainNavbarProduct />
        </div>
        <BeltsSection />
        <div className="flex-grow bg-[#F9FAFB]">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
            aria-label="Go back to home"
          >
            <ArrowLeft size={24} />
            <span>Retour à l'accueil</span>
          </button>
          <div className="mb-6 text-sm breadcrumbs">
            <ul className="flex flex-wrap gap-2 items-center">
              <li>
                <a href="/" className="text-gray-600 hover:text-black">
                Accueil
                </a>
              </li>
              {pathSegments.map((segment, index) => (
                <React.Fragment key={index}>
                  <li className="text-gray-400">/</li>
                  <li className={index === pathSegments.length - 1 ? "text-primary font-medium" : "text-gray-600"}>
                    {segment.split('-').join(' ')}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;