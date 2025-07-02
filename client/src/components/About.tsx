import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="glassmorphism rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
              Hi, I'm <span className="text-gradient-developer font-bold">Pathmanathan Krishogaran</span> — an IT undergraduate with a creative mind and a passionate heart.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
              By profession, I'm a <span className="text-electric font-semibold">Web Developer</span>, skilled in building MERN stack, PHP & MySQL-based projects and always exploring new technologies. I enjoy turning ideas into real, working solutions that make life easier and better.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
              But beyond the code, I'm also a <span className="text-golden font-semibold">Public Speaker</span> and a strong believer in personal development. I read, meditate, and speak to inspire others — especially students — to grow in mindset, confidence, and self-awareness. I've started building a vision-driven team to share practical tools for life success, beyond the classroom.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Whether it's solving tech problems or life challenges, I'm all about learning, evolving, and helping others grow too.
            </p>
            
            <div className="mt-8">
              <span className="text-2xl font-bold text-gradient-developer">Let's build something meaningful</span>
              <span className="text-xl text-gray-300"> — in code or in character.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
