import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
              Y-Qubit
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              AI-Powered Digital Transformation
            </p>
            <p className="text-sm text-gray-400">
              Transforming businesses across MENA with cutting-edge AI solutions
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-solutions" className="text-gray-400 hover:text-violet-400 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/business-intelligence" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-violet-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:yqubitmorroco@gmail.com" className="flex items-center text-gray-400 hover:text-violet-400 transition-colors group">
                  <Mail className="h-5 w-5 mr-2 text-violet-500 group-hover:text-violet-400" />
                  <span className="text-sm">yqubitmorroco@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+212707839443" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors group">
                  <Phone className="h-5 w-5 mr-2 text-purple-500 group-hover:text-purple-400" />
                  <span className="text-sm">+212 707 839 443</span>
                </a>
              </li>
              <li>
                <div className="flex items-center text-gray-400 group">
                  <MapPin className="h-5 w-5 mr-2 text-fuchsia-500" />
                  <span className="text-sm">Marrakech, Morocco</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
             2024 Y-Qubit Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
