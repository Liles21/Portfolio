import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <p>&copy; {currentYear} LILES Portfolio. All rights reserved.</p>
        <p>Designed & Built with <span className="heart">❤️</span> using React & Framer Motion</p>
      </div>
    </motion.footer>
  )
}

export default Footer
