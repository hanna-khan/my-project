import Image from 'next/image';
import { useState } from 'react';
import ProductList from '../component/ProductList';
const products = [
    {
        image: '/path/to/tshirt.jpg',
        title: 'T-shirt with Tape Details',
        price: 120,
        rating: 4.5,
    },
    {
        image: '/path/to/jeans.jpg',
        title: 'Skinny Fit Jeans',
        price: 240,
        originalPrice: 260,
        discount: 20,
        rating: 3.5,
    },
    {
        image: '/path/to/checkered-shirt.jpg',
        title: 'Checkered Shirt',
        price: 180,
        rating: 4.5,
    },
    {
        image: '/path/to/striped-shirt.jpg',
        title: 'Sleeve Striped T-shirt',
        price: 130,
        originalPrice: 160,
        discount: 30,
        rating: 4.5,
    },
];
export default function Home() {
    return (

        <><div className="bg-white">
            {/* Header */}
            <header className="flex items-center justify-between py-4 px-8 bg-black text-white">
                <div className="text-2xl font-bold">SHOP.CO</div>
                <nav className="space-x-4">
                    <a href="#" className="hover:underline">Shop</a>
                    <a href="#" className="hover:underline">On Sale</a>
                    <a href="#" className="hover:underline">New Arrivals</a>
                    <a href="#" className="hover:underline">Brands</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="px-4 py-1 text-black rounded-lg" />
                    <button className="text-white">🛒</button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-12 space-y-6 bg-gray-100 md:flex-row md:justify-between md:text-left md:px-12">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <p className="text-lg text-gray-700 mt-4">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                        Shop Now
                    </button>
                </div>
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                    {/* Replace this with an actual image */}
                    <Image
                        src="/your-image-path.jpg" // Replace with your actual image path
                        alt="Fashionable clothing"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg" />
                </div>
            </section>

            {/* Brands Section */}
            <footer className="flex items-center justify-center bg-black py-4">
                <div className="flex space-x-6 text-white text-lg font-semibold">
                    <span>Versace</span>
                    <span>Zara</span>
                    <span>Gucci</span>
                    <span>Prada</span>
                    <span>Calvin Klein</span>
                </div>
            </footer>
            {/* new arrivals sections */}
        </div><ProductList products={products} /></>
    );
}
