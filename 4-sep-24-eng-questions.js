// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "I remember my sister taking me to the museum.",
    answer: "I remember being taken to the museum by my sister.",
    options: [
      "I remember I was taken to the museum by my sister.",
      "I remember being taken to the museum by my sister.",
      "I remember myself being taken to the museum by my sister.",
      "I remember taken to the museum by my sister."
    ]
  },
  {
    numb: 2,
    question: "Why did you waste best part of your life?",
    answer: "Why was the best part of your life wasted by you?",
    options: [
      "Why the best part of your life wasted by you?",
      "Why were the best part of your life wasted by you?",
      "Why did the best part of your life wasted by you?",
      "Why was the best part of your life wasted by you?"
    ]
  },
  {
    numb: 3,
    question: "She never understood me, whenever I said Something.",
    answer: "Whenever I said something I was never understood by her.",
    options: [
      "Whenever I said something, I was being never understood by her.",
      "Whenever I said something, I never understood by her.",
      "Whenever I said something I was never understood by her.",
      "Whenever I said something, I had never understood by her."
    ]
  },
  {
    numb: 4,
    question: "Active Voice of “This house is used very rarely by us”.",
    answer: "We use this house very rarely.",
    options: [
      "We are using this house very rarely.",
      "We use this house very rarely.",
      "We used this house very rarely.",
      "We uses this house very rarely."
    ]
  },
  {
    numb: 5,
    question: "Passive Voice of ” Sana is washing her clothes” is ______.",
    answer: "Her clothes are being washed by Sana.",
    options: [
      "Her clothes are being washed by Sana.",
      "Her clothes were being washed by Sana.",
      "Her clothes has been washed by Sana.",
      "Her clothes had been washed by Sana."
    ]
  },
  {
    numb: 6,
    question: "Are they playing match against them?",
    answer: "Is a match being played against our team by ",
    options: [
      "Is a match be played against our team by them?",
      "Is a match played against our team by them?",
      "Is a match been played against our team by ",
      "Is a match being played against our team by "
    ]
  },
  {
    numb: 7,
    question: "Will my mother have baked cake?",
    answer: "Will the cake have been baked by my mother?",
    options: [
      "Will the cake have been baked by my mother?",
      "Will the cake have baked by my mother?",
      "Will the cake has being baked by my mother?",
      "Will the cake be baked by my mother?"
    ]
  },
  {
    numb: 8,
    question: "When I am alone, I hear the footsteps of my friend in my imagination.",
    answer: "The footsteps of my friend are heard by me when I am alone.",
    options: [
      "The footsteps of my friend heard by me, when I am alone.",
      "The footsteps of my friend is heard by me when I am alone.",
      "The footsteps of my friend are heard by me when I am alone.",
      "The footsteps of my friend was heard by me when I am alone."
    ]
  },
  {
    numb: 9,
    question: "Passive Voice of “The box can contain no more”.",
    answer: "No more can be contained in this box.",
    options: [
      "No more this box can contain.",
      "No more can be contained in this box.",
      "No more could be contained in this box.",
      "Nothing can be contained in this box."
    ]
    },
  {
    numb: 10,
    question: "Passive Voice of “I saw him leaving the house” is ______.",
    answer: "He was seen leaving the house by me.",
    options: [
      "He was seen leaving the house by me.",
      "Leaving the house he was seen by me.",
      "He had been seen leaving the house.",
      "He was seen to be leaving the house."
    ]
  },
  {
    numb: 11,
    question: "You must obey your parents.",
    answer: "Your parents must be obeyed by you.",
    options: [
      "Your parents must obeyed by you.",
      "Your parents must been obeyed by you.",
      "Your parents must be obeyed by you.",
      "Your parents must being obeyed by you."
    ]
  },
  {
    numb: 12,
    question: "Who designed a car?",
    answer: "By whom a car was designed?",
    options: [
      "By whom a car was designed?",
      "By whom a car designed?",
      "By whom a car had designed?",
      "By whom a car was being designed?"
    ]
  },
  {
    numb: 13,
    question: "When the men coughed he realized that the men were quite near to him.",
    answer: "When the men coughed it was realized by him that the men were quite near to him.",
    options: [
      "When the men coughed it realized by him that the men were quiet near to him.",
      "When the men coughed it had realized by him that the men were quite near to him.",
      "When the men coughed it is realized by him the men ere quite near to him.",
      "When the men coughed it was realized by him that the men were quite near to him."
    ]
  },
  {
    numb: 14,
    question: "Active Voice of “He was being chased by the dogs”.",
    answer: "The dogs were chasing him.",
    options: [
      "The dogs are chasing him.",
      "The dogs were chasing him.",
      "The dogs chased him.",
      "The dogs chase him."
    ]
  },
  {
    numb: 15,
    question: "Passive Voice of “The boy did not break the glass” is __________.",
    answer: "The glass was not broken by the boy.",
    options: [
      "The glass was not broken by the boy.",
      "The glass has not been broken by the boy.",
      "The glass is not broken by the boy.",
      "The glass had not been broken by the boy."
    ]
  },
  {
    numb: 16,
    question: "Have you taken a rest?",
    answer: "Have a rest been taken by you?",
    options: [
      "Have a rest taken by you.",
      "Had a rest taken by you?",
      "Have a rest be take by you?",
      "Have a rest been taken by you?"
    ]
  },
  {
    numb: 17,
    question: "He was driving a car, when accident occurred.",
    answer: "A car was being driven by him, when the accident occurred.",
    options: [
      "A car driven by him, when the accident occur.",
      "A car was driven by him, when the accident occur.",
      "A car was been driven by him, when the accident occurred.",
      "A car was being driven by him, when the accident occurred."
    ]
  },
  {
    numb: 18,
    question: "Passive Voice of ” The baby has lost her doll”?",
    answer: "Her doll has been lost by the baby.",
    options: [
      "Her doll has been lost by the baby.",
      "Her doll was lost by the baby.",
      "Her doll had been lost by the baby.",
      "Her doll has lost by the baby."
    ]
  },
  {
    numb: 19,
    question: "Passive Voice of “People speak English all over the world”.",
    answer: "English is spoken all over the world",
    options: [
      "English is spoken by people.",
      "English was spoken all over the world.",
      "English was spoken by people.",
      "English is spoken all over the world"
    ]
  },
  {
    numb: 20,
    question: "Passive Voice of “They held a meeting very early”.",
    answer: "A meeting was held by them very early.",
    options: [
      "A meeting was held by them very early.",
      "A meeting is held by them very early.",
      "A meeting will be held by them very early.",
      "A meeting was hold by them very early."
    ]
  },
  {
    numb: 21,
    question: "His wife upbraided him for his irresponsible handling of the family finance.",
    answer: "He was upbraided by his wife for his irresponsible handling of the family finance.",
    options: [
      "He upbraided by his wife for his irresponsible handling of the family finance.",
      "He was upbraided by his wife for his irresponsible handling of the family finance.",
      "He has upbraided by his wife for his irresponsible handling of the family finance.",
      "He were upbraided by his wife for his irresponsible handling of the family finance."
    ]
  },
  {
    numb: 22,
    question: "Passive Voice of “The teacher may punish you”.",
    answer: "You may be punished by the teacher.",
    options: [
      "You should be punished by the teacher.",
      "You shall have been punished by the teacher.",
      "You will be punished by the teacher.",
      "You may be punished by the teacher."
    ]
  },
  {
    numb: 23,
    question: "Passive Voice of “None likes him” is _______.",
    answer: "He is liked by none.",
    options: [
      "He has not been liked by anyone.",
      "He is liked by none.",
      "He was not liked by anyone.",
      "He is not liked by anyone."
    ]
  },
  {
    numb: 24,
    question: "Why does an officer neglect duties?",
    answer: "Why are the duties neglected by an officer?",
    options: [
      "Why are the duties neglected by an officer?",
      "Why the duties neglected by an officer?",
      "Why is the duties neglected by an officer?",
      "Why are the duties neglect by an officer."
    ]
  },
  {
    numb: 25,
    question: "They probably won’t attend lecture tomorrow.",
    answer: "The lecture probably won’t be attended by them.",
    options: [
      "The lecture probably not attended by them tomorrow.",
      "The lecture not probably attended by them tomorrow.",
      "The lecture probably won’t been attended by them tomorrow.",
      "The lecture probably won’t be attended by them."
    ]
  },
  {
    numb: 26,
    question: "Passive Voice of “She will build this house” ?",
    answer: "This house will be built by her",
    options: [
      "This house would have been built by her",
      "This house would be built by her",
      "This house will be built by her",
      "This house will have been by her"
    ]
  },
  {
    numb: 27,
    question: "Passive Voice of “Sajid gave the beggar an old shirt”.",
    answer: "An old shirt was given to the beggar by Sajid.",
    options: [
      "An old shirt was given to Sajid by the beggar.",
      "An old shirt was given to the beggar by Sajid.",
      "The beggar was gave an old shirt by Sajid.",
      "N.O.T"
    ]
  },
  {
    numb: 28,
    question: "Did you visit a zoo?",
    answer: "Was a zoo visited by you?",
    options: [
      "Was a zoo being visited by you?",
      "Was a zoo be visited by you?",
      "Was a zoo been visited by you?",
      "Was a zoo visited by you?"
    ]
  },
  {
    numb: 29,
    question: "I said to her, “Why are you sleeping”?",
    answer: "I asked her why she was sleeping.",
    options: [
      "I asked her why she was sleeping.",
      "I asked her that why she was sleeping.",
      "I asked her that why was she sleeping.",
      "N.O.T"
    ]
  },
  {
    numb: 30,
    question: "Passive voice of “They broke up the table for firewood” is _________?",
    answer: "The table was broken up for firewood by them.",
    options: [
      "The table broke up for firewood by them.",
      "The table has broken up for firewood by them.",
      "The table had broken up for firewood by them.",
      "The table was broken up for firewood by them."
    ]
  },
  {
    numb: 31,
    question: "Passive Voice of “Has someone made all the necessary arrangements?”",
    answer: "Have all the necessary arrangements been made by someone?",
    options: [
      "Has all the necessary arrangements been made by someone?",
      "Have the necessary arrangements been all made by someone?",
      "Have all the necessary arrangements been made by someone?",
      "All the necessary arrangements have been made by one."
    ]
  },
  {
    numb: 32,
    question: "Why do you tell a lie?",
    answer: "Why is a lie told by you?",
    options: [
      "Why a lie told by you?",
      "Why is a lie told by you?",
      "Why is a lite being told you?",
      "Why is a lie be told by you?"
    ]
  },
  {
    numb: 33,
    question: "Who is creating this mess?",
    answer: "By whom is this mess being created?",
    options: [
      "Who has been created this mess?",
      "By whom has this mess been created?",
      "By whom is this mess being created?",
      "By whom this mess is being created?"
    ]
  },
  {
    numb: 34,
    question: "She will invite me.",
    answer: "I shall be invited by her.",
    options: [
      "I shall be invited by her.",
      "I will invited by her.",
      "I shall being invited by ",
      "I will been invited by her."
    ]
  },
  {
    numb: 35,
    question: "Afridi plays the Harmonium and the sitar is_______also. ",
    answer: "Played by him",
    options: [
      "Played",
      "Played by he",
      "Played by him",
      "N.O.T"
    ]
  },
  {
    numb: 36,
    question: "Passive Voice of ” She has completed two courses”.",
    answer: "Two courses have been completed by her.",
    options: [
      "Two courses have been completed by her.",
      "Two courses has been completed by her.",
      "Two courses will be completed by her.",
      "Two courses had been completed by her."
    ]
  },
  {
    numb: 37,
    question: "Passive Voice of “The boy has rung the bell”.",
    answer: "The bell has been rung by the  boy.",
    options: [
      "The bell has been being rung by the boy.",
      "The bell was being rung by the boy.",
      "The bell was rung by the boy.",
      "The bell has been rung by the  boy."
    ]
  },
  {
    numb: 38,
    question: "I take exercise daily.",
    answer: "Exercise is taken daily by me.",
    options: [
      "Exercise are taken daily by me.",
      "Exercise is taken daily by me.",
      "Exercise is being taken daily by me.",
      "Exercise is been taken daily by me."
    ]
  },
  {
    numb: 39,
    question: "He did not give up the fight even though he was badly bruised.",
    answer: "The fight was not given up by him even though he was badly bruised.",
    options: [
      "The fight did not give up by him even though he was badly bruised.",
      "The fight had not given up by him even though he was badly bruised.",
      "The fight was not given up by him even though he was badly bruised.",
      "The fight was not being given up by him even though he was badly "
    ]
  },
  {
    numb: 40,
    question: "Active Voice of “Movies are not watched by him”.",
    answer: "He does not watch movies.",
    options: [
      "He did not watch movies.",
      "He do not watch movies.",
      "He is not watched ",
      "He does not watch movies."
    ]
  },
  {
    numb: 41,
    question: "Passive Voice of “Someone pulled the bull violently”.",
    answer: "The bull was pulled violently.",
    options: [
      "The bull was pulled violently.",
      "The bull had been pulled violently.",
      "The bull was to be pulled violently by ",
      "The bull had been pulled violently by "
    ]
  },
];
