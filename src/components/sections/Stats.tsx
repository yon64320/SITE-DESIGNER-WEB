"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Stats() {
  return (
    <section className="section-padding py-24 md:py-32 bg-gradient-warm">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="label">En chiffres</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center md:text-left"
          >
            <div className="heading-lg text-charcoal mb-2">
              <AnimatedCounter value={stat.value} />
            </div>
            <p className="body-sm text-charcoal/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
