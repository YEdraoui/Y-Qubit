import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { BarChart3, Database, LineChart, PieChart, CheckCircle } from 'lucide-react';

export default function BusinessIntelligencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex p-3 rounded-lg bg-white/20 backdrop-blur-sm mb-6">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Business Intelligence & Analytics
            </h1>
            <p className="text-xl text-gray-100">
              Transform data into actionable insights with custom dashboards, KPI tracking, and advanced analytics
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <BarChart3 className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Custom Dashboards</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Real-time KPI monitoring and tracking
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Executive dashboards for leadership teams
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Department-specific views and reports
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Mobile-responsive design for on-the-go access
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <Database className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Data Warehousing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Integration from multiple data sources
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  ETL pipeline development and automation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Data quality assurance and validation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Scalable cloud-based architecture
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <LineChart className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Advanced Analytics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Trend analysis and forecasting
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Cohort and funnel analysis
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Statistical analysis and modeling
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Custom metrics and calculated fields
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <PieChart className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Automated Reporting</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Scheduled report generation and distribution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Email delivery to stakeholders
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  PDF and Excel export capabilities
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Custom report templates and branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BI Platforms */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-8 text-center">BI Platforms We Use</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We work with industry-leading business intelligence platforms to deliver powerful analytics solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Microsoft Power BI</h3>
              <p className="text-gray-600">Enterprise-grade BI with seamless Microsoft integration</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tableau</h3>
              <p className="text-gray-600">Advanced data visualization and interactive analytics</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">Tailored dashboards built with React and modern frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">Benefits of Our BI Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Data-Driven Decisions', desc: 'Make informed choices based on real-time insights' },
              { title: 'Time Savings', desc: 'Eliminate 15+ hours/week of manual reporting' },
              { title: 'Early Warning System', desc: 'Identify opportunities and risks before they escalate' },
              { title: 'Improved Efficiency', desc: 'Streamline operations with automated workflows' },
              { title: 'Goal Tracking', desc: 'Monitor performance against strategic objectives' },
              { title: 'ROI Visibility', desc: 'Track return on investment across all initiatives' },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Visualize Your Data
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Request a demo dashboard and see how we can transform your data into insights
          </p>
          <a href="/contact">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo Dashboard
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
