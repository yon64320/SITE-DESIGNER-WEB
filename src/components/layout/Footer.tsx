"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navigation, siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warmblack text-offwhite/80">
      {/* CTA Section */}
      <section className="section-padding py-24 md:py-32 border-b border-white/5">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label text-mocha-400 mb-6"
          >
            Prochain projet
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-xl text-offwhite mb-10"
          >
            Vous avez un projet ?
            <br />
            <span className="text-mocha-400">Discutons.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-lg font-body font-light tracking-wide text-offwhite group"
            >
              <span className="relative">
                Lancer votre projet
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-mocha-400 transition-all duration-500 group-hover:w-full" />
              </span>
              <motion.span
                className="text-mocha-400"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl text-offwhite">
              <span className="font-light">Studio</span>{" "}
              <span className="font-medium">Kōdo</span>
            </Link>
            <p className="mt-4 text-sm font-light text-offwhite/40 leading-relaxed">
              Studio de création digitale premium.
              <br />
              Design, développement & IA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-offwhite/30 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-offwhite/50 hover:text-offwhite transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-offwhite/30 mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-light text-offwhite/50 hover:text-offwhite transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm font-light text-offwhite/50 hover:text-offwhite transition-colors duration-300"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-sm font-light text-offwhite/50">
                {siteConfig.address}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-offwhite/30 mb-6">
              Suivez-nous
            </h4>
            <ul className="space-y-3">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-offwhite/50 hover:text-offwhite transition-colors duration-300 capitalize"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-xs font-light text-offwhite/30">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-xs font-light text-offwhite/30 mt-2 md:mt-0">
            Conçu et développé avec passion à Paris.
          </p>
        </div>
      </div>
    </footer>
  );
}
