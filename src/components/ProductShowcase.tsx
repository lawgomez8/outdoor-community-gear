
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Product types
type Category = 'all' | 'pants' | 'jackets';

interface Product {
  id: number;
  name: string;
  category: 'pants' | 'jackets';
  price: number;
  image: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  colors: number;
}

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "Alpine Trekker Pants",
      category: "pants",
      price: 129,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      isBestseller: true,
      colors: 4
    },
    {
      id: 2,
      name: "Summit Shell Jacket",
      category: "jackets",
      price: 249,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      isNewArrival: true,
      colors: 3
    },
    {
      id: 3,
      name: "Boulder Climb Pants",
      category: "pants",
      price: 149,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      colors: 2
    },
    {
      id: 4,
      name: "Ridge Insulated Jacket",
      category: "jackets",
      price: 279,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      colors: 3
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4">Designed For Adventure</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Specialized gear for hikers and climbers, crafted with premium materials for durability,
            comfort, and performance in any environment.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-gray-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-white shadow-sm text-forest-800'
                  : 'text-gray-600 hover:text-forest-700'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveCategory('pants')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'pants'
                  ? 'bg-white shadow-sm text-forest-800'
                  : 'text-gray-600 hover:text-forest-700'
              }`}
            >
              Pants
            </button>
            <button
              onClick={() => setActiveCategory('jackets')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'jackets'
                  ? 'bg-white shadow-sm text-forest-800'
                  : 'text-gray-600 hover:text-forest-700'
              }`}
            >
              Jackets
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestseller && (
                  <span className="badge bg-clay-500 text-white">Bestseller</span>
                )}
                {product.isNewArrival && (
                  <span className="badge bg-mountain-500 text-white">New Arrival</span>
                )}
              </div>
              
              {/* Product details */}
              <div className="p-5">
                <h3 className="heading-sm mb-2 text-forest-900">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-forest-800">${product.price}</p>
                  <p className="text-sm text-gray-500">{product.colors} colors</p>
                </div>
              </div>
              
              {/* Quick add button (appears on hover) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-800 to-transparent p-5 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="w-full py-2 rounded-md bg-white text-forest-800 font-medium hover:bg-forest-50 transition-colors">
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-forest-700 font-medium hover:text-forest-800 transition-colors"
          >
            View All Products <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
