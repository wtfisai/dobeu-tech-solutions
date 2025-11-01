import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Check, ArrowRight } from '@phosphor-icons/react'

interface PricingTier {
  id: string
  title: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    id: 'per-project',
    title: 'Per Project',
    description: 'Ideal for one-time projects with clear scope and deliverables',
    features: [
      'Fixed scope projects',
      'Clear deliverables',
      'Flexible timeline',
      'Dedicated project manager',
      'Post-launch support',
      'Quality assurance'
    ],
    cta: 'Start a Project'
  },
  {
    id: 'brand-launch',
    title: 'Complex Brand / Project Launch',
    description: 'Partner in your operations - comprehensive launch support',
    features: [
      'End-to-end brand development',
      'Complete project lifecycle',
      'Integrated team collaboration',
      'Strategic planning & execution',
      'Multi-channel rollout',
      'Ongoing optimization',
      'Priority support'
    ],
    cta: 'Partner With Us',
    popular: true
  },
  {
    id: 'retainer',
    title: "Let's Discuss - Retainer",
    description: 'Custom ongoing partnership tailored to your specific needs',
    features: [
      'Dedicated team resources',
      'Monthly strategic planning',
      'Flexible scope adjustment',
      'Priority access',
      'Continuous optimization',
      'Executive reporting'
    ],
    cta: "Let's Talk"
  }
]

export function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models designed to meet your unique business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card rounded-2xl p-8 transition-all duration-200 relative ${
                tier.popular ? 'ring-2 ring-accent' : ''
              }`}
              whileHover={{ y: -4 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full">
                <h3 className="text-2xl md:text-2xl font-bold text-foreground mb-2">
                  {tier.title}
                </h3>
                
                <p className="text-sm md:text-base text-foreground/70 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        weight="bold" 
                        className="flex-shrink-0 mt-0.5 text-accent"
                      />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className={`w-full text-base font-semibold transition-all duration-200 group ${
                    tier.popular 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight 
                    size={18} 
                    weight="bold" 
                    className="ml-2 group-hover:translate-x-1 transition-transform" 
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Not sure which option is right for you?{' '}
            <button 
              onClick={scrollToContact}
              className="text-accent font-semibold hover:underline"
            >
              Get in touch
            </button>
            {' '}and we'll help you decide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
