// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "First American woman in space?",
    answer: "Sally Ride",
    options: [
      "Valentina Tereshkova",
      "Junko Tabei",
      "Sally Ride",
      "Charlotte Cooper"
    ]
  },
  {
    numb: 2,
    question: "First Asian games were held in year ________?",
    answer: "1951",
    options: [
      "1949",
      "1950",
      "1951",
      "1952"
    ]
  },
  {
    numb: 3,
    question: "First commercial cellphone service started in 1984 in_______?",
    answer: "Chicago (USA)",
    options: [
      "Londin (UK)",
      "Chicago (USA)",
      "Paris (France)",
      "Rome (Italy)"
    ]
  },
  {
    numb: 4,
    question: "First ever Chinese Newspaper was launched in Pakistan is __________?",
    answer: "Hushang",
    options: [
      "China Daily",
      "Hushang",
      "Xinmin",
      "Shinghai Daily"
    ]
  },
  {
    numb: 5,
    question: "First human heart transplant operation conducted by Dr. Christian Bernard on Louis Washkansky, was conducted in.",
    answer: "1967",
    options: [
      "1968",
      "1967",
      "1958",
      "None of these"
    ]
  },
  {
    numb: 6,
    question: "First Muslim interpreter of Quran in English is ___________?",
    answer: "Abdul Hakeem",
    options: [
      "Abdul Kalam Azad",
      "Anwar Saddat",
      "Shah Waliullah",
      "Abdul Hakeem"
    ]
  },
  {
    numb: 7,
    question: "First Tuesday of May is observed as___________?",
    answer: "World Asthma Day",
    options: [
      "World Asthma Day",
      "Global Family Day",
      "World Kidney Day",
      "World Immunization Day"
    ]
  },
  {
    numb: 8,
    question: "Halle city located in which country?",
    answer: "Germany",
    options: [
      "France",
      "Poland",
      "Italy",
      "Germany"
    ]
  },
  {
    numb: 9,
    question: "Harrappa near Sahiwal was centre of___________?",
    answer: "Indus valley civilization",
    options: [
      "Greek civilization",
      "Persian civilization",
      "Muslim civilization",
      "Indus valley civilization"
    ]
  },
  {
    numb: 10,
    question: "Hazrat Umar (R.A) embraced Islam, influenced by which Surah Of Holy Quran?",
    answer: "Surah Taha",
    options: [
      "Surah Taha",
      "Surah Yaseen",
      "Surah Fateh",
      "Surah Almaedah"
    ]
  },
  {
    numb: 11,
    question: "Headquarter of Q-Mobile is in _____________?",
    answer: "Karachi",
    options: [
      "Beijing",
      "Karachi",
      "Shanghai",
      "Lahore"
    ]
  },
  {
    numb: 12,
    question: "Headquartered of Pakistan Railways is in Lahore it was founded in May 13,_______?",
    answer: "1861",
    options: [
      "1861",
      "1930",
      "1947",
      "1956"
    ]
  },
  {
    numb: 13,
    question: "Headquarters of the International Civil Aviation Organization is in ___________?",
    answer: "Montreal (Canada)",
    options: [
      "New York (USA)",
      "Doha (QATAR)",
      "Jakarta (Indonesia)",
      "Montreal (Canada)"
    ]
  },
  {
    numb: 14,
    question: "Height of Statue of liberty is__________?",
    answer: "93 m",
    options: [
      "73 m",
      "93 m",
      "54 m",
      "97 m"
    ]
  },
  {
    numb: 15,
    question: "Highest rainfall area of Pakistan",
    answer: "Muree",
    options: [
      "Kumrat",
      "Skardu",
      "Muree",
      "Chaghi"
    ]
  },
  {
    numb: 16,
    question: "Hindenburg line divides_________?",
    answer: "Germany and Poland",
    options: [
      "Germany and Poland",
      "Germany and France",
      "South Vietnam and North Vietnam",
      "None of the above"
    ]
  },
  {
    numb: 17,
    question: "Hitler party which came into power in 1933 is known as",
    answer: "Nazi Party",
    options: [
      "Labour Party",
      "Nazi Party",
      "Ku-Klux-Klan",
      "Democratic Party"
    ]
  },
  {
    numb: 18,
    question: "How many countries are there in Asia?",
    answer: "48",
    options: [
      "48",
      "49",
      "50",
      "46"
    ]
  },
  {
    numb: 19,
    question: "How many feathers in shuttle in badminton?",
    answer: "16 feathers",
    options: [
      "12 feathers",
      "15 feathers",
      "10 feathers",
      "16 feathers"
    ]
  },
  {
    numb: 20,
    question: "How many football World Cups have been played till now?",
    answer: "21",
    options: [
      "18",
      "19",
      "20",
      "21"
    ]
  },
  {
    numb: 21,
    question: "How many players in baseball game in each team?",
    answer: "9",
    options: [
      "7",
      "9",
      "11",
      "13"
    ]
  },
  {
    numb: 22,
    question: "How many Players in Polo Team on each side?",
    answer: "4 Players",
    options: [
      "4 Players",
      "6 Players",
      "8 Players",
      "10 Players"
    ]
  },
  {
    numb: 23,
    question: "How many prisons are in Punjab?",
    answer: "40",
    options: [
      "31",
      "32",
      "40",
      "None of these"
    ]
  },
  {
    numb: 24,
    question: "How many teams participated in Kabaddi 2020 World Cup?",
    answer: "10",
    options: [
      "8",
      "9",
      "10",
      "11"
    ]
  },
  {
    numb: 25,
    question: "In 1999, the Melissa virus was a widely publicized:__________?",
    answer: "E-mail virus",
    options: [
      "E-mail virus",
      "Macro virus",
      "Trojan horse",
      "Time bomb"
    ]
  },
  {
    numb: 26,
    question: "In ODI Cricket Which Team holds the record of highest margin win (by score) is?",
    answer: "New Zealand",
    options: [
      "Australia",
      "South Africa",
      "New Zealand",
      "Sri Lanka"
    ]
  },
  {
    numb: 27,
    question: "In the manufacture of banaspati ghee the gas used is ________?",
    answer: "Hydrogen",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Nitrogen"
    ]
  },
  {
    numb: 28,
    question: "In the Washington D.C, D.C signifies __________?",
    answer: "District of Columbia",
    options: [
      "District of coordinated states",
      "District of Croatia",
      "District of Columbia",
      "District centralized"
    ]
  },
  {
    numb: 29,
    question: "In what state Brake Obama born in_________?",
    answer: "Hawaii",
    options: [
      "Florida",
      "Arizona",
      "Hawaii",
      "Alaska"
    ]
  },
  {
    numb: 30,
    question: "In which city Interpol was founded in September 7, 1923?",
    answer: "Vienna",
    options: [
      "Paris",
      "London",
      "Vienna",
      "Geneva"
    ]
  }
];
