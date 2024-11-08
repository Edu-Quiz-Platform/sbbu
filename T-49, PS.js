// Array of questions with options and correct answers
const questions = [
{
    "numb": 1,
    "question": "The range of Hatf-2 is ________?",
    "answer": "180km",
    "options": [
      "180km",
      "275km",
      "230km",
      "300km"
    ]
  },
  {
    "numb": 2,
    "question": "HIT stands for?",
    "answer": "Heavy Industries Taxila",
    "options": [
      "Heavy Industries Taxila",
      "Heavy Industries Tools",
      "Heavy Industries Tax",
      "None of them"
    ]
  },
  {
    "numb": 3,
    "question": "In which city is the Pakistan Naval Academy located?",
    "answer": "Karachi",
    "options": [
      "Karachi",
      "Lahore",
      "Multan",
      "Rawalpindi"
    ]
  },
  {
    "numb": 4,
    "question": "Who was the first Chief Minister of KPK?",
    "answer": "Khan Abdul Qayyum Khan",
    "options": [
      "Khan Abdul Qayyum Khan",
      "Sahibzada Zafar Ali Khan",
      "Abdul Ghafoor Hoti",
      "None of them"
    ]
  },
  {
    "numb": 5,
    "question": "Which area is called the gun factory of the tribal areas?",
    "answer": "Darra Adam Khel",
    "options": [
      "Darra Isa Khel",
      "Darra Khyber",
      "Darra Adam Khel",
      "Kohat"
    ]
  },
  {
    "numb": 6,
    "question": "The highest mountain of KPK is __________?",
    "answer": "Tirch Mir",
    "options": [
      "K-2",
      "Tirch Mir",
      "Nanga Parbat",
      "All of them"
    ]
  },
  {
    "numb": 7 ,
    "question": "Lari language is spoken in __________?",
    "answer": "Lower Sindh",
    "options": [
      "Upper Sindh",
      "Lower Sindh",
      "Central Sindh",
      "Sindh & Punjab"
    ]
  },
  {
    "numb": 8,
    "question": "Ghulam Muhammad Barrage is also called __________?",
    "answer": "Kotri Barrage",
    "options": [
      "Indus Barrage",
      "Kandyaro Barrage",
      "Kotri Barrage",
      "None of them"
    ]
  },
  {
    "numb": 9,
    "question": "Moenjodaro is a 4,000-year-old city of the __________ civilization?",
    "answer": "Indus Civilization",
    "options": [
      "Taxila Civilization",
      "Indus Civilization",
      "Both of them",
      "None of them"
    ]
  },
  {
    "numb": 10,
    "question": "The shrine of Abdullah Shah Ghazi is located in __________?",
    "answer": "Karachi",
    "options": [
      "Nawab Shah",
      "Karachi",
      "Hala",
      "Thatta"
    ]
  },
  {
    "numb": 11,
    "question": "Which is the highest peak of Pakistan?",
    "answer": "K-2",
    "options": [
      "Broad Peak",
      "Sia kingri Peak",
      "K-2",
      "Kilik Peak"
    ]
  },
  {
    "numb": 12,
    "question": "The height of Nanga Parbat is ____________?",
    "answer": "8,126m",
    "options": [
      "8,126m",
      "7,521m",
      "6,125m",
      "9,500m"
    ]
  },
  {
    "numb": 13,
    "question": "Which of the following mountain peaks is called Killer Mountain?",
    "answer": "Nanga Parbat",
    "options": [
      "Nanga Parbat",
      "Godwin Austin",
      "Broad Peak",
      "Raka Poshi"
    ]
  },
  {
    "numb": 14,
    "question": "What is the average height of the Salt Range?",
    "answer": "675 meters",
    "options": [
      "675 meters",
      "700 meters",
      "640 meters",
      "590 meters"
    ]
  },
  {
    "numb": 15,
    "question": "Which range lies along the border of Sindh and Baluchistan Province?",
    "answer": "Kirthar range",
    "options": [
      "Chaghi",
      "Makran range",
      "Kirthar range",
      "Koh-e-Sufaid"
    ]
  },
  {
    "numb": 16,
    "question": "The total area of ICT is ___________?",
    "answer": "906 sq.km",
    "options": [
      "806 sq.km",
      "906 sq.km",
      "1006 sq.km",
      "1106 sq.km"
    ]
  },
  {
    "numb": 17,
    "question": "The meaning of FATA is?",
    "answer": "Federally Administrated Tribal Areas",
    "options": [
      "Federally Administrated Tribal Areas",
      "Federally Administrated Territory Areas",
      "A & B",
      "None of them"
    ]
  },
  {
    "numb": 8,
    "question": "How many districts are in Kashmir?",
    "answer": "10",
    "options": [
      "6",
      "10",
      "8",
      "12"
    ]
  },
  {
    "numb": 9,
    "question": "Which valley is known as 'Roof of the world'?",
    "answer": "Baltistan",
    "options": [
      "Chitral",
      "Chilas",
      "Skardu",
      "Baltistan"
    ]
  },
  {
    "numb": 20,
    "question": "Which country is situated in the east of Pakistan?",
    "answer": "India",
    "options": [
      "China",
      "India",
      "Afghanistan",
      "Iran"
    ]
  },
  {
    "numb": 21,
    "question": "A total of __________ amendments to the constitution of 1973 have been passed by the Parliament?",
    "answer": "26",
    "options": [
      "21",
      "23",
      "25",
      "26"
    ]
  },
  {
    "numb": 22,
    "question": "How many Pakistanis have won the Nobel Prize for Physics?",
    "answer": "1 (Dr Abdus Salam in 1979)",
    "options": [
      "1 (Dr Abdus Salam in 1979)",
      "2",
      "3",
      "None of these"
    ]
  },
  {
    "numb": 23,
    "question": "The Friendship Gate is built on the border between Pakistan and __________?",
    "answer": "Afghanistan",
    "options": [
      "Afghanistan",
      "Iran",
      "India",
      "China"
    ]
  },
  {
    "numb": 24,
    "question": "Which college did Benazir Bhutto attend?",
    "answer": "Radcliffe College",
    "options": [
      "St. Albert’s College",
      "Hasnat College for Women",
      "Radcliffe College",
      "St. Agnes College"
    ]
  },
  {
    "numb": 25,
    "question": "Which reforms introduced separate electorate for Hindus and Muslims?",
    "answer": "Minto-Morley Reforms",
    "options": [
      "Minto-Morley Reforms",
      "Montague Reforms",
      "Both",
      "None of these"
    ]
  },
  {
    "numb": 26,
    "question": "Who played the role of Quaid-e-Azam in the film 'Jinnah' released on 7 November 1998?",
    "answer": "Christopher Lee",
    "options": [
      "Micky Arthur",
      "Christopher Lee",
      "Shashi Kapoor",
      "Jamil Dehalvi"
    ]
  },
  {
    "numb": 27,
    "question": "Who ordered the excavation of Mohenjo-daro in 1922?",
    "answer": "Sir John Marshall",
    "options": [
      "Sir John Marshall",
      "Sir Robert Peary",
      "Robert Clive",
      "Lord Lyton"
    ]
  },
  {
    "numb": 28,
    "question": "Name the largest desert of Pakistan?",
    "answer": "Thar",
    "options": [
      "Thal",
      "Thar",
      "Cholistan",
      "None"
    ]
  },
  {
    "numb": 29,
    "question": "The largest dam of Pakistan is __________?",
    "answer": "Tarbela Dam",
    "options": [
      "Tarbela Dam",
      "Mangla Dam",
      "Warsak Dam",
      "None of these"
    ]
  },
  {
    "numb": 30,
    "question": "What picture is on the back of the 5000 rupee note of Pakistan?",
    "answer": "Faisal Mosque",
    "options": [
      "Badshahi Mosque",
      "Faisal Mosque",
      "Minar-e-Pakistan",
      "Tomb of Allama Iqbal"
    ]
  },
]
