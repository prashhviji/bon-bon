import { IceCream, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IceCream className={`w-8 h-8 ${scrolled ? 'text-amber-600' : 'text-white'}`} />
            <div>
              <h1 className={`text-xl font-serif ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                BON BON
              </h1>
              <p className={`text-xs ${scrolled ? 'text-amber-600' : 'text-amber-200'}`}>
                Ice Cream
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Menu', 'Stores', 'Business Types', 'Wholesale', 'Story'].map((item) => (
              <a
                key={item}
                href={item === 'Menu' ? '/Bon Bon Old Menu Card_A5.pdf' : `#${item.toLowerCase()}`}
                target={item === 'Menu' ? '_blank' : undefined}
                rel={item === 'Menu' ? 'noopener noreferrer' : undefined}
                className={`text-sm font-light tracking-wide transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-amber-600 transition-colors hidden md:block`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block bg-amber-600 text-white px-6 py-2 rounded-full text-sm hover:bg-amber-700 transition-all">
              Order Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <nav className="flex flex-col py-4">
                {['About', 'Menu', 'Stores', 'Business Types', 'Wholesale', 'Story'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Menu' ? '/Bon Bon Old Menu Card_A5.pdf' : `#${item.toLowerCase()}`}
                    target={item === 'Menu' ? '_blank' : undefined}
                    rel={item === 'Menu' ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="px-6 py-4 border-t border-gray-100 mt-2">
                  <button className="w-full bg-amber-600 text-white px-6 py-2 rounded-full text-sm hover:bg-amber-700 transition-all">
                    Order Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
