'use client';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: 'Yassir Edraoui',
    role: 'CEO & Co-Founder',
    bio: 'AI Engineer and Big Data Analytics specialist with published IEEE research. Expertise in computer vision, NLP, and predictive analytics. Graduate of Al Akhawayn University.',
    expertise: ['AI/ML Engineering', 'Computer Vision', 'Deep Learning', 'Research & Development'],
    linkedin: '#',
    email: 'yassir@yqubit.ma',
    image: '/team/yassir-edraoui.jpg',
  },
  {
    name: 'Sohaib El Abidi',
    role: 'COO & CFO',
    bio: 'Operations and finance leader with strong analytical skills. Manages business operations, financial planning, and strategic partnerships across MENA region.',
    expertise: ['Operations Management', 'Financial Planning', 'Strategic Partnerships', 'Business Development'],
    linkedin: '#',
    email: 'sohaib@yqubit.ma',
    image: '/team/sohaib-elabidi.jpg',
  },
  {
    name: 'Soukaina Essaidi',
    role: 'Technical Lead',
    bio: 'Full-stack developer and technical architect. Leads software development projects and ensures technical excellence across all deliverables.',
    expertise: ['Full-Stack Development', 'System Architecture', 'Project Management', 'Technical Leadership'],
    linkedin: '#',
    email: 'soukaina@yqubit.ma',
    image: '/team/soukaina-essaidi.jpg',
  },
  {
    name: 'Adam Rahda',
    role: 'Head of Business Development',
    bio: 'Business development expert with international network. Drives client acquisition and partnership development across Morocco, UAE, and MENA.',
    expertise: ['Business Development', 'Client Relations', 'International Partnerships', 'Market Expansion'],
    linkedin: '#',
    email: 'adam@yqubit.ma',
    image: '/team/adam-rahda.jpg',
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-violet-700 via-fuchsia-700 to-pink-700 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse team combining technical expertise, business acumen, and regional knowledge
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="group bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-fuchsia-200"
              >
                {/* Photo & Header */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-fuchsia-400 to-pink-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=96&background=8B5CF6&color=fff&bold=true`;
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold font-heading text-gray-900 mb-1">{member.name}</h2>
                    <p className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-semibold mb-3">{member.role}</p>
                    <div className="flex space-x-3">
                      <a href={member.linkedin} className="p-2 bg-white rounded-lg hover:bg-gradient-to-br hover:from-violet-100 hover:to-pink-100 transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <Linkedin className="h-5 w-5 text-violet-600" />
                      </a>
                      <a href={`mailto:${member.email}`} className="p-2 bg-white rounded-lg hover:bg-gradient-to-br hover:from-violet-100 hover:to-pink-100 transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <Mail className="h-5 w-5 text-fuchsia-600" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{member.bio}</p>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Expertise:</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-fuchsia-300 hover:shadow-sm transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(217, 70, 239, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-200 mb-8">
            We're always looking for talented individuals to join our mission
          </p>
          <Link href="/contact">
            <button className="bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-violet-50 hover:to-pink-50 hover:scale-105 transition-all duration-300 shadow-lg">
              View Open Positions
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
