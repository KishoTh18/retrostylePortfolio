import { motion } from "framer-motion";

export default function DeveloperPortfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management System", 
      description: "PHP & MySQL based project management tool with real-time collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["PHP", "MySQL", "JavaScript"],
    },
    {
      title: "Personal Finance App",
      description: "React Native application for expense tracking and budget management.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Express", "PostgreSQL"],
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
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-developer mb-6">Development Portfolio</h2>
        <p className="text-xl text-gray-300">Building digital solutions with modern technologies</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="glassmorphism rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4" 
            />
            <h3 className="text-2xl font-bold text-electric mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-electric bg-opacity-20 text-electric px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button className="bg-gradient-developer text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
