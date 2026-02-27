// components/SolutionImpact.tsx
'use client'
import { motion } from 'framer-motion'
import { Package, Snowflake, Truck, TrendingUp, Users, Globe } from 'lucide-react'

const steps = [
  { icon: Package, title: 'Source', description: 'Partner with trusted smallholder farmers to procure high-quality fresh produce and protein' },
  { icon: Snowflake, title: 'Handle & Store', description: 'Professional post-harvest handling, packaging, and cold storage to preserve freshness' },
  { icon: Truck, title: 'Deliver', description: 'Reliable, tracked, on-time delivery to hotels, restaurants, grocery stores, and households' },
]

const impacts = [
  { icon: TrendingUp, title: 'Nutrition', description: 'More fresh, safe food reaches families and businesses', color: 'text-green-600' },
  { icon: Users, title: 'Farmers', description: 'Higher, more predictable incomes and better growing practices', color: 'text-blue-600' },
  { icon: Globe, title: 'Environment', description: 'Less wasted land, water, energy, and emissions', color: 'text-emerald-600' },
]

export default function SolutionImpact() {
  return (
    <section className="section-padding bg-green-700">
      <div className="container-custom w-[70%] mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-primary mb-4 text-[28px] max-sm:text-[22px]">Our Solution</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-[21px] max-sm:text-[16px]">
            We bridge the broken food supply chain with a simple, scalable model
          </p>
        </motion.div>

        {/* Solution Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-accent rounded-2xl hover:shadow-xl transition-shadow group"
            >
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-[21px] group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
              </div>
              <step.icon className="h-12 w-12 text-primary mb-4 mt-4" />
              <h3 className="text-xl font-bold mb-3 text-[21px] max-sm:text-[16px]">{step.title}</h3>
              <p className="text-muted-foreground text-[21px] max-sm:text-[16px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="p-8 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl">
            <h3 className="heading-3 mb-6 text-[28px] max-sm:text-[22px]">Key Differentiators</h3>
            <ul className="space-y-4">
              {[
                'Fair, transparent prices + immediate cash payments for farmers',
                'Cold chain infrastructure for superior quality and longer shelf life',
                'Technical support, quality inputs, and training for farmers',
                'Consistent supply and flexible terms (including credit) for buyers'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-[21px] max-sm:text-[16px]">✓</span>
                  <span className='text-[21px] max-sm:text-[16px]'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-green-900 rounded-2xl">
            <h3 className="heading-3 mb-6 text-[28px] max-sm:text-[22px]">What We Solve</h3>
            <ul className="space-y-4 text-white">
              {[
                '40–50% post-harvest loss in the DRC',
                'Unreliable quality and availability for urban buyers',
                'Low and unstable incomes for smallholder farmers'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white font-bold text-[21px] max-sm:text-[16px]">⚠</span>
                  <span className="font-medium text-[21px] max-sm:text-[16px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-3 text-center mb-12 text-[28px] max-sm:text-[22px]">Our Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 bg-accent rounded-full mb-4">
                  <impact.icon className={`h-8 w-8 ${impact.color}`} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[21px] max-sm:text-[16px]">{impact.title}</h4>
                <p className="text-muted-foreground text-[21px] max-sm:text-[16px]">{impact.description}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-[21px] font-medium mt-12 p-6 bg-accent rounded-2xl">
            Every kilogram we deliver creates measurable change for people and the planet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}