// Array of questions with options and correct answers
const questions = [
  {
    "numb": 1,
    "question": "Hazrat Khadija (RA) was _______ years older than Hazrat Muhammad (SAW).",
    "answer": "13",
    "options": [
      "13",
      "9",
      "5",
      "15"
    ]
  },
  {
    "numb": 2,
    "question": "Hazrat Khadija (RA) was the ________ wife of Hazrat Muhammad (SAW).",
    "answer": "First",
    "options": [
      "Third",
      "Second",
      "First",
      "Fourth"
    ]
  },
  {
    "numb": 3,
    "question": "Where is the grave of Hazrat Ayuob (AS)?",
    "answer": "Amman",
    "options": [
      "Amman",
      "Lebanon",
      "Syria",
      "Jordan"
    ]
  },
  {
    "numb": 4,
    "question": "Where is the grave of Hazrat Yahya (A.S)?",
    "answer": "Syria",
    "options": [
      "Saudi Arabia",
      "Lebanon",
      "Syria",
      "Jordan"
    ]
  },
  {
    "numb": 5,
    "question": "A Muslim female is coffined / wrapped in _______ dressed sheets.",
    "answer": "5",
    "options": [
      "6",
      "5",
      "3",
      "8"
    ]
  },
  {
    "numb": 6,
    "question": "The first revealed book was_____________?",
    "answer": "Taurat",
    "options": [
      "Taurat",
      "Zaboor",
      "Injeel",
      "Quran"
    ]
  },
  {
    "numb": 7,
    "question": "Hazrat Yaqub (A.S) met with Holy Prophet (SAW) on the ________ heaven?",
    "answer": "3rd",
    "options": [
      "3rd",
      "2nd",
      "1st",
      "4th"
    ]
  },
  {
    "numb": 8,
    "question": "Tahleel Literally means Recitation of__________?",
    "answer": "Kalimahs",
    "options": [
      "Namaz",
      "Kalimahs",
      "Quran",
      "Surah"
    ]
  },
  {
    "numb": 9,
    "question": "Who was the eldest daughter of Hazrat Muhammad (SAW)?",
    "answer": "Hazrat bibi Zainab (R.A)",
    "options": [
      "Hazrat bibi Fatima (R.A)",
      "Hazrat bibi Zainab (R.A)",
      "Hazrat bibi Umm Kulthum (R.A)",
      "Hazrat bibi Ruqayyah (R.A)"
    ]
  },
  {
    "numb": 10,
    "question": "What is name of 24th Para of Holy Qur’an?",
    "answer": "Wa Mali",
    "options": [
      "Elahe Yuruddo",
      "Faman Azlam",
      "Wa Mali",
      "Ha’a Meem"
    ]
  },
  {
    "numb": 11,
    "question": "Apostasy movement took place in the khilafat of_________?",
    "answer": "Hazrat Abu Bakar (R.A)",
    "options": [
      "Hazrat Abu Bakar (R.A)",
      "Hazrat Ali (R.A)",
      "Hazrat Umar (R.A)",
      "Hazrat Usman (R.A)"
    ]
  },
  {
    "numb": 12,
    "question": "When did Hazrat Hamza embraced Islam?",
    "answer": "Seventh Nabvi",
    "options": [
      "Seventh Nabvi",
      "Sixth Nabvi",
      "Fifth Nabvi",
      "Eighth Nabvi"
    ]
  },
  {
    "numb": 13,
    "question": "Who is called Saqi-e-ZamZam?",
    "answer": "Hazrat Abbas (R.A)",
    "options": [
      "Hazrat Ali-ul-Murtaza (R.A)",
      "Hazrat Abbas (R.A)",
      "Hazrat Abu Bakar (R.A)",
      "Imam Hussain (R.A)"
    ]
  },
  {
    "numb": 14,
    "question": "On the suggestion of whom, Holy Prophet (P.B.U.H) released the Prisoners of Ghazwa-e-Badar?",
    "answer": "Hazrat Abu Bakar",
    "options": [
      "Hazrat Ali-ul-Murtaza",
      "Hazrat Umar Farooq",
      "Hazrat Abu Bakar",
      "Hazrat Ameer Hamza"
    ]
  },
  {
    "numb": 15,
    "question": "Who is a renowned biographer of Prophet Muhammad (PBUH)?",
    "answer": "Martin Lings",
    "options": [
      "Vincent Cronin",
      "Michael H Hart",
      "Martin Lings",
      "Maurice Bucaille"
    ]
  },
  {
    "numb": 16,
    "question": "Bird Hudhud (Woodpecker) is mentioned in Quran, Surah_________?",
    "answer": "Surah Namal",
    "options": [
      "Surah Qasas",
      "Surah Namal",
      "Surah Nahl",
      "Surah Saba"
    ]
  },
  {
    "numb": 17,
    "question": "Minimum Persons required for Namaz Ba-Jamaat?",
    "answer": "2",
    "options": [
      "4",
      "2",
      "1",
      "7"
    ]
  },
  {
    "numb": 18,
    "question": "Which Surah of Holy Quran revealed twice-in Makkah & Madinah?",
    "answer": "Surah Fatiha",
    "options": [
      "Surah Rahman",
      "Surah Baqara",
      "Surah Fateh",
      "Surah Fath"
    ]
  },
  {
    "numb": 19,
    "question": "Name the wife of Haroon ur Rasheed who was the mother of Al-Ameen and Al-Haroon.",
    "answer": "Zubaida",
    "options": [
      "Ammamah",
      "Farzana",
      "Zubaida",
      "Buran"
    ]
  },
  {
    "numb": 20,
    "question": "Who was made governor of North Yemen by Holy Prophet?",
    "answer": "Hazrat Abu Musa Ashri R.A",
    "options": [
      "Hazrat Amer Ibn Alas",
      "Hazrat Abu Musa Ashri R.A",
      "Maaz Bin Jabal",
      "None of these"
    ]
  },
  {
    "numb": 21,
    "question": "The most exemplary administration out of the rightly guided caliphs was that of__________?",
    "answer": "Hazrat Umar (R.A)",
    "options": [
      "Hazrat Usman (R.A)",
      "Hazrat Umar (R.A)",
      "Hazrat Ali (R.A)",
      "None of these"
    ]
  },
  {
    "numb": 22,
    "question": "When did Imam Abu Hanifa died?",
    "answer": "150 A.H",
    "options": [
      "140 A.H",
      "130 A.H",
      "120 A.H",
      "150 A.H"
    ]
  },
  {
    "numb": 23,
    "question": "Charter of Medina was drafted by Muhammad (pbuh) himself. In which Hijra Charter of Madina was drafted?",
    "answer": "3rd",
    "options": [
      "3rd",
      "2nd",
      "1st",
      "4th"
    ]
  },
  {
    "numb": 24,
    "question": "The Muslim death toll on both sides in the Battle of Camel was about:________?",
    "answer": "10,000",
    "options": [
      "10,000",
      "7,000",
      "5,000",
      "12,000"
    ]
  },
  {
    "numb": 25,
    "question": "In which Surah Hajj has been commanded?",
    "answer": "Surah Baqara",
    "options": [
      "Surah Rehman",
      "Surah Baqara",
      "Surah Fateh",
      "Surah Fath"
    ]
  },
  {
    "numb": 26,
    "question": "Ohad is in which direction from Madina?",
    "answer": "North",
    "options": [
      "Southwest",
      "Upward",
      "West",
      "North"
    ]
  },
  {
    "numb": 27,
    "question": "What is meaning of Qayas?",
    "answer": "Reasoning by analogy",
    "options": [
      "Reasoning in analogy",
      "Reasoning by analogy",
      "Reasoning on analogy",
      "Reasoning at analogy"
    ]
  },
  {
    "numb": 28,
    "question": "When did the Battle of Uhud take place?",
    "answer": "3rd Hijri",
    "options": [
      "1st Hijri",
      "2nd Hijri",
      "3rd Hijri",
      "4th Hijri"
    ]
  },
  {
    "numb": 29,
    "question": "Who was the first person to be buried in Jannat-ul-Baqi?",
    "answer": "Hazrat Uthman",
    "options": [
      "Hazrat Ali",
      "Hazrat Umar",
      "Hazrat Abu Bakar",
      "Hazrat Uthman"
    ]
  },
  {
    "numb": 30,
    "question": "What is the main aim of Quran-e-Hakeem?",
    "answer": "To guide mankind to the right path",
    "options": [
      "To guide mankind to the right path",
      "To govern",
      "To regulate",
      "None of these"
    ]
  }
]
