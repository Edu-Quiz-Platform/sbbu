// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The length of Siachen Glacier is ___________ ",
    answer: "76km",
    options: [
      "50km",
      "60km",
      "76km",
      "80km"
    ]
  },
  {
    numb: 2,
    question: '"The place where heaven and earth meet" these words are said about which place ?',
    answer: "Punial",
    options: [
      "Chitral",
      "Kalash",
      "Punial",
      "Swat"
    ]
  },
  {
    numb: 3,
    question: "What is the average height of Chaghi range ?",
    answer: "3000 meters",
    options: [
      "2500 meters",
      "3000 meters",
      "3500 meters",
      "4000 meters"
    ]
  },
  {
    numb: 4,
    question: "Who was the first Pakistani to clumb the K-2?",
    answer: "Ashraf Aman",
    options: [
      "Ashraf Aman",
      "Mohsan Razvi",
      "Nasir Hussain",
      "Zahid ALi"
    ]
  },
  {
    numb: 5,
    question: "The largest mosque of Pakistan located in Islamabad is called _________ ?",
    answer: "Shah Faisal Mosque",
    options: [
      "Garrison Mosque",
      "Badshahi Mosque",
      "Shah Faisal Mosque",
      "N.O.T"
    ]
  },
  {
    numb: 6,
    question: "Major languages of FATA are __________?",
    answer: "Pashto",
    options: [
      "Urdu",
      "Pashto",
      "both A & B",
      "N.O.T"
    ]
  },
  {
    numb: 7,
    question: "River Neelum is situated in _________?",
    answer: "AJ&K",
    options: [
      "AJ&K",
      "KPK",
      "Panjab",
      "FATA"
    ]
  },
  {
    numb: 8,
    question: "Which Pakistani area is sandwiched between China and Indian-held Kashmir?",
    answer: "Baltistan",
    options: [
      "Astor",
      "Chitral",
      "Kalash",
      "Baltistan"
    ]
  },
  {
    numb: 9,
    question: "Who was the first President of Pakistan?",
    answer: "Iskander Mirza",
    options: [
      "Malik Ghulam Muhammad",
      "Iskander Mirza",
      "Muhammad Ali Bograh",
      "Sir Khawaja Nazimuddin"
    ]
    },
  {
    numb: 10,
    question: "Jinnah the only film on the life of Quaid-e-Azam was produced by?",
    answer: "Jamil Dehlavi",
    options: [
      "Akbar S. Ahmed",
      "Shabab dhlvl",
      "Jamil Dehlavi",
      "Pervaiz iqbal cheema"
    ]
  },
  {
    numb: 11,
    question: "Pakistan test fired its first submarine launched cruise missile Babur-III on 9 January 2017, has the range of ___________ kilometres?",
    answer: "450 kilometres",
    options: [
      "450 kilometres",
      "550 kilometres",
      "650 kilometres",
      "700 kilometres"
    ]
  },
  {
    numb: 12,
    question: "Benazir Bhutto was the __________ ever female Prime Minister of Pakistan?",
    answer: "First",
    options: [
      "First",
      "Second",
      "Third",
      "Fourth"
    ]
  },
  {
    numb: 13,
    question: "What document was firstly drafted to give pace to constitution making process?",
    answer: "Objective Resolution",
    options: [
      "Representative Act",
      "Objective Resolution",
      "Pakistan Act",
      "Independence Act"
    ]
  },
  {
    numb: 14,
    question: "What was the official language declared in 1956 constitution?",
    answer: "Both a & b",
    options: [
      "Urdu",
      "Bengali",
      "Hindi",
      "Both a & b"
    ]
  },
  {
    numb: 15,
    question: "According to 1973 constitution who elects Prime Minister?",
    answer: "National Assembly",
    options: [
      "Senate",
      "President",
      "Provincial Assemblies",
      "National Assembly"
    ]
  },
  {
    numb: 16,
    question: "When did Fatima Jinnah joined All India Muslim league?",
    answer: "1939",
    options: [
      "1927",
      "1939",
      "1947",
      "1949"
    ]
  },
  {
    numb: 17,
    question: "Who Reviewed the famous book “The Indian Musalmans” in 1872?",
    answer: "Sir Syed Ahmed Khan",
    options: [
      "Sir Syed Ahmed Khan",
      "Sir William Wilson Hunter",
      "M Delwar Hussain",
      "John King Fairbank"
    ]
  },
  {
    numb: 18,
    question: "In which of the following cities All India Muslim League was found?",
    answer: "Dhaka",
    options: [
      "Delhi",
      "Lahore",
      "Allahabad",
      "Dhaka"
    ]
  },
  {
    numb: 19,
    question: "What is the total area of Punjab Province?",
    answer: "205,344 Sq Km",
    options: [
      "40,914 Km",
      "74,521 Km",
      "205,344 Sq Km",
      "347,190 Sq Km"
    ]
  },
  {
    numb: 20,
    question: "Tenure of National and Provincial Assemblies is?",
    answer: "4 years",
    options: [
      "3 years",
      "4 years",
      "5 years",
      "6 years"
    ]
  },
  {
    numb: 21,
    question: "The ruins of Harrapa are situated in district?",
    answer: "Sahiwal",
    options: [
      "Multan",
      "Okara",
      "Lahore",
      "Sahiwal"
    ]
  },
  {
    numb: 22,
    question: 'Who wrote "Mauj-e-Kausar"?',
    answer: "Shaikh Muhammad Ikram",
    options: [
      "Amir Khusro",
      "Shaikh Muhammad Ikram",
      "Mir Taqi Mir",
      "Khawaja Mir Dard"
    ]
  },
  {
    numb: 23,
    question: "Which city of Pakistan held the OIC Conference in 1997?",
    answer: "Islamabad",
    options: [
      "Lahore",
      "Karachi",
      "Peshawar",
      "Islamabad"
    ]
  },
  {
    numb: 24,
    question: "What is the total area of Khyber Pakhtoon Khawah Province?",
    answer: "74,521 Sq Km",
    options: [
      "40,914 Sq Km",
      "74,521 Sq Km",
      "205,344 Sq Km",
      "347,190 Sq Km"
    ]
  },
  {
    numb: 25,
    question: "Defence day is observed on ___________ ?",
    answer: "6th September",
    options: [
      "6th September",
      "7th September",
      "11th September",
      "N.O.T"
    ]
  },
  {
    numb: 26,
    question: "The latest version of Hatf-5 is ________ ?",
    answer: "Ghauri-1",
    options: [
      "Ghauri-1",
      "Hataf",
      "Abdali",
      "Shaheen-1"
    ]
  },
  {
    numb: 27,
    question: "At the time of Kargil in 1999 the Chief of Army Staff was _________ ?",
    answer: "General Parvez Musharaf",
    options: [
      "General Jahangir Karamat",
      "General Aslam Baig",
      "General Parvez Musharaf",
      "General Waheed Kakar"
    ]
  },
  {
    numb: 28,
    question: "In which of the following city Pakistan Command & Staff College is located ?",
    answer: "Quetta",
    options: [
      "Karachi",
      "Quetta",
      "Islamabad",
      "Multan"
    ]
  },
  {
    numb: 29,
    question: "World’s largest tribal society is ________ ?",
    answer: "Pashtun",
    options: [
      "Afridi",
      "Noro",
      "Pashtun",
      "Baloch"
    ]
  },
  {
    numb: 30,
    question: "Peshawar means ________ ?",
    answer: "City of flowers",
    options: [
      "City of flowers",
      "City of tombs",
      "City of gardens",
      "N.O.T"
    ]
  },
];
