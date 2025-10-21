export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Three simple steps to start automating your workflows
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">Find Your Workflow</h3>
            <p className="text-gray-600">
              Browse by category or search by SaaS tool name. Preview costs, difficulty, and build time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-3">Follow the Guide</h3>
            <p className="text-gray-600">
              Watch 1-min setup videos for prerequisites. Follow step-by-step instructions with screenshots.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3">Customize & Share</h3>
            <p className="text-gray-600">
              Adapt inputs/outputs to your needs. Contribute improvements back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
