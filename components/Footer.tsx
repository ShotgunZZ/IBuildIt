export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Mission */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-ibuildit-teal-light">IBuild</span><span className="text-ibuildit-orange">It</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the world, one workflow at a time. Empowering you to own your tools and control your automation.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-bold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#workflows" className="hover:text-ibuildit-orange transition">Browse Workflows</a></li>
              <li><a href="#how" className="hover:text-ibuildit-orange transition">How It Works</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Getting Started</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Tutorials</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contribute" className="hover:text-ibuildit-orange transition">Contribute</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Discord</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Contributors</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Request Workflow</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-ibuildit-orange transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Manifesto</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">GitHub</a></li>
              <li><a href="#" className="hover:text-ibuildit-orange transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 IBuildIt. Licensed under Creative Commons.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ibuildit-orange transition">Privacy</a>
            <a href="#" className="hover:text-ibuildit-orange transition">Terms</a>
            <a href="#" className="hover:text-ibuildit-orange transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
