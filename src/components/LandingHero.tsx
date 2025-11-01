import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'

export function LandingHero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-10"
        >
          <motion.div 
            className="w-28 h-28 md:w-36 md:h-36 glass-card rounded-2xl p-6 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
              <path d="M40 40 L40 160 L70 160 L70 70 L130 70 C155 70 175 90 175 115 C175 140 155 160 130 160 L100 160" 
                    stroke="currentColor" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary" />
              <path d="M55 55 L55 145 L115 145 C135 145 150 130 150 110 C150 90 135 75 115 75 L85 75" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-accent" />
            </svg>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              DOBEU
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Tech Solutions
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl"
          >
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              Empowering businesses through innovative design, robust cloud infrastructure, 
              and expert consulting services. Your partner in digital transformation.
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToPricing}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card glass-card-hover rounded-full p-3 md:p-4 mt-6 transition-all duration-200 cursor-pointer group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDown size={28} weight="bold" className="text-accent" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
