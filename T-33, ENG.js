// Array of questions with options and correct answers
const questions = [
  {
    numb: 51,
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
    numb: 52,
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
    numb: 53,
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
    numb: 54,
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
    numb: 55,
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
    numb: 56,
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
    numb: 57,
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
    numb: 58,
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
    numb: 59,
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
    numb: 60,
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
    numb: 61,
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
    numb: 62,
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
    numb: 63,
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
    numb: 64,
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
    numb: 65,
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
    numb: 66,
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
    numb: 67,
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
    numb: 68,
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
    numb: 69,
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
    numb: 70,
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
    numb: 71,
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
    numb: 72,
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
    numb: 73,
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
    numb: 74,
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
    numb: 75,
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
    numb: 76,
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
    numb: 77,
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
    numb: 78,
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
    numb: 79,
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
    numb: 80,
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