import { motion } from "framer-motion";

interface PersonalityChoiceProps {
  currentPersonality: string | null;
  onPersonalitySwitch: (personality: string) => void;
}

export default function PersonalityChoice({ currentPersonality, onPersonalitySwitch }: PersonalityChoiceProps) {
  return (
    <section id="personality-choice" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Experience</h2>
          <p className="text-xl text-gray-300">Explore my professional journey through two unique perspectives</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Developer Card */}
          <motion.div 
            className={`personality-card glassmorphism rounded-3xl p-8 text-center ${
              currentPersonality === 'developer' ? 'active' : ''
            }`}
            onClick={() => onPersonalitySwitch('developer')}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="mb-6">
              <i className="fas fa-code text-6xl text-electric mb-4"></i>
            </div>
            <h3 className="text-3xl font-bold text-gradient-developer mb-4">Web Developer</h3>
            <p className="text-gray-300 mb-6">MERN Stack • PHP & MySQL • Full-Stack Solutions</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <i className="fas fa-check text-electric mr-3"></i>
                React & Node.js Applications
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-electric mr-3"></i>
                PHP & MySQL Development
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-electric mr-3"></i>
                Responsive Web Design
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-electric mr-3"></i>
                API Integration
              </li>
            </ul>
            <button className="bg-gradient-developer text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              View Projects
            </button>
          </motion.div>
          
          {/* Speaker Card */}
          <motion.div 
            className={`personality-card glassmorphism rounded-3xl p-8 text-center ${
              currentPersonality === 'speaker' ? 'active' : ''
            }`}
            onClick={() => onPersonalitySwitch('speaker')}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="mb-6">
              <i className="fas fa-microphone text-6xl text-golden mb-4"></i>
            </div>
            <h3 className="text-3xl font-bold text-gradient-speaker mb-4">Public Speaker</h3>
            <p className="text-gray-300 mb-6">Personal Development • Mindset Coaching • Student Inspiration</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <i className="fas fa-check text-golden mr-3"></i>
                Motivational Speaking
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-golden mr-3"></i>
                Personal Development
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-golden mr-3"></i>
                Mindset Training
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-golden mr-3"></i>
                Student Mentoring
              </li>
            </ul>
            <button className="bg-gradient-speaker text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              View Speaking
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
