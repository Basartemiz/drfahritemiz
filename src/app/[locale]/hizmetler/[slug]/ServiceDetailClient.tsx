'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceDetailClientProps {
  faq: FAQItem[];
}

export default function ServiceDetailClient({ faq }: ServiceDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
        >
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0',
                openFaq === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openFaq === index ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <p className="px-6 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
