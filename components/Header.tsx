import Logo from './Logo'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Logo className="h-12 w-auto" />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#workflows" className="text-gray-700 hover:text-ibuildit-teal transition font-medium">
            Browse Workflows
          </a>
          <a href="#community" className="text-gray-700 hover:text-ibuildit-teal transition font-medium">
            Community
          </a>
          <a href="#contribute" className="text-gray-700 hover:text-ibuildit-teal transition font-medium">
            Contribute
          </a>
          <a href="#about" className="text-gray-700 hover:text-ibuildit-teal transition font-medium">
            About
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-ibuildit-orange hover:bg-ibuildit-orange-dark text-white px-6 py-2 rounded-lg font-semibold transition shadow-sm">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
