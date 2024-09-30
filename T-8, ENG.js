// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: 'Synonym of "Mano a Mano"',
    answer: "Hand to hand",
    options: [
      "Hand to hand",
      "Street to street",
      "District to district",
      "City to city"
    ]
  },
  {
    numb: 2,
    question: 'Synonym of "dormant" is _________.',
    answer: "hibernating",
    options: [
      "animated",
      "hibernating",
      "active",
      "vigorous"
    ]
  },
  {
    numb: 3,
    question: 'Synonym of "peer" is ________.',
    answer: "fellow",
    options: [
      "foe",
      "connote",
      "fellow",
      "recluse"
    ]
  },
  {
    numb: 4,
    question: 'Synonym of "expunge" is ______.',
    answer: "obliterate",
    options: [
      "drain",
      "obliterate",
      "lie",
      "distort"
    ]
  },
  {
    numb: 5,
    question: 'Synonym of "centrifugal" is _______?',
    answer: "moving away from the centre",
    options: [
      "rapid",
      "the exact center",
      "consolidated",
      "moving away from the centre"
    ]
  },
  {
    numb: 6,
    question: 'Synonym of "reformation" is _______?',
    answer: "change",
    options: [
      "repetition",
      "change",
      "revelation",
      "retreat"
    ]
  },
  {
    numb: 7,
    question: 'Synonym of "errata" is _______?',
    answer: "list of errors",
    options: [
      "antiques",
      "odd behaviour",
      "list of errors",
      "suggestive literature"
    ]
  },
  {
    numb: 8,
    question: 'Synonym of "envisage" is ________?',
    answer: "visualize",
    options: [
      "visualize",
      "inspect",
      "surround",
      "idealize"
    ]
  },
  {
    numb: 9,
    question: 'Synonym of "interpolate" is _______?',
    answer: "insert",
    options: [
      "flee",
      "explain",
      "reverse",
      "insert"
    ]
    },
  {
    numb: 10,
    question: 'Synonym of "omnipresent" is _______?',
    answer: "ubiquitous",
    options: [
      "all-knowing",
      "ubiquitous",
      "threatening",
      "hovering"
    ]
  },
  {
    numb: 11,
    question: 'Synonym of "bowdlerize" is _______?',
    answer: "censor",
    options: [
      "censor",
      "add to",
      "seize literally",
      "become rowdy"
    ]
  },
  {
    numb: 12,
    question: 'Synonym of "impugn" is _______?',
    answer: "attack verbally",
    options: [
      "attribute",
      "hold back by force",
      "attack verbally",
      "press"
    ]
  },
  {
    numb: 13,
    question: 'Synonym of "amend" is _______?',
    answer: "alter",
    options: [
      "alter",
      "suggest",
      "bring together",
      "subscribe"
    ]
  },
  {
    numb: 14,
    question: 'Synonym of "amnesty" is _______?',
    answer: "pardon",
    options: [
      "exchange of prisoners",
      "pardon",
      "international agreement",
      "cease-fire "
    ]
  },
  {
    numb: 15,
    question: 'Synonym of "superfluous" is _______?',
    answer: "unnecessary",
    options: [
      "flowing",
      "disdainful",
      "ornate",
      "unnecessary"
    ]
  },
  {
    numb: 16,
    question: 'Antonym of "recondite" is ________.',
    answer: "patent",
    options: [
      "give",
      "obscure",
      "patent",
      "hardy"
    ]
  },
  {
    numb: 17,
    question: 'Antonym of "effluvium" is ______.',
    answer: "fragrance",
    options: [
      "fragrance",
      "land",
      "essential",
      "solid"
    ]
  },
  {
    numb: 18,
    question: 'Antonym of "Meticulous" is ________?',
    answer: "Sloppy",
    options: [
      "Fussy",
      "Conscientious",
      "Scrupulous",
      "Sloppy"
    ]
  },
  {
    numb: 19,
    question: 'Antonym of "FALLACY" is ________?',
    answer: "Truth",
    options: [
      "Abandon",
      "Blunder",
      "Truth",
      "Error"
    ]
  },
  {
    numb: 20,
    question: 'Antonym of "ATTRACT" is _________?',
    answer: "Repel",
    options: [
      "Repel",
      "Demote",
      "Expel",
      "N.O.T"
    ]
  },
  {
    numb: 21,
    question: 'Antonym of "Abstruse"?',
    answer: "A.O.T",
    options: [
      "Obvious",
      "Lucid",
      "Plain",
      "A.O.T"
    ]
  },
  {
    numb: 22,
    question: 'Which one of the following is antonym of "Mordant" while others are synonyms?',
    answer: "pleasant",
    options: [
      "acerbic",
      "caustic",
      "corrosive",
      "pleasant"
    ]
  },
  {
    numb: 23,
    question: 'Which one of the following is antonym of "Raucous" while others are synonyms?',
    answer: "Subdued",
    options: [
      "Hoarse",
      "Subdued",
      "Strident",
      "Discordant"
    ]
  },
  {
    numb: 24,
    question: 'Antonym of "filthy" is ________?',
    answer: "Clean",
    options: [
      "Clean",
      "Grimy",
      "Grubby",
      "Putrid"
    ]
  },
  {
    numb: 25,
    question: 'Antonym of "ARTIFICIAL" is ________?',
    answer: "Natural",
    options: [
      "Red",
      "Solid",
      "Natural",
      "Truthful"
    ]
  },
  {
    numb: 26,
    question: 'Antonym of "DUCTILE" is ________?',
    answer: "Stiff",
    options: [
      "Stiff",
      "Docile",
      "Pliable",
      "Supple"
    ]
  },
  {
    numb: 27,
    question: 'Antonym of "FOREMOST" is _________?',
    answer: "Unimportant",
    options: [
      "Mature",
      "Disposed",
      "Hindmost",
      "Unimportant"
    ]
  },
  {
    numb: 28,
    question: 'Antonym of "DENIGRATE" is ________?',
    answer: "Boost",
    options: [
      "Vilify",
      "Boost",
      "Besmirch",
      "Asperse"
    ]
  },
  {
    numb: 29,
    question: 'Antonym of "SINGULAR" is ________?',
    answer: "Common",
    options: [
      "Ancient",
      "Social",
      "Common",
      "Dull"
    ]
  },
  {
    numb: 30,
    question: 'Antonym of "brazen" is _______.',
    answer: "bashful",
    options: [
      "bashful",
      "boisterous",
      "noisy",
      "heated"
    ]
  },
];
