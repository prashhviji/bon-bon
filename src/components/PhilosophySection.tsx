import { ArrowRight } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pure ingredients"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              What you eat<br />matters.
            </h2>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              We believe purity is everything. While others use vegetable fat, we use real butter
              and real milk. Every scoop is slow-crafted. We don't follow trends — we follow
              taste.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-light">100% Real Dairy Milk</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-light">No Vegetable Oils</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                <p className="text-gray-700 font-light">Slow-Churned with Real Butter</p>
              </div>
            </div>
            <button className="group inline-flex items-center gap-2 text-amber-700 font-light text-lg hover:gap-4 transition-all">
              See What's Inside
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
