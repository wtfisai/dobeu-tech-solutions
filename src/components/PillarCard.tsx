import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { Pillar } from './PillarsSection'

interface PillarCardProps {
  pillar: Pillar
  index: number
  onClick: () => void
}

export function PillarCard({ pillar, index, onClick }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card glass-card-hover rounded-3xl p-8 cursor-pointer transition-all duration-300 group"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col h-full">
        <div 
          className="glass-card rounded-2xl p-4 w-fit mb-6 transition-all duration-300"
          style={{ 
            color: pillar.color,
            boxShadow: `0 8px 32px ${pillar.color}40`
          }}
        >
          {pillar.icon}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {pillar.title}
        </h3>
        
        <p className="text-lg text-accent font-semibold mb-4 tracking-wide">
          {pillar.subtitle}
        </p>

        <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
          {pillar.description}
        </p>

        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}
