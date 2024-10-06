// Array of questions with options and correct answers
const questions = [
  {
    numb: 81,
    question: "How many Surahs are in 30th Chapter (Parah) of Quran?",
    answer: "39",
    options: [
      "39",
      "38",
      "37",
      "40"
    ]
  },
  {
    numb: 82,
    question: "Name the battle which came to an end without result?",
    answer: "Tabook",
    options: [
      "Ohad",
      "Tabook",
      "Hunain",
      "Mota"
    ]
  },
  {
    numb: 83,
    question: "It is said that Hazrat Ibrahim (A.S) was from the city of ‘Ur’. It is located in________?",
    answer: "Mesopotamia",
    options: [
      "Mesopotamia",
      "Jerusalem",
      "Hijaz",
      "Yemen"
    ]
  },
  {
    numb: 84,
    question: "The major part of Quran is revealed at ____________________?",
    answer: "Night time",
    options: [
      "Early evening",
      "Noon",
      "Early morning",
      "Night time"
    ]
  },
  {
    numb: 85,
    question: "Who was the first commander of islamic army?",
    answer: "Hazrat Hamza (R.A)",
    options: [
      "Hazrat Khalid-bin-walid (R.A)",
      "Hazrat Hamza (R.A)",
      "Hazrat Umer (R.A)",
      "None of them"
    ]
  },
  {
    numb: 86,
    question: "Aitekaaf (Seclusion) during the month of Ramzan is_____________?",
    answer: "Sunnah",
    options: [
      "Sunnah",
      "Mustahab",
      "Wajib",
      "Nafl"
    ]
  },
  {
    numb: 87,
    question: "What do you understand by Tahleeq________?",
    answer: "Cutting of hair",
    options: [
      "Kalmaas in loud voice during Tawaf",
      "First circle of Tawaf",
      "Cutting of hair",
      "Kissing of stone"
    ]
  },
  {
    numb: 88,
    question: "How many types of Ijma are there____________?",
    answer: "Three",
    options: [
      "Two",
      "four",
      "Three",
      "five"
    ]
  },
  {
    numb: 89,
    question: "In how many years Makki Surah were revealed?",
    answer: "13",
    options: [
      "15",
      "14",
      "13",
      "16"
    ]
  },
  {
    numb: 90,
    question: "Surah Baqarah contains ________verses?",
    answer: "286",
    options: [
      "288",
      "286",
      "284",
      "290"
    ]
  },
  {
    numb: 91,
    question: "What is the other name of Surah Fatiha?",
    answer: "Both A & B",
    options: [
      "Both A & B",
      "Umm al-Kitab",
      "Umm al-Quran",
      "None of these"
    ]
  },
  {
    numb: 92,
    question: "____________ is called Sayeed-ul-Ayam?",
    answer: "Friday",
    options: [
      "Friday",
      "Eid day",
      "Judgement day",
      "Arafat day"
    ]
  },
  {
    numb: 93,
    question: "Our Holy Prophet Muhammad (SAW) had ___________ brothers & sisters.",
    answer: "N.O.T",
    options: [
      "2 brothers & 1 sister",
      "1 brother & 2 sisters",
      "1 brother & 1 sister",
      "N.O.T"
    ]
  },
  {
    numb: 94,
    question: "There are _________ farz in wuzoo (وضو).",
    answer: "4",
    options: [
      "5",
      "4",
      "3",
      "6"
    ]
  },
  {
    numb: 95,
    question: "Jannat al-Baqi is located in ________.",
    answer: "Madina",
    options: [
      "Baghdad",
      "Madina",
      "Makkah",
      "Palestine"
    ]
  },
  {
    numb: 96,
    question: "The first daughter of our Holy prophet (SAW) was ______________.",
    answer: "Hazrat Zainab (R.A)",
    options: [
      "Hazrat Umme Kulsom (R.A)",
      "Hazrat Fatima (R.A)",
      "Hazrat Ruqayah (R.A)",
      "Hazrat Zainab (R.A)"
    ]
  },
  {
    numb: 97,
    question: "Which is fourth month of Islamic Calendar?",
    answer: "Rabi-us-Sani",
    options: [
      "Rabi-ul-Awwal",
      "Rajab",
      "Rabi-us-Sani",
      "Jamadi-us-Sani"
    ]
  },
  {
    numb: 98,
    question: "Which is the best month mentioned in Holy Qur’an?",
    answer: "Ramadan",
    options: [
      "Ramadan",
      "Sha’abān",
      "Rajab",
      "Hajj"
    ]
  },
  {
    numb: 99,
    question: "______ is called Shield against sins.",
    answer: "Fasting",
    options: [
      "Fasting",
      "Zakat",
      "Salat",
      "Hajj"
    ]
  },
  {
    numb: 100,
    question: "______ is the most important night in the month of Ramzan.",
    answer: "Shab-e-Qadar",
    options: [
      "Shab-e-Miraj",
      "Shab-e-Bara’at",
      "Shab-e-Qadar",
      "None of these"
    ]
  },
  {
    numb: 101,
    question: "Who was the first Caliph?",
    answer: "Hazrat Abu Bakar (R.A.)",
    options: [
      "Hazrat Usman (R.A.)",
      "Hazrat Ali (R.A.)",
      "Hazrat Umar (R.A.)",
      "Hazrat Abu Bakar (R.A.)"
    ]
  },
  {
    numb: 102,
    question: "Who was the second son of Hazrat Muhammad (SAW)?",
    answer: "Hazrat Abdullah",
    options: [
      "Hazrat Ibrahim",
      "Hazrat Al-Qasim",
      "Hazrat Abdullah",
      "Hazrat Abdurrehman"
    ]
  },
  {
    numb: 103,
    question: "Hazrat Ibrahim son of Hazrat Muhammad (SAW) is burried in _______________.",
    answer: "Jannat ul Baki",
    options: [
      "Jannat al-Mu’alla",
      "Jannat ul Baki",
      "Maqbara Shabeka",
      "Al adl Cemetery"
    ]
  },
  {
    numb: 104,
    question: "Seventh wife of Hazrat Muhammad (SAW) was _______.",
    answer: "Hazrat Zainab binte Hajash (R.A)",
    options: [
      "Hazrat Zainab binte Khazeema(R.A)",
      "Hazrat Zainab binte Hajash (R.A)",
      "Hazrat Salma (R.A)",
      "Hazrat Hafsa (R.A)"
    ]
  },
  {
    numb: 105,
    question: "Which Sura is the name of one metal?",
    answer: "Hadeed",
    options: [
      "Ahzab",
      "Hadeed",
      "Ra’ad",
      "HUD"
    ]
  },
  {
    numb: 106,
    question: "Kalima Tayyaba, salat, Zakat, Hajj and soam are the fundamental______of Islam?",
    answer: "Pillars",
    options: [
      "Pillars",
      "Faiths",
      "Beliefs",
      "Corners"
    ]
  },
  {
    numb: 107,
    question: "What is name of 15th Para of Holy Qur’an?",
    answer: "Subhanallazi",
    options: [
      "Aqtarabo",
      "Qal Alam",
      "Subhanallazi",
      "Qadd Aflaha"
    ]
  },
  {
    numb: 108,
    question: "Madani Surahs were revealed in how many years?",
    answer: "10",
    options: [
      "8",
      "9",
      "10",
      "11"
    ]
  },
  {
    numb: 109,
    question: "What was the age of Hazrat Aisha (R.A) when Hazrat Muhammad (SAW) died?",
    answer: "18 years",
    options: [
      "17 years",
      "18 years",
      "19 years",
      "20 years"
    ]
  },
  {
    numb: 110,
    question: "Which Surah in the Holy Qur’an is named after a woman?",
    answer: "Surah Al-Mumtahina",
    options: [
      "Surah Al-Baqarah",
      "Surah Al-Mumtahina",
      "Surah Al-Mujadila",
      "Surah Al-Anfal"
    ]
  }
];