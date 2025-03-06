
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) {
      Array.from(contentRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Mountain landscape" 
                className="w-full h-auto rounded-2xl opacity-0"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-clay-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-forest-100 rounded-2xl -z-10"></div>
          </div>
          
          {/* Right: Content */}
          <div ref={contentRef} className="space-y-6">
            <span className="badge bg-forest-100 text-forest-800 opacity-0">Our Story</span>
            <h2 className="heading-lg opacity-0">Crafted For The Journey Ahead</h2>
            <p className="text-lg text-muted-foreground opacity-0">
              Founded by a group of passionate hikers and climbers, our brand was born from a desire to create gear that truly understands the needs of outdoor enthusiasts.
            </p>
            <p className="text-lg text-muted-foreground opacity-0">
              We believe that the right equipment doesn't just enhance performance—it enables experiences that stay with you for a lifetime.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to environmentally responsible manufacturing and materials.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Performance</h3>
                <p className="text-muted-foreground">
                  Designed and tested in extreme conditions to ensure reliability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Community</h3>
                <p className="text-muted-foreground">
                  Building connections between adventurers around the world.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly evolving our designs through real-world testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
