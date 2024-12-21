import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';
import Categories from './Categories';
import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../services/productsApi';
import { Skeleton } from './ui/skeleton';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Products = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false, dragFree: false },
  );

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  if (error) {
    console.error('Error loading products:', error);
    return <div className="text-center text-red-500">Failed to load products</div>;
  }

  return (
    <div className="w-full overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-[#700100] font-['WomanFontBold'] mb-8">
          Nouveautés
        </h1>
        <Categories />
        <div className="relative w-full" ref={emblaRef}>
          <Carousel className="w-full">
            <CarouselContent>
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="h-[400px] bg-gray-100 rounded-lg animate-pulse" />
                  </CarouselItem>
                ))
              ) : (
                products?.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious
              aria-label="Previous Slide"
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-gray-200 shadow-lg h-8 w-8 rounded-full z-10"
            >
              <i className="bi bi-chevron-left h-5 w-5 text-red-600 hover:text-red-700"></i>
            </CarouselPrevious>
            <CarouselNext
              aria-label="Next Slide"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-gray-200 shadow-lg h-8 w-8 rounded-full z-10"
            >
              <i className="bi bi-chevron-right h-5 w-5 text-red-600 hover:text-red-700"></i>
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Products;