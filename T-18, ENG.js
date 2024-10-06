// Array of questions with options and correct answers
const questions = [
  {
    numb: 21,
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
    numb: 22,
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
    numb: 23,
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
    numb: 24,
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
    numb: 25,
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
    numb: 26,
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
    numb: 27,
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
    numb: 28,
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
    numb: 29,
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
    numb: 30,
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
    numb: 31,
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
    numb: 32,
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
    numb: 33,
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
    numb: 34,
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
    numb: 35,
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
    numb: 36,
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
    numb: 37,
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
    numb: 38,
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
    numb: 39,
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
    numb: 40,
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
    numb: 41,
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
    numb: 42,
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
    numb: 43,
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
    numb: 44,
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
    numb: 45,
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
    numb: 46,
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
    numb: 47,
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
    numb: 48,
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
    numb: 49,
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
    numb: 50,
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
