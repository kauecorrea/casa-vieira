
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';

// Sections
import { Hero } from './components/sections/Hero';
import { Benefits } from './components/sections/Benefits';
import { Products } from './components/sections/Products';
import { About } from './components/sections/About';
import { Location } from './components/sections/Location';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col font-sans selection:bg-brand-green/30 selection:text-brand-green-dark">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <Benefits />
        <Products />
        <About />
        <Location />
        <Contact />
      </main>

      <Footer />
      
      <WhatsAppFloat />
    </div>
  );
}

export default App;
