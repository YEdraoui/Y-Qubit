'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Y-Qubit transformed our data infrastructure. Their BI dashboard saves us 20+ hours per week and the insights are game-changing.",
    author: "Ahmed Al-Rashid",
    role: "CEO, TechVentures UAE",
    company: "Dubai, UAE",
  },
  {
    quote: "The AI solution they built achieved 98.7% accuracy on our medical imaging project. Exceptional technical expertise and professionalism.",
    author: "Dr. Fatima Zahra",
    role: "Head of Innovation",
    company: "Healthcare Institution",
  },
  {
    quote: "From strategy to implementation, Y-Qubit guided our digital transformation journey. The WhatsApp chatbot integration increased customer engagement by 60%.",
    author: "Karim Benjelloun",
    role: "Operations Director",
    company: "Retail Group Morocco",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across MENA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote className="h-10 w-10 text-purple-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-purple-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
