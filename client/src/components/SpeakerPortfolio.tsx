import { motion } from "framer-motion";

export default function SpeakerPortfolio() {
  const speakingEngagements = [
    {
      title: "University Student Summit 2024",
      description: '"Mindset Mastery: From Student to Success" - Keynote for 500+ students on personal development and career preparation.',
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date: "March 2024 • University of Colombo",
    },
    {
      title: "Tech Conference Workshop",
      description: '"Building Confidence in Tech Career" - Interactive workshop focusing on imposter syndrome and professional growth.',
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date: "January 2024 • TechColombo Conference",
    },
  ];

  const speakingTopics = [
    {
      icon: "fas fa-brain",
      title: "Mindset Development",
      description: "Growth mindset, resilience, and mental frameworks for success",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Student Success",
      description: "Academic excellence, career preparation, and life skills",
    },
    {
      icon: "fas fa-rocket",
      title: "Personal Development",
      description: "Self-awareness, goal setting, and continuous improvement",
    },
    {
      icon: "fas fa-users",
      title: "Leadership",
      description: "Building influence, team dynamics, and vision creation",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "Creative thinking, problem solving, and entrepreneurship",
    },
    {
      icon: "fas fa-balance-scale",
      title: "Work-Life Balance",
      description: "Productivity, stress management, and holistic success",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-speaker mb-6">Speaking Portfolio</h2>
        <p className="text-xl text-gray-300">Inspiring minds and transforming lives through powerful conversations</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {speakingEngagements.map((engagement, index) => (
          <motion.div 
            key={index}
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img 
              src={engagement.image} 
              alt={engagement.title}
              className="w-full h-48 object-cover rounded-xl mb-6" 
            />
            <h3 className="text-2xl font-bold text-golden mb-3">{engagement.title}</h3>
            <p className="text-gray-300 mb-4">{engagement.description}</p>
            <div className="flex items-center text-golden">
              <i className="fas fa-calendar mr-2"></i>
              <span>{engagement.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Speaking Topics */}
      <motion.div 
        className="glassmorphism rounded-3xl p-8 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-gradient-speaker mb-8 text-center">Speaking Topics</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakingTopics.map((topic, index) => (
            <motion.div 
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <i className={`${topic.icon} text-4xl text-golden mb-4`}></i>
              <h4 className="text-xl font-semibold mb-2">{topic.title}</h4>
              <p className="text-gray-300">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
