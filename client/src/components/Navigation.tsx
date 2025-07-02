import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glassmorphism"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient-developer cursor-pointer"
               onClick={() => scrollToSection('hero')}>
           
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} 
                    className="hover:text-electric transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="hover:text-electric transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
                    className="hover:text-electric transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="hover:text-electric transition-colors">
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            <button onClick={() => scrollToSection('hero')} 
                    className="block w-full text-left hover:text-electric transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="block w-full text-left hover:text-electric transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
                    className="block w-full text-left hover:text-electric transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="block w-full text-left hover:text-electric transition-colors">
              Contact
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
