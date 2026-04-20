import ringImage from '../assets/ring.avif';
import { FadeIn } from './FadeIn';

const highlights = [
  'Form developed as a signature object, not a decorative afterthought.',
  'Controlled lighting, contrast, and framing keep the composition premium.',
  'Gold and teal accents remain restrained so the object still leads.',
];

export default function RingShowcaseSection() {
  return (
    <section id="signature" aria-label="Signature Piece" className="relative z-30 overflow-hidden bg-[#061411] scroll-mt-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 25% 30%, rgba(99, 82, 43, 0.24) 0%, transparent 68%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 78% 68%, rgba(8, 38, 31, 0.72) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-[min(1380px,calc(100%-64px))] gap-6 py-[clamp(88px,11vw,144px)] lg:grid-cols-[1.05fr_0.95fr] max-[1100px]:w-[calc(100%-36px)]">
        <FadeIn direction="up" className="flex items-center">
          <div className="max-w-[36rem]">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/34">The Final Object</p>
            <h2 className="mt-5 text-[clamp(2.25rem,4.8vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em] text-white/92">
Partnership As A Value
            </h2>
            <p className="mt-6 text-[clamp(0.95rem,1.25vw,1.05rem)] font-light leading-[1.8] text-white/50">
Rooted in Saudi heritage, we deliver world-class products            </p>

            <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

            <div className="mt-8 space-y-4">
              {highlights.map((highlight, index) => (
                <div key={highlight} className="flex items-start gap-4 rounded-[18px] border border-white/[0.06] bg-white/[0.025] px-4 py-4 backdrop-blur-sm">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C9A96E]" />
                  <p className="text-[0.92rem] font-light leading-[1.7] text-white/58">
                    <span className="mr-2 text-white/28">0{index + 1}</span>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-[0.92rem] font-medium text-white/88 transition-colors duration-200 hover:border-white/18 hover:bg-white/[0.07]"
              >
                View The Collection
              </button>
              <button
                type="button"
                className="rounded-full border border-[#C9A96E]/25 bg-[#C9A96E]/10 px-6 py-3 text-[0.92rem] font-medium text-[#E2C991] transition-colors duration-200 hover:border-[#C9A96E]/40 hover:bg-[#C9A96E]/14"
              >
                Request A Consultation
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.08} className="relative">
          <div className="relative min-h-[680px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm max-[768px]:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(99,82,43,0.18)_0%,transparent_48%)]" />
            <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '100% 100%, 64px 64px' }} />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/32">Image #3</p>
                  <p className="mt-2 text-[1rem] font-light tracking-[0.18em] text-white/58">Signature Form Study</p>
                </div>
                <div className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-white/45">
                  Ring Asset
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center py-8">
                <div className="absolute inset-12 rounded-full bg-[#C9A96E]/[0.06] blur-3xl" />
                <img
                  src={ringImage}
                  alt="Ring inspired signature form"
                  className="relative z-10 max-h-[560px] w-full max-w-[620px] object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="grid gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-3">
                <div className="rounded-[18px] border border-white/[0.06] bg-white/[0.025] px-4 py-4">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/32">Material</p>
                  <p className="mt-2 text-[0.92rem] font-light text-white/70">Precision-finished with a restrained metallic edge.</p>
                </div>
                <div className="rounded-[18px] border border-white/[0.06] bg-white/[0.025] px-4 py-4">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/32">Mood</p>
                  <p className="mt-2 text-[0.92rem] font-light text-white/70">Quiet, cinematic, and built to hold attention.</p>
                </div>
                <div className="rounded-[18px] border border-white/[0.06] bg-white/[0.025] px-4 py-4">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/32">Purpose</p>
                  <p className="mt-2 text-[0.92rem] font-light text-white/70">The final premium object before the footer closes the page.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}