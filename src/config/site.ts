/**
 * Informations de la société, centralisées ici.
 * Une valeur `null` masque l'information correspondante sur le site (aucun « [À FOURNIR] » visible).
 * Liste complète des contenus à fournir : voir DECISIONS.md.
 */
export const site = {
  name: 'Asans6',
  legalForm: 'SAS',
  tagline: 'Société d’ingénierie logicielle',
  description:
    'Asans6 est une société fondée par trois ingénieurs. Elle conçoit et développe ses propres logiciels, dont Factually, un outil de vérification des faits assisté par IA.',
  locale: 'fr_FR',
  /**
   * Indexation par les moteurs de recherche. `false` tant que le site n'est pas lancé
   * (ajoute <meta name="robots" content="noindex"> sur toutes les pages). Passer à `true` au lancement.
   */
  indexable: false,

  contact: {
    email: 'contact@asans6.fr' as string | null,
    phone: null as string | null,
    address: '61 rue de Lyon, 75012 Paris' as string | null,
    linkedin: null as string | null,
  },

  /**
   * Formulaire de contact : URL d'envoi d'un service de formulaires statique
   * (ex. Formspree : https://formspree.io/f/xxxxxxx). Voir README.
   */
  formEndpoint: null as string | null,
  /** Nom du service de formulaire (cité dans la politique de confidentialité), une fois branché. */
  formService: null as string | null,

  legal: {
    companyName: 'Asans6',
    // Valeur `null` : la ligne n'est pas affichée (pas d'emplacement « [À FOURNIR] » visible).
    capital: null as string | null,
    rcs: 'RCS Paris 132 498 775' as string | null,
    siren: '132 498 775' as string | null,
    // Pas encore de numéro de TVA valide (annuaire officiel des entreprises, novembre 2026).
    vat: null as string | null,
    headOffice: '61 rue de Lyon, 75012 Paris' as string | null,
    publicationDirector: null as string | null,
    host: {
      name: 'GitHub, Inc. (service GitHub Pages)',
      address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
      website: 'https://github.com',
      phone: null as string | null,
    },
  },
} as const;
