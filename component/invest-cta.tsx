// components/InvestCTA.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Download, Calendar, Mail } from 'lucide-react'

const stats = [
  { icon: Users, value: '110M+', label: 'DRC Population' },
  { icon: TrendingUp, value: '$500M+', label: 'Annual Post-Harvest Losses' },
  { icon: Globe, value: 'Doubling', label: 'Population by 2050' },
]

export default function InvestCTA() {
  return (
    <section className="section-padding bg-linear-to-b from-accent to-white">
      <div className="container-custom w-[70%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-primary mb-4">Massive Opportunity — Local to Global</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in building a more sustainable food future for Africa and beyond
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Left Column - We Welcome */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="heading-3 mb-6">We welcome:</h3>
            <ul className="space-y-4">
              {[
                'Patient capital & recoverable grants',
                'Impact investors focused on food security, agriculture, and climate resilience',
                'Strategic partners (hotels, restaurant chains, grocery groups, development organizations)'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Partnership Opportunities */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="heading-3 mb-6">Partnership Opportunities</h3>
            <div className="space-y-4">
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-bold text-primary mb-2">Buyers</h4>
                <p className="text-muted-foreground">Hotels, restaurants, supermarkets seeking reliable, high-quality supply</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-bold text-primary mb-2">Farmers</h4>
                <p className="text-muted-foreground">Join our network for better prices, storage, training, and market access</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-bold text-primary mb-2">Corporates & Foundations</h4>
                <p className="text-muted-foreground">Collaborate on nutrition, sustainability, or farmer support initiatives</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="heading-3 mb-8">Ready to build a more sustainable food future together?</h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Pitch Deck
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us to Invest
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}