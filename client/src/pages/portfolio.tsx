import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PersonalityChoice from "@/components/PersonalityChoice";
import About from "@/components/About";
import DeveloperPortfolio from "@/components/DeveloperPortfolio";
import SpeakerPortfolio from "@/components/SpeakerPortfolio";
import Contact from "@/components/Contact";

export default function Portfolio() {
  const [currentPersonality, setCurrentPersonality] = useState<string | null>(null);

  const switchPersonality = (personality: string) => {
    setCurrentPersonality(personality);
    // Smooth scroll to portfolio section after a delay
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen text-white font-inter overflow-x-hidden relative"
         style={{
           background: 'radial-gradient(ellipse at top, rgba(15, 35, 65, 1) 0%, rgba(5, 15, 25, 1) 50%, rgba(0, 0, 0, 1) 100%)'
         }}>
      {/* Enhanced 3D Background for entire page */}
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <div className="animated-space-bg"></div>
        <div className="particle-wave"></div>
        
        {/* Additional geometric shapes */}
        <div className="floating-geometry"></div>
        <div className="floating-geometry"></div>
        <div className="floating-geometry"></div>
        <div className="floating-geometry"></div>
      </div>
      
      {/* Enhanced animated stars with better distribution */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {/* Top section stars */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" style={{ filter: 'blur(0.5px)' }}></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
        <div className="absolute top-40 left-1/3 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50"></div>
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full floating-star shadow-lg shadow-cyan-300/50"></div>
        
        {/* Middle section stars */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-300 rounded-full animate-bounce shadow-lg shadow-blue-300/50"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-orange-300 rounded-full floating-star shadow-lg shadow-orange-300/50"></div>
        
        {/* Bottom section stars */}
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-white rounded-full animate-ping shadow-lg shadow-white/50"></div>
        <div className="absolute bottom-60 right-40 w-2 h-2 bg-yellow-200 rounded-full animate-ping shadow-lg shadow-yellow-200/50"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-purple-400 rounded-full floating-star shadow-lg shadow-purple-400/50"></div>
        
        {/* Additional scattered stars */}
        <div className="absolute top-60 left-20 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-300/50"></div>
        <div className="absolute top-80 right-60 w-1 h-1 bg-blue-200 rounded-full floating-star shadow-lg shadow-blue-200/50"></div>
        <div className="absolute bottom-80 left-60 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce shadow-lg shadow-green-300/50"></div>
      </div>
      
      <Navigation />
      <Hero />
      <PersonalityChoice 
        currentPersonality={currentPersonality}
        onPersonalitySwitch={switchPersonality}
      />
      <About />
      
      <section id="portfolio" className="py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPersonality ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {currentPersonality === 'developer' && <DeveloperPortfolio />}
          {currentPersonality === 'speaker' && <SpeakerPortfolio />}
        </motion.div>
      </section>
      
      <Contact />
      
      <footer className="py-8 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Pathmanathan Krishogaran. All rights reserved.</p>
          <p className="mt-2">Built with passion, creativity, and purpose.</p>
        </div>
      </footer>
    </div>
  );
}
