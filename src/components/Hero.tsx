import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const carouselImages = [
  'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1920',
  '/images/1.png',
  '/images/2.png',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 transition-all duration-700" style={{ backgroundImage: `url(${carouselImages[current]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
      </div>
      {/* Carousel Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all">
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all">
        <ChevronRight className="w-7 h-7" />
      </button>
      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-gray-300'} border-none transition-colors`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white mb-4 sm:mb-6 leading-tight">
          Ice Cream.<br className="sm:hidden" />{' '}
          <span className="hidden sm:inline">·</span>{' '}
          <br className="hidden sm:inline" />
          Reimagined.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-light mb-3 sm:mb-4 max-w-3xl mx-auto px-4 sm:px-6">
          Crafted with real milk. Churned with butter.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 font-light mb-8 sm:mb-12">
          Loved for over 20 years.
        </p>
        <button className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-light hover:bg-gray-100 transition-all duration-300 shadow-xl">
          Discover the Legacy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
