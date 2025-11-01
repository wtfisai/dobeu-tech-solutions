import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from '@phosphor-icons/react'
import { Pillar } from './PillarsSection'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface PillarModalProps {
  pillar: Pillar | null
  onClose: () => void
}

export function PillarModal({ pillar, onClose }: PillarModalProps) {
  if (!pillar) return null

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {pillar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-foreground/20" />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-2xl p-6 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 glass-card rounded-full p-2 hover:bg-muted transition-colors duration-200"
            >
              <X size={20} weight="bold" className="text-foreground" />
            </button>

            <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8 pr-8">
              <div 
                className="glass-card rounded-xl p-3 transition-all duration-200"
                style={{ 
                  color: pillar.color,
                  borderColor: pillar.color,
                  borderWidth: '1px'
                }}
              >
                {pillar.icon}
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h2>
                <p className="text-lg md:text-xl text-accent font-semibold tracking-wide">
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-6 md:mb-8">
              {pillar.description}
            </p>

            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pillar.services.map((service, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-4 flex items-start gap-3"
                  >
                    <Check 
                      size={20} 
                      weight="bold" 
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: pillar.color }}
                    />
                    <span className="text-sm md:text-base text-foreground/90">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Key Features</h3>
              <div className="space-y-4">
                {pillar.features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 md:p-6"
                  >
                    <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="flex-1 text-base font-semibold transition-all duration-200"
                style={{ 
                  background: pillar.color,
                  color: 'white'
                }}
              >
                Get Started
              </Button>
              <Button
                onClick={onClose}
                size="lg"
                variant="outline"
                className="flex-1 text-base font-semibold glass-card border-border hover:bg-muted transition-all duration-200"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
