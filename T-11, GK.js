// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Basman Palace is the official residence of___________?",
    answer: "King of Jordan",
    options: [
      "King of Nepal",
      "King of Jordan",
      "King of Oman",
      "King of Saudi Arabia"
    ]
  },
  {
    numb: 2,
    question: "Battle of Gallipoli resulted in the victory of __________?",
    answer: "Turkey",
    options: [
      "Ottomans",
      "Allied Powers",
      "Turkey",
      "England"
    ]
  },
  {
    numb: 3,
    question: "BERNAMA is the news agency of __________ ?",
    answer: "Malaysia",
    options: [
      "Malaysia",
      "Indonesia",
      "South Africa",
      "USA"
    ]
  },
  {
    numb: 4,
    question: "Black Pool is a __________ in England?",
    answer: "Resort",
    options: [
      "Hotel",
      "Island",
      "Tower",
      "Resort"
    ]
  },
  {
    numb: 5,
    question: "Braathens airline belong to which Country?",
    answer: "Norway",
    options: [
      "Swedon",
      "Norway",
      "Iceland",
      "Uraguay"
    ]
  },
  {
    numb: 6,
    question: "Building of the Supreme Court in Islamabad was designed by a _________ architect?",
    answer: "Japanese",
    options: [
      "Japanese",
      "Turkish",
      "Greek",
      "Pakistani"
    ]
  },
  {
    numb: 7,
    question: "Capital of Chechnya is _________?",
    answer: "Grozny",
    options: [
      "Paris",
      "Moscow",
      "Grozny",
      "N.O.T"
    ]
  },
  {
    numb: 8,
    question: "Cetology is the study of__________?",
    answer: "Whales and Dolphins",
    options: [
      "Whales and Dolphins",
      "seas and Oceans",
      "Mountains",
      "Deserts"
    ]
  },
  {
    numb: 9,
    question: "China-Pakistan Economic Corridor (CPEC) starts at __________?",
    answer: "Kashgar",
    options: [
      "Beijing",
      "Kashgar",
      "Shanghai",
      "Xinjiang"
    ]
    },
  {
    numb: 10,
    question: "CT Scan stand for__________?",
    answer: "Computed Tomography Scan",
    options: [
      "Computed Tomography Scan",
      "Computer Topography Scan",
      "Computed Topography Scan",
      "Computer Tomography Scan"
    ]
  },
  {
    numb: 11,
    question: "Currency of France is ____________?",
    answer: "Euro",
    options: [
      "Dollar",
      "Euro",
      "Riyal",
      "Pound"
    ]
  },
  {
    numb: 12,
    question: "Current Director General of International Organization of Migration is?",
    answer: "Antonio Vitorino",
    options: [
      "Joseph Henderson",
      "William Lacy",
      "William Lee",
      "Antonio Vitorino"
    ]
  },
  {
    numb: 13,
    question: "Dar es Salaam was former capital of__________?",
    answer: "Tanzania",
    options: [
      "Nepal",
      "Albania",
      "Tanzania",
      "Egypt"
    ]
  },
  {
    numb: 14,
    question: "Darul Uloom Deoband was founded in________?",
    answer: "31 May 1866",
    options: [
      "31 May 1866",
      "31 June 1867",
      "31 July 1868",
      "31 August 1869"
    ]
  },
  {
    numb: 15,
    question: "Dialysis is used for the treatment of ?",
    answer: "Kidney failure",
    options: [
      "Heart Weakness",
      "Kidney failure",
      "Brain diseases",
      "N.O.T"
    ]
  },
  {
    numb: 16,
    question: "Duckworth Lewis method in cricket was introduced after 1992 Cricket World Cup by___________?",
    answer: "Both A & B",
    options: [
      "Frank Duckworth",
      "Tony Lewis",
      "Jhon Lewis & Allen Duckworth",
      "Both A & B"
    ]
  },
  {
    numb: 17,
    question: "Durand Cup is associated with the game of __________?",
    answer: "Football",
    options: [
      "Football",
      "Squash",
      "Volleyball",
      "Table Tennis"
    ]
  },
  {
    numb: 18,
    question: "During the first trip of Donald Trump to Saudi Arabia, the two countries signed a ________ arms deal?",
    answer: "$110 billion",
    options: [
      "$50 billion",
      "$80 billion",
      "$100 billion",
      "$110 billion"
    ]
  },
  {
    numb: 19,
    question: "Each year the International Day of Peace is observed around the world on _________?",
    answer: "21 September",
    options: [
      "24 May",
      "215 July",
      "21 September",
      "18 October"
    ]
  },
  {
    numb: 20,
    question: "Earth’s largest ice volume is present in ___________?",
    answer: "Antarctica",
    options: [
      "Antarctica",
      "Himalayas",
      "South America",
      "North America"
    ]
  },
  {
    numb: 21,
    question: "Eden of Sindh is called_________?",
    answer: "Larkana",
    options: [
      "Hyderabad",
      "Karachi",
      "Larkana",
      "Sukkur"
    ]
  },
  {
    numb: 22,
    question: "Ernesto”Che”Guevara was a famous revolutionary guerrilla fighter to which country did he belong?",
    answer: "Argentina",
    options: [
      "Bolivia",
      "USA",
      "Cuba",
      "Argentina"
    ]
  },
  {
    numb: 23,
    question: "Eyeglasses are invented in Italy in________?",
    answer: "1286",
    options: [
      "1286",
      "1386",
      "1486",
      "1586"
    ]
  },
  {
    numb: 24,
    question: "Favourite place for Hollywood film production is?",
    answer: "Los Angeles",
    options: [
      "Virginia",
      "Los Angeles",
      "Hawaii",
      "New Jersey"
    ]
  },
  {
    numb: 25,
    question: "February 14 is known as _________ ?",
    answer: "Valentine Day",
    options: [
      "World Health Day",
      "Earth Day",
      "World Meteorological Day",
      "Valentine Day"
    ]
  },
  {
    numb: 26,
    question: "FIFA was founded in_________?",
    answer: "1904",
    options: [
      "1904",
      "1908",
      "1912",
      "1916"
    ]
  },
  {
    numb: 27,
    question: "Financial Action Task Force (FATF) was founded in which year?",
    answer: "1989",
    options: [
      "1979",
      "1989",
      "1997",
      "1998"
    ]
  },
  {
    numb: 28,
    question: "FIR stands for ___________?",
    answer: "First Information Report",
    options: [
      "Final Information Report",
      "First Information Report",
      "Fact Interrogation Report",
      "Field Information Report"
    ]
  },
  {
    numb: 29,
    question: "Fire temple is the place of worship of which of the following religion ?",
    answer: "Zoroastrianism (Parsi Religion)",
    options: [
      "Zoroastrianism (Parsi Religion)",
      "Taoism",
      "Judaism",
      "Shintoism"
    ]
  },
  {
    numb: 30,
    question: "First Afghan War took place in ?",
    answer: "1839",
    options: [
      "1838",
      "1837",
      "1839",
      "1840"
    ]
  },
];