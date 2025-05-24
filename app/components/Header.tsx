'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/hooks/useCart';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import CartSlide from './CartSlide';
import Image from 'next/image';

export default function Header() {
  const { itemCount } = useCart();
  const { theme, setTheme } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between p-4 md:p-0 lg:p-0">
<Link href="/" className="flex items-center space-x-2">
  <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
    <Image
      src="/logo.png"
      alt="Toy Shop Logo"
      fill
      className="object-contain"
      sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
      priority
    />
  </div>
  <span className="text-xl sm:text-2xl font-bold">BMV</span>
</Link>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            className='relative'
            variant="outline"
            size="icon"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      <CartSlide
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
}