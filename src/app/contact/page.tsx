"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import MagneticButton from "@/components/ui/MagneticButton";

const budgetOptions = [
  "5 000€ - 10 000€",
  "10 000€ - 25 000€",
  "25 000€ - 50 000€",
  "50 000€+",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-40 pb-16 md:pt-48 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label mb-8"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl max-w-4xl"
        >
          Parlons de votre
          <br />
          <span className="text-gradient">prochain projet</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="body-lg text-charcoal/60 max-w-xl mt-8"
        >
          Remplissez le formulaire ci-dessous ou contactez-nous directement.
          Nous revenons vers vous sous 24h.
        </motion.p>
      </section>

      {/* Form Section */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-mocha-100 flex items-center justify-center mx-auto mb-8">
                  <span className="text-2xl text-mocha-600">✓</span>
                </div>
                <h2 className="heading-md mb-4">Message envoyé</h2>
                <p className="body-md text-charcoal/60">
                  Merci pour votre intérêt. Nous revenons vers vous très
                  rapidement.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-3"
                  >
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-charcoal/10 pb-4 text-lg font-light text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-mocha-400 transition-colors duration-500"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-charcoal/10 pb-4 text-lg font-light text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-mocha-400 transition-colors duration-500"
                    placeholder="jean@entreprise.fr"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">
                    Budget estimé
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, budget: option })
                        }
                        className={`px-5 py-2.5 rounded-full border text-sm font-light transition-all duration-300 ${
                          formData.budget === option
                            ? "border-mocha-500 bg-mocha-500 text-offwhite"
                            : "border-charcoal/10 text-charcoal/50 hover:border-mocha-300 hover:text-mocha-600"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-3"
                  >
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-charcoal/10 pb-4 text-lg font-light text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-mocha-400 transition-colors duration-500 resize-none"
                    placeholder="Décrivez brièvement votre projet..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <MagneticButton type="submit" variant="primary">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="inline-block w-4 h-4 border-2 border-offwhite/30 border-t-offwhite rounded-full"
                        />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32 space-y-10">
              {/* Direct Contact */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">
                  Contact direct
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block text-lg font-light text-charcoal hover:text-mocha-600 transition-colors duration-300"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="block text-lg font-light text-charcoal hover:text-mocha-600 transition-colors duration-300"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">
                  Localisation
                </h3>
                <p className="text-lg font-light text-charcoal">
                  {siteConfig.address}
                </p>
              </div>

              {/* Calendly placeholder */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">
                  Prendre rendez-vous
                </h3>
                <div className="p-8 rounded-lg border border-charcoal/10 bg-sand/50 text-center">
                  <p className="text-sm font-light text-charcoal/50 mb-4">
                    Réservez un créneau de 30 minutes pour discuter de votre
                    projet.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-mocha-400 text-sm font-light text-mocha-600 hover:bg-mocha-400 hover:text-offwhite transition-all duration-300"
                  >
                    Ouvrir Calendly
                  </a>
                  <p className="text-xs text-charcoal/30 mt-3">
                    Intégration Calendly à configurer
                  </p>
                </div>
              </div>

              {/* Reassurance */}
              <div className="p-6 rounded-lg bg-mocha-50/50 border border-mocha-100">
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">
                  <span className="font-medium text-charcoal">
                    Réponse sous 24h.
                  </span>{" "}
                  Nous prenons le temps de lire et comprendre chaque demande
                  avant de vous répondre avec une proposition adaptée.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
