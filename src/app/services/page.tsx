"use client";

import { motion } from "framer-motion";
import { services } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-t border-charcoal/10 py-16 md:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left: Title & Description */}
        <div className="lg:col-span-5">
          <span className="text-sm font-light text-mocha-500 mb-4 block">
            0{index + 1}
          </span>
          <h2 className="heading-md text-charcoal mb-4 group-hover:text-mocha-600 transition-colors duration-500">
            {service.title}
          </h2>
          <p className="body-lg text-charcoal/60">{service.description}</p>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-7 space-y-10">
          {/* Problem */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-3">
              Le problème
            </h3>
            <p className="body-md text-charcoal/60">{service.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-3">
              Notre solution
            </h3>
            <p className="body-md text-charcoal/60">{service.solution}</p>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-4">
              Le process
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.process.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal/10 text-sm font-light text-charcoal/60"
                >
                  <span className="w-5 h-5 rounded-full bg-mocha-100 text-mocha-600 text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-4">
              Résultats attendus
            </h3>
            <div className="flex flex-wrap gap-6">
              {service.results.map((result) => (
                <div key={result} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-mocha-400" />
                  <span className="text-sm font-medium text-charcoal">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <MagneticButton href="/contact" variant="secondary">
              Discutons de votre projet
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
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
          Nos services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl max-w-4xl"
        >
          Des solutions
          <br />
          <span className="text-gradient">sur mesure</span> pour
          <br />
          chaque ambition.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="body-lg text-charcoal/60 max-w-2xl mt-8"
        >
          Du site vitrine à l&apos;application IA, nous maîtrisons l&apos;ensemble
          de la chaîne de création digitale.
        </motion.p>
      </section>

      {/* Service quick nav */}
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-5 py-2.5 rounded-full border border-charcoal/10 text-sm font-light text-charcoal/60 hover:border-mocha-400 hover:text-mocha-600 hover:bg-mocha-50 transition-all duration-300"
            >
              {service.shortTitle}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding pb-24 md:pb-32">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </section>

      {/* Final CTA */}
      <section className="section-padding py-24 md:py-32 bg-gradient-warm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label mb-6">Prêt à démarrer ?</p>
            <h2 className="heading-lg mb-8">
              Chaque grand projet
              <br />
              commence par une{" "}
              <span className="text-gradient">conversation</span>
            </h2>
            <p className="body-lg text-charcoal/60 mb-12">
              Parlez-nous de votre vision. Nous vous dirons comment
              la concrétiser.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Prendre rendez-vous
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
