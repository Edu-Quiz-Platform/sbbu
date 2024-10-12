// Sample MCQs data
const mcqsData = [
  { // T-01, General Knowledge Start 1 - 20 | 20 MCQs
    // Qno 01 - 
    question: "______ is a country (enclaved) within a country?",
    description: "Lesotho",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 02
    question: "_______ has won the 2020 Tyler Prize for Environmental Achievement?",
    description: "Pavan Sukhdev",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 03
    question: "__________ was the first ruler of Soomra dynasty (1011-1026)?",
    description: "Al-khafif",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 04
    question: "‘History of Wolves’ book was written by:",
    description: "Emily Fridlund",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 05
    question: "“Asiana” Airline belongs to _________?",
    description: "South Korea",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 06 
    question: "“Decision Point” book is written by____________.",
    description: "George W Bush",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 07 
    question: "“Guns, Germs, and Steel” book is written by ________?",
    description: "Jared Mason Diamond",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 08 
    question: "“Izmir Adnan Menderes Airport” is located in_________?",
    description: "Turkey",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 09 
    question: "“JANA” is the news agency of_________?",
    description: "Libya",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 10 
    question: "“Kouprey” is the national animal of__________?",
    description: "Cambodia",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 11 
    question: "“Night Watch” is a famous_____________?",
    description: "Painting",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 12 
    question: "“Operation Pluto” was planned by__________?",
    description: "U.S",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 13 
    question: "“Port of Barrow” is the seaport of ___________?",
    description: "UK",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 14 
    question: "“Ratoons” is associated with__________?",
    description: "Sugarcane",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 15 
    question: "“San Julian” is the seaport of _______?",
    description: "Argentina",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 16 - General Knowledge
    question: "“Shah-jo-Risalo,” a famous book of Shah Abdul Latif, was first published in which city?",
    description: "Leipzig",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 17 
    question: "“Shewala Teja Singh temple” reopened after 72 years. It is located in _______ city of Pakistan.",
    description: "Sialkot",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 18 
    question: "“Siachen Glacier” is situated in_______?",
    description: "Karakorum",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 19 
    question: "“There is no God other than God and Muhammad (ﷺ) is his Prophet” is the national motto of_________?",
    description: "Saudi Arabia",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { 
    // Qno 20 
    question: "“Zeebrugge” is the seaport of ________?",
    description: "Belgium",
    date: "05-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },// T-01, General Knowledge End 1 - 20 | 20 MCQs
  
  { // T-02, Every Day Science Start 21 - 50 | 30 MCQs
    // Qno 21
    question: "Siemens is the unit of_______?",
    description: "Electrical Conductance",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 22
    question: "An example of an abiotic component _____?",
    description: "Soil",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 23
    question: "Spring tides occur on new moon and full moon days because on these days________?",
    description: "Sun, moon and earth are in a straight line",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 24
    question: "Hailey’s comet is visible after every_______? ",
    description: "76 years",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 25
    question: "The gravitational pull at the lunar surface is ______ of Earth?",
    description: "1/6",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 26
    question: "The strongest part(s) of a magnet is/are _____?",
    description: "North and south pole",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 27
    question: "Which element is used as moderator in nuclear reactor?",
    description: "Heavy water",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 28
    question: "What is the effect of height increase over temperature?",
    description: "Temperature decrease",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 29
    question: "In which layer of atmosphere does commercial aircrafts usually fly?",
    description: "Stratosphere",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 30
    question: "Vitamin C deficiency leads to:______?",
    description: "Scurvy",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 31
    question: "One Quintal is Equal to_____?",
    description: "100 kg",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 32
    question: "The melting point of ice is_______?",
    description: "00 C",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 33
    question: "In 2013, Planck measured the age of the universe at _______?",
    description: "13.82 billion years",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 34
    question: "Moon is a_______?",
    description: "Satellite",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 35
    question: "Density of Water is______?",
    description: "997 kg/m³",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 36
    question: "According to Einsteins general theory of relativity the universe:_______?",
    description: "Must be either expanding or contracting",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 37
    question: "Pressure is measured by_____?",
    description: "barometer",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 38
    question: "Primary cosmic rays are composed largely of very fast_______?",
    description: "Protons",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 39
    question: "What do you understand by disease “Insomnia”?",
    description: "Inability to sleep",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 40
    question: "How many rows and columns are in the modern Periodic Table?",
    description: "18 columns and 7 rows",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 41
    question: "What melted rock eventually becomes lava?",
    description: "Magma",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 42
    question: "Material for rain-proof coats and tents owe their water proof properties to ______?",
    description: "Surface tension",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 43
    question: "A man is standing on a weighing machine in a lift which is moving. The weighing machine will slow MINIMUM reading when, the lift is moving?",
    description: "In a free fall due to failure of the lift mechanism",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 44
    question: "Nitrogen occurs in plant and animals in the form of _______?",
    description: "Proteins",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 45
    question: "The large plates of solar panels are painted?",
    description: "Black",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 46
    question: "Sound travels______ in solid materials then liquid?",
    description: "Fastest",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 47
    question: "Which variety of glass is heat resistant?",
    description: "Pyrex glass",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 48
    question: "Which of the following is the most toxic gas?",
    description: "Carbon monoxide",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 49 
    question: "The element used in lead pencils is______?",
    description: "Carbon",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { 
    // Qno 50 
    question: "Calculus was invented by______?",
    description: "IsaaC Newton",
    date: "05-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  }, // T-02, Every Day Science End 21 - 50 | 30 MCQs
  
  { // T-03, English Start 51 -  | 30 MCQs
    // Qno 51
    question: "I remember my sister taking me to the museum.",
    description: "I remember being taken to the museum by my sister.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 52
    question: "Why did you waste the best part of your life?",
    description: "Why was the best part of your life wasted by you?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 53
    question: "She never understood me, whenever I said something.",
    description: "Whenever I said something, I was never understood by her.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 54
    question: "Active Voice of 'This house is used very rarely by us'.",
    description: "We use this house very rarely.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 55
    question: "Passive Voice of 'Sana is washing her clothes' is ______.",
    description: "Her clothes are being washed by Sana.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 56
    question: "Are they playing a match against them?",
    description: "Is a match being played against them by our team?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 57
    question: "Will my mother have baked the cake?",
    description: "Will the cake have been baked by my mother?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 58
    question: "When I am alone, I hear the footsteps of my friend in my imagination.",
    description: "The footsteps of my friend are heard by me when I am alone.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 59
    question: "Passive Voice of 'The box can contain no more'.",
    description: "No more can be contained in this box.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 60
    question: "Passive Voice of 'I saw him leaving the house' is ______.",
    description: "He was seen leaving the house by me.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 61
    question: "You must obey your parents.",
    description: "Your parents must be obeyed by you.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 62
    question: "Who designed a car?",
    description: "By whom was a car designed?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 63
    question: "When the men coughed, he realized that the men were quite near to him.",
    description: "When the men coughed, it was realized by him that the men were quite near to him.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 64
    question: "Active Voice of 'He was being chased by the dogs'.",
    description: "The dogs were chasing him.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 65
    question: "Passive Voice of 'The boy did not break the glass' is _____.",
    description: "The glass was not broken by the boy.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 66
    question: "Have you taken a rest?",
    description: "Has a rest been taken by you?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 67
    question: "He was driving a car when the accident occurred.",
    description: "A car was being driven by him when the accident occurred.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 68
    question: "Passive Voice of 'The baby has lost her doll'?",
    description: "Her doll has been lost by the baby.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 69
    question: "Passive Voice of 'People speak English all over the world'.",
    description: "English is spoken all over the world.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 70
    question: "Passive Voice of 'They held a meeting very early'.",
    description: "A meeting was held by them very early.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 71
    question: "His wife upbraided him for his irresponsible handling of the family finance.",
    description: "He was upbraided by his wife for his irresponsible handling of the family finance.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 72
    question: "Passive Voice of 'The teacher may punish you'.",
    description: "You may be punished by the teacher.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 73
    question: "Passive Voice of 'None likes him' is _______.",
    description: "He is liked by none.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 74
    question: "Why does an officer neglect duties?",
    description: "Why are the duties neglected by an officer?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 75
    question: "They probably won’t attend the lecture tomorrow.",
    description: "The lecture probably won’t be attended by them.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 76
    question: "Passive Voice of 'She will build this house'?",
    description: "This house will be built by her.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 77
    question: "Passive Voice of 'Sajid gave the beggar an old shirt'.",
    description: "An old shirt was given to the beggar by Sajid.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 78
    question: "Did you visit a zoo?",
    description: "Was a zoo visited by you?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 79
    question: "I said to her, 'Why are you sleeping?'",
    description: "I asked her why she was sleeping.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 80
    question: "Passive Voice of 'They broke up the table for firewood' is ______?",
    description: "The table was broken up for firewood by them.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 81
    question: "Passive Voice of 'Has someone made all the necessary arrangements?'",
    description: "Have all the necessary arrangements been made by someone?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 82
    question: "Why do you tell a lie?",
    description: "Why is a lie told by you?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 83
    question: "Who is creating this mess?",
    description: "By whom is this mess being created?",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 84
    question: "She will invite me.",
    description: "I shall be invited by her.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 85
    question: "Afridi plays the harmonium and the sitar is _______ also.",
    description: "Played by him.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 86
    question: "Passive Voice of 'She has completed two courses'.",
    description: "Two courses have been completed by her.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 87
    question: "Passive Voice of 'The boy has rung the bell'.",
    description: "The bell has been rung by the boy.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 88
    question: "I take exercise daily.",
    description: "Exercise is taken daily by me.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 89
    question: "He did not give up the fight even though he was badly bruised.",
    description: "The fight was not given up by him even though he was badly bruised.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 90
    question: "Active Voice of “Movies are not watched by him”.",
    description: "He does not watch movies.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 91
    question: "Passive Voice of “Someone pulled the bull violently”.",
    description: "The bull was pulled violently.",
    date: "06-October-2024",
    category: "English",
    author: "Raja Jani."
  }, // T-03, English End 50 - 91 | 41 MCQs
  
  { // T-04, Pakistan Studies Start 92 - 121 | 30 MCQs
  // Qno 92
    question: "The capital of Azad Jammu & Kashmir is _____?",
    description: "Muzzafar Abad",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 93
    question: "Baltistan is called ______?",
    description: "Little Tibet",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 94
    question: "When was the first Pakistani Postal Stamp issued?",
    description: "July 1948",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 95
    question: "22nd Amendment in 1973 Constitution of Pakistan is related to________?",
    description: "Powers of Election Commission Members",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 96
    question: "Name the special task force, which is established in December 2016 by Pakistan Navy to safeguard and protect the China-Pakistan Economic Corridor as well as Gwadar port?",
    description: "Task Force 88",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 97
    question: "Benazir Bhutto was born in Which City of Pakistan?",
    description: "Karachi",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 98
    question: "After how many years Pakistan got its first constitution?",
    description: "9 years",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 99
    question: "In respect of religion what term was set for President and Prime Minister in 1956 constitution?",
    description: "He must be a Muslim (this condition applicable only on president, pm may be non-muslim)",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 100
    question: "Who elects the President according to 1973 constitution?",
    description: "1. National Assembly <br> 2. Senate <br> 3. Provincial Assemblies",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 101
    question: "In constitution 1973 who were declared non-Muslims?",
    description: "Qadiyanis",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 102
    question: "The ‘Kashaf-ul-Mahjub’ was written by?",
    description: "Hazrat Data Gunj Buksh (R.A)",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 103
    question: "In which of the following cities Indian National Congress was found?",
    description: "Bombay",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 104
    question: "Pakistan conducted nuclear tests on May 28, 1998 at?",
    description: "Chaghi Hills",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 105
    question: "The members of Punjab Assembly are?",
    description: "371",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 106
    question: "The largest Railway workshop Mughalpura is situated in?",
    description: "Lahore",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 107
    question: "Urdu is a word of Turkish language, it means?",
    description: "Army",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 108
    question: "Identify the largest cantonment of Pakistan?",
    description: "Kharian Cantt",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 109
    question: "What is the total area of Sindh Province?",
    description: "140,914 Sq Km",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 110
    question: "Zafar Ahmed Chaudhry was the first Chief of Air Staff of _______?",
    description: "Air Force",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 111
    question: "The range of Hatf-4 is _______?",
    description: "750km",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 112
    question: "At the time of 1971 War the C-in-C of Pak Army was _______?",
    description: "General Agha Muhammad Yahya Khan",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 113
    question: "In which of the following city the Pakistan Naval War College is located?",
    description: "Lahore",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 114
    question: "How many Police ranges are in KPK?",
    description: "8",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 115
    question: "The Chowk Yadgar is located in _______?",
    description: "Peshawar",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 116
    question: "Tarbela dam is situated in _______?",
    description: "KPK",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 117
    question: "Gaddani is famous for _______?",
    description: "Ship Breaking",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 118
    question: "Who was King Umar?",
    description: "First King of the Sumarh Dynasty",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 119
    question: "The hottest place in Pakistan is ______?",
    description: "Turbat",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 120
    question: "The Largest Coal Reservoir are found in ______?",
    description: "Thar",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  { 
    // Qno 121
    question: "K-2 is Also Known As ________?",
    description: "Godwin Austin",
    date: "07-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  }, // T-04, Pakistan Studies End 91 - 121 | 30 MCQs
  
  { // T-05, Islamic Studies Start 122 - 151 | 30 MCQs
  // Qno 122
    question: "Hazrat Abu Bakar was the merchant of ?",
    description: "Cloth",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 123
    question: "Ghani was the title of Hazrat _______ (RA).",
    description: "Usman",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 124
    question: "Hazrat _______ proposed the compilation of Holy Quran.",
    description: "Usman",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 125
    question: "Ablution made obligatory in _________ A.H.",
    description: "5th",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 126
    question: "Prophet Hazrat ________ has the title Najeeb Ullah",
    description: "Dawood A.S",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 127
    question: "The pre-requisite to be a Muslim is?",
    description: "Both",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 128
    question: "After _______ month at Madina the change of Qibla occurred.",
    description: "18",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 129
    question: "The part of prayer the Holy Prophet did is called ________?",
    description: "Sunnat",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 130
    question: "The Funeral prayer Namaz-e-Janaza is ______?",
    description: "Farz-e-Kaffaya",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 131
    question: "What is falqaram for goats?",
    description: "40 goats",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 132
    question: "How many Hajj were performed by Hazrat Muhammad (ﷺ)?",
    description: "One",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 133
    question: "How much camels were sacrificed on the occasion of Hajj by Hazrat Muhammad (ﷺ)?",
    description: "63 camels",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 134
    question: "According to Hazrat Abdullah bin Abbas the last Wahi was descended on Hazrat Muhammad (ﷺ), how many days before death?",
    description: "7 or 9 days",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 135
    question: "After Hazrat Umar, to whom lady, script of Musaef Abi Bakr was handed over? This lady is amongst the Umhat-ul-Momenine (R.A).",
    description: "Hazrat Hifsa (R.A)",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 136
    question: "How many Madni Surahs of the Holy Quran are there?",
    description: "28",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 137
    question: "The color of the first Islamic flag was ______ ?",
    description: "White",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 138
    question: "Hazrat Muhammad (ﷺ) went to Syria with Abu-Talib at the age of_______?",
    description: "12 years",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 139
    question: "Who did accompany the Holy Prophet (ﷺ) in the migration to Madina?",
    description: "Hazrat Abu Bakr (RA)",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 140
    question: "After Hijrat to madina, what first important thing Holy prophet (ﷺ) did?",
    description: "Built a mosque for prayers",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 141
    question: "What was written on the Holy Prophet (ﷺ) seal?",
    description: "Allah Rasool Muhammad",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 142
    question: "What is the first belief in Iman-e-Mufassal?",
    description: "No deity except Allah",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 143
    question: "Name the Angel who takes out souls of life bearing creatures?",
    description: "Hazrat Izra’eel (AS)",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 144
    question: "Had –e- Qazaf (false Accusation) is _______?",
    description: "80 Lashes",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 145
    question: "Arafat gathering is held on ________?",
    description: "9 Zil hajj",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 146
    question: "Which of the following the Quran considers as an unpardonable sin?",
    description: "Shirk",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 147
    question: "______ first translated the Holy Quran into Sindhi?",
    description: "Akhund Azizullah Muttalawi",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 148
    question: "Hazrat _______ conquered the fort of Qamus.",
    description: "Ali",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 149
    question: "Original name of Abu Jehl was _______ bin Hisham.",
    description: "Omar",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 150
    question: "Hurrirah means a?",
    description: "Cat",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 151
    question: "Bilal called first aazan of ______ prayer.",
    description: "Fajar",
    date: "07-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  }, // T-05, Islamic Studies End 122 - 151 | 30 MCQs
  
  { // T-06, General Knowledge Start 152 - 181 | 30 MCQs
   // Qno 152
    question: "The world largest Muslim country by area is _______? ",
    description: "Kazakhstan",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 153
    question: "International Genetically Engineered Machines (iGEM) competition, 2017 held in ________?",
    description: "Boston, United States",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 154
    question: "A vent in the Earth’s surface that emits steam and gases, essentially associated with volcanic regions is known as ______?",
    description: "Fumarole",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 155
    question: "What is the maximum running land speed of Crocodile ?",
    description: "17 KMPL",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 156
    question: "Dushanbe is the capital of _______?",
    description: "Tajikistan",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 157
    question: "Which is national flower of Taiwan ?",
    description: "Plum Blossom",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 158
    numb: 7,
    question: "From which country does Lego come? ",
    description: "Denmark",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 159
    numb: 8,
    question: "“Black Tornado operation” happened in ______?",
    description: "India",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 160
    numb: 9,
    question: "Herodotus is called _________. ",
    description: "Father of History",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    },
  { // Qno 161
    numb: 10,
    question: "Who was the first viceroy of India?",
    description: "Lord canning",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 162
    numb: 11,
    question: "“Port Zayed ” is the seaport of _______ ?",
    description: "UAE",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 163
    numb: 12,
    question: "What is “Ikebana”?",
    description: "Japanese Art of flower arrangement",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 164
    numb: 13,
    question: "Which city is called the ‘Little Pakistan’?",
    description: "Bradford",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 165
    numb: 14,
    question: "Which player has the highest ODI individual score?",
    description: "Rohit Sharma",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 166
    numb: 15,
    question: "Who was the First Norman king of England?",
    description: "William",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 167
    numb: 16,
    question: "The first nuclear power plant in Pakistan was established at ________?",
    description: "Karachi",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 168
    numb: 17,
    question: "How many diffrent flavor of jelly bean exist?",
    description: "50",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 169
    numb: 18,
    question: "Buddha temple is in ________?",
    description: "China",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 170
    numb: 19,
    question: "One Belt, One Road’ (OBOR) summit-2017 was held in May in ________?",
    description: "China",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 171
    numb: 20,
    question: "What is the official language of Mexico ?",
    description: "Spanish",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 172
    numb: 21,
    question: "The fall of Constantinople occurred in _______?",
    description: "29 May 1453",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 173
    numb: 22,
    question: "Which countries had the most Nobel Prize winners in 2017?",
    description: "USA",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 174
    numb: 23,
    question: "The Mongols defeat the Khwarezmid Empire and take over Persia (Iran, Afghanistan) in ________ ?",
    description: "1221",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 175
    numb: 24,
    question: "Total number of sections of ANF Force Act are _________?",
    description: "17",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 176
    numb: 25,
    question: "World Heart Day is Celebrated every year on ________?",
    description: "29 September",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 177
    numb: 26,
    question: "Bakhtar is the news agency of what country ? ",
    description: "Afghanistan",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 178
    numb: 27,
    question: "Which is the national game of Nepal?",
    description: "Volleyball",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 179
    numb: 28,
    question: "Kirana mountains are present in _______? ",
    description: "Pakistan",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 180
    numb: 29,
    question: "Which of the following countries becomes first in Africa to launch high speed train 320Km/h?",
    description: "Morocco",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  { // Qno 181
    numb: 30,
    question: "When Wrestling Introduced In Olympics Games ________?",
    description: "1904",
    date: "06-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  }, // T-06, General Knowledge End 151 - 181 | 30 MCQs
  
   { // T-07, Every Day Science Start 181 - 201 | 20 MCQs
    // Qno 182
    numb: 1,
    question: "A Fahrenheit thermometer indicates a temperature of ‘ 14°F. its corresponding reading on the Celsius scale will be ______?",
    description: "– 10°C",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 183
    numb: 2,
    question: "A satellite moving round the earth with a uniform speed has _________?",
    description: "Uniform acceleration",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 184
    numb: 3,
    question: "The biggest planet in our solar system is ________?",
    description: "Jupiter",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 185
    numb: 4,
    question: "Anti Diuretic hormone is secreted by one of the following glands?",
    description: "Pituitary",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 186
    numb: 5,
    question: "One of the following countries produces maximum energy from atomic reactors?",
    description: "USA",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 187
    numb: 6,
    question: "Serum if blood plasma minus its? ",
    description: "Clotting proteins ",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 188
    numb: 7,
    question: "Steering of a car involves?",
    description: "A pair of forces acting along the same line and in opposite direction",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 189
    numb: 8,
    question: "All matter is made of _________? ",
    description: "Atoms",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 190
    numb: 9,
    question: "The soul of chemistry is dealing with _______?",
    description: "Composition and properties of matter",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
    },
  { // Qno 191
    numb: 10,
    question: "Moon light reaches to earth in __________ seconds?",
    description: "1.3 seconds",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 192
    numb: 11,
    question: "The study Of GLANDS is called?",
    description: "Endocrinology",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 193
    numb: 12,
    question: "Sodium carbonate is produced by ________?",
    description: "Amonia solvay process",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 194
    numb: 13,
    question: "Which of the following planets is known as “morning star”? ",
    description: "Venus",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 195
    numb: 14,
    question: "In the manufacture of banaspati ghee the gas used is ________?",
    description: "Hydrogen",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 196
    numb: 15,
    question: "A pulsar is a rapidly spinning neutron star which emits:",
    description: "Radio waves detectable from Earth",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 197
    numb: 16,
    question: "What are the names of the two stars in the Big Dipper used to locate Polaris?",
    description: "The Pointer Stars",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 198
    numb: 17,
    question: "The average speed of a moving object during a given interval of time is always:",
    description: "The distance covered during the time interval divided by the time interval",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 199
    numb: 18,
    question: "Color of the glow produced in the discharge tube:",
    description: "Depends on the gas used in the discharge tube",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 200
    numb: 19,
    question: "The amount of energy required by the children of age between one to three years is _________?",
    description: "1200 k Calories ",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  { // Qno 201
    numb: 20,
    question: "The season changes because of the ________?",
    description: "Earth is revolving round the sun",
    date: "07-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  }, // T-07, Every Day Science End 181 - 201 | 20 MCQs
  
   {  // T-08, English Start 202 - 231 | 30 MCQs
   // Qno 202
    numb: 1,
    question: 'Synonym of "Mano a Mano"',
    description: "Hand to hand",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 203
    numb: 2,
    question: 'Synonym of "dormant" is _________.',
    description: "hibernating",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 204
    numb: 3,
    question: 'Synonym of "peer" is ________.',
    description: "fellow",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 205
    numb: 4,
    question: 'Synonym of "expunge" is ______.',
    description: "obliterate",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 206
    numb: 5,
    question: 'Synonym of "centrifugal" is _______?',
    description: "moving away from the centre",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 207
    numb: 6,
    question: 'Synonym of "reformation" is _______?',
    description: "change",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 208
    numb: 7,
    question: 'Synonym of "errata" is _______?',
    description: "list of errors",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 209
    numb: 8,
    question: 'Synonym of "envisage" is ________?',
    description: "visualize",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 210
    numb: 9,
    question: 'Synonym of "interpolate" is _______?',
    description: "insert",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
    },
  { // Qno 211
    numb: 10,
    question: 'Synonym of "omnipresent" is _______?',
    description: "ubiquitous",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 212
    numb: 11,
    question: 'Synonym of "bowdlerize" is _______?',
    description: "censor",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 213
    numb: 12,
    question: 'Synonym of "impugn" is _______?',
    description: "attack verbally",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 214
    numb: 13,
    question: 'Synonym of "amend" is _______?',
    description: "alter",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 215
    numb: 14,
    question: 'Synonym of "amnesty" is _______?',
    description: "pardon",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 216
    numb: 15,
    question: 'Synonym of "superfluous" is _______?',
    description: "unnecessary",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 217
    numb: 16,
    question: 'Antonym of "recondite" is ________.',
    description: "patent",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 218
    numb: 17,
    question: 'Antonym of "effluvium" is ______.',
    description: "fragrance",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 219
    numb: 18,
    question: 'Antonym of "Meticulous" is ________?',
    description: "Sloppy",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 220
    numb: 19,
    question: 'Antonym of "FALLACY" is ________?',
    description: "Truth",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 221
    numb: 20,
    question: 'Antonym of "ATTRACT" is _________?',
    description: "Repel",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 222
    numb: 21,
    question: 'Antonym of "Abstruse"?',
    description: "A.O.T",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 223
    numb: 22,
    question: 'Which one of the following is antonym of "Mordant" while others are synonyms?',
    description: "pleasant",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 224
    numb: 23,
    question: 'Which one of the following is antonym of "Raucous" while others are synonyms?',
    description: "Subdued",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 225
    numb: 24,
    question: 'Antonym of "filthy" is ________?',
    description: "Clean",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 226
    numb: 25,
    question: 'Antonym of "ARTIFICIAL" is ________?',
    description: "Natural",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 227
    numb: 26,
    question: 'Antonym of "DUCTILE" is ________?',
    description: "Stiff",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 228
    numb: 27,
    question: 'Antonym of "FOREMOST" is _________?',
    description: "Unimportant",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 229
    numb: 28,
    question: 'Antonym of "DENIGRATE" is ________?',
    description: "Boost",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 230
    numb: 29,
    question: 'Antonym of "SINGULAR" is ________?',
    description: "Common",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  { // Qno 231
    numb: 30,
    question: 'Antonym of "brazen" is _______.',
    description: "bashful",
    date: "07-October-2024",
    category: "English",
    author: "Raja Jani."
  },  // T-08, English End 202 - 231 | 30 MCQs
  
  { // 7 C's of Communication Start 232 - 277 | 46 MCQs
   // Qno 232
    question: "Which of the following is NOT one of the 7 C’s of communication?",
    description: "Creativity",
    explanation: "Creativity is not part of the 7 C's. The correct ones are Completeness, Conciseness, Clarity, Correctness, Concreteness, Courtesy, and Consideration.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  { // Qno 233
    question: "The 'C' in Conciseness stands for?",
    description: "Compact",
    explanation: "Conciseness means conveying the message with brevity by avoiding unnecessary words.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  { // Qno 234
    question: "To ensure your message is easy to understand, which C should be followed?",
    description: "Clarity",
    explanation: "Clarity ensures that the message is easily understood without confusion.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  { // Qno 231
    question: "When a message is free of errors and distortions, it meets which C?",
    description: "Correctness",
    explanation: "Correctness refers to error-free and grammatically correct communication.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  { // Qno 231
    question: "A message that includes all necessary information follows which principle?",
    description: "Completeness",
    explanation: "Completeness ensures that all relevant information is included.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C ensures the sender uses polite and considerate language?",
    description: "Courtesy",
    explanation: "Courtesy involves using polite language and showing respect to the receiver.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Eliminating unnecessary words is part of which C?",
    description: "Conciseness",
    explanation: "Conciseness means delivering the message in a clear, brief manner.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "What does Concreteness in communication refer to?",
    description: "Using facts and figures",
    explanation: "Concreteness ensures messages are clear and specific, backed by facts and details.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which of the following is an example of Completeness in communication?",
    description: "Providing relevant details",
    explanation: "Completeness ensures the message includes all necessary information for the receiver to understand it fully.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C ensures that your message is precise and to the point?",
    description: "Conciseness",
    explanation: "Conciseness ensures the message is short and contains only essential information.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Courtesy in communication means:",
    description: "Being respectful",
    explanation: "Courtesy refers to showing respect and consideration towards the audience.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "In business communication, which C helps avoid misunderstandings?",
    description: "Clarity",
    explanation: "Clarity ensures that the message is easy to understand and free of ambiguity.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Using proper grammar and punctuation falls under which C?",
    description: "Correctness",
    explanation: "Correctness ensures grammatical and factual accuracy in the message.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "The use of examples and data for support is related to which C?",
    description: "Concreteness",
    explanation: "Concreteness means using specific details to make the message more effective.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Avoiding ambiguity in communication relates to which C?",
    description: "Clarity",
    explanation: "Clarity helps ensure that the message is clear and easily understood.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "A message that considers the receiver’s feelings reflects which C?",
    description: "Courtesy",
    explanation: "Courtesy ensures respect for the feelings of the receiver.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Concreteness ensures that:",
    description: "The message is based on facts",
    explanation: "Concreteness ensures the message is specific, supported by evidence.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C helps to create a positive impression in communication?",
    description: "Courtesy",
    explanation: "Courtesy creates a positive impression by showing respect and politeness.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Correctness involves:",
    description: "Avoiding errors",
    explanation: "Correctness ensures that the message is free from grammatical and factual errors.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C encourages you to stay on topic in communication?",
    description: "Conciseness",
    explanation: "Conciseness keeps the message focused and avoids unnecessary details.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "An example of Clarity in communication would be:",
    description: "Using familiar words",
    explanation: "Clarity means using simple, familiar language to ensure the message is easily understood.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Being brief and direct relates to which C?",
    description: "Conciseness",
    explanation: "Conciseness ensures the message is conveyed briefly without irrelevant details.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C involves respecting cultural differences in communication?",
    description: "Courtesy",
    explanation: "Courtesy involves respect for cultural and social differences in communication.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "If your message is easy to read, you are following which C?",
    description: "Clarity",
    explanation: "Clarity ensures that the message is easy to understand and read.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Reducing wordiness ensures which C is met?",
    description: "Conciseness",
    explanation: "Conciseness involves reducing unnecessary words or repetition to keep the message clear and brief.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "What does Courtesy in communication require?",
    description: "Being polite",
    explanation: "Courtesy ensures politeness and consideration for the audience’s feelings.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C emphasizes that the message should be well-organized and logical?",
    description: "Clarity",
    explanation: "Clarity ensures that the message is structured logically and is easy to follow.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C ensures that a message is free from confusion and ambiguity?",
    description: "Clarity",
    explanation: "Clarity ensures that the message is straightforward and easily understood by the receiver.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Concreteness in communication helps to:",
    description: "Avoid vague language",
    explanation: "Concreteness ensures specific details are used to avoid confusion and misinterpretation.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which of the following is an example of Correctness in communication?",
    description: "Using proper grammar",
    explanation: "Correctness involves ensuring that the message is free from errors in language, facts, and structure.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C refers to the practice of respecting the receiver’s time and avoiding unnecessary details?",
    description: "Conciseness",
    explanation: "Conciseness means that the message is short, without sacrificing clarity or key information.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "To be considerate in communication, you should:",
    description: "Focus on the receiver's perspective",
    explanation: "Consideration involves empathizing with the receiver and tailoring the message to their needs and expectations.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which of the following is essential for ensuring Completeness in a message?",
    description: "Including all necessary details",
    explanation: "Completeness ensures that the receiver has all the information they need to understand the message.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "When tailoring a message to the audience’s level of understanding, which C is important?",
    description: "Consideration",
    explanation: "Consideration involves adapting the message to the needs, background, and knowledge level of the receiver.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C ensures that the message is tailored to the receiver’s expectations?",
    description: "Consideration",
    explanation: "Consideration means thinking from the receiver’s point of view to ensure the message is appropriate and understood.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "A message that is structured and organized to make it easily understandable relates to which C?",
    description: "Clarity",
    explanation: "Clarity ensures the message is well-organized and easily understood.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Using polite language to avoid offending the receiver follows which principle?",
    description: "Courtesy",
    explanation: "Courtesy requires using respectful language to maintain a positive tone.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C ensures that the message is presented in a manner that is respectful to the audience?",
    description: "Courtesy",
    explanation: "Courtesy ensures that communication is delivered in a respectful, polite, and positive manner.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which of the following examples best represents Concreteness?",
    description: "Providing specific dates and figures",
    explanation: "Concreteness means providing specific and tangible details to back up the message.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Correctness in communication ensures:",
    description: "Accurate information is provided",
    explanation: "Correctness ensures that the message is accurate, free from errors, and grammatically correct.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "If a message includes facts and details, it represents which C?",
    description: "Concreteness",
    explanation: "Concreteness ensures that the message is specific, clear, and based on facts.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C is crucial when explaining technical information to a non-expert audience?",
    description: "Clarity",
    explanation: "Clarity ensures that even technical information is presented in a way that a non-expert can understand.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Being brief and avoiding redundancy relates to which C?",
    description: "Conciseness",
    explanation: "Conciseness helps avoid wordiness by keeping the message short and to the point.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Using familiar language in communication ensures which C?",
    description: "Clarity",
    explanation: "Clarity ensures that the message is communicated using language that the receiver understands.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "A message that takes into account the receiver’s feelings follows which C?",
    description: "Consideration",
    explanation: "Consideration ensures that the receiver’s feelings, background, and perspective are respected.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
  {
    question: "Which C ensures the message is brief without losing its meaning?",
    description: "Conciseness",
    explanation: "Conciseness ensures brevity while maintaining the message’s core meaning.",
    date: "08-October-2024",
    category: "7 C's of Communication",
    author: "Raja Jani."
  },
    {
        question: "Which C ensures the message is brief without losing its meaning?",
        description: "Conciseness",
        explanation: "Conciseness ensures brevity while maintaining the message’s core meaning.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    }, // 7 C's of Communication End 232 - 277 | 46 MCQs
    
    { // Communication and it's types Start 277 - 320 | 43 MCQs
        question: "Which type of communication is characterized by face-to-face interactions?",
        description: "Verbal Communication",
        explanation: "Verbal communication includes spoken words exchanged in person.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which form of communication is often used for official purposes?",
        description: "Formal Communication",
        explanation: "Formal communication adheres to established protocols and guidelines.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication involves the use of symbols, signs, and gestures?",
        description: "Non-verbal Communication",
        explanation: "Non-verbal communication includes body language, facial expressions, and gestures.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which C emphasizes the need for clarity in communication?",
        description: "Clarity",
        explanation: "Clarity ensures the message is easily understood by the receiver.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication is typically informal and spontaneous?",
        description: "Informal Communication",
        explanation: "Informal communication often occurs naturally and without rigid structure.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication utilizes written words to convey a message?",
        description: "Written Communication",
        explanation: "Written communication provides a tangible record of the information conveyed.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "What is the term for any factor that disrupts the clarity of communication?",
        description: "Noise",
        explanation: "Noise refers to any disturbance that interferes with the communication process.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication is most appropriate for delivering bad news?",
        description: "Verbal Communication",
        explanation: "Verbal communication is often more suitable for sensitive discussions.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which C represents the completeness of a message in communication?",
        description: "Completeness",
        explanation: "Completeness ensures that the message contains all necessary information.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which of the following can enhance written communication?",
        description: "Clarity and Structure",
        explanation: "Clarity and structure improve the effectiveness of written communication.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication includes feedback from the receiver?",
        description: "Interactive Communication",
        explanation: "Interactive communication involves a two-way exchange of information.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which C refers to the logical flow of information in communication?",
        description: "Coherence",
        explanation: "Coherence ensures that the information is presented logically and understandably.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which communication style is often used to persuade or influence others?",
        description: "Persuasive Communication",
        explanation: "Persuasive communication aims to convince the audience of a particular viewpoint.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication is essential for team collaboration?",
        description: "Collaborative Communication",
        explanation: "Collaborative communication is vital for effective teamwork and information sharing.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication is characterized by spontaneous exchanges?",
        description: "Informal Communication",
        explanation: "Informal communication is characterized by casual, unstructured interactions.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which is a feature of effective non-verbal communication?",
        description: "Consistency with Verbal Messages",
        explanation: "Effective non-verbal communication should align with verbal messages.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which form of communication is often best for complex instructions?",
        description: "Written Communication",
        explanation: "Written communication allows for clarity and reference when giving complex instructions.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "What is the primary goal of communication?",
        description: "To Convey Information",
        explanation: "The main goal of communication is to effectively convey information between parties.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which type of communication is critical for remote teams?",
        description: "Digital Communication",
        explanation: "Digital communication is essential for remote teams to stay connected.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    },
    {
        question: "Which communication method allows for the most immediate feedback?",
        description: "Face-to-face Communication",
        explanation: "Face-to-face communication allows for real-time interaction and immediate feedback.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which of the following is a potential barrier to effective communication?",
        description: "Noise",
        explanation: "Noise can interfere with the clarity of the message being delivered.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which communication channel is most effective for formal presentations?",
        description: "Verbal Communication",
        explanation: "Verbal communication is crucial for delivering formal presentations.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "What role does feedback play in communication?",
        description: "To Verify Understanding",
        explanation: "Feedback is essential for confirming that the message was understood correctly.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which communication style is typically more structured?",
        description: "Formal Communication",
        explanation: "Formal communication follows specific protocols and structures.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which type of communication includes casual conversations among friends?",
        description: "Informal Communication",
        explanation: "Informal communication includes relaxed and spontaneous discussions.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which communication style focuses on providing detailed instructions?",
        description: "Instructional Communication",
        explanation: "Instructional communication is aimed at teaching and guiding the audience.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which term describes the ability to communicate effectively in diverse situations?",
        description: "Communication Competence",
        explanation: "Communication competence refers to the ability to adapt communication styles appropriately.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "What is a key characteristic of non-verbal communication?",
        description: "Expressiveness",
        explanation: "Non-verbal communication is often more expressive and impactful than words alone.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which type of communication is typically asynchronous?",
        description: "Written Communication",
        explanation: "Written communication can be reviewed and responded to at a later time.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which of the following is essential for effective communication?",
        description: "Active Listening",
        explanation: "Active listening is crucial for understanding and responding appropriately.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "What does the term 'communication barrier' refer to?",
        description: "Obstacles to Effective Communication",
        explanation: "Communication barriers are obstacles that hinder the exchange of information.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which communication type relies heavily on the context of the interaction?",
        description: "Contextual Communication",
        explanation: "Contextual communication is influenced by the setting and circumstances of the interaction.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "What is the primary function of feedback in communication?",
        description: "To Provide Clarification",
        explanation: "Feedback helps clarify misunderstandings and confirms comprehension.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which of the following best describes digital communication?",
        description: "Using Digital Platforms",
        explanation: "Digital communication involves using digital tools and platforms to convey messages.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which type of communication is characterized by its intentionality?",
        description: "Deliberate Communication",
        explanation: "Deliberate communication is characterized by intentional messaging.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which C refers to the careful selection of words to ensure understanding?",
        description: "Clarity",
        explanation: "Clarity in word choice enhances the understanding of the message.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "What is a key advantage of written communication?",
        description: "Permanent Record",
        explanation: "Written communication provides a permanent record for future reference.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which type of communication is less formal and more personal?",
        description: "Informal Communication",
        explanation: "Informal communication is often more personal and less structured.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "What role does body language play in communication?",
        description: "Non-verbal Cues",
        explanation: "Body language provides important non-verbal cues that complement verbal messages.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which type of communication is often used in presentations?",
        description: "Verbal Communication",
        explanation: "Verbal communication is key during presentations to convey information effectively.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which type of communication is characterized by interaction and engagement?",
        description: "Interactive Communication",
        explanation: "Interactive communication encourages engagement and participation from both parties.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
        
    },
    {
        question: "Which C emphasizes the logical structure of communication?",
        description: "Coherence",
        explanation: "Coherence ensures that the message flows logically and is easy to follow.",
        date: "08-October-2024",
    category: "Communication and it's types",
    author: "Raja Jani."
    }, // Communication and it's types End 277 - 320 | 43 MCQs
    
    { // T-09 Pakistan Studies Start 320 - 350 | 30 MCQs
    numb: 1,
    question: "The length of Siachen Glacier is _______ ",
    description: "76km",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: '"The place where heaven and earth meet" these words are said about which place ?',
    description: "Punial",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "What is the average height of Chaghi range ?",
    description: "3000 meters",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Who was the first Pakistani to clumb the K-2?",
    description: "Ashraf Aman",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "The largest mosque of Pakistan located in Islamabad is called _________ ?",
    description: "Shah Faisal Mosque",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Major languages of FATA are ________?",
    description: "Pashto",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "River Neelum is situated in ________?",
    description: "AJ&K",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Which Pakistani area is sandwiched between China and Indian-held Kashmir?",
    description: "Baltistan",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Who was the first President of Pakistan?",
    description: "Iskander Mirza",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
    },
  {
    numb: 10,
    question: "Jinnah the only film on the life of Quaid-e-Azam was produced by?",
    description: "Jamil Dehlavi",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Pakistan test fired its first submarine launched cruise missile Babur-III on 9 January 2017, has the range of _________ kilometres?",
    description: "450 kilometres",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Benazir Bhutto was the ________ ever female Prime Minister of Pakistan?",
    description: "First",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "What document was firstly drafted to give pace to constitution making process?",
    description: "Objective Resolution",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "What was the official language declared in 1956 constitution?",
    description: "Urdu & Bangali",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "According to 1973 constitution who elects Prime Minister?",
    description: "National Assembly",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "When did Fatima Jinnah joined All India Muslim league?",
    description: "1939",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Who Reviewed the famous book “The Indian Musalmans” in 1872?",
    description: "Sir Syed Ahmed Khan",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "In which of the following cities All India Muslim League was found?",
    description: "Dhaka",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "What is the total area of Punjab Province?",
    description: "205,344 Sq Km",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Tenure of National and Provincial Assemblies is?",
    description: "4 years",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The ruins of Harrapa are situated in district?",
    description: "Sahiwal",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: 'Who wrote "Mauj-e-Kausar"?',
    description: "Shaikh Muhammad Ikram",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Which city of Pakistan held the OIC Conference in 1997?",
    description: "Islamabad",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "What is the total area of Khyber Pakhtoon Khawah Province?",
    description: "74,521 Sq Km",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "Defence day is observed on _______ ?",
    description: "6th September",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "The latest version of Hatf-5 is ______ ?",
    description: "Ghauri-1",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "At the time of Kargil in 1999 the Chief of Army Staff was _______ ?",
    description: "General Parvez Musharaf",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "In which of the following city Pakistan Command & Staff College is located ?",
    description: "Quetta",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "World’s largest tribal society is _______ ?",
    description: "Pashtun",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Peshawar means ________ ?",
    description: "City of flowers",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  
];
