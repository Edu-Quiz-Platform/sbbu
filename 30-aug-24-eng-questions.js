// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: 'What is a synonym for "happy"?',
    answer: "Joyful",
    options: [
      "Sad",
      "Joyful",
      "Angry",
      "Tired"
    ]
  },
  {
    numb: 2,
    question: 'Which word is a synonym for "beautiful"?',
    answer: "Attractive",
    options: [
      "Ugly",
      "Plain",
      "Boring",
      "Attractive"
    ]
  },
  {
    numb: 3,
    question: 'What is the synonym of "difficult"?',
    answer: "Hard",
    options: [
      "Hard",
      "Easy",
      "Simple",
      "Quick"
    ]
  },
  {
    numb: 4,
    question: 'Which word is closest in meaning to "large"?',
    answer: "Big",
    options: [
      "Tiny",
      "Small",
      "Big",
      "Narrow"
    ]
  },
  {
    numb: 5,
    question: 'What is a synonym for "brave"?',
    answer: "Fearless",
    options: [
      "Cowardly",
      "Weak",
      "Timid",
      "Fearless"
    ]
  },
  {
    numb: 6,
    question: 'Which word means the same as "rapid"?',
    answer: "Fast",
    options: [
      "Fast",
      "Slow",
      "Lazy",
      "Quiet"
    ]
  },
  {
    numb: 7,
    question: 'What is the synonym for "generous"?',
    answer: "Benevolent",
    options: [
      "Selfish",
      "Benevolent",
      "Greedy",
      "Mean"
    ]
  },
  {
    numb: 8,
    question: 'Which word is a synonym for "honest"?',
    answer: "Truthful",
    options: [
      "Deceitful",
      "Untrustworthy",
      "Truthful",
      "Dishonest"
    ]
  },
  {
    numb: 9,
    question: "What is a synonym for ancient?",
    answer: "Modern",
    options: [
      "Modern",
      "New",
      "Old",
      "Young"
    ]
    },
  {
    numb: 10,
    question: 'Which word means the same as "frequent"?',
    answer: "Regular",
    options: [
      "Rare",
      "Infrequent",
      "Occasional",
      "Regular"
    ]
  },
  {
    numb: 11,
    question: 'What is the antonym of "happy"?',
    answer: "Sad",
    options: [
      "Joyful",
      "Sad",
      "Excited",
      "Cheerful"
    ]
  },
  {
    numb: 12,
    question: 'Which word is the opposite of "generous"?',
    answer: "Selfish",
    options: [
      "Benevolent",
      "Kind",
      "Caring",
      "Selfish"
    ]
  },
  {
    numb: 13,
    question: 'What is the antonym of "difficult"?',
    answer: "Easy",
    options: [
      "Complicated",
      "Hard",
      "Easy",
      "Challenging"
    ]
  },
  {
    numb: 14,
    question: 'Which word is the opposite of "large"?',
    answer: "Small",
    options: [
      "Small",
      "Huge",
      "Massive",
      "Giant"
    ]
  },
  {
    numb: 15,
    question: 'What is the antonym of "brave"?',
    answer: "Timid",
    options: [
      "Courageous",
      "Fearless",
      "Timid",
      "Bold"
    ]
  },
  {
    numb: 16,
    question: 'Which word means the opposite of "fast"?',
    answer: "Slow",
    options: [
      "Quick",
      "Slow",
      "Rapid",
      "Speedy"
    ]
  },
  {
    numb: 17,
    question: 'What is the antonym of "generous"?',
    answer: "Greedy",
    options: [
      "Greedy",
      "Charitable",
      "Giving",
      "Altruistic"
    ]
  },
  {
    numb: 18,
    question: 'Which word is the opposite of "honest"?',
    answer: "Dishonest",
    options: [
      "Truthful",
      "Trustworthy",
      "Sincere",
      "Dishonest"
    ]
  },
  {
    numb: 19,
    question: 'What is the antonym of "ancient"?',
    answer: "Modern",
    options: [
      "Old",
      "Modern",
      "Antique",
      "Aged"
    ]
  },
  {
    numb: 20,
    question: 'Which word is the opposite of "frequent"?',
    answer: "Rare",
    options: [
      "Regular",
      "Common",
      "Rare",
      "Usual"
    ]
  },
  {
    numb: 21,
    question: 'Choose the correct preposition: "The cat is hiding ___ the table."',
    answer: "under",
    options: [
      "on",
      "under",
      "beside",
      "between"
    ]
  },
  {
    numb: 22,
    question: 'Fill in the blank: "He went to the store ___ buying"',
    answer: "after",
    options: [
      "before",
      "with",
      "during",
      "after"
    ]
  },
  {
    numb: 23,
    question: 'Which preposition correctly completes the sentence: "She is good ___ painting."',
    answer: "at",
    options: [
      "at",
      "in",
      "on",
      "of"
    ]
  },
  {
    numb: 24,
    question: 'Fill in the blank: "They will arrive ___ the morning."',
    answer: "in",
    options: [
      "at",
      "in",
      "on",
      "by"
    ]
  },
  {
    numb: 25,
    question: 'Choose the right preposition: "The book is ___ the shelf."',
    answer: "on",
    options: [
      "at",
      "in",
      "on",
      "under"
    ]
  },
  {
    numb: 26,
    question: 'Fill in the blank: "He is interested ___ learning new languages."',
    answer: "in",
    options: [
      "about",
      "on",
      "of",
      "in"
    ]
  },
  {
    numb: 27,
    question: 'Which preposition fits best: "The meeting is scheduled ___ Friday."',
    answer: "on",
    options: [
      "on",
      "in",
      "at",
      "by"
    ]
  },
  {
    numb: 28,
    question: 'Complete the sentence with the correct preposition: "She is traveling ___ the city."',
    answer: "in",
    options: [
      "at",
      "across",
      "in",
      "on"
    ]
  },
  {
    numb: 29,
    question: 'Choose the preposition: "He arrived ___ the airport just in time."',
    answer: "at",
    options: [
      "to",
      "at",
      "in",
      "by"
    ]
  },
  {
    numb: 30,
    question: 'Fill in the blank: "The restaurant is located ___ the corner of the street."',
    answer: "at",
    options: [
      "in",
      "on",
      "at",
      "under"
    ]
  },
];