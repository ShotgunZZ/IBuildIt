import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBuildIt - Build Once. Share Forever.",
  description: "The GitHub of automations. Standardized, community-tested workflows that replace expensive SaaS. Stop rebuilding what others have perfected—save $2,000+ per year.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
