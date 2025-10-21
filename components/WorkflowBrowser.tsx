'use client'

import { useState } from 'react'
import Link from 'next/link'
import WorkflowThumbnail from './WorkflowThumbnail'

export default function WorkflowBrowser() {
  const [searchQuery, setSearchQuery] = useState('')

  // Placeholder workflow data
  const workflows = [
    {
      id: 1,
      slug: 'ai-notetaker',
      title: 'Physical Meeting AI Notetaker',
      rating: 4.9,
      uses: 234,
      replaces: 'PLAUD, Otter.ai Premium',
      savings: 175,
      platform: 'n8n',
      time: '30-45 min',
      difficulty: 'Medium',
      type: 'meeting' as const
    },
    {
      id: 2,
      slug: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      rating: 4.8,
      uses: 189,
      replaces: 'Buffer',
      savings: 13,
      platform: 'Zapier',
      time: '20 min',
      difficulty: 'Beginner',
      type: 'social' as const
    },
    {
      id: 3,
      slug: 'email-assistant',
      title: 'Email Assistant',
      rating: 4.7,
      uses: 156,
      replaces: 'Superhuman',
      savings: 26,
      platform: 'n8n',
      time: '45 min',
      difficulty: 'Advanced',
      type: 'email' as const
    },
    {
      id: 4,
      slug: 'crm-sync',
      title: 'Lead Capture & CRM Sync',
      rating: 4.9,
      uses: 203,
      replaces: 'Zapier Premium',
      savings: 30,
      platform: 'Make.com',
      time: '25 min',
      difficulty: 'Intermediate',
      type: 'crm' as const
    },
    {
      id: 5,
      slug: 'invoice-automation',
      title: 'Invoice Automation',
      rating: 4.6,
      uses: 142,
      replaces: 'Bill.com',
      savings: 45,
      platform: 'Zapier',
      time: '40 min',
      difficulty: 'Medium',
      type: 'invoice' as const
    },
    {
      id: 6,
      slug: 'content-repurposing',
      title: 'Content Repurposing Engine',
      rating: 4.8,
      uses: 178,
      replaces: 'Repurpose.io',
      savings: 20,
      platform: 'Make.com',
      time: '35 min',
      difficulty: 'Intermediate',
      type: 'content' as const
    }
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-white border-t border-gray-200" id="workflows">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Browse Workflows
        </h2>
        <p className="text-gray-600 mb-8">
          Ready-to-use automation workflows. Pick one, follow the guide, start saving.
        </p>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search workflows... (e.g., 'meeting transcription')"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Category: All</option>
              <option>Communication</option>
              <option>Content & Social</option>
              <option>Data & Productivity</option>
              <option>Sales & CRM</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Platform: All</option>
              <option>Zapier</option>
              <option>Make.com</option>
              <option>n8n</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Cost: All</option>
              <option>Free</option>
              <option>&lt;$5</option>
              <option>$5-15</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Difficulty: All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Sort: Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Biggest Savings</option>
            </select>
          </div>
        </div>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <Link
              key={workflow.id}
              href={`/workflow/${workflow.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 group cursor-pointer block"
            >
              {/* Thumbnail */}
              <div className="overflow-hidden">
                <div className="transform transition-transform group-hover:scale-105">
                  <WorkflowThumbnail type={workflow.type} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {workflow.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{workflow.rating}</span>
                  <span className="text-gray-500 text-sm">({workflow.uses} uses)</span>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">
                    Replaces: <span className="font-semibold text-gray-900">{workflow.replaces}</span>
                  </div>
                  <div className="text-sm font-bold text-green-600">
                    Saves: ${workflow.savings}/mo
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{workflow.platform}</span>
                  <span>•</span>
                  <span>{workflow.time}</span>
                  <span>•</span>
                  <span>{workflow.difficulty}</span>
                </div>

                <div className="w-full bg-ibuildit-orange hover:bg-orange-600 text-white py-2 rounded font-semibold transition text-center">
                  View Workflow →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Load More Workflows
          </button>
        </div>
      </div>
    </section>
  )
}
