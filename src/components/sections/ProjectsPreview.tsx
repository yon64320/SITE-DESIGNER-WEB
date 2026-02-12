"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/site";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/realisations#${project.id}`}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
          {/* Placeholder with project color */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundColor: project.color }}
          >
            {/* Abstract pattern for placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div style={{ y }} className="text-center">
                <span className="font-display text-4xl md:text-5xl font-light text-white/30">
                  {project.title}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs tracking-wider uppercase bg-white/90 backdrop-blur-sm rounded-full text-charcoal">
              {project.category}
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="heading-sm text-charcoal group-hover:text-mocha-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="body-sm text-charcoal/50 mt-1">
              {project.category} — {project.year}
            </p>
          </div>

          <motion.span
            className="text-mocha-500 mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            →
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPreview() {
  return (
    <section className="section-padding py-24 md:py-32 bg-gradient-warm">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label mb-6">Réalisations</p>
          <h2 className="heading-lg">
            Nos projets
            <br />
            <span className="text-gradient">parlent d&apos;eux-mêmes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-charcoal/50 hover:text-charcoal transition-colors duration-300 mt-6 md:mt-0 group"
          >
            Tout voir
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
