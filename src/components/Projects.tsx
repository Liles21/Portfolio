import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#87c6eb',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management with drag-and-drop functionality',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      color: '#00ff88',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with real-time data and location services',
      tags: ['React', 'API Integration', 'Charts'],
      color: '#00d4ff',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header" style={{ borderColor: project.color }}>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: project.color, borderColor: project.color }}
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
