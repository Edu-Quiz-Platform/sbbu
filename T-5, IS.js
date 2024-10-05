// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Hazrat Abu Bakar was the merchant of ? ",
    answer: "Cloth",
    options: [
      "Coal",
      "Cloth",
      "Steel",
      "Wheat"
    ]
  },
  {
    numb: 2,
    question: "Ghani was the title of Hazrat _______ (RA). ",
    answer: "Usman",
    options: [
      "Usman",
      "Umar",
      "Abu Bakar ",
      "Ali"
    ]
  },
  {
    numb: 3,
    question: "Hazrat _______ proposed the compilation of Holy Quran. ",
    answer: "1",
    options: [
      "Usman",
      "Umar",
      "Abu Bakar ",
      "Ali"
    ]
  },
  {
    numb: 4,
    question: "Ablution made obligatory in _________ A.H.",
    answer: "5th",
    options: [
      "4th",
      "5th",
      "6th",
      "7th"
    ]
  },
  {
    numb: 5,
    question: "Prophet Hazrat  ________ has the title Najeeb Ullah",
    answer: "Dawood A.S",
    options: [
      "Musa A.S ",
      "Noah A.S ",
      "Ibrahim A.S ",
      "Dawood A.S"
    ]
  },
  {
    numb: 6,
    question: "The pre-requisite to be a Muslim is?",
    answer: "Both",
    options: [
      "Just recitation of Kalimah",
      "Just understanding Kalimah",
      "Both",
      "N.O.T"
    ]
  },
  {
    numb: 7,
    question: "After _______ month at Madina the change of Qibla occurred.",
    answer: "18",
    options: [
      "15",
      "16",
      "17",
      "18"
    ]
  },
  {
    numb: 8,
    question: "The part of prayer the Holy Prophet did is called ________? ",
    answer: "Sunnat",
    options: [
      "Nafl",
      "Wajib",
      "Farz",
      "Sunnat"
    ]
  },
  {
    numb: 9,
    question: "The Funeral prayer Namaz-e-Janaza is ______?",
    answer: "Farz-e-Kaffaya ",
    options: [
      "Farz-e-Kaffaya ",
      "Fera-e-Ain ",
      "Sunnat",
      "Wajib"
    ]
    },
  {
    numb: 10,
    question: "What is falqaram for goats? ",
    answer: "40 goats ",
    options: [
      "30 goats ",
      "40 goats ",
      "50 goats ",
      "60 goats "
    ]
  },
  {
    numb: 11,
    question: "How many Hajj were performed by Hazrat Muhammad (ﷺ)? ",
    answer: "One",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ]
  },
  {
    numb: 12,
    question: "How much camels were sacrificed on the occasion of Hajj by Hazrat Muhammad (ﷺ)?",
    answer: "63 camels ",
    options: [
      "60 camels ",
      "63 camels ",
      "65 camels",
      "67 camels"
    ]
  },
  {
    numb: 13,
    question: "According to Hazrat Abdullah bin Abbas the last Wahi was decended on Hazrat Muhammad (ﷺ), how many days before death?",
    answer: "7 or 9 days",
    options: [
      "2 days ",
      "3 days",
      "7 or 9 days ",
      "10 days "
    ]
  },
  {
    numb: 14,
    question: "After Hazrat Umar, to whom lady, script of Musaef Abi Bakr was handed over? This lady is amongst the Umhat-ul-Momenine (R.A).",
    answer: "Hazrat Hifsa (R.A)",
    options: [
      "Hazrat Hifsa (R.A)",
      "Hazrat Memona (R.A)",
      "Hazrat Aysha Siddiqa (R.A)",
      "Hazrat Safia (R.A) "
    ]
  },
  {
    numb: 15,
    question: "How many Madni Surahs of the Holy Quran are there? ",
    answer: "28",
    options: [
      "26",
      "28",
      "29",
      "30"
    ]
  },
  {
    numb: 16,
    question: "The color of the first Islamic flag was ______ ?",
    answer: "White",
    options: [
      "White",
      "Black",
      "White and Black ",
      "Green"
    ]
  },
  {
    numb: 17,
    question: "Hazrat Muhammad (ﷺ) went to Syria with Abu-Talib at the age of_______? ",
    answer: "12 years ",
    options: [
      "12 years ",
      "15 years ",
      "24 years ",
      "35 years "
    ]
  },
  {
    numb: 18,
    question: "Who did accompany the Holy Prophet (ﷺ) in the migration to Madina?",
    answer: "Hazrat Abu Bakr (RA)",
    options: [
      "Hazrat Usman (RA)",
      "Hazrat Ali (R.A)",
      "Hazrat Abu Bakr (RA)",
      "Hazrat Umar (RA) "
    ]
  },
  {
    numb: 19,
    question: "After Hijrat to madina, what first important thing Holy prophet (ﷺ) did?",
    answer: "Built a mosque for prayers",
    options: [
      "Built his house",
      "Created baitulmal",
      "Raised an Army",
      "Built a mosque for prayers"
    ]
  },
  {
    numb: 20,
    question: "What was written on the Holy Prophet (ﷺ) seal?",
    answer: "Allah Rasool Muhammad ",
    options: [
      "Muhammad Allah Rasool",
      "Allah Rasool Muhammad ",
      "Muhammad Rasool-Ullah",
      "Allah Muhammad Rasool"
    ]
  },
  {
    numb: 21,
    question: "What is the first belief in Iman-e-Mufassal? ",
    answer: "No deity except Allah",
    options: [
      "The hereafter life",
      "No deity except Allah ",
      "Prophethood",
      "Angels"
    ]
  },
  {
    numb: 22,
    question: "Name the Angel who takes out souls of life bearing creatures?",
    answer: "Hazrat Izra’eel (AS)",
    options: [
      "Hazrat Israfeel (AS)",
      "Hazrat Jibra’eel (AS)",
      "Hazrat Izra’eel (AS)",
      "N.O.T"
    ]
  },
  {
    numb: 23,
    question: "Had –e- Qazaf (false Accusation) is _______? ",
    answer: "80 Lashes ",
    options: [
      "50 Lashes ",
      "70 Lashes ",
      "80 Lashes ",
      "90 Lashes "
    ]
  },
  {
    numb: 24,
    question: "Arafat gathering is held on ________? ",
    answer: "9 Zil hajj ",
    options: [
      "8 Zil hajj ",
      "9 Zil hajj ",
      "10 Zil hajj ",
      "12 Zil hajj "
    ]
  },
  {
    numb: 25,
    question: "Which of the following the Quran considers as an unpardonable sin? ",
    answer: "Shirk",
    options: [
      "Shirk",
      "Hypocrisy",
      "Jealousy",
      "Lie"
    ]
  },
  {
    numb: 26,
    question: "______ first translated the Holy Quran in to Sindhi? ",
    answer: "Akhund Azizullah Muttalawi",
    options: [
      "Bulley Shah ",
      "Akhund Azizullah Muttalawi",
      "Abdullah Shah Ghazi",
      "Bahauddin Zakkaria "
    ]
  },
  {
    numb: 27,
    question: "Hazrat _______ conquered the fort of Qamus.",
    answer: "Ali",
    options: [
      "Umar",
      "Abu Bakar ",
      "Usman",
      "Ali"
    ]
  },
  {
    numb: 28,
    question: "Original name of Abu Jehl was _______ bin Hisham. ",
    answer: "Omar",
    options: [
      "Saleh",
      "Omar",
      "Abha",
      "N.O.T"
    ]
  },
  {
    numb: 29,
    question: "Hurrirah means a ? ",
    answer: "Cat",
    options: [
      "Camel",
      "Ant",
      "Cat",
      "Goat"
    ]
  },
  {
    numb: 30,
    question: "Bilal called first aazan of ______ prayer.",
    answer: "Fajar",
    options: [
      "Fajar",
      "Zuhar",
      "Asar",
      "Maghrib"
    ]
  },
];
