// Array of questions with options and correct answers
const questions = [
  {
    "numb": 1,
    "question": 'Sindhi language is based on ____ ?',
    "answer": 'Arabic',
    "options": [
      'Persian',
      'Arabic',
      'Dravidian',
      'Sansikrit'
    ]
  },
  {
    "numb": 2,
    "question": 'The ____ Motorway connects the cities of Hyderabad and Karachi in the Sindh province of Pakistan?',
    "answer": 'M-9 Motorway',
    "options": [
      'M-1 Motorway',
      'M-4 Motorway',
      'M-5 Motorway',
      'M-9 Motorway'
    ]
  },
  {
    "numb": 3,
    "question": 'Moenjodaro means ____ ?',
    "answer": 'Mound of the Dead',
    "options": [
      'Civilised City',
      'Beautiful Gardens',
      'Mound of the Dead',
      'Civilization'
    ]
  },
  {
    "numb": 4,
    "question": 'Malakhra is a traditional game of ____ ?',
    "answer": 'Sindh',
    "options": [
      'Sindh',
      'Punjab',
      'KPK',
      'None of them'
    ]
  },
  {
    "numb": 5,
    "question": 'Oldest mountains of the world are present in India and youngest mountain of the world are present in?',
    "answer": 'Pakistan',
    "options": [
      'Pakistan',
      'China',
      'India',
      'Burma'
    ]
  },
  {
    "numb": 6,
    "question": 'Nanga Parbat is ranked as the ____ highest mountain peak of the world?',
    "answer": '9th',
    "options": [
      '10th',
      '8th',
      '5th',
      '9th'
    ]
  },
  {
    "numb": 7,
    "question": 'The height of Himalaya range increases as it moves from?',
    "answer": 'South to North',
    "options": [
      'South to North',
      'East to West',
      'North to South',
      'West to East'
    ]
  },
  {
    "numb": 8,
    "question": 'What is the height of Sakasar peak?',
    "answer": '1500 meters',
    "options": [
      '1600 meters',
      '1500 meters',
      '1680 meters',
      '1700 meters'
    ]
  },
  {
    "numb": 9,
    "question": 'Which range separates Baluchistan Plateau from Afghanistan?',
    "answer": 'Chaghi',
    "options": [
      'Chaghi',
      'Makran',
      'Turbat',
      'Kirthar range'
    ]
  },
  {
    "numb": 10,
    "question": 'The Proposed Margalla hills tunnel project connects Islamabad with which city?',
    "answer": 'Haripur',
    "options": [
      'Sawabi',
      'Abbotabad',
      'Haripur',
      'Dhodail'
    ]
  },
  {
    "numb": 11,
    "question": 'Height of Islamabad from sea level is ____?',
    "answer": '1700 ft',
    "options": [
      '1600 ft',
      '1700 ft',
      '1500 ft',
      '1400 ft'
    ]
  },
  {
    "numb": 12,
    "question": 'Regional Languages of Kashmir are ____?',
    "answer": 'Kashmiri',
    "options": [
      'Kashmiri',
      'Punjabi',
      'Hindko',
      'All of them'
    ]
  },
  {
    "numb": 13,
    "question": 'Who is the first Chief Minister of Gilgit Balitistan?',
    "answer": 'Syed Mehdi Shah',
    "options": [
      'Syed Mehdi Shah',
      'Qamar-u-Zaman Kaira',
      'Wazir Baig',
      'Pir Karam Shah'
    ]
  },
  {
    "numb": 14,
    "question": 'Who was the first governor general of Pakistan?',
    "answer": 'Quaid e Azam Muhammad Ali Jinnah',
    "options": [
      'Quaid e Azam Muhammad Ali Jinnah',
      'Iskander Mirza',
      'Khawaja Nazimuddin',
      'Ghulam Muhammad'
    ]
  },
  {
    "numb": 15,
    "question": 'Who chose the name of Pakistan?',
    "answer": 'Chaudry Rehmat Ali',
    "options": [
      'Quaid-e-Azam',
      'Allama Iqbal',
      'Hafeez Jalandhri',
      'Chaudry Rehmat Ali'
    ]
  },
  {
    "numb": 16,
    "question": 'Till now, how many Chief of Army Staff (COAS) of Pakistan are selected from Baloch Regiment?',
    "answer": 'Four',
    "options": [
      'Two',
      'Three',
      'Four',
      'None of these'
    ]
  },
  {
    "numb": 17,
    "question": 'Longest serving prime minister of Pakistan?',
    "answer": 'Liaquat Ali Khan',
    "options": [
      'Yousuf Raza Gillani',
      'Mian Muhammad Nawaz Sharif',
      'Liaquat Ali Khan',
      'Muhammad Ali Bogra'
    ]
  },
  {
    "numb": 18,
    "question": 'Which Nursery School did Benazir Bhutto attend?',
    "answer": 'Lady Jennings Nursery School',
    "options": [
      'Bulbul Nursery School',
      'St. John’s Nursery School',
      'Holy Family Nursery & KG School',
      'Lady Jennings Nursery School'
    ]
  },
  {
    "numb": 19,
    "question": 'What official name was given to Pakistan in 1956 constitution?',
    "answer": 'Islamic Republic of Pakistan',
    "options": [
      'United States of Pakistan',
      'Republic of Pakistan',
      'Islamic Pakistan',
      'Islamic Republic of Pakistan'
    ]
  },
  {
    "numb": 20,
    "question": 'When Mr. Z.A. Bhutto launched a new constitution in the country?',
    "answer": '14th August 1973',
    "options": [
      '11th August 1973',
      '14th August 1973',
      '17th August 1973',
      '21st August 1973'
    ]
  },
  {
    "numb": 21,
    "question": 'How many articles were there in 1962 constitution?',
    "answer": '250 Articles',
    "options": [
      '225 Articles',
      '250 Articles',
      '275 Articles',
      '290 Articles'
    ]
  },
  {
    "numb": 22,
    "question": 'Which is the national bird of Pakistan?',
    "answer": 'Chakor',
    "options": [
      'Markhor',
      'Parrot',
      'Pigeon',
      'Chakor'
    ]
  },
  {
    "numb": 23,
    "question": 'Which state was attacked by India on 11th September 1948?',
    "answer": 'State of Hyderabad Daccan',
    "options": [
      'State of Hyderabad Daccan',
      'State of Jammu and Kashmir',
      'State of Manavadar',
      'State of Junagarh'
    ]
  },
  {
    "numb": 24,
    "question": 'The highest peak of Salt Range is?',
    "answer": 'Skaser',
    "options": [
      'Nanga Parbat',
      'Skaser',
      'Malka Parbat',
      'Everest'
    ]
  },
  {
    "numb": 25,
    "question": 'ICT stands for?',
    "answer": 'Islamabad Capital Territory',
    "options": [
      'Islamabad capital total',
      'Islamabad city tribes',
      'Islamabad Capital Territory',
      'Islamabad city territory'
    ]
  },
  {
    "numb": 26,
    "question": 'The Muslims came to Sindh in 712 A.D. under the leadership of?',
    "answer": 'Muhammad Bin Qasim',
    "options": [
      'Mahmood Ghaznavi',
      'Zaheer-ud-Din Baber',
      'Muhammad Bin Qasim',
      'Aurangzeb Alamgir'
    ]
  },
  {
    "numb": 27,
    "question": 'The name of poet whose collection of poetry is called “Shah jo Risalu”?',
    "answer": 'Shah Abdul Latif Bhatai',
    "options": [
      'Khushal Khan Khattak',
      'Waris Shah',
      'Makhdum Muhammad Hashim',
      'Shah Abdul Latif Bhatai'
    ]
  },
  {
    "numb": 28,
    "question": 'Where is Warsak Dam of Pakistan situated?',
    "answer": 'Khyber Pakhtunkhwa',
    "options": [
      'Khyber Pakhtunkhwa',
      'Punjab',
      'Sindh',
      'Balochistan'
    ]
  },
  {
    "numb": 29,
    "question": 'Mirpur is a famous city of?',
    "answer": 'Azad Kashmir',
    "options": [
      'KPK',
      'Punjab',
      'Azad Kashmir',
      'None of them'
    ]
  },
  {
    "numb": 30,
    "question": 'Paery Cane was the first C-in-C of ____. ',
    "answer": 'Pakistan Air Force',
    "options": [
      'Pakistan Air Force',
      'Armed Forces',
      'Navy',
      'None of them'
    ]
  }
]
