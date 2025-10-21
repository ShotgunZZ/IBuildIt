import Image from 'next/image'

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="IBuildIt Logo"
      width={200}
      height={50}
      className={className}
      priority
    />
  )
}

export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified tool icon */}
      <path
        d="M20 10L25 5L30 10L25 15L20 10Z"
        fill="#FF6B00"
        stroke="#FF6B00"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="23"
        y="15"
        width="4"
        height="25"
        fill="#FF6B00"
        rx="1"
      />
      <circle cx="25" cy="42" r="3" fill="#FF6B00" />
    </svg>
  )
}
