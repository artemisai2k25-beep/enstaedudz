/* ============================================
   ENSTA Website - Admission Data
   ============================================ */

const admissionData = {
    'concours-national': {
        id: 'concours-national',
        title: 'Concours National',
        subtitle: 'Admission sur concours national pour les bacheliers scientifiques',
        icon: 'fas fa-graduation-cap',
        description: 'Le Concours National est la voie principale d\'accès à l\'ENSTA pour les bacheliers scientifiques. Il permet d\'intégrer le premier cycle de formation après une sélection rigoureuse basée sur le dossier académique et des épreuves écrites.',
        fullDescription: `Le Concours National d'Accès à l'ENSTA est organisé annuellement pour sélectionner les meilleurs bacheliers scientifiques désireux de poursuivre une formation d'ingénieur d'excellence. Ce concours constitue la voie principale d'entrée à l'école et offre l'opportunité d'intégrer un établissement reconnu pour la qualité de sa formation et son excellence académique.`,
        conditions: [
            'Être titulaire d\'un baccalauréat scientifique (Mathématiques, Sciences Expérimentales, ou Technique Mathématiques)',
            'Avoir obtenu une moyenne minimale requise (variable selon les années)',
            'Être âgé de moins de 23 ans au 31 décembre de l\'année du concours',
            'Satisfaire aux conditions médicales requises',
            'Ne pas avoir déjà été admis dans une autre école supérieure la même année'
        ],
        processus: [
            {
                step: 1,
                title: 'Préinscription en ligne',
                description: 'Les candidats doivent s\'inscrire via la plateforme en ligne de l\'ENSTA pendant la période d\'ouverture des inscriptions (généralement entre mars et mai).'
            },
            {
                step: 2,
                title: 'Dépôt du dossier',
                description: 'Constitution et dépôt du dossier de candidature comprenant les relevés de notes, copies du baccalauréat, et autres documents requis.'
            },
            {
                step: 3,
                title: 'Sélection sur dossier',
                description: 'Examen des dossiers par une commission pédagogique qui établit une présélection basée sur les résultats académiques.'
            },
            {
                step: 4,
                title: 'Épreuves écrites',
                description: 'Les candidats présélectionnés passent des épreuves écrites dans les matières scientifiques (Mathématiques, Physique, Chimie, et éventuellement Langues).'
            },
            {
                step: 5,
                title: 'Classement et admission',
                description: 'Établissement d\'un classement final combinant les résultats du dossier et des épreuves écrites. Les candidats retenus sont admis au premier cycle.'
            }
        ],
        epreuves: [
            {
                matiere: 'Mathématiques',
                duree: '3 heures',
                coefficient: 4,
                description: 'Épreuve portant sur l\'analyse, l\'algèbre, la géométrie et les probabilités.'
            },
            {
                matiere: 'Physique',
                duree: '2 heures 30',
                coefficient: 3,
                description: 'Épreuve couvrant la mécanique, l\'électricité, l\'électromagnétisme et la thermodynamique.'
            },
            {
                matiere: 'Chimie',
                duree: '2 heures',
                coefficient: 2,
                description: 'Épreuve sur la chimie générale, organique et la chimie des solutions.'
            },
            {
                matiere: 'Langue Française',
                duree: '2 heures',
                coefficient: 1,
                description: 'Épreuve de compréhension et expression écrite en français.'
            }
        ],
        dates: [
            'Ouverture des inscriptions : Mars - Mai',
            'Clôture des inscriptions : Fin Mai',
            'Publication des listes de présélection : Juin',
            'Épreuves écrites : Juin - Juillet',
            'Publication des résultats : Juillet - Août',
            'Rentrée académique : Septembre'
        ],
        contact: {
            email: 'concours@ensta.edu.dz',
            phone: '+213 23 79 71 18',
            horaires: 'Du lundi au vendredi, de 8h30 à 16h30'
        }
    },
    'transfert': {
        id: 'transfert',
        title: 'Transfert',
        subtitle: 'Transfert depuis d\'autres établissements d\'enseignement supérieur',
        icon: 'fas fa-exchange-alt',
        description: 'Le transfert permet aux étudiants inscrits dans d\'autres établissements d\'enseignement supérieur d\'intégrer l\'ENSTA selon les conditions d\'équivalence et les places disponibles.',
        fullDescription: `L'ENSTA accepte les transferts d'étudiants provenant d'autres établissements d'enseignement supérieur (universités, autres écoles d'ingénieurs, etc.) sous certaines conditions. Cette voie d'accès permet une mobilité étudiante et offre une seconde chance aux étudiants souhaitant intégrer un établissement d'excellence.`,
        conditions: [
            'Être inscrit dans un établissement d\'enseignement supérieur reconnu',
            'Avoir validé au moins une année universitaire avec une moyenne minimale requise',
            'Avoir des équivalences compatibles avec les programmes de l\'ENSTA',
            'Respecter les délais de candidature (généralement avant la rentrée académique)',
            'Disposer de places disponibles dans la spécialité souhaitée'
        ],
        processus: [
            {
                step: 1,
                title: 'Demande d\'équivalence',
                description: 'Le candidat doit déposer une demande d\'équivalence auprès du service des études de l\'ENSTA avec tous les documents académiques nécessaires.'
            },
            {
                step: 2,
                title: 'Évaluation du dossier',
                description: 'Examen du dossier par une commission pédagogique qui évalue les équivalences possibles et la compatibilité des acquis avec les programmes de l\'ENSTA.'
            },
            {
                step: 3,
                title: 'Test de niveau (si nécessaire)',
                description: 'Selon le cas, le candidat peut être soumis à un test de niveau ou un entretien pour évaluer ses compétences.'
            },
            {
                step: 4,
                title: 'Décision d\'admission',
                description: 'La commission rend sa décision sur l\'admission, le niveau d\'intégration et les éventuels compléments de formation requis.'
            },
            {
                step: 5,
                title: 'Inscription administrative',
                description: 'Une fois admis, le candidat procède à son inscription administrative et à son intégration dans la promotion correspondante.'
            }
        ],
        documents: [
            'Relevés de notes de toutes les années universitaires',
            'Copie du diplôme de baccalauréat',
            'Attestation d\'inscription de l\'établissement d\'origine',
            'Programmes détaillés des matières suivies',
            'Lettre de motivation',
            'Photocopie de la carte d\'identité nationale',
            'Photos d\'identité'
        ],
        niveaux: [
            {
                niveau: 'Premier Cycle',
                description: 'Transfert possible en 1ère ou 2ème année selon les équivalences et les résultats obtenus.'
            },
            {
                niveau: 'Second Cycle',
                description: 'Transfert vers une spécialité du second cycle après validation des prérequis et selon les places disponibles.'
            }
        ],
        contact: {
            email: 'transfert@ensta.edu.dz',
            phone: '+213 23 79 71 18',
            horaires: 'Du lundi au vendredi, de 8h30 à 16h30'
        }
    },
    'formation-continue': {
        id: 'formation-continue',
        title: 'Formation Continue',
        subtitle: 'Programmes de formation continue et perfectionnement pour professionnels et entreprises',
        icon: 'fas fa-user-tie',
        description: 'L\'ENSTA propose des programmes de formation continue et de perfectionnement destinés aux professionnels et aux entreprises souhaitant renforcer leurs compétences techniques et managériales.',
        fullDescription: `La Formation Continue à l'ENSTA répond aux besoins des professionnels et des entreprises en matière de développement des compétences, d'adaptation aux évolutions technologiques et d'amélioration de la performance. Ces programmes sont conçus pour s'adapter aux contraintes professionnelles et offrir une formation de qualité reconnue.`,
        objectifs: [
            'Renforcer les compétences techniques des professionnels',
            'Adapter les connaissances aux évolutions technologiques',
            'Développer les compétences managériales et de leadership',
            'Favoriser l\'innovation et l\'entrepreneuriat',
            'Répondre aux besoins spécifiques des entreprises'
        ],
        programmes: [
            {
                type: 'Formation Diplômante',
                description: 'Programmes de formation menant à un diplôme ou une certification reconnue (Master, Certificat de spécialisation, etc.).',
                duree: '6 mois à 2 ans',
                modalite: 'En présentiel ou hybride'
            },
            {
                type: 'Formation sur Mesure',
                description: 'Programmes personnalisés conçus spécifiquement pour répondre aux besoins d\'une entreprise ou d\'un groupe de professionnels.',
                duree: 'Variable selon les besoins',
                modalite: 'Sur site ou à l\'ENSTA'
            },
            {
                type: 'Séminaires et Ateliers',
                description: 'Formations courtes et intensives sur des thématiques spécifiques (1 à 5 jours).',
                duree: '1 à 5 jours',
                modalite: 'En présentiel'
            },
            {
                type: 'Perfectionnement',
                description: 'Modules de perfectionnement dans des domaines techniques spécifiques pour actualiser les connaissances.',
                duree: 'Variable',
                modalite: 'En présentiel ou en ligne'
            }
        ],
        domaines: [
            'Intelligence Artificielle et Machine Learning',
            'Cybersécurité et Sécurité des Systèmes',
            'Gestion de Projet et Management',
            'Innovation et Entrepreneuriat',
            'Énergies Renouvelables',
            'Automatisation et Robotique',
            'Gestion de la Qualité',
            'Logistique et Supply Chain',
            'Maintenance Industrielle',
            'Développement Durable'
        ],
        avantages: [
            'Formation dispensée par des experts et des enseignants-chercheurs',
            'Accès aux laboratoires et équipements de pointe de l\'ENSTA',
            'Certification reconnue par les entreprises',
            'Réseau professionnel et opportunités de networking',
            'Horaires adaptés aux contraintes professionnelles',
            'Possibilité de financement par les entreprises'
        ],
        modalites: [
            {
                titre: 'Inscription Individuelle',
                description: 'Les professionnels peuvent s\'inscrire individuellement aux programmes ouverts au public.'
            },
            {
                titre: 'Convention Entreprise',
                description: 'Les entreprises peuvent signer des conventions de formation pour leurs employés avec des tarifs préférentiels.'
            },
            {
                titre: 'Formation Intra-Entreprise',
                description: 'Formation dispensée directement dans les locaux de l\'entreprise selon un programme personnalisé.'
            }
        ],
        contact: {
            email: 'formation-continue@ensta.edu.dz',
            phone: '+213 23 79 71 18',
            horaires: 'Du lundi au vendredi, de 8h30 à 16h30'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { admissionData };
}

