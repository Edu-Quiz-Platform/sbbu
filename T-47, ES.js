// Array of questions with options and correct answers
const questions = [
{
    "numb": 1,
    "question": "Biopsy is done on tissues taken from__________?",
    "answer": "Living body",
    "options": [
      "Human body",
      "Animal body",
      "Living body",
      "Dead body"
    ]
  },
  {
    "numb": 2,
    "question": "The Planet which revolves slowly around the Sun is__________?",
    "answer": "Neptune",
    "options": [
      "Mercury",
      "Mars",
      "Earth",
      "Neptune"
    ]
  },
  {
    "numb": 3,
    "question": "Animals use nitrogen in the form of_________?",
    "answer": "Nitrites",
    "options": [
      "Nitrogen",
      "Nitrates",
      "Nitrites",
      "None of Above"
    ]
  },
  {
    "numb": 4,
    "question": "Who is known as the father of taxonomy?",
    "answer": "Carolus Linnaeus",
    "options": [
      "Aristotle",
      "Fransco Redi",
      "Carolus Linnaeus",
      "Rachel Carson"
    ]
  },
  {
    "numb": 5,
    "question": "Who discovered blood circulation?",
    "answer": "William Harvey",
    "options": [
      "Carl Linnaeus",
      "Francis Crick",
      "Robert Brown",
      "William Harvey"
    ]
  },
  {
    "numb": 6,
    "question": "What is the name of the gas used in an air conditioner?",
    "answer": "Freon",
    "options": [
      "Ammonia",
      "Nitrous oxide",
      "Freon",
      "CO2"
    ]
  },
  {
    "numb": 7,
    "question": "Which law states that the rate of effusion of a gas is inversely proportional to the square root of its density?",
    "answer": "Graham’s Law",
    "options": [
      "Graham’s Law",
      "Gay-Lussac’s law",
      "Boyle’s law",
      "None of these"
    ]
  },
  {
    "numb": 8,
    "question": "______ soil is also called Regur soil?",
    "answer": "Black",
    "options": [
      "Desert",
      "Mountain",
      "Black",
      "Alluvial"
    ]
  },
  {
    "numb": 9,
    "question": "The heaviest man-made element found so far is__________?",
    "answer": "Ununoctium",
    "options": [
      "Promethium",
      "Ununoctium",
      "Francium",
      "Technetium"
    ]
  },
  {
    "numb": 10,
    "question": "Which metal is a pure conductor of electricity?",
    "answer": "Silver",
    "options": [
      "Copper",
      "Gold",
      "Silver",
      "Lead"
    ]
  },
  {
    "numb": 11,
    "question": "Which instrument is used to measure the power of an electric circuit?",
    "answer": "Wattmeter",
    "options": [
      "Wavemeter",
      "Viscometer",
      "Wattmeter",
      "None of these"
    ]
  },
  {
    "numb": 12,
    "question": "Sound travels in air at an average speed of nearly________?",
    "answer": "755 miles per hour",
    "options": [
      "1257 miles per hour",
      "755 miles per hour",
      "330 miles per hour",
      "None of these"
    ]
  },
  {
    "numb": 13,
    "question": "Which of the following is not a chemical reaction?",
    "answer": "Conversion of water into steam",
    "options": [
      "Burning of coal",
      "Conversion of water into steam",
      "Digestion of food",
      "Burning of paper"
    ]
  },
  {
    "numb": 14,
    "question": "What animal has the longest gestation period of any land animal?",
    "answer": "Elephant",
    "options": [
      "Blue Whale",
      "Elephant",
      "Opossum",
      "None of these"
    ]
  },
  {
    "numb": 15,
    "question": "What is the scientific name of flying fish?",
    "answer": "Exocoetidae",
    "options": [
      "Exocoetidae",
      "Anoplopoma fimbria",
      "Orthopsetta sordida",
      "Xiphias gladius"
    ]
  },
  {
    "numb": 16,
    "question": "Disease which is transferred from animals to humans is_________?",
    "answer": "Zoonosis",
    "options": [
      "Sporadic",
      "Epidemic",
      "Endemic",
      "Zoonosis"
    ]
  },
  {
    "numb": 17,
    "question": "Hydrogen bomb is based on the principle of ________?",
    "answer": "Nuclear fusion",
    "options": [
      "Nuclear fusion",
      "Artificial radioactivity",
      "Natural radioactivity",
      "Nuclear fission"
    ]
  },
  {
    "numb": 18,
    "question": "What is the molecular formula for Ammonia?",
    "answer": "NH3",
    "options": [
      "NH",
      "NH2",
      "NH3",
      "NH4"
    ]
  },
  {
    "numb": 19,
    "question": "Mostly which gases are found on the planet Jupiter?",
    "answer": "Hydrogen and Helium",
    "options": [
      "Hydrogen",
      "Chlorine",
      "Hydrogen and Helium",
      "Neon"
    ]
  },
  {
    "numb": 20,
    "question": "Chemical formula for Water is _______?",
    "answer": "H2O",
    "options": [
      "NaAlO2",
      "H2O",
      "Al2O3",
      "CaSiO3"
    ]
  },
  {
    "numb": 21,
    "question": "The light of distant stars is affected by __________?",
    "answer": "both A and B",
    "options": [
      "The earth’s atmosphere",
      "Interstellar dust",
      "both A and B",
      "None of these"
    ]
  },
  {
    "numb": 22,
    "question": "In humans, which body part develops first?",
    "answer": "Heart",
    "options": [
      "Heart",
      "Brain",
      "Lungs",
      "Kidneys"
    ]
  },
  {
    "numb": 23,
    "question": "Atom was a name given by ____________?",
    "answer": "Democritus",
    "options": [
      "Democritus",
      "Bohr",
      "Rutherford",
      "Archimedes"
    ]
  },
  {
    "numb": 24,
    "question": "Day and night are the results of__________?",
    "answer": "Earth rotation around its axis",
    "options": [
      "Earth rotation around its axis",
      "Earth revolution",
      "Earth rotation accompanied with its revolution.",
      "None of these"
    ]
  },
  {
    "numb": 25,
    "question": "Lock Jaw, i.e., difficulty in opening the mouth, is a symptom of___________?",
    "answer": "Tetanus",
    "options": [
      "Cholera",
      "Plague",
      "Diphtheria",
      "Tetanus"
    ]
  },
  {
    "numb": 26,
    "question": "Deficiency diseases are caused due to the deficiency of___________?",
    "answer": "Vitamins",
    "options": [
      "Proteins",
      "Vitamins",
      "Carbohydrates",
      "Fats"
    ]
  },
  {
    "numb": 27,
    "question": "Who was the surgeon who pioneered antiseptic surgery in 1865?",
    "answer": "Joseph Lister",
    "options": [
      "Edward Jenner",
      "Joseph Lister",
      "Henry William",
      "John Sleeman"
    ]
  },
  {
    "numb": 28,
    "question": "Mach number is used in connection with the speed of___________?",
    "answer": "Aircraft",
    "options": [
      "Ship",
      "Light",
      "Sound",
      "Aircraft"
    ]
  },
  {
    "numb": 29,
    "question": "Blood is cleaned by __________?",
    "answer": "Kidneys",
    "options": [
      "Lungs",
      "Liver",
      "Heart",
      "Kidneys"
    ]
  },
  {
    "numb": 30,
    "question": "The tree that sends down roots from its branches to the soil is known as:___________?",
    "answer": "Banyan",
    "options": [
      "Oak",
      "Pine",
      "Banyan",
      "Palm"
    ]
  }

]