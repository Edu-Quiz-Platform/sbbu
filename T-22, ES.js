// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "What happens to the wavelength of light when its speed increases?",
    answer: "Wavelength increases",
    options: [
      "Speed increases",
      "Frequency remains constant",
      "Wavelength decreases",
      "Wavelength increases"
    ]
  },
  {
    numb: 2,
    question: "Which of the following is a prime number?",
    answer: "7",
    options: [
      "4",
      "6",
      "7",
      "9"
    ]
  },
  {
    numb: 3,
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      "Paris",
      "London",
      "Rome",
      "Berlin"
    ]
  },
  {
    numb: 4,
    question: "What is H2O commonly known as?",
    answer: "Water",
    options: [
      "Salt",
      "Water",
      "Hydrogen",
      "Oxygen"
    ]
  },
  {
    numb: 5,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: [
      "Earth",
      "Venus",
      "Jupiter",
      "Mars"
    ]
  },
  {
    numb: 6,
    question: "What is the largest mammal in the world?",
    answer: "Blue Whale",
    options: [
      "Elephant",
      "Giraffe",
      "Blue Whale",
      "Hippopotamus"
    ]
  },
  {
    numb: 7,
    question: "Which gas do plants absorb from the atmosphere?",
    answer: "Carbon Dioxide",
    options: [
      "Carbon Dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ]
  },
  {
    numb: 8,
    question: "In which year did the Titanic sink?",
    answer: "1912",
    options: [
      "1910",
      "1912",
      "1914",
      "1916"
    ]
  },
  {
    numb: 9,
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
    options: [
      "Oxygen",
      "Gold",
      "Silver",
      "Helium"
    ]
  },
  {
    numb: 10,
    question: "What is the main ingredient in guacamole?",
    answer: "Avocado",
    options: [
      "Tomato",
      "Onion",
      "Avocado",
      "Pepper"
    ]
  },
  {
    numb: 11,
    question: "Which animal is known as the king of the jungle?",
    answer: "Lion",
    options: [
      "Elephant",
      "Lion",
      "Tiger",
      "Gorilla"
    ]
  },
  {
    numb: 12,
    question: "What is the freezing point of water?",
    answer: "Both A & B",
    options: [
      "0 degrees Celsius",
      "32 degrees Fahrenheit",
      "100 degrees Celsius",
      "Both A & B"
    ]
  },
  {
    numb: 13,
    question: "Which is the smallest continent by land area?",
    answer: "Australia",
    options: [
      "Asia",
      "Europe",
      "Australia",
      "Antarctica"
    ]
  },
  {
    numb: 14,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen"
    ]
  },
  {
    numb: 15,
    question: "What is the process by which plants make their food?",
    answer: "Photosynthesis",
    options: [
      "Digestion",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ]
  },
  {
    numb: 16,
    question: "Which instrument is used to measure temperature?",
    answer: "Thermometer",
    options: [
      "Barometer",
      "Anemometer",
      "Thermometer",
      "Hygrometer"
    ]
  },
  {
    numb: 17,
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan",
    options: [
      "China",
      "Korea",
      "Thailand",
      "Japan"
    ]
  },
  {
    numb: 18,
    question: "Which organ is responsible for pumping blood in the human body?",
    answer: "Heart",
    options: [
      "Heart",
      "Lungs",
      "Brain",
      "Liver"
    ]
  },
  {
    numb: 19,
    question: "What is the currency of the United States?",
    answer: "Dollar",
    options: [
      "Euro",
      "Dollar",
      "Pound",
      "Yen"
    ]
  },
  {
    numb: 20,
    question: "How many continents are there on Earth?",
    answer: "7",
    options: [
      "5",
      "6",
      "7",
      "8"
    ]
  },
  {
    numb: 21,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    options: [
      "Jupiter",
      "Saturn",
      "Earth",
      "Mars"
    ]
  },
  {
    numb: 22,
    question: "What is the boiling point of water?",
    answer: "100 degrees Celsius",
    options: [
      "0 degrees Celsius",
      "50 degrees Celsius",
      "75 degrees Celsius",
      "100 degrees Celsius"
    ]
  },
  {
    numb: 23,
    question: "What is the capital city of Canada?",
    answer: "Ottawa",
    options: [
      "Toronto",
      "Ottawa",
      "Vancouver",
      "Montreal"
    ]
  },
  {
    numb: 24,
    question: "What is the main language spoken in Brazil?",
    answer: "Portuguese",
    options: [
      "Spanish",
      "French",
      "Portuguese",
      "English"
    ]
  },
  {
    numb: 25,
    question: "Which planet is closest to the Sun?",
    answer: "Mercury",
    options: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars"
    ]
  },
  {
    numb: 26,
    question: "What is the chemical formula for table salt?",
    answer: "NaCl",
    options: [
      "NaOH",
      "NaCl",
      "KCl",
      "CaCO3"
    ]
  },
  {
    numb: 27,
    question: "Which animal is known for its ability to change colors?",
    answer: "Chameleon",
    options: [
      "Chameleon",
      "Frog",
      "Octopus",
      "Cuttlefish"
    ]
  },
  {
    numb: 28,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet"
    ]
  },
  {
    numb: 29,
    question: "What is the longest river in the world?",
    answer: "Nile",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ]
  },
  {
    numb: 30,
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answer: "Nitrogen",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Argon"
    ]
  },
];
