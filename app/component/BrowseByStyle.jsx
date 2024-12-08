import React from 'react';

const BrowseByStyle = ({ categories }) => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">BROWSE BY DRESS STYLE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center place-items-center">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={category.image}
                            alt={category.label}
                            className="w-auto h-40 object-cover "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseByStyle;
