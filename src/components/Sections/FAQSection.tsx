import React, { useState } from 'react';
import { FAQS } from '../../data/products';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-50/80 p-6 md:p-10 border border-neutral-200">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-category-purple" />
          <h2 className="font-ubuntu text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 mb-6">
          Everything you need to know about renting gaming gadgets in Bangalore with SharePal.
        </p>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-4 md:p-5 text-left font-bold text-xs sm:text-sm md:text-base text-neutral-900 hover:text-category-purple transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-neutral-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-category-purple' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-neutral-100 px-4 md:px-5 pb-5 pt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed bg-neutral-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
