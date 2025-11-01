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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/40" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 glass-card rounded-full p-2 hover:bg-white/20 transition-colors"
            >
              <X size={24} weight="bold" className="text-foreground" />
            </button>

            <div className="flex items-start gap-6 mb-8">
              <div 
                className="glass-card rounded-2xl p-4 transition-all duration-300"
                style={{ 
                  color: pillar.color,
                  boxShadow: `0 8px 32px ${pillar.color}40`
                }}
              >
                {pillar.icon}
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h2>
                <p className="text-xl text-accent font-semibold tracking-wide">
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {pillar.description}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pillar.services.map((service, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-4 flex items-start gap-3"
                  >
                    <Check 
                      size={24} 
                      weight="bold" 
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: pillar.color }}
                    />
                    <span className="text-foreground/90">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Features</h3>
              <div className="space-y-4">
                {pillar.features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-6"
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="flex-1 text-lg font-semibold"
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
                className="flex-1 text-lg font-semibold glass-card border-white/30 hover:bg-white/10"
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
