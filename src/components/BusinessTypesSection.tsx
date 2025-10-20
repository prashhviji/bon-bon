import { Store, Coffee, Building } from 'lucide-react';

const businessTypes = [
  {
    title: 'Kiosk or Mini Parlour',
    description: 'Perfect for small spaces and quick service. Our compact setup brings the Bon Bon experience to any location.',
    icon: Store,
    features: ['Space-efficient design', 'Essential menu selection', 'Quick service setup', 'Ideal for high-traffic areas']
  },
  {
    title: 'Premium Parlour',
    description: 'Our flagship concept offering the complete Bon Bon experience with an extensive menu and luxurious ambiance.',
    icon: Building,
    features: ['Full menu selection', 'Premium seating area', 'Signature interiors', 'Enhanced customer experience']
  },
  {
    title: 'All Season Cafe',
    description: 'A cozy cafe environment offering our ice creams alongside complementary treats and beverages all year round.',
    icon: Coffee,
    features: ['All-weather comfort', 'Extended menu options', 'Café seating', 'Seasonal specialties']
  }
];

export default function BusinessTypesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-pink-50/60 to-pink-100" id="business-types">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-pink-900 mb-4 sm:mb-6">
            Choose Your Format
          </h2>
          <p className="text-lg sm:text-xl text-pink-700 font-light max-w-2xl mx-auto px-4 sm:px-6">
            Three unique ways to bring the Bon Bon experience to your customers.
            Each format is designed to maximize your success while maintaining our quality standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-pink-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-pink-900 mb-4">{type.title}</h3>
                <p className="text-pink-600 mb-6 font-light">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="text-pink-700 font-light flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}