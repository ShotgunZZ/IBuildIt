export function ZapierLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified Zapier-style logo */}
      <circle cx="15" cy="15" r="12" fill="#FF4A00" />
      <path d="M10 10 L20 20 M20 10 L10 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="35" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#111">
        Zapier
      </text>
    </svg>
  )
}

export function MakeLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified Make.com-style logo */}
      <rect x="3" y="3" width="24" height="24" rx="6" fill="#6D00CC" />
      <path d="M10 15 L15 10 L20 15 L15 20 Z" fill="white" />
      <text x="35" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#111">
        Make
      </text>
    </svg>
  )
}

export function N8nLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified n8n-style logo */}
      <rect x="3" y="3" width="24" height="24" rx="12" fill="#EA4B71" />
      <text x="11" y="21" fontFamily="monospace" fontSize="14" fontWeight="700" fill="white">
        n8
      </text>
      <text x="35" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="#111">
        n8n
      </text>
    </svg>
  )
}

export function PlatformLogosSection() {
  return (
    <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wide font-semibold">
          Works with your favorite platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <ZapierLogo className="h-8 opacity-60 hover:opacity-100 transition" />
          <MakeLogo className="h-8 opacity-60 hover:opacity-100 transition" />
          <N8nLogo className="h-8 opacity-60 hover:opacity-100 transition" />
          <div className="text-gray-400 font-medium">+ more platforms</div>
        </div>
      </div>
    </section>
  )
}
