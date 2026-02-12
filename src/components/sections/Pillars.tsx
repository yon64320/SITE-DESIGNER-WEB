"use client";

import { motion } from "framer-motion";
import { pillars } from "@/data/site";

export default function Pillars() {
  return (
    <section className="section-padding py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="label mb-6">Notre expertise</p>
        <h2 className="heading-lg max-w-3xl">
          Trois piliers pour des projets{" "}
          <span className="text-gradient">d&apos;excellence</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group border-t border-charcoal/10 py-12 md:py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-1">
                <span className="text-sm font-light text-mocha-500">
                  {pillar.number}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="heading-sm text-charcoal group-hover:text-mocha-600 transition-colors duration-500">
                  {pillar.title}
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="body-md text-charcoal/60">
                  {pillar.description}
                </p>
              </div>

              <div className="lg:col-span-3">
                <ul className="space-y-2">
                  {pillar.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm font-light text-charcoal/40 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-mocha-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
