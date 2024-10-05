// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "___________ was the only Ummul Momineen who was not buried in Jannatul Baqi.",
    answer: "Hazrat Ayesha (R.A)",
    options: [
      "Hazrat Maria Qibtiya (RA)",
      "Hazrat Safia (RA)",
      "Hazrat Ayesha (R.A)",
      "Hazrat Khadija (RA)"
    ]
  },
  {
    numb: 2,
    question: "Hazrat Khadija (RA) was the ________ person to convert to Islam.",
    answer: "First",
    options: [
      "Third",
      "Second",
      "First",
      "Fourth"
    ]
  },
  {
    numb: 3,
    question: "Hazrat Khadija (RA) died in ?",
    answer: "619 A.D",
    options: [
      "620 A.D",
      "619 A.D",
      "618 A.D",
      "621 A.D"
    ]
  },
  {
    numb: 4,
    question: "Where is the grave of Hazrat Shoaib (A.S)?",
    answer: "Jordan",
    options: [
      "Saudi Arabia",
      "Lebanon",
      "Syria",
      "Jordan"
    ]
  },
  {
    numb: 5,
    question: "In how many days Allah created the heavens and the earth?",
    answer: "six",
    options: [
      "six",
      "five",
      "four",
      "seven"
    ]
  },
  {
    numb: 6,
    question: "The Ghazwa _____ was fought against Bani Salba and Bani Muharba.",
    answer: "Ghatfan",
    options: [
      "Mota",
      "Ohad",
      "Badr",
      "Ghatfan"
    ]
  },
  {
    numb: 7,
    question: "Hazrat Isa (A.S) met with Holy Prophet (SAW) on the ________ heaven?",
    answer: "2nd",
    options: [
      "3rd",
      "2nd",
      "1st",
      "4th"
    ]
  },
  {
    numb: 8,
    question: "Ohad is ______ miles from Madina?",
    answer: "3",
    options: [
      "5",
      "4",
      "3",
      "6"
    ]
  },
  {
    numb: 9,
    question: "What is name of 23rd Para of Holy Quran?",
    answer: "Wa Mali",
    options: [
      "Elahe Yuruddo",
      "Faman Azlam",
      "Wa Mali",
      "Ha’a Meem"
    ]
  },
  {
    numb: 10,
    question: "Which caliph formed a parliament namely Majlis e Aam?",
    answer: "Hazrat Umar",
    options: [
      "Hazrat Usman",
      "Hazrat Umar",
      "Hazrat Abu Bakar",
      "Hazrat Ali"
    ]
  },
  {
    numb: 11,
    question: "To sit straight in Salat is called________?",
    answer: "Qaada",
    options: [
      "Qayaam",
      "Jalsa",
      "Qauma",
      "Qaada"
    ]
  },
  {
    numb: 12,
    question: "In which Hijri Ghazwa e khyber was fought?",
    answer: "7 Hijri",
    options: [
      "7 Hijri",
      "6 Hijri",
      "5 Hijri",
      "8 Hijri"
    ]
  },
  {
    numb: 13,
    question: "What is the meaning of Khums (خمس)?",
    answer: "One fifth",
    options: [
      "One fourth",
      "One fifth",
      "One sixth",
      "One seventh"
    ]
  },
  {
    numb: 14,
    question: "What is the Original Name of Muʿtaṣim bi’llāh?",
    answer: "Abū Isḥāq Muḥammad ibn Hārūn al-Rashīd",
    options: [
      "Abu Sufyan ibn Daud",
      "Abū Isḥāq Muḥammad ibn Hārūn al-Rashīd",
      "Abu Ayub ibn Rashid",
      "Abu Ansar ibn Usman"
    ]
  },
  {
    numb: 15,
    question: "Who was the first Muslim Caliph of Spain?",
    answer: "Abd Ar Rehman Ad-Dakhil",
    options: [
      "Abd L Malik",
      "Abd Al Jabar",
      "Abd Ar Rehman Ad-Dakhil",
      "Marwan 11"
    ]
  },
  {
    numb: 16,
    question: "How many years did Hazrat Muhammad (saw) preach Islam during his life time?",
    answer: "23",
    options: [
      "23",
      "40",
      "52",
      "13"
    ]
  },
  {
    numb: 17,
    question: "Afzal ul Bashr” is the title of __________ ?",
    answer: "Hazrat Abu Bakr RA",
    options: [
      "Hazrat Usman RA",
      "Hazrat Umar RA",
      "Hazrat Abu Bakr RA",
      "Hazrat Ali RA"
    ]
  },
  {
    numb: 18,
    question: "Holy Prophet (SAWS) laboured in the construction of which mosque?",
    answer: "Masjid-e-Quba",
    options: [
      "Masjid-e-Quba",
      "Masjid-e-Haram",
      "Masjid-e-Nabvi",
      "Masjid-e-Qiblatein"
    ]
  },
  {
    numb: 19,
    question: "The study of Religions is called:___________?",
    answer: "Theology",
    options: [
      "Gerontology",
      "Theology",
      "Seismology",
      "Etymology"
    ]
  },
  {
    numb: 20,
    question: "Who was the commanders of the Infidels in the Battle of Uhud?",
    answer: "Abu Sufyan",
    options: [
      "Abu Sufyan",
      "Abu Jahal",
      "Shaiba",
      "Khalid bin Walid"
    ]
  },
  {
    numb: 21,
    question: "The literal meaning of the word Quran is________?",
    answer: "Frequently recited",
    options: [
      "Guidance",
      "Perfect",
      "Frequently recited",
      "None of these"
    ]
  },
  {
    numb: 22,
    question: "Who wrote the book “Kitab al Kharaj”?",
    answer: "Abu Yusuf",
    options: [
      "Abu Yusuf",
      "Imam Shafi",
      "Imam Abu Hanifa",
      "Muhammad Al Shaybani"
    ]
  },
  {
    numb: 23,
    question: "After the Battle of Yermuk, which was won by the Muslims Khalid bin Waleed was removed by the Caliph Umar (RA) from his supreme command. The new Supreme Commander was:",
    answer: "Abu Ubaydah (RA)",
    options: [
      "Saad bin Abi Waqas (RA)",
      "Abu Ubaydah (RA)",
      "Amr bin Al Aas (RA)",
      "Hazrat Bilal (RA)"
    ]
  },
  {
    numb: 24,
    question: "In which Surah of Quran mentioned that the number of months are Twelve?",
    answer: "Al-Taoba",
    options: [
      "Al-Taoba",
      "Al-Bakra",
      "Al-Imran",
      "Al-Anfal"
    ]
  },
  {
    numb: 25,
    question: "How many Takbeers are in Namaz-e-Janaza?",
    answer: "Four",
    options: [
      "Two",
      "Four",
      "Six",
      "One"
    ]
  },
  {
    numb: 26,
    question: "Ahsan ul Qasas is the life history of __________?",
    answer: "Hazrat Yousuf (A.S)",
    options: [
      "Hazrat Mussa (A.S)",
      "Hazrat Yousuf (A.S)",
      "Hazrat Muhammad (صلى الله عليه وآله وسلم)",
      "Hazrat Essa (A.S)"
    ]
  },
  {
    numb: 27,
    question: "Which is old name of Islam?",
    answer: "Deen-e-Hanif",
    options: [
      "Deen-e-Makkah",
      "Deen-e-Hanif",
      "Deen-e-Mina",
      "Deen-e-Madina"
    ]
  },
  {
    numb: 28,
    question: "Zam zam means_______?",
    answer: "to stop",
    options: [
      "to burst",
      "continue",
      "to stop",
      "to flow"
    ]
  },
  {
    numb: 29,
    question: "Hazrat Khalid Bin Waleed (RA) embraced Islam in which Hijri?",
    answer: "8th A.H",
    options: [
      "8th A.H",
      "7th A.H",
      "6th A.H",
      "9th A.H"
    ]
  },
  {
    numb: 30,
    question: "Which surahs are called Mauzatain?",
    answer: "Last two surahs",
    options: [
      "Last four surahs",
      "First two surahs",
      "Last two surahs",
      "None of these"
    ]
  }
];
