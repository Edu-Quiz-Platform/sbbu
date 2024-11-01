// Array of questions with options and correct answers
const questions = [
{
    numb: 1,
    question: 'Some substances are good conductors of electricity in both the solid and liquid states. These substances are generally ____?',
    answer: 'metallic substances',
    options: [
      'ionic substances',
      'metallic substances',
      'molecular solids',
      'covalent network solids'
    ]
  },
  {
    numb: 2,
    question: 'Which of the following has the highest energy?',
    answer: 'gamma rays',
    options: [
      'gamma rays',
      'X-rays',
      'Ultra-violet radiation',
      'radio waves'
    ]
  },
  {
    numb: 3,
    question: 'Approximately, how many times each day do our heart valves open and close normally?',
    answer: '1,00,000',
    options: [
      '10,000',
      '1,00,000',
      '1,50,000',
      '2,00,000'
    ]
  },
  {
    numb: 4,
    question: 'When warm air is lifted off the surface in temperature depression it is called ____?',
    answer: 'An occlusion',
    options: [
      'An occlusion',
      'A cold front',
      'An anticyclone',
      'A warm front'
    ]
  },
  {
    numb: 5,
    question: 'The strength of wave action depends on all these EXCEPT:',
    answer: 'Currents in the sea',
    options: [
      'Currents in the sea',
      'Wind strength',
      'Depth of coastal water',
      'Height of waves'
    ]
  },
  {
    numb: 6,
    question: 'Cow milk is a rich source of ____?',
    answer: 'vitamin A',
    options: [
      'vitamin C',
      'vitamin B',
      'vitamin A',
      'vitamin K'
    ]
  },
  {
    numb: 7,
    question: 'An element that does not occur in nature but can be produced artificially is ____?',
    answer: 'Plutonium',
    options: [
      'Plutonium',
      'Uranium',
      'Radium',
      'Thorium'
    ]
  },
  {
    numb: 8,
    question: 'Which one of the following can be synthesized by the liver?',
    answer: 'Vitamin K',
    options: [
      'Vitamin B6',
      'Vitamin B12',
      'Vitamin K',
      'Vitamin E'
    ]
  },
  {
    numb: 9,
    question: 'Average salinity or ratio of salt as per kilogram of water of ocean is ____?',
    answer: '35 grams',
    options: [
      '35 grams',
      '55 grams',
      '32 grams',
      '42 grams'
    ]
  },
  {
    numb: 10,
    question: 'Big Bang theory explains ____?',
    answer: 'Origin of Universe',
    options: [
      'Origin of Universe',
      'Origin of Sun',
      'Laws of physics',
      'None of above'
    ]
  },
  {
    numb: 11,
    question: 'Bromine is a ____?',
    answer: 'red-brown liquid',
    options: [
      'black solid',
      'red-brown liquid',
      'colourless gas',
      'highly inflammable gas'
    ]
  },
  {
    numb: 12,
    question: 'How does smoking cigarettes impact the red blood cells?',
    answer: 'Decreases their ability to carry oxygen',
    options: [
      'Decreases their ability to congeal',
      'Decreases their ability to carry oxygen',
      'Decreases their ability to reach their typical life duration',
      'Decreases their ability to cleanse wounds'
    ]
  },
  {
    numb: 13,
    question: 'The blueness of the sky is mainly due to ____?',
    answer: 'The scattering of sunlight by air molecules',
    options: [
      'The scattering of sunlight by air molecules',
      'The presence of water vapor',
      'Absorption of blue light by the air',
      'Emission of blue light by the atmosphere'
    ]
  },
  {
    numb: 14,
    question: 'The earth’s atmosphere is divided into layers based on the vertical profile of ____?',
    answer: 'Air temperature',
    options: [
      'Air pressure',
      'Air temperature',
      'Air density',
      'Wind speed'
    ]
  },
  {
    numb: 15,
    question: 'The outermost layer of skin is the ____?',
    answer: 'epidermis',
    options: [
      'endodermis',
      'dermis',
      'epidermis',
      'hypodermis'
    ]
  },
  {
    numb: 16,
    question: 'The phases of the moon are partially the result of the ____?',
    answer: 'Revolution of the moon around the earth',
    options: [
      'Changes in the shape of the moon',
      'Revolution of the moon around the earth',
      'Variations in the moon’s gravitation',
      'Variations in the speed of rotation of the moon'
    ]
  },
  {
    numb: 17,
    question: 'Who was the first to measure the earth’s radius?',
    answer: 'Eratosthenes',
    options: [
      'Galileo',
      'Copernicus',
      'Ptolemy',
      'Eratosthenes'
    ]
  },
  {
    numb: 18,
    question: 'Central Color of Rainbow is ____?',
    answer: 'Green',
    options: [
      'Blue',
      'Green',
      'Red',
      'Indigo'
    ]
  },
  {
    numb: 19,
    question: 'Who discovered the Gamma Rays?',
    answer: 'Paul Villard',
    options: [
      'Alfred Marshall',
      'Paul Villard',
      'Bohr',
      'Jabar bin Hayan'
    ]
  },
  {
    numb: 20,
    question: 'The horizontal rows of the periodic table are called ____?',
    answer: 'Periods',
    options: [
      'Groups',
      'Periods',
      'Sets',
      'Matrices'
    ]
  },
  {
    numb: 21,
    question: 'How long does the earth take to cover 1° longitude?',
    answer: '4 Minutes',
    options: [
      '2 Minutes',
      '3 Minutes',
      '4 Minutes',
      '5 Minutes'
    ]
  },
  {
    numb: 22,
    question: 'Japan is called ‘Land of the rising sun’ because:',
    answer: 'Japan being the Eastern most country in the world, it has the earliest sunrise',
    options: [
      'Sun rises there as soon as it sets',
      'Sun always remains in the eastern part of the sky throughout the day in Japan',
      'Japan being the Eastern most country in the world, it has the earliest sunrise',
      'The rays of the sun get reflected from the waters of the sea and make the sunrise beautiful in Japan'
    ]
  },
  {
    numb: 23,
    question: 'Approximate age of earth is ____?',
    answer: '4.54 billion years',
    options: [
      '4.14 billion years',
      '4.64 billion years',
      '4.54 billion years',
      '4.34 billion years'
    ]
  },
  {
    numb: 24,
    question: 'Which of the following is not a water soluble vitamin?',
    answer: 'Tocopherol',
    options: [
      'Tocopherol',
      'Pyridoxine',
      'Pantothenic acid',
      'Niacin'
    ]
  },
  {
    numb: 25,
    question: 'The distance between Earth and Moon is ____?',
    answer: '3,84,400km',
    options: [
      '3,50,000km',
      '3,60,100km',
      '3,72,000km',
      '3,84,400km'
    ]
  },
  {
    numb: 26,
    question: 'One Joule is equal to ____?',
    answer: '107 ergs',
    options: [
      '105 ergs',
      '103 ergs',
      '107 ergs',
      '1011 ergs'
    ]
  },
  {
    numb: 27,
    question: 'Dissolved oxygen (DO) in water should be?',
    answer: '4 to 5 ppm',
    options: [
      '400 to 800 ppm',
      '4000 to 8000 ppm',
      '0.4 to 0.5 ppm',
      '4 to 5 ppm'
    ]
  },
  {
    numb: 28,
    question: 'The study of fish is known as ____?',
    answer: 'Ichthyology',
    options: [
      'Entomology',
      'Ichthyology',
      'Ecology',
      'None of these'
    ]
  },
  {
    numb: 29,
    question: 'A dolphin perceives its environment by the sense of ____?',
    answer: 'Both of these',
    options: [
      'Sight',
      'Sound',
      'Both of these',
      'None of these'
    ]
  },
  {
    numb: 30,
    question: 'Telephone was invented by ____?',
    answer: 'Alexander Graham Bell',
    options: [
      'Vint Cerf',
      'Charles Babbage',
      'Edison',
      'Alexander Graham Bell'
    ]
  }
  
]
