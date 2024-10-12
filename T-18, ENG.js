// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Synonym of “benchmark” is _______?",
    answer: "reference point",
    options: [
      "exhibition",
      "reference point",
      "label",
      "repute"
    ]
  },
  {
    numb: 2,
    question: "Synonym of “barrage” is _________?",
    answer: "bombardment",
    options: [
      "quarters for troops",
      "dispute",
      "bombardment",
      "large boat"
    ]
  },
  {
    numb: 3,
    question: "Synonym of “vermin” is _________?",
    answer: "objectionable pets",
    options: [
      "welcome guests",
      "fur wraps",
      "true accounts",
      "objectionable pets"
    ]
  },
  {
    numb: 4,
    question: "Synonym of “hew” is _________?",
    answer: "chop",
    options: [
      "to obey",
      "chop",
      "cry out",
      "tinge"
    ]
  },
  {
    numb: 5,
    question: "Synonym of “overture” is _________?",
    answer: "proposal",
    options: [
      "disclosure",
      "apology",
      "request",
      "proposal"
    ]
  },
  {
    numb: 6,
    question: "Synonym of “nomenclature” is _________?",
    answer: "terminology",
    options: [
      "terminology",
      "pseudonym",
      "claque",
      "title"
    ]
  },
  {
    numb: 7,
    question: "Synonym of “eschew” is _________?",
    answer: "to avoid",
    options: [
      "to avoid",
      "argue",
      "forget",
      "spit out"
    ]
  },
  {
    numb: 8,
    question: "Synonym of “redoubt” is _________?",
    answer: "fortification",
    options: [
      "fortification",
      "rearguard",
      "trench",
      "camp"
    ]
  },
  {
    numb: 9,
    question: "Synonym of “legion” is _________?",
    answer: "multitude",
    options: [
      "distance",
      "rampage",
      "multitude",
      "motto"
    ]
  },
  {
    numb: 10,
    question: "Synonym of “reticence” is _________?",
    answer: "reserve",
    options: [
      "reserve",
      "hostility",
      "regret",
      "brazenness"
    ]
  },
  {
    numb: 11,
    question: "Synonym of “phlegmatic” is _________?",
    answer: "stolid",
    options: [
      "stolid",
      "aroused",
      "animated",
      "pneumatic"
    ]
  },
  {
    numb: 12,
    question: "Synonym of “demise” is _________?",
    answer: "death",
    options: [
      "residence",
      "death",
      "accident",
      "act"
    ]
  },
  {
    numb: 13,
    question: "Synonym of “intractable” is _________?",
    answer: "hard to manage",
    options: [
      "hard to manage",
      "barbaric",
      "flawless",
      "elusive"
    ]
  },
  {
    numb: 14,
    question: "Synonym of “celibate” is _________?",
    answer: "single",
    options: [
      "single",
      "hypocritical",
      "married",
      "bald"
    ]
  },
  {
    numb: 15,
    question: "Synonym of “nepotism” is _________?",
    answer: "favoritism",
    options: [
      "favoritism",
      "hedonism",
      "philosophy",
      "rule of despot"
    ]
  },
  {
    numb: 16,
    question: "Synonym of “inculcate” is _________?",
    answer: "teach",
    options: [
      "corroborate",
      "avenge",
      "teach",
      "destroy"
    ]
  },
  {
    numb: 17,
    question: "Synonym of “Sumptuous” is _____________?",
    answer: "Splendid",
    options: [
      "Swampy",
      "Irritable",
      "Meager",
      "Splendid"
    ]
  },
  {
    numb: 18,
    question: "Synonym of “Outclass” is _____________?",
    answer: "Surpass",
    options: [
      "Surpass",
      "Defect",
      "Incur",
      "Detest"
    ]
  },
  {
    numb: 19,
    question: "Word nearest in meaning to Obscene is __________?-(PMS 2018)",
    answer: "Both A & B",
    options: [
      "Dirty",
      "indecent",
      "unhealthy",
      "Both A & B"
    ]
  },
  {
    numb: 20,
    question: "Synonym of “Abject” is _____________?",
    answer: "All of these",
    options: [
      "Disgusting",
      "Squalid",
      "Contemptible",
      "All of these"
    ]
  },
  {
    numb: 21,
    question: "Synonym of “Accost” is __________?",
    answer: "Both a&b",
    options: [
      "Solicit",
      "Confront",
      "Both a&b",
      "Scorn"
    ]
  },
  {
    numb: 22,
    question: "Synonymous of ‘Flank’ is __________?",
    answer: "Side of a person right or left",
    options: [
      "Side of a person right or left",
      "In an open, honest, and direct",
      "Hidden",
      "Far away"
    ]
  },
  {
    numb: 23,
    question: "Synonym of “Dearth” is _____________?",
    answer: "Lack",
    options: [
      "Necessity",
      "Luck",
      "Lack",
      "Abundance"
    ]
  },
  {
    numb: 24,
    question: "Synonym of “YOB” is__________?",
    answer: "Aggressive",
    options: [
      "Annoyed",
      "Intelligent",
      "Humble",
      "Aggressive"
    ]
  },
  {
    numb: 25,
    question: "Synonym of “Gauche” is ________?",
    answer: "Awkward",
    options: [
      "Awkward",
      "Elegant",
      "Sophisticated",
      "Decent"
    ]
  },
  {
    numb: 26,
    question: "What is the Synonym of the word “INDUBITABLE”?",
    answer: "Undeniable",
    options: [
      "Certain",
      "Undeniable",
      "Fraudulent",
      "Doubtful"
    ]
  },
  {
    numb: 27,
    question: "Synonym of “Yokel” is _______?",
    answer: "bumpkin",
    options: [
      "Crafty",
      "Canny",
      "bumpkin",
      "Crave"
    ]
  },
  {
    numb: 28,
    question: "Synonym of “Obsolescent” is _____________?",
    answer: "Fustiness",
    options: [
      "Useless",
      "Glittering",
      "Fustiness",
      "Modernity"
    ]
  },
  {
    numb: 29,
    question: "Synonym of “ALERT” is _____________?",
    answer: "Watchful",
    options: [
      "Intelligent",
      "Energetic",
      "Observant",
      "Watchful"
    ]
  },
  {
    numb: 30,
    question: 'Synonym of "PRECARIOUS" is _____________?',
    answer: "Perilous",
    options: [
      "Safe",
      "Brittle",
      "Perilous",
      "none of these"
    ]
  },
];
