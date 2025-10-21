import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="text-sm font-semibold text-ibuildit-orange mb-4 uppercase tracking-wide">
              The GitHub of Automations
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Another $20/Month?
              <br />
              No Thanks.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Build it once. Own it forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-ibuildit-orange hover:bg-ibuildit-orange-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Browse Workflows
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg border-2 border-gray-300 hover:border-ibuildit-teal hover:text-ibuildit-teal transition">
                How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div>
                <div className="font-bold text-2xl text-gray-900">1,247</div>
                <div>Free Workflows</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900">3,421</div>
                <div>Active Builders</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900">$147k</div>
                <div>Saved Monthly</div>
              </div>
            </div>
          </div>

          {/* Right: Visual/Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/saas-killer-hero.jpg"
                alt="Replace expensive SaaS with n8n workflows"
                width={1536}
                height={1024}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Gradient overlay for better badge visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-ibuildit-orange text-white px-6 py-3 rounded-lg shadow-xl z-10">
              <div className="font-bold text-lg">1,247 Free Workflows</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
