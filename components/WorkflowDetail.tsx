'use client'

import Link from 'next/link'

type WorkflowDetailProps = {
  workflow: any // In production, this would be a proper TypeScript interface
}

export default function WorkflowDetail({ workflow }: WorkflowDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-ibuildit-orange">Home</Link>
            <span>→</span>
            <Link href="/#workflows" className="hover:text-ibuildit-orange">Workflows</Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">{workflow.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-ibuildit-orange/10 text-ibuildit-orange px-3 py-1 rounded-full text-sm font-semibold">
              {workflow.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {workflow.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {workflow.tagline}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">{workflow.rating}</span>
              <span className="text-gray-600">({workflow.uses} uses)</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💰</span>
              <span className="font-semibold text-green-600">Save ${workflow.moneySavedPerMonth}/mo</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span className="text-gray-700">{workflow.timeToComplete}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span className="text-gray-700">Difficulty: {workflow.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Quick Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Input */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📥</span>
              <h3 className="font-bold text-gray-900">Input</h3>
            </div>
            <p className="text-gray-700 mb-2">{workflow.input.type}</p>
            <div className="text-sm text-gray-600">
              <div className="font-medium mb-1">Supported formats:</div>
              <div className="flex flex-wrap gap-1">
                {workflow.input.formats.map((format: string) => (
                  <span key={format} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚙️</span>
              <h3 className="font-bold text-gray-900">Platform</h3>
            </div>
            <p className="text-gray-700 mb-2">{workflow.platform}</p>
            <div className="text-sm text-gray-600">
              Also works with: {workflow.alternativePlatforms.join(', ')}
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📤</span>
              <h3 className="font-bold text-gray-900">Output</h3>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              {workflow.output.items.map((item: string) => (
                <div key={item}>• {item}</div>
              ))}
            </div>
            <div className="mt-2 text-xs text-green-600 font-medium">
              ✓ Fully customizable
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Cost Breakdown</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* Original Cost */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">With {workflow.replaces}:</h3>
              <div className="space-y-3">
                {workflow.costBreakdown.original.map((item: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.type}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${item.cost}{item.type === 'monthly' ? '/mo' : ''}
                    </div>
                  </div>
                ))}
                <div className="border-t-2 border-gray-300 pt-3 mt-3">
                  <div className="text-sm text-gray-600 mb-1">Total monthly cost:</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${workflow.costBreakdown.original.find((i: any) => i.type === 'monthly')?.cost || 0}/mo
                  </div>
                </div>
              </div>
            </div>

            {/* New Cost */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">With This Workflow:</h3>
              <div className="space-y-3">
                {workflow.costBreakdown.withThisWorkflow.monthly.map((item: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-2xl font-bold text-gray-900">${item.cost}/mo</span>
                    </div>
                    {item.note && (
                      <div className="text-xs text-gray-500 mt-1">{item.note}</div>
                    )}
                  </div>
                ))}
                <div className="border-t-2 border-gray-300 pt-3 mt-3">
                  <div className="text-sm text-gray-600 mb-1">Total monthly cost:</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {workflow.costBreakdown.withThisWorkflow.costRange
                      ? `$${workflow.costBreakdown.withThisWorkflow.costRange.min}-$${workflow.costBreakdown.withThisWorkflow.costRange.max}/mo`
                      : `$${workflow.costBreakdown.withThisWorkflow.monthly.reduce((sum: number, item: any) => sum + item.cost, 0)}/mo`
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Summary */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">
                  {workflow.costBreakdown.savings.maxMonthlySavings
                    ? `$${workflow.costBreakdown.savings.monthly}-$${workflow.costBreakdown.savings.maxMonthlySavings}`
                    : `$${workflow.costBreakdown.savings.monthly}`
                  }
                </div>
                <div className="text-sm text-gray-600">Saved per month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">
                  {workflow.costBreakdown.savings.maxAnnualSavings
                    ? `$${workflow.costBreakdown.savings.annual}-$${workflow.costBreakdown.savings.maxAnnualSavings}`
                    : `$${workflow.costBreakdown.savings.annual}`
                  }
                </div>
                <div className="text-sm text-gray-600">Saved per year</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ibuildit-orange">Week {workflow.costBreakdown.savings.breakEvenWeeks}</div>
                <div className="text-sm text-gray-600">Break-even point</div>
              </div>
            </div>
            {workflow.costBreakdown.savings.note && (
              <div className="mt-4 text-sm text-gray-600 text-center border-t border-gray-300 pt-4">
                💡 {workflow.costBreakdown.savings.note}
              </div>
            )}
          </div>
        </div>

        {/* Prerequisites & Video Tutorial - Side by Side on Desktop */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Prerequisites */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Prerequisites</h2>
            <div className="space-y-4">
              {workflow.prerequisites.map((prereq: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-ibuildit-orange transition">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{prereq.name}</h3>
                    {prereq.required && (
                      <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">Required</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{prereq.description}</p>
                  <div className="text-sm text-green-600 font-medium">{prereq.cost}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Tutorial */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎥 Video Tutorial</h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">▶️</div>
                <p className="font-medium">Video Tutorial Coming Soon</p>
                <p className="text-sm">Watch complete setup walkthrough</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Step-by-Step Guide</h2>
          <div className="space-y-8">
            {workflow.steps.map((step: any) => (
              <div key={step.number} className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-ibuildit-orange text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  {/* Screenshot Placeholder */}
                  <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm">Screenshot placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Output Destinations & Troubleshooting - Side by Side on Desktop */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Output Destinations */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📍 Output Destinations</h2>
            <p className="text-gray-600 mb-6">Send your meeting notes to any of these platforms:</p>
            <div className="grid grid-cols-2 gap-3">
              {workflow.output.destinations.map((dest: string) => (
                <div key={dest} className="border border-gray-200 rounded-lg p-3 text-center hover:border-ibuildit-orange transition">
                  <div className="font-semibold text-gray-900 text-sm">{dest}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Troubleshooting</h2>
            <div className="space-y-4">
              {workflow.troubleshooting.map((item: any, index: number) => (
                <div key={index} className="border-l-4 border-ibuildit-orange bg-orange-50 p-4 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">❌ {item.issue}</h3>
                  <p className="text-xs text-gray-700">✅ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Author & Contribution */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">{workflow.author.name}</div>
                <div className="text-sm text-gray-600">
                  {workflow.author.contributedWorkflows} workflows contributed
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-2">Last updated</div>
              <div className="font-semibold text-gray-900">{workflow.lastUpdated}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
