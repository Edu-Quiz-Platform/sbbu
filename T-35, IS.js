// Array of questions with options and correct answers
const questions = [
    {
  numb: 1,
  question: "The second daughter of our Holy Prophet (ﷺ) was ____.",
  answer: "Hazrat Ruqayah (R.A)",
  options: [
    "Hazrat Umme Kulsom (R.A)",
    "Hazrat Fatima (R.A)",
    "Hazrat Zainab (R.A)",
    "Hazrat Ruqayah (R.A)"
  ]
},
{
  numb: 2,
  question: "Which is fifth month of Islamic Calendar?",
  answer: "Jamadi-ul-Awwal",
  options: [
    "Jamadi-ul-Awwal",
    "Rajab",
    "Moharram",
    "Safar"
  ]
},
{
  numb: 3,
  question: "Which is the best night mentioned in Holy Qur’an?",
  answer: "Shab-e-Qadar",
  options: [
    "Shab-e-Qadar",
    "Shab-e-Miraj",
    "Shab-e-Bara’at",
    "N.O.T"
  ]
},
{
  numb: 4,
  question: "____is the atonement for breaking the fast.",
  answer: "To Feed 60 people",
  options: [
    "To Feed 70 people",
    "To Feed 60 people",
    "To Feed 50 people",
    "To Feed 80 people"
  ]
},
{
  numb: 5,
  question: "The first Ashra of Ramazan is called ____.",
  answer: "Ashra-e-Rehmat",
  options: [
    "Ashra-e-Rehmat",
    "Ashra-e-Maghfirat",
    "Ashra-e-Najat-e-Naar-e-Jahannum",
    "A.O.T"
  ]
},
{
  numb: 6,
  question: "Who was the second Caliph?",
  answer: "Hazrat Umar (R.A)",
  options: [
    "Hazrat Usman (R.A)",
    "Hazrat Umar (R.A)",
    "Hazrat Ali (R.A)",
    "Hazrat Abu Bakar (R.A)"
  ]
},
{
  numb: 7,
  question: "Who was the third son of Hazrat Muhammad (ﷺ)?",
  answer: "Hazrat Ibrahim",
  options: [
    "Hazrat Ibrahim",
    "Hazrat Al-Qasim",
    "Hazrat Abdullah",
    "Hazrat Abdurrehman"
  ]
},
{
  numb: 8,
  question: "How many sons Hazrat Muhammad (ﷺ) had with Hazrat Maria al-qibtiya (R.A)?",
  answer: "1",
  options: [
    "3",
    "2",
    "1",
    "4"
  ]
},
{
  numb: 9,
  question: "Eighth wife of Hazrat Muhammad (ﷺ) was ____.",
  answer: "Hazrat Umeh Habiba (R.A)",
  options: [
    "Hazrat Zainab binte Khazeema (R.A)",
    "Hazrat Safia (R.A)",
    "Hazrat Memona (R.A)",
    "Hazrat Umeh Habiba (R.A)"
  ]
},
{
  numb: 10,
  question: "How many times Bismillahir Rahmaanir Raheem is repeated in the Holy Quran?",
  answer: "114",
  options: [
    "114",
    "115",
    "116",
    "113"
  ]
},
{
  numb: 11,
  question: "Which Surah is the name of one Holy war?",
  answer: "Surah Ahzab",
  options: [
    "Surah Fathi",
    "Surah Ahzab",
    "Surah Room",
    "Surah Nasr"
  ]
},
{
  numb: 12,
  question: "What is the name of the 16th Para of the Holy Qur’an?",
  answer: "Qal Alam",
  options: [
    "Aqtarabo",
    "Qal Alam",
    "Subhanallazi",
    "Qadd Aflaha"
  ]
},
{
  numb: 13,
  question: "Name the First Female False Prophetess?",
  answer: "Sajah",
  options: [
    "Sajah",
    "Hiba",
    "Hinza",
    "N.O.T"
  ]
},
{
  numb: 14,
  question: "Who was the first child born after migration (hijrat)?",
  answer: "Abdul bin Zubair (R.A)",
  options: [
    "Abu Salma (R.A)",
    "Abdul bin Zubair (R.A)",
    "Abdul bin Qasim (R.A)",
    "Abu Zainab (R.A)"
  ]
},
{
  numb: 15,
  question: "Number of angels of hell are ______?",
  answer: "19",
  options: [
    "21",
    "19",
    "17",
    "23"
  ]
},
{
  numb: 16,
  question: "What was the age of Hazrat Khadija (R.A) when married to Hazrat Muhammad (ﷺ)?",
  answer: "40",
  options: [
    "35",
    "30",
    "25",
    "40"
  ]
},
{
  numb: 17,
  question: "What was the name of Hazrat Khadija (R.A) father?",
  answer: "Khuwaylid ibn Asad",
  options: [
    "Asad ibne abd-ul-Uzza",
    "Zubair ibn al-awam",
    "Awwam bint khuwaylid",
    "Khuwaylid ibn Asad"
  ]
},
{
  numb: 18,
  question: "Who are exempt from Ramadan’s fasting?",
  answer: "Pregnancy and breastfeeding",
  options: [
    "Senility and old age",
    "Pregnancy and breastfeeding",
    "Sickness & Travelling",
    "A O.T"
  ]
},
{
  numb: 19,
  question: "Where is the grave of Hazrat Zikriya (A.S)?",
  answer: "Syria",
  options: [
    "Saudi Arabia",
    "Lebanon",
    "Syria",
    "Jordan"
  ]
},
{
  numb: 20,
  question: "A male is coffined/wrapped in ____ dressed sheets.",
  answer: "3",
  options: [
    "3",
    "2",
    "1",
    "4"
  ]
},
{
  numb: 21,
  question: "Which days are called Ayam-e-Tashreeq?",
  answer: "11, 12 and 13 Zil Haj",
  options: [
    "27, 28 and 29 Ramadan",
    "9, 10 and 11 Muharram",
    "11, 12 and 13 Zil Haj",
    "15, 16 and 17 Sha’ban"
  ]
},
{
  numb: 22,
  question: "Hazrat Yahya (A.S) met with Holy Prophet (ﷺ) on the ____ heaven?",
  answer: "2nd",
  options: [
    "3rd",
    "2nd",
    "1st",
    "4th"
  ]
},
{
  numb: 23,
  question: "When did Waqia e Karbala (The Battle of Karbala) occur?",
  answer: "61 AH",
  options: [
    "62 AH",
    "61 AH",
    "60 AH",
    "63 AH"
  ]
},
{
  numb: 24,
  question: "Where does jannah (Heaven) lie?",
  answer: "Under Mother’s feet",
  options: [
    "Under Teacher’s feet",
    "Under Mother’s feet",
    "Under Father’s feet",
    "N.O.T"
  ]
},
{
  numb: 25,
  question: "Takbeer-e-Tashreeq is recited in ____?",
  answer: "Eid-ul-Uzha",
  options: [
    "Eid-ul-fitr",
    "Eid-ul-Uzha",
    "Juma Prayer",
    "Janaza"
  ]
},
{
  numb: 26,
  question: "How many days did Hazrat Muhammad (ﷺ) stay during the Tabook Battle?",
  answer: "20",
  options: [
    "08",
    "20",
    "10",
    "18"
  ]
},
{
  numb: 27,
  question: "Mujadid Alif Sani is the title of ____?",
  answer: "Sheikh Ahmad Sirhindi",
  options: [
    "Shah Waliullah",
    "Syed Ahmed Shaheed",
    "Sheikh Ahmad Sirhindi",
    "N.O.T"
  ]
},
{
  numb: 28,
  question: "What was the number of clauses of the Charter of Madina?",
  answer: "47",
  options: [
    "47",
    "46",
    "45",
    "48"
  ]
},
{
  numb: 29,
  question: "The period of reign of Abū Isḥāq Muḥammad ibn Hārūn al-Rashīd is from ____?",
  answer: "796-842",
  options: [
    "700-800",
    "750-850",
    "796-842",
    "687-792"
  ]
},
{
  numb: 30,
  question: "The Umayyad Caliphate lasted from ____?",
  answer: "661-750",
  options: [
    "661-750",
    "622-632",
    "749-756",
    "610-680"
  ]
}
]
