// Array of questions with options and correct answers
const questions = [
    {
  numb: 1,
  question: "Who was the first Governor of Gilgit Baltistan?",
  answer: "Qamar-u-Zaman Kaira",
  options: [
    "Begum Shamma Khalid",
    "Qamar-u-Zaman Kaira",
    "Wazir Baig",
    "Pir Karam Shah"
  ]
},
{
  numb: 2,
  question: "The severity of 2005 earthquake in Pakistan on Richter scale was?",
  answer: "7.6",
  options: [
    "6.9",
    "7.6",
    "7.1",
    "N.O.T"
  ]
},
{
  numb: 3,
  question: "India has constructed Baglihar Dam on the ____ river?",
  answer: "Chenab",
  options: [
    "Chenab",
    "Indus",
    "Sutlej",
    "Jhelum"
  ]
},
{
  numb: 4,
  question: "General Zubair Hayat was the _____ Chairman Joint Chiefs of Staff Committee (CJCSC) of Pakistan?",
  answer: "16th",
  options: [
    "13th",
    "15th",
    "16th",
    "17th"
  ]
},
{
  numb: 5,
  question: "Chief of Army Staff (COAS) Gen Qamar Javed Bajwa was awarded a ____ for promotion of Defence ties between Pakistan and Turkey on 20th June 2017.",
  answer: "Legion of Merit",
  options: [
    "Legion of Merit",
    "Golden Turkey award",
    "Medal of Honor",
    "Legion of Honour"
  ]
},
{
  numb: 6,
  question: "Who dismissed Benazir Bhutto’s Government for the second time?",
  answer: "Farooq Ahmed Khan Leghari",
  options: [
    "Rafiq Tarar",
    "Farooq Ahmed Khan Leghari",
    "Shaukat Aziz",
    "Yahya Khan"
  ]
},
{
  numb: 7,
  question: "When was the first constitution of Pakistan enforced?",
  answer: "23rd March 1956",
  options: [
    "8th June 1956",
    "23rd March 1956",
    "14th August 1956",
    "25th December 1956"
  ]
},
{
  numb: 8,
  question: "When was the constitution of 1962 abrogated?",
  answer: "26th March 1969",
  options: [
    "26th March 1969",
    "29th March 1969",
    "4th April 1969",
    "14th April 1969"
  ]
},
{
  numb: 9,
  question: "Article 58(2b) of constitution 1973 is about:",
  answer: "Power of President to dissolve National Assembly",
  options: [
    "Power of President to dismiss Army Chief",
    "Power of President to dissolve Provincial Assemblies",
    "Power of President to dissolve National Assembly",
    "Power of President to dissolve Senate"
  ]
},
{
  numb: 10,
  question: "The longest river in Pakistan is?",
  answer: "River Sindh",
  options: [
    "River Ravi",
    "River Sindh",
    "River Cheenab",
    "River Jehlum"
  ]
},
{
  numb: 11,
  question: "In which year did the British East India Company occupy Punjab?",
  answer: "1849",
  options: [
    "1846",
    "1847",
    "1849",
    "1850"
  ]
},
{
  numb: 12,
  question: "What was the real name of Titu Mir?",
  answer: "Nisar Ali",
  options: [
    "Nisar Ali",
    "Sayed Ahmad",
    "Muhammad Ali",
    "N.O.T"
  ]
},
{
  numb: 13,
  question: "The 1973 Constitution of Pakistan came into force on?",
  answer: "14th August 1973",
  options: [
    "23rd March 1973",
    "14th August 1973",
    "8th June 1973",
    "27th October 1973"
  ]
},
{
  numb: 14,
  question: "First Census was held in Pakistan in the year?",
  answer: "1951",
  options: [
    "1950",
    "1951",
    "1952",
    "1953"
  ]
},
{
  numb: 15,
  question: "Who is the first Punjabi poet?",
  answer: "Baba Farid",
  options: [
    "Baba Farid",
    "Shah Hussain",
    "Bullhay Shah",
    "N.O.T"
  ]
},
{
  numb: 16,
  question: "Sardar Abdur Rub Nishtar was the Governor of?",
  answer: "Punjab",
  options: [
    "Gilgit Baltistan",
    "KPK",
    "Punjab",
    "Sindh"
  ]
},
{
  numb: 17,
  question: "When was Liaquat Nehru Pact between India and Pakistan signed?",
  answer: "1950",
  options: [
    "1950",
    "1955",
    "1964",
    "1951"
  ]
},
{
  numb: 18,
  question: "Who was the first C-in-C of Pakistan Navy?",
  answer: "Gefford James",
  options: [
    "Gefford James",
    "R.L Archy",
    "Frank Meseri",
    "N.O.T"
  ]
},
{
  numb: 19,
  question: "Baktar Shikan missile system is ____?",
  answer: "Anti tank",
  options: [
    "Air to surface",
    "Anti aircraft",
    "Anti tank guided",
    "Anti tank"
  ]
},
{
  numb: 20,
  question: "Who was the first Muslim C-in-C of Pakistan Navy?",
  answer: "Admiral Mohammad Siddique",
  options: [
    "Admiral Mohammad Siddique",
    "Admiral Shahid Kareem",
    "Admiral Karamat Rahman",
    "Admiral Tariq"
  ]
},
{
  numb: 21,
  question: "Captain Muhammad Sarwar was martyred in the war of ____?",
  answer: "1948",
  options: [
    "1948",
    "1971",
    "1965",
    "N.O.T"
  ]
},
{
  numb: 22,
  question: "Who was the 6th Chairman Joint Chiefs of Staff Committee?",
  answer: "General Shamim Alam Khan",
  options: [
    "General Muhammad Sawar Khan",
    "Air Marshal Farooq Feroz Khan",
    "General Shamim Alam Khan",
    "N.O.T"
  ]
},
{
  numb: 23,
  question: "How many districts are there in KPK?",
  answer: "34",
  options: [
    "26",
    "29",
    "32",
    "34"
  ]
},
{
  numb: 24,
  question: "Kaghan valley is called _____________?",
  answer: "Pearl of the Himalaya",
  options: [
    "Diamond of the Himalaya",
    "Pearl of the Himalaya",
    "Heart of the Himalaya",
    "N.O.T"
  ]
},
{
  numb: 25,
  question: "Mohenjodaro is the most famous town of the Indus civilization, located on the ____?",
  answer: "West of Indus River",
  options: [
    "Right Bank of Indus River",
    "Left Bank of Indus River",
    "West of Indus River",
    "N.O.T"
  ]
},
{
  numb: 26,
  question: "University of Karachi is located in ____?",
  answer: "Karachi",
  options: [
    "Jamshoro",
    "Hyderabad",
    "Larkana",
    "Karachi"
  ]
},
{
  numb: 27,
  question: "The largest natural fresh water lake in the subcontinent is ____?",
  answer: "Manchar Lake",
  options: [
    "Keenjar Lake",
    "Manchar Lake",
    "Hali Lake",
    "N.O.T"
  ]
},
{
  numb: 28,
  question: "Which city is on the border of Sindh and Punjab Provinces?",
  answer: "Kashmore",
  options: [
    "Rajanpur",
    "Mithan Kot",
    "Kashmore",
    "N.O.T"
  ]
},
{
  numb: 29,
  question: "World Inventor’s Day is celebrated on ____?",
  answer: "9th November",
  options: [
    "9th November",
    "8th April",
    "31st April",
    "23rd April"
  ]
},
{
  numb: 30,
  question: "Name the range which separates Pakistan from Afghanistan?",
  answer: "Hindu Kush",
  options: [
    "Hindu Kush",
    "Himalayas",
    "Pmir",
    "Karakoram"
  ]
}
]
