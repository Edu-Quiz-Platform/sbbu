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
    question: "Passive Voice of ” Sana is washing her clothes” is _______________________.",
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
    question: "Passive Voice of “I saw him leaving the house” is _________________.",
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
    question: "Passive Voice of “The boy did not break the glass” is ______________________.",
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
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 20,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 21,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 22,
    question: "Passive Voice of “The teacher may punish you”.",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 23,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 24,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 25,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 26,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 27,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 28,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 29,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 30,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 31,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 32,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 33,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 34,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 35,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 36,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 37,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 38,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 39,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 40,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 41,
    question: "?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
];
