import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, CloudArrowUp, ChartLineUp } from '@phosphor-icons/react'
import { PillarCard } from './PillarCard'
import { PillarModal } from './PillarModal'

export type PillarType = 'designs' | 'cloud' | 'consulting'

export interface Pillar {
  id: PillarType
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  color: string
  services: string[]
  features: { title: string; description: string }[]
}

const pillars: Pillar[] = [
  {
    id: 'designs',
    title: 'Dobeu Designs',
    subtitle: 'Creative Excellence',
    description: 'Transform your brand with stunning graphics, modern web design, and comprehensive digital creative services.',
    icon: <Palette size={48} weight="duotone" />,
    color: 'oklch(0.60 0.20 290)',
    services: [
      'Brand Identity & Logo Design',
      'Web Design & UI/UX',
      'Marketing Materials',
      'Social Media Graphics',
      'Illustration & Digital Art',
      'Motion Graphics'
    ],
    features: [
      {
        title: 'Brand Identity',
        description: 'Create memorable visual identities that resonate with your audience and stand out in the market.'
      },
      {
        title: 'Web Design',
        description: 'Modern, responsive websites that combine aesthetics with functionality and user experience.'
      },
      {
        title: 'Digital Graphics',
        description: 'Eye-catching graphics for all your digital marketing and communication needs.'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Dobeu Cloud',
    subtitle: 'Infrastructure & Development',
    description: 'Developer-focused cloud solutions including hosting, storage, consulting, and complete software setup services.',
    icon: <CloudArrowUp size={48} weight="duotone" />,
    color: 'oklch(0.65 0.15 160)',
    services: [
      'Cloud Hosting & Infrastructure',
      'Secure Data Storage Solutions',
      'DevOps & CI/CD Pipeline Setup',
      'Server Configuration & Management',
      'Database Administration',
      'Cloud Migration Services'
    ],
    features: [
      {
        title: 'Scalable Infrastructure',
        description: 'Build and maintain cloud infrastructure that grows with your business needs.'
      },
      {
        title: 'Developer Tools',
        description: 'Complete setup of development environments, version control, and deployment pipelines.'
      },
      {
        title: 'Security & Compliance',
        description: 'Enterprise-grade security measures and compliance standards for your data.'
      }
    ]
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    subtitle: 'Strategic Guidance',
    description: 'Expert technology consulting to help you make informed decisions and optimize your technical operations.',
    icon: <ChartLineUp size={48} weight="duotone" />,
    color: 'oklch(0.70 0.15 40)',
    services: [
      'Technology Strategy & Planning',
      'Digital Transformation',
      'System Architecture Review',
      'Performance Optimization',
      'Security Audits',
      'Training & Knowledge Transfer'
    ],
    features: [
      {
        title: 'Strategic Planning',
        description: 'Develop comprehensive technology roadmaps aligned with your business objectives.'
      },
      {
        title: 'Technical Audits',
        description: 'In-depth analysis of your current systems with actionable improvement recommendations.'
      },
      {
        title: 'Expert Guidance',
        description: 'Ongoing advisory services to navigate complex technical decisions with confidence.'
      }
    ]
  }
]

export function PillarsSection() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null)

  return (
    <>
      <section id="pillars" className="py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Three Pillars
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across design, infrastructure, and consulting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                index={index}
                onClick={() => setSelectedPillar(pillar)}
              />
            ))}
          </div>
        </div>
      </section>

      <PillarModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
      />
    </>
  )
}
