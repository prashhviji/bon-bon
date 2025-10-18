import { IceCream, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <IceCream className="w-8 h-8 text-amber-400" />
              <div>
                <h3 className="text-xl font-serif">BON BON</h3>
                <p className="text-xs text-amber-400">Ice Cream</p>
              </div>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Crafted with care. Churned with passion.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#stores" className="text-gray-400 hover:text-amber-400 transition-colors">Stores</a></li>
              <li><a href="#wholesale" className="text-gray-400 hover:text-amber-400 transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-light text-gray-400">
              <li>info@bonbonicecream.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Heritage Plaza, Main Street</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400 font-light">
          <p>&copy; 2025 Bon Bon Ice Cream. All rights reserved. Crafted with love for 20+ years.</p>
        </div>
      </div>
    </footer>
  );
}
