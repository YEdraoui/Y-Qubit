'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Zap, Handshake, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'MENA Expertise',
    description: 'Deep understanding of regional market dynamics, regulations, and business culture across Morocco, UAE, and North Africa',
  },
  {
    icon: Brain,
    title: 'AI-First Approach',
    description: 'Cutting-edge AI and machine learning capabilities backed by published research and real-world implementations',
  },
  {
    icon: Zap,
    title: 'Full-Stack Capability',
    description: 'End-to-end service from strategy to implementationAI, software, analytics, and consulting under one roof',
  },
  {
    icon: Handshake,
    title: 'Partnership Model',
    description: 'We work as your technology partner, not just a vendoryour success is our success',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of delivering measurable business impact with 98.7% accuracy in AI solutions',
  },
  {
    icon: Target,
    title: 'Executive-Level Insight',
    description: 'Founded by team combining technical expertise with business acumen and institutional networks',
  },
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
            Why Choose Y-Qubit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading organizations choose us for our unique combination of expertise and results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-start p-6 rounded-xl hover:bg-purple-50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 mb-4">
                <feature.icon className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
