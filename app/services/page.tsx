import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Brain, BarChart3, Code, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions Development',
    description: 'Custom AI/ML models, computer vision, NLP, and predictive analytics to automate and optimize your operations.',
    features: [
      'Custom AI/ML Models',
      'Computer Vision Systems',
      'Natural Language Processing',
      'Predictive Analytics',
      'Deep Learning Solutions',
    ],
    href: '/services/ai-solutions',
    color: 'from-purple-600 to-purple-800',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence & Analytics',
    description: 'Transform data into insights with custom dashboards, KPI tracking, and advanced analytics.',
    features: [
      'Custom Dashboards',
      'Data Warehousing',
      'KPI Tracking',
      'Advanced Analytics',
      'Automated Reporting',
    ],
    href: '/services/business-intelligence',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Web and mobile applications, APIs, system integration, and chatbot solutions.',
    features: [
      'Web Applications',
      'Mobile Apps (iOS/Android)',
      'API Development',
      'System Integration',
      'WhatsApp Chatbot Integration',
    ],
    href: '/services/software-development',
    color: 'from-purple-500 to-blue-600',
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation Consulting',
    description: 'Technology strategy, process automation, and implementation guidance.',
    features: [
      'Digital Maturity Assessment',
      'Technology Strategy',
      'Process Automation',
      'Change Management',
      'Implementation Support',
    ],
    href: '/services/consulting',
    color: 'from-blue-500 to-purple-700',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and digital transformation solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <service.icon className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <ArrowRight className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-12 text-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <service.icon className="h-32 w-32 mx-auto mb-6 opacity-20" />
                    <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                    <p className="text-gray-100 mb-6">Book a free consultation to discuss your project</p>
                    <Link href="/contact">
                      <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
