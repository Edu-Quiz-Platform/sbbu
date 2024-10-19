// Array of questions with options and correct answers
const questions = [
    {
    numb: 161,
    question: "The Book 'A Farewell to Arms' was written by ____?",
    answer: "Ernest Hemingway",
    options: [
      "Ernest Hemingway",
      "Charles Dickens",
      "Huxley",
      "Thomas Hardy"
    ]
  },
  {
    numb: 162,
    question: "The book 'Emile or On Education' on the nature of education and man is written by ____?",
    answer: "Rousseau",
    options: [
      "Aristotle",
      "Plato",
      "John Dewey",
      "Rousseau"
    ]
  },
  {
    numb: 163,
    question: "The border between USA and Canada is officially known as ____?",
    answer: "International boundary",
    options: [
      "37th Parallel line",
      "38th Parallel line",
      "Hindenburg line",
      "International boundary"
    ]
  },
  {
    numb: 164,
    question: "The capital of Argentina is ____?",
    answer: "Buenos Aires",
    options: [
      "Canberra",
      "Yerevan",
      "Luanda",
      "Buenos Aires"
    ]
  },
  {
    numb: 165,
    question: "The capital of Czech Republic is ____?",
    answer: "Prague",
    options: [
      "Nicosia",
      "Dublin",
      "Bern",
      "Prague"
    ]
  },
  {
    numb: 166,
    question: "The capital of Maldives is ____?",
    answer: "Male",
    options: [
      "Male",
      "Abuja",
      "Thimphu",
      "N.O.T"
    ]
  },
  {
    numb: 167,
    question: "The Capital of Samoa is ____?",
    answer: "Apia",
    options: [
      "Mayotte",
      "Caracas",
      "Montevideo",
      "Apia"
    ]
  },
  {
    numb: 168,
    question: "The country whose national anthem has only music, no words is ____?",
    answer: "Bahrain",
    options: [
      "Bahrain",
      "Chile",
      "Greece",
      "Albania"
    ]
  },
  {
    numb: 169,
    question: "The driest desert in the world is ____?",
    answer: "Atacama Desert",
    options: [
      "Sahara Desert",
      "Cholistan Desert",
      "Arabian Desert",
      "Atacama Desert"
    ]
  },
  {
    numb: 170,
    question: "The eradication of poverty day is internationally observed on ____?",
    answer: "October 17",
    options: [
      "October 16",
      "October 17",
      "October 18",
      "October 19"
    ]
  },
  {
    numb: 171,
    question: "The famous book 'Al-Qanun' was written by the Muslim scientist ____?",
    answer: "Abu Ali Sina",
    options: [
      "Jabar bin Hayyan",
      "Zakariya Al-Razi",
      "Abu Ali Sina",
      "Abdul Qasim Majreeti"
    ]
  },
  {
    numb: 172,
    question: "The fastest marine animal found in warmer parts of five oceans of the world is ____?",
    answer: "Sailfish",
    options: [
      "Tunny",
      "Wahoo",
      "Sailfish",
      "Marlin"
    ]
  },
  {
    numb: 173,
    question: "The first artificial satellite on earth is ____?",
    answer: "Sputnik I",
    options: [
      "Sputnik I",
      "Giotto",
      "Prithvi",
      "Gaia"
    ]
  },
  {
    numb: 174,
    question: "The first bank note was originated in China. What was it known as at the time of invention?",
    answer: "Flying money",
    options: [
      "Papernote",
      "Flying money",
      "Currency",
      "Banknote"
    ]
  },
  {
    numb: 175,
    question: "The first English Dictionary was compiled by ____?",
    answer: "Samuel Johnson",
    options: [
      "Isaac Walton",
      "Samuel Johnson",
      "Samuel Butler",
      "Sir Thomas Browne"
    ]
  },
  {
    numb: 176,
    question: "The first person to draw the map of earth is ____?",
    answer: "Anaximander",
    options: [
      "Heraclitus",
      "Pythagoras",
      "Anaximander",
      "Thales"
    ]
  },
  {
    numb: 177,
    question: "The first season of PSL took place on ____?",
    answer: "4th Feb 2016",
    options: [
      "4th Jan 2016",
      "4th Mar 2016",
      "4th Feb 2016",
      "4th May 2017"
    ]
  },
  {
    numb: 178,
    question: "The first woman elected to head an African country in 2006 was ____?",
    answer: "Ellen Johnson",
    options: [
      "Ellen Johnson",
      "Graca Machel",
      "Winnie Mandela",
      "Helen Zille"
    ]
  },
  {
    numb: 179,
    question: "The Former Iraqi President Saddam Hussein was captured near his hometown of Tikrit on ____?",
    answer: "13 December 2003",
    options: [
      "13 December 2003",
      "14 December 2004",
      "15 November 2005",
      "N.O.T"
    ]
  },
  {
    numb: 180,
    question: "The headquarter of EFTA is in ____?",
    answer: "Geneva",
    options: [
      "London",
      "Geneva",
      "Rome",
      "Paris"
    ]
  },
  {
    numb: 181,
    question: "The headquarter of Food and Agriculture Organization (FAO) is in ____?",
    answer: "Rome, Italy",
    options: [
      "Rome, Italy",
      "Paris, France",
      "New York, US",
      "N.O.T"
    ]
  },
  {
    numb: 182,
    question: "The Headquarters of Twitter is located in ____?",
    answer: "San Francisco",
    options: [
      "San Francisco",
      "New York",
      "Paris",
      "Geneva"
    ]
  },
  {
    numb: 183,
    question: "The headquarters of World Intellectual Property Organization (WIPO) is in ____?",
    answer: "Geneva",
    options: [
      "Paris",
      "Madrid",
      "New York",
      "Geneva"
    ]
  },
  {
    numb: 184,
    question: "The International Day of Forests is observed every year on ____?",
    answer: "March 21",
    options: [
      "March 21",
      "March 22",
      "March 23",
      "March 24"
    ]
  },
  {
    numb: 185,
    question: "The land of hospitality is ____?",
    answer: "KPK",
    options: [
      "KPK",
      "Sindh",
      "Baluchistan",
      "Punjab"
    ]
  },
  {
    numb: 186,
    question: "The largest automobile manufacturing center in the world is located at ____?",
    answer: "Detroit",
    options: [
      "Detroit",
      "Tokyo",
      "Birmingham",
      "Berlin"
    ]
  },
  {
    numb: 187,
    question: "The largest opium producer province of Afghanistan is ____?",
    answer: "Helmand",
    options: [
      "Helmand",
      "Paktia",
      "Herat",
      "Nangarhar"
    ]
  },
  {
    numb: 188,
    question: "The largest planet of the solar system is ____?",
    answer: "Jupiter",
    options: [
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn"
    ]
  },
  {
    numb: 189,
    question: "The main function of the judiciary is ____?",
    answer: "Law adjudication",
    options: [
      "Law formulation",
      "Law adjudication",
      "Law execution",
      "Law application"
    ]
  },
  {
    numb: 190,
    question: "The most rainiest place in the world is ____?",
    answer: "Mawsynram, India",
    options: [
      "Mawsynram, India",
      "Cherrapunji, India",
      "Tutendo, Colombia",
      "Emei Shan, China"
    ]
  }
]