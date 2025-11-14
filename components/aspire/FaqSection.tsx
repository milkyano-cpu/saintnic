'use client';

import { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you offer online tutoring?',
      answer:
        'No, we focus exclusively on in-person tutoring at our Truganina location. We believe face-to-face learning creates better outcomes.',
    },
    {
      question: "What's the cost?",
      answer:
        'We offer transparent, flat-rate monthly pricing with no hidden fees. Contact us for current rates and package options.',
    },
    {
      question: 'Can I meet the tutor before committing?',
      answer:
        'Absolutely! We offer a free trial session so you can meet your tutor and experience our approach before making any commitment.',
    },
  ];

  return (
    <Section variant="light-blue" className="py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl font-bold text-aspire-text-dark">
          Still Have Questions?
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full border-b border-gray-300 pb-4 text-left transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="flex-1 text-sm font-bold text-[#01588d]">
                  {faq.question}
                </p>
                <ChevronDown
                  className={`h-6 w-6 flex-shrink-0 text-[#01588d] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-aspire-text-dark">
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
