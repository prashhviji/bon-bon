import Header from './components/Header';
import Hero from './components/Hero';
import LegacySection from './components/LegacySection';
import PhilosophySection from './components/PhilosophySection';
import ClientsSection from './components/ClientsSection';
import FlavoursSection from './components/FlavoursSection';
import StoresSection from './components/StoresSection';
import BusinessTypesSection from './components/BusinessTypesSection';
import WholesaleSection from './components/WholesaleSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900">
      <Header />
      <Hero />
      <LegacySection />
      <PhilosophySection />
      <ClientsSection />
      <FlavoursSection />
      <StoresSection />
      <BusinessTypesSection />
      <WholesaleSection />
      <Footer />
    </div>
  );
}

export default App;
