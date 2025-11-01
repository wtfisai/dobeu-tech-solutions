import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatCircleDots } from '@phosphor-icons/react'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsVisible(heroBottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToContact}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 glass-card rounded-full p-3 md:p-4 transition-all duration-200 z-40 group shadow-lg hover:shadow-xl"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChatCircleDots 
            size={28} 
            weight="duotone" 
            className="text-accent transition-colors"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
