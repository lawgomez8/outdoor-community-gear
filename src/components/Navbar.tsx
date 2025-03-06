
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'blur-backdrop py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-display font-bold text-forest-800">SUMMIT</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="font-medium text-forest-800 hover:text-forest-600 transition-colors link-underline">
            Productos
          </a>
          <a href="#community" className="font-medium text-forest-800 hover:text-forest-600 transition-colors link-underline">
            Comunidad
          </a>
          <a href="#about" className="font-medium text-forest-800 hover:text-forest-600 transition-colors link-underline">
            Sobre Nosotros
          </a>
          <a href="#stories" className="font-medium text-forest-800 hover:text-forest-600 transition-colors link-underline">
            Historias
          </a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center">
          <button className="p-2 text-forest-800 hover:text-forest-600 transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-forest-800 hover:text-forest-600 transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 relative text-forest-800 hover:text-forest-600 transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-clay-500 text-[10px] font-medium text-white">
              0
            </span>
          </button>
          <button
            className="ml-2 p-2 text-forest-800 hover:text-forest-600 transition-colors md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[69px] bg-white z-40 transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container h-full flex flex-col px-6 py-8 space-y-8">
          <a
            href="#products"
            className="py-3 text-xl font-medium text-forest-800 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Productos
          </a>
          <a
            href="#community"
            className="py-3 text-xl font-medium text-forest-800 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Comunidad
          </a>
          <a
            href="#about"
            className="py-3 text-xl font-medium text-forest-800 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Sobre Nosotros
          </a>
          <a
            href="#stories"
            className="py-3 text-xl font-medium text-forest-800 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Historias
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
