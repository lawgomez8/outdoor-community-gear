
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
          {/* Left: Image - Updated to Latin American landscape */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1591022560022-d75eb933f1ba" 
                alt="Paisaje latinoamericano" 
                className="w-full h-auto rounded-2xl opacity-0"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-clay-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-forest-100 rounded-2xl -z-10"></div>
          </div>
          
          {/* Right: Content */}
          <div ref={contentRef} className="space-y-6">
            <span className="badge bg-forest-100 text-forest-800 opacity-0">Nuestra Historia</span>
            <h2 className="heading-lg opacity-0">Creado Para el Viaje por Delante</h2>
            <p className="text-lg text-muted-foreground opacity-0">
              Fundada por un grupo de excursionistas y escaladores apasionados, nuestra marca nació del deseo de crear equipamiento que realmente comprenda las necesidades de los entusiastas del aire libre.
            </p>
            <p className="text-lg text-muted-foreground opacity-0">
              Creemos que el equipo adecuado no solo mejora el rendimiento, sino que permite experiencias que te acompañan toda la vida.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Sostenibilidad</h3>
                <p className="text-muted-foreground">
                  Comprometidos con la fabricación y materiales ambientalmente responsables.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Rendimiento</h3>
                <p className="text-muted-foreground">
                  Diseñado y probado en condiciones extremas para garantizar fiabilidad.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Comunidad</h3>
                <p className="text-muted-foreground">
                  Construyendo conexiones entre aventureros de todo el mundo.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-forest-800">Innovación</h3>
                <p className="text-muted-foreground">
                  Evolucionando constantemente nuestros diseños mediante pruebas en el mundo real.
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
