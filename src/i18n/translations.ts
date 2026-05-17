export const defaultLang = 'en' as const;
export type Lang = 'en' | 'fr';

export const translations = {
  en: {
    meta: {
      title: 'Sagency - Custom digital development agency',
      description:
        'Sagency designs and develops your web, mobile, AI, cloud and IoT applications. From roadmap to deployment, a dedicated team of experts for your product.',
      ogLocale: 'en_US',
    },
    nav: {
      about: 'About',
      services: 'Services',
      process: 'Process',
      projects: 'Projects',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a call',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      tagline: 'Sagency',
      title: 'Your technology partner to develop your solutions.',
      subtitle: 'A product idea? We accompany you to turn it into reality',
      cta: 'Start your project',
    },
    about: {
      num: '01',
      tag: '[ABOUT US]',
      title: 'Your expert partner in computer engineering',
      description:
        'We digitize your processes through tailor-made projects. Between consulting and technology, we create your growth levers.',
      cta: 'Contact us',
      cards: [
        {
          title: 'Strategic Design',
          description:
            'We frame your needs to create tools that save your teams time from day one.',
          stat: '10+',
          statLabel: 'sectors covered',
        },
        {
          title: 'Technical Expertise',
          description:
            'Your solutions are developed by certified and experienced experts, ensuring state-of-the-art architecture and total security.',
          stat: '50+',
          statLabel: 'tools mastered',
        },
        {
          title: 'Sustainable Support',
          description:
            'We ensure the maintenance and evolution of your tools to offer you peace of mind in the long term.',
          stat: '24/7',
          statLabel: 'technical support',
        },
      ],
    },
    services: {
      num: '02',
      tag: '[OUR SERVICES]',
      titleHtml:
        'Experts in development across all <strong>technologies & platforms</strong>',
      items: [
        {
          title: 'Web Application',
          description:
            'We design and develop modern web applications and high-performance, scalable SaaS platforms.',
          alt: 'Web Application',
        },
        {
          title: 'Mobile Application',
          description: 'Fast and intuitive mobile applications, designed for iOS and Android.',
          alt: 'Mobile Application',
        },
        {
          title: 'Systems, Networks & Cloud',
          description: 'Network architecture, DevOps practices and infrastructure deployment.',
          alt: 'Systems, Networks & Cloud',
        },
        {
          title: 'Artificial Intelligence',
          description: 'We integrate AI into your products to create smarter applications.',
          alt: 'Artificial Intelligence',
        },
        {
          title: 'Connected Objects',
          description: 'Design and development of embedded systems and IoT.',
          alt: 'Connected Objects',
        },
        {
          title: 'Cybersecurity',
          description: 'Audit, protection and reinforcement of your systems security.',
          alt: 'Cybersecurity',
        },
      ],
    },
    process: {
      num: '03',
      tag: '[THE PROCESS]',
      title: '4 steps to go from idea to market',
      steps: [
        {
          title: '1. Project Idea',
          description:
            'We study your needs and frame your vision to lay solid foundations before any realization.',
          alt: 'Project Idea',
        },
        {
          title: '2. Plan the Roadmap',
          description:
            'We define the technical architecture and establish the detailed project roadmap.',
          alt: 'Plan the Roadmap',
        },
        {
          title: '3. Development & Execution',
          description:
            'Our teams develop and deliver your solution in rapid iterations with regular feedback.',
          alt: 'Development & Execution',
        },
      ],
      last: {
        title: '4. Launch & Evolve',
        description:
          'We deploy and evolve your product in the long term. Our goal is to ensure its stability, performance and ability to support your growth.',
        alt: 'Launch & Evolve',
      },
    },
    cta: {
      title: 'Ready to build your project with us?',
      btn: 'Start your project',
    },
    projects: {
      num: '04',
      tag: '[OUR PROJECTS]',
      title: 'Some examples of projects we have completed',
      items: [
        {
          title: 'Vending machine software',
          description:
            'Embedded application to control and monitor connected vending machines in real time.',
          category: 'Connected Objects',
          sector: 'IoT',
        },
        {
          title: 'Electrician activity management',
          description:
            'SaaS platform allowing electricians to manage their worksites and handle quotes and invoices from a dashboard.',
          category: 'Web Application',
          sector: 'PropTech',
        },
        {
          title: 'User relationship analysis application',
          description:
            'Application to analyze user relationships with a graph of all relations.',
          category: 'Web Application',
          sector: 'Cybersecurity',
        },
        {
          title: 'Social network',
          description:
            'Social network allowing to share photos and videos with friends, inspired by Twitter.',
          category: 'Web Application',
          sector: 'Social Media',
        },
        {
          title: 'Accommodation booking platform',
          description:
            'Accommodation booking marketplace for individuals in the style of Airbnb.',
          category: 'Mobile Application',
          sector: 'Travel Tech',
        },
        {
          title: 'Cybersecurity audit',
          description:
            'Cybersecurity audit of a company with several million records to find and fix vulnerabilities.',
          category: 'Cybersecurity',
          sector: 'Publishing Tech',
        },
        {
          title: 'AI flight price prediction',
          description:
            'Training an AI model to predict flight prices based on different criteria.',
          category: 'AI',
          sector: 'Travel Tech',
        },
        {
          title: 'Network infrastructure overhaul and application deployment',
          description:
            'Deploying applications on a new server infrastructure to improve performance and security.',
          category: 'Systems & Networks',
          sector: 'IT',
        },
        {
          title: 'Back-office',
          description:
            'Development of a complete back-office to manage all resources of a public web application.',
          category: 'Web Application',
          sector: 'IT',
        },
      ],
    },
    faq: {
      num: '05',
      tag: '[FAQ]',
      title: 'Frequently asked questions we receive from our clients.',
      ctaQuestion: 'Another question?',
      ctaBtn: 'Book a call',
      ctaOr: 'or send us an email at',
      items: [
        {
          question: 'How long does it take to build a product?',
          answer:
            'It depends on the scope and complexity. A typical MVP takes 2 to 8 weeks, while more complex projects can take 3 to 6 months. We will provide you with a detailed timeline after understanding your needs.',
        },
        {
          question: 'Do you work with companies and individuals?',
          answer:
            'We work with both companies and individuals. Whether you are a company looking to modernize its internal tools or an individual looking to develop a product, we adapt our approach to your context.',
        },
        {
          question: 'What is included in your services?',
          answer:
            'Our services cover the entire cycle: UX/UI design, front-end and back-end development, API integration, cloud deployment, and post-launch maintenance. All under one roof.',
        },
        {
          question: 'How does day-to-day collaboration work?',
          answer:
            'We work in sprints with regular check-ins. You have access to a real-time tracking board, and our teams remain available via your preferred messaging channel throughout the project.',
        },
        {
          question: 'How are rates and payment terms set?',
          answer:
            'We offer custom quotes based on the project scope. A deposit is required at the start, with the balance paid according to milestones defined together. We remain transparent about costs from the framing phase.',
        },
        {
          question: 'Who owns the code and deliverables at the end of the project?',
          answer:
            'You own everything we produce: source code, mockups, documentation. We deliver the accesses and repositories to you. No technical dependency ties you to us after delivery.',
        },
        {
          question: 'Do you offer maintenance or support after launch?',
          answer:
            'Yes. We can set up a maintenance contract (patches, minor upgrades, monitoring) or ad-hoc services. We will propose an offer adapted to your needs at the end of the project.',
        },
        {
          question: 'Do you work remotely or on-site?',
          answer:
            'We work primarily remotely with adapted tools. On-site travel can be arranged if your project or organization requires it.',
        },
        {
          question: 'How do I start a project with you?',
          answer:
            'Book a call via the form or by email. We discuss your idea, constraints and objectives. Then we send you a detailed proposal (scope, schedule, budget). Once validated, we launch the project.',
        },
        {
          question: 'Can you take over or evolve an existing project?',
          answer:
            'Yes. We can audit your current code or product, propose evolutions or a redesign. We adapt to your technical stack and your existing team.',
        },
      ],
    },
    contact: {
      titleGray1: "Let's build",
      titleBlack1: 'something',
      titleGray2: 'great',
      titleBlack2: 'together',
      subtitle:
        'Tell us about your project, we will come back to you with insights, timelines, and the best way to achieve it.',
      formInfo: 'Information',
      formNamePlaceholder: 'Your name',
      formEmailPlaceholder: 'address@email.com',
      formMessagePlaceholder: 'Tell us a bit about your idea or product...',
      formNeeds: 'What are your needs?',
      formBudget: 'Budget',
      formTimeline: 'Target launch timeline',
      formSend: 'Send message',
      formSending: 'Sending…',
      formSuccess: 'Message sent! We will reply within 1 business day.',
      formCheckFields: 'Please check the form fields.',
      formError: 'An error occurred. Please try again.',
      errorName: 'Name is required',
      errorEmailRequired: 'Email is required',
      errorEmailInvalid: 'Email is invalid',
      errorMessage: 'Message is required',
      needs: [
        'Mobile App',
        'Backend',
        'Web App',
        'Automation',
        'Systems, Networks & Cloud',
        'Artificial Intelligence',
        'Connected Objects',
        'Cybersecurity',
        'Blockchain',
        'Other',
      ],
      budgets: [
        'Less than €1k',
        '€1k–5k',
        '€5k–10k',
        '€10k–15k',
        '€15k–30k',
        '€35k–60k',
        '€70k–100k',
        '€100k+',
      ],
      timelines: ['As soon as possible', '1–2 Months', '3–6 Months', '6+ Months', 'Not sure yet'],
      cardTitle: 'Would you prefer to discuss it?',
      cardSubtitle:
        'Schedule a quick call with our team, we will get to know your goals and see how we can help you.',
      cardBtn: 'Book a 30 min call',
      cardDisclaimer: 'No commitment — just a conversation.',
      cardEmailLabel: 'Or send us an email',
      cardEmailReply: 'We reply within 1 business day.',
    },
    footer: {
      tagline: 'Building digital products that shine.',
      description:
        'We are a digital development agency specialized in creating custom solutions.',
      cta: 'Start your project',
      linksTitle: 'Links',
      socialsTitle: 'Socials',
      copyright: 'My Agency. All rights reserved.',
      legal: 'Legal notices',
      about: 'About',
      services: 'Services',
      process: 'Process',
      projects: 'Projects',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },

  fr: {
    meta: {
      title: 'Sagency - Agence de développement digital sur mesure',
      description:
        "Sagency conçoit et développe vos applications web, mobiles, IA, cloud et IoT. De la roadmap au déploiement, une équipe d'experts dédiée à votre produit.",
      ogLocale: 'fr_FR',
    },
    nav: {
      about: 'À propos',
      services: 'Services',
      process: 'Processus',
      projects: 'Projets',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Réserver un appel',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    hero: {
      tagline: 'Sagency',
      title: 'Votre partenaire technologique pour développer vos solutions.',
      subtitle: 'Une idée de produit ? Nous vous accompagnons pour la transformer en réalité',
      cta: 'Commencer votre projet',
    },
    about: {
      num: '01',
      tag: '[À PROPOS DE NOUS]',
      title: 'Votre partenaire expert en ingénierie informatique',
      description:
        'Nous digitalisons vos processus par des projets sur mesure. Entre conseil et technologie, nous créons vos leviers de croissance.',
      cta: 'Nous contacter',
      cards: [
        {
          title: 'Conception Stratégique',
          description:
            'Nous cadrons vos besoins pour créer des outils qui font gagner du temps à vos équipes dès le premier jour.',
          stat: '10+',
          statLabel: 'secteurs couverts',
        },
        {
          title: 'Expertise Technique',
          description:
            "Vos solutions sont développées par des experts certifiés et expérimentés, garantissant une architecture de pointe et une sécurité totale.",
          stat: '50+',
          statLabel: 'outils maîtrisés',
        },
        {
          title: 'Accompagnement Durable',
          description:
            "Nous assurons la maintenance et l'évolution de vos outils pour vous offrir une tranquillité d'esprit sur le long terme.",
          stat: '24/7',
          statLabel: 'support technique',
        },
      ],
    },
    services: {
      num: '02',
      tag: '[NOS SERVICES]',
      titleHtml:
        'Des experts du développement sur toutes les <strong>technologies & plateformes</strong>',
      items: [
        {
          title: 'Application Web',
          description:
            'Nous concevons et développons des applications web modernes et des plateformes SaaS performantes et évolutives.',
          alt: 'Application Web',
        },
        {
          title: 'Application Mobile',
          description: 'Des applications mobiles rapides et intuitives, conçues pour iOS et Android.',
          alt: 'Application Mobile',
        },
        {
          title: 'Système, Réseaux & Cloud',
          description: "Architecture réseau, pratiques DevOps et déploiement d'infrastructures.",
          alt: 'Système, Réseaux & Cloud',
        },
        {
          title: 'Intelligence Artificielle',
          description:
            "Nous intégrons l'IA dans vos produits pour créer des applications plus intelligentes.",
          alt: 'Intelligence Artificielle',
        },
        {
          title: 'Objets connectés',
          description: 'Conception et développement de systèmes embarqués et IoT.',
          alt: 'Objets connectés',
        },
        {
          title: 'Cybersécurité',
          description: 'Audit, protection et renforcement de la sécurité de vos systèmes.',
          alt: 'Cybersécurité',
        },
      ],
    },
    process: {
      num: '03',
      tag: '[LE PROCESSUS]',
      title: "4 étapes pour passer de l'idée au marché",
      steps: [
        {
          title: '1. Idée de projet',
          description:
            'Nous étudions vos besoins et cadrons votre vision pour poser des bases solides avant toute réalisation.',
          alt: 'Project Idea',
        },
        {
          title: '2. Planifier la roadmap',
          description:
            'Nous définissons l\'architecture technique et établissons la feuille de route détaillée du projet.',
          alt: 'Plan the Roadmap',
        },
        {
          title: '3. Développement & Exécution',
          description:
            'Nos équipes développent et livrent votre solution en itérations rapides avec des retours réguliers.',
          alt: 'Development & Execution',
        },
      ],
      last: {
        title: '4. Lancer & Évoluer',
        description:
          'Nous déployons et faisons évoluer votre produit sur le long terme. Notre objectif est de garantir sa stabilité, sa performance et sa capacité à accompagner votre croissance.',
        alt: 'Lancer & Évoluer',
      },
    },
    cta: {
      title: 'Prêt à construire votre projet avec nous ?',
      btn: 'Commencer votre projet',
    },
    projects: {
      num: '04',
      tag: '[NOS PROJETS]',
      title: 'Voici des exemples des projets que nous avons réalisés',
      items: [
        {
          title: 'Logiciel distributeur automatique',
          description:
            'Application embarquée pour piloter et monitorer des distributeurs automatiques connectés en temps réel.',
          category: 'Objets Connectés',
          sector: 'IoT',
        },
        {
          title: "Gestion d'activités électriciens",
          description:
            'Plateforme SaaS permettant aux électriciens de gérer leurs chantiers et les manager des devis et factures depuis un dashboard.',
          category: 'Application Web',
          sector: 'PropTech',
        },
        {
          title: "Application d'analyse de relations utilisateurs",
          description:
            'Application permettant d\'analyser les relations utilisateurs avec un graphique de toutes les relations.',
          category: 'Application Web',
          sector: 'Cybersécurité',
        },
        {
          title: 'Réseau social',
          description:
            "Réseau social permettant de partager des photos et des vidéos avec des amis qui s'inspire de Twitter.",
          category: 'Application Web',
          sector: 'Social Media',
        },
        {
          title: "Plateforme de réservation d'hébergements",
          description:
            "Marketplace de réservation d'hébergements pour des particuliers au style d'Airbnb",
          category: 'Application Mobile',
          sector: 'Travel Tech',
        },
        {
          title: 'Audit cybersécurité',
          description:
            "Audit cybersécurité d'une entreprise avec plusieurs millions de données pour trouver les vulnérabilités et des corriger.",
          category: 'Cybersécurité',
          sector: 'Publishing Tech',
        },
        {
          title: 'Prédiction de prix de vols avec IA',
          description:
            'Entrainement d\'un modèle IA permettant de prédire les prix de vols en fonction de différents critères.',
          category: 'IA',
          sector: 'Travel Tech',
        },
        {
          title: "Refonte d'infrastructure réseau et déploiement applicatif",
          description:
            "Déploiement de ses applications sur une nouvelle infrastructure serveur afin d'améliorer la performance et la sécurité.",
          category: 'Système & Réseaux',
          sector: 'IT',
        },
        {
          title: 'Back-office',
          description:
            "Développement d'un back-office complet pour gérer toutes les ressources d'une application web publique.",
          category: 'Application Web',
          sector: 'IT',
        },
      ],
    },
    faq: {
      num: '05',
      tag: '[FAQ]',
      title: 'Les questions fréquentes que nous recevons de nos clients.',
      ctaQuestion: 'Une autre question ?',
      ctaBtn: 'Réserver un appel',
      ctaOr: 'ou envoyez-nous un email à',
      items: [
        {
          question: 'Combien de temps faut-il pour construire un produit ?',
          answer:
            'Cela dépend de la portée et de la complexité. Un MVP typique prend 2 à 8 semaines, tandis que des projets plus complexes peuvent prendre 3 à 6 mois. Nous vous fournirons un calendrier détaillé après avoir compris vos besoins.',
        },
        {
          question: 'Travaillez-vous avec des entreprises et particuliers ?',
          answer:
            "Nous travaillons avec les entreprises et les particuliers. Que vous soyez une entreprise souhaitant moderniser ses outils internes ou un particulier souhaitant développer un produit, nous adaptons notre approche à votre contexte.",
        },
        {
          question: "Qu'est-ce qui est inclus dans vos services ?",
          answer:
            "Nos services couvrent l'ensemble du cycle, conception UX/UI, développement front-end et back-end, intégration d'API, déploiement cloud, et maintenance post-lancement. Tout sous un même toit.",
        },
        {
          question: 'Comment se déroule la collaboration au quotidien ?',
          answer:
            'Nous travaillons en sprints avec des points réguliers. Vous avez accès à un tableau de suivi en temps réel, et nos équipes restent disponibles via votre canal de messagerie préféré tout au long du projet.',
        },
        {
          question: 'Comment sont fixés les tarifs et les modalités de paiement ?',
          answer:
            "Nous proposons des devis sur mesure selon la portée du projet. Un acompte est demandé au démarrage, le solde étant réglé selon des jalons définis ensemble. Nous restons transparents sur les coûts dès la phase de cadrage.",
        },
        {
          question: 'Qui possède le code et les livrables à la fin du projet ?',
          answer:
            "Vous êtes propriétaire de tout ce que nous produisons, code source, maquettes, documentation. Nous vous livrons les accès et les dépôts. Aucune dépendance technique ne vous lie à nous après la livraison.",
        },
        {
          question: 'Proposez-vous une maintenance ou un support après le lancement ?',
          answer:
            "Oui. Nous pouvons mettre en place un contrat de maintenance (correctifs, évolutions mineures, surveillance) ou des prestations ponctuelles. Nous vous proposons une offre adaptée à la fin du projet.",
        },
        {
          question: 'Travaillez-vous à distance ou sur site ?',
          answer:
            "Nous travaillons principalement en remote avec des outils adaptés. Des déplacements sur site peuvent être organisés si votre projet ou votre organisation le nécessite.",
        },
        {
          question: 'Comment démarrer un projet avec vous ?',
          answer:
            "Réservez un appel via le formulaire ou par email. Nous échangeons sur votre idée, vos contraintes et vos objectifs. Ensuite, nous vous envoyons une proposition détaillée (périmètre, planning, budget). Une fois validée, nous lançons le projet.",
        },
        {
          question: 'Pouvez-vous reprendre ou faire évoluer un projet existant ?',
          answer:
            "Oui. Nous pouvons auditer votre code ou votre produit actuel, proposer des évolutions ou une refonte. Nous nous adaptons à votre stack technique et à votre équipe en place.",
        },
      ],
    },
    contact: {
      titleGray1: 'Construisons',
      titleBlack1: 'quelque chose',
      titleGray2: 'de grand',
      titleBlack2: 'ensemble',
      subtitle:
        'Parlez-nous de votre projet, nous reviendrons vers vous avec des insights, des délais, et la meilleure façon de le réaliser.',
      formInfo: 'Information',
      formNamePlaceholder: 'Votre nom',
      formEmailPlaceholder: 'adresse@email.com',
      formMessagePlaceholder: 'Parlez-nous un peu de votre idée ou produit...',
      formNeeds: 'Quels sont vos besoins ?',
      formBudget: 'Budget',
      formTimeline: 'Délai cible de lancement',
      formSend: 'Envoyer le message',
      formSending: 'Envoi en cours…',
      formSuccess: 'Message envoyé ! Nous vous répondons sous 1 jour ouvré.',
      formCheckFields: 'Veuillez vérifier les champs du formulaire.',
      formError: 'Une erreur est survenue. Veuillez réessayer.',
      errorName: 'Le nom est requis',
      errorEmailRequired: "L'email est requis",
      errorEmailInvalid: "L'email est invalide",
      errorMessage: 'Le message est requis',
      needs: [
        'Application Mobile',
        'Backend',
        'Application Web',
        'Automatisation',
        'Système, Réseaux & Cloud',
        'Intelligence Artificielle',
        'Objets connectés',
        'Cybersécurité',
        'Blockchain',
        'Autre',
      ],
      budgets: [
        'Moins de 1k€',
        '1k-5k€',
        '5k-10k€',
        '10k-15k€',
        '15k–30k€',
        '35k–60k€',
        '70k–100k€',
        '100k€+',
      ],
      timelines: ['Dès que possible', '1–2 Mois', '3–6 Mois', '6+ Mois', 'Pas encore sûr'],
      cardTitle: 'Préférez-vous en discuter ?',
      cardSubtitle:
        "Planifiez un appel rapide avec notre équipe, nous apprendrons à connaître vos objectifs et verrons comment nous pouvons vous aider.",
      cardBtn: 'Réserver un appel de 30 min',
      cardDisclaimer: 'Sans engagement — juste une conversation.',
      cardEmailLabel: 'Ou envoyez-nous un email',
      cardEmailReply: 'Nous vous répondons sous 1 jour ouvré.',
    },
    footer: {
      tagline: 'Building digital products that shine.',
      description:
        'Nous sommes une agence de développement digital spécialisée dans la création de solutions sur mesure.',
      cta: 'Démarrer votre projet',
      linksTitle: 'Liens',
      socialsTitle: 'Réseaux',
      copyright: 'My Agency. Tous droits réservés.',
      legal: 'Mentions légales',
      about: 'À propos',
      services: 'Services',
      process: 'Processus',
      projects: 'Projets',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },
} as const;
