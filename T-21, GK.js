// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "In which district of Pakistan Kalabagh Dam is located?",
    options: [
      "MIANWALI",
      "SAHIWAL",
      "BAHAWALPUR",
      "ATTOCK"
    ],
    answer: "MIANWALI"
  },
  {
    numb: 2,
    question: "In which year Pakistan was world champion of Cricket, Hockey, Squash & Snooker?",
    options: [
      "1990",
      "1992",
      "1994",
      "1996"
    ],
    answer: "1992"
  },
  {
    numb: 3,
    question: "In which year the Taliban Office opened in Qatar?",
    options: [
      "2003",
      "2010",
      "2013",
      "2020"
    ],
    answer: "2013"
  },
  {
    numb: 4,
    question: "International Mountain Day is observed every year on__________?",
    options: [
      "8 December",
      "9 December",
      "10 December",
      "11 December"
    ],
    answer: "10 December"
  },
  {
    numb: 5,
    question: "Iraq’s Capital Baghdad was built by__________?",
    options: [
      "Ibn e Hashim",
      "Al Mansoor",
      "Uqba bin Rafay",
      "None of these"
    ],
    answer: "Al Mansoor"
  },
  {
    numb: 6,
    question: "Island aviation services is the government runs airlines of ___________?",
    options: [
      "Maldives",
      "Indonesia",
      "Malaysia",
      "Greece"
    ],
    answer: "Maldives"
  },
  {
    numb: 7,
    question: "Juba is the capital of ___________?",
    options: [
      "Spain",
      "Suriname",
      "South Sudan",
      "Somalia"
    ],
    answer: "South Sudan"
  },
  {
    numb: 8,
    question: "Karez is the irrigation system of which province of Pakistan?",
    options: [
      "punjab",
      "sindh",
      "KPK",
      "Balochistan"
    ],
    answer: "Balochistan"
  },
  {
    numb: 9,
    question: "Kutte ki Qabar (The Dog’s Grave) an Area Disputed between Sindh and Balochistan is located in_________range?",
    options: [
      "Koh-i-Suleman",
      "Kirthar",
      "Siachen",
      "Koh-i-Sufaid"
    ],
    answer: "Kirthar"
  },
  {
    numb: 10,
    question: "Lake Tana is located in__________?",
    options: [
      "Ethiopia",
      "Ghana",
      "USA",
      "Kenya"
    ],
    answer: "Ethiopia"
  },
  {
    numb: 11,
    question: "Latitude of place is indicative of its_____________?",
    options: [
      "Time",
      "Altitude",
      "Temperature",
      "Amount of rainfall"
    ],
    answer: "Temperature"
  },
  {
    numb: 12,
    question: "Leaning Tower of Pisa is in_________?",
    options: [
      "Russia",
      "Italy",
      "France",
      "England"
    ],
    answer: "Italy"
  },
  {
    numb: 13,
    question: "Louvre museum is located in_________?",
    options: [
      "Paris",
      "USA",
      "UK",
      "UAE"
    ],
    answer: "Paris"
  },
  {
    numb: 14,
    question: "Luxor is the city of___________?",
    options: [
      "Luxembourg",
      "Israel",
      "Egypt",
      "Finland"
    ],
    answer: "Egypt"
  },
  {
    numb: 15,
    question: "M2 is the motorway b/w _________?",
    options: [
      "Multan to Sukkur",
      "Islamabad to Lahore",
      "Karachi to Hyderabad",
      "Lahore to Sialkot"
    ],
    answer: "Islamabad to Lahore"
  },
  {
    numb: 16,
    question: "Most Populated Country of South-America is___________?",
    options: [
      "Brazil",
      "Colombia",
      "Argentina",
      "Venezuela"
    ],
    answer: "Brazil"
  },
  {
    numb: 17,
    question: "My life is the autobiography of____________?",
    options: [
      "Nelson Mandela",
      "Bill Clinton",
      "Barack Obama",
      "Charles Darwin"
    ],
    answer: "Bill Clinton"
  },
  {
    numb: 18,
    question: "Myanmar city also called _______?",
    options: [
      "Land of Milk and Honey",
      "Land of Thunderbolt",
      "Land of Pagoda",
      "None of these"
    ],
    answer: "Land of Pagoda"
  },
  {
    numb: 19,
    question: "Nagorno Karabakh region is recognized as part of___________?",
    options: [
      "Georgia",
      "Turkey",
      "Iran",
      "Azerbaijan"
    ],
    answer: "Azerbaijan"
  },
  {
    numb: 20,
    question: "Nagqu is located in which country?",
    options: [
      "China",
      "Nepal",
      "Bhutan",
      "Mongolia"
    ],
    answer: "China"
  },
  {
    numb: 21,
    question: "Name of US president who was a film actor?",
    options: [
      "Richard Nixon",
      "Jimmy Carter",
      "Ronald Reagan",
      "London Johnson"
    ],
    answer: "Ronald Reagan"
  },
  {
    numb: 22,
    question: "Name of World’s Largest Twin Engine Jet?",
    options: [
      "Boeing 777X",
      "Boeing 737 max",
      "Boeing 999X",
      "None of these"
    ],
    answer: "Boeing 777X"
  },
  {
    numb: 23,
    question: "Name the bird that migrates from the North Pole to the South Pole and back?",
    options: [
      "Sparrow",
      "Pigeon",
      "Crow",
      "Arctic tern"
    ],
    answer: "Arctic tern"
  },
  {
    numb: 24,
    question: "Name the capital city of Switzerland?",
    options: [
      "Denver",
      "Bern",
      "Oslo",
      "Antwerp"
    ],
    answer: "Bern"
  },
  {
    numb: 25,
    question: "Napoleon Bonaparte was a ____ military and political leader.",
    options: [
      "Austrian",
      "German",
      "French",
      "American"
    ],
    answer: "French"
  },
  {
    numb: 26,
    question: "NATO also known as_________?",
    options: [
      "Defense Treaty",
      "Washington Treaty",
      "Geneva Treaty",
      "Warsaw Treaty"
    ],
    answer: "Washington Treaty"
  },
  {
    numb: 27,
    question: "Nicosia is the capital of which country ____?",
    options: [
      "Denmark",
      "Dominica",
      "Cyprus",
      "N.O.T"
    ],
    answer: "Cyprus"
  },
  {
    numb: 28,
    question: "NPT stands for__________?",
    options: [
      "Non-Poliferation Treaty",
      "National Protection Treaty",
      "Non-Resident Protection Treaty",
      "National Purification Treaty"
    ],
    answer: "Non-Poliferation Treaty"
  },
  {
    numb: 29,
    question: "NSO is the secret agency of which country?",
    options: [
      "Niger",
      "Nigeria",
      "Algeria",
      "Bulgharia"
    ],
    answer: "Nigeria"
  },
  {
    numb: 30,
    question: "Oldest bank in the world is located in__________?",
    options: [
      "UK",
      "Spain",
      "Italy",
      "China"
    ],
    answer: "Italy"
  }
];

// Further code for quiz logic goes here...
