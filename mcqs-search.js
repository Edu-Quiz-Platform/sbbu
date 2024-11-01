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
    
    { // T-09 Pakistan Studies Start 232 - 261 | 30 MCQs
     // Qno 232
    numb: 1,
    question: "The length of Siachen Glacier is _______ ",
    description: "76km",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 2, // Qno 233
    question: '"The place where heaven and earth meet" these words are said about which place ?',
    description: "Punial",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 3, // Qno 234
    question: "What is the average height of Chaghi range ?",
    description: "3000 meters",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 4, // Qno 235
    question: "Who was the first Pakistani to clumb the K-2?",
    description: "Ashraf Aman",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 5, // Qno 236
    question: "The largest mosque of Pakistan located in Islamabad is called _________ ?",
    description: "Shah Faisal Mosque",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 6, // Qno 237
    question: "Major languages of FATA are ________?",
    description: "Pashto",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 7, // Qno 238
    question: "River Neelum is situated in ________?",
    description: "AJ&K",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 8, // Qno 239
    question: "Which Pakistani area is sandwiched between China and Indian-held Kashmir?",
    description: "Baltistan",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 9, // Qno 240
    question: "Who was the first President of Pakistan?",
    description: "Iskander Mirza",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
    },
  {
    numb: 10, // Qno 241
    question: "Jinnah the only film on the life of Quaid-e-Azam was produced by?",
    description: "Jamil Dehlavi",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 11, // Qno 242
    question: "Pakistan test fired its first submarine launched cruise missile Babur-III on 9 January 2017, has the range of _________ kilometres?",
    description: "450 kilometres",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 12, // Qno 243
    question: "Benazir Bhutto was the ________ ever female Prime Minister of Pakistan?",
    description: "First",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 13, // Qno 244
    question: "What document was firstly drafted to give pace to constitution making process?",
    description: "Objective Resolution",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 14, // Qno 245
    question: "What was the official language declared in 1956 constitution?",
    description: "Urdu & Bangali",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 15, // Qno 246
    question: "According to 1973 constitution who elects Prime Minister?",
    description: "National Assembly",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 16, // Qno 247
    question: "When did Fatima Jinnah joined All India Muslim league?",
    description: "1939",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 17, // Qno 248
    question: "Who Reviewed the famous book “The Indian Musalmans” in 1872?",
    description: "Sir Syed Ahmed Khan",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 18, // Qno 249
    question: "In which of the following cities All India Muslim League was found?",
    description: "Dhaka",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 19, // Qno 250
    question: "What is the total area of Punjab Province?",
    description: "205,344 Sq Km",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 20, // Qno 251
    question: "Tenure of National and Provincial Assemblies is?",
    description: "4 years",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 21, // Qno 252
    question: "The ruins of Harrapa are situated in district?",
    description: "Sahiwal",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 22, // Qno 253
    question: 'Who wrote "Mauj-e-Kausar"?',
    description: "Shaikh Muhammad Ikram",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 23, // Qno 254
    question: "Which city of Pakistan held the OIC Conference in 1997?",
    description: "Islamabad",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 24, // Qno 255
    question: "What is the total area of Khyber Pakhtoon Khawah Province?",
    description: "74,521 Sq Km",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 25, // Qno 256
    question: "Defence day is observed on _______ ?",
    description: "6th September",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 26, // Qno 257
    question: "The latest version of Hatf-5 is ______ ?",
    description: "Ghauri-1",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 27, // Qno 258
    question: "At the time of Kargil in 1999 the Chief of Army Staff was _______ ?",
    description: "General Parvez Musharaf",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 28, // Qno 259
    question: "In which of the following city Pakistan Command & Staff College is located ?",
    description: "Quetta",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 29, // Qno 260
    question: "World’s largest tribal society is _______ ?",
    description: "Pashtun",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 30, // Qno 261
    question: "Peshawar means ________ ?",
    description: "City of flowers",
    date: "08-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  }, // T-09 Pakistan Studies End 232 - 261 | 30 MCQs
  
  {  // T-10 Islamic Studies Start 262 - 291 | 30 MCQs
     // Qno 262
    numb: 1,
    question: "Which is the most liked place by Allah Ta'ala?",
    description: "Mosque",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 263
    numb: 2,
    question: "Which is third month of Islamic Calendar?",
    description: "Rabi-ul-Awwal",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 264
    numb: 3,
    question: "How many Surahs of the Holy Quran start with word ‘Inna‘ ?",
    description: "Four",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 265
    numb: 4,
    question: "Fasting was made obligatory in ______.",
    description: "10th Shaban, 2 A.H",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 266
    numb: 5,
    question: "What does Taraweeh means?",
    description: "To Rest",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 267
    numb: 6,
    question: "How many fasts Hazrat Isa (A.S) Kept in desert and advised his followers to follow it?",
    description: "40",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 268
    numb: 7,
    question: "Who was the first son of Hazrat Muhammad (ﷺ)?",
    description: "Hazrat Al-Qasim",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 269
    numb: 8,
    question: "Hazrat Qasim and Hazrat Abdullah sons of Hazrat Muhammad (ﷺ) are burried in _________.",
    description: "Jannat al-Mu’alla",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 270
    numb: 9,
    question: "Sixth Wife of Hazrat Muhammad (ﷺ) was _______.",
    description: "Hazrat Salmah (R.A)",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
    },
  { // Qno 271
    numb: 10,
    question: "Which Sura is the name of one Holy war?",
    description: "Ahzab",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 272
    numb: 11,
    question: "Hazrat Adam (A.S) name mentioned in the Holy Quran ____ times.",
    description: "25",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 273
    numb: 12,
    question: "What is name of 14th Para of Holy Qur’an?",
    description: "Rubama",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 274
    numb: 13,
    question: "Which Sura is called ‘Aroos-ul-Qur’an (the Bride of the Qur’an)?",
    description: "Rahman",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 275
    numb: 14,
    question: "Which was the favorite month of Hazrat Muhammad (ﷺ)?",
    description: "Sha’ban",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 276
    numb: 15,
    question: "How many units (rakat) taraveh are offered in Ramadan?",
    description: "20",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 277
    numb: 16,
    question: "______ Umm-ul-Momineen received salutation from Allah.",
    description: "Hazrat Khadija (R.A)",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 278
    numb: 17,
    question: "How many daughters Hazrat Khadija (R.A) had with Hazrat Muhammad (ﷺ)?",
    description: "Four",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 279
    numb: 18,
    question: "Hazrat Khadija (R.A) is commonly regarded by Muslims as the ____________.",
    description: "Mother of the Muslims",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 280
    numb: 19,
    question: "Where is the grave of Hazrat Haroon (A.S) ?",
    description: "Jordan",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 281
    numb: 20,
    question: "Surah Tauba the only Surah Which does not start with Bismillah is in Which Parah?",
    description: "10 & 11",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 282
    numb: 21,
    question: "Where is Hazrat Abdul Muttalib burried?",
    description: "Makkah",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 283
    numb: 22,
    question: "Hazrat Adam (A.S) met with Holy Prophet (ﷺ) on the ________ heaven?",
    description: "1st",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 284
    numb: 23,
    question: "Ohad is located near __________?",
    description: "Madina",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 285
    numb: 24,
    question: "Hazrat Umar was Caliph for__________Years?",
    description: "10 years",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 286
    numb: 25,
    question: "Who Urged Hazrat Adam (A.S) to taste Prohibited Tree ?",
    description: "Iblees",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 287
    numb: 26,
    question: "The Short period between two Sajda’s is called________?",
    description: "Jalsa",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 288
    numb: 27,
    question: "Name the Prophet who was the first man to write?",
    description: "Hazrat Idrees (A.S)",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 289
    numb: 28,
    question: "Boat of Hazrat Noah (A.S) is called ________?",
    description: "Curve",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 290
    numb: 29,
    question: "The Mosque of Prophet (ﷺ) was damaged due to fire in the reign of__________?",
    description: "Motasim Billah",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  { // Qno 291
    numb: 30,
    question: "The Muslim invaded Spain in__________?",
    description: "711 A.D",
    date: "08-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  }, // T-10 Islamic Studies End 262 - 291 | 30 MCQs
  
  { // T-11 General Knowledge Start 292 - 321 | 30 MCQs
    numb: 1,
    question: "Basman Palace is the official residence of___________?",
    description: "King of Jordan",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Battle of Gallipoli resulted in the victory of __________?",
    description: "Turkey",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "BERNAMA is the news agency of __________ ?",
    description: "Malaysia",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Black Pool is a __________ in England?",
    description: "Resort",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Braathens airline belong to which Country?",
    description: "Sweden",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Building of the Supreme Court in Islamabad was designed by a _________ architect?",
    description: "Japanese",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "Capital of Chechnya is _________?",
    description: "Grozny",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Cetology is the study of__________?",
    description: "Whales and Dolphins",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "China-Pakistan Economic Corridor (CPEC) starts at __________?",
    description: "Kashgar",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    },
  {
    numb: 10,
    question: "CT Scan stand for__________?",
    description: "Computed Tomography Scan",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Currency of France is ____________?",
    description: "Euro",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Current Director General of International Organization of Migration is?",
    description: "Antonio Vitorino",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Dar es Salaam was former capital of__________?",
    description: "Tanzania",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Darul Uloom Deoband was founded in________?",
    description: "31 May 1866",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Dialysis is used for the treatment of ?",
    description: "Kidney failure",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Duckworth Lewis method in cricket was introduced after 1992 Cricket World Cup by___________?",
    description: "Both Frank Duckworth & Tony Lewis",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Durand Cup is associated with the game of __________?",
    description: "Football",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "During the first trip of Donald Trump to Saudi Arabia, the two countries signed a ________ arms deal?",
    description: "$110 billion",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "Each year the International Day of Peace is observed around the world on _________?",
    description: "21 September",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Earth’s largest ice volume is present in ___________?",
    description: "Antarctica",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "Eden of Sindh is called_________?",
    description: "Larkana",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Ernesto”Che”Guevara was a famous revolutionary guerrilla fighter to which country did he belong?",
    description: "Argentina",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Eyeglasses are invented in Italy in________?",
    description: "1286",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Favourite place for Hollywood film production is?",
    description: "Los Angeles",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "February 14 is known as _________ ?",
    description: "Valentine Day",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "FIFA was founded in_________?",
    description: "1904",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Financial Action Task Force (FATF) was founded in which year?",
    description: "1989",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "FIR stands for ___________?",
    description: "First Information Report",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Fire temple is the place of worship of which of the following religion ?",
    description: "Zoroastrianism (Parsi Religion)",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "First Afghan War took place in ?",
    description: "1839",
    date: "08-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  }, // T-11 General Knowledge End 292 - 321 | 30 MCQs
  
  
  { // T-12 Every Day Science Start 332 - 351 | 30 MCQs
    numb: 1,
    question: "Which part of the Camera is analogue to the retina in the human eye?",
    description: "Film",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "T.V. transmission cannot cover a very large area because.",
    description: "the shape of the earth is spherical",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Water is a highly effective coolant for a car engine because ______?",
    description: "Water has very high specific heat capacity",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "The theory of Expanding Universe was first propounded by_________?",
    description: "Hubble",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "The dominant phase of life cycle in these organism is haploid?",
    description: "Mosses",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "The earth’s ___________ is divided into 15 major plates of various sizes.",
    description: "Lithosphere",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "Geiger-Muller counter is used to detect__________?",
    description: "Protons",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Which of these is not a region of the spinal cord?",
    description: "Pelvic",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "A tight-rope walker carries a long pole which he holds across his body. The purpose of this pole is to_______?",
    description: "To keep the Center of gravity always above vertically above the rope",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
    },
  {
    numb: 10,
    question: "The protons and neutrons are found in the center of the atom, which is called the ________of the atom?",
    description: "Nucleus",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Vertebral Column in human beings consists of how many vertebrae?",
    description: "33",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "which of these plants open its mouth when insect sit on its lid?",
    description: "Pitcher plant",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Short-sight defect could be corrected by a __________ lens?",
    description: "concave lens",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Sunlight is a Great Source of __________?",
    description: "vitamin D",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Current stage of star ‘Sun’ is__________?",
    description: "yellow dwarf",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "The pancreas secrets________?",
    description: "Insulin",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "When a star becomes a singularity and has zero volume and infinite density, it is called ___________?",
    description: "Black hole",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Which one is the brightest star in the night sky?",
    description: "Sirius",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "Which of the following is a substance?",
    description: "Graphite",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "All of the following are electromagnetic radiations except_______?",
    description: "Sound waves",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The ‘stone’ formed in human kidney consist mostly of__________?",
    description: "Calcium oxalate",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Afternoon rains in the equatorial region are the result of influences _______?",
    description: "Convectional",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Bore is caused by______?",
    description: "Rising tide while meeting river currents",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Which Vitamin gets destroyed on heating?",
    description: "C",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "What is the element required for solar energy conversion ______?",
    description: "Silicon",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "Which among the following is responsible for producing color of human skin ___?",
    description: "Melanin",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Sum of all ecosystems is classified as___________?",
    description: "Biosphere",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Big Bang was an explosion that occurred ?",
    description: "15 Billion years ago",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "What is the height of The atmosphere layer mesosphere?",
    description: "85 km",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Which of the following conditions related to smoking involves damage to the alveoli sacs?",
    description: "Emphysema",
    date: "08-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  }, // T-12 Every Day Science End 332 - 351 | 30 MCQs
  
  
  { // T-13 English Start 352 - 385 | 34 MCQs
    numb: 1,
    question: "The club usually empties _____ about two in the morning?",
    description: "out",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Usman was broken________from his old friends.",
    description: "away",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "I am not acquainted ____ her father.",
    description: "with",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Sana is not known ______ me.",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Do not bother me 3 o’ clock __ night.",
    description: "at",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "My sister is bad _____ maths.",
    description: "at",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "He is accustomed ______ hot weather.",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "I was amazed ________ his misbehavior.",
    description: "At",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "He is superior _____me?",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
    },
  {
    numb: 10,
    question: "I would like to thank you ____________ behalf of all of us?",
    description: "on",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Please do not interfere ________ my personal affairs?",
    description: "in",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Nafeesa is afraid _________ spiders?",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "The railway track runs ______ the river.",
    description: "across",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "She’s angry ______ you.",
    description: "with",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Danish came out ____ his office, looking tired and worried.",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "His people built many memorials __ his greatness.",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "I saw you dancing _____ party.",
    description: "at the",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "I am proud ______ my brother.",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "The candidates shall abide ______ all directions, instructions and regulations issued by the department.",
    description: "by",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Usman is afraid ______ dog.",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The man was charged _____ murder.",
    description: "with",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "He is responsible _______the president for his decisions.",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "He looks upset, I think he took the criticism _____________ heart?",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "He is jealous ______________ her success?",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "He is interested ____________ history?",
    description: "in",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "He is good ______ Football.",
    description: "at",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Is this is the bus, ______ goes to the Sadar Bazar?",
    description: "which",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "The public were deeply sceptical ________ some of the proposals?",
    description: "About",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "We are sensible _____ the difficulties he faces?",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "The wheels of the truck press __ the road.",
    description: "against",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 31,
    question: "Head is covered ____ hair.",
    description: "with",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 32,
    question: "I am used ______ speaking English.",
    description: "to",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 33,
    question: "The Jar was full _______ oil.",
    description: "of",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 34,
    question: "I told the tailor to put red buttons _____ the dress he is making for me.",
    description: "on",
    date: "09-October-2024",
    category: "English",
    author: "Raja Jani."
  }, // T-13 English End 352 - 385 | 34 MCQs
  
  
  { // T-14 Pakistan Studies Start 385 - 415 | 30 MCQs
    numb: 1,
    question: "The area of Sindh is _________ ?",
    description: "140,914sq.km",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "The Largest Cotton Exchange Building of Pakistan is situated in _________ ?",
    description: "Karachi",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Marvi is a folk story of ____________ ?",
    description: "Sindh",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "The shrine of Shah Abdul Latif Bhitai is located in _________ ?",
    description: "Bhit Shah",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Pakistan day is observed on ?",
    description: "23rd March",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Which is the youngest mountain range on the earth ?",
    description: "Himalayas",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "The length of Baltur Glacier is ____________ ?",
    description: "62km",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Which is the highest peak of the koh-e-Sufaid Range ?",
    description: "Skaram",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Which of the following areas from potwar Plateau ? ",
    description: "A.O.T",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
    },
  {
    numb: 10,
    question: "How many peaks in the Pakistan are Higher than 8000 meters?",
    description: "5",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Famous Shakar Parrian Park is located in _________ ?",
    description: "Islamabad",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "FATA comprises of ___________?",
    description: "6 Agencies",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Mangla dam is located in ____________?",
    description: "AJ&K",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "The capital of Gilgit Baltistan is __________ ?",
    description: "Gilgit",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Who was the first Commander-in-Chief of Pakistan Army?",
    description: "Gen. Frank Meservy",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Name the cricket Stadium which is located in Khyber Agency and inaugurated by Gen Raheel Sharif in November 2016?",
    description: "Shahid Afridi cricket stadium",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "The Shortest-Serving Governor in Sindh’s History is?",
    description: "Justice(R) Saeed U zaman Saddiqi",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Benazir Bhutto was born on ___________?",
    description: "21 June 1953",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "When the Constituent Assembly passed the Objective Resolution?",
    description: "12th March 1949",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Who abrogated 1956 constitution?",
    description: "Iskander Mirza",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "In which constitution Bicameral Legislature was provided for the first time?",
    description: "1973",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Pakistan’s National Flag was prepared by_________?",
    description: "Ameer-ud-din Qadwai",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Government of India Act 1858 was passed on?",
    description: "2nd August 1858",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Who was the Viceroy of India at the time of partition of Bengal?",
    description: "Lord Curzon",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "The capital city of Gilgit Baltistan is?",
    description: "Gilgit",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "Number of houses of Pakistan’s Majlis-e-Shura (Parliament) is?",
    description: "Two",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Abdul Rehman Chughtai was attached with the art of?",
    description: "Painting",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Name the language in which the Holy Quran was translated for the first time in India?",
    description: "Persian",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "In which year was OIC founded?",
    description: "1969",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "What is the total area of FATA?",
    description: "27,220 Sq Km",
    date: "09-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  }, // T-14 Pakistan Studies End 385 - 415 | 30 MCQs
  
  
  { // T-15 Islamic Studies Start 415 - 445 | 30 MCQs
    numb: 1,
    question: "Abu Ubaidah bin Jarrah was the conqueror of__________?",
    description: "Yarmuk",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Baytal-Hikmat was a________?",
    description: "Translation bureau",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "During Which prayer, the change of Qibla happened ?",
    description: "zuhr",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Book named “The Voice of Human Justice” is biography of_________?",
    description: "Hazrat Ali (R.A)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Hazrat Abu Bakr (R.A) belonged to the tribe of__________?",
    description: "Banu Taym",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Who wrote the Treaty of Hudaibiya?",
    description: "Hazrat Ali (R.A)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "How many Umahaat ul Momineen were Hufaaz?",
    description: "3",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "The Battle of Sallasil or the Battle of Chains was fought between ________ and the Muslims?",
    description: "Persians",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Pious-Caliphate lasted for about: __________ Years?",
    description: "Thirty Years",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
    },
  {
    numb: 10,
    question: "How many Sajdas are in Salat-e-Janaza?",
    description: "0",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "________ was the brother of Hazrat Ali (R.A) who was taken as prisoner in the battle of Badr ?",
    description: "Aqeel",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "What is meaning of Tehlil?",
    description: "The recitation of Kalima",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Abdur Rehman al nasir assumed the title of Ameer ul Mominin in _______ ?",
    description: "317",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Who discovered the “Zam Zam Well”?",
    description: "Abdul Muttalib; Prophet’s grandfather",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Hazrat Umar (R.A) embraced Islam, influenced by which Surah Of Holy Quran?",
    description: "Surah Taha",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Imam Shafi was Born at Gaza and died at ____________?",
    description: "Al Fustat, Egypt",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Who was the leader of infidels during the Ghazwa-e-Uhud?",
    description: "Abu Sufyan",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: '"Naqeeb-e-Islam" is the title of __________ ?',
    description: "Hazrat Ali (R.A)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: '"Khateeb-e-Rasoolullah (SAW)" is the title of ___________?',
    description: "Hazrat Thabit bin Qais (R.A)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "What was the language of Arab people?",
    description: "Arabic",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "Name the First Jannati Shaheed who neither offered any prayer nor kept any fast?",
    description: "Hazrt Aseeram bani Abdul Ashal (R.A)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Kitab-ul-Shamayel was written by __________?",
    description: "Tirmizi",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "The permission for Tayammum was granted in _________?",
    description: "4 A.H",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Real name of Hazrat Abu Huraira (R.A) was _________?",
    description: "Abdul Rehman Ibne Sakhr Ad-Dausi",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "The book of Hadith, Kitaab-ul-Aathaar, was compiled by _______ ?",
    description: "Imam Muhammad al-Shaybani (R.A)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "Nemaz e taraweeh is?",
    description: "sunnat",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Which of the following was the Teacher of Hazrat Musa (AS) ?",
    description: "Hazrat Khizar (A.S)",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "The Gap between first and second Wahi was __________ months?",
    description: "2 Years 6 months",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "The first Msjid (Mosque) that was built by the Holy Prophet (SAW) was _________?",
    description: "Masjid-e-Quba",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "The reward of which prayer is equal to the reward of Hajj or Umrah ?",
    description: "Namaz-i-Ishraq",
    date: "09-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  }, // T-15 Islamic Studies End 415 - 445 | 30 MCQs
  
  
  { // T-16 General Knowledge Start 445 - 475 | 30 MCQs
    numb: 1,
    question: "First American woman in space?",
    description: "Sally Ride",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "First Asian games were held in year ________?",
    description: "1951",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "First commercial cellphone service started in 1984 in_______?",
    description: "Chicago (USA)",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "First ever Chinese Newspaper was launched in Pakistan is __________?",
    description: "Hushang",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "First human heart transplant operation conducted by Dr. Christian Bernard on Louis Washkansky, was conducted in.",
    description: "1967",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "First Muslim interpreter of Quran in English is ___________?",
    description: "Abdul Hakeem",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "First Tuesday of May is observed as___________?",
    description: "World Asthma Day",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Halle city located in which country?",
    description: "Germany",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Harrappa near Sahiwal was centre of___________?",
    description: "Indus valley civilization",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Hazrat Umar (R.A) embraced Islam, influenced by which Surah Of Holy Quran?",
    description: "Surah Taha",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Headquarter of Q-Mobile is in _____________?",
    description: "Karachi",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Headquartered of Pakistan Railways is in Lahore it was founded in May 13,_______?",
    description: "1861",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Headquarters of the International Civil Aviation Organization is in ___________?",
    description: "Montreal (Canada)",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Height of Statue of liberty is__________?",
    description: "93 m",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Highest rainfall area of Pakistan",
    description: "Muree",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Hindenburg line divides_________?",
    description: "Germany and Poland",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Hitler party which came into power in 1933 is known as",
    description: "Nazi Party",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "How many countries are there in Asia?",
    description: "48",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "How many feathers in shuttle in badminton?",
    description: "16 feathers",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "How many football World Cups have been played till now?",
    description: "21",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "How many players in baseball game in each team?",
    description: "9",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "How many Players in Polo Team on each side?",
    description: "4 Players",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "How many prisons are in Punjab?",
    description: "40",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "How many teams participated in Kabaddi 2020 World Cup?",
    description: "10",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "In 1999, the Melissa virus was a widely publicized:__________?",
    description: "E-mail virus",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "In ODI Cricket Which Team holds the record of highest margin win (by score) is?",
    description: "New Zealand",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "In the manufacture of banaspati ghee the gas used is ________?",
    description: "Hydrogen",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "In the Washington D.C, D.C signifies __________?",
    description: "District of Columbia",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "In what state Brake Obama born in_________?",
    description: "Hawaii",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "In which city Interpol was founded in September 7, 1923?",
    description: "Vienna",
    date: "09-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  }, // T-16 General Knowledge End 445 - 475 | 30 MCQs
  
  
  { // T-17 Every Day Science Start 475 - 505 | 30 MCQs
    numb: 1,
    question: "The atmosphere near the earth’s surface is “heated from below.” Which of the following does not significantly contribute to this heating?",
    description: "Heat energy from the earth’s interior",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "The temperature at which water boils depends mainly on?",
    description: "Air pressure",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "“Elephant” large unit of paper measurement equal to 28 by?",
    description: "23 inches",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "The top atmosphere of the Earth directly reflects back into space nearly what part of the total amount of sun’s energy coming to it?",
    description: "30%",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Which of the following is the largest planet?",
    description: "Jupiter",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Study of current and past landscapes formation is known as?",
    description: "Geo-morphology",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "The most brightest planet amongst the eight planets?",
    description: "Venus",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Battery was invented by?",
    description: "Alessandro Volta",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Microphone converts sound energy into?",
    description: "Electrical signals",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "What are stars mainly made of?",
    description: "Balls of gas",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Approximate age of the moon is?",
    description: "4.53 billion years",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "The vitamin Folate works together with __________ to produce new red blood cells?",
    description: "Vitamin B-12",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "The Mirror used in the Automobiles are?",
    description: "Convex",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "‘Bar’ is the unit of?",
    description: "Atmospheric pressure",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Why normal rain is slightly acidic?",
    description: "Carbon dioxide and water in clouds react to form carbonic acid",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "The scientific study of insects is known as?",
    description: "Entomology",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "The Temperature of the surface of the Sun is?",
    description: "5,778 Kelvin",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "The Sun is at an average distance of about________ million kilometers away from Earth?",
    description: "150 million",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "For which one of the following is the density maximum?",
    description: "Water",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Inhaled air passes through which of the following in the last?",
    description: "Bronchiole",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "Winter Solstice means?",
    description: "Longest night",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Who is the founder of the solar system?",
    description: "Copernicus",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "The study of the weather is called?",
    description: "Meteorology",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Vitamin B is found in?",
    description: "Seeds",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "During a total solar eclipse, there is most likely to be?",
    description: "A decrease in the rate of photosynthesis",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "The second most abundant metal found in the earth’s crust is?",
    description: "Silicon",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "In the electricity meter, the digit to the extreme right is?",
    description: "1/10th of the unit",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Saliva contains?",
    description: "Amylases",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Nail polish remover contains?",
    description: "Acetone",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Earth rotates the sun in?",
    description: "23 hours 56 min 4 sec",
    date: "10-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  }, // T-17 Every Day Science End 475 - 505 | 30 MCQs
  
  { // T-18 English Start 506 - 535 | 30 MCQs
    numb: 1,
    question: "Synonym of “benchmark” is _______?",
    description: "reference point",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Synonym of “barrage” is _________?",
    description: "bombardment",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Synonym of “vermin” is _________?",
    description: "objectionable pets",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Synonym of “hew” is _________?",
    description: "chop",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Synonym of “overture” is _________?",
    description: "proposal",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Synonym of “nomenclature” is _________?",
    description: "terminology",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "Synonym of “eschew” is _________?",
    description: "to avoid",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Synonym of “redoubt” is _________?",
    description: "fortification",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Synonym of “legion” is _________?",
    description: "multitude",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Synonym of “reticence” is _________?",
    description: "reserve",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Synonym of “phlegmatic” is _________?",
    description: "stolid",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Synonym of “demise” is _________?",
    description: "death",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Synonym of “intractable” is _________?",
    description: "hard to manage",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Synonym of “celibate” is _________?",
    description: "single",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Synonym of “nepotism” is _________?",
    description: "favoritism",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Synonym of “inculcate” is _________?",
    description: "teach",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Synonym of “Sumptuous” is _____________?",
    description: "Splendid",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Synonym of “Outclass” is _____________?",
    description: "Surpass",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "Word nearest in meaning to Obscene is __________?-(PMS 2018)",
    description: "Dirty & indecent",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Synonym of “Abject” is _____________?",
    description: "Disgusting, Squalid, Contemptible",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "Synonym of “Accost” is __________?",
    description: "Solicit & Confront",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Synonymous of ‘Flank’ is __________?",
    description: "Side of a person right or left",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Synonym of “Dearth” is _____________?",
    description: "Lack",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Synonym of “YOB” is__________?",
    description: "Aggressive",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "Synonym of “Gauche” is ________?",
    description: "Awkward",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "What is the Synonym of the word “INDUBITABLE”?",
    description: "Undeniable",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Synonym of “Yokel” is _______?",
    description: "bumpkin",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Synonym of “Obsolescent” is _____________?",
    description: "Fustiness",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Synonym of “ALERT” is _____________?",
    description: "Watchful",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: 'Synonym of "PRECARIOUS" is _____________?',
    description: "Perilous",
    date: "10-October-2024",
    category: "English",
    author: "Raja Jani."
  }, // T-18 English End 506 - 535 | 30 MCQs
  
  { // T-19 Pakistan Studies Start 536 - 565 | 30 MCQs
    numb: 1,
    question: "The headquarters of Air Force is located in _________ ?",
    description: "Islamabad",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "The Range of Ghari-1 is ________ ?",
    description: "1200-1500km",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Tell the name of Chief of Staff of Pak Army who died in uniform ?",
    description: "General Mohammad Zia-ul-Haq & General Asif Nawaz",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "In which of the following city National Defence University is located ?",
    description: "Islamabad",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Lords of the Khyber is written by _________ ?",
    description: "Andre Singer",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Chowk Yadgar Peshawar commemorates the heroes of the _________ ?",
    description: "1965 Indo-Pakistan War",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "How many divisions are there in Sindh ?",
    description: "4",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Clifton Beach is located in _________ ?",
    description: "Karachi",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "How many Barragas are there in Sindh ?",
    description: "3",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Largest city of Pakistan is __________ ?",
    description: "Karachi",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Pakistan Air Force Day is celebrated on ___________ ?",
    description: "7th September",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "K-2 is present in which mountains range ?",
    description: "Karakoram",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Baltura Glacier is located in _____________ ?",
    description: "Gilgit Baltistan",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "The Hindu kush range starts at the ?",
    description: "Pamir Platean",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Which is the Highest peak of Himalayas range in Pakistan ?",
    description: "Nanga Parbat",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "What is the Height of Broad Peak?",
    description: "8051 meters",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "The Naval Headquarters is located in _________ ?",
    description: "Islamabad",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "In FATA the tribal laws and judiciary function is looked by the _________?",
    description: "Jirgha, Federal Govt, Tribes Council",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "Kotli is famous city of ________ ?",
    description: "AJ&K",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Polo game originated from __________ ?",
    description: "Iran",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The Indian Councils Act (Minto-Morley Reforms) was enacted into law in ________?",
    description: "1909",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Who is the Current Chief of Army Staff (COAS), Pakistan?",
    description: "General Syed Asim Munir",
    date: "10-October-2024",
    category: "Current Affairs",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Name the Pakistan’s surface-to-surface ballistic missile, which is capable of delivering multiple warheads using Multiple Independent Re-entry Vehicle (MIRV) technology?",
    description: "Ababeel",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Where did Benazir Bhutto die?",
    description: "Rawalpindi",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "Who was Mohammad Ali Bogra?",
    description: "Prime Minister",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "When Ayub Khan enforced new constitution in Pakistan?",
    description: "8th June 1962",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "In constitution 1973 what number of seats in Senate was set?",
    description: "100 Seats",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Pakistan’s first coin was issued on ___?",
    description: "3rd January 1948",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Indian Independence Act’ was enforced on ?",
    description: "14th August 1947",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "In which year Ali Garh Trusteeship bill was passed?",
    description: "1889",
    date: "10-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  }, // T-19 Pakistan Studies End 536 - 565 | 30 MCQs
  
  { // T-20 Islamic Studies Start 566 - 595 | 30 MCQs
    numb: 1,
    question: "How many Surahs are in 30th Chapter (Parah) of Quran?",
    description: "39",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Name the battle which came to an end without result?",
    description: "Tabook",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "It is said that Hazrat Ibrahim (A.S) was from the city of ‘Ur’. It is located in________?",
    description: "Mesopotamia",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "The major part of Quran is revealed at ____________________?",
    description: "Night time",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Who was the first commander of islamic army?",
    description: "Hazrat Hamza (R.A)",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Aitekaaf (Seclusion) during the month of Ramzan is_____________?",
    description: "Sunnah",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "What do you understand by Tahleeq________?",
    description: "Cutting of hair",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "How many types of Ijma are there____________?",
    description: "Three",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "In how many years Makki Surah were revealed?",
    description: "13",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Surah Baqarah contains ________verses?",
    description: "286",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "What is the other name of Surah Fatiha?",
    description: "Umm al-Kitab & Umm al-Quran",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "____________ is called Sayeed-ul-Ayam?",
    description: "Friday",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Our Holy Prophet Muhammad (SAW) had ___________ brothers & sisters.",
    description: "N.O.T",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "There are _________ farz in wuzoo (وضو).",
    description: "4",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Jannat al-Baqi is located in ________.",
    description: "Madina",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "The first daughter of our Holy prophet (SAW) was ______________.",
    description: "Hazrat Zainab (R.A)",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Which is fourth month of Islamic Calendar?",
    description: "Rabi-us-Sani",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Which is the best month mentioned in Holy Qur’an?",
    description: "Ramadan",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "______ is called Shield against sins.",
    description: "Fasting",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "______ is the most important night in the month of Ramzan.",
    description: "Shab-e-Qadar",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "Who was the first Caliph?",
    description: "Hazrat Abu Bakar (R.A.)",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Who was the second son of Hazrat Muhammad (SAW)?",
    description: "Hazrat Abdullah",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Hazrat Ibrahim son of Hazrat Muhammad (SAW) is burried in _______________.",
    description: "Jannat ul Baki",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Seventh wife of Hazrat Muhammad (SAW) was _______.",
    description: "Hazrat Zainab binte Hajash (R.A)",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "Which Sura is the name of one metal?",
    description: "Hadeed",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "Kalima Tayyaba, salat, Zakat, Hajj and soam are the fundamental______of Islam?",
    description: "Pillars",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "What is name of 15th Para of Holy Qur’an?",
    description: "Subhanallazi",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Madani Surahs were revealed in how many years?",
    description: "10",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "What was the age of Hazrat Aisha (R.A) when Hazrat Muhammad (SAW) died?",
    description: "18 years",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Which Surah in the Holy Qur’an is named after a woman?",
    description: "Surah Al-Mumtahina",
    date: "10-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  }, // T-20 Islamic Studies End 566 - 595 | 30 MCQs
  
  
  { // T-21 General Knowledge Start 596 - 625 | 30 MCQs
    numb: 1,
    question: "In which district of Pakistan Kalabagh Dam is located?",
    description: "MIANWALI",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "In which year Pakistan was world champion of Cricket, Hockey, Squash & Snooker?",
    description: "1992",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 3,
    question: "In which year the Taliban Office opened in Qatar?",
    description: "2013",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 4,
    question: "International Mountain Day is observed every year on__________?",
    description: "10 December",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 5,
    question: "Iraq’s Capital Baghdad was built by__________?",
    description: "Al Mansoor",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 6,
    question: "Island aviation services is the government runs airlines of ___________?",
    description: "Maldives",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 7,
    question: "Juba is the capital of ___________?",
    description: "South Sudan",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 8,
    question: "Karez is the irrigation system of which province of Pakistan?",
    description: "Balochistan",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 9,
    question: "Kutte ki Qabar (The Dog’s Grave) an Area Disputed between Sindh and Balochistan is located in_________range?",
    description: "Kirthar",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 10,
    question: "Lake Tana is located in__________?",
    description: "Ethiopia",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 11,
    question: "Latitude of place is indicative of its_____________?",
    description: "Temperature",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 12,
    question: "Leaning Tower of Pisa is in_________?",
    description: "Italy",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 13,
    question: "Louvre museum is located in_________?",
    description: "Paris",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 14,
    question: "Luxor is the city of___________?",
    description: "Egypt",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 15,
    question: "M2 is the motorway b/w _________?",
    description: "Islamabad to Lahore",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 16,
    question: "Most Populated Country of South-America is___________?",
    description: "Brazil",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 17,
    question: "My life is the autobiography of____________?",
    description: "Bill Clinton",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 18,
    question: "Myanmar city also called _______?",
    description: "Land of Pagoda",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 19,
    question: "Nagorno Karabakh region is recognized as part of___________?",
    description: "Azerbaijan",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 20,
    question: "Nagqu is located in which country?",
    description: "China",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 21,
    question: "Name of US president who was a film actor?",
    description: "Ronald Reagan",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 22,
    question: "Name of World’s Largest Twin Engine Jet?",
    description: "Boeing 777X",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 23,
    question: "Name the bird that migrates from the North Pole to the South Pole and back?",
    description: "Arctic tern",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 24,
    question: "Name the capital city of Switzerland?",
    description: "Bern",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 25,
    question: "Napoleon Bonaparte was a ____ military and political leader.",
    description: "French",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 26,
    question: "NATO also known as_________?",
    description: "Washington Treaty",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 27,
    question: "Nicosia is the capital of which country ____?",
    description: "Cyprus",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 28,
    question: "NPT stands for__________?",
    description: "Non-Poliferation Treaty",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 29,
    question: "NSO is the secret agency of which country?",
    description: "Nigeria",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    
  },
  {
    numb: 30,
    question: "Oldest bank in the world is located in__________?",
    description: "Italy",
    date: "11-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
    }, // T-21 General Knowledge End 596 - 625 | 30 MCQs
    
  { // T-22 Every Day Science Start 626 - 655 | 30 MCQs
    numb: 1,
    question: "What happens to the wavelength of light when its speed increases?",
    description: "Wavelength increases",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Which of the following is a prime number?",
    description: "7",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "What is the capital of France?",
    description: "Paris",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "What is H2O commonly known as?",
    description: "Water",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Which planet is known as the Red Planet?",
    description: "Mars",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "What is the largest mammal in the world?",
    description: "Blue Whale",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "Which gas do plants absorb from the atmosphere?",
    description: "Carbon Dioxide",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "In which year did the Titanic sink?",
    description: "1912",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Which element has the chemical symbol 'O'?",
    description: "Oxygen",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "What is the main ingredient in guacamole?",
    description: "Avocado",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Which animal is known as the king of the jungle?",
    description: "Lion",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "What is the freezing point of water?",
    description: "32 degrees Fahrenheit",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Which is the smallest continent by land area?",
    description: "Australia",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Who wrote 'Romeo and Juliet'?",
    description: "William Shakespeare",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "What is the process by which plants make their food?",
    description: "Photosynthesis",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Which instrument is used to measure temperature?",
    description: "Thermometer",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Which country is known as the Land of the Rising Sun?",
    description: "Japan",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Which organ is responsible for pumping blood in the human body?",
    description: "Heart",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "What is the currency of the United States?",
    description: "Dollar",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "How many continents are there on Earth?",
    description: "7",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "What is the largest planet in our solar system?",
    description: "Jupiter",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "What is the boiling point of water?",
    description: "100 degrees Celsius",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "What is the capital city of Canada?",
    description: "Ottawa",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "What is the main language spoken in Brazil?",
    description: "Portuguese",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "Which planet is closest to the Sun?",
    description: "Mercury",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "What is the chemical formula for table salt?",
    description: "NaCl",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Which animal is known for its ability to change colors?",
    description: "Chameleon",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Who painted the Mona Lisa?",
    description: "Leonardo da Vinci",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "What is the longest river in the world?",
    description: "Nile",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Which gas is most abundant in the Earth's atmosphere?",
    description: "Nitrogen",
    date: "11-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
  }, // T-22 Every Day Science End 626 - 655 | 30 MCQs
  
  { // T-23 English Start 656 - 685 | 30 MCQs
    numb: 1,
    question: "Antonym of “conversant” is _______?",
    description: "inexperience",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Antonym of ” Heartfelt ” is _____________?",
    description: "Insincere",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Antonym of ” Pessimistic ” is _____________?",
    description: "Hopeful",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Antonym of Credulous is _____________?",
    description: "Skeptical",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "Antonym of Accessible? ",
    description: "Inaccessible",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "Which one of the following is antonym of ” Perdition ” while others are synonyms?",
    description: "Heaven",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "Which one of the following is antonym of ” Prosaic ” while others are synonyms?",
    description: "Interesting",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Antonym of Vagrant is _____________?",
    description: "Stable",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "Antonym of ENORMOUS is_____________?",
    description: "Tiny",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Antonym of FRIVOLOUS is _____________?",
    description: "Wise",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Antonym of QUIESCENT is _____________?",
    description: "Active",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "The antonyms of Stale is____________?",
    description: "Fresh",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Antonym of PACIFIC is _____________?",
    description: "Aggressive",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "Antonym of “awe” is _______.",
    description: "contempt",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Antonym of “penurious” is _______?",
    description: "generous",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "Antonym of ” Perspicacious ” is _____________?",
    description: "Dull",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Antonym of “Lenient” is _____________?",
    description: "Strict",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Antonym of Felicity is _____________?",
    description: "Sadness",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "Antonym of Accost?",
    description: "Neglect, Avoid, Scorn",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Which one of the following is antonym of ” Epitome ” while others are synonyms?",
    description: "antithesis",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "Which one of the following is antonym of ” Apocryphal ” while others are synonyms?",
    description: "Genuine",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "What’s the antonym of Amicable?",
    description: "Hostile",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "Antonym of RECONDITE is_____________?",
    description: "Manifest",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Antonym of WEAN is _____________?",
    description: "Attach",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "Antonym of PHILISTINE is _____________?",
    description: "Cultured",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "The antonym of Mammoth is___________?",
    description: "Small",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Antonym of DWARF is _____________?",
    description: "Giant",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Antonym of “matutinal” is ________.",
    description: "crepuscular",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Antonym of “impervious” is _______?",
    description: "prone",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Antonym of ” Astute ” is _____________?",
    description: "Stupid",
    date: "11-October-2024",
    category: "English",
    author: "Raja Jani."
  }, // T-23 English End 656 - 685 | 30 MCQs
  
  { // T-24 Pakistan Studies Start 686 - 715 | 30 MCQs
    numb: 1,
    question: "Pakistan Steel Mills is located in?",
    description: "Karachi",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "SNGPL stands for?",
    description: "Sui Northern Gas Pipelines limited",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Thal desert is located in?",
    description: "Punjab",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Ahmad Shah Pitras Bukhari was a famous writer of ______ language.",
    description: "Urdu",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "The Kargil incident happened in?",
    description: "1999",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "GHQ stands for:",
    description: "General Head Quarters",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "The capital city of Pakistan is?",
    description: "Islamabad",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Pakistan became a republic in?",
    description: "1956",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "The Indus River flows through?",
    description: "Pakistan",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Which of the following is the largest city in Pakistan?",
    description: "Karachi",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "The official language of Pakistan is?",
    description: "Urdu",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Who is known as the 'Father of the Nation' in Pakistan?",
    description: "Muhammad Ali Jinnah",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "The national flower of Pakistan is?",
    description: "Jasmine",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "The currency of Pakistan is?",
    description: "Rupee",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Which province is known as the 'Land of Five Rivers'?",
    description: "Punjab",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "What is the national animal of Pakistan?",
    description: "Markhor",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Which mountain range is located in Pakistan?",
    description: "Himalayas",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Which is the largest province of Pakistan by area?",
    description: "Balochistan",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "The first constitution of Pakistan was enacted in?",
    description: "1956",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "The Pakistan Resolution was passed in?",
    description: "1940",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The national anthem of Pakistan is called?",
    description: "Qaumi Taranah",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
   },
  {
    numb: 22,
    question: "Which is the largest lake in Pakistan?",
    description: "Chashma Lake",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "The Pakistan flag features which color?",
    description: "Green",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "Which city is known as the 'City of Lights'?",
    description: "Karachi",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "The famous Badshahi Mosque is located in which city?",
    description: "Lahore",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "Which festival is known as the 'Festival of Lights' in Pakistan?",
    description: "Diwali",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Which is the longest river in Pakistan?",
    description: "Indus",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "The tomb of Allama Iqbal is located in?",
    description: "Multan",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Which city is the capital of Khyber Pakhtunkhwa?",
    description: "Peshawar",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "The national sport of Pakistan is?",
    description: "Hockey",
    date: "11-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
  }, // T-24 Pakistan Studies End 686 - 715 | 30 MCQs
  
  { // T-25 Islamic Studies Start 716 - 745 | 30 MCQs
    numb: 1,
    question: "___________ was the only Ummul Momineen who was not buried in Jannatul Baqi.",
    description: "Hazrat Ayesha (R.A)",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Hazrat Khadija (RA) was the ________ person to convert to Islam.",
    description: "First",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "Hazrat Khadija (RA) died in ?",
    description: "619 A.D",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "Where is the grave of Hazrat Shoaib (A.S)?",
    description: "Jordan",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "In how many days Allah created the heavens and the earth?",
    description: "six",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "The Ghazwa _____ was fought against Bani Salba and Bani Muharba.",
    description: "Ghatfan",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "Hazrat Isa (A.S) met with Holy Prophet (SAW) on the ________ heaven?",
    description: "2nd",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "Ohad is ______ miles from Madina?",
    description: "3",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "What is name of 23rd Para of Holy Quran?",
    description: "Wa Mali",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Which caliph formed a parliament namely Majlis e Aam?",
    description: "Hazrat Umar",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "To sit straight in Salat is called________?",
    description: "Qaada",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "In which Hijri Ghazwa e khyber was fought?",
    description: "7 Hijri",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "What is the meaning of Khums (خمس)?",
    description: "One fifth",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "What is the Original Name of Muʿtaṣim bi’llāh?",
    description: "Abū Isḥāq Muḥammad ibn Hārūn al-Rashīd",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "Who was the first Muslim Caliph of Spain?",
    description: "Abd Ar Rehman Ad-Dakhil",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "How many years did Hazrat Muhammad (saw) preach Islam during his life time?",
    description: "23",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Afzal ul Bashr” is the title of __________ ?",
    description: "Hazrat Abu Bakr RA",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "Holy Prophet (SAWS) laboured in the construction of which mosque?",
    description: "Masjid-e-Quba",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "The study of Religions is called:___________?",
    description: "Theology",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Who was the commanders of the Infidels in the Battle of Uhud?",
    description: "Abu Sufyan",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The literal meaning of the word Quran is________?",
    description: "Frequently recited",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Who wrote the book “Kitab al Kharaj”?",
    description: "Abu Yusuf",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "After the Battle of Yermuk, which was won by the Muslims Khalid bin Waleed was removed by the Caliph Umar (RA) from his supreme command. The new Supreme Commander was:",
    description: "Abu Ubaydah (RA)",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "In which Surah of Quran mentioned that the number of months are Twelve?",
    description: "Al-Taoba",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "How many Takbeers are in Namaz-e-Janaza?",
    description: "Four",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "Ahsan ul Qasas is the life history of __________?",
    description: "Hazrat Yousuf (A.S)",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "Which is old name of Islam?",
    description: "Deen-e-Hanif",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "Zam zam means_______?",
    description: "to stop",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Hazrat Khalid Bin Waleed (RA) embraced Islam in which Hijri?",
    description: "8th A.H",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "Which surahs are called Mauzatain?",
    description: "Last two surahs",
    date: "12-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
  }, // T-25 Islamic Studies End 716 - 745 | 30 MCQs
  
  { // T-26 General Knowledge Start 746 - 775 | 30 MCQs
  numb: 131,
  question: "On 15th August which Country(s) celebrates their Independence Day?",
  description: "South Korea, India & Congo, Liechtenstein",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 132,
  question: "One nautical mile is equal to how many kilometers?",
  description: "1.853",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 133,
  question: "Organization of Islamic Cooperation (OIC) has ____ official languages.",
  description: "3",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 134,
  question: "Pakistan became a member of International Atomic Energy Agency (IAEA) in ____?",
  description: "1957",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 135,
  question: "Pakistan lost the cricket world cup final in ____.",
  description: "1999",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 136,
  question: "Pakistan Tops ICC T20I Rankings for the first time on ____?",
  description: "1st November 2017",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 137,
  question: "Pakistan won Asia cricket cup in which year?",
  description: "2012",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 138,
  question: "Pakistan’s response to Indian aggression on February 27 will be remembered as ____?",
  description: "Operation Swift Retort",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 139,
  question: "Paradise Leaks data originates from which law firm?",
  description: "Appleby law firm",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 140,
  question: "Parcel Islands in the South China Sea are disputed b/w China & ____?",
  description: "Vietnam",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 141,
  question: "PBS stands for ____?",
  description: "Pakistan Bureau of Statistics",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 142,
  question: "PCIW stands for ____?",
  description: "Pakistan Commissioner for Indus Waters",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 143,
  question: "PIA Stands For ____?",
  description: "Pakistan International Airlines",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 144,
  question: "PMD stands for ____?",
  description: "Pakistan Meteorological Department",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 145,
  question: "Polar bears are mostly ____?",
  description: "carnivorous",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 146,
  question: "Port of Khalid is the Seaport of ____?",
  description: "UAE",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 147,
  question: "Renminbi is the official currency of ____?",
  description: "China",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 148,
  question: "RSS ideology followed by Indian PM Modi, What does RSS stand for?",
  description: "Rashtriya Swayamsevak Sangh",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 149,
  question: "SANA is the news agency of ____.",
  description: "Syria",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
{
  numb: 150,
  question: "Sea of Japan is famous for ____?",
  description: "Fishing Area",
  date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
},
  {
    numb: 151,
    question: "Shakespeare beach is located in which country?",
    description: "England",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 152,
    question: "Shuttle run ‘Test’ measures: ____ ?",
    description: "Agility",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 153,
    question: "Sir William Wallace is known as the independence fighter of ____?",
    description: "Scotland",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 154,
    question: "Table tennis is the national game of which country?",
    description: "China",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 155,
    question: "Taklamakan Desert is located in ____?",
    description: "China",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 156,
    question: "Taurus mountains are located in?",
    description: "Turkey",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 157,
    question: "The Ancient City “Prayaga” was renamed as “Allahabad” by which Mughal emperor?",
    description: "Shah Jahan",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 158,
    question: "The Battle of Halani was fought in _______?",
    description: "1782",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 159,
    question: "The biggest Island of the World is ____?",
    description: "Greenland",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 160,
    question: "The Black forest is located in which European country?",
    description: "Germany",
    date: "17-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  }, // T-26 General Knowledge End 746 - 775 | 30 MCQs
  
  { // T-27 Every Day Science Start 776 - 805 | 30 MCQs
  numb: 1,
  question: "Which of the following is commonly called a polyamide?",
  description: "Nylon",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 2,
  question: "Which of the following is a force?",
  description: "Magnetism",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 3,
  question: "The human heart is _______?",
  description: "Myogenic Heart",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 4,
  question: "In context of environment, the term 'dirty dozen' refers to ____?",
  description: "12 persistent organic pollutants",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 5,
  question: "Elements which have same number of protons but different number of neutrons are called ____?",
  description: "Isotopes",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 6,
  question: "What is the third most common gas found in the air we breathe ____?",
  description: "Argon",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 7,
  question: "Which of the following type of coal has maximum carbon content?",
  description: "Anthracite",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 8,
  question: "Newton’s Third Law of Motion?",
  description: "Every action there is an equal and opposite reaction.",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 9,
  question: "Blood does not coagulate inside the body due to the presence of ____?",
  description: "Heparin",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 10,
  question: "1 yard =____?",
  description: "3 feet",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 11,
  question: "Electric motor was invented by ____?",
  description: "Michael Faraday",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 12,
  question: "In the whole Periodic Table, which element is the most reducing agent?",
  description: "Lithium",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 13,
  question: "The main constituent of Biogas is ____?",
  description: "Methane",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 14,
  question: "Which of the following is a nutritional deficiency disease?",
  description: "Pellagra",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 15,
  question: "'ELISA' test is employed to diagnose?",
  description: "AIDS antibodies",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 16,
  question: "Any disease or infection that is naturally transmissible from vertebrate animals to humans is called ____?",
  description: "Zoonoses",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 17,
  question: "Vitamins were discovered by ____?",
  description: "Casimir Funk",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 18,
  question: "BCG vaccine is used to produce immunity against ____?",
  description: "Tuberculosis",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 19,
  question: "Molasses is a byproduct of ____ Factory?",
  description: "Sugar",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 20,
  question: "Crude Oil is heated in the furnace up to ____?",
  description: "400°C",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 21,
  question: "Permanent hardness of water may be removed by the addition of ____?",
  description: "Sodium Carbonate",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 22,
  question: "Highly intelligent Mammals are ____?",
  description: "Dolphin",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 23,
  question: "Severe deficiency of Vitamin D results in ____?",
  description: "Rickets",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 24,
  question: "The gas used in a refrigerator to cool water is ____?",
  description: "Ammonia",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 25,
  question: "CNG stands for ____?",
  description: "Compressed Natural Gas",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 26,
  question: "The nearest planet to the Earth is ____?",
  description: "Venus",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 27,
  question: "The Great Spot is on the planet ____?",
  description: "Jupiter",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 28,
  question: "Digestion of food is completed in the ____?",
  description: "Small intestine",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 29,
  question: "The good sources of Vitamin-C are ____?",
  description: "Fresh vegetables and fruits",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
},
{
  numb: 30,
  question: "In general, wind speed of 10–13 kph causes ____?",
  description: "Minor or no damage",
  date: "17-October-2024",
    category: "Every Day Science",
    author: "Raja Jani."
}, // T-27 Every Day Science End 776 - 805 | 30 MCQs

{ // T-28 English Start 806 - 835 | 30 MCQs
    numb: 1,
    question: "He is fully contented _____ his life.",
    description: "with",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "Aqsa is travelling __________ the school.",
    description: "towards",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "You can’t always pass ______ appearance.",
    description: "By",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "As ____ me; I will be happy to lend a hand?",
    description: "for",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "We arrived ____ the station an hour late?",
    description: "at",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "She is jealous ____ my friend?",
    description: "Of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "The book is ____ the mug and pen.",
    description: "Between",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "The same considerations are equally applicable ____ accident claims?",
    description: "To",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "He was upbraided _______ his slovenly appearance?",
    description: "for",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "Translate this passage ____ English.",
    description: "into",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "Either Sana or her friends ____ present there.",
    description: "were",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "Do you mean to say you exchanged that lovely car ____ this?",
    description: "for",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "Sana is different _____ other girls.",
    description: "from",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "He always insisted ____ his opinion.",
    description: "on",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "The shopkeeper has charged me ten rupees ____ this book.",
    description: "for",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "He is getting out ____ the car.",
    description: "of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "Both parties must adhere ____ the terms of the contract.",
    description: "To",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "He was accused ____ theft?",
    description: "of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "I am good ____ tennis?",
    description: "at",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "Turn left ____ the traffic lights.",
    description: "At",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "A good judge never jumps ____ the conclusion.",
    description: "To",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "Parents expect more ____ their children?",
    description: "of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "He took his brother ____ the hand.",
    description: "by",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "He succeeded ____ killing the tiger.",
    description: "in",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "We congratulate you ____ your achievement.",
    description: "on",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "When the meeting had finished, they went ____ the plan once again.",
    description: "over",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "I am going ____ home.",
    description: "None",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "He accused the man ____ stealing.",
    description: "of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "Mother was aware ____ her children.",
    description: "of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "He is fond ____ drawing.",
    description: "of",
    date: "17-October-2024",
    category: "English",
    author: "Raja Jani."
  }, // T-28 English End 806 - 835 | 30 MCQs
  
  { // T-29 Pakistan Studies Start 836 - 865 | 30 MCQs
  numb: 1,
  question: "What is the other name of Mohammad Ali Bogra Formula?",
  description: "Constitutional Formula",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 2,
  question: "Which kind of system of Government was introduced by the 1962 constitution?",
  description: "Presidential",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 3,
  question: "According to the 1973 constitution what is the term of the office of President?",
  description: "5 years",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 4,
  question: "Where is the biggest Salt Mine located in Pakistan?",
  description: "Jhelum",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 5,
  question: "Allama Muhammad Iqbal delivered his famous Allahabad Address in?",
  description: "1930",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 6,
  question: "In which year did Syed Jamal-u-din Afghani die?",
  description: "1897",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 7,
  question: "Who was the second Prime Minister of Pakistan?",
  description: "Kh. Nazim-ud-Din",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 8,
  question: "The third largest city of Pakistan is?",
  description: "Faisalabad",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 9,
  question: "The founder of All India Muslim League Nawab Salimullah Khan belonged to?",
  description: "Dhaka",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 10,
  question: "Who inaugurated the State Bank of Pakistan?",
  description: "Quaid-e-Azam",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 11,
  question: "Which country assisted Pakistan in the construction of the Sandak Project?",
  description: "China",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 12,
  question: "KRL Stands for?",
  description: "Khan Research Laboratories",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 13,
  question: "Pakistan tested its nuclear device on ____?",
  description: "28th May 1998",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 14,
  question: "Who was the first Muslim C-in-C of Air Force?",
  description: "Air Marshal Asgher Khan",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 15,
  question: "In which of the following city is the headquarters of Punjab Rangers located?",
  description: "Lahore",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 16,
  question: "In which of the following city is Military College Jhelum located?",
  description: "Sarai Alam Gir",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 17,
  question: "Pakistan Academy for Rural Development is situated in ____?",
  description: "Peshawar",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 18,
  question: "Which mountain range separates Pakistan and Afghanistan?",
  description: "The Hindu Kush",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 19,
  question: "Archaeologists have identified some 400 Indus civilization towns, scattered from ____?",
  description: "Kabul to Delhi",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 20,
  question: "Manchar Lake is situated in ____?",
  description: "Jamshoro",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 21,
  question: "Lal Shahbaz Qalandar wrote several books in Persian and ____?",
  description: "Arabic",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 22,
  question: "Which city of the Sindh is popular for woodwork industry?",
  description: "Hala",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 23,
  question: "World Tuberculosis Day is observed on ____?",
  description: "24th March",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 24,
  question: "Name the range which separates China from Pakistan?",
  description: "Karakoram",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 25,
  question: "What is the Height of Tirichmir peak?",
  description: "7708 meters",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 26,
  question: "What is the maximum height of Kirthar Range?",
  description: "2150 meters",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 27,
  question: "Which is the highest peak of Koh-e-Sulaiman range?",
  description: "Takhat-e-Sulaiman",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 28,
  question: "How many Peaks in Pakistan are higher than 7000 meters?",
  description: "108",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 29,
  question: "Golra Sharif is famous for the shrine of ____?",
  description: "Pir Mehar Ali Shah",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
},
{
  numb: 30,
  question: "Who was the first Prime Minister of Azad Kashmir?",
  description: "Khan Abdul Hameed Khan",
  date: "17-October-2024",
    category: "Pakistan Studies",
    author: "Raja Jani."
}, // T-29 Pakistan Studies End 836 - 865 | 30 MCQs

{ // T-30 Islamic Studies Start 866 - 895 | 30 MCQs
  numb: 1,
  question: "Hazrat Abu Zar Ghafari (R.A) belongs to Banu Ghifar, The Kinanah Tribe, and he died in ____ A.D.",
  description: "652 A.D",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 2,
  question: "How many sons did Hazrat Adam (A.S) have?",
  description: "3",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 3,
  question: "Mahram-e-Raza-e-Nabuwat is the title of ____?",
  description: "Hazrat Huzefa bin - al-Yaman (R.A)",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 4,
  question: "What was the biggest religion of Arab people before Islam?",
  description: "Idol worship",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 5,
  question: "Name the first person who received three blows of arrows during prayer but did not discontinue his prayer?",
  description: "Hazrat Abaad bin Bashar (R.A)",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 6,
  question: "Kitab-ul-Shamayel relates to ____?",
  description: "Life of the Holy Prophet (PBUH)",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 7,
  question: "How many stones are thrown at the Jamarat in Hajj ritual?",
  description: "7 Stones",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 8,
  question: "The Battle Of Uhad was fought in which hijri?",
  description: "3 Hijri",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 9,
  question: "Name of the Surah of the Holy Quran which mentions the rights of the parents?",
  description: "Surah Luqman",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 10,
  question: "What was the age of Hazrat Umer (R.A) when he embraced Islam?",
  description: "32 years",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 11,
  question: "Prophet Hazrat ____ (A.S) is known as Shaikh al-Anbiya?",
  description: "Noah (A.S)",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 12,
  question: "In which Islamic Battle Angels helped the Muslims?",
  description: "Badar",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 13,
  question: "Hazrat Fatima (R.A) is known as ____?",
  description: "Both Khatoon e Madina and Khatoon e Mehshar",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 14,
  question: "What is the punishment for drinking wine in the Quran?",
  description: "None of these",
  options: [
    "80 Lashes",
    "50 Lashes",
    "40 Lashes",
    "None of these"
  ]
},
{
  numb: 15,
  question: "A battle in which the Holy Prophet (PBUH) did not participate is known as ____?",
  description: "Sariyya",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 16,
  question: "In which Surah is the regulation for prisoners of war mentioned?",
  description: "Surah Nesa",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 17,
  question: "Name the mountain where the Holy Prophet (S.A.W) deputed 50 skillful archers (Teer-Andaaz) in the battle of Ohad?",
  description: "Jabel-e-Yahnene",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 18,
  question: "Hazrat Khadija (R.A) died at ____ years of age.",
  description: "65 years",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 19,
  question: "Hazrat Umar Farooq was martyred on 1st Muharram ____?",
  description: "24 A.H.",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 20,
  question: "Who was chosen by Hazrat Umar (R.A) to lead the Muslim Army in the Battle of Qadsiya?",
  description: "Hazrat Saad bin Abi Waqas (R.A)",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 21,
  question: "Seclusion is Sunnah in the month of Ramzan. Another kind of Seclusion is Wajib, its meaning is ____?",
  description: "Ordained",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 22,
  question: "What does Hadi mean?",
  description: "Animal to be sacrificed",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 23,
  question: "Analogy is the synonym of ____?",
  description: "Qiyas",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 24,
  question: "The name of the sixth Kalimah is ____?",
  description: "Kalimah Radd-i-Kufar",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 25,
  question: "Which prophet of Allah is called Abu Al-Bashar?",
  description: "Hazrat Adam (A.S)",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 26,
  question: "Which one is called Mash'ar-ul-Haram ____?",
  description: "Muzdalifa valley",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 27,
  question: "Ghazwa ____ was fought 3 times.",
  description: "Badr",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 28,
  question: "Jannat al-Baqi is a ____.",
  description: "Cemetery",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 29,
  question: "There are ____ Farz (obligatory) acts in Tayammum.",
  description: "2",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
},
{
  numb: 30,
  question: "Muslims are allowed to eat the meat of ____ animals.",
  description: "Zabiha",
  date: "17-October-2024",
    category: "Islamic Studies",
    author: "Raja Jani."
}, // T-30 Islamic Studies End 866 - 895 | 30 MCQs

 // T-31 General Knowledge Start 896 - 925 | 30 MCQs
    {
    numb: 1,
    question: "The Book 'A Farewell to Arms' was written by ____?",
    description: "Ernest Hemingway",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 2,
    question: "The book 'Emile or On Education' on the nature of education and man is written by ____?",
    description: "Rousseau",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 3,
    question: "The border between USA and Canada is officially known as ____?",
    description: "International boundary",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 4,
    question: "The capital of Argentina is ____?",
    description: "Buenos Aires",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 5,
    question: "The capital of Czech Republic is ____?",
    description: "Prague",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 6,
    question: "The capital of Maldives is ____?",
    description: "Male",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 7,
    question: "The Capital of Samoa is ____?",
    description: "Apia",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 8,
    question: "The country whose national anthem has only music, no words is ____?",
    description: "Bahrain",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 9,
    question: "The driest desert in the world is ____?",
    description: "Atacama Desert",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 10,
    question: "The eradication of poverty day is internationally observed on ____?",
    description: "October 17",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 11,
    question: "The famous book 'Al-Qanun' was written by the Muslim scientist ____?",
    description: "Abu Ali Sina",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 12,
    question: "The fastest marine animal found in warmer parts of five oceans of the world is ____?",
    description: "Sailfish",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 13,
    question: "The first artificial satellite on earth is ____?",
    description: "Sputnik I",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 14,
    question: "The first bank note was originated in China. What was it known as at the time of invention?",
    description: "Flying money",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 15,
    question: "The first English Dictionary was compiled by ____?",
    description: "Samuel Johnson",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 16,
    question: "The first person to draw the map of earth is ____?",
    description: "Anaximander",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 17,
    question: "The first season of PSL took place on ____?",
    description: "4th Feb 2016",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 18,
    question: "The first woman elected to head an African country in 2006 was ____?",
    description: "Ellen Johnson",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 19,
    question: "The Former Iraqi President Saddam Hussein was captured near his hometown of Tikrit on ____?",
    description: "13 December 2003",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 20,
    question: "The headquarter of EFTA is in ____?",
    description: "Geneva",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 21,
    question: "The headquarter of Food and Agriculture Organization (FAO) is in ____?",
    description: "Rome, Italy",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 22,
    question: "The Headquarters of Twitter is located in ____?",
    description: "San Francisco",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 23,
    question: "The headquarters of World Intellectual Property Organization (WIPO) is in ____?",
    description: "Geneva",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 24,
    question: "The International Day of Forests is observed every year on ____?",
    description: "March 21",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 25,
    question: "The land of hospitality is ____?",
    description: "KPK",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 26,
    question: "The largest automobile manufacturing center in the world is located at ____?",
    description: "Detroit",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 27,
    question: "The largest opium producer province of Afghanistan is ____?",
    description: "Helmand",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 28,
    question: "The largest planet of the solar system is ____?",
    description: "Jupiter",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 29,
    question: "The main function of the judiciary is ____?",
    description: "Law adjudication",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  },
  {
    numb: 30,
    question: "The most rainiest place in the world is ____?",
    description: "Mawsynram, India",
    date: "23-October-2024",
    category: "General Knowledge",
    author: "Raja Jani."
  }, // T-31 General Knowledge End 896 - 925 | 30 MCQs
];
