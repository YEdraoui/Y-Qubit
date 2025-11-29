import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
              Building the Future of AI in MENA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2024, Y-Qubit Solutions combines cutting-edge AI expertise with deep regional knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Who We Are</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Y-Qubit Solutions is a MENA-focused AI and digital transformation consultancy driven by a mission to empower institutions and enterprises with cutting-edge technology solutions. Based in Morocco with reach across North Africa and the Middle East, we combine deep technical expertise in artificial intelligence with executive-level operational knowledge to deliver transformative results.
            </p>
            <p>
              Our founding team brings together expertise in AI engineering, business operations, software development, and international business development. We understand both the technical complexities of AI implementation and the strategic realities of business transformationenabling us to bridge the gap between innovation and execution.
            </p>
            <p>
              At Y-Qubit, we believe in partnership over transactions. We work closely with our clients to understand their unique challenges, co-create tailored solutions, and ensure sustainable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="inline-flex p-3 rounded-lg bg-purple-100 mb-4">
                <Target className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver AI-powered digital transformation solutions for institutions and enterprises across the MENA region, combining deep technical expertise with executive-level operational knowledge.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                <Eye className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Become the leading AI and business analytics consultancy in Morocco and expand across North Africa and the Middle East within 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 mb-4">
                <Award className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Excellence in Execution</h3>
              <p className="text-gray-600">We deliver solutions that work, on time and within scope</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
                <Heart className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Deep Partnership</h3>
              <p className="text-gray-600">Your success is our success</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 mb-4">
                <Target className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Innovation with Purpose</h3>
              <p className="text-gray-600">Technology that solves real business problems</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
                <Eye className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Regional Expertise</h3>
              <p className="text-gray-600">Deep understanding of MENA market dynamics</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
