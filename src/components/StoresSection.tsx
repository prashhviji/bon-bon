import { ArrowRight, MapPin } from 'lucide-react';

const stores = [
  {
    name: 'Downtown Flagship',
    address: 'Heritage Plaza, Main Street',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Marina Bay',
    address: 'Waterfront District, Bay Avenue',
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Garden Plaza',
    address: 'Green Park, Rose Street',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Old Town',
    address: 'Historic Quarter, Vintage Lane',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function StoresSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-pink-50 to-pink-100/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-pink-900 mb-6">
            Find your nearest scoop.
          </h2>
          <p className="text-xl text-pink-700 font-light max-w-2xl mx-auto">
            Visit our 4 iconic outlets. Each is a piece of our legacy — where ice cream meets
            craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group bg-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-pink-900 mb-2">{store.name}</h3>
                <div className="flex items-start gap-2 text-pink-600 font-light">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm">{store.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-2 text-pink-700 font-light text-lg hover:gap-4 transition-all">
            View Locations
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
