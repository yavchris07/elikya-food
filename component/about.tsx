// components/About.tsx
'use client'
import { motion } from 'framer-motion'
import { Shield, Heart, Zap, Globe, Award } from 'lucide-react'
import Image from "next/image";

const values = [
  { icon: Shield, name: 'Integrity' },
  { icon: Heart, name: 'Passion' },
  { icon: Zap, name: 'Responsibility' },
  { icon: Globe, name: 'Impact' },
  { icon: Award, name: 'Creativity' },
]

export default function About() {
  return (
    // bg-linear-to-b from-white to-accent
    <section className="section-padding bg-white">
      <div className="container-custom w-[70%] mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 text-primary mb-4 text-green-800">Who We Are</h2>
          <p className="text-xl text-gray-500">
            Elikya Foods is a mission-driven agrifood company based in Kinshasa, 
            Democratic Republic of Congo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-3 mb-6 text-green-800">Our Approach</h3>
            <ul className="space-y-4">
              {[
                'Reduce massive post-harvest losses (currently 40–50% of produce)',
                'Deliver consistent, high-quality fresh produce and protein to urban consumers',
                'Increase farmer incomes through fair pricing and technical support'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-500 font-bold">•</span>
                  <span className='text-gray-500'>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-bold text-green-800 mb-2">Our Mission</h4>
              <p className="text-gray-500">
                Meet the growing demand for safe, nutritious food in Africa&apos;s fast-growing cities 
                while improving farmer livelihoods and eliminating waste.
              </p>
            </div>

            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-bold text-green-800 mb-2">Our Vision</h4>
              <p className="text-gray-500">
                A thriving DRC agrifood sector where quality nutrition is accessible locally, 
                smallholders prosper, and Congolese fresh produce earns a respected place in 
                global supply chains — proving that African agriculture can feed its people 
                and compete worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/hero.jpg" 
                alt="Elikya Foods Team"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-3 mb-8 text-green-800">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <value.icon className="h-8 w-8 text-green-800" />
                </div>
                <span className="font-semibold text-gray-500">{value.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sustainability Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-primary text-white rounded-2xl text-center"
        >
          <h3 className="heading-3 mb-4">Sustainability Commitment</h3>
          <p className="text-lg max-w-2xl mx-auto">
            We reduce food waste, promote healthier soils, minimize chemical use, 
            and optimize water and energy across our operations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}