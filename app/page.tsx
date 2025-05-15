'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addToCart } from '@/store/features/cart/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/hero/HeroSection';

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
  const dispatch = useDispatch();
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (productId: string, value: string) => {
    const quantity = Math.max(1, Math.min(99, parseInt(value) || 1));
    setSelectedQuantities(prev => ({ ...prev, [productId]: quantity }));
  };

  const handleIncrement = (productId: string) => {
    const currentQuantity = selectedQuantities[productId] || 1;
    if (currentQuantity < 99) {
      setSelectedQuantities(prev => ({ 
        ...prev, 
        [productId]: currentQuantity + 1 
      }));
    }
  };

  const handleDecrement = (productId: string) => {
    const currentQuantity = selectedQuantities[productId] || 1;
    if (currentQuantity > 1) {
      setSelectedQuantities(prev => ({ 
        ...prev, 
        [productId]: currentQuantity - 1 
      }));
    }
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const quantity = selectedQuantities[product.id] || 1;
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`Added ${quantity} ${product.name} to cart`);
    setSelectedQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle className="p-4">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                  <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <div className="flex items-center rounded-md border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => handleDecrement(product.id)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max="99"
                      value={selectedQuantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      className="h-8 w-14 rounded-none border-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => handleIncrement(product.id)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button className="flex-1 gap-2" onClick={() => handleAddToCart(product)}>
                    <Plus className="h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}