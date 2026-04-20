import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Users, Gem, Lightbulb, Menu, X } from 'lucide-react';
import watchHeroImage from './assets/ring.avif';
import AnimatedGradientBackground from './components/AnimatedGradientBackground';
import EcosystemCard from './components/EcosystemCard';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import ApproachSection from './components/ApproachSection';
import { RingShowcaseSection, SiteFooter } from './components';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const imageRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const ecosystemSectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Craft', href: '#craft' },
    { label: 'Approach', href: '#approach' },
    { label: 'Signature', href: '#signature' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    if (!imageRef.current || !aboutTextRef.current) return;

    // Image scales up slowly over a longer scroll distance
    gsap.to(imageRef.current, {
      scale: 1.18,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: '+=300vh',
        scrub: 2,
      },
    });

    // About text clip reveal from left to right
    gsap.fromTo(
      aboutTextRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 2,
        },
      },
    );
  });

  // Ecosystem section animations
  useGSAP(() => {
    if (!ecosystemSectionRef.current || !imageRef.current) return;

    const cards = cardRefs.current.filter(Boolean);

    // Cards float in from their respective directions
    cards.forEach((card, i) => {
      const isLeft = i % 2 === 0;
      const isTop = i < 2;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: isLeft ? -80 : 80,
          y: isTop ? -60 : 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ecosystemSectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1.5,
          },
        },
      );
    });

    // Fixed bottom image shrinks and floats to center when ecosystem section is reached
    gsap.to(imageRef.current, {
      width: '840px',
      bottom: '25%',
      xPercent: -50,
      yPercent: -7,
      scale: 0.99,
      transformOrigin: '50% 50%',
      overwrite: true,
      scrollTrigger: {
        trigger: ecosystemSectionRef.current,
        start: 'top 65%',
        end: 'top 20%',
        scrub: 0.5,
      },
    });
  });

  return (
    <main className="text-white">
      {/* Animated gradient background */}
      <AnimatedGradientBackground />

      {/* Global fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between w-[min(1380px,calc(100%-64px))] gap-5 pt-[18px] max-[1100px]:w-[calc(100%-36px)] max-[768px]:w-[calc(100%-24px)] max-[1100px]:justify-between">
        <div className="flex items-center gap-[10px] justify-self-start text-[#e1d5b6] max-[1100px]:order-1">
          <div className="flex flex-col gap-[2px] text-[26px] font-medium leading-[0.84] tracking-[0.04em] max-[768px]:text-[22px]">
            <span>ERTOA</span>
        
          </div>
          <div className="relative h-[44px] w-[52px] opacity-95">
            <span className="absolute inset-[3px] rounded-[28px] border-2 border-[#d5c9ab]" />
            <span className="absolute right-4 top-2 h-[27px] w-[20px] rotate-12 rounded-[20px] border-2 border-[#d5c9ab]" />
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="flex items-center gap-[clamp(18px,2.1vw,38px)] max-[1100px]:static max-[1100px]:translate-x-0 max-[1100px]:justify-center max-[1100px]:gap-x-[18px] max-[1100px]:gap-y-3 max-[1100px]:flex-wrap max-[768px]:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-[13px] font-light uppercase tracking-[0.06em] text-white/86 no-underline transition-colors duration-200 hover:text-[#f1e4c5] max-[768px]:text-[11px]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/85 backdrop-blur-[6px] transition-colors duration-200 hover:border-white/30 max-[768px]:inline-flex"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-primary-nav"
            aria-label="Mobile Primary"
            className="absolute left-0 right-0 top-[calc(100%+10px)] hidden rounded-[18px] border border-white/10 bg-[#070e0d]/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-[14px] max-[768px]:block"
          >
            <ul className="flex list-none flex-col gap-1">
              {navItems.map((item) => (
                <li key={`mobile-${item.href}`}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-[12px] px-3 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white/82 no-underline transition-colors duration-200 hover:bg-white/[0.04] hover:text-[#f1e4c5]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="home" aria-label="Hero" className="relative h-screen scroll-mt-28">
        <div className="pt-[80px]">
          <div className="h-[120px] max-[1100px]:h-[100px] max-[768px]:h-[23vh]" />

          <div className="relative z-20 mx-auto w-[min(1000px,calc(100%-32px))] text-center text-[#dfd1b3]">
            <h1 className="flex flex-col gap-[clamp(4px,1vw,18px)] text-[clamp(2.7rem,6.2vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] max-[768px]:leading-[1.07]">
              <span>Where Emotion</span>
              <span>
                Becomes{' '}
                <em className="not-italic font-normal text-[#eadfc0] [text-shadow:0_0_11px_rgba(234,223,192,0.85),0_0_28px_rgba(234,223,192,0.35),0_0_54px_rgba(234,223,192,0.28)]">
                  Tangible
                </em>
              </span>
            </h1>

            <button
              type="button"
              className="cursor-pointer mt-7 px-12 py-4 rounded-full border border-white/5 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.035))] text-[16px] font-medium leading-none text-[#f2f2f2] shadow-[0_4px_20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-[4px] transition-transform duration-200 hover:-translate-y-px hover:border-white/25 max-[768px]:h-[46px] max-[768px]:min-w-[148px] max-[768px]:text-[1.08rem]"
            >
              Get Started
            </button>
          </div>

          <div className="h-[50vh] w-full" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" aria-label="About" className="relative h-screen scroll-mt-28">
        <div className="pt-[80px]">
          <div className="h-[18vh]" />

          <div
            ref={aboutTextRef}
            className="relative z-[5] mx-auto w-[min(900px,calc(100%-32px))] text-center text-[#c8dcc8]"
          >
            <p className="text-[clamp(1.5rem,3.2vw,2.4rem)] font-light leading-[1.5] tracking-[0.01em]">
              We are Ertqa — Saudi Arabia's leading ecosystem uniting design, craftsmanship, and manufacturing.
            </p>
          </div>

          <div className="h-[60vh] w-full" />
        </div>
      </section>
      
      {/* Fixed bottom image */}                                                                                                                                                                          
           <div                                                                                         
             ref={imageRef}                                                                             

            aria-hidden="true"                                                                         
            className="pointer-events-none fixed left-1/2 -bottom-1/2 z-10 w-[98vw] -translate-x-1/2 ml-3.5 max-[768px]:w-[95vw]"                                                 
            >                                                                                            
             <img                                                                                       
              src={watchHeroImage}                                                                     
                alt=""                                                                                   
               className="h-auto w-full object-contain"                                                 
              />
            </div>                                                                                       
                                                                                                         


      {/* ===== ECOSYSTEM SECTION ===== */}
      <section id="ecosystem" ref={ecosystemSectionRef} aria-label="Ecosystem" className="relative h-screen scroll-mt-28">
        <div className="relative mx-auto flex h-full w-[min(1380px,calc(100%-64px))] items-center justify-center max-[1100px]:w-[calc(100%-36px)]">
          {/* Cards grid */}
          <div className="relative z-20 grid h-full w-full grid-cols-2 grid-rows-2 gap-6 py-16 max-[768px]:grid-cols-1 max-[768px]:grid-rows-4 max-[768px]:gap-4">
            {/* Top-left card */}
            <div
              ref={(el) => { cardRefs.current[0] = el; }}
              className="flex items-start justify-start pt-8 max-[768px]:order-1 max-[768px]:pt-0"
            >
              <EcosystemCard
                icon={<Palette size={26} strokeWidth={1.8} />}
                title="An Integrated Ecosystem That Unites Creativity And Manufacturing."
              />
            </div>

            {/* Top-right card */}
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="flex items-start justify-end pt-8 max-[768px]:order-2 max-[768px]:pt-0"
            >
              <EcosystemCard
                icon={<Users size={26} strokeWidth={1.8} />}
                title="A Dedicated Team Driving Success And Trusted Partnerships."
              />
            </div>

            {/* Bottom-left card */}
            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              className="flex items-end justify-start pb-8 max-[768px]:order-3 max-[768px]:pb-0"
            >
              <EcosystemCard
                icon={<Gem size={26} strokeWidth={1.8} />}
                title="A Saudi Identity Fusing Authenticity With Modern Expression."
              />
            </div>

            {/* Bottom-right card */}
            <div
              ref={(el) => { cardRefs.current[3] = el; }}
              className="flex items-end justify-end pb-8 max-[768px]:order-4 max-[768px]:pb-0"
            >
              <EcosystemCard
                icon={<Lightbulb size={26} strokeWidth={1.8} />}
                title="Advanced Manufacturing Enabling Customization And Innovation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HORIZONTAL SCROLL SECTION ===== */}
      <HorizontalScrollSection />
      <ApproachSection />
      <RingShowcaseSection />
      <SiteFooter />

    </main>
  );
}

export default App;
