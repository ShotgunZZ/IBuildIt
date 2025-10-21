import Image from 'next/image'

export default function ContributeCTA() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white" id="contribute">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-ibuildit-teal/5 to-ibuildit-orange/5 border-2 border-ibuildit-orange/20 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/digital-workspace.jpg"
                alt="Digital workspace with analytics and workflows"
                width={640}
                height={427}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Share Your Knowledge
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built something great? Share it with the community.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="text-ibuildit-orange text-2xl">✓</div>
                  <div className="font-semibold text-gray-900">Get Recognition</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-ibuildit-orange text-2xl">✓</div>
                  <div className="font-semibold text-gray-900">Help Others Save</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-ibuildit-teal text-2xl">✓</div>
                  <div className="font-semibold text-gray-900">Build Portfolio</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-ibuildit-teal text-2xl">✓</div>
                  <div className="font-semibold text-gray-900">Improve Together</div>
                </div>
              </div>

              <button className="bg-ibuildit-orange hover:bg-ibuildit-orange-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition shadow-lg w-full md:w-auto">
                Submit Your Workflow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
