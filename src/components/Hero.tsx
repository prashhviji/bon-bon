import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white mb-4 sm:mb-6 leading-tight">
          Ice Cream.<br className="sm:hidden" />{" "}
          <span className="hidden sm:inline">·</span>{" "}
          <br className="hidden sm:inline" />
          Reimagined.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-3 sm:mb-4 max-w-3xl mx-auto px-4 sm:px-6">
          Crafted with real milk. Churned with butter.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-amber-200 font-light mb-8 sm:mb-12">
          Loved for over 20 years.
        </p>
        <button className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-light hover:bg-amber-50 transition-all duration-300 shadow-xl">
          Discover the Legacy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
