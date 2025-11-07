/* ============================================
   ENSTA Website - Data for Specialités and Départements
   ============================================ */

const specialitesData = {
    'systemes-telecommunications-reseaux': {
        id: 'systemes-telecommunications-reseaux',
        title: 'Systèmes de Télécommunications et Réseaux',
        domain: 'ST',
        icon: 'fas fa-satellite-dish',
        description: 'Conception et gestion de réseaux de télécommunications avancés.',
        fullDescription: `La spécialité Systèmes de Télécommunications et Réseaux forme des ingénieurs capables de concevoir, déployer et gérer des infrastructures de télécommunications modernes. Les étudiants apprennent les technologies de pointe en matière de réseaux, de transmission de données et de communication sans fil.`,
        objectives: [
            'Maîtriser les technologies de réseaux (5G, fibre optique, satellite)',
            'Concevoir des architectures réseau sécurisées et performantes',
            'Gérer et optimiser les infrastructures de télécommunications',
            'Développer des solutions de communication innovantes'
        ],
        careers: [
            'Ingénieur Réseaux et Télécommunications',
            'Architecte Réseaux',
            'Chef de Projet Télécoms',
            'Ingénieur Systèmes de Communication'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'automatique-informatique-industrielle': {
        id: 'automatique-informatique-industrielle',
        title: 'Automatique et Informatique Industrielle',
        domain: 'ST',
        icon: 'fas fa-robot',
        description: 'Automatisation des processus industriels et systèmes intelligents.',
        fullDescription: `Cette spécialité forme des ingénieurs experts en automatisation industrielle et en systèmes intelligents. Les étudiants acquièrent des compétences en contrôle-commande, robotique industrielle et systèmes embarqués pour l'industrie.`,
        objectives: [
            'Concevoir des systèmes automatisés pour l\'industrie',
            'Maîtriser les technologies de robotique et d\'intelligence artificielle',
            'Développer des solutions de contrôle-commande avancées',
            'Optimiser les processus de production industrielle'
        ],
        careers: [
            'Ingénieur Automatisation',
            'Ingénieur Robotique Industrielle',
            'Chef de Projet Industrie 4.0',
            'Ingénieur Systèmes Embarqués'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'management-ingenierie-maintenance': {
        id: 'management-ingenierie-maintenance',
        title: 'Management et Ingénierie de la Maintenance Industrielle',
        domain: 'ST',
        icon: 'fas fa-tools',
        description: 'Gestion et optimisation de la maintenance industrielle.',
        fullDescription: `Cette spécialité prépare les étudiants à gérer efficacement la maintenance des équipements industriels, en combinant expertise technique et compétences managériales pour optimiser la disponibilité et la performance des installations.`,
        objectives: [
            'Optimiser les stratégies de maintenance préventive et corrective',
            'Gérer les équipes de maintenance et les ressources',
            'Implémenter des systèmes de maintenance prédictive',
            'Réduire les coûts et améliorer la fiabilité des équipements'
        ],
        careers: [
            'Ingénieur Maintenance Industrielle',
            'Chef de Service Maintenance',
            'Consultant en Maintenance',
            'Responsable Fiabilité et Maintenance'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'systemes-embarques': {
        id: 'systemes-embarques',
        title: 'Systèmes Embarqués',
        domain: 'ST',
        icon: 'fas fa-microchip',
        description: 'Développement de systèmes électroniques embarqués.',
        fullDescription: `La spécialité Systèmes Embarqués forme des ingénieurs capables de concevoir et développer des systèmes électroniques intégrés pour diverses applications : automobile, aéronautique, IoT, domotique, etc.`,
        objectives: [
            'Concevoir des systèmes embarqués performants et fiables',
            'Maîtriser les microcontrôleurs et processeurs embarqués',
            'Développer des logiciels temps réel',
            'Intégrer des systèmes embarqués dans des applications complexes'
        ],
        careers: [
            'Ingénieur Systèmes Embarqués',
            'Développeur Firmware',
            'Ingénieur IoT',
            'Architecte Systèmes Embarqués'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'mecatronique': {
        id: 'mecatronique',
        title: 'Mécatronique',
        domain: 'ST',
        icon: 'fas fa-cog',
        description: 'Intégration mécanique, électronique et informatique.',
        fullDescription: `La Mécatronique est une discipline qui combine la mécanique, l'électronique et l'informatique pour créer des systèmes intelligents et automatisés. Cette spécialité forme des ingénieurs polyvalents capables de concevoir des produits innovants.`,
        objectives: [
            'Intégrer mécanique, électronique et informatique',
            'Concevoir des systèmes mécatroniques complexes',
            'Maîtriser la modélisation et la simulation',
            'Développer des produits intelligents et automatisés'
        ],
        careers: [
            'Ingénieur Mécatronique',
            'Concepteur de Produits Intelligents',
            'Ingénieur R&D',
            'Chef de Projet Innovation'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'genie-industriel': {
        id: 'genie-industriel',
        title: 'Génie Industriel',
        domain: 'ST',
        icon: 'fas fa-industry',
        description: 'Optimisation des systèmes de production industrielle.',
        fullDescription: `Le Génie Industriel vise à optimiser les systèmes de production, les processus industriels et les organisations. Les étudiants apprennent à améliorer la productivité, la qualité et l'efficacité des entreprises industrielles.`,
        objectives: [
            'Optimiser les processus de production',
            'Améliorer la productivité et la qualité',
            'Gérer les flux et les ressources industrielles',
            'Implémenter des méthodes d\'amélioration continue'
        ],
        careers: [
            'Ingénieur Génie Industriel',
            'Chef de Projet Industriel',
            'Consultant en Optimisation',
            'Responsable Production'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'ingenierie-chaine-logistique': {
        id: 'ingenierie-chaine-logistique',
        title: 'Ingénierie de la Chaîne Logistique',
        domain: 'ST',
        icon: 'fas fa-truck',
        description: 'Gestion optimale des chaînes d\'approvisionnement.',
        fullDescription: `Cette spécialité forme des ingénieurs experts en gestion de la chaîne logistique, de l'approvisionnement à la distribution, en passant par le stockage et le transport.`,
        objectives: [
            'Optimiser les chaînes d\'approvisionnement',
            'Gérer les flux logistiques complexes',
            'Réduire les coûts et améliorer la traçabilité',
            'Implémenter des solutions logistiques durables'
        ],
        careers: [
            'Ingénieur Logistique',
            'Chef de Projet Supply Chain',
            'Consultant Logistique',
            'Responsable Logistique'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'ingenierie-transports': {
        id: 'ingenierie-transports',
        title: 'Ingénierie des Transports',
        domain: 'ST',
        icon: 'fas fa-train',
        description: 'Conception et gestion des systèmes de transport.',
        fullDescription: `La spécialité Ingénierie des Transports prépare les étudiants à concevoir, gérer et optimiser les systèmes de transport (routier, ferroviaire, aérien, maritime) pour répondre aux défis de mobilité durable.`,
        objectives: [
            'Concevoir des systèmes de transport efficaces',
            'Optimiser les réseaux de transport',
            'Développer des solutions de mobilité durable',
            'Gérer les infrastructures de transport'
        ],
        careers: [
            'Ingénieur Transports',
            'Chef de Projet Infrastructures',
            'Consultant Mobilité',
            'Responsable Transport'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'ingenierie-mecanique': {
        id: 'ingenierie-mecanique',
        title: 'Ingénierie Mécanique',
        domain: 'ST',
        icon: 'fas fa-cogs',
        description: 'Conception et développement de systèmes mécaniques.',
        fullDescription: `L'Ingénierie Mécanique forme des ingénieurs capables de concevoir, développer et optimiser des systèmes mécaniques complexes pour diverses industries : automobile, aéronautique, énergie, etc.`,
        objectives: [
            'Concevoir des systèmes mécaniques performants',
            'Maîtriser la CAO et la simulation',
            'Optimiser les performances mécaniques',
            'Développer des solutions innovantes'
        ],
        careers: [
            'Ingénieur Mécanique',
            'Concepteur Mécanique',
            'Ingénieur R&D Mécanique',
            'Chef de Projet Mécanique'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'traitement-eaux': {
        id: 'traitement-eaux',
        title: 'Traitement des Eaux',
        domain: 'ST',
        icon: 'fas fa-tint',
        description: 'Technologies de traitement et gestion de l\'eau.',
        fullDescription: `Cette spécialité forme des ingénieurs experts en traitement de l'eau, en gestion des ressources hydriques et en technologies environnementales pour assurer une eau potable et une gestion durable de l'eau.`,
        objectives: [
            'Maîtriser les technologies de traitement de l\'eau',
            'Gérer les ressources hydriques',
            'Développer des solutions durables',
            'Assurer la qualité de l\'eau potable'
        ],
        careers: [
            'Ingénieur Traitement des Eaux',
            'Chef de Projet Environnemental',
            'Consultant Eau et Environnement',
            'Responsable Station d\'Épuration'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'procedes-organiques': {
        id: 'procedes-organiques',
        title: 'Procédés Organiques',
        domain: 'ST',
        icon: 'fas fa-flask',
        description: 'Ingénierie des procédés chimiques organiques.',
        fullDescription: `La spécialité Procédés Organiques forme des ingénieurs capables de concevoir et optimiser des procédés chimiques pour la production de produits organiques, pharmaceutiques, cosmétiques, etc.`,
        objectives: [
            'Concevoir des procédés chimiques organiques',
            'Optimiser les processus de production',
            'Assurer la sécurité et l\'environnement',
            'Développer des procédés durables'
        ],
        careers: [
            'Ingénieur Procédés Chimiques',
            'Chef de Projet Industrie Chimique',
            'Consultant Procédés',
            'Responsable Production Chimique'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'traction-electrique': {
        id: 'traction-electrique',
        title: 'Traction Électrique',
        domain: 'ST',
        icon: 'fas fa-bolt',
        description: 'Systèmes de traction électrique pour transports.',
        fullDescription: `Cette spécialité prépare les étudiants à concevoir et développer des systèmes de traction électrique pour les transports (trains, tramways, véhicules électriques) dans une perspective de mobilité durable.`,
        objectives: [
            'Concevoir des systèmes de traction électrique',
            'Maîtriser les technologies d\'électrification',
            'Optimiser l\'efficacité énergétique',
            'Développer des solutions de mobilité électrique'
        ],
        careers: [
            'Ingénieur Traction Électrique',
            'Ingénieur Électrification',
            'Chef de Projet Mobilité Électrique',
            'Ingénieur R&D Énergie'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle'
    },
    'mecanique-energetique': {
        id: 'mecanique-energetique',
        title: 'Mécanique Énergétique',
        domain: 'ST',
        icon: 'fas fa-fire',
        description: 'Optimisation énergétique des systèmes mécaniques.',
        fullDescription: `NOUVEAU 2025-2026 - Cette spécialité forme des ingénieurs experts en optimisation énergétique des systèmes mécaniques, en efficacité énergétique et en gestion de l'énergie pour l'industrie.`,
        objectives: [
            'Optimiser la consommation énergétique',
            'Concevoir des systèmes mécaniques efficaces',
            'Maîtriser les technologies d\'efficacité énergétique',
            'Développer des solutions énergétiques durables'
        ],
        careers: [
            'Ingénieur Énergétique',
            'Consultant Efficacité Énergétique',
            'Chef de Projet Énergie',
            'Ingénieur R&D Énergie'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle',
        isNew: true
    },
    'energies-renouvelables-stockage': {
        id: 'energies-renouvelables-stockage',
        title: 'Énergies Renouvelables et Stockage d\'Énergie',
        domain: 'ST',
        icon: 'fas fa-solar-panel',
        description: 'Technologies des énergies renouvelables et systèmes de stockage.',
        fullDescription: `NOUVEAU 2025-2026 - Cette spécialité prépare les étudiants aux défis de la transition énergétique en formant des experts en énergies renouvelables (solaire, éolien, hydraulique) et en systèmes de stockage d'énergie.`,
        objectives: [
            'Maîtriser les technologies d\'énergies renouvelables',
            'Concevoir des systèmes de stockage d\'énergie',
            'Optimiser la production et la distribution d\'énergie verte',
            'Développer des solutions énergétiques durables'
        ],
        careers: [
            'Ingénieur Énergies Renouvelables',
            'Chef de Projet Énergie Solaire/Éolienne',
            'Consultant Transition Énergétique',
            'Ingénieur R&D Stockage Énergie'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle',
        isNew: true
    },
    'intelligence-artificielle-applications': {
        id: 'intelligence-artificielle-applications',
        title: 'Intelligence Artificielle et Applications',
        domain: 'MI',
        icon: 'fas fa-brain',
        description: 'Développement d\'applications intelligentes et systèmes d\'IA.',
        fullDescription: `NOUVEAU 2025-2026 - Cette spécialité forme des ingénieurs experts en Intelligence Artificielle, Machine Learning, Deep Learning et leurs applications dans divers domaines : santé, finance, industrie, etc.`,
        objectives: [
            'Maîtriser les algorithmes d\'IA et de Machine Learning',
            'Développer des applications intelligentes',
            'Implémenter des solutions d\'IA dans l\'industrie',
            'Créer des systèmes autonomes et intelligents'
        ],
        careers: [
            'Ingénieur Intelligence Artificielle',
            'Data Scientist',
            'Machine Learning Engineer',
            'Chef de Projet IA'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle',
        isNew: true
    },
    'securite-systemes': {
        id: 'securite-systemes',
        title: 'Sécurité des Systèmes',
        domain: 'MI',
        icon: 'fas fa-shield-alt',
        description: 'Cybersécurité et protection des systèmes informatiques.',
        fullDescription: `NOUVEAU 2025-2026 - Cette spécialité prépare les étudiants aux défis de la cybersécurité en formant des experts capables de protéger les systèmes informatiques, les réseaux et les données contre les menaces cybernétiques.`,
        objectives: [
            'Maîtriser les techniques de cybersécurité',
            'Protéger les systèmes et réseaux',
            'Analyser et prévenir les cyberattaques',
            'Développer des solutions de sécurité robustes'
        ],
        careers: [
            'Ingénieur Cybersécurité',
            'Analyste Sécurité',
            'Consultant Sécurité Informatique',
            'Chef de Projet Sécurité'
        ],
        duration: '3 ans',
        cycle: 'Second Cycle',
        isNew: true
    }
};

const departementsData = {
    'dfb-info': {
        id: 'dfb-info',
        title: 'DFB-Info',
        fullTitle: 'Formation de Base en Informatique',
        icon: 'fas fa-laptop-code',
        description: 'Département dédié à la formation de base en informatique pour le premier cycle.',
        fullDescription: `Le Département de Formation de Base en Informatique (DFB-Info) assure la formation fondamentale en informatique pour les étudiants du premier cycle. Il couvre les bases de la programmation, des structures de données, des algorithmes et des systèmes informatiques.`,
        missions: [
            'Assurer une formation solide en informatique fondamentale',
            'Préparer les étudiants aux spécialisations du second cycle',
            'Développer les compétences en programmation et algorithmique',
            'Initier aux concepts des systèmes informatiques'
        ],
        enseignements: [
            'Programmation (C, C++, Java, Python)',
            'Structures de données et algorithmes',
            'Bases de données',
            'Systèmes d\'exploitation',
            'Réseaux informatiques',
            'Mathématiques pour l\'informatique'
        ]
    },
    'dfb-st': {
        id: 'dfb-st',
        title: 'DFB-ST',
        fullTitle: 'Formation de Base en Sciences et Technologies',
        icon: 'fas fa-atom',
        description: 'Département dédié à la formation de base en sciences et technologies.',
        fullDescription: `Le Département de Formation de Base en Sciences et Technologies (DFB-ST) dispense une formation fondamentale en sciences et technologies pour les étudiants du premier cycle, couvrant les mathématiques, la physique, la chimie et les sciences de l'ingénieur.`,
        missions: [
            'Assurer une formation solide en sciences fondamentales',
            'Préparer les étudiants aux spécialisations techniques',
            'Développer les compétences en mathématiques et physique',
            'Initier aux concepts de l\'ingénierie'
        ],
        enseignements: [
            'Mathématiques (Analyse, Algèbre, Probabilités)',
            'Physique (Mécanique, Électricité, Thermodynamique)',
            'Chimie générale et appliquée',
            'Sciences de l\'ingénieur',
            'Mécanique des solides',
            'Électronique de base'
        ]
    },
    'info': {
        id: 'info',
        title: 'Info',
        fullTitle: 'Informatique',
        icon: 'fas fa-code',
        description: 'Département d\'Informatique pour les spécialisations avancées.',
        fullDescription: `Le Département d'Informatique forme des ingénieurs experts en développement logiciel, systèmes informatiques, intelligence artificielle et technologies de l'information. Il couvre un large spectre de compétences informatiques modernes.`,
        missions: [
            'Former des ingénieurs en informatique de haut niveau',
            'Développer des compétences en développement logiciel',
            'Maîtriser les technologies émergentes (IA, Cloud, Big Data)',
            'Préparer aux métiers de l\'informatique moderne'
        ],
        enseignements: [
            'Développement logiciel avancé',
            'Architecture des systèmes informatiques',
            'Intelligence Artificielle et Machine Learning',
            'Cloud Computing et DevOps',
            'Big Data et Analytics',
            'Sécurité informatique'
        ]
    },
    'geii': {
        id: 'geii',
        title: 'GEII',
        fullTitle: 'Génie Électrique et Informatique Industrielle',
        icon: 'fas fa-plug',
        description: 'Département de Génie Électrique et Informatique Industrielle.',
        fullDescription: `Le Département de Génie Électrique et Informatique Industrielle (GEII) forme des ingénieurs capables de concevoir, développer et maintenir des systèmes électriques et électroniques pour l'industrie, l'automatisation et les systèmes embarqués.`,
        missions: [
            'Former des ingénieurs en génie électrique et électronique',
            'Développer des compétences en automatisation industrielle',
            'Maîtriser les systèmes électriques et électroniques',
            'Préparer aux métiers de l\'industrie 4.0'
        ],
        enseignements: [
            'Électrotechnique et électronique de puissance',
            'Automatique et contrôle-commande',
            'Systèmes embarqués',
            'Robotique industrielle',
            'Informatique industrielle',
            'Énergies renouvelables'
        ]
    },
    'gmp': {
        id: 'gmp',
        title: 'GMP',
        fullTitle: 'Génie Mécanique et Génie de Production',
        icon: 'fas fa-cog',
        description: 'Département de Génie Mécanique et Génie de Production.',
        fullDescription: `Le Département de Génie Mécanique et Génie de Production (GMP) forme des ingénieurs experts en conception mécanique, fabrication, production et optimisation des processus industriels.`,
        missions: [
            'Former des ingénieurs en génie mécanique',
            'Développer des compétences en conception et fabrication',
            'Maîtriser les outils de CAO et simulation',
            'Optimiser les processus de production'
        ],
        enseignements: [
            'Conception mécanique (CAO)',
            'Fabrication et usinage',
            'Matériaux et résistance des matériaux',
            'Simulation numérique',
            'Gestion de production',
            'Mécanique des fluides'
        ]
    },
    'gim': {
        id: 'gim',
        title: 'GIM',
        fullTitle: 'Génie Industriel et Maintenance',
        icon: 'fas fa-wrench',
        description: 'Département de Génie Industriel et Maintenance.',
        fullDescription: `Le Département de Génie Industriel et Maintenance (GIM) forme des ingénieurs capables d'optimiser les processus industriels, gérer la maintenance des équipements et améliorer la performance des organisations industrielles.`,
        missions: [
            'Former des ingénieurs en génie industriel',
            'Développer des compétences en maintenance industrielle',
            'Optimiser les processus et organisations',
            'Améliorer la performance industrielle'
        ],
        enseignements: [
            'Gestion de production',
            'Maintenance industrielle',
            'Qualité et fiabilité',
            'Gestion des flux',
            'Optimisation et recherche opérationnelle',
            'Management industriel'
        ]
    },
    'gp': {
        id: 'gp',
        title: 'GP',
        fullTitle: 'Génie des Procédés',
        icon: 'fas fa-flask',
        description: 'Département de Génie des Procédés.',
        fullDescription: `Le Département de Génie des Procédés (GP) forme des ingénieurs experts en conception, optimisation et gestion de procédés chimiques, pharmaceutiques, agroalimentaires et environnementaux.`,
        missions: [
            'Former des ingénieurs en génie des procédés',
            'Concevoir et optimiser des procédés industriels',
            'Maîtriser les technologies de transformation',
            'Assurer la sécurité et l\'environnement'
        ],
        enseignements: [
            'Thermodynamique et transferts',
            'Réacteurs chimiques',
            'Séparation et purification',
            'Procédés de transformation',
            'Sécurité des procédés',
            'Environnement et développement durable'
        ]
    },
    'ele': {
        id: 'ele',
        title: 'ELE',
        fullTitle: 'Électrotechnique',
        icon: 'fas fa-bolt',
        description: 'Département d\'Électrotechnique.',
        fullDescription: `Le Département d'Électrotechnique (ELE) forme des ingénieurs experts en systèmes électriques, énergie électrique, électrification et gestion de l'énergie pour l'industrie et les infrastructures.`,
        missions: [
            'Former des ingénieurs en électrotechnique',
            'Développer des compétences en énergie électrique',
            'Maîtriser les systèmes électriques',
            'Préparer aux métiers de l\'électrification'
        ],
        enseignements: [
            'Électrotechnique avancée',
            'Machines électriques',
            'Réseaux électriques',
            'Énergie et puissance',
            'Électrification des transports',
            'Gestion de l\'énergie'
        ]
    },
    'glt': {
        id: 'glt',
        title: 'GLT',
        fullTitle: 'Génie Logistique et Transport',
        icon: 'fas fa-truck',
        description: 'Département de Génie Logistique et Transport.',
        fullDescription: `Le Département de Génie Logistique et Transport (GLT) forme des ingénieurs experts en gestion de la chaîne logistique, optimisation des transports et management des flux pour les entreprises et organisations.`,
        missions: [
            'Former des ingénieurs en logistique et transport',
            'Optimiser les chaînes d\'approvisionnement',
            'Gérer les flux logistiques complexes',
            'Développer des solutions de mobilité'
        ],
        enseignements: [
            'Gestion de la chaîne logistique',
            'Transport et distribution',
            'Gestion des stocks',
            'Optimisation logistique',
            'Systèmes d\'information logistique',
            'Mobilité et transport durable'
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { specialitesData, departementsData };
}

