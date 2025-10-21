export default function ValueProposition() {
  return (
    <section className="py-16 md:py-20 px-4 bg-ibuildit-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Build Your Own?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Own your automation. No vendor lock-in. No monthly subscriptions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-ibuildit-orange transition">
            <div className="w-12 h-12 bg-ibuildit-orange/10 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ibuildit-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Full Control</h3>
            <p className="text-gray-600 leading-relaxed">
              Customize everything. Your data, your rules.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-ibuildit-orange transition">
            <div className="w-12 h-12 bg-ibuildit-orange/10 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ibuildit-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Save Thousands</h3>
            <p className="text-gray-600 leading-relaxed">
              Save $2,220/year on average. Pay for API usage, not subscriptions.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-ibuildit-orange transition">
            <div className="w-12 h-12 bg-ibuildit-orange/10 rounded flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ibuildit-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Learn & Share</h3>
            <p className="text-gray-600 leading-relaxed">
              Follow step-by-step guides. Share what you build.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
