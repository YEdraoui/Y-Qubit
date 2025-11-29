'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Code, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions Development',
    description: 'Custom AI/ML models, computer vision, NLP, and predictive analytics to automate and optimize your operations.',
    href: '/services/ai-solutions',
    color: 'from-purple-600 to-purple-800',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence & Analytics',
    description: 'Transform data into insights with custom dashboards, KPI tracking, and advanced analytics for strategic decision-making.',
    href: '/services/business-intelligence',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Web and mobile applications, APIs, system integration, and chatbot solutions built with modern technology stacks.',
    href: '/services/software-development',
    color: 'from-purple-500 to-blue-600',
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation Consulting',
    description: 'Technology strategy, process automation, and implementation guidance to accelerate your digital transformation journey.',
    href: '/services/consulting',
    color: 'from-blue-500 to-purple-700',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end AI and digital transformation solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full border-2 border-transparent hover:border-purple-200">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More 
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
