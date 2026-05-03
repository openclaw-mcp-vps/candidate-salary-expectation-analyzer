import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salary Expectation Analyzer — Know If Candidate Asks Are Realistic',
  description: 'Compare candidate salary requests against market data, location, and experience level. Get negotiation guidance instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c757e16-c2e4-47e6-ba9a-043dce9e427f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
