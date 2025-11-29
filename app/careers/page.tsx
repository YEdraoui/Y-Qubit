'use client';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Briefcase, MapPin, Clock, Send, Upload } from 'lucide-react';
import { useState } from 'react';

const openPositions = [
  {
    title: 'Senior AI Engineer',
    location: 'Marrakech, Morocco / Remote',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge AI solutions including computer vision, NLP, and predictive analytics.',
    requirements: [
      '5+ years experience in AI/ML engineering',
      'Strong expertise in PyTorch, TensorFlow, or similar frameworks',
      'Experience with computer vision and NLP',
      'Published research or significant project portfolio',
    ],
  },
  {
    title: 'Full-Stack Developer',
    location: 'Dubai, UAE / Hybrid',
    type: 'Full-time',
    description: 'Build modern web applications using Next.js, React, and Node.js for enterprise clients across MENA.',
    requirements: [
      '3+ years full-stack development experience',
      'Proficiency in React, Next.js, TypeScript',
      'Experience with Node.js, PostgreSQL, MongoDB',
      'Strong understanding of REST APIs and cloud platforms',
    ],
  },
  {
    title: 'Business Development Manager',
    location: 'Morocco / UAE',
    type: 'Full-time',
    description: 'Drive growth by identifying new business opportunities and building strategic partnerships across the MENA region.',
    requirements: [
      '4+ years in business development or sales',
      'Strong network in MENA tech ecosystem',
      'Experience in AI/tech consulting preferred',
      'Excellent communication in English, Arabic, and/or French',
    ],
  },
  {
    title: 'Data Analyst',
    location: 'Remote',
    type: 'Full-time / Part-time',
    description: 'Analyze complex datasets and create actionable insights through business intelligence dashboards and reports.',
    requirements: [
      '2+ years experience in data analysis',
      'Proficiency in SQL, Python, and BI tools (Power BI, Tableau)',
      'Strong analytical and problem-solving skills',
      'Experience with statistical modeling preferred',
    ],
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    linkedIn: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert('Thank you for your application! We will review your submission and contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      linkedIn: '',
      message: '',
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-violet-700 via-fuchsia-700 to-pink-700 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us transform businesses across MENA with cutting-edge AI solutions
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-2xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Projects</h3>
              <p className="text-gray-600">Work on innovative AI solutions that make real impact</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <MapPin className="h-8 w-8 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Location</h3>
              <p className="text-gray-600">Remote-friendly with offices in Morocco and UAE</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-violet-100 rounded-2xl flex items-center justify-center">
                <Clock className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth & Learning</h3>
              <p className="text-gray-600">Continuous professional development and mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">Open Positions</h2>
          <div className="grid gap-6 mb-16">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-violet-600" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-fuchsia-600" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="text-violet-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#apply" className="inline-flex items-center text-violet-600 hover:text-fuchsia-600 font-semibold transition-colors">
                  Apply Now
                  <Send className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Apply Now</h2>
            <p className="text-gray-600">
              Submit your application and we'll get back to you within 5 business days
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  placeholder="+212 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Position Applying For *
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                >
                  <option value="">Select a position</option>
                  {openPositions.map((pos, i) => (
                    <option key={i} value={pos.title}>{pos.title}</option>
                  ))}
                  <option value="other">Other / General Application</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                value={formData.linkedIn}
                onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Resume / CV *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-500 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">
                  <span className="text-violet-600 font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cover Letter / Additional Information
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors resize-none"
                placeholder="Tell us why you'd be a great fit..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
            >
              Submit Application
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
