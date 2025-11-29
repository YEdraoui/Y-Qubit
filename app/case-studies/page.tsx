import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Brain, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'diabetic-retinopathy-ai',
    title: 'AI-Powered Diabetic Retinopathy Detection System',
    category: 'Healthcare AI',
    client: 'Medical Research Institution',
    challenge: 'Need for accurate, automated screening of diabetic retinopathy to reduce ophthalmologist workload and enable early detection.',
    solution: 'Developed deep learning system using ConvNeXt-Tiny + Llama 3.2-Vision with RAG, trained on 59,621 fundus images across 13 conditions.',
    results: [
      '98.7% AUROC for diabetic retinopathy detection',
      '83.5% average accuracy across 13 retinal conditions',
      '60%+ reduction in manual screening time',
      'Clinical report generation in real-time',
    ],
    tech: ['PyTorch', 'Computer Vision', 'Deep Learning', 'RAG', 'Next.js'],
    metrics: { accuracy: '98.7%', time: '60%+', conditions: '13' },
    icon: Brain,
    gradient: 'from-purple-600 to-blue-700',
  },
  {
    id: 'retail-analytics-dashboard',
    title: 'Real-Time Retail Analytics Dashboard',
    category: 'Business Intelligence',
    client: 'Multi-Store Retail Chain',
    challenge: 'Fragmented data across 15+ stores with no unified view of sales, inventory, and customer behavior.',
    solution: 'Built comprehensive BI dashboard integrating POS systems, inventory databases, and customer data with automated reporting.',
    results: [
      '20+ hours/week saved on manual reporting',
      'Real-time visibility across all locations',
      '25% improvement in inventory forecasting',
      'Automated alerts for low stock and anomalies',
    ],
    tech: ['Power BI', 'SQL', 'Python', 'Azure', 'Power Automate'],
    metrics: { stores: '15+', savings: '20hrs', improvement: '25%' },
    icon: TrendingUp,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'whatsapp-chatbot-integration',
    title: 'WhatsApp Business Chatbot for Customer Support',
    category: 'Software Development',
    client: 'E-commerce Platform',
    challenge: 'High volume of repetitive customer inquiries overwhelming support team, 24/7 coverage needed.',
    solution: 'Implemented AI-powered WhatsApp chatbot with NLP for order tracking, FAQs, and seamless handoff to human agents.',
    results: [
      '60% increase in customer engagement',
      '40% reduction in support ticket volume',
      '24/7 instant response availability',
      '85% customer satisfaction rating',
    ],
    tech: ['WhatsApp Business API', 'Node.js', 'OpenAI', 'MongoDB', 'FastAPI'],
    metrics: { engagement: '60%', tickets: '-40%', satisfaction: '85%' },
    icon: Zap,
    gradient: 'from-cyan-600 to-purple-600',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-purple-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world success stories showcasing measurable business impact
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-sm font-semibold text-purple-700 mb-4">
                    {study.category}
                  </div>
                  
                  <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start text-gray-700">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/case-studies/${study.id}`}>
                    <button className="inline-flex items-center text-purple-600 hover:text-cyan-600 font-semibold group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Metrics Card */}
                <div className={`bg-gradient-to-br ${study.gradient} rounded-2xl p-12 text-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <study.icon className="h-16 w-16 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-8">Key Metrics</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-3xl font-bold mb-2">{value}</div>
                        <div className="text-sm text-gray-200 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-700 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss how we can deliver similar results for your business
          </p>
          <a href="/contact">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Project
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
