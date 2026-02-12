export const siteConfig = {
  name: "Studio Kōdo",
  tagline: "Nous concevons des expériences digitales d'exception.",
  subtitle: "Design haut de gamme. Performance. Automatisation IA.",
  email: "hello@studiokodo.fr",
  phone: "+33 1 23 45 67 89",
  address: "Paris, France",
  social: {
    instagram: "https://instagram.com/studiokodo",
    linkedin: "https://linkedin.com/company/studiokodo",
    twitter: "https://twitter.com/studiokodo",
    dribbble: "https://dribbble.com/studiokodo",
  },
};

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "3x", label: "Conversion moyenne" },
  { value: "< 1s", label: "Temps de chargement" },
];

export const pillars = [
  {
    number: "01",
    title: "Design Premium",
    description:
      "Chaque pixel est pensé. Nous créons des interfaces élégantes et intuitives qui captivent vos visiteurs dès le premier regard.",
    details: [
      "Direction artistique sur mesure",
      "UI/UX research approfondie",
      "Prototypage interactif",
      "Design system complet",
    ],
  },
  {
    number: "02",
    title: "Développement Sur Mesure",
    description:
      "Performance, accessibilité, scalabilité. Chaque ligne de code est optimisée pour offrir une expérience fluide et rapide.",
    details: [
      "Next.js / React",
      "Animations fluides GSAP",
      "Performance optimisée",
      "SEO technique avancé",
    ],
  },
  {
    number: "03",
    title: "Automatisation Intelligente",
    description:
      "L'IA au service de votre croissance. Automatisation des processus, chatbots intelligents, personnalisation dynamique.",
    details: [
      "Intégration IA sur mesure",
      "Automatisation des workflows",
      "Analytics prédictifs",
      "Optimisation continue",
    ],
  },
];

export const services = [
  {
    id: "site-vitrine",
    title: "Site Vitrine",
    shortTitle: "Vitrine",
    description:
      "Votre image de marque mérite une vitrine à la hauteur de vos ambitions.",
    problem:
      "Votre site actuel ne reflète pas la qualité de vos services. Les visiteurs quittent votre page en quelques secondes.",
    solution:
      "Un site vitrine sur mesure, pensé pour convertir. Design premium, performance optimale, expérience utilisateur exceptionnelle.",
    process: [
      "Audit & stratégie",
      "Design UI/UX",
      "Développement",
      "Optimisation & lancement",
    ],
    results: [
      "Taux de conversion x3",
      "Temps de session +200%",
      "Taux de rebond -60%",
    ],
    icon: "vitrine",
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    shortTitle: "E-Commerce",
    description:
      "Des boutiques en ligne qui transforment les visiteurs en clients fidèles.",
    problem:
      "Votre boutique en ligne a un taux d'abandon de panier élevé et une expérience d'achat peu fluide.",
    solution:
      "Un e-commerce performant et élégant. Tunnel de vente optimisé, UX irréprochable, paiement frictionless.",
    process: [
      "Analyse marché",
      "Design conversion",
      "Développement & intégrations",
      "Tests & optimisation",
    ],
    results: [
      "Chiffre d'affaires +150%",
      "Abandon panier -40%",
      "Panier moyen +35%",
    ],
    icon: "ecommerce",
  },
  {
    id: "application-mobile",
    title: "Application Mobile",
    shortTitle: "Mobile",
    description:
      "Des applications natives et cross-platform d'exception.",
    problem:
      "Vous avez besoin d'une application mobile qui offre une expérience aussi premium que votre marque.",
    solution:
      "Application mobile sur mesure, design natif, performances optimales sur iOS et Android.",
    process: [
      "Product discovery",
      "UI/UX mobile",
      "Développement natif",
      "Beta testing & déploiement",
    ],
    results: [
      "Note App Store 4.8+",
      "Rétention +80%",
      "Engagement quotidien +120%",
    ],
    icon: "mobile",
  },
  {
    id: "refonte",
    title: "Refonte de Site",
    shortTitle: "Refonte",
    description:
      "Transformez votre présence digitale. Modernisez, optimisez, performez.",
    problem:
      "Votre site est daté, lent, et ne génère pas les résultats attendus.",
    solution:
      "Une refonte complète avec audit, nouveau design, architecture moderne et migration en douceur.",
    process: [
      "Audit complet",
      "Stratégie de refonte",
      "Design & développement",
      "Migration & lancement",
    ],
    results: [
      "Performance +300%",
      "Leads +200%",
      "Satisfaction utilisateur +90%",
    ],
    icon: "refonte",
  },
  {
    id: "automatisation-ia",
    title: "Automatisation & IA",
    shortTitle: "IA",
    description:
      "L'intelligence artificielle au service de votre business digital.",
    problem:
      "Des tâches répétitives consomment votre temps. Vos données ne sont pas exploitées à leur plein potentiel.",
    solution:
      "Solutions d'automatisation sur mesure et intégration IA pour optimiser vos processus et votre relation client.",
    process: [
      "Audit des processus",
      "Conception solution IA",
      "Développement & intégration",
      "Formation & optimisation",
    ],
    results: [
      "Temps gagné +70%",
      "Coûts opérationnels -50%",
      "Satisfaction client +40%",
    ],
    icon: "ia",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    shortTitle: "Maintenance",
    description:
      "Un site performant dans la durée. Mises à jour, sécurité, évolutions.",
    problem:
      "Votre site se dégrade avec le temps. Mises à jour manquantes, failles de sécurité, performances en baisse.",
    solution:
      "Un accompagnement continu pour garder votre site au sommet. Monitoring, mises à jour, support réactif.",
    process: [
      "Audit initial",
      "Plan de maintenance",
      "Monitoring continu",
      "Rapports mensuels",
    ],
    results: [
      "Uptime 99.9%",
      "Incidents -95%",
      "Performance constante",
    ],
    icon: "maintenance",
  },
];

export const projects = [
  {
    id: "maison-lumiere",
    title: "Maison Lumière",
    category: "Site Vitrine Premium",
    year: "2025",
    thumbnail: "/projects/maison-lumiere.jpg",
    color: "#D4C0AA",
    context:
      "Maison de haute couture parisienne cherchant à refléter l'excellence de ses créations à travers une présence digitale à la hauteur de son savoir-faire.",
    problem:
      "Un site vieillissant qui ne reflétait ni le prestige de la marque ni la qualité de ses collections. Taux de rebond de 75%.",
    solution:
      "Création d'une expérience immersive avec scroll narratif, animations 3D des collections et un tunnel de prise de rendez-vous intégré.",
    results: [
      { metric: "Taux de rebond", value: "-62%" },
      { metric: "Demandes de RDV", value: "+340%" },
      { metric: "Temps de session", value: "4min 30s" },
    ],
    testimonial: {
      quote:
        "Studio Kōdo a su capturer l'essence de notre maison. Le site est devenu notre plus bel ambassadeur digital.",
      author: "Marie Dupont",
      role: "Directrice Artistique, Maison Lumière",
    },
    stack: ["Next.js", "Three.js", "GSAP", "Headless CMS"],
  },
  {
    id: "verde-organic",
    title: "Verde Organic",
    category: "E-Commerce",
    year: "2025",
    thumbnail: "/projects/verde-organic.jpg",
    color: "#8B9D77",
    context:
      "Marque de cosmétiques bio premium souhaitant lancer sa boutique en ligne avec une expérience d'achat aussi raffinée que ses produits.",
    problem:
      "Lancement de marque sans présence en ligne. Besoin d'un e-commerce qui reflète les valeurs bio et premium de la marque.",
    solution:
      "E-commerce Shopify headless avec personnalisation produit, AR try-on, et tunnel de conversion optimisé par l'IA.",
    results: [
      { metric: "CA premier mois", value: "85K€" },
      { metric: "Taux de conversion", value: "4.2%" },
      { metric: "Panier moyen", value: "127€" },
    ],
    testimonial: {
      quote:
        "Au-delà d'une boutique en ligne, ils ont créé une véritable expérience de marque. Les résultats parlent d'eux-mêmes.",
      author: "Lucas Martin",
      role: "Fondateur, Verde Organic",
    },
    stack: ["Shopify Hydrogen", "React", "Tailwind", "Klaviyo"],
  },
  {
    id: "atlas-fintech",
    title: "Atlas Fintech",
    category: "Application Web & IA",
    year: "2024",
    thumbnail: "/projects/atlas-fintech.jpg",
    color: "#7B8FA1",
    context:
      "Startup fintech en série A développant une plateforme d'investissement augmentée par l'IA pour les investisseurs particuliers.",
    problem:
      "Interface complexe héritée d'un MVP technique. L'application perdait 60% des utilisateurs dans les 7 premiers jours.",
    solution:
      "Refonte UX complète, onboarding gamifié, dashboard intelligent avec recommandations IA et notifications personnalisées.",
    results: [
      { metric: "Rétention J7", value: "+180%" },
      { metric: "AUM", value: "+2.5M€" },
      { metric: "NPS", value: "72" },
    ],
    testimonial: {
      quote:
        "La refonte a transformé notre produit. L'onboarding est devenu notre meilleur outil d'acquisition.",
      author: "Thomas Bernard",
      role: "CEO, Atlas Fintech",
    },
    stack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL"],
  },
];

export const testimonials = [
  {
    quote:
      "Studio Kōdo a su capturer l'essence de notre maison. Le site est devenu notre plus bel ambassadeur digital.",
    author: "Marie Dupont",
    role: "Directrice Artistique, Maison Lumière",
    avatar: "/avatars/marie.jpg",
  },
  {
    quote:
      "Au-delà d'une boutique en ligne, ils ont créé une véritable expérience de marque. Les résultats parlent d'eux-mêmes.",
    author: "Lucas Martin",
    role: "Fondateur, Verde Organic",
    avatar: "/avatars/lucas.jpg",
  },
  {
    quote:
      "La refonte a transformé notre produit. L'onboarding est devenu notre meilleur outil d'acquisition.",
    author: "Thomas Bernard",
    role: "CEO, Atlas Fintech",
    avatar: "/avatars/thomas.jpg",
  },
  {
    quote:
      "Une équipe qui comprend les enjeux business autant que le design. Rare et précieux.",
    author: "Sophie Leclerc",
    role: "CMO, Luxe Ventures",
    avatar: "/avatars/sophie.jpg",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Découverte",
    description:
      "Nous plongeons dans votre univers. Analyse de votre marché, vos objectifs, votre audience. Rien n'est laissé au hasard.",
    duration: "1-2 semaines",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Direction artistique, wireframes, prototypes interactifs. Chaque détail est pensé pour servir vos objectifs business.",
    duration: "2-3 semaines",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Code propre, performant, maintenable. Animations fluides, responsive parfait, optimisation poussée.",
    duration: "3-6 semaines",
  },
  {
    number: "04",
    title: "Lancement",
    description:
      "Tests rigoureux, optimisation performance, déploiement. Puis accompagnement continu pour maximiser vos résultats.",
    duration: "1-2 semaines",
  },
];

export const values = [
  {
    title: "Excellence",
    description:
      "Nous ne livrons que des projets dont nous sommes fiers. Chaque détail compte, chaque interaction est pensée.",
  },
  {
    title: "Innovation",
    description:
      "Nous explorons constamment les nouvelles technologies pour offrir des solutions à la pointe.",
  },
  {
    title: "Fiabilité",
    description:
      "Délais respectés, communication transparente, résultats mesurables. Votre confiance est notre priorité.",
  },
  {
    title: "Sur Mesure",
    description:
      "Pas de templates, pas de copier-coller. Chaque projet est unique, comme votre entreprise.",
  },
];
