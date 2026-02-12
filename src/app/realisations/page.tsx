"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";

function ProjectCase({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section
      ref={sectionRef}
      id={project.id}
      className={`py-24 md:py-32 ${index % 2 === 1 ? "bg-gradient-warm" : ""}`}
    >
      <div className="section-padding">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="label">{project.category}</span>
            <span className="w-8 h-px bg-charcoal/20" />
            <span className="text-sm font-light text-charcoal/40">
              {project.year}
            </span>
          </div>
          <h2 className="heading-xl">{project.title}</h2>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-lg aspect-[16/9] mb-16"
        >
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <span className="font-display text-5xl md:text-7xl font-light text-white/20">
                {project.title}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Context & Problem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-4">
                Contexte
              </h3>
              <p className="body-md text-charcoal/70">{project.context}</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-4">
                Problématique
              </h3>
              <p className="body-md text-charcoal/70">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-4">
                Solution
              </h3>
              <p className="body-md text-charcoal/70">{project.solution}</p>
            </div>
          </motion.div>

          {/* Right: Results & Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Results */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-6">
                Résultats
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.results.map((result) => (
                  <div
                    key={result.metric}
                    className="text-center p-6 rounded-lg bg-offwhite border border-charcoal/5"
                  >
                    <p className="text-3xl font-display font-light text-charcoal mb-2">
                      {result.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-charcoal/40">
                      {result.metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="p-8 rounded-lg bg-mocha-50/50 border border-mocha-100">
              <span className="text-3xl font-display text-mocha-300">
                &ldquo;
              </span>
              <blockquote className="text-lg font-display italic text-charcoal/70 leading-relaxed mt-2 mb-6">
                {project.testimonial.quote}
              </blockquote>
              <div>
                <p className="text-sm font-medium text-charcoal">
                  {project.testimonial.author}
                </p>
                <p className="text-sm font-light text-charcoal/50">
                  {project.testimonial.role}
                </p>
              </div>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-4">
                Stack technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-light tracking-wide border border-charcoal/10 rounded-full text-charcoal/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-40 pb-24 md:pt-48 md:pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label mb-8"
        >
          Réalisations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl max-w-4xl"
        >
          Chaque projet est une
          <br />
          <span className="text-gradient">histoire de réussite</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="body-lg text-charcoal/60 max-w-2xl mt-8"
        >
          Découvrez comment nous avons aidé nos clients à transformer
          leur vision en réalité digitale.
        </motion.p>
      </section>

      {/* Projects */}
      {projects.map((project, i) => (
        <ProjectCase key={project.id} project={project} index={i} />
      ))}

      {/* CTA */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="heading-lg mb-8">
              Votre projet sera-t-il
              <br />
              <span className="text-gradient">le prochain ?</span>
            </h2>
            <MagneticButton href="/contact" variant="primary">
              Discutons de votre projet
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
