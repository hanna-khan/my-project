import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, sectionTitle}) => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold text-center mb-6 uppercase">{sectionTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductList;
