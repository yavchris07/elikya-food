// components/Hero.tsx
"use client";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("./hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative container-custom text-white z-10 max-sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="heading-1 mb-6">
            Transforming Africa&apos;s Food Future — From Farm to Table, No
            Waste
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Elikya Foods connects smallholder farmers to urban markets in the
            DRC, slashing post-harvest losses, boosting incomes, and delivering
            fresh, high-quality produce and protein to growing cities like
            Kinshasa.
          </p>

          <p className="text-lg mb-12 text-secondary font-semibold">
            Building resilient supply chains for healthier communities and
            sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/invest-partner"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all transform hover:scale-105 border border-white"
            >
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/invest-partner#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 transition-all"
            >
              Invest in Impact — Contact Us
            </Link>
          </div>

          {/* Stats Icons */}
          <div className="flex gap-8 mt-16">
            <div className="flex items-center gap-2 max-sm:flex flex-col">
              <Leaf className="h-6 w-6 text-secondary" />
              <span className="max-sm:text-[12px]">40-50% Loss Reduction</span>
            </div>
            <div className="flex items-center gap-2 max-sm:flex flex-col">
              <Users className="h-6 w-6 text-secondary" />
              <span className="max-sm:text-[12px]">1000+ Farmers</span>
            </div>
            <div className="flex items-center gap-2 max-sm:flex flex-col">
              <Truck className="h-6 w-6 text-secondary" />
              <span className="max-sm:text-[12px]">Cold Chain Enabled</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
