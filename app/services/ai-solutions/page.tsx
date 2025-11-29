import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Brain, Eye, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex p-3 rounded-lg bg-white/20 backdrop-blur-sm mb-6">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              AI Solutions Development
            </h1>
            <p className="text-xl text-gray-100">
              Custom AI/ML models, computer vision, NLP, and predictive analytics that drive real business impact
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <Brain className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Custom AI/ML Models</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Predictive analytics for forecasting and decision support
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Classification and regression models for data insights
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Anomaly detection for quality control and fraud prevention
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Recommendation engines for personalized experiences
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <Eye className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Computer Vision</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Image classification and object detection systems
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Medical image analysis (98.7% accuracy in DR detection)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Quality control automation for manufacturing
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Facial recognition and identity verification
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <MessageSquare className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Natural Language Processing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Text classification and sentiment analysis
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Chatbots and conversational AI (Arabic & English)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Document processing and information extraction
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Language translation and multilingual support
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Predictive Analytics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Sales forecasting and demand prediction
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Customer churn prediction and retention strategies
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Risk assessment and fraud detection
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Customer behavior modeling and segmentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12 text-center">Our AI Development Process</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Problem Definition', desc: 'Understand your business objective and success metrics' },
              { step: '2', title: 'Data Assessment', desc: 'Evaluate data quality, quantity, and availability' },
              { step: '3', title: 'Model Development', desc: 'Train and optimize AI models with best practices' },
              { step: '4', title: 'Validation & Testing', desc: 'Ensure accuracy, reliability, and performance' },
              { step: '5', title: 'Deployment & Monitoring', desc: 'Launch system and continuously improve' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-800 rounded-3xl p-12 text-white">
            <div className="max-w-3xl">
              <div className="inline-flex px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
                Featured Case Study
              </div>
              <h2 className="text-4xl font-bold font-heading mb-6">
                AI-Powered Diabetic Retinopathy Detection
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Developed a state-of-the-art deep learning system achieving 98.7% accuracy in detecting diabetic retinopathy across 13 retinal conditions.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">98.7%</div>
                  <div className="text-gray-200">DR Detection Accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">59,621</div>
                  <div className="text-gray-200">Training Images</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">13</div>
                  <div className="text-gray-200">Retinal Conditions</div>
                </div>
              </div>
              <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Full Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
            Ready to Implement AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free AI assessment and discover how AI can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Get Free AI Assessment
              </button>
            </a>
            <a href="/services">
              <button className="bg-white text-purple-700 border-2 border-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                View All Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
