// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Antonym of “conversant” is _______?",
    answer: "inexperience",
    options: [
      "inexperience",
      "unprepared",
      "shy",
      "unpretentious"
    ]
  },
  {
    numb: 2,
    question: "Antonym of ” Heartfelt ” is _____________?",
    answer: "Insincere",
    options: [
      "Heartly",
      "Insincere",
      "Unhealthy",
      "Humorous"
    ]
  },
  {
    numb: 3,
    question: "Antonym of ” Pessimistic ” is _____________?",
    answer: "Hopeful",
    options: [
      "Defeatist",
      "Cheat",
      "Despondent",
      "Hopeful"
    ]
  },
  {
    numb: 4,
    question: "Antonym of Credulous is _____________?",
    answer: "Skeptical",
    options: [
      "Respectfull",
      "Hardworking",
      "Skeptical",
      "Frugal"
    ]
  },
  {
    numb: 5,
    question: "Antonym of Accessible? ",
    answer: "Inaccessible",
    options: [
      "Inaccessible",
      "Limited",
      "Restricted",
      "All of these"
    ]
  },
  {
    numb: 6,
    question: "Which one of the following is antonym of ” Perdition ” while others are synonyms?",
    answer: "Heaven",
    options: [
      "Heaven",
      "Doom",
      "Hell",
      "Infernal"
    ]
  },
  {
    numb: 7,
    question: "Which one of the following is antonym of ” Prosaic ” while others are synonyms?",
    answer: "Interesting",
    options: [
      "Pedestrian",
      "Prosy",
      "Tedious",
      "Interesting"
    ]
  },
  {
    numb: 8,
    question: "Antonym of Vagrant is _____________?",
    answer: "Stable",
    options: [
      "Derelict",
      "Wayfarer",
      "Stable",
      "Vagabond"
    ]
  },
  {
    numb: 9,
    question: "Antonym of ENORMOUS is_____________?",
    answer: "Tiny",
    options: [
      "Fragile",
      "Weak",
      "Tiny",
      "Soft"
    ]
  },
  {
    numb: 10,
    question: "Antonym of FRIVOLOUS is _____________?",
    answer: "Wise",
    options: [
      "Trivial",
      "Silly",
      "Petty",
      "Wise"
    ]
  },
  {
    numb: 11,
    question: "Antonym of QUIESCENT is _____________?",
    answer: "Active",
    options: [
      "Asleep",
      "Active",
      "Deactivated",
      "Fallow"
    ]
  },
  {
    numb: 12,
    question: "The antonyms of Stale is____________?",
    answer: "Fresh",
    options: [
      "Old",
      "Fresh",
      "Tale",
      "Break"
    ]
  },
  {
    numb: 13,
    question: "Antonym of PACIFIC is _____________?",
    answer: "Aggressive",
    options: [
      "Aggressive",
      "Peaceful",
      "Hawkish",
      "Discordant"
    ]
  },
  {
    numb: 14,
    question: "Antonym of “awe” is _______.",
    answer: "contempt",
    options: [
      "borrow",
      "shallow",
      "low",
      "contempt"
    ]
  },
  {
    numb: 15,
    question: "Antonym of “penurious” is _______?",
    answer: "generous",
    options: [
      "generous",
      "lenient",
      "injurious",
      "relaxed"
    ]
  },
  {
    numb: 16,
    question: "Antonym of ” Perspicacious ” is _____________?",
    answer: "Dull",
    options: [
      "Sagacious",
      "Discerning",
      "Astute",
      "Dull"
    ]
  },
  {
    numb: 17,
    question: "Antonym of “Lenient” is _____________?",
    answer: "Strict",
    options: [
      "easy-going",
      "long-suffering",
      "Strict",
      "Moderate"
    ]
  },
  {
    numb: 18,
    question: "Antonym of Felicity is _____________?",
    answer: "Sadness",
    options: [
      "Sadness",
      "Powerful",
      "Narrow",
      "Opaque"
    ]
  },
  {
    numb: 19,
    question: "Antonym of Accost?",
    answer: "All of these",
    options: [
      "Avoid",
      "Neglect",
      "Scorn",
      "All of these"
    ]
  },
  {
    numb: 20,
    question: "Which one of the following is antonym of ” Epitome ” while others are synonyms?",
    answer: "antithesis",
    options: [
      "antithesis",
      "abridgment",
      "abstract",
      "compendium"
    ]
  },
  {
    numb: 21,
    question: "Which one of the following is antonym of ” Apocryphal ” while others are synonyms?",
    answer: "Genuine",
    options: [
      "Genuine",
      "Mythical",
      "Obscure",
      "Unsubstantiated"
    ]
  },
  {
    numb: 22,
    question: "What’s the antonym of Amicable?",
    answer: "Hostile",
    options: [
      "Friendly",
      "Hostile",
      "Haughty",
      "Arrogant"
    ]
  },
  {
    numb: 23,
    question: "Antonym of RECONDITE is_____________?",
    answer: "Manifest",
    options: [
      "Hermetic",
      "Manifest",
      "Pedantic",
      "Occult"
    ]
  },
  {
    numb: 24,
    question: "Antonym of WEAN is _____________?",
    answer: "Attach",
    options: [
      "Attach",
      "Detach",
      "Discourage",
      "Halt"
    ]
  },
  {
    numb: 25,
    question: "Antonym of PHILISTINE is _____________?",
    answer: "Cultured",
    options: [
      "Smutty",
      "Uncultured",
      "Uncultured",
      "Cultured"
    ]
  },
  {
    numb: 26,
    question: "The antonym of Mammoth is___________?",
    answer: "Small",
    options: [
      "Big",
      "Giant",
      "Small",
      "Low"
    ]
  },
  {
    numb: 27,
    question: "Antonym of DWARF is _____________?",
    answer: "Giant",
    options: [
      "Giant",
      "Tiny",
      "Huge",
      "Enormous"
    ]
  },
  {
    numb: 28,
    question: "Antonym of “matutinal” is ________.",
    answer: "crepuscular",
    options: [
      "paternal",
      "crepuscular",
      "maritime",
      "marsupial"
    ]
  },
  {
    numb: 29,
    question: "Antonym of “impervious” is _______?",
    answer: "prone",
    options: [
      "kind",
      "disastrous",
      "prone",
      "perfect"
    ]
  },
  {
    numb: 30,
    question: "Antonym of ” Astute ” is _____________?",
    answer: "Stupid",
    options: [
      "Stupid",
      "Discerning",
      "Canny",
      "Whirlwind"
    ]
  }
];
