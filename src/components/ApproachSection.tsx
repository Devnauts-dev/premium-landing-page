import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Lightbulb, Eye, Heart } from 'lucide-react';
import { FadeIn } from './FadeIn';

gsap.registerPlugin(ScrollTrigger);

const approachCards = [
  {
    icon: <Palette size={24} strokeWidth={1.5} />,
    title: 'Craftsmanship As A Mindset',
    description: 'We think like artisans, where beauty is crafted with mastery and driven by passion.',
    bgGradient: 'from-[#1a1510] via-[#0d1110] to-[#0a0e0c]',
  },
  {
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
    title: 'Innovation As Identity',
    description: 'We blend imagination and technology to create experiences no one has seen before.',
    bgGradient: 'from-[#0d1a14] via-[#0a1210] to-[#080e0c]',
  },
  {
    icon: <Eye size={24} strokeWidth={1.5} />,
    title: 'Impact As A Purpose',
    description: 'We measure success by the emotions we spark and the impact our gifts leave.',
    bgGradient: 'from-[#14100d] via-[#0e0c0a] to-[#0a0808]',
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: 'Partnership As A Value',
    description: 'We build lasting relationships to create experiences that stand apart.',
    bgGradient: 'from-[#0d1418] via-[#0a1012] to-[#080c0e]',
  },
];

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean);

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top 75%`,
            end: `top 40%`,
            scrub: 1,
          },
          delay: i * 0.1,
        },
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      id="approach"
      aria-label="Our Approach To Mastery"
      className="relative z-30 overflow-hidden bg-[#081a14] scroll-mt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#081a14]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(99, 82, 43, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 60% 70%, rgba(8, 38, 31, 0.6) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(80px,10vw,140px)] max-[1100px]:w-[calc(100%-36px)]">
        {/* Section title */}
        <FadeIn direction="up" className="mb-[clamp(48px,6vw,80px)] text-center">
          <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-light leading-[1.15] tracking-[-0.01em] text-white/90">
            Our Approach To Mastery
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
          {approachCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="group relative overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#0d1110]/60 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12]"
            >
              {/* Card background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`}
              />

              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(201, 169, 110, 0.08) 0%, transparent 60%)',
                }}
              />

              <div className="relative flex min-h-[220px] flex-col justify-between p-[clamp(24px,3vw,40px)] max-[768px]:min-h-[180px]">
                {/* Icon + Title */}
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/8 text-[#C9A96E] transition-colors duration-300 group-hover:border-[#C9A96E]/35 group-hover:bg-[#C9A96E]/15">
                    {card.icon}
                  </div>
                  <h3 className="text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium leading-[1.25] tracking-[-0.01em] text-white/85">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-[clamp(0.82rem,1vw,0.92rem)] font-light leading-[1.7] text-white/45">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
