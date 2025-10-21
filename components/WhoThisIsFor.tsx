export default function WhoThisIsFor() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Is This For You?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Perfect For */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span>✅</span> This Is Perfect For:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✅</span>
                <div>
                  <span className="font-bold">Solo founders</span> tired of SaaS subscriptions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✅</span>
                <div>
                  <span className="font-bold">Small teams</span> (2-10 people) wanting custom automation
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✅</span>
                <div>
                  <span className="font-bold">Semi-technical users</span> comfortable with no-code tools
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✅</span>
                <div>
                  <span className="font-bold">Agencies</span> building client automations
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✅</span>
                <div>
                  <span className="font-bold">Anyone</span> who&apos;s ever thought &quot;I could build this myself&quot;
                </div>
              </li>
            </ul>
          </div>

          {/* Not For */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <span>❌</span> This Might Not Be For You If:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">❌</span>
                <div>
                  You need 24/7 enterprise support
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">❌</span>
                <div>
                  You have zero time to learn (even 30 minutes)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">❌</span>
                <div>
                  You require SOC2 compliance (though many workflows support it)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">❌</span>
                <div>
                  You prefer fully managed solutions with zero setup
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
