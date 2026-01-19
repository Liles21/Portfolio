import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillsCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'REST APIs'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skillsCategories.map((category) => (
            <motion.div
              key={category.category}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skill-badge"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
