import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Lightbulb, Target, Cog, Users, CheckCircle } from 'lucide-react';

export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-700 via-purple-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex p-3 rounded-lg bg-white/20 backdrop-blur-sm mb-6">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Digital Transformation Consulting
            </h1>
            <p className="text-xl text-gray-100">
              Navigate your digital transformation journey with strategic guidance from assessment to implementation
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">Our Consulting Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: 'Digital Maturity Assessment',
                items: [
                  'Current state analysis and gap identification',
                  'Benchmarking against industry standards',
                  'Readiness evaluation for transformation',
                  'Comprehensive assessment report with recommendations',
                ],
              },
              {
                icon: Lightbulb,
                title: 'Technology Strategy',
                items: [
                  'Long-term technology roadmap (3-5 years)',
                  'Vendor selection and evaluation',
                  'Budget planning and ROI analysis',
                  'Risk assessment and mitigation strategies',
                ],
              },
              {
                icon: Cog,
                title: 'Process Automation',
                items: [
                  'Business process mapping and analysis',
                  'Automation opportunity identification',
                  'Tool selection and implementation planning',
                  'Workflow optimization and redesign',
                ],
              },
              {
                icon: Users,
                title: 'Change Management',
                items: [
                  'Stakeholder engagement and communication',
                  'Training program development and delivery',
                  'Adoption tracking and success metrics',
                  'Cultural transformation support',
                ],
              },
            ].map((service) => (
              <div key={service.title} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                  <service.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">Our Consulting Approach</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: 'Discovery', duration: '2-4 weeks', desc: 'Stakeholder interviews, current state documentation, pain point identification' },
              { phase: 'Strategy', duration: '2-3 weeks', desc: 'Solution design, roadmap development, business case creation' },
              { phase: 'Planning', duration: '1-2 weeks', desc: 'Implementation plan, resource allocation, timeline and milestones' },
              { phase: 'Execution', duration: 'Varies', desc: 'Project oversight, progress tracking, stakeholder communication' },
            ].map((phase, idx) => (
              <div key={phase.phase} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-purple-600 font-bold mb-2">Phase {idx + 1}</div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{phase.phase}</h3>
                <div className="text-sm text-purple-600 font-semibold mb-3">{phase.duration}</div>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-8 text-center">Who Benefits from Our Consulting</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our consulting services are designed for organizations at any stage of their digital transformation journey
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Starting Out', desc: 'Organizations beginning digital transformation and need strategic guidance' },
              { title: 'Scaling Up', desc: 'Companies expanding technology capabilities and need optimization' },
              { title: 'Modernizing', desc: 'Institutions updating legacy systems and processes' },
              { title: 'Evaluating AI', desc: 'Businesses exploring AI adoption and need feasibility assessment' },
            ].map((audience) => (
              <div key={audience.title} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">What You'll Receive</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Digital Maturity Assessment Report',
              'Technology Strategy Document (3-5 years)',
              'Implementation Roadmap with Milestones',
              'Business Case & ROI Analysis',
              'Vendor Evaluation & Recommendations',
              'Training Materials & Documentation',
              'Change Management Plan',
              'Risk Mitigation Strategies',
              'Executive Presentation Deck',
            ].map((deliverable) => (
              <div key={deliverable} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Start Your Transformation
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Book a strategy session and get expert guidance on your digital transformation journey
          </p>
          <a href="/contact">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Strategy Session
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
