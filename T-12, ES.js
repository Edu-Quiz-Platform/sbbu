// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "Which part of the Camera is analogue to the retina in the human eye?",
    answer: "Film",
    options: [
      "Lens",
      "Film",
      "Aperture",
      "Shutter"
    ]
  },
  {
    numb: 2,
    question: "T.V. transmission cannot cover a very large area because.",
    answer: "the shape of the earth is spherical",
    options: [
      "the strength of T.V. waves is very limited",
      "picture cannot be transmitted clearly after a specific distance",
      "the shape of the earth is spherical",
      "the air is not a good conductor of light and sound/waves"
    ]
  },
  {
    numb: 3,
    question: "Water is a highly effective coolant for a car engine because ______?",
    answer: "Water has very high specific heat capacity",
    options: [
      "Water is good conductor of heat",
      "Water has very high specific heat capacity",
      "Water boils at a comparatively high temperature",
      "Evaporation of water produces lot of cooling"
    ]
  },
  {
    numb: 4,
    question: "The theory of Expanding Universe was first propounded by_________?",
    answer: "Hubble",
    options: [
      "Einstein",
      "Newton",
      "Gahleo",
      "Hubble"
    ]
  },
  {
    numb: 5,
    question: "The dominant phase of life cycle in these organism is haploid?",
    answer: "Mosses",
    options: [
      "Mosses",
      "Bacteria",
      "Protozoa",
      "N.O.T"
    ]
  },
  {
    numb: 6,
    question: "The earth’s ___________ is divided into 15 major plates of various sizes.",
    answer: "Lithosphere",
    options: [
      "Mesosphere",
      "Stratosphere",
      "Lithosphere",
      "N.O.T"
    ]
  },
  {
    numb: 7,
    question: "Geiger-Muller counter is used to detect__________?",
    answer: "Protons",
    options: [
      "Protons",
      "Neutrons",
      "Photons",
      "N.O.T"
    ]
  },
  {
    numb: 8,
    question: "Which of these is not a region of the spinal cord?",
    answer: "Pelvic",
    options: [
      "Thoracic",
      "Pelvic",
      "Lumbar",
      "N.O.T"
    ]
  },
  {
    numb: 9,
    question: "A tight-rope walker carries a long pole which he holds across his body. The purpose of this pole is to_______?",
    answer: "To keep the Center of gravity always above vertically above the rope",
    options: [
      "Prop him up if he falls",
      "Spread out his weight and reduce the pressure on the rope",
      "Add extra weight to keep the rope tightly stretched",
      "To keep the Center of gravity always above vertically above the rope"
    ]
    },
  {
    numb: 10,
    question: "The protons and neutrons are found in the center of the atom, which is called the ________of the atom?",
    answer: "Nucleus",
    options: [
      "Nucleus",
      "Hub",
      "Headquarters",
      "N.O.T"
    ]
  },
  {
    numb: 11,
    question: "Vertebral Column in human beings consists of how many vertebrae?",
    answer: "33",
    options: [
      "5",
      "10",
      "20",
      "33"
    ]
  },
  {
    numb: 12,
    question: "which of these plants open its mouth when insect sit on its lid?",
    answer: "Pitcher plant",
    options: [
      "Sunflower",
      "Pitcher plant",
      "Brassica Plant",
      "N.O.T"
    ]
  },
  {
    numb: 13,
    question: "Short-sight defect could be corrected by a __________ lens?",
    answer: "concave lens",
    options: [
      "concave lens",
      "convex lens",
      "converging lens",
      "N.O.T"
    ]
  },
  {
    numb: 14,
    question: "Sunlight is a Great Source of __________?",
    answer: "vitamin D",
    options: [
      "vitamin C",
      "vitamin D",
      "vitamin E",
      "vitamin K"
    ]
  },
  {
    numb: 15,
    question: "Current stage of star ‘Sun’ is__________?",
    answer: "yellow dwarf",
    options: [
      "white dwarf",
      "red giant",
      "yellow dwarf",
      "orange dwarf"
    ]
  },
  {
    numb: 16,
    question: "The pancreas secrets________?",
    answer: "Insulin",
    options: [
      "Insulin",
      "Vitamin A",
      "Bile juice",
      "N.O.T"
    ]
  },
  {
    numb: 17,
    question: "When a star becomes a singularity and has zero volume and infinite density, it is called ___________?",
    answer: "Black hole",
    options: [
      "White dwarf",
      "Blue giant",
      "Wolf-Raynet star",
      "Black hole"
    ]
  },
  {
    numb: 18,
    question: "Which one is the brightest star in the night sky?",
    answer: "Sirius",
    options: [
      "Betelgeuse",
      "Rigel",
      "Sirius",
      "Polaris"
    ]
  },
  {
    numb: 19,
    question: "Which of the following is a substance?",
    answer: "Graphite",
    options: [
      "Sea water",
      "Brass",
      "Tape water",
      "Graphite"
    ]
  },
  {
    numb: 20,
    question: "All of the following are electromagnetic radiations except_______?",
    answer: "Sound waves",
    options: [
      "Red light",
      "X-Rays",
      "Sound waves",
      "Photon"
    ]
  },
  {
    numb: 21,
    question: "The ‘stone’ formed in human kidney consist mostly of__________?",
    answer: "Calcium oxalate",
    options: [
      "Calcium oxalate",
      "Sodium acetate",
      "Magnesium sulphate",
      "Calcium"
    ]
  },
  {
    numb: 22,
    question: "Afternoon rains in the equatorial region are the result of influences _______?",
    answer: "Convectional",
    options: [
      "Land Breeze",
      "Monsoon",
      "Frontal",
      "Convectional"
    ]
  },
  {
    numb: 23,
    question: "Bore is caused by______?",
    answer: "Rising tide while meeting river currents",
    options: [
      "Rising tide while meeting river currents",
      "Friction from prevailing winds",
      "Spring tide and strong winds",
      "Unequal heating of oceans"
    ]
  },
  {
    numb: 24,
    question: "Which Vitamin gets destroyed on heating?",
    answer: "C",
    options: [
      "B",
      "E",
      "K",
      "C"
    ]
  },
  {
    numb: 25,
    question: "What is the element required for solar energy conversion ______?",
    answer: "Silicon",
    options: [
      "Ultra pure carbon",
      "Silicon",
      "Beryllium",
      "Tantalum"
    ]
  },
  {
    numb: 26,
    question: "Which among the following is responsible for producing color of human skin ___?",
    answer: "Melanin",
    options: [
      "Insulin",
      "Vitamin K",
      "Melanin",
      "DNA"
    ]
  },
  {
    numb: 27,
    question: "Sum of all ecosystems is classified as___________?",
    answer: "Biosphere",
    options: [
      "Aero sphere",
      "Ionosphere",
      "Ozonosphere",
      "Biosphere"
    ]
  },
  {
    numb: 28,
    question: "Big Bang was an explosion that occurred ?",
    answer: "15 Billion years ago",
    options: [
      "10 Billion years ago",
      "15 Billion years ago",
      "20 Billion years ago",
      "25 Billion years ago"
    ]
  },
  {
    numb: 29,
    question: "What is the height of The atmosphere layer mesosphere?",
    answer: "85 km",
    options: [
      "10 km",
      "40 km",
      "50 km",
      "85 km"
    ]
  },
  {
    numb: 30,
    question: "Which of the following conditions related to smoking involves damage to the alveoli sacs?",
    answer: "Emphysema",
    options: [
      "Lung Cancer",
      "Atherosclerosis",
      "Emphysema",
      "Asthma"
    ]
  },
];
