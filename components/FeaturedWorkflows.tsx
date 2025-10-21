export default function FeaturedWorkflows() {
  const featuredWorkflows = [
    { title: 'Physical Meeting AI Notetaker', replaces: 'PLAUD, Otter.ai Premium', icon: '🎙️', color: 'from-blue-500 to-cyan-500' },
    { title: 'Social Media Scheduler', replaces: 'Buffer', icon: '📱', color: 'from-purple-500 to-pink-500' },
    { title: 'Smart Email Assistant', replaces: 'Superhuman features', icon: '✉️', color: 'from-green-500 to-teal-500' },
    { title: 'Lead Capture & CRM Sync', replaces: 'Zapier Premium', icon: '👥', color: 'from-orange-500 to-red-500' },
    { title: 'Invoice → Accounting Automation', replaces: 'Bill.com features', icon: '💰', color: 'from-yellow-500 to-orange-500' },
    { title: 'Content Repurposing Engine', replaces: 'Repurpose.io', icon: '📝', color: 'from-indigo-500 to-purple-500' },
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Most Popular Workflows This Week
        </h2>
        <p className="text-gray-600 mb-12">
          Join thousands of builders using these workflows
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorkflows.map((workflow, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-gray-200 hover:border-ibuildit-orange transition cursor-pointer overflow-hidden group"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-br ${workflow.color} p-6 relative`}>
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{workflow.icon}</div>
                  <div className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold">
                    #{index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {workflow.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  Replaces: <span className="font-semibold text-gray-900">{workflow.replaces}</span>
                </p>

                <button className="text-ibuildit-orange font-semibold text-sm group-hover:underline flex items-center gap-1">
                  View Workflow
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
