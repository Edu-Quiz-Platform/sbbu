// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The area of Sindh is _________ ?",
    answer: "140,914sq.km",
    options: [
      "120,914sq.km",
      "130,914sq.km",
      "140,814sq.km",
      "140,914sq.km"
    ]
  },
  {
    numb: 2,
    question: "The Largest Cotton Exchange Building of Pakistan is situated in _________ ?",
    answer: "Karachi",
    options: [
      "Lahore",
      "Faisalabad",
      "Karachi",
      "Multan"
    ]
  },
  {
    numb: 3,
    question: "Marvi is a folk story of ____________ ?",
    answer: "Sindh",
    options: [
      "Sindh",
      "Seraiki",
      "Thar",
      "Thal"
    ]
  },
  {
    numb: 4,
    question: "The shrine of Shah Abdul Latif Bhitai is located in _________ ?",
    answer: "Bhit Shah",
    options: [
      "Sibbi",
      "Bhit Shah",
      "Hala",
      "Jacobabad"
    ]
  },
  {
    numb: 5,
    question: "Pakistan day is observed on ?",
    answer: "23rd March",
    options: [
      "5th February",
      "8th March",
      "21st March",
      "23rd March"
    ]
  },
  {
    numb: 6,
    question: "Which is the youngest mountain range on the earth ?",
    answer: "Himalayas",
    options: [
      "Himalayas",
      "Hindu kush",
      "Korakoram",
      "Alps"
    ]
  },
  {
    numb: 7,
    question: "The length of Baltur Glacier is ____________ ?",
    answer: "62km",
    options: [
      "58km",
      "62km",
      "65km",
      "70km"
    ]
  },
  {
    numb: 8,
    question: "Which is the highest peak of the koh-e-Sufaid Range ?",
    answer: "Skaram",
    options: [
      "Sakasar",
      "Broad Peak",
      "Skaram",
      "Nanga Parbat"
    ]
  },
  {
    numb: 9,
    question: "Which of the following areas from potwar Plateau ? ",
    answer: "A.O.T",
    options: [
      "Rawalpindi",
      "Jhelum",
      "Mianwali",
      "A.O.T"
    ]
    },
  {
    numb: 10,
    question: "How many peaks in the Pakistan are Higher than 8000 meters?",
    answer: "5",
    options: [
      "3",
      "4",
      "5",
      "6"
    ]
  },
  {
    numb: 11,
    question: "Famous Shakar Parrian Park is located in _________ ?",
    answer: "Islamabad",
    options: [
      "Murree",
      "Rawalpindi",
      "Islamabad",
      "N.O.T"
    ]
  },
  {
    numb: 12,
    question: "FATA comprises of ___________?",
    answer: "6 Agencies",
    options: [
      "5 Agencies",
      "6 Agencies",
      "7 Agencies",
      "8 Agencies"
    ]
  },
  {
    numb: 13,
    question: "Mangla dam is located in ____________?",
    answer: "AJ&K",
    options: [
      "Punjab",
      "AJ&K",
      "KPK",
      "FATA"
    ]
  },
  {
    numb: 14,
    question: "The capital of Gilgit Baltistan is __________ ?",
    answer: "Gilgit",
    options: [
      "Gilgit",
      "Pamir",
      "Baltistan",
      "Hunza"
    ]
  },
  {
    numb: 15,
    question: "Who was the first Commander-in-Chief of Pakistan Army?",
    answer: "Gen. Frank Meservy",
    options: [
      "Gen. Sadique Chaudhry",
      "Gen. George Murphy",
      "Gen. Frank Meservy",
      "G.M. Ayub Khan"
    ]
  },
  {
    numb: 16,
    question: "Name the cricket Stadium which is located in Khyber Agency and inaugurated by Gen Raheel Sharif in November 2016?",
    answer: "Shahid Afridi cricket stadium",
    options: [
      "Shahid Afridi cricket stadium",
      "Younas Khan cricket stadium",
      "Arbab Niaz Stadium",
      "Gaddafi Stadium"
    ]
  },
  {
    numb: 17,
    question: "The Shortest-Serving Governor in Sindh’s History is?",
    answer: "Justice(R) Saeed U zaman Saddiqi",
    options: [
      "Murad Ali Shah",
      "Khursheed Shah",
      "Justice(R) Saeed U zaman Saddiqi",
      "Dr. Ishratul Ebad"
    ]
  },
  {
    numb: 18,
    question: "Benazir Bhutto was born on ___________?",
    answer: "21 June 1953",
    options: [
      "21 July 1952",
      "21 June 1953",
      "22 June 1958",
      "27 December 1960"
    ]
  },
  {
    numb: 19,
    question: "When the Constituent Assembly passed the Objective Resolution?",
    answer: "12th March 1949",
    options: [
      "14th February 1949",
      "12th March 1949",
      "9th June 1949",
      "15th August 1949"
    ]
  },
  {
    numb: 20,
    question: "Who abrogated 1956 constitution?",
    answer: "Iskander Mirza",
    options: [
      "Iskander Mirza",
      "Ayub Khan",
      "Yahya Khan",
      "Tikka Khan"
    ]
  },
  {
    numb: 21,
    question: "In which constitution Bicameral Legislature was provided for the first time?",
    answer: "1973",
    options: [
      "1949",
      "1956",
      "1962",
      "1973"
    ]
  },
  {
    numb: 22,
    question: "Pakistan’s National Flag was prepared by_________?",
    answer: "Ameer-ud-din Qadwai",
    options: [
      "Abdur-rehaman Chugtai",
      "Liaqat Ali",
      "Ameer-ud-din Qadwai",
      "Chaudhary Rehmat Ali"
    ]
  },
  {
    numb: 23,
    question: "Government of India Act 1858 was passed on?",
    answer: "2nd August 1858",
    options: [
      "3rd June 1858",
      "18th July 1858",
      "2nd August 1858",
      "24th October 1858"
    ]
  },
  {
    numb: 24,
    question: "Who was the Viceroy of India at the time of partition of Bengal?",
    answer: "Lord Curzon",
    options: [
      "Lord Curzon",
      "Lord Wavell",
      "Lord Minto",
      "Lord Algan"
    ]
  },
  {
    numb: 25,
    question: "The capital city of Gilgit Baltistan is?",
    answer: "Gilgit",
    options: [
      "Ghanchay",
      "Nagar",
      "Chilas",
      "Gilgit"
    ]
  },
  {
    numb: 26,
    question: "Number of houses of Pakistan’s Majlis-e-Shura (Parliament) is?",
    answer: "Two",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ]
  },
  {
    numb: 27,
    question: "Abdul Rehman Chughtai was attached with the art of?",
    answer: "Painting",
    options: [
      "Construction",
      "Music",
      "Painting",
      "N.O.T"
    ]
  },
  {
    numb: 28,
    question: "Name the language in which the Holy Quran was translated for the first time in India?",
    answer: "Persian",
    options: [
      "Punjabi",
      "Persian",
      "Sindhi",
      "Balochi"
    ]
  },
  {
    numb: 29,
    question: "In which year was OIC founded?",
    answer: "1969",
    options: [
      "1987",
      "1968",
      "1969",
      "1970"
    ]
  },
  {
    numb: 30,
    question: "What is the total area of FATA?",
    answer: "27,220 Sq Km",
    options: [
      "27,220 Sq Km",
      "40,914 Sq Km",
      "205,344 Sq Km",
      "347,190 Sq Km"
    ]
  },
];
