'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do I need coding skills?',
      answer: 'No. All workflows use no-code platforms like Zapier or Make.com. If you can follow a recipe, you can build these.',
    },
    {
      question: 'What if a workflow doesn\'t work?',
      answer: 'Each workflow has a troubleshooting section. Plus, our community Discord is active for support.',
    },
    {
      question: 'Can I sell workflows I build?',
      answer: 'Currently, all workflows are free. We\'re exploring a "Pro Workflows" tier where contributors can monetize advanced workflows.',
    },
    {
      question: 'How do you make money?',
      answer: 'We don\'t—yet. This is an open project. Future monetization might include: affiliate links to API providers, premium support, or a marketplace.',
    },
    {
      question: 'What\'s your tech stack?',
      answer: 'Next.js + Tailwind for the site. Workflows are platform-agnostic (Zapier, Make, n8n, etc.).',
    },
    {
      question: 'Can I request a workflow?',
      answer: 'Yes! Use the "Request Workflow" button. If enough people vote for it, someone will build it.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Ready to start saving money?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Browse Workflows
          </button>
        </div>
      </div>
    </section>
  )
}
