/* ============================================================
   projects.js — Données des projets
   ============================================================

   POUR MODIFIER UN PROJET : changez les champs fr/en ci-dessous.
   POUR AJOUTER UN PROJET   : copiez un bloc { ... } et collez-le
                              dans le tableau à la bonne position.

   Champs disponibles :
     id         — identifiant unique (string)
     num        — numéro affiché ("01", "02" …)
     image      — chemin vers l'image (dans images/)
     categories — filtres : "scolaire", "personnel", "python", "matlab", "hardware"
     type       — "school" (badge bleu) ou "perso" (badge vert)
     award      — (optionnel) objet { fr, en } pour la bannière trophée
     fr / en    — traductions : title, desc, tags[]

   ============================================================ */

const PROJECTS = [

  /* ── PYTHON / ML ──────────────────────────────────────────── */

  {
    id:         "nbody",
    image:      "images/Image1.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Simulation numérique du problème à N corps",
      desc:  "Étude des trajectoires de corps célestes en interaction gravitationnelle. Implémentation de l'algorithme de Runge-Kutta d'ordre 2 pour simuler le mouvement képlérien et les systèmes à N corps.",
      tags:  ["Python", "Runge-Kutta", "Mécanique céleste"],
    },
    en: {
      title: "Numerical simulation of the N-body problem",
      desc:  "Study of celestial body trajectories under gravitational interaction. Runge-Kutta order 2 algorithm to simulate Keplerian motion and N-body systems.",
      tags:  ["Python", "Runge-Kutta", "Celestial mechanics"],
    },
  },

  {
    id:         "pendu",
    image:      "images/Image2.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Réalisation du jeu du pendu",
      desc:  "Version complète du jeu du Pendu avec interface Tkinter. Dix langues, trois niveaux de difficulté, mode deux joueurs et classement des meilleurs scores.",
      tags:  ["Python", "Tkinter", "GUI"],
    },
    en: {
      title: "Hangman game development",
      desc:  "Full-featured Hangman game in Python with Tkinter GUI. Ten languages, three difficulty levels, two-player mode and high score leaderboard.",
      tags:  ["Python", "Tkinter", "GUI"],
    },
  },

  {
    id:         "procuste",
    image:      "images/Image3.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Étude de formes par analyse procustéenne linéaire",
      desc:  "Alignement optimal de nuages de points par transformation affine. Résolution via SVD, appliquée à la comparaison morphologique de visages, validée par ACP.",
      tags:  ["Python", "SVD", "ACP", "Vision"],
    },
    en: {
      title: "Shape analysis by linear Procrustes analysis",
      desc:  "Optimal alignment of point clouds via affine transformation. SVD-based resolution applied to face morphology comparison, validated by PCA.",
      tags:  ["Python", "SVD", "PCA", "Vision"],
    },
  },

  {
    id:         "ica",
    image:      "images/Image4.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Étude de l'ICA appliquée à la séparation de signaux",
      desc:  "Analyse en Composantes Indépendantes pour séparer des signaux mélangés. Algorithme basé sur la maximisation du kurtosis après blanchiment, appliqué à des images et des sons.",
      tags:  ["Python", "ICA", "Traitement du signal"],
    },
    en: {
      title: "ICA applied to signal separation",
      desc:  "Independent Component Analysis to separate mixed signals by exploiting non-Gaussianity. Kurtosis maximization algorithm applied to images and sounds.",
      tags:  ["Python", "ICA", "Signal processing"],
    },
  },

  {
    id:         "gradient",
    image:      "images/Image5.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Gradient conjugué appliqué au traitement d'images",
      desc:  "Généralisation du gradient conjugué via les équations d'Euler-Lagrange pour la restauration d'images par résolution de l'équation de Poisson.",
      tags:  ["Python", "Traitement d'images", "Optimisation"],
    },
    en: {
      title: "Conjugate gradient applied to image processing",
      desc:  "Generalization of conjugate gradient via Euler-Lagrange equations for image restoration by solving the Poisson equation.",
      tags:  ["Python", "Image processing", "Optimization"],
    },
  },

  {
    id:         "segmentation",
    image:      "images/Image6.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Réduction et segmentation d'images par réseaux de neurones",
      desc:  "Segmentation combinant ACP optimisée et auto-encodeur. Clustering k-means sur les pixels. Résultats validés sur les jeux de données MNIST et Iris.",
      tags:  ["Python", "Réseau de neurones", "ACP", "k-means"],
    },
    en: {
      title: "Image reduction and segmentation via neural networks",
      desc:  "Segmentation combining optimized PCA and auto-encoder. K-means clustering on pixels. Results validated on MNIST and Iris datasets.",
      tags:  ["Python", "Neural network", "PCA", "k-means"],
    },
  },

  {
    id:         "schizo",
    image:      "images/Image7.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Machine learning pour le diagnostic de la schizophrénie",
      desc:  "Modèle prédictif comparant k-means, régression logistique et réseau de neurones. Le réseau avec couche cachée tanh s'est montré le plus performant sur données médicales.",
      tags:  ["Python", "ML", "Médical", "ACP"],
    },
    en: {
      title: "Machine learning for schizophrenia diagnosis",
      desc:  "Predictive model comparing k-means, logistic regression and neural networks on medical data. Hidden-layer network with tanh proved most accurate.",
      tags:  ["Python", "ML", "Medical", "PCA"],
    },
  },

  {
    id:         "stlviewer",
    image:      "images/Image21.png",
    categories: ["personnel", "python"],
    type:       "perso",
    fr: {
      title: "Visionneur de fichiers STL",
      desc:  "Application de bureau développée en Python permettant de visualiser des fichiers STL en 3D. Interface graphique intuitive avec choix des couleurs de faces et d'arêtes, réglage de la transparence et de la largeur des arêtes.",
      tags:  ["Python", "Tkinter", "3D", "STL"],
    },
    en: {
      title: "STL File Viewer",
      desc:  "Python desktop application to visualize STL files in 3D. Intuitive GUI with customizable face and edge colors, transparency and edge width settings.",
      tags:  ["Python", "Tkinter", "3D", "STL"],
    },
  },

  {
    id:         "vulcain",
    image:      "images/Image20.png",
    categories: ["scolaire", "python"],
    type:       "school",
    fr: {
      title: "Détermination de stabilité de fusées par traitement d'images",
      desc:  "Projet de fin d'études en collaboration avec le CNES et Planète Sciences. Développement de Vulcain, une application Android permettant de déterminer automatiquement la stabilité d'une fusée expérimentale à partir d'une photo, via un réseau de neurones convolutif (U-Net ResNet34) et une intégration avec le l'API du site SPOCK.",
      tags:  ["Python", "PyTorch", "Kivy", "Réseau de neurones", "Android", "CNES"],
    },
    en: {
      title: "Vulcain — Rocket stability determination through image processing",
      desc:  "Graduation project in collaboration with CNES and Planète Sciences. Development of Vulcain, an Android application that automatically determines the stability of an experimental rocket from a photo, via a convolutional neural network (U-Net ResNet34) and integration with the SPOCK website API.",
      tags:  ["Python", "PyTorch", "Kivy", "Neural network", "Android", "CNES"],
    },
  },

  /* ── MATLAB / SIMULATION ──────────────────────────────────── */

  {
    id:         "compression",
    image:      "images/Image8.png",
    categories: ["scolaire", "matlab"],
    type:       "school",
    fr: {
      title: "Implémentation d'un algorithme de compression d'images",
      desc:  "Compression d'images en MATLAB par transformation en ondelettes de Haar. Découpage en blocs 8×8, contrôle du paramètre ε, extension aux images couleur RGB.",
      tags:  ["MATLAB", "Ondelettes de Haar", "Compression"],
    },
    en: {
      title: "Image compression algorithm implementation",
      desc:  "Image compression in MATLAB using Haar wavelet transform. 8×8 block processing, ε parameter control, extended to RGB color images.",
      tags:  ["MATLAB", "Haar wavelets", "Compression"],
    },
  },

  {
    id:         "drone",
    image:      "images/Image9.png",
    categories: ["scolaire", "matlab"],
    type:       "school",
    fr: {
      title: "Modélisation et simulation d'un drone quadrirotor",
      desc:  "Modèle dynamique linéarisé avec correcteurs PID sous MATLAB/Simulink. Machine à états pour navigation autonome entre waypoints sur un parcours urbain.",
      tags:  ["MATLAB", "Simulink", "PID", "Drone"],
    },
    en: {
      title: "Quadrotor drone modeling and simulation",
      desc:  "Linearized dynamic model with PID controllers in MATLAB/Simulink. State machine for autonomous waypoint navigation on urban path.",
      tags:  ["MATLAB", "Simulink", "PID", "Drone"],
    },
  },

  {
    id:         "suspension",
    image:      "images/Image10.png",
    categories: ["scolaire", "matlab"],
    type:       "school",
    fr: {
      title: "Étude de la dynamique d'une suspension d'avion",
      desc:  "Modélisation bond graph d'un système de suspension d'avion sous MATLAB/Simulink. Analyse en réponse à une piste ondulée et un choc soudain.",
      tags:  ["MATLAB", "Simulink", "Bond graph", "Aviation"],
    },
    en: {
      title: "Aircraft landing gear dynamics study",
      desc:  "Bond graph modeling of an aircraft suspension system in MATLAB/Simulink. Analysis under sinusoidal and impulse excitations.",
      tags:  ["MATLAB", "Simulink", "Bond graph", "Aviation"],
    },
  },

  /* ── HARDWARE / CAO ───────────────────────────────────────── */

  {
    id:         "fsk",
    image:      "images/Image11.png",
    categories: ["scolaire"],
    type:       "school",
    fr: {
      title: "Modulation et démodulation FSK",
      desc:  "Système complet FSK en C++. Table de sinus optimisée, démodulation par DFT pour l'analyse spectrale et reconstruction du message binaire.",
      tags:  ["C++", "FSK", "DSP", "Télécommunications"],
    },
    en: {
      title: "FSK modulation and demodulation",
      desc:  "Complete FSK (Frequency Shift Keying) system in C++. Optimized sine table, DFT-based demodulation for spectral analysis and binary message reconstruction.",
      tags:  ["C++", "FSK", "DSP", "Telecommunications"],
    },
  },

  {
    id:         "planeur",
    image:      "images/Image19.png",
    categories: ["scolaire", "hardware"],
    type:       "school",
    fr: {
      title: "Planeur d'un mètre d'envergure avec pilote automatique",
      desc:  "Conception, modélisation et fabrication d'un planeur optimisé pour un taux de chute minimal. Profil SD7037, structure en carbone, pièces imprimées en ABS. Pilote automatique en tangage embarqué (Arduino Nano + MPU6050). Validé en essais à la volière de l'ENAC.",
      tags:  ["Fusion 360", "Impression 3D", "Arduino", "XFLR5", "Aérodynamique"],
    },
    en: {
      title: "One-meter wingspan glider with pitch autopilot",
      desc:  "Design, modeling and fabrication of a glider optimized for minimum sink rate. SD7037 airfoil, carbon structure, ABS 3D-printed parts. Embedded pitch autopilot (Arduino Nano + MPU6050). Flight-validated at ENAC flight lab.",
      tags:  ["Fusion 360", "3D Printing", "Arduino", "XFLR5", "Aerodynamics"],
    },
  },

  {
    id:         "fusee",
    image:      "images/Image12.png",
    categories: ["personnel", "hardware"],
    type:       "perso",
    fr: {
      title: "Conception d'un ordinateur de bord pour mini-fusée",
      desc:  "Ordinateur de bord de A à Z : déclenchement pyrotechnique du parachute à l'apogée, puis version 100% mécanique avec acquisition de données de vol (accélération, vitesse, altitude).",
      tags:  ["Arduino", "Fusion 360", "Impression 3D", "Aérospatial"],
    },
    en: {
      title: "On-board computer for a model rocket",
      desc:  "Custom flight computer: pyrotechnic parachute deployment at apogee, then fully mechanical version with flight data acquisition (acceleration, speed, altitude).",
      tags:  ["Arduino", "Fusion 360", "3D Printing", "Aerospace"],
    },
  },

  {
    id:         "robocup",
    image:      "images/Image13.png",
    categories: ["scolaire", "hardware"],
    type:       "school",
    award: {
      fr: { strong: "1re place nationale", text: "qualification européenne (10ᵉ place)" },
      en: { strong: "1st place nationally", text: "European qualifier (10th place)" },
    },
    fr: {
      title: "Robot pour la RoboCup Junior Rescue League 2018",
      desc:  "Robot autonome LEGO Mindstorms pour parcours avec obstacles. 1re place nationale, qualification et 10ᵉ place à la compétition européenne.",
      tags:  ["LEGO Mindstorms", "EV3-G", "Robotique"],
    },
    en: {
      title: "Robot for RoboCup Junior Rescue League 2018",
      desc:  "Autonomous LEGO Mindstorms robot for obstacle course. 1st place nationally, qualified and ranked 10th at the European competition.",
      tags:  ["LEGO Mindstorms", "EV3-G", "Robotics"],
    },
  },

  {
    id:         "hypothermie",
    image:      "images/Image14.png",
    categories: ["scolaire", "hardware"],
    type:       "school",
    fr: {
      title: "Boîtier de détection de l'hypothermie",
      desc:  "Conception et fabrication d'un boîtier intégrant capteur de température et circuits électroniques. Modélisation CATIA et impression 3D FDM.",
      tags:  ["Arduino", "CATIA", "Impression 3D"],
    },
    en: {
      title: "Hypothermia detection device",
      desc:  "Design and fabrication of a device integrating a temperature sensor and electronics. CATIA modeling and FDM 3D printing.",
      tags:  ["Arduino", "CATIA", "3D Printing"],
    },
  },

  {
    id:         "veilleuses",
    image:      "images/Image15.png",
    categories: ["personnel", "hardware"],
    type:       "perso",
    fr: {
      title: "Élaboration de veilleuses musicales",
      desc:  "De simples veilleuses à des versions pilotables par télécommande IR : sélection de musiques, réglage du volume et personnalisation des effets lumineux.",
      tags:  ["Arduino", "Fusion 360", "FDM & SLA"],
    },
    en: {
      title: "Musical night lights development",
      desc:  "From basic night lights to IR remote-controlled versions: music selection, volume control and customizable light effects.",
      tags:  ["Arduino", "Fusion 360", "FDM & SLA"],
    },
  },

  {
    id:         "robot-combat",
    image:      "images/Image16.png",
    categories: ["scolaire", "hardware"],
    type:       "school",
    fr: {
      title: "Conception d'un robot de combat",
      desc:  "Robot radiocommandé inspiré de Léonard de Vinci : scie circulaire, bras de défense et canon à eau. Modélisation CATIA, intégration Arduino/Bluetooth.",
      tags:  ["CATIA", "Arduino", "Impression 3D", "Robotique"],
    },
    en: {
      title: "Combat robot design",
      desc:  "RC robot inspired by Leonardo da Vinci: circular saw, defense arms and water cannon. CATIA modeling, Arduino/Bluetooth integration.",
      tags:  ["CATIA", "Arduino", "3D Printing", "Robotics"],
    },
  },

  {
    id:         "soliddrain",
    image:      "images/Image17.png",
    categories: ["scolaire", "hardware"],
    type:       "school",
    fr: {
      title: "Développement du Solid Drain — pavé anti-inondation",
      desc:  "Pavé enterré fonctionnant comme cuve de rétention d'eau temporaire pour réduire l'imperméabilisation des sols urbains et les risques d'inondation.",
      tags:  ["CATIA", "Génie civil", "Environnement"],
    },
    en: {
      title: "Solid Drain — flood-prevention paving block",
      desc:  "Underground paving block acting as a temporary water retention tank to reduce urban soil waterproofing and flooding risks.",
      tags:  ["CATIA", "Civil engineering", "Environment"],
    },
  },

  {
    id:         "roblox",
    image:      "images/Image18.png",
    categories: ["scolaire"],
    type:       "school",
    fr: {
      title: "Création d'un monde virtuel sur la culture française",
      desc:  "Monde virtuel développé lors d'un semestre en Corée du Sud : monuments emblématiques, ferme éducative et scène de concert pour rapprocher étudiants coréens et français.",
      tags:  ["Roblox", "Game design", "Culture"],
    },
    en: {
      title: "Virtual world on French culture",
      desc:  "Immersive virtual world developed during a semester in South Korea: iconic monuments, educational farm and concert stage.",
      tags:  ["Roblox", "Game design", "Culture"],
    },
  },

];