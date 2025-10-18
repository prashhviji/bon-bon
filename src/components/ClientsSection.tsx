import { ArrowRight, Award, Star, Building2 } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Chosen by the best.
          </h2>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Bon Bon Ice Cream is the choice of luxury hotels, elite clubs, and top chefs. Because
            true taste recognizes true quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Award className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-2xl font-serif text-gray-900 mb-3">Luxury Hotels</h3>
            <p className="text-gray-600 font-light">Residency Hotels & Premium Properties</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Star className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-2xl font-serif text-gray-900 mb-3">Fine Dining</h3>
            <p className="text-gray-600 font-light">3-Star & 5-Star Restaurant Kitchens</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Building2 className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-2xl font-serif text-gray-900 mb-3">Elite Clubs</h3>
            <p className="text-gray-600 font-light">Jenny's Club & Exclusive Members</p>
          </div>
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-2 text-amber-700 font-light text-lg hover:gap-4 transition-all">
            Partner With Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
