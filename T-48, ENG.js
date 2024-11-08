// Array of questions with options and correct answers
const questions = [
  {
    "numb": 1,
    "question": "Synonym of “incorrigible” is _________?",
    "answer": "unchangeable",
    "options": [
      "commendable",
      "incorruptible",
      "unchangeable",
      "overbearing"
    ]
  },
  {
    "numb": 2,
    "question": "Synonym of “blissful” is _________?",
    "answer": "beatific",
    "options": [
      "modish",
      "dour",
      "beatific",
      "moot"
    ]
  },
  {
    "numb": 3,
    "question": "Synonym of “chicanery” is _________?",
    "answer": "trickery",
    "options": [
      "poultry",
      "aroma",
      "chastity",
      "trickery"
    ]
  },
  {
    "numb": 4,
    "question": "Synonym of “tortuous” is _________?",
    "answer": "winding",
    "options": [
      "winding",
      "sadistic",
      "cruel",
      "like a turtle"
    ]
  },
  {
    "numb": 5,
    "question": "Synonym of “Blush” is _____________?",
    "answer": "Redden",
    "options": [
      "Taunt",
      "Detain",
      "Redden",
      "Inter"
    ]
  },
  {
    "numb": 6,
    "question": "Synonym of “Vie” is _____________?",
    "answer": "Compete",
    "options": [
      "Compete",
      "Kowtow",
      "Censure",
      "Sanction"
    ]
  },
  {
    "numb": 7,
    "question": "Synonym of “GAINSAY” is _____________?",
    "answer": "Oppose",
    "options": [
      "Suppress",
      "Oppose",
      "Yielding",
      "animation"
    ]
  },
  {
    "numb": 8,
    "question": "Synonym of “Abate” is _________?",
    "answer": "All of above",
    "options": [
      "Diminish",
      "Halt",
      "Decline",
      "All of above"
    ]
  },
  {
    "numb": 9,
    "question": "Synonym of “Acerbity” is _________?",
    "answer": "All of these",
    "options": [
      "Tartness",
      "Astringency",
      "Sourness",
      "All of these"
    ]
  },
  {
    "numb": 10,
    "question": "Synonym of “INFRINGE” is__________?",
    "answer": "Breach",
    "options": [
      "Breach",
      "Escape",
      "Hard",
      "Bound"
    ]
  },
  {
    "numb": 11,
    "question": "Synonym of “Intrepid” is _____________?",
    "answer": "Bold",
    "options": [
      "Timid",
      "Affable",
      "Bold",
      "Lazy"
    ]
  },
  {
    "numb": 12,
    "question": "Synonym of “AMNESTY” is________?",
    "answer": "Pardon",
    "options": [
      "Assistance",
      "Security",
      "Judicial",
      "Pardon"
    ]
  },
  {
    "numb": 13,
    "question": "Synonym of “Obscure” is __________?",
    "answer": "confusing",
    "options": [
      "confusing",
      "Reveal",
      "Clear",
      "Bright"
    ]
  },
  {
    "numb": 14,
    "question": "Synonym of “Abysmal” is__________?",
    "answer": "All of them",
    "options": [
      "Dreadful",
      "Awful",
      "Atrocious",
      "All of them"
    ]
  },
  {
    "numb": 15,
    "question": "Which one of the following is most similar in meaning to “SOPORIFIC”?",
    "answer": "Hypnotic",
    "options": [
      "Meteoric",
      "Phlegmatic",
      "Sadistic",
      "Hypnotic"
    ]
  },
  {
    "numb": 16,
    "question": "Antonym of “Paucity” is ____________?",
    "answer": "Surplus",
    "options": [
      "Scarcity",
      "Surplus",
      "Presence",
      "Shallow"
    ]
  },
  {
    "numb": 17,
    "question": "Which one of the following is antonym of “Minuscule” while others are synonyms?",
    "answer": "Majuscule",
    "options": [
      "Diminutive",
      "Lilliputian",
      "Miniature",
      "Majuscule"
    ]
  },
  {
    "numb": 18,
    "question": "Antonym of “Torture” is ____________?",
    "answer": "Peace",
    "options": [
      "Third Degree",
      "Twinge",
      "Peace",
      "Stick"
    ]
  },
  {
    "numb": 19,
    "question": "Antonym of “pardon” is _____________?",
    "answer": "Punish",
    "options": [
      "Punish",
      "forgive",
      "praise",
      "Reward"
    ]
  },
  {
    "numb": 20,
    "question": "Antonym of “SARTORIAL” is _____________?",
    "answer": "Homespun",
    "options": [
      "Homespun",
      "Cheerful",
      "Inelegant",
      "Sincere"
    ]
  },
  {
    "numb": 21,
    "question": "Antonym of “MITE” is _____________?",
    "answer": "Whole",
    "options": [
      "Bit",
      "Bug",
      "Insect",
      "Whole"
    ]
  },
  {
    "numb": 22,
    "question": "Antonym of “SENILE” is _____________?",
    "answer": "Alert",
    "options": [
      "Doting",
      "Anile",
      "Alert",
      "Ancient"
    ]
  },
  {
    "numb": 23,
    "question": "Antonym of “Facetious” is _____________?",
    "answer": "Serious",
    "options": [
      "Teasing",
      "Serious",
      "Tongue-in-check",
      "Copy"
    ]
  },
  {
    "numb": 24,
    "question": "Antonym of “Revenge” is _____________.",
    "answer": "pardon",
    "options": [
      "vengeance",
      "reprisal",
      "pardon",
      "payback"
    ]
  },
  {
    "numb": 25,
    "question": "Antonym of “sartorial” is __________.",
    "answer": "homespun",
    "options": [
      "cheerful",
      "sincere",
      "inelegant",
      "homespun"
    ]
  },
  {
    "numb": 26,
    "question": "Antonym of “earnest” is _______?",
    "answer": "frivolous",
    "options": [
      "cheap",
      "frivolous",
      "release",
      "civilized"
    ]
  },
  {
    "numb": 27,
    "question": "Antonym of “Dismantle” is _____________?",
    "answer": "Build",
    "options": [
      "Vie",
      "Build",
      "Outclass",
      "Level"
    ]
  },
  {
    "numb": 28,
    "question": "Antonym of “Abridge” is _____________?",
    "answer": "Augment",
    "options": [
      "Subdue",
      "Augment",
      "Encourage",
      "Elaborate"
    ]
  },
  {
    "numb": 29,
    "question": "Antonym of “Abjure”?",
    "answer": "Both a&b",
    "options": [
      "Espouse",
      "Support",
      "Both a&b",
      "Disavow"
    ]
  },
  {
    "numb": 100,
    "question": "Antonym of “HYPOCRISY”?",
    "answer": "Uprightness",
    "options": [
      "Doubt",
      "Uprightness",
      "Burdensome",
      "Fluent"
    ]
  }
]