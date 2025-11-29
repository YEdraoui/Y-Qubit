'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="Y-Qubit Solutions" 
                width={56} 
                height={56} 
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            
            <div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-violet-700 via-fuchsia-700 to-pink-700 bg-clip-text text-transparent">
                Y-Qubit
              </span>
              <div className="text-xs text-gray-500 -mt-1">Solutions</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:via-fuchsia-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 hover:bg-violet-50 rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6 text-violet-700" /> : <Menu className="h-6 w-6 text-violet-700" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-violet-50 hover:via-fuchsia-50 hover:to-pink-50 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
