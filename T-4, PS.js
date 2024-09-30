// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The capital of Azad Jammu & Kashmir is _____?",
    answer: "Muzzafar Abad ",
    options: [
      "Bhimber",
      "Muzzafar Abad ",
      "Bagh",
      "Mirpur"
    ]
  },
  {
    numb: 2,
    question: "Baltistan is called ______ ? ",
    answer: "Little Tibet ",
    options: [
      "Little Tibet ",
      "Paradise",
      "Beauty of Earth",
      "Land of Fairies "
    ]
  },
  {
    numb: 3,
    question: "When was the first Pakistani Postal Stamp issued?",
    answer: "July 1948 ",
    options: [
      "December 1947",
      "February 1948",
      "July 1948 ",
      "August 1948"
    ]
  },
  {
    numb: 4,
    question: "22nd Amendment in 1973 Constitution of Pakistan is related to________?",
    answer: "Powers of Election Commission Members",
    options: [
      "Pak Army Trail Courts",
      "Powers of Election Commission Members",
      "Related to NRO",
      "Not made yet"
    ]
  },
  {
    numb: 5,
    question: "Name the special task force, which is established in December 2016 by Pakistan Navy to safeguard and protect the China-Pakistan Economic Corridor as well as Gwadar port?",
    answer: "Task Force 88",
    options: [
      "Task Force 2 ",
      "Task Force 21",
      "Task Force 44",
      "Task Force 88"
    ]
  },
  {
    numb: 6,
    question: "Benazir Bhutto was born in Which City of Pakistan? ",
    answer: "Karachi",
    options: [
      "Karachi",
      "Lahore",
      "Larkana",
      "Islamabad"
    ]
  },
  {
    numb: 7,
    question: "After how many years Pakistan got its first constitution?",
    answer: "9 years ",
    options: [
      "5 years",
      "7 years ",
      "9 years ",
      "11 years "
    ]
  },
  {
    numb: 8,
    question: "In respect of religion what term was set for President and Prime Minister in 1956 constitution?",
    answer: "He must be a Muslim ( this condition applicable only on president, pm may be non-muslim)",
    options: [
      "He may be a Muslim",
      "He must not be Hindu",
      "He must not be Christian",
      "He must be a Muslim ( this condition applicable only on president, pm may be non-muslim)"
    ]
  },
  {
    numb: 9,
    question: "who elects the President according to 1973 constitution?",
    answer: "A.O.T",
    options: [
      "National Assembly ",
      "Provincial Assemblies ",
      "Senate",
      "A.O.T"
    ]
    },
  {
    numb: 10,
    question: "In constitution 1973 who were declared none Muslims? ",
    answer: "Qadiyanis",
    options: [
      "Hindus",
      "Qadiyanis",
      "Jews",
      "Christians"
    ]
  },
  {
    numb: 11,
    question: "The ‘Kashaf-ul-Mahjub’ was written by?",
    answer: "Hazrat Data Gunj Buksh (R.A)",
    options: [
      "Maulana Zakaullah",
      "Maulana Shibli Nomani",
      "Maulana Altaf Hussain Hali",
      "Hazrat Data Gunj Buksh (R.A)"
    ]
  },
  {
    numb: 12,
    question: "In which of the following cities Indian National Congress was found? ",
    answer: "Bombay",
    options: [
      "Delhi",
      "Kanpur",
      "Bombay",
      "Allahabad"
    ]
  },
  {
    numb: 13,
    question: "Pakistan conducted nuclear tests on May 28, 1998 at?",
    answer: "Chaghi Hills ",
    options: [
      "Kohe-e-Sufaid ",
      "Chaghi Hills ",
      "Toba Kakar ",
      "Raskoh"
    ]
  },
  {
    numb: 14,
    question: "The members of Punjab Assembly are? ",
    answer: "371",
    options: [
      "100",
      "237",
      "275",
      "371"
    ]
  },
  {
    numb: 15,
    question: "The largest Railway workshop Mughalpura is situated in?",
    answer: "Lahore",
    options: [
      "Lahore",
      "Gujranwala",
      "Karachi",
      "Multan"
    ]
  },
  {
    numb: 16,
    question: "Urdu is a word of Turkish language, it means? ",
    answer: "Army",
    options: [
      "Army",
      "Arms",
      "Wth",
      "Literature"
    ]
  },
  {
    numb: 17,
    question: "Identify the largest cantonment of Pakistan? ",
    answer: "Kharian Cantt",
    options: [
      "Quetta Cantt",
      "Okara Cantt",
      "Karachi Cantt",
      "Kharian Cantt"
    ]
  },
  {
    numb: 18,
    question: "What is the total area of Sindh Province? ",
    answer: "140,914 Sq Km",
    options: [
      "74,521 Sq Km",
      "140,914 Sq Km",
      "205,344 Sq Km",
      "347,190 Sq Km"
    ]
  },
  {
    numb: 19,
    question: "Zafar Ahmed Chaudhry was the first Chief of Air Staff of _______ . ",
    answer: "Air Force",
    options: [
      "Pak Army ",
      "Air Force ",
      "Navy",
      "N.O.T"
    ]
  },
  {
    numb: 20,
    question: "The range if Hatf-4 is _______ ? ",
    answer: "750km",
    options: [
      "390km",
      "400km",
      "600km",
      "750km"
    ]
  },
  {
    numb: 21,
    question: "At the time of 1971 War the C-in-C of Pak Army was _______?",
    answer: "General Agha Muhammad Yahya Khan",
    options: [
      "General Ayyub Khan",
      "Lt. General Gul Hassan",
      "General Agha Muhammad Yahya Khan",
      "General Tikka Khan"
    ]
  },
  {
    numb: 22,
    question: "In which of the following city the Pakistan Navel War College is located?",
    answer: "Lahore",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Multan"
    ]
  },
  {
    numb: 23,
    question: "How many Police ranges are in KPK? ",
    answer: "8",
    options: [
      "3",
      "4",
      "7",
      "8"
    ]
  },
  {
    numb: 24,
    question: "The Chowk Yadgar is located in _______ ? ",
    answer: "Peshawar",
    options: [
      "Peshawar",
      "D I Khan",
      "Chitral",
      "Dir"
    ]
  },
  {
    numb: 25,
    question: "Tarbela dam is situated in _______ ? ",
    answer: "KPK",
    options: [
      "Gilgit Baltistan ",
      "FATA",
      "KPK",
      "Kashmir"
    ]
  },
  {
    numb: 26,
    question: "Gaddani is famous for _______ ? ",
    answer: "Ship Breaking ",
    options: [
      "Ship making",
      "Ship Breaking ",
      "Fishing",
      "N.O.T"
    ]
  },
  {
    numb: 27,
    question: "Who was King Umar ?",
    answer: "First King of the Sumarh Dynasty",
    options: [
      "First King of the Sumarh Dynasty",
      "Second King of the Sumarh Dynasty",
      "Third King of the Sumarh Dynasty",
      "Fourth King of the Sumarh Dynasty"
    ]
  },
  {
    numb: 28,
    question: "The hottest place in Pakistan is ______ ? ",
    answer: "Turbat",
    options: [
      "Bahawalpur",
      "Turbat",
      "Multan",
      "N.O.T"
    ]
  },
  {
    numb: 29,
    question: "The Largest Coal Reservoir are found in _______ ?",
    answer: "Thar",
    options: [
      "Thatta",
      "Thal",
      "Thar",
      "Karachi"
    ]
  },
  {
    numb: 30,
    question: "K-2 is Also Known As ________ ? ",
    answer: "Godwin Austin",
    options: [
      "Godwin Austin",
      "Sia Kingri ",
      "Broad Peak ",
      "Roshan Peak"
    ]
  },
];
