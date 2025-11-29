import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Code, Smartphone, Server, MessageSquare, CheckCircle } from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex p-3 rounded-lg bg-white/20 backdrop-blur-sm mb-6">
              <Code className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-100">
              Build solutions tailored to your business with modern web apps, mobile apps, APIs, and chatbot integration
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">What We Build</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <Code className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Web Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Customer portals and dashboards
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Internal management systems
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  E-commerce platforms with payment integration
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Booking and reservation systems
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <Smartphone className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Mobile Applications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  iOS and Android native apps
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Cross-platform development (React Native)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Progressive Web Apps (PWA)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Offline-first capabilities
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <Server className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">API Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  RESTful API design and development
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  GraphQL APIs for flexible data queries
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Third-party integrations (payment, CRM, etc.)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Microservices architecture
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <MessageSquare className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Chatbot Integration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  WhatsApp Business API integration
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Website chat widgets with AI
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Facebook Messenger bots
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  24/7 automated customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">Our Technology Stack</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li> React & Next.js</li>
                <li> Vue.js</li>
                <li> TypeScript</li>
                <li> Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li> Node.js & Express</li>
                <li> Python & FastAPI</li>
                <li> PostgreSQL</li>
                <li> MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Mobile</h3>
              <ul className="space-y-2 text-gray-600">
                <li> React Native</li>
                <li> Flutter</li>
                <li> Swift (iOS)</li>
                <li> Kotlin (Android)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Cloud</h3>
              <ul className="space-y-2 text-gray-600">
                <li> AWS</li>
                <li> Azure</li>
                <li> Google Cloud</li>
                <li> Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">Our Development Process</h2>
          
          <div className="grid md:grid-cols-6 gap-8">
            {[
              { num: '1', title: 'Requirements', desc: 'Detailed specification' },
              { num: '2', title: 'Design', desc: 'UI/UX wireframes' },
              { num: '3', title: 'Development', desc: 'Agile 2-week sprints' },
              { num: '4', title: 'Testing', desc: 'QA & validation' },
              { num: '5', title: 'Deployment', desc: 'Smooth launch' },
              { num: '6', title: 'Support', desc: 'Ongoing maintenance' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white text-xl font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-animated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Build Your Solution
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss your project and create a custom solution that fits your needs
          </p>
          <a href="/contact">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Discuss Your Project
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
