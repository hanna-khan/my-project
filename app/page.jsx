import Image from 'next/image';
import ProductList from './component/ProductList';
import BrowseByStyle from './component/BrowseByStyle';
import HappyCustomers from './component/HappyCustomers';
import Footer from './component/Footer';
const products = [
  {
    image: '/Frame 32.png',
    title: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
  },
  {
    image: '/Frame 33.png',
    title: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
  },
  {
    image: '/Frame 34.png',
    title: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
  },
  {
    image: '/Frame 38.png',
    title: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
  },
];
const productsTopSelling = [
  {
    image: '/top1.png',
    title: 'VERTICAL STRIPED SHIRT',
    price: 120,
    rating: 4.5,
  },
  {
    image: '/top2.png',
    title: 'COURAGE GRAPHIC T-SHIRT',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
  },
  {
    image: '/top3.png',
    title: 'LOOSE FIT BERMUDA SHORTS',
    price: 180,
    rating: 4.5,
  },
  {
    image: '/top4.png',
    title: 'FADED SKINNY JEANS',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
  },
];
const categories = [
  { image: '/Frame 61.png' },
  { image: '/Frame 62.png' },
  { image: '/Frame 63.png' },
  { image: '/Frame 64.png' },
];
export default function Page() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-8 bg-white text-black">
        <div className="text-2xl font-bold">
          <h1 className="font-extrabold">SHOP.CO</h1>
        </div>
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
            className="px-4 py-1 text-black rounded-lg"
          />
          <button className="text-white">🛒</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6  space-y-6 bg-[#F2F0F1] md:flex-row md:justify-between md:text-left md:px-12">
        <div className="flex-1">
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
        <div className="relative flex-1">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/hero.jpeg" // Update with your image path
              alt="Fashionable clothing"
              layout="fill"
              objectFit="contain" // Ensures the full image is visible without being cropped
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <footer className="flex items-center justify-center bg-black py-4">
        <div className="flex space-x-6 gap-10 py-5">
          {/* Replace spans with brand logo images */}
          <Image
            src="/versace.png" // Ensure you have the image in the 'public/brands' folder
            alt="Versace"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/zara-logo-1 1.png"
            alt="Zara"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/gucci-logo-1 1.png"
            alt="Gucci"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/prada-logo-1 1.png"
            alt="Prada"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/calvin.png"
            alt="Calvin Klein"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
      </footer>
      <ProductList products={products} sectionTitle={"New Arrivals"} />
      <ProductList products={productsTopSelling} sectionTitle={"Top selling"} />
      <BrowseByStyle categories={categories} />
      <HappyCustomers />
      <Footer />
    </div>
  );
}
