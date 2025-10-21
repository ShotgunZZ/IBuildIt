import Image from 'next/image'

export default function CommunityStats() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/collaboration.jpg"
              alt="Team collaboration and workflow building"
              width={640}
              height={427}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Built by the Community
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Created, tested, and improved by builders like you.
            </p>

            {/* Compact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-ibuildit-teal mb-1">1,247</div>
                <div className="text-gray-600">Workflows</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ibuildit-teal mb-1">3,421</div>
                <div className="text-gray-600">Builders</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ibuildit-teal mb-1">89%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ibuildit-teal mb-1">$147k</div>
                <div className="text-gray-600">Saved/Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-600">
              <span className="text-ibuildit-orange text-lg">→</span>
              <span><span className="font-semibold text-gray-900">@alice</span> saved $23/mo with Physical Meeting AI Notetaker</span>
            </div>
            <div className="flex items-start gap-3 text-gray-600">
              <span className="text-ibuildit-orange text-lg">→</span>
              <span><span className="font-semibold text-gray-900">@bob</span> contributed Email Assistant Workflow</span>
            </div>
            <div className="flex items-start gap-3 text-gray-600">
              <span className="text-ibuildit-orange text-lg">→</span>
              <span><span className="font-semibold text-gray-900">@charlie</span> rated Social Media Scheduler 5 stars</span>
            </div>
            <div className="flex items-start gap-3 text-gray-600">
              <span className="text-ibuildit-teal text-lg">→</span>
              <span><span className="font-semibold text-gray-900">@diana</span> just launched Lead Capture Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
