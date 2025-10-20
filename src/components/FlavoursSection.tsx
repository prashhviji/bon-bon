import { ArrowRight } from 'lucide-react';

const flavours = [
  {
    name: 'Classic Vanilla',
    description: 'Pure Madagascar vanilla beans',
    color: 'from-pink-100 to-pink-50',
    image: 'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Rich Chocolate',
    description: 'Belgian dark chocolate',
    color: 'from-pink-200 to-pink-100',
    image: '/images/1.png',
  },
  {
    name: 'Strawberry Bliss',
    description: 'Fresh seasonal berries',
    color: 'from-pink-300 to-pink-200',
    image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Salted Caramel',
    description: 'House-made caramel swirl',
    color: 'from-pink-400 to-pink-100',
    image: 'https://images.pexels.com/photos/2675843/pexels-photo-2675843.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function FlavoursSection() {
  return (
    <section className="py-32 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-pink-900 mb-6">
            Simplicity. With depth.
          </h2>
          <p className="text-xl text-pink-700 font-light max-w-3xl mx-auto">
            From classic Vanilla to rich seasonal creations, each flavor is designed to make you
            feel something. We don't make hundreds of flavors. We make the right ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {flavours.map((flavour, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className={`relative h-full bg-gradient-to-br ${flavour.color}`}>
                  <img
                    src={flavour.image}
                    alt={flavour.name}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-serif text-pink-900 mb-2">{flavour.name}</h3>
              <p className="text-pink-600 font-light">{flavour.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-2 text-pink-700 font-light text-lg hover:gap-4 transition-all">
            View All Flavours
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
