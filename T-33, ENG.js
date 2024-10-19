// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Synonym of WARY is ____?",
    answer: "Prudent",
    options: [
      "Heedless",
      "Negligent",
      "Prudent",
      "Reckless"
    ]
  },
  {
    numb: 2,
    question: "Synonym of ABATE is ____?",
    answer: "Diminish",
    options: [
      "Postpone",
      "Abandon",
      "Diminish",
      "Increase"
    ]
  },
  {
    numb: 3,
    question: "Synonym of TRITE is ____?",
    answer: "Commonplace",
    options: [
      "Minor",
      "Sad",
      "Commonplace",
      "Swindler"
    ]
  },
  {
    numb: 4,
    question: "The synonym of 'Perpetual' is ____?",
    answer: "Everlasting",
    options: [
      "Garrulous",
      "Sneak",
      "Everlasting",
      "Liberal"
    ]
  },
  {
    numb: 5,
    question: "Synonym of 'escarpment' is ____.",
    answer: "Cliff",
    options: [
      "Warning",
      "Cliff",
      "Campsite",
      "Tomb"
    ]
  },
  {
    numb: 6,
    question: "Synonym of 'sundry' is ____.",
    answer: "Various",
    options: [
      "Aged",
      "Supply",
      "Various",
      "Tremendous"
    ]
  },
  {
    numb: 7,
    question: "Synonym of 'impregnable' is ____.",
    answer: "Unconquerable",
    options: [
      "Vulnerable",
      "Full",
      "Unconquerable",
      "Stern"
    ]
  },
  {
    numb: 8,
    question: "Synonym of 'garrulous' is ____?",
    answer: "Talkative",
    options: [
      "Affable",
      "Noisy",
      "Quarrelsome",
      "Talkative"
    ]
  },
  {
    numb: 9,
    question: "Synonym of 'daft' is ____?",
    answer: "Silly",
    options: [
      "Breezy",
      "Awkward",
      "Silly",
      "Nimble"
    ]
  },
  {
    numb: 10,
    question: "Synonym of 'homily' is ____?",
    answer: "Sermon",
    options: [
      "Pension",
      "Household",
      "Suburb",
      "Sermon"
    ]
  },
  {
    numb: 11,
    question: "Synonym of 'whorl' is ____?",
    answer: "Spiral arrangement",
    options: [
      "Excitement",
      "Rare gem",
      "Spiral arrangement",
      "Focus"
    ]
  },
  {
    numb: 12,
    question: "Synonym of 'unequivocal' is ____?",
    answer: "Unmistakable",
    options: [
      "Fearless",
      "Unmistakable",
      "Incomparable",
      "Variable"
    ]
  },
  {
    numb: 13,
    question: "Synonym of 'sedate' is ____?",
    answer: "Calm",
    options: [
      "Shy",
      "Impressive",
      "Calm",
      "Melancholy"
    ]
  },
  {
    numb: 14,
    question: "Synonym of 'capricious' is ____?",
    answer: "Impulsive",
    options: [
      "Impulsive",
      "Amusing",
      "Instinctive",
      "Carefree"
    ]
  },
  {
    numb: 15,
    question: "Synonym of 'affix' is ____?",
    answer: "Fasten",
    options: [
      "Complete",
      "Withstand",
      "Fasten",
      "Repair"
    ]
  },
  {
    numb: 16,
    question: "Synonym of 'immerse' is ____?",
    answer: "Plunge into",
    options: [
      "Conceal",
      "Float",
      "Saturate",
      "Plunge into"
    ]
  },
  {
    numb: 17,
    question: "Synonym of 'symposium' is ____?",
    answer: "Conference",
    options: [
      "Musical composition",
      "Honorary award",
      "Amphitheater",
      "Conference"
    ]
  },
  {
    numb: 18,
    question: "Synonym of 'cuisine' is ____?",
    answer: "Style of cooking",
    options: [
      "Overall atmosphere",
      "Table setting",
      "Style of cooking",
      "Light luggage"
    ]
  },
  {
    numb: 19,
    question: "Synonym of 'mangy' is ____?",
    answer: "Shabby",
    options: [
      "Sleek",
      "Long-limbed",
      "Shabby",
      "Voracious"
    ]
  },
  {
    numb: 20,
    question: "Synonym of 'serene' is ____?",
    answer: "Calm",
    options: [
      "Musical",
      "Patient",
      "Happy",
      "Calm"
    ]
  },
  {
    numb: 21,
    question: "Synonym of 'halcyon' is ____?",
    answer: "Calm",
    options: [
      "Turbulent",
      "Shimmering",
      "Exhausting",
      "Calm"
    ]
  },
  {
    numb: 22,
    question: "Synonym of 'churlish' is ____?",
    answer: "Boorish",
    options: [
      "Brave",
      "Foolish",
      "Boorish",
      "Shy"
    ]
  },
  {
    numb: 23,
    question: "Synonym of 'acumen' is ____?",
    answer: "Keenness",
    options: [
      "Keenness",
      "Brilliance",
      "Swiftness",
      "Greediness"
    ]
  },
  {
    numb: 24,
    question: "Synonym of 'sordid' is ____?",
    answer: "Dirty",
    options: [
      "Lazy",
      "Cruel",
      "Regrettable",
      "Dirty"
    ]
  },
  {
    numb: 25,
    question: "Synonym of 'comely' is ____?",
    answer: "Attractive",
    options: [
      "Peaceful",
      "Attractive",
      "Fun loving",
      "Modest"
    ]
  },
  {
    numb: 26,
    question: "Synonym of 'iota' is ____?",
    answer: "Small amount",
    options: [
      "Something owed",
      "Ancient coin",
      "Small amount",
      "Punctuation mark"
    ]
  },
  {
    numb: 27,
    question: "Synonym of 'broach' is ____?",
    answer: "Introduce",
    options: [
      "To decorate",
      "Bridge",
      "Offend",
      "Introduce"
    ]
  },
  {
    numb: 28,
    question: "Synonym of 'chagrin' is ____?",
    answer: "Mortification",
    options: [
      "Chamber",
      "Mortification",
      "Elation",
      "Intuition"
    ]
  },
  {
    numb: 29,
    question: "Synonym of 'frustration' is ____?",
    answer: "Thwart",
    options: [
      "Lethargy",
      "Facility",
      "Thwart",
      "Nostalgia"
    ]
  },
  {
    numb: 30,
    question: "Synonym of 'fastidious' is ____?",
    answer: "Squeamish",
    options: [
      "Slow",
      "Precise",
      "Squeamish",
      "Hungry"
    ]
  }
];
