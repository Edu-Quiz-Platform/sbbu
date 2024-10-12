// Array of questions with options and correct answers
const questions = [
  {
  numb: 1,
  question: "Hazrat Abu Zar Ghafari (R.A) belongs to Banu Ghifar, The Kinanah Tribe, and he died in ____ A.D.",
  answer: "652 A.D",
  options: [
    "653 A.D",
    "652 A.D",
    "651 A.D",
    "634 A.D"
  ]
},
{
  numb: 2,
  question: "How many sons did Hazrat Adam (A.S) have?",
  answer: "3",
  options: [
    "3",
    "2",
    "1",
    "4"
  ]
},
{
  numb: 3,
  question: "Mahram-e-Raza-e-Nabuwat is the title of ____?",
  answer: "Hazrat Huzefa bin - al-Yaman (R.A)",
  options: [
    "Hazrat Awais Qarni (R.A)",
    "Hazrat Huzefa bin - al-Yaman (R.A)",
    "Hazrat Abu Talha Ansari (R.A)",
    "None of these"
  ]
},
{
  numb: 4,
  question: "What was the biggest religion of Arab people before Islam?",
  answer: "Idol worship",
  options: [
    "Stars worship",
    "Fire worship",
    "Idol worship",
    "Sun worship"
  ]
},
{
  numb: 5,
  question: "Name the first person who received three blows of arrows during prayer but did not discontinue his prayer?",
  answer: "Hazrat Abaad bin Bashar (R.A)",
  options: [
    "Hazrat Abaad bin Bashar (R.A)",
    "Hazrat Saad bin Maaz (R.A)",
    "Hazrat Harram bin Malhan (R.A)",
    "Hazrat Swaid bin Samit (R.A)"
  ]
},
{
  numb: 6,
  question: "Kitab-ul-Shamayel relates to ____?",
  answer: "Life of the Holy Prophet (PBUH)",
  options: [
    "Muslim Conquests",
    "Saying of Holy Prophet (PBUH)",
    "Life of the Holy Prophet (PBUH)",
    "Islamic philosophy"
  ]
},
{
  numb: 7,
  question: "How many stones are thrown at the Jamarat in Hajj ritual?",
  answer: "7 Stones",
  options: [
    "7 Stones",
    "6 Stones",
    "5 Stones",
    "8 Stones"
  ]
},
{
  numb: 8,
  question: "The Battle Of Uhad was fought in which hijri?",
  answer: "3 Hijri",
  options: [
    "4 Hijri",
    "2 Hijri",
    "3 Hijri",
    "None of these"
  ]
},
{
  numb: 9,
  question: "Name of the Surah of the Holy Quran which mentions the rights of the parents?",
  answer: "Surah Luqman",
  options: [
    "Surah Mudassar",
    "Surah Luqman",
    "Surah Ahzab",
    "Surah Al Maeda"
  ]
},
{
  numb: 10,
  question: "What was the age of Hazrat Umer (R.A) when he embraced Islam?",
  answer: "32 years",
  options: [
    "29 years",
    "28 years",
    "27 years",
    "32 years"
  ]
},
{
  numb: 11,
  question: "Prophet Hazrat ____ (A.S) is known as Shaikh al-Anbiya?",
  answer: "Noah (A.S)",
  options: [
    "Musa (A.S)",
    "Essa (A.S)",
    "Noah (A.S)",
    "Haroon (A.S)"
  ]
},
{
  numb: 12,
  question: "In which Islamic Battle Angels helped the Muslims?",
  answer: "Badar",
  options: [
    "Khyber",
    "Badar",
    "Uhad",
    "None"
  ]
},
{
  numb: 13,
  question: "Hazrat Fatima (R.A) is known as ____?",
  answer: "Both A and B",
  options: [
    "Khatoon e Madina",
    "Khatoon e Mehshar",
    "Khatoon e Jannat",
    "Both A and B"
  ]
},
{
  numb: 14,
  question: "What is the punishment for drinking wine in the Quran?",
  answer: "None of these",
  options: [
    "80 Lashes",
    "50 Lashes",
    "40 Lashes",
    "None of these"
  ]
},
{
  numb: 15,
  question: "A battle in which the Holy Prophet (PBUH) did not participate is known as ____?",
  answer: "Sariyya",
  options: [
    "Jaziya",
    "Sariyya",
    "Sayee",
    "Al-Fay"
  ]
},
{
  numb: 16,
  question: "In which Surah is the regulation for prisoners of war mentioned?",
  answer: "Surah Nesa",
  options: [
    "Surah Infall",
    "Surah Tauba",
    "Surah Nesa",
    "Surah Naml"
  ]
},
{
  numb: 17,
  question: "Name the mountain where the Holy Prophet (S.A.W) deputed 50 skillful archers (Teer-Andaaz) in the battle of Ohad?",
  answer: "Jabel-e-Yahnene",
  options: [
    "Jabal-e-ohad",
    "Jabel-e-Yahnene",
    "Jabal-e-Safa",
    "Jabal-e-Marwa"
  ]
},
{
  numb: 18,
  question: "Hazrat Khadija (R.A) died at ____ years of age.",
  answer: "65 years",
  options: [
    "64 years",
    "63 years",
    "60 years",
    "65 years"
  ]
},
{
  numb: 19,
  question: "Hazrat Umar Farooq was martyred on 1st Muharram ____?",
  answer: "24 A.H.",
  options: [
    "26 A.H.",
    "25 A.H.",
    "24 A.H.",
    "27 A.H."
  ]
},
{
  numb: 20,
  question: "Who was chosen by Hazrat Umar (R.A) to lead the Muslim Army in the Battle of Qadsiya?",
  answer: "Hazrat Saad bin Abi Waqas (R.A)",
  options: [
    "Hazrat Saad bin Abi Waqas (R.A)",
    "Hazrat Khalid bin Waleed (R.A)",
    "Hazrat Ubaida bin Jerrah",
    "Hazrat Usama Bin Zaid (R.A)"
  ]
},
{
  numb: 21,
  question: "Seclusion is Sunnah in the month of Ramzan. Another kind of Seclusion is Wajib, its meaning is ____?",
  answer: "Ordained",
  options: [
    "Ordained",
    "Obligation",
    "Imperative",
    "Valid"
  ]
},
{
  numb: 22,
  question: "What does Hadi mean?",
  answer: "Animal to be sacrificed",
  options: [
    "Animal to be sacrificed",
    "Last pebble on throwing at Iblees",
    "One kind of Hajj",
    "Last circle of Tawaf"
  ]
},
{
  numb: 23,
  question: "Analogy is the synonym of ____?",
  answer: "Qiyas",
  options: [
    "Ijma",
    "Qiyas",
    "Ijtehad",
    "Jury"
  ]
},
{
  numb: 24,
  question: "The name of the sixth Kalimah is ____?",
  answer: "Kalimah Radd-i-Kufar",
  options: [
    "Kalimah Shahadat",
    "Kalimah Tauheed",
    "Kalimah Tamjeed",
    "Kalimah Radd-i-Kufar"
  ]
},
{
  numb: 25,
  question: "Which prophet of Allah is called Abu Al-Bashar?",
  answer: "Hazrat Adam (A.S)",
  options: [
    "Hazrat Adam (A.S)",
    "Hazrat Ibrahim (A.S)",
    "Hazrat Nooh (A.S)",
    "Hazrat Ayub (A.S)"
  ]
},
{
  numb: 26,
  question: "Which one is called Mash'ar-ul-Haram ____?",
  answer: "Muzdalifa valley",
  options: [
    "Muzdalifa valley",
    "Arafat",
    "Mina valley",
    "Madina valley"
  ]
},
{
  numb: 27,
  question: "Ghazwa ____ was fought 3 times.",
  answer: "Badr",
  options: [
    "Badr",
    "Khyber",
    "Tabook",
    "Hunain"
  ]
},
{
  numb: 28,
  question: "Jannat al-Baqi is a ____.",
  answer: "Cemetery",
  options: [
    "Heaven name",
    "Cemetery",
    "Mosque",
    "Both A and C"
  ]
},
{
  numb: 29,
  question: "There are ____ Farz (obligatory) acts in Tayammum.",
  answer: "2",
  options: [
    "2",
    "3",
    "4",
    "5"
  ]
},
{
  numb: 30,
  question: "Muslims are allowed to eat the meat of ____ animals.",
  answer: "Zabiha",
  options: [
    "Zabiha",
    "Non-Halal",
    "Self-Slaughtered",
    "None of these"
  ]
}
];