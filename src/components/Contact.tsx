import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:your@email.com', label: 'Email' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
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
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Get In Touch
        </motion.h2>

        <motion.p variants={itemVariants} className="contact-description">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </motion.p>

        <motion.a
          href="mailto:your@email.com"
          variants={itemVariants}
          className="contact-email"
        >
          your.email@example.com
        </motion.a>

        <motion.div
          className="social-links"
          variants={itemVariants}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <Icon />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
