// Array of questions with options and correct answers
const questions = [
  {
    numb: 141,
    question: "Clocks, which move with velocities comparable to the velocity of light, run ____?",
    answer: "slow",
    options: [
      "fast",
      "slow",
      "equal to the velocity of light",
      "with zero velocity"
    ]
  },
  {
    numb: 142,
    question: "The famous book; Al – Qanun was written by the Muslim scientist?",
    answer: "Abu Ali Sina",
    options: [
      "Jabar bin Hayyan",
      "Zakariya Al – Razi",
      "Abu Ali Sina",
      "Abdul Qasim Majreeti"
    ]
  },
  {
    numb: 143,
    question: "Which triplet in DNA codes for valine?",
    answer: "N.O.T",
    options: [
      "CTT",
      "AGU",
      "CAT",
      "N.O.T"
    ]
  },
  {
    numb: 144,
    question: "Chemical name of vinegar is ____?",
    answer: "Dilute acetic acid",
    options: [
      "Sodium Nitrate",
      "Dilute acetic acid",
      "Chloride of lime",
      "Calcium"
    ]
  },
  {
    numb: 145,
    question: "Which of the following layers make radio transmission possible?",
    answer: "Ionosphere",
    options: [
      "Troposphere",
      "Ionosphere",
      "Mesosphere",
      "Stratosphere"
    ]
  },
  {
    numb: 146,
    question: "Which of the following atmospheric layers help in radio communication?",
    answer: "Ionosphere",
    options: [
      "Exosphere",
      "Ionosphere",
      "Troposphere",
      "Stratosphere"
    ]
  },
  {
    numb: 147,
    question: "Animal which captures and readily kills living animals for its food is called ____?",
    answer: "Predator",
    options: [
      "Parasite",
      "Scavenger",
      "Predator",
      "Mammal"
    ]
  },
  {
    numb: 148,
    question: "In a fission nuclear reaction, a heavy nucleus breaks up into smaller nuclei whereas in another nuclear reaction two or more than two possibly nuclei are fused to form a heavy nucleus. This nuclear reaction is called ____?",
    answer: "Fusion nuclear reaction",
    options: [
      "Chemical Reaction",
      "Nuclear reaction",
      "Fission nuclear reaction",
      "Fusion nuclear reaction"
    ]
  },
  {
    numb: 149,
    question: "A nuclear reactor is a device used to carry out controlled nuclear reaction whereas GM counter is a device used to detect ____?",
    answer: "Nuclear Radiation",
    options: [
      "Current",
      "Voltage",
      "Nuclear Radiation",
      "Power"
    ]
  },
  {
    numb: 150,
    question: "Red blood corpuscles are formed in the ____?",
    answer: "Bone marrow",
    options: [
      "Liver",
      "Bone marrow",
      "Kidneys",
      "Heart"
    ]
  },
  {
    numb: 151,
    question: "Which is the largest organ in the human body?",
    answer: "Skin",
    options: [
      "Liver",
      "Heart",
      "Skin",
      "Kidney"
    ]
  },
  {
    numb: 152,
    question: "Medulla oblongata is a part of human ____?",
    answer: "Brain",
    options: [
      "Heart",
      "Brain",
      "Liver",
      "Sex organ"
    ]
  },
  {
    numb: 153,
    question: "When a person enters a dark room from bright light, he is not able to see clearly for a little while because the ____?",
    answer: "Iris is unable to dilate the pupil immediately",
    options: [
      "Eye is unable to adjust itself immediately",
      "Retina becomes insensitive momentarily",
      "Iris is unable to dilate the pupil immediately",
      "Distance between the lens and retina takes time to adjust"
    ]
  },
  {
    numb: 154,
    question: "The Green House Effect is caused by an excess of ____?",
    answer: "Carbon dioxide",
    options: [
      "Carbon dioxide",
      "Carbon monoxide",
      "Carbon tetrachloride",
      "N.O.T"
    ]
  },
  {
    numb: 155,
    question: "Scalding with steam is more severe than scalding by boiling water because ____?",
    answer: "Steam contains more energy than boiling water",
    options: [
      "Steam can penetrate the skin",
      "Steam is at a higher temperature",
      "Steam contains more energy than boiling water",
      "Steam is at a higher pressure"
    ]
  },
  {
    numb: 156,
    question: "An instrument to detect the purity of milk is ____?",
    answer: "Lactometer",
    options: [
      "Lactometer",
      "Hygrometer",
      "Manometer",
      "Sonometer"
    ]
  },
  {
    numb: 157,
    question: "The atmosphere of the moon consists of ____?",
    answer: "60% Nitrogen, 40% inert gases",
    options: [
      "90% Hydrogen, 10% Nitrogen",
      "80% Nitrogen, 20% Hydrogen",
      "60% Nitrogen, 40% inert gases",
      "N.O.T"
    ]
  },
  {
    numb: 158,
    question: "One of these scientists formulated basic laws of Geometry?",
    answer: "Pythagoras",
    options: [
      "Pythagoras",
      "Archimedes",
      "Aristotle",
      "N.O.T"
    ]
  },
  {
    numb: 159,
    question: "Vacuum tubes have been replaced by ____?",
    answer: "Transistors",
    options: [
      "Conductors",
      "Diodes",
      "Transistors",
      "N.O.T"
    ]
  },
  {
    numb: 160,
    question: "The shape of the external ear is due to ____?",
    answer: "Elastic cartilage",
    options: [
      "Elastic cartilage",
      "Fibrocartilage",
      "Articular cartilage",
      "N.O.T"
    ]
  },
  {
    numb: 161,
    question: "When water is filled in a bottle and is allowed to freeze, the bottle breaks because ____?",
    answer: "Water expands on freezing",
    options: [
      "Water expands on freezing",
      "Bottle contracts at freezing point",
      "Temperature outside the bottle is less than that inside the bottle",
      "N.O.T"
    ]
  },
  {
    numb: 162,
    question: "____ are positively (+) charged particles?",
    answer: "Protons",
    options: [
      "Neutrons",
      "Electrons",
      "Protons",
      "N.O.T"
    ]
  },
  {
    numb: 163,
    question: "2017 Nobel Prize Currently Awarded in Physics is for ____?",
    answer: "First Observation of Gravitational Waves",
    options: [
      "Far Observation of Gravitational Waves",
      "Far Observation of Gravitational Weight",
      "First Observation of Gravitational Waves",
      "Far Objectivity of Gravitational Waves"
    ]
  },
  {
    numb: 164,
    question: "The speed of sound in air at sea level is approximately ____?",
    answer: "340 meters per second",
    options: [
      "300 meter per second",
      "320 meter per second",
      "340 meters per second",
      "370 meter per second"
    ]
  },
  {
    numb: 165,
    question: "Deficiency of vitamin B1 causes ____?",
    answer: "Beriberi",
    options: [
      "Rickets",
      "Bone Infection",
      "Beriberi",
      "Myopia"
    ]
  },
  {
    numb: 166,
    question: "What is the breathing rate of human being body?",
    answer: "16-20 minutes",
    options: [
      "15-11 minutes",
      "16-20 minutes",
      "25-26 minutes",
      "32-35 minutes"
    ]
  },
  {
    numb: 167,
    question: "If the length of a heater coil is reduced by 10% of its original length, then Power consumed by heater will ____?",
    answer: "Decrease by 10%",
    options: [
      "Increase over 10%",
      "Decrease by 10%",
      "Decrease by 0.5%",
      "Increase by 0.5%"
    ]
  },
  {
    numb: 168,
    question: "The common refrigerant used in domestic Refrigerator is ____?",
    answer: "Freon/Ammonia",
    options: [
      "Neon",
      "Spirit",
      "Freon/Ammonia",
      "Methane"
    ]
  },
  {
    numb: 169,
    question: "PSR J0108-1431 is the closest known ____ to Earth?",
    answer: "Pulsar",
    options: [
      "Black hole",
      "Red giant",
      "Quasar",
      "Pulsar"
    ]
  },
  {
    numb: 170,
    question: "Ornithology is the study of ____?",
    answer: "Birds",
    options: [
      "Birds",
      "Insects",
      "Reptiles",
      "Whales"
    ]
  }
];