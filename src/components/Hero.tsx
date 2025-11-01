import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'

export function Hero() {
  const scrollToPillars = () => {
    document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 glass-card rounded-3xl p-6 flex items-center justify-center">
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
          </div>

          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
            >
              DOBEU
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-foreground/90 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Tech Solutions
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Empowering businesses through innovative design, robust cloud infrastructure, 
              and expert consulting services. Your partner in digital transformation.
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToPillars}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="glass-card glass-card-hover rounded-full p-4 mt-8 transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDown size={32} weight="bold" className="text-accent group-hover:text-accent animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
