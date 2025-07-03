import { motion } from "framer-motion";
import profileImage from "@assets/ab.jpg";

export default function Hero() {
  const scrollToPersonalityChoice = () => {
    const section = document.getElementById("personality-choice");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-16"
    >
      {/* Background Effects */}
      <div className="hero-3d-bg">
        <div className="particle-wave" />
        <div className="floating-geometry" />
        <div className="floating-geometry" />
        <div className="floating-geometry" />
      </div>

      {/* Floating Decorative Blobs */}
      <motion.div
        className="absolute top-16 left-16 w-20 h-20 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #00bfff, #1e90ff, #00ffff, #4169e1, #00bfff)",
          filter: "blur(8px)",
          opacity: 0.4,
        }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-40 right-24 w-16 h-16 rounded-full"
        style={{
          background: "conic-gradient(from 180deg, #ffd700, #ff8c00, #ffa500)",
          filter: "blur(6px)",
          opacity: 0.5,
        }}
        animate={{ y: [0, -30, 0], x: [0, -15, 0], rotate: [0, -360], scale: [1, 0.8, 1.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="absolute bottom-24 left-36 w-16 h-16 rounded-full"
        style={{
          background: "radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1)",
          filter: "blur(10px)",
          opacity: 0.3,
        }}
        animate={{ y: [0, -50, 0], x: [0, 30, 0], rotate: [0, 180, 360], scale: [1, 1.3, 0.9] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-8 text-center z-10 relative max-w-6xl">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-3xl blur-3xl scale-110" />

          {/* Main Content Card */}
          <div
            className="relative rounded-3xl px-6 py-10 sm:px-10 md:px-16 md:py-16 flex flex-col justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header Name Section */}
            <motion.div
              className="mb-10"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }}
            >
              <div className="text-center">
  {/* Greeting Line */}
  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
    style={{ fontFamily: '"Dancing Script", cursive' }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.8 }}
    whileHover={{
      scale: 1.05,
      textShadow: "0 0 20px rgba(0, 191, 255, 0.5)",
    }}
  >
    <span className="text-gradient-developer">Hey there, I'm</span>
  </motion.h1>

  {/* Full Name Line */}
  <motion.h2
    className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight break-words text-gradient-speaker"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2, delay: 1.2 }}
    whileHover={{
      scale: 1.07,
      textShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
    }}
  >
    PATHMANATHAN KRISHOGARAN
  </motion.h2>
</div>

            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              className="relative w-60 h-60 sm:w-72 sm:h-72 mx-auto mb-8"
              initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.4 }}
            >
              {/* Outer rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #00bfff, #1e90ff, #00ffff, #4169e1)",
                  padding: "4px",
                  borderRadius: "50%",
                  filter: "blur(1px)",
                }}
              >
                <div className="w-full h-full bg-gray-900/80 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute inset-2 rounded-full opacity-40"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 180deg, #ffd700, #ff8c00, #ffa500)",
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full bg-transparent rounded-full" />
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="absolute inset-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                }}
              >
                <img
                  src={profileImage}
                  alt="Pathmanathan Krishogaran"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  style={{ filter: "contrast(1.1) brightness(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-yellow-400/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
              </motion.div>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 191, 255, 0.4), transparent 70%)",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full opacity-20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent 70%)",
                }}
              />
            </motion.div>

            {/* Subtitle with animated icons */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-6 text-xl md:text-2xl mb-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {/* Card 1 */}
              <motion.div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-graduation-cap text-2xl text-blue-400" />
                <span className="text-gray-200 font-semibold">IT Undergraduate</span>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-400/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-code text-2xl text-cyan-400" />
                <span className="text-gray-200 font-semibold">Web Developer</span>
              </motion.div>

              {/* Card 3 */}
              <motion.div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full backdrop-blur-sm border border-yellow-400/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-microphone text-2xl text-yellow-400" />
                <span className="text-gray-200 font-semibold">Public Speaker</span>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="space-y-8"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.p
                className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed"
                style={{
                  background:
                    "linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Transforming ideas into
                <motion.span className="text-gradient-developer font-bold" whileHover={{ scale: 1.1 }}> digital solutions</motion.span>
                and inspiring minds through
                <motion.span className="text-gradient-speaker font-bold" whileHover={{ scale: 1.1 }}> powerful conversations</motion.span>
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  onClick={scrollToPersonalityChoice}
                  className="group relative px-10 py-5 text-white rounded-full text-xl font-bold overflow-hidden transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    boxShadow:
                      "0 10px 30px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow:
                      "0 20px 40px rgba(102, 126, 234, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <motion.span className="relative z-10 flex items-center gap-3">
                    <i className="fas fa-rocket"></i>
                    Discover My Journey
                    <motion.i
                      className="fas fa-arrow-right"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>

                <motion.div
                  className="flex items-center gap-4 text-gray-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 }}
                >
                  <motion.div
                    className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                    animate={{ scaleX: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-lg font-medium">Scroll to explore</span>
                  <motion.i
                    className="fas fa-chevron-down text-xl"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
