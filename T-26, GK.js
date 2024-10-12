// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "ON 15th August which Country(s) celebrates their Independence Day?",
    answer: "India & Congo",
    options: [
      "South Korea",
      "India & Congo",
      "Liechtenstein",
      "All of Above"
    ]
  },
  {
    numb: 2,
    question: "One nautical mile is equal to how many kilometers?",
    answer: "1.853",
    options: [
      "1.613",
      "1.932",
      "1.853",
      "1.766"
    ]
  },
  {
    numb: 3,
    question: "Organization of Islamic Cooperation (OIC) has ____ official languages.",
    answer: "3",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 4,
    question: "Pakistan became a member of International Atomic Energy Agency (IAEA) in ____?",
    answer: "1957",
    options: [
      "1949",
      "1953",
      "1957",
      "1963"
    ]
  },
  {
    numb: 5,
    question: "Pakistan lost the cricket world cup final in ____.",
    answer: "1999",
    options: [
      "1992",
      "1996",
      "1999",
      "2003"
    ]
  },
  {
    numb: 6,
    question: "Pakistan Tops ICC T20I Rankings for the first time on ____?",
    answer: "1st November 2017",
    options: [
      "15th July 2017",
      "13th September 2017",
      "25th October 2017",
      "1st November 2017"
    ]
  },
  {
    numb: 7,
    question: "Pakistan won Asia cricket cup in which year?",
    answer: "2009",
    options: [
      "2008",
      "2009",
      "2012",
      "2016"
    ]
  },
  {
    numb: 8,
    question: "Pakistan’s response to Indian aggression on February 27 will be remembered as ____?",
    answer: "Operation Swift Retort",
    options: [
      "Operation Swift Retort",
      "Operation Zarb-e-Azb",
      "Operation Sher-e-Dil",
      "None of these"
    ]
  },
  {
    numb: 9,
    question: "Paradise Leaks data originates from which law firm?",
    answer: "Appleby law firm",
    options: [
      "Mossaic law firm",
      "ICIJ",
      "International law firm",
      "Appleby law firm"
    ]
  },
  {
    numb: 10,
    question: "Parcel Islands in the South China Sea are disputed between China & ____ ?",
    answer: "Vietnam",
    options: [
      "Philippines",
      "Japan",
      "Vietnam",
      "South Korea"
    ]
  },
  {
    numb: 11,
    question: "PBS stands for ____?",
    answer: "Pakistan Bureau of Statistics",
    options: [
      "Pakistan Bureau of Science",
      "Pakistan Board of Statistics",
      "Pakistan Bureau of Statistics",
      "Pakistan Board of Science"
    ]
  },
  {
    numb: 12,
    question: "PCIW stands for ____ ?",
    answer: "Pakistan Commissioner for Indus Waters",
    options: [
      "Police criminal investigation wing",
      "Popcorn cut and invest company",
      "Pakistan Commissioner for Indus Waters",
      "Peep core inwater"
    ]
  },
  {
    numb: 13,
    question: "PIA Stands For ____ ?",
    answer: "Pakistan International Airlines",
    options: [
      "Punjab Air Lines",
      "Pakistan International Airlines",
      "Poland International Airlines",
      "Portugal International Airlines"
    ]
  },
  {
    numb: 14,
    question: "PMD stands for",
    answer: "Pakistan Meteorological Department",
    options: [
      "Pakistan Medical Department",
      "Pakistan Metropolitan Department",
      "Pakistan Meteorological Department",
      "Pakistan Mediocre Department"
    ]
  },
  {
    numb: 15,
    question: "Polar bears are mostly ____ ?",
    answer: "carnivorous",
    options: [
      "carnivorous",
      "Herbivorous",
      "Omnivorous",
      "None of these"
    ]
  },
  {
    numb: 16,
    question: "Port of Khalid is the Seaport of ____ ?",
    answer: "UAE",
    options: [
      "Turkey",
      "Iran",
      "Indonesia",
      "UAE"
    ]
  },
  {
    numb: 17,
    question: "Renminbi is the official currency of ____?",
    answer: "China",
    options: [
      "Taiwan",
      "China",
      "North Korea",
      "Philippines"
    ]
  },
  {
    numb: 18,
    question: "RSS ideology followed by Indian PM Modi, What does RSS stand for?",
    answer: "Rashtriya Swayamsevak Sangh",
    options: [
      "Rashtriya Swayamsevak Sangh",
      "Rashtriya Swayamsevak Sabha",
      "Rashtriya Swayamsevak Singh",
      "All of the above"
    ]
  },
  {
    numb: 19,
    question: "SANA is the news agency of ____.",
    answer: "Yemen",
    options: [
      "Saudi Arabia",
      "UAE",
      "Syria",
      "Yemen"
    ]
  },
  {
    numb: 20,
    question: "Sea of Japan’ is famous for ____ ?",
    answer: "Fishing Area",
    options: [
      "Oil Reserves",
      "Icebergs in water",
      "Fishing Area",
      "Mineral Water"
    ]
  },
  {
    numb: 21,
    question: "Shakespeare beach is located in which country?",
    answer: "England",
    options: [
      "France",
      "USA",
      "England",
      "Canada"
    ]
  },
  {
    numb: 22,
    question: "Shuttle run ‘Test’ measures: ____ ?",
    answer: "Agility",
    options: [
      "Explosive strength",
      "Speed endurance",
      "Agility",
      "Speed"
    ]
  },
  {
    numb: 23,
    question: "Sir William Wallace is known as the independence fighter of ____?",
    answer: "Scotland",
    options: [
      "Somalia",
      "Sweden",
      "Switzerland",
      "Scotland"
    ]
  },
  {
    numb: 24,
    question: "Table tennis is the national game of which country?",
    answer: "China",
    options: [
      "Canada",
      "Chile",
      "China",
      "Brazil"
    ]
  },
  {
    numb: 25,
    question: "Taklamakan Desert is located in ____?",
    answer: "China",
    options: [
      "Mongolia",
      "Chile",
      "Kazakhstan",
      "China"
    ]
  },
  {
    numb: 26,
    question: "Taurus mountains are located in?",
    answer: "Turkey",
    options: [
      "Pakistan",
      "Turkey",
      "Afghanistan",
      "Nepal"
    ]
  },
  {
    numb: 27,
    question: "The Ancient City “Prayaga” was renamed as “Allahabad” by which Mughal emperor?",
    answer: "Shah Jahan",
    options: [
      "Akbar",
      "Aurangzeb",
      "Humayun",
      "Shah Jahan"
    ]
  },
  {
    numb: 28,
    question: "The Battle of Halani was fought in___________?",
    answer: "1782",
    options: [
      "1712",
      "1748",
      "1762",
      "1782"
    ]
  },
  {
    numb: 29,
    question: "The biggest Island of the World is ____ ?",
    answer: "Greenland",
    options: [
      "Iceland",
      "Greenland",
      "England",
      "Sri Lanka"
    ]
  },
  {
    numb: 30,
    question: "The Black forest is located in which European country?",
    answer: "Germany",
    options: [
      "Germany",
      "France",
      "Britain",
      "Spain"
    ]
  }
];
