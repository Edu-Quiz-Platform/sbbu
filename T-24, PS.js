// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Pakistan Steel Mills is located in?",
    answer: "Karachi",
    options: [
      "Lahore",
      "Gwadar",
      "Karachi",
      "None of them"
    ]
  },
  {
    numb: 2,
    question: "SNGPL stands for?",
    answer: "Sui Northern Gas Pipelines limited",
    options: [
      "Sui Northern Gas Pipelines Lahore",
      "Sui Northern Gas Pipelines limited",
      "Sui Northern Gas Pakistan limited",
      "Sui Northern Gas Punjab limited"
    ]
  },
  {
    numb: 3,
    question: "Thal desert is located in?",
    answer: "Punjab",
    options: [
      "Sindh",
      "Gilgit",
      "KPK",
      "Punjab"
    ]
  },
  {
    numb: 4,
    question: "Ahmad Shah Pitras Bukhari was a famous writer of ______ language.",
    answer: "Urdu",
    options: [
      "English",
      "Hindi",
      "Urdu",
      "Punjabi"
    ]
  },
  {
    numb: 5,
    question: "The Kargil incident happened in?",
    answer: "1999",
    options: [
      "1998",
      "1997",
      "1999",
      "2000"
    ]
  },
  {
    numb: 6,
    question: "GHQ stands for:",
    answer: "General Head Quarters",
    options: [
      "General Head Quarters",
      "General Head Quarters Army",
      "General Headquarters",
      "General Head Quarter"
    ]
  },
  {
    numb: 7,
    question: "The capital city of Pakistan is?",
    answer: "Islamabad",
    options: [
      "Lahore",
      "Islamabad",
      "Karachi",
      "Peshawar"
    ]
  },
  {
    numb: 8,
    question: "Pakistan became a republic in?",
    answer: "1956",
    options: [
      "1947",
      "1956",
      "1958",
      "1962"
    ]
  },
  {
    numb: 9,
    question: "The Indus River flows through?",
    answer: "Pakistan",
    options: [
      "Pakistan",
      "India",
      "Afghanistan",
      "Bangladesh"
    ]
  },
  {
    numb: 10,
    question: "Which of the following is the largest city in Pakistan?",
    answer: "Karachi",
    options: [
      "Lahore",
      "Islamabad",
      "Karachi",
      "Peshawar"
    ]
  },
  {
    numb: 11,
    question: "The official language of Pakistan is?",
    answer: "Urdu",
    options: [
      "English",
      "Urdu",
      "Punjabi",
      "Sindhi"
    ]
  },
  {
    numb: 12,
    question: "Who is known as the 'Father of the Nation' in Pakistan?",
    answer: "Muhammad Ali Jinnah",
    options: [
      "Muhammad Ali Jinnah",
      "Allama Iqbal",
      "Liaquat Ali Khan",
      "Fatima Jinnah"
    ]
  },
  {
    numb: 13,
    question: "The national flower of Pakistan is?",
    answer: "Jasmine",
    options: [
      "Rose",
      "Jasmine",
      "Sunflower",
      "Lily"
    ]
  },
  {
    numb: 14,
    question: "The currency of Pakistan is?",
    answer: "Rupee",
    options: [
      "Dollar",
      "Rupee",
      "Pound",
      "Yen"
    ]
  },
  {
    numb: 15,
    question: "Which province is known as the 'Land of Five Rivers'?",
    answer: "Punjab",
    options: [
      "Sindh",
      "Balochistan",
      "Punjab",
      "KPK"
    ]
  },
  {
    numb: 16,
    question: "What is the national animal of Pakistan?",
    answer: "Markhor",
    options: [
      "Markhor",
      "Lion",
      "Tiger",
      "Elephant"
    ]
  },
  {
    numb: 17,
    question: "Which mountain range is located in Pakistan?",
    answer: "Himalayas",
    options: [
      "Andes",
      "Himalayas",
      "Rockies",
      "Alps"
    ]
  },
  {
    numb: 18,
    question: "Which is the largest province of Pakistan by area?",
    answer: "Balochistan",
    options: [
      "Sindh",
      "Punjab",
      "KPK",
      "Balochistan"
    ]
  },
  {
    numb: 19,
    question: "The first constitution of Pakistan was enacted in?",
    answer: "1956",
    options: [
      "1947",
      "1956",
      "1962",
      "1973"
    ]
  },
  {
    numb: 20,
    question: "The Pakistan Resolution was passed in?",
    answer: "1940",
    options: [
      "1940",
      "1942",
      "1947",
      "1950"
    ]
  },
  {
    numb: 21,
    question: "The national anthem of Pakistan is called?",
    answer: "Qaumi Taranah",
    options: [
      "Qaumi Taranah",
      "Aye Quaid",
      "Dil Dil Pakistan",
      "We Shall Overcome"
    ]
  },
  {
    numb: 22,
    question: "Which is the largest lake in Pakistan?",
    answer: "Chashma Lake",
    options: [
      "Manchar Lake",
      "Keenjhar Lake",
      "Chashma Lake",
      "Rawal Lake"
    ]
  },
  {
    numb: 23,
    question: "The Pakistan flag features which color?",
    answer: "Green",
    options: [
      "Blue",
      "Yellow",
      "Red",
      "Green"
    ]
  },
  {
    numb: 24,
    question: "Which city is known as the 'City of Lights'?",
    answer: "Karachi",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Peshawar"
    ]
  },
  {
    numb: 25,
    question: "The famous Badshahi Mosque is located in which city?",
    answer: "Lahore",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Peshawar"
    ]
  },
  {
    numb: 26,
    question: "Which festival is known as the 'Festival of Lights' in Pakistan?",
    answer: "Diwali",
    options: [
      "Eid ul-Fitr",
      "Eid ul-Adha",
      "Diwali",
      "Christmas"
    ]
  },
  {
    numb: 27,
    question: "Which is the longest river in Pakistan?",
    answer: "Indus",
    options: [
      "Ravi",
      "Indus",
      "Chenab",
      "Jhelum"
    ]
  },
  {
    numb: 28,
    question: "The tomb of Allama Iqbal is located in?",
    answer: "Multan",
    options: [
      "Karachi",
      "Islamabad",
      "Lahore",
      "Multan"
    ]
  },
  {
    numb: 29,
    question: "Which city is the capital of Khyber Pakhtunkhwa?",
    answer: "Peshawar",
    options: [
      "Peshawar",
      "Abbottabad",
      "Mardan",
      "Swat"
    ]
  },
  {
    numb: 30,
    question: "The national sport of Pakistan is?",
    answer: "Hockey",
    options: [
      "Cricket",
      "Hockey",
      "Football",
      "Tennis"
    ]
  }
];
