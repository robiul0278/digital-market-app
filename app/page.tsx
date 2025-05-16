'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/hero/HeroSection';
import Features from './components/Features';
import ProductCard from './components/ProductCard';
import FAQ from './components/FAQ';

const products = [
  {
    id: '1',
    name: 'Gmail Account',
    price: 4.99,
    image: 'https://image.cnbcfm.com/api/v1/image/106199081-1571858526194gettyimages-887454120.jpeg?v=1701360669',
    description: 'Professional Gmail account with premium features',
  },
  {
    id: '2',
    name: 'Google Voice',
    price: 9.99,
    image: 'https://i.insider.com/5ddd41d5fd9db2334764cfd3?width=700',
    description: 'US phone number with calling and texting capabilities',
  },
  {
    id: '3',
    name: 'Adobe Creative Cloud',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg',
    description: 'Full access to Adobe Creative Suite',
  },
  {
    id: '4',
    name: 'Microsoft 365',
    price: 19.99,
    image: 'https://cdnpro.eraspace.com/media/mageplaza/blog/post/s/o/software_microsoft_365.jpg.png',
    description: 'Complete Microsoft Office package with cloud storage',
  },
  {
    id: '5',
    name: 'Spotify Premium',
    price: 14.99,
    image: 'https://sadesign.ai/pictures/picfullsizes/2024/11/27/ijt1732694230.jpg',
    description: 'Ad-free music streaming with offline downloads',
  },
  {
    id: '6',
    name: 'Netflix Premium',
    price: 24.99,
    image: 'https://gameloverbd.com/public/uploads/all/ME9lV1SHF38JjRVKWzETSECLuVDAIBYBHgcoVHLn.jpg',
    description: '4K streaming on multiple devices',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <div className="max-w-7xl mx-auto py-12 px-4 md:p-0 lg:p-0">
          <div className="flex items-center justify-center gap-4 mb-10">
            <hr className="flex-grow border border-t border-cyan-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-center whitespace-nowrap">
              Our Featured Products
            </h2>
            <hr className="flex-grow border border-t border-red-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </main>
      <FAQ />
      <Footer />
    </div>
  );
}