import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300">Ready to collaborate? Choose your preferred way to reach out</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Development Inquiries */}
          <motion.div 
            className="glassmorphism rounded-3xl p-8 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <i className="fas fa-laptop-code text-6xl text-electric mb-4"></i>
            </div>
            <h3 className="text-3xl font-bold text-gradient-developer mb-4">Development Inquiries</h3>
            <p className="text-gray-300 mb-6 text-lg">
              "Open to freelance work — whether it's MERN stack or PHP & MySQL, I've got you covered!"
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center space-x-3">
                <i className="fas fa-envelope text-electric"></i>
                <a href="mailto:Techxy.help@gmail.com" className="text-electric hover:underline">
                  Techxy.help@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <i className="fab fa-whatsapp text-electric"></i>
                <a href="https://wa.me/94754294969" className="text-electric hover:underline">
                  +94 754 294 969
                </a>
              </div>
            </div>
            
            <a 
              href="https://wa.me/94754294969?text=Hi! I'm interested in discussing a development project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-developer text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Let's Connect
            </a>
          </motion.div>
          
          {/* Speaking Requests */}
          <motion.div 
            className="glassmorphism rounded-3xl p-8 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <i className="fas fa-microphone-alt text-6xl text-golden mb-4"></i>
            </div>
            <h3 className="text-3xl font-bold text-gradient-speaker mb-4">Speaking Requests</h3>
            <p className="text-gray-300 mb-6 text-lg">
              "Need a motivational speaker? I'm ready to inspire your audience—on any topic, any stage!"
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center space-x-3">
                <i className="fas fa-envelope text-golden"></i>
                <a href="mailto:Beyouofficial.help@gmail.com" className="text-golden hover:underline">
                  Beyouofficial.help@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <i className="fab fa-whatsapp text-golden"></i>
                <a href="https://wa.me/94760528370" className="text-golden hover:underline">
                  +94 760 528 370
                </a>
              </div>
            </div>
            
            <a 
              href="https://wa.me/94760528370?text=Hi! I'm interested in booking you for a speaking engagement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-speaker text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Let's Connect
            </a>
          </motion.div>
        </div>
        
        {/* Social Links */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-3xl text-gray-400 hover:text-electric transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-electric transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-golden transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-golden transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
