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
    answer: "B",
    options: [
      "A. Heartly",
      "B. Insincere",
      "C. Unhealthy",
      "D. Humorous"
    ]
  },
  {
    numb: 3,
    question: "Antonym of ” Pessimistic ” is _____________?",
    answer: "D",
    options: [
      "A. Defeatist",
      "B. Cheat",
      "C. Despondent",
      "D. Hopeful"
    ]
  },
  {
    numb: 4,
    question: "Antonym of Credulous is _____________?",
    answer: "C",
    options: [
      "A. Respectfull",
      "B. Hardworking",
      "C. Skeptical",
      "D. Frugal"
    ]
  },
  {
    numb: 5,
    question: "Antonym of Accessible? ",
    answer: "A",
    options: [
      "A. Inaccessible",
      "B. Limited",
      "C. Restricted",
      "D. All of these"
    ]
  },
  {
    numb: 6,
    question: "Which one of the following is antonym of ” Perdition ” while others are synonyms?",
    answer: "A",
    options: [
      "A. Heaven",
      "B. Doom",
      "C. Hell",
      "D. Infernal"
    ]
  },
  {
    numb: 7,
    question: "Which one of the following is antonym of ” Prosaic ” while others are synonyms?",
    answer: "D",
    options: [
      "A. Pedestrian",
      "B. Prosy",
      "C. Tedious",
      "D. Interesting"
    ]
  },
  {
    numb: 8,
    question: "Antonym of Vagrant is _____________?",
    answer: "C",
    options: [
      "A. Derelict",
      "B. Wayfarer",
      "C. Stable",
      "D. Vagabond"
    ]
  },
  {
    numb: 9,
    question: "Antonym of ENORMOUS is_____________?",
    answer: "C",
    options: [
      "A. Fragile",
      "B. Weak",
      "C. Tiny",
      "D. Soft"
    ]
  },
  {
    numb: 10,
    question: "Antonym of FRIVOLOUS is _____________?",
    answer: "D",
    options: [
      "A. Trivial",
      "B. Silly",
      "C. Petty",
      "D. Wise"
    ]
  },
  {
    numb: 11,
    question: "Antonym of QUIESCENT is _____________?",
    answer: "B",
    options: [
      "A. Asleep",
      "B. Active",
      "C. Deactivated",
      "D. Fallow"
    ]
  },
  {
    numb: 12,
    question: "The antonyms of Stale is____________?",
    answer: "B",
    options: [
      "A. Old",
      "B. Fresh",
      "C. Tale",
      "D. Break"
    ]
  },
  {
    numb: 13,
    question: "Antonym of PACIFIC is _____________?",
    answer: "A",
    options: [
      "A. Aggressive",
      "B. Peaceful",
      "C. Hawkish",
      "D. Discordant"
    ]
  },
  {
    numb: 14,
    question: "Antonym of “awe” is _______.",
    answer: "D",
    options: [
      "A. borrow",
      "B. shallow",
      "C. low",
      "D. contempt"
    ]
  },
  {
    numb: 15,
    question: "Antonym of “penurious” is _______?",
    answer: "A",
    options: [
      "A. generous",
      "B. lenient",
      "C. injurious",
      "D. relaxed"
    ]
  },
  {
    numb: 16,
    question: "Antonym of ” Perspicacious ” is _____________?",
    answer: "D",
    options: [
      "A. Sagacious",
      "B. Discerning",
      "C. Astute",
      "D. Dull"
    ]
  },
  {
    numb: 17,
    question: "Antonym of “Lenient” is _____________?",
    answer: "C",
    options: [
      "A. easy-going",
      "B. long-suffering",
      "C. Strict",
      "D. Moderate"
    ]
  },
  {
    numb: 18,
    question: "Antonym of Felicity is _____________?",
    answer: "A",
    options: [
      "A. Sadness",
      "B. Powerful",
      "C. Narrow",
      "D. Opaque"
    ]
  },
  {
    numb: 19,
    question: "Antonym of Accost?",
    answer: "D",
    options: [
      "A. Avoid",
      "B. Neglect",
      "C. Scorn",
      "D. All of these"
    ]
  },
  {
    numb: 20,
    question: "Which one of the following is antonym of ” Epitome ” while others are synonyms?",
    answer: "A",
    options: [
      "A. antithesis",
      "B. abridgment",
      "C. abstract",
      "D. compendium"
    ]
  },
  {
    numb: 21,
    question: "Which one of the following is antonym of ” Apocryphal ” while others are synonyms?",
    answer: "A",
    options: [
      "A. Genuine",
      "B. Mythical",
      "C. Obscure",
      "D. Unsubstantiated"
    ]
  },
  {
    numb: 22,
    question: "What’s the antonym of Amicable?",
    answer: "B",
    options: [
      "A. Friendly",
      "B. Hostile",
      "C. Haughty",
      "D. Arrogant"
    ]
  },
  {
    numb: 23,
    question: "Antonym of RECONDITE is_____________?",
    answer: "B",
    options: [
      "A. Hermetic",
      "B. Manifest",
      "C. Pedantic",
      "D. Occult"
    ]
  },
  {
    numb: 24,
    question: "Antonym of WEAN is _____________?",
    answer: "A",
    options: [
      "A. Attach",
      "B. Detach",
      "C. Discourage",
      "D. Halt"
    ]
  },
  {
    numb: 25,
    question: "Antonym of PHILISTINE is _____________?",
    answer: "D",
    options: [
      "A. Smutty",
      "B. Uncultured",
      "C. Uncultured",
      "D. Cultured"
    ]
  },
  {
    numb: 26,
    question: "The antonym of Mammoth is___________?",
    answer: "C",
    options: [
      "A. Big",
      "B. Giant",
      "C. Small",
      "D. Low"
    ]
  },
  {
    numb: 27,
    question: "Antonym of DWARF is _____________?",
    answer: "A",
    options: [
      "A. Giant",
      "B. Tiny",
      "C. Huge",
      "D. Enormous"
    ]
  },
  {
    numb: 28,
    question: "Antonym of “matutinal” is ________.",
    answer: "B",
    options: [
      "A. paternal",
      "B. crepuscular",
      "C. maritime",
      "D. marsupial"
    ]
  },
  {
    numb: 29,
    question: "Antonym of “impervious” is _______?",
    answer: "C",
    options: [
      "A. kind",
      "B. disastrous",
      "C. prone",
      "D. perfect"
    ]
  },
  {
    numb: 30,
    question: "Antonym of ” Astute ” is _____________?",
    answer: "A",
    options: [
      "A. Stupid",
      "B. Discerning",
      "C. Canny",
      "D. Whirlwind"
    ]
  }
];
