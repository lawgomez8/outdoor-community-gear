
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <h2 className="text-2xl font-display font-bold">SUMMIT</h2>
            </a>
            <p className="text-forest-100">
              Equipamiento especializado para excursionistas y escaladores que desafían límites y abrazan la aventura.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-forest-800 hover:bg-forest-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-forest-800 hover:bg-forest-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-forest-800 hover:bg-forest-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-forest-800 hover:bg-forest-700 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tienda</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Todos los Productos</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Pantalones de Senderismo</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Pantalones de Escalada</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Chaquetas de Senderismo</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Impermeables</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Novedades</a></li>
            </ul>
          </div>
          
          {/* Community links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Comunidad</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Informes de Senderos</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Historias</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Programa de Embajadores</a></li>
              <li><a href="#" className="text-forest-100 hover:text-white transition-colors">Colaboraciones</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-forest-100">123 Summit Way, Boulder, CO 80303, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@summitgear.com" className="text-forest-100 hover:text-white transition-colors">
                  info@summitgear.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <a href="tel:+1-800-555-HIKE" className="text-forest-100 hover:text-white transition-colors">
                  +1-800-555-HIKE
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-forest-800 pt-8 pb-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Suscríbete a Nuestro Boletín</h3>
            <p className="text-forest-100 mb-6">
              Mantente actualizado con nuevos productos, eventos comunitarios y ofertas exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu dirección de email"
                className="flex-grow px-4 py-3 rounded-md bg-forest-800 border border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-500 text-white"
              />
              <button className="px-6 py-3 rounded-md bg-clay-500 hover:bg-clay-600 text-white font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Summit Outdoor Gear. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-forest-400 text-sm hover:text-forest-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-forest-400 text-sm hover:text-forest-300 transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-forest-400 text-sm hover:text-forest-300 transition-colors">
              Información de Envío
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
