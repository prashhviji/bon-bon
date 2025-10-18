import { ArrowRight, CheckCircle } from 'lucide-react';

export default function WholesaleSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Ice cream at scale.<br />Without compromise.
            </h2>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Bon Bon partners with luxury hotels, cafés, and chefs — delivering handcrafted ice
              cream in every batch. Precision. Quality. Reliability.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-gray-900 mb-1">Bulk Supply</h4>
                  <p className="text-gray-600 font-light">Custom volumes for your business needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-gray-900 mb-1">Private Label</h4>
                  <p className="text-gray-600 font-light">Customized branding options available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-gray-900 mb-1">Dedicated Support</h4>
                  <p className="text-gray-600 font-light">Account managers for seamless service</p>
                </div>
              </div>
            </div>
            <button className="group inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full text-lg hover:bg-amber-700 transition-all shadow-lg">
              Become a Partner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional kitchen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
