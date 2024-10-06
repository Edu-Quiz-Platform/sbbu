// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Abu Ubaidah bin Jarrah was the conqueror of__________?",
    answer: "Yarmuk",
    options: [
      "Yarmuk",
      "Iran",
      "Egypt",
      "N.O.T"
    ]
  },
  {
    numb: 2,
    question: "Baytal-Hikmat was a________?",
    answer: "Translation bureau",
    options: [
      "Medical University",
      "Observatory",
      "Translation bureau",
      "N.O.T"
    ]
  },
  {
    numb: 3,
    question: "During Which prayer, the change of Qibla happened ?",
    answer: "zuhr",
    options: [
      "Fajar",
      "zuhr",
      "Asar",
      "Maghrib"
    ]
  },
  {
    numb: 4,
    question: "Book named “The Voice of Human Justice” is biography of_________?",
    answer: "Hazrat Ali (R.A)",
    options: [
      "Hazrat Ali (R.A)",
      "Hazrat Abu Bakr (R.A)",
      "Hazrat Usman (R.A)",
      "Hazrat Umer (R.A)"
    ]
  },
  {
    numb: 5,
    question: "Hazrat Abu Bakr (R.A) belonged to the tribe of__________?",
    answer: "Banu Taym",
    options: [
      "Banu Hashim",
      "Banu Asad",
      "Banu Sahm",
      "Banu Taym"
    ]
  },
  {
    numb: 6,
    question: "Who wrote the Treaty of Hudaibiya?",
    answer: "Hazrat Ali (R.A)",
    options: [
      "Hazrat Usman (R.A)",
      "Hazrat Ali (R.A)",
      "Hazrat Abu Ubaidah Bin Jarrah (R.A)",
      "N.O.T"
    ]
  },
  {
    numb: 7,
    question: "How many Umahaat ul Momineen were Hufaaz?",
    answer: "3",
    options: [
      "3",
      "4",
      "5",
      "6"
    ]
  },
  {
    numb: 8,
    question: "The Battle of Sallasil or the Battle of Chains was fought between ________ and the Muslims?",
    answer: "Persians",
    options: [
      "Jews",
      "Arabs",
      "Persians",
      "Romans"
    ]
  },
  {
    numb: 9,
    question: "Pious-Caliphate lasted for about: __________ Years?",
    answer: "Thirty Years",
    options: [
      "Five Years",
      "Eighteen Years",
      "Twenty Years",
      "Thirty Years"
    ]
    },
  {
    numb: 10,
    question: "How many Sajdas are in Salat-e-Janaza?",
    answer: "0",
    options: [
      "0",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 11,
    question: "________ was the brother of Hazrat Ali (R.A) who was taken as prisoner in the battle of Badr ?",
    answer: "Aqeel",
    options: [
      "AQBA BIN NAFA",
      "Aqeel",
      "BIN JASH",
      "N.O.T"
    ]
  },
  {
    numb: 12,
    question: "What is meaning of Tehlil?",
    answer: "The recitation of Kalima",
    options: [
      "The recitation of Tauheed",
      "The recitation of Quran Majeed",
      "The recitation of Kalima",
      "A O.T"
    ]
  },
  {
    numb: 13,
    question: "Abdur Rehman al nasir assumed the title of Ameer ul Mominin in _______ ?",
    answer: "317",
    options: [
      "315",
      "317",
      "330",
      "N.O.T"
    ]
  },
  {
    numb: 14,
    question: "Who discovered the “Zam Zam Well”?",
    answer: "Abdul Muttalib; Prophet’s grandfather",
    options: [
      "Abdul Muttalib; Prophet’s grandfather",
      "Aminah; Prophet’s mother",
      "Abdullah; Prophet’s father",
      "Prophet Muhammad (PBUH)"
    ]
  },
  {
    numb: 15,
    question: "Hazrat Umar (R.A) embraced Islam, influenced by which Surah Of Holy Quran?",
    answer: "Surah Taha",
    options: [
      "Surah Fateh",
      "Surah Taha",
      "Surah Yaseen",
      "Surah Almaedah"
    ]
  },
  {
    numb: 16,
    question: "Imam Shafi was Born at Gaza and died at ____________?",
    answer: "Al Fustat, Egypt",
    options: [
      "Jerusalem",
      "Madina",
      "Makkah",
      "Al Fustat, Egypt"
    ]
  },
  {
    numb: 17,
    question: "Who was the leader of infidels during the Ghazwa-e-Uhud?",
    answer: "Abu Sufyan",
    options: [
      "Abu Lahab",
      "Abu Sufyan",
      "Abu Jehl",
      "N.O.T"
    ]
  },
  {
    numb: 18,
    question: '"Naqeeb-e-Islam" is the title of __________ ?',
    answer: "Hazrat Ali (R.A)",
    options: [
      "Hazrat Usman (R.A)",
      "Hazrat Ali (R.A)",
      "Hazrat Umar (R.A)",
      "Hazrat Abu Bakr (R.A)"
    ]
  },
  {
    numb: 19,
    question: '"Khateeb-e-Rasoolullah (SAW)" is the title of ___________?',
    answer: "Hazrat Thabit bin Qais (R.A)",
    options: [
      "Hazrat Thabit bin Qais (R.A)",
      "Hazrat Harith bin Suraqa (R.A)",
      "Hazrat Shoaib Roomi (R.A)",
      "N.O.T"
    ]
  },
  {
    numb: 20,
    question: "What was the language of Arab people?",
    answer: "Arabic",
    options: [
      "French",
      "English",
      "Persian",
      "Arabic"
    ]
  },
  {
    numb: 21,
    question: "Name the First Jannati Shaheed who neither offered any prayer nor kept any fast?",
    answer: "Hazrt Aseeram bani Abdul Ashal (R.A)",
    options: [
      "Hazrt Swaid bin Samit (R.A)",
      "Hazrt Aseeram bani Abdul Ashal (R.A)",
      "Hazrt Saad bin Maaz (R.A)",
      "Hazrt Harram bin Malhan (R.A)"
    ]
  },
  {
    numb: 22,
    question: "Kitab-ul-Shamayel was written by __________?",
    answer: "Tirmizi",
    options: [
      "Imam Muslim",
      "Imam Malik",
      "Tirmizi",
      "Imam Yousaf"
    ]
  },
  {
    numb: 23,
    question: "The permission for Tayammum was granted in _________?",
    answer: "4 A.H",
    options: [
      "1.A.H",
      "2 A.H",
      "3 A.H",
      "4 A.H"
    ]
  },
  {
    numb: 24,
    question: "Real name of Hazrat Abu Huraira (R.A) was _________?",
    answer: "Abdul Rehman Ibne Sakhr Ad-Dausi",
    options: [
      "Abdul Rehman Ibne Adi",
      "Abdul Rehman Ibne Talib",
      "Abdul Rehman Ibne Sakhr Ad-Dausi",
      "N.O.T"
    ]
  },
  {
    numb: 25,
    question: "The book of Hadith, Kitaab-ul-Aathaar, was compiled by _______ ?",
    answer: "Imam Muhammad al-Shaybani (R.A)",
    options: [
      "Imam Ahmad bin Hambal (R.A)",
      "Imam Shafi (R.A)",
      "Imam Malik (R.A)",
      "Imam Muhammad al-Shaybani (R.A)"
    ]
  },
  {
    numb: 26,
    question: "Nemaz e taraweeh is?",
    answer: "sunnat",
    options: [
      "farz",
      "sunnat",
      "wajib",
      "N.O.T"
    ]
  },
  {
    numb: 27,
    question: "Which of the following was the Teacher of Hazrat Musa (AS) ?",
    answer: "Hazrat Khizar (A.S)",
    options: [
      "Hazrat Khizar (A.S)",
      "Hazrat Ibrahim (A.S)",
      "Hazrat Ishaq (A.S)",
      "Hazrat Yousaf (A.S)"
    ]
  },
  {
    numb: 28,
    question: "The Gap between first and second Wahi was __________ months?",
    answer: "2 Years 6 months",
    options: [
      "2 Years 1 month",
      "2 Years 3 months",
      "2 Years 6 months",
      "N.O.T"
    ]
  },
  {
    numb: 29,
    question: "The first Msjid (Mosque) that was built by the Holy Prophet (SAW) was _________?",
    answer: "Masjid-e-Quba",
    options: [
      "Masjid-e-Nabavi",
      "Masjid-ul-Haram",
      "Masjid-e-Aqsa",
      "Masjid-e-Quba"
    ]
  },
  {
    numb: 30,
    question: "The reward of which prayer is equal to the reward of Hajj or Umrah ?",
    answer: "Namaz-i-Ishraq",
    options: [
      "Namaz-e-Janaza",
      "Namaz-e-Khasoof",
      "Namaz-i-Ishraq",
      "Namaz-e-Istasqa"
    ]
  },
];
