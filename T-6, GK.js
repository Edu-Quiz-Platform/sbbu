// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The world largest Muslim country by area is ________? ",
    answer: "Kazakhstan",
    options: [
      "Saudi Arab",
      "Kazakhstan",
      "Pakistan",
      "Indonesia"
    ]
  },
  {
    numb: 2,
    question: "International Genetically Engineered Machines (iGEM) competition, 2017 held in_________?",
    answer: "Boston, United States",
    options: [
      "New York, USA",
      "Washington DC, USA",
      "New Jersey, USA",
      "Boston, United States"
    ]
  },
  {
    numb: 3,
    question: "A vent in the Earth’s surface that emits steam and gases, essentially associated with volcanic regions is known as ________?",
    answer: "Fumarole",
    options: [
      "Fumarole",
      "Mesa",
      "Munatak",
      "Moraines"
    ]
  },
  {
    numb: 4,
    question: "What is the maximum running land speed of Crocodile ?",
    answer: "17 KMPL",
    options: [
      "16 KMPL",
      "17 KMPL",
      "20 LMPL ",
      "25 LMPL "
    ]
  },
  {
    numb: 5,
    question: "Dushanbe is the capital of__________?",
    answer: "Tajikistan",
    options: [
      "Ukraine",
      "kazakhistan",
      "Tajikistan",
      "Turkmenistan"
    ]
  },
  {
    numb: 6,
    question: "Which is national flower of Taiwan ?",
    answer: "Plum Blossom",
    options: [
      "Linnaea Borealis ",
      "Edelweiss",
      "Jasmine",
      "Plum Blossom"
    ]
  },
  {
    numb: 7,
    question: "From which country does Lego come? ",
    answer: "Denmark",
    options: [
      "Denmark",
      "Australia",
      "England",
      "Greece"
    ]
  },
  {
    numb: 8,
    question: "“Black Tornado operation” happened in ______?",
    answer: "India",
    options: [
      "Pakistan",
      "India",
      "Sri Lanka",
      "Myanmar"
    ]
  },
  {
    numb: 9,
    question: "Herodotus is called ________________. ",
    answer: "Father of History",
    options: [
      "Father of Physics",
      "Father of Comedy",
      "Father of History",
      "Father of Chemistry"
    ]
    },
  {
    numb: 10,
    question: "Who was the first viceroy of India?",
    answer: "Lord canning",
    options: [
      "Lord ripon ",
      "Lord canning",
      "Lord curzon",
      "Lord mayo"
    ]
  },
  {
    numb: 11,
    question: "“Port Zayed ” is the seaport of _________ ?",
    answer: "UAE",
    options: [
      "Indonesia",
      "Yamen",
      "Jordan",
      "UAE"
    ]
  },
  {
    numb: 12,
    question: "What is “Ikebana”?",
    answer: "Japanese Art of flower arrangement",
    options: [
      "Japanese Art of flower arrangement",
      "Greek Art of fighting",
      "Art of dancing and music",
      "N.O.T"
    ]
  },
  {
    numb: 13,
    question: "Which city is called the ‘Little Pakistan’?",
    answer: "Bradford",
    options: [
      "Cairo",
      "Bradford",
      "Chicago",
      "Dhaka"
    ]
  },
  {
    numb: 14,
    question: "Which player has the highest ODI individual score?",
    answer: "Rohit Sharma",
    options: [
      "Rohit Sharma",
      "Martin Guptil",
      "Virender Sehwag",
      "Chris Gayle"
    ]
  },
  {
    numb: 15,
    question: "Who was the First Norman king of England?",
    answer: "William",
    options: [
      "Bjorn",
      "Harold Godwin son",
      "Henry",
      "William"
    ]
  },
  {
    numb: 16,
    question: "The first nuclear power plant in Pakistan was established at___________?",
    answer: "Karachi",
    options: [
      "Peshawar",
      "Mianwali",
      "Karachi",
      "Islamabad"
    ]
  },
  {
    numb: 17,
    question: "How many diffrent flavor of jelly bean exist?",
    answer: "50",
    options: [
      "42",
      "50",
      "51",
      "60"
    ]
  },
  {
    numb: 18,
    question: "Buddha temple is in_________?",
    answer: "China",
    options: [
      "India",
      "Pakistan",
      "China",
      "USA"
    ]
  },
  {
    numb: 19,
    question: "One Belt, One Road’ (OBOR) summit-2017 was held in May in___________?",
    answer: "China",
    options: [
      "Pakistan",
      "China",
      "Iran",
      "India"
    ]
  },
  {
    numb: 20,
    question: "What is the official language of Mexico ?",
    answer: "Spanish",
    options: [
      "Spanish",
      "French",
      "Italian",
      "English"
    ]
  },
  {
    numb: 21,
    question: "The fall of Constantinople occurred in_________?",
    answer: "29 May 1453",
    options: [
      "22 April 1353",
      "29 May 1353",
      "22 April 1453",
      "29 May 1453"
    ]
  },
  {
    numb: 22,
    question: "Which countries had the most Nobel Prize winners in 2017?",
    answer: "USA",
    options: [
      "USA",
      "UK",
      "France",
      "Germany"
    ]
  },
  {
    numb: 23,
    question: "The Mongols defeat the Khwarezmid Empire and take over Persia (Iran, Afghanistan) in ________ ?",
    answer: "1221",
    options: [
      "1220",
      "1221",
      "1225",
      "1230"
    ]
  },
  {
    numb: 24,
    question: "Total number of sections of ANF Force Act are___________?",
    answer: "17",
    options: [
      "16",
      "17",
      "18",
      "19"
    ]
  },
  {
    numb: 25,
    question: "World Heart Day is Celebrated every year on ___________?",
    answer: "29 September",
    options: [
      "29 September",
      "28 October",
      "28 November",
      "N.O.T"
    ]
  },
  {
    numb: 26,
    question: "Bakhtar is the news agency of what country ? ",
    answer: "Afghanistan",
    options: [
      "Iran",
      "Iraq",
      "Uzbekistan",
      "Afghanistan"
    ]
  },
  {
    numb: 27,
    question: "Which is the national game of Nepal?",
    answer: "Volleyball",
    options: [
      "Baseball",
      "Volleyball",
      "Wrestling",
      "Handball"
    ]
  },
  {
    numb: 28,
    question: "Kirana mountains are present in________? ",
    answer: "Pakistan",
    options: [
      "Pakistan",
      "India",
      "China",
      "Nepal"
    ]
  },
  {
    numb: 29,
    question: "Which of the following countries becomes first in Africa to launch high speed train 320Km/h?",
    answer: "Morocco",
    options: [
      "South Africa ",
      "Egypt",
      "Morocco",
      "Tunesia"
    ]
  },
  {
    numb: 30,
    question: "When Wrestling Introduced In Olympics Games _________?",
    answer: "1904",
    options: [
      "1900",
      "1904",
      "1906",
      "1908"
    ]
  },
];
