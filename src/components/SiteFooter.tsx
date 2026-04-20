import { FadeIn } from './FadeIn';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Craft', href: '#craft' },
  { label: 'Approach', href: '#approach' },
  { label: 'Signature', href: '#signature' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteFooter() {
  return (
    <footer id="contact" aria-label="Site Footer" className="relative z-30 overflow-hidden border-t border-white/5 bg-[#04100d] scroll-mt-28">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 50% 0%, rgba(99, 82, 43, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(40px,5vw,72px)] max-[1100px]:w-[calc(100%-36px)]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn direction="up" className="w-full" style={{ maxWidth: '34rem' }}>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/32">Ertqa</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-white/92">
              Built to feel refined from the first impression to the final line.
            </h2>
            <p className="mt-5 text-[0.96rem] font-light leading-[1.8] text-white/48">
              A premium ecosystem for brands that want their presence to feel precise, credible, and distinct.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/30">Navigation</p>
              <div className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-[0.96rem] font-light text-white/72 no-underline transition-colors duration-200 hover:text-[#E2C991]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/30">Contact</p>
              <div className="mt-4 space-y-3 text-[0.96rem] font-light text-white/68">
                <p>Saudi Arabia</p>
                <p>hello@ertqa.com</p>
                <p>+966 00 000 0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-5 text-[0.78rem] font-light tracking-[0.08em] text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>2026 Ertqa. All rights reserved.</p>
          <p>Design, craft, and manufacturing with a measured premium finish.</p>
        </div>
      </div>
    </footer>
  );
}