// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Which is the most liked place by Allah Ta'ala?",
    answer: "Mosque",
    options: [
      "Bazar",
      "Shop",
      "Home",
      "Mosque"
    ]
  },
  {
    numb: 2,
    question: "Which is third month of Islamic Calendar?",
    answer: "Rabi-ul-Awwal",
    options: [
      "Rabi-ul-Awwal",
      "Rajab",
      "Jamadi-ul-Awwal",
      "Safar"
    ]
  },
  {
    numb: 3,
    question: "How many Surahs of the Holy Quran start with word ‘Inna‘ ?",
    answer: "Four",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ]
  },
  {
    numb: 4,
    question: "Fasting was made obligatory in ______.",
    answer: "10th Shaban, 2 A.H",
    options: [
      "7th Shaban, 2 A.H",
      "8th Shaban, 2 A.H",
      "9th Shaban, 2 A.H",
      "10th Shaban, 2 A.H"
    ]
  },
  {
    numb: 5,
    question: "What does Taraweeh means?",
    answer: "To Rest",
    options: [
      "To Rest",
      "To Stand",
      "To sit",
      "N.O.T"
    ]
  },
  {
    numb: 6,
    question: "How many fasts Hazrat Isa (A.S) Kept in desert and advised his followers to follow it?",
    answer: "40",
    options: [
      "10",
      "20",
      "30",
      "40"
    ]
  },
  {
    numb: 7,
    question: "Who was the first son of Hazrat Muhammad (ﷺ)?",
    answer: "Hazrat Al-Qasim",
    options: [
      "Hazrat Abdullah",
      "Hazrat Ibrahim",
      "Hazrat Al-Qasim",
      "Hazrat Abdurrehman"
    ]
  },
  {
    numb: 8,
    question: "Hazrat Qasim and Hazrat Abdullah sons of Hazrat Muhammad (ﷺ) are burried in _________.",
    answer: "Jannat al-Mu’alla",
    options: [
      "Jannat al-Mu’alla",
      "Jannat ul Baki",
      "Maqbara Shabeka",
      "N.O.T"
    ]
  },
  {
    numb: 9,
    question: "Sixth Wife of Hazrat Muhammad (ﷺ) was _______.",
    answer: "Hazrat Salmah (R.A)",
    options: [
      "Hazrat Zainab binte Khazeema(R.A)",
      "Hazrat Salmah (R.A)",
      "Hazrat Sauda (R.A)",
      "Hazrat Hafsa (R.A)"
    ]
    },
  {
    numb: 10,
    question: "Which Sura is the name of one Holy war?",
    answer: "Ahzab",
    options: [
      "Ahzab",
      "Fathi",
      "Room",
      "Nasr"
    ]
  },
  {
    numb: 11,
    question: "Hazrat Adam (A.S) name mentioned in the Holy Quran ____ times.",
    answer: "25",
    options: [
      "23",
      "25",
      "27",
      "29"
    ]
  },
  {
    numb: 12,
    question: "What is name of 14th Para of Holy Qur’an?",
    answer: "Rubama",
    options: [
      "Wa Ma Ubrioo",
      "Wa Mamin Da’abat",
      "Yatazeroon",
      "Rubama"
    ]
  },
  {
    numb: 13,
    question: "Which Sura is called ‘Aroos-ul-Qur’an (the Bride of the Qur’an)?",
    answer: "Rahman",
    options: [
      "Jinn",
      "Fatiha",
      "Rahman",
      "Yaseen"
    ]
  },
  {
    numb: 14,
    question: "Which was the favorite month of Hazrat Muhammad (ﷺ)?",
    answer: "Sha’ban",
    options: [
      "Sha’ban",
      "Rajab",
      "Ramadan",
      "Safar"
    ]
  },
  {
    numb: 15,
    question: "How many units (rakat) taraveh are offered in Ramadan?",
    answer: "20",
    options: [
      "8",
      "12",
      "16",
      "20"
    ]
  },
  {
    numb: 16,
    question: "______ Umm-ul-Momineen received salutation from Allah.",
    answer: "Hazrat Khadija (R.A)",
    options: [
      "Hazrat Maria Qibtiya (R.A)",
      "Hazrat Khadija (R.A)",
      "Hazrat Ayesha (R.A)",
      "Hazrat Safia (R.A)"
    ]
  },
  {
    numb: 17,
    question: "How many daughters Hazrat Khadija (R.A) had with Hazrat Muhammad (ﷺ)?",
    answer: "Four",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ]
  },
  {
    numb: 18,
    question: "Hazrat Khadija (R.A) is commonly regarded by Muslims as the ____________.",
    answer: "Mother of the Muslims",
    options: [
      "Mother of the Muslims",
      "Mother of all Females",
      "Mother of the Universe",
      "N.O.T"
    ]
  },
  {
    numb: 19,
    question: "Where is the grave of Hazrat Haroon (A.S) ?",
    answer: "Jordan",
    options: [
      "Saudi Arabia",
      "Lebanon",
      "Syria",
      "Jordan"
    ]
  },
  {
    numb: 20,
    question: "Surah Tauba the only Surah Which does not start with Bismillah is in Which Parah?",
    answer: "10 & 11",
    options: [
      "8 & 9",
      "9 & 10",
      "10 & 11",
      "11 & 12"
    ]
  },
  {
    numb: 21,
    question: "Where is Hazrat Abdul Muttalib burried?",
    answer: "Makkah",
    options: [
      "Baghdad",
      "Makkah",
      "Madina",
      "Palestine"
    ]
  },
  {
    numb: 22,
    question: "Hazrat Adam (A.S) met with Holy Prophet (ﷺ) on the ________ heaven?",
    answer: "1st",
    options: [
      "1st",
      "2nd",
      "3rd",
      "4th"
    ]
  },
  {
    numb: 23,
    question: "Ohad is located near __________?",
    answer: "Madina",
    options: [
      "Madina",
      "Syria",
      "Makkah",
      "Baghdad"
    ]
  },
  {
    numb: 24,
    question: "Hazrat Umer was Caliph for__________Years?",
    answer: "1",
    options: [
      "2 years",
      "4 years",
      "10 years",
      "N.O.T"
    ]
  },
  {
    numb: 25,
    question: "Who Urged Hazrat Adam (A.S) to taste Prohibited Tree ?",
    answer: "Iblees",
    options: [
      "Hazrat Hawwa (A.S)",
      "Hazrat Jibraeel (A.S)",
      "Iblees",
      "A.O.T"
    ]
  },
  {
    numb: 26,
    question: "The Short period between two Sajda’s is called________?",
    answer: "Jalsa",
    options: [
      "Qayaam",
      "Qauma",
      "Qaada",
      "Jalsa"
    ]
  },
  {
    numb: 27,
    question: "Name the Prophet who was the first man to write?",
    answer: "Hazrat Idrees (A.S)",
    options: [
      "Hazrat Shoaib (A.S)",
      "Hazrat Idrees (A.S)",
      "Hazrat Dawood (A.S)",
      "Hazrat Ibrahim (A.S)"
    ]
  },
  {
    numb: 28,
    question: "Boat of Hazrat Noah (A.S) is called ________?",
    answer: "Curve",
    options: [
      "Arrow",
      "Arc",
      "Arrec",
      "Curve"
    ]
  },
  {
    numb: 29,
    question: "The Mosque of Prophet (ﷺ) was damaged due to fire in the reign of__________?",
    answer: "Motasim Billah",
    options: [
      "Motasim Billah",
      "Aurangzeb",
      "Shahjahan",
      "Razia Sultana"
    ]
  },
  {
    numb: 30,
    question: "The Muslim invaded Spain in__________?",
    answer: "711 A.D",
    options: [
      "701 A.D",
      "711 A.D",
      "717 A.D",
      "727 A.D"
    ]
  },
];
















