import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            variants={itemVariants}
            className="about-image"
          >
            <div className="profile-pic-placeholder">
              <img 
                src="/image/profile.jpg" 
                alt="LILES" 
                className="profile-pic"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="about-text"
          >
            <p>
              I'm a passionate developer with a love for creating beautiful and functional web applications. 
              With expertise in modern technologies and frameworks, I bring ideas to life with clean, efficient code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="about-stats"
        >
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
