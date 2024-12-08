import React from 'react';

const ProductCard = ({ image, title, price, originalPrice, discount, rating }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <img src={image} alt={title} className="md:w-44 md:h-44  h-32 w-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 lowercase">{title}</h3>
      <p className="text-sm text-gray-500">⭐ {rating}/5</p>
      <div className="flex items-center space-x-2 mt-2">
        <p className="text-xl font-bold text-gray-800">${price}</p>
        {originalPrice && (
          <p className="text-sm line-through text-gray-400">${originalPrice}</p>
        )}
      </div>
      {discount && (
        <p className="text-sm text-red-500">-{discount}%</p>
      )}
    </div>
  );
};

export default ProductCard;
