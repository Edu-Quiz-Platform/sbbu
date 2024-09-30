// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The club usually empties _____ about two in the morning?",
    answer: "out",
    options: [
      "off",
      "on",
      "in",
      "out"
    ]
  },
  {
    numb: 2,
    question: "Usman was broken________from his old friends.",
    answer: "away",
    options: [
      "with",
      "away",
      "of",
      "in"
    ]
  },
  {
    numb: 3,
    question: "I am not acquainted ____ her father.",
    answer: "with",
    options: [
      "of",
      "at",
      "to",
      "with"
    ]
  },
  {
    numb: 4,
    question: "Sana is not known ______ me.",
    answer: "to",
    options: [
      "to",
      "on",
      "at",
      "with"
    ]
  },
  {
    numb: 5,
    question: "Do not bother me 3 o’ clock __ night.",
    answer: "at",
    options: [
      "in",
      "on",
      "at",
      "along"
    ]
  },
  {
    numb: 6,
    question: "My sister is bad _____ maths.",
    answer: "at",
    options: [
      "in",
      "at",
      "with",
      "from"
    ]
  },
  {
    numb: 7,
    question: "He is accustomed ______ hot weather.",
    answer: "to",
    options: [
      "to",
      "of",
      "by",
      "with"
    ]
  },
  {
    numb: 8,
    question: "I was amazed ________ his misbehavior.",
    answer: "At",
    options: [
      "In",
      "At",
      "For",
      "With"
    ]
  },
  {
    numb: 9,
    question: "He is superior _____me?",
    answer: "to",
    options: [
      "to",
      "than",
      "with",
      "from"
    ]
    },
  {
    numb: 10,
    question: "I would like to thank you ____________ behalf of all of us?",
    answer: "on",
    options: [
      "about",
      "of",
      "on",
      "in"
    ]
  },
  {
    numb: 11,
    question: "Please do not interfere ________ my personal affairs?",
    answer: "in",
    options: [
      "in",
      "on",
      "of",
      "about"
    ]
  },
  {
    numb: 12,
    question: "Nafeesa is afraid _________ spiders?",
    answer: "of",
    options: [
      "from",
      "about",
      "in",
      "of"
    ]
  },
  {
    numb: 13,
    question: "The railway track runs ______ the river.",
    answer: "across",
    options: [
      "across",
      "over",
      "by",
      "on"
    ]
  },
  {
    numb: 14,
    question: "She’s angry ______ you.",
    answer: "with",
    options: [
      "to",
      "on",
      "with",
      "for"
    ]
  },
  {
    numb: 15,
    question: "Danish came out ____ his office, looking tired and worried.",
    answer: "of",
    options: [
      "of",
      "to",
      "at",
      "from"
    ]
  },
  {
    numb: 16,
    question: "His people built many memorials __ his greatness.",
    answer: "to",
    options: [
      "for",
      "with",
      "to",
      "of"
    ]
  },
  {
    numb: 17,
    question: "I saw you dancing _____ party.",
    answer: "at the",
    options: [
      "in the",
      "at the",
      "at a",
      "in"
    ]
  },
  {
    numb: 18,
    question: "I am proud ______ my brother.",
    answer: "of",
    options: [
      "of",
      "on",
      "to",
      "at"
    ]
  },
  {
    numb: 19,
    question: "The candidates shall abide ______ all directions, instructions and regulations issued by the department.",
    answer: "by",
    options: [
      "with",
      "to",
      "by",
      "on"
    ]
  },
  {
    numb: 20,
    question: "Usman is afraid ______ dog.",
    answer: "of",
    options: [
      "from",
      "of",
      "to",
      "with"
    ]
  },
  {
    numb: 21,
    question: "The man was charged _____ murder.",
    answer: "with",
    options: [
      "on",
      "of",
      "at",
      "with"
    ]
  },
  {
    numb: 22,
    question: "He is responsible _______the president for his decisions.",
    answer: "to",
    options: [
      "for",
      "to",
      "of",
      "with"
    ]
  },
  {
    numb: 23,
    question: "He looks upset, I think he took the criticism _____________ heart?",
    answer: "to",
    options: [
      "to",
      "in",
      "of",
      "about"
    ]
  },
  {
    numb: 24,
    question: "He is jealous ______________ her success?",
    answer: "of",
    options: [
      "on",
      "in",
      "of",
      "about"
    ]
  },
  {
    numb: 25,
    question: "He is interested ____________ history?",
    answer: "in",
    options: [
      "on",
      "in",
      "of",
      "about"
    ]
  },
  {
    numb: 26,
    question: "He is good ______ Football.",
    answer: "at",
    options: [
      "of",
      "in",
      "at",
      "with"
    ]
  },
  {
    numb: 27,
    question: "Is this is the bus, ______ goes to the Sadar Bazar?",
    answer: "which",
    options: [
      "which",
      "that",
      "who",
      "To arrive"
    ]
  },
  {
    numb: 28,
    question: "The public were deeply sceptical ________ some of the proposals?",
    answer: "About",
    options: [
      "For",
      "With",
      "From",
      "About"
    ]
  },
  {
    numb: 29,
    question: "We are sensible _____ the difficulties he faces?",
    answer: "of",
    options: [
      "to",
      "of",
      "on",
      "with"
    ]
  },
  {
    numb: 30,
    question: "The wheels of the truck press __ the road.",
    answer: "against",
    options: [
      "on",
      "upon",
      "over",
      "against"
    ]
  },
  {
    numb: 31,
    question: "Head is covered ____ hair.",
    answer: "with",
    options: [
      "at",
      "of",
      "with",
      "from"
    ]
  },
  {
    numb: 32,
    question: "I am used ______ speaking English.",
    answer: "to",
    options: [
      "of",
      "to",
      "with",
      "Both B & C"
    ]
  },
  {
    numb: 33,
    question: "The Jar was full _______ oil.",
    answer: "of",
    options: [
      "of",
      "by",
      "with",
      "from"
    ]
  },
  {
    numb: 34,
    question: "I told the tailor to put red buttons _____ the dress he is making for me.",
    answer: "on",
    options: [
      "in",
      "at",
      "on",
      "N.O.T"
    ]
  },
];
