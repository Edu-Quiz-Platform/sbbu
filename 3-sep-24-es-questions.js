// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Siemens is the unit of__________________?",
    answer: "Electrical Conductance",
    options: [
      "Electrical Conductance",
      "Magnetic Conductance",
      "Electrical Capacitance",
      "Magnetic Capacitance"
    ]
  },
  {
    numb: 2,
    question: "An example of an abiotic component __________? ",
    answer: "Soil",
    options: [
      "Plants",
      "Animals",
      "Soil",
      "Bacteria"
    ]
  },
  {
    numb: 3,
    question: "Spring tides occur on new moon and full moon days because on these days_____________?",
    answer: "Sun, moon and earth are in a straight line",
    options: [
      "Sun and earth are at right angles",
      "Sun and moon are at right angles",
      "Earth and moon are at right angles",
      "Sun, moon and earth are in a straight line"
    ]
  },
  {
    numb: 4,
    question: "Hailey’s comet is visible after every_________? ",
    answer: "76 years",
    options: [
      "76 years",
      "84 years ",
      "100 years ",
      "365 years "
    ]
  },
  {
    numb: 5,
    question: "The gravitational pull at the lunar surface is ________ of Earth? ",
    answer: "1/6",
    options: [
      "1/3",
      "1/4",
      "1/5 ",
      "1/6"
    ]
  },
  {
    numb: 6,
    question: "The strongest part(s) of a magnet is/are _________? ",
    answer: "North and south pole",
    options: [
      "North pole",
      "South pole",
      "North and south pole",
      "Median of north and south pole"
    ]
  },
  {
    numb: 7,
    question: "Which element is used as moderator in nuclear reactor? ",
    answer: "Heavy water",
    options: [
      "Heavy water",
      "Light water",
      "Dense water",
      "Fresh water"
    ]
  },
  {
    numb: 8,
    question: "What is the effect of height increase over temperature?",
    answer: "Temperature decrease",
    options: [
      "Temperature increase",
      "Temperature decrease",
      "Remains constant",
      "N.O.T"
    ]
  },
  {
    numb: 9,
    question: "In which layer of atmosphere does commercial aircrafts usually fly?",
    answer: "Stratosphere",
    options: [
      "Stratosphere",
      "Troposphere",
      "Mesosphere",
      "Thermosphere"
    ]
    },
  {
    numb: 10,
    question: "Vitamin C deficiency leads to:____________? ",
    answer: "Scurvy",
    options: [
      "Cancer",
      "Cold",
      "Scurvy",
      "Rickets"
    ]
  },
  {
    numb: 11,
    question: "One Quintal is Equal to___________? ",
    answer: "100 kg",
    options: [
      "70 kg",
      "80 kg",
      "90 kg",
      "100 kg"
    ]
  },
  {
    numb: 12,
    question: "The melting point of ice is_________? ",
    answer: "00 C",
    options: [
      "00 C",
      "40 C",
      "- 40 C",
      "1000 C"
    ]
  },
  {
    numb: 13,
    question: "In 2013, Planck measured the age of the universe at ___________?",
    answer: "13.82 billion years",
    options: [
      "4.53 billion years",
      "4.60 billion years",
      "4.73 billion years ",
      "13.82 billion years"
    ]
  },
  {
    numb: 14,
    question: "Moon is a__________? ",
    answer: "Satellite",
    options: [
      "Star",
      "Planet",
      "Satellite",
      "A & B "
    ]
  },
  {
    numb: 15,
    question: "Density of Water is_________? ",
    answer: "997 kg/m³",
    options: [
      "897 kg/m³",
      "997 kg/m³",
      "1000 kg/m³",
      "1025 kg/m³ "
    ]
  },
  {
    numb: 16,
    question: "According to Einsteins general theory of relativity the universe:________________?",
    answer: "Must be either expanding or contracting",
    options: [
      "Must be expanding",
      "Must be contracting",
      "Must be either expanding or contracting",
      "Must be neither expanding nor contracting"
    ]
  },
  {
    numb: 17,
    question: "Pressure is measured by_________? ",
    answer: "barometer",
    options: [
      "barometer",
      "Voltmeter",
      "Lactometer",
      "Ammeter"
    ]
  },
  {
    numb: 18,
    question: "Primary cosmic rays are composed largely of very fast__________? ",
    answer: "Protons",
    options: [
      "Neutrons",
      "Protons",
      "Electrons",
      "Gamma rays"
    ]
  },
  {
    numb: 19,
    question: "What do you understand by disease “Insomnia”? ",
    answer: "Inability to sleep ",
    options: [
      "Color blindness",
      "Depression",
      "Hypertension",
      "Inability to sleep "
    ]
  },
  {
    numb: 20,
    question: "How many rows and columns are in the modern Periodic Table?",
    answer: "18 columns and 7 rows",
    options: [
      "7 columns and 18 rows",
      "12 columns and 9 rows",
      "18 columns and 7 rows",
      "25 columns and 15 rows"
    ]
  },
  {
    numb: 21,
    question: "What melted rock eventually becomes lava? ",
    answer: "Magma",
    options: [
      "Magma",
      "Iron",
      "Metals",
      "Coal"
    ]
  },
  {
    numb: 22,
    question: "Material for rain-proof coats and tents owe their water proof properties to ________?",
    answer: "Surface tension ",
    options: [
      "Specific gravity",
      "Viscosity",
      "Elasticity",
      "Surface tension "
    ]
  },
  {
    numb: 23,
    question: "A man is standing on a weighing machine in a lift which is moving. The weighing machine will slow MINIMUM reading when, the lift is moving?",
    answer: "1",
    options: [
      "Upward with uniform speed",
      "Downward with uniform acceleration",
      "In a free fall due to failure of the lift mechanism",
      "N.O.T"
    ]
  },
  {
    numb: 24,
    question: "Nitrogen occurs in plant and animals in the form of ___________? ",
    answer: "Proteins",
    options: [
      "Minerals",
      "Fats",
      "Carbohydrates",
      "Proteins"
    ]
  },
  {
    numb: 25,
    question: "The large plates of solar panels are painted? ",
    answer: "Black",
    options: [
      "Yellow",
      "Red",
      "Black",
      "White"
    ]
  },
  {
    numb: 26,
    question: "Sound travels_______ in solid materials then liquid? ",
    answer: "Fastest",
    options: [
      "Constant",
      "Fastest",
      "Slowest",
      "N.O.T"
    ]
  },
  {
    numb: 27,
    question: "Which variety of glass is heat resistant? ",
    answer: "Pyrex glass ",
    options: [
      "Bottle glass ",
      "Flint glass ",
      "Hard glass",
      "Pyrex glass "
    ]
  },
  {
    numb: 28,
    question: "Which of the following is the most toxic gas? ",
    answer: "Carbon monoxide",
    options: [
      "Carbon dioxide",
      "Carbon monoxide ",
      "Nitrogen",
      "Hydrogen"
    ]
  },
  {
    numb: 29,
    question: "The element used in lead pencils is__________? ",
    answer: "Carbon",
    options: [
      "Zinc",
      "Lead",
      "Carbon",
      "Tin"
    ]
  },
  {
    numb: 30,
    question: "Calculus was invented by________? ",
    answer: "IsaaC Newton",
    options: [
      "Al-khawarzimi",
      "IsaaC Newton",
      "Pythagoras",
      "Al.kindi"
    ]
  },
];