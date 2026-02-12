"use client";

import { motion } from "framer-motion";
import { processSteps, values } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";

function ProcessStep({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group"
    >
      <div className="flex gap-8 md:gap-12 py-12 border-t border-charcoal/10">
        <div className="flex-shrink-0">
          <span className="text-5xl md:text-6xl font-display font-light text-mocha-200 group-hover:text-mocha-400 transition-colors duration-500">
            {step.number}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="heading-sm text-charcoal mb-3">{step.title}</h3>
              <p className="body-md text-charcoal/60 max-w-lg">
                {step.description}
              </p>
            </div>
            <span className="text-sm font-light text-mocha-500 whitespace-nowrap">
              {step.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Progress line animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-mocha-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function AProposPage() {
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
          À propos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl max-w-4xl"
        >
          Deux passionnés du web,
          <br />
          une vision{" "}
          <span className="text-gradient">commune</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="body-lg text-charcoal/60 max-w-2xl mt-8"
        >
          Nous croyons que chaque entreprise mérite une présence digitale à la
          hauteur de ses ambitions. C&apos;est cette conviction qui guide chacun
          de nos projets.
        </motion.p>
      </section>

      {/* Who we are */}
      <section className="section-padding py-24 md:py-32 bg-gradient-warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label mb-6">Qui sommes-nous</p>
            <h2 className="heading-md mb-8">
              Un studio à taille humaine, des ambitions
              sans limite.
            </h2>
            <div className="space-y-6">
              <p className="body-md text-charcoal/60">
                Studio Kōdo est né de la rencontre de deux designers web
                convaincus qu&apos;il est possible de conjuguer esthétisme,
                performance technique et résultats business.
              </p>
              <p className="body-md text-charcoal/60">
                Notre approche est simple : traiter chaque projet comme s&apos;il
                était le nôtre. Avec la même exigence, la même passion, le même
                souci du détail.
              </p>
              <p className="body-md text-charcoal/60">
                Nous ne faisons pas de template. Nous ne faisons pas de
                copier-coller. Chaque pixel, chaque ligne de code est pensé pour
                servir votre vision et vos objectifs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Team visual placeholder */}
            <div className="aspect-[4/5] rounded-lg bg-mocha-200/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-mocha-300/50 mx-auto mb-6" />
                <div className="w-24 h-24 rounded-full bg-mocha-400/50 mx-auto -mt-4 ml-16" />
                <p className="text-sm text-charcoal/30 mt-8 font-light">
                  Photo d&apos;équipe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label mb-6">Notre méthode</p>
          <h2 className="heading-lg max-w-3xl">
            Un processus éprouvé
            <br />
            pour des <span className="text-gradient">résultats concrets</span>
          </h2>
        </motion.div>

        <div>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-24 md:py-32 bg-gradient-mocha text-offwhite">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label text-mocha-400 mb-6">Nos valeurs</p>
          <h2 className="heading-lg text-offwhite">
            Ce qui nous définit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-white/10 pt-8"
            >
              <h3 className="heading-sm text-offwhite mb-4">{value.title}</h3>
              <p className="body-md text-offwhite/50">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits / Why us */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label mb-6">Pourquoi nous choisir</p>
            <h2 className="heading-lg mb-12">
              Votre succès est notre
              <br />
              <span className="text-gradient">meilleure référence</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-16"
          >
            {[
              {
                title: "Résultats mesurables",
                desc: "Nous ne mesurons pas notre succès au nombre de pixels, mais à l'impact sur votre business.",
              },
              {
                title: "Accompagnement total",
                desc: "De la stratégie au lancement et au-delà. Un seul interlocuteur, une vision cohérente.",
              },
              {
                title: "Technologie de pointe",
                desc: "Les meilleurs outils, les dernières technologies, toujours au service de la performance.",
              },
            ].map((benefit, i) => (
              <div key={benefit.title} className="space-y-3">
                <div className="w-8 h-px bg-mocha-400 mb-4" />
                <h3 className="text-lg font-display font-normal text-charcoal">
                  {benefit.title}
                </h3>
                <p className="body-sm text-charcoal/50">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MagneticButton href="/contact" variant="primary">
              Lancer votre projet
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
