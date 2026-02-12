"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import Scene from "@/components/three/Scene";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        lineRef.current,
        {
          scaleX: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden"
    >
      <Scene />

      <div className="relative z-10 max-w-5xl pt-24">
        <div className="mb-8">
          <p className="label mb-8">Studio de création digitale</p>
        </div>

        <h1 ref={titleRef} className="heading-xl mb-8">
          Nous concevons des
          <br />
          <span className="text-gradient">expériences digitales</span>
          <br />
          d&apos;exception.
        </h1>

        <p
          ref={subtitleRef}
          className="body-lg text-charcoal/60 max-w-xl mb-12"
        >
          Design haut de gamme. Performance. Automatisation IA.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <MagneticButton href="/contact" variant="primary">
            Discutons de votre projet
          </MagneticButton>
          <MagneticButton href="/realisations" variant="secondary">
            Voir nos réalisations
          </MagneticButton>
        </div>
      </div>

      <div
        ref={lineRef}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 xl:left-32 right-6 md:right-12 lg:right-24 xl:right-32 h-px bg-charcoal/10 origin-left"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 xl:right-32 flex flex-col items-center gap-2">
        <span className="text-xs font-light tracking-widest text-charcoal/30 rotate-90 origin-center translate-y-8">
          SCROLL
        </span>
      </div>
    </section>
  );
}
