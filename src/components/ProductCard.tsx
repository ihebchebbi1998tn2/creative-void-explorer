import React, { useState } from 'react';
import { Product } from '../types/product';
import ProductDetailModal from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="h-full hover:shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="h-[300px] bg-transparent overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-normal"
          />
        </div>
        <div className="p-2 md:p-4">
          <div className="text-base font-['WomanFontBold'] text-[#591C1C]">
            {product.name}
          </div>
          <div className="text-sm text-gray-600 uppercase">
            {product.material}<br />
            {product.color}
          </div>
          <div className="mt-2 font-bold text-black">
            € {product.price}
          </div>
        </div>
      </div>

      <ProductDetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;