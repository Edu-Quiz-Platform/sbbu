// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The atmosphere near the earth’s surface is “heated from below.” Which of the following does not significantly contribute to this heating?",
    answer: "Heat energy from the earth’s interior",
    options: [
      "Conduction of heat upward from a hot surface",
      "Convection from a hot surface",
      "Absorption of infrared energy that has been radiated from the surface",
      "Heat energy from the earth’s interior"
    ]
  },
  {
    numb: 2,
    question: "The temperature at which water boils depends mainly on?",
    answer: "Air pressure",
    options: [
      "Air temperature",
      "Relative humidity",
      "Air pressure",
      "Air density"
    ]
  },
  {
    numb: 3,
    question: "“Elephant” large unit of paper measurement equal to 28 by?",
    answer: "23 inches",
    options: [
      "23 inches",
      "25 inches",
      "28 inches",
      "31 inches"
    ]
  },
  {
    numb: 4,
    question: "The top atmosphere of the Earth directly reflects back into space nearly what part of the total amount of sun’s energy coming to it?",
    answer: "30%",
    options: [
      "10%",
      "20%",
      "30%",
      "50%"
    ]
  },
  {
    numb: 5,
    question: "Which of the following is the largest planet?",
    answer: "Jupiter",
    options: [
      "Neptune",
      "Jupiter",
      "Saturn",
      "Mars"
    ]
  },
  {
    numb: 6,
    question: "Study of current and past landscapes formation is known as?",
    answer: "Geo-morphology",
    options: [
      "Morphology",
      "Aero logy",
      "Geo-morphology",
      "Biology"
    ]
  },
  {
    numb: 7,
    question: "The most brightest planet amongst the eight planets?",
    answer: "Venus",
    options: [
      "Mercury",
      "Jupiter",
      "Venus",
      "Neptune"
    ]
  },
  {
    numb: 8,
    question: "Battery was invented by?",
    answer: "Alessandro Volta",
    options: [
      "Nicolas Léonard Sadi Carnot",
      "Alessandro Volta",
      "Michael Faraday",
      "Friedrich Bessel"
    ]
  },
  {
    numb: 9,
    question: "Microphone converts sound energy into?",
    answer: "Electrical signals",
    options: [
      "Microwaves",
      "Electrical signals",
      "Optical Signals",
      "Heat energy"
    ]
  },
  {
    numb: 10,
    question: "What are stars mainly made of?",
    answer: "Balls of gas",
    options: [
      "Balls of gas",
      "Rock",
      "Ice",
      "Light"
    ]
  },
  {
    numb: 11,
    question: "Approximate age of the moon is?",
    answer: "4.53 billion years",
    options: [
      "4.51 billion years",
      "4.55 billion years",
      "4.53 billion years",
      "4.57 billion years"
    ]
  },
  {
    numb: 12,
    question: "The vitamin Folate works together with __________ to produce new red blood cells?",
    answer: "Vitamin B-12",
    options: [
      "Vitamin D",
      "Vitamin A",
      "Vitamin B-12",
      "None of the above"
    ]
  },
  {
    numb: 13,
    question: "The Mirror used in the Automobiles are?",
    answer: "Convex",
    options: [
      "Concave",
      "Convex",
      "Plains",
      "Reflective"
    ]
  },
  {
    numb: 14,
    question: "‘Bar’ is the unit of?",
    answer: "Atmospheric pressure",
    options: [
      "Temperature",
      "Heat",
      "Atmospheric pressure",
      "Current"
    ]
  },
  {
    numb: 15,
    question: "Why normal rain is slightly acidic?",
    answer: "Carbon dioxide and water in clouds react to form carbonic acid",
    options: [
      "Due to presence of dust in air",
      "Carbon dioxide and water in clouds react to form carbonic acid",
      "Ozone depletion",
      "All of these"
    ]
  },
  {
    numb: 16,
    question: "The scientific study of insects is known as?",
    answer: "Entomology",
    options: [
      "Ichthyology",
      "Entomology",
      "Zoology",
      "Botany"
    ]
  },
  {
    numb: 17,
    question: "The Temperature of the surface of the Sun is?",
    answer: "5,778 Kelvin",
    options: [
      "5,778 Kelvin",
      "6,778 Kelvin",
      "7,778 Kelvin",
      "9,778 Kelvin"
    ]
  },
  {
    numb: 18,
    question: "The Sun is at an average distance of about________ million kilometers away from Earth?",
    answer: "150 million",
    options: [
      "100 million",
      "150 million",
      "200 million",
      "250 million"
    ]
  },
  {
    numb: 19,
    question: "For which one of the following is the density maximum?",
    answer: "Water",
    options: [
      "Ice",
      "Water",
      "Benzene",
      "Chloroform"
    ]
  },
  {
    numb: 20,
    question: "Inhaled air passes through which of the following in the last?",
    answer: "Bronchiole",
    options: [
      "Bronchiole",
      "Larynx",
      "Pharynx",
      "Trachea"
    ]
  },
  {
    numb: 21,
    question: "Winter Solstice means?",
    answer: "Longest night",
    options: [
      "Longest night",
      "Longest day",
      "Smallest night",
      "Smallest day"
    ]
  },
  {
    numb: 22,
    question: "Who is the founder of the solar system?",
    answer: "Copernicus",
    options: [
      "Copernicus",
      "Newton",
      "Galileo",
      "Kepler"
    ]
  },
  {
    numb: 23,
    question: "The study of the weather is called?",
    answer: "Meteorology",
    options: [
      "Meteorology",
      "Weatherology",
      "Ecology",
      "Geology"
    ]
  },
  {
    numb: 24,
    question: "Vitamin B is found in?",
    answer: "Seeds",
    options: [
      "Sea Foods",
      "Fruits and Vegetables",
      "Seeds",
      "None of these"
    ]
  },
  {
    numb: 25,
    question: "During a total solar eclipse, there is most likely to be?",
    answer: "A decrease in the rate of photosynthesis",
    options: [
      "A decrease in the rate of photosynthesis",
      "An increase in the rate of photosynthesis",
      "A decrease in the rate of respiration",
      "No effect on either photosynthesis or respiration"
    ]
  },
  {
    numb: 26,
    question: "The second most abundant metal found in the earth’s crust is?",
    answer: "Silicon",
    options: [
      "Silicon",
      "Aluminium",
      "Calcium",
      "Sodium"
    ]
  },
  {
    numb: 27,
    question: "In the electricity meter, the digit to the extreme right is?",
    answer: "1/10th of the unit",
    options: [
      "1/5th of the unit",
      "1/100 of the unit",
      "1/10th of the unit",
      "1/1000th of the unit"
    ]
  },
  {
    numb: 28,
    question: "Saliva contains?",
    answer: "Amylases",
    options: [
      "Amylases",
      "Bite",
      "Trypsin",
      "None of these"
    ]
  },
  {
    numb: 29,
    question: "Nail polish remover contains?",
    answer: "Acetone",
    options: [
      "Acetone",
      "Benzene",
      "Acetic acid",
      "Petroleum ether"
    ]
  },
  {
    numb: 30,
    question: "Earth rotates the sun in?",
    answer: "23 hours 56 min 4 sec",
    options: [
      "23 hours 56 min 4 sec",
      "24 hours",
      "23 hours 57 min 9 sec",
      "None of above"
    ]
  }
];
