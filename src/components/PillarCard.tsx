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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover rounded-2xl p-8 cursor-pointer transition-all duration-200 group"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col h-full">
        <div 
          className="glass-card rounded-xl p-3 w-fit mb-6 transition-all duration-200 group-hover:scale-105"
          style={{ 
            color: pillar.color,
            borderColor: pillar.color,
            borderWidth: '1px'
          }}
        >
          {pillar.icon}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {pillar.title}
        </h3>
        
        <p className="text-base text-accent font-semibold mb-4 tracking-wide">
          {pillar.subtitle}
        </p>

        <p className="text-foreground/70 leading-relaxed mb-6 flex-grow text-sm md:text-base">
          {pillar.description}
        </p>

        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-200">
          <span>Learn More</span>
          <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}
