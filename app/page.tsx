export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For HR &amp; Recruiters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Are Candidate Salary Expectations{' '}
          <span className="text-[#58a6ff]">Actually Realistic?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly compare any candidate&apos;s salary request against live market data, location benchmarks, and experience level — then get clear negotiation guidance.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Analyzing — $12/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📊', title: 'Market Benchmarks', desc: 'Real salary ranges by role, location, and seniority.' },
          { icon: '🧭', title: 'Negotiation Tips', desc: 'Actionable scripts to close the gap confidently.' },
          { icon: '⚡', title: 'Instant Reports', desc: 'Paste a job title and get results in seconds.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited salary analyses',
              'Live market data comparisons',
              'Location & experience adjustments',
              'Negotiation recommendation reports',
              'Export reports as PDF',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Where does the salary data come from?',
              a: 'We aggregate data from multiple public and licensed compensation datasets, updated regularly to reflect current market conditions.',
            },
            {
              q: 'Can I analyze roles in different countries?',
              a: 'Yes. The tool supports location-based adjustments for major markets including the US, UK, EU, Canada, and Australia.',
            },
            {
              q: 'How do I cancel my subscription?',
              a: 'You can cancel anytime from your Lemon Squeezy customer portal. No questions asked, no fees.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-1">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Salary Expectation Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
