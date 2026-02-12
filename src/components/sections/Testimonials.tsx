"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="label">Ce qu&apos;ils en disent</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mb-8">
                <span className="text-6xl font-display text-mocha-300">&ldquo;</span>
              </div>

              <blockquote className="heading-sm text-charcoal/80 font-display italic leading-relaxed mb-10">
                {testimonials[current].quote}
              </blockquote>

              <div>
                <p className="text-sm font-body font-medium text-charcoal">
                  {testimonials[current].author}
                </p>
                <p className="text-sm font-body font-light text-charcoal/50 mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/40 hover:border-charcoal/30 hover:text-charcoal transition-all duration-300"
            aria-label="Témoignage précédent"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-mocha-500 w-6"
                    : "bg-charcoal/15 hover:bg-charcoal/30"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/40 hover:border-charcoal/30 hover:text-charcoal transition-all duration-300"
            aria-label="Témoignage suivant"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
