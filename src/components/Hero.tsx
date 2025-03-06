
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textContainerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.max(0, 1 - scrollPosition / 500);
      
      // Parallax effect
      textContainerRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      textContainerRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('products');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
      </div>
      
      {/* Text Content */}
      <div 
        ref={textContainerRef}
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <span className="badge bg-white/90 text-forest-800 mb-6 animate-float-up">Descubre Nuestra Nueva Colección</span>
        <h1 className="heading-xl text-white mb-6 max-w-4xl mx-auto animate-float-up animate-delay-100">
          Equipamiento Para Quienes Buscan Lo <span className="text-sky-300">Extraordinario</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-float-up animate-delay-200">
          Pantalones y chaquetas especializadas diseñadas para excursionistas y escaladores que desafían límites y abrazan la aventura.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-float-up animate-delay-300">
          <button className="px-8 py-3 rounded-md bg-forest-600 hover:bg-forest-700 text-white font-medium transition-colors">
            Comprar Colección
          </button>
          <button className="px-8 py-3 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium border border-white/30 transition-colors">
            Unirse a la Comunidad
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce flex flex-col items-center"
      >
        <span className="text-sm mb-2">Desplázate</span>
        <ArrowDown size={20} />
      </button>
    </div>
  );
};

export default Hero;
