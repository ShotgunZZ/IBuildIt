'use client'

import { useState } from 'react'

type Tool = {
  name: string
  monthlyCost: number
  apiCost: number
}

export default function CostCalculator() {
  const tools: Tool[] = [
    { name: 'Fireflies.ai', monthlyCost: 19, apiCost: 3 },
    { name: 'Calendly', monthlyCost: 12, apiCost: 1 },
    { name: 'Buffer', monthlyCost: 15, apiCost: 2 },
    { name: 'Notion AI', monthlyCost: 10, apiCost: 4 },
    { name: 'Zapier Premium', monthlyCost: 30, apiCost: 0 },
  ]

  const [selectedTools, setSelectedTools] = useState<boolean[]>(
    new Array(tools.length).fill(false)
  )

  const toggleTool = (index: number) => {
    const newSelected = [...selectedTools]
    newSelected[index] = !newSelected[index]
    setSelectedTools(newSelected)
  }

  const calculateSavings = () => {
    let totalMonthlyCost = 0
    let totalApiCost = 0

    selectedTools.forEach((selected, index) => {
      if (selected) {
        totalMonthlyCost += tools[index].monthlyCost
        totalApiCost += tools[index].apiCost
      }
    })

    return {
      monthlyCost: totalMonthlyCost,
      apiCost: totalApiCost,
      monthlySavings: totalMonthlyCost - totalApiCost,
      annualSavings: (totalMonthlyCost - totalApiCost) * 12,
    }
  }

  const savings = calculateSavings()

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Calculate Your Actual Savings
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Select the tools you currently use and see how much you could save
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
          {/* Table */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Select</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Tool You Use</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Monthly Cost</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">API Cost</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${selectedTools[index] ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedTools[index]}
                        onChange={() => toggleTool(index)}
                        className="w-5 h-5 text-blue-600 cursor-pointer"
                      />
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">{tool.name}</td>
                    <td className="py-3 px-4 text-right text-gray-700">${tool.monthlyCost}/mo</td>
                    <td className="py-3 px-4 text-right text-green-600 font-medium">${tool.apiCost}/mo</td>
                    <td className="py-3 px-4 text-right font-bold text-green-600">
                      ${tool.monthlyCost - tool.apiCost}/mo
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 border-t-2 border-gray-300">
                <tr>
                  <td colSpan={2} className="py-3 px-4 font-bold text-gray-900">Total</td>
                  <td className="py-3 px-4 text-right font-bold text-gray-900">
                    ${savings.monthlyCost}/mo
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-green-600">
                    ${savings.apiCost}/mo
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-green-600 text-lg">
                    ${savings.monthlySavings}/mo
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Summary Cards */}
          {savings.monthlySavings > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${savings.monthlySavings}
                </div>
                <div className="text-sm text-gray-600">Monthly Savings</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${savings.annualSavings}
                </div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Week 2
                </div>
                <div className="text-sm text-gray-600">Break-even Point</div>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-600">
            <p className="font-semibold">
              We have workflows for all of these. Free to access. Forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
