import { ArrowRight } from 'lucide-react';

export default function LegacySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Two decades.<br />One obsession.
            </h2>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              For 20 years, Bon Bon has done one thing right — making pure dairy ice creams with
              no vegetable oils or shortcuts. From a single counter to multiple outlets, from
              family favorites to fine dining — we didn't just grow, we evolved.
            </p>
            <button className="group inline-flex items-center gap-2 text-amber-700 font-light text-lg hover:gap-4 transition-all">
              Explore Our Story
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5945850/pexels-photo-5945850.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Legacy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-8 max-w-xs">
              <p className="text-6xl font-serif text-amber-600 mb-2">20+</p>
              <p className="text-gray-700 font-light">Years of Craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
