// Array of questions with options and correct answers
const questions = [
{
    numb: 1,
    question: 'Antonym of "Applicable" is ____?',
    answer: 'Irrelevant',
    options: [
      'Upset',
      'Minimifidian',
      'Irrelevant',
      'Cynical'
    ]
  },
  {
    numb: 2,
    question: 'Antonym of "Abate" is ____?',
    answer: 'All of above',
    options: [
      'Enhance',
      'Foster',
      'Augment',
      'All of above'
    ]
  },
  {
    numb: 3,
    question: 'Antonym of "Acerbity" is ____?',
    answer: 'All of these',
    options: [
      'Sweetness',
      'Mellowness',
      'Mildness',
      'All of these'
    ]
  },
  {
    numb: 4,
    question: 'Which one of the following is antonym of "Flummox" while others are synonyms?',
    answer: 'Enlighten',
    options: [
      'Baffle',
      'Confound',
      'Perplex',
      'Enlighten'
    ]
  },
  {
    numb: 5,
    question: 'Antonym of "REVEALED" is ____?',
    answer: 'Concealed',
    options: [
      'Denied',
      'Concealed',
      'Ignored',
      'Overlooked'
    ]
  },
  {
    numb: 6,
    question: 'Antonym of "Friend" is ____?',
    answer: 'Enemy',
    options: [
      'Enemy',
      'Brother',
      'Companion',
      'None'
    ]
  },
  {
    numb: 7,
    question: 'Antonym of "GUMPTION" is ____?',
    answer: 'Apathy',
    options: [
      'Apathy',
      'Nerve',
      'Initiative',
      'Sagacity'
    ]
  },
  {
    numb: 8,
    question: 'Antonym of "PRODIGAL" is ____?',
    answer: 'Thrifty',
    options: [
      'Spendthrift',
      'Squandering',
      'Thrifty',
      'Wanton'
    ]
  },
  {
    numb: 9,
    question: 'Antonym of "NIGGARDLY" is ____?',
    answer: 'Generous',
    options: [
      'Generous',
      'Chintzy',
      'Closefisted',
      'Skimpy'
    ]
  },
  {
    numb: 10,
    question: 'Antonym of "Elastic" is ____?',
    answer: 'Rigid',
    options: [
      'Yielding',
      'Rigid',
      'Mold-able',
      'Supple'
    ]
  },
  {
    numb: 11,
    question: 'Antonym of "famous" is ____.',
    answer: 'Obscure',
    options: [
      'Poor',
      'Obscure',
      'Untalented',
      'Boring'
    ]
  },
  {
    numb: 12,
    question: 'Antonym of "impecunious" is ____.',
    answer: 'Wealthy',
    options: [
      'Wealthy',
      'Cautious',
      'Hungry',
      'Tardy'
    ]
  },
  {
    numb: 13,
    question: 'Antonym of "bemuse" is ____?',
    answer: 'Clarify',
    options: [
      'Depress',
      'Inspire',
      'Clarify',
      'Desire'
    ]
  },
  {
    numb: 14,
    question: 'Antonym of "Incur" is ____?',
    answer: 'Avoid',
    options: [
      'Attract',
      'Invite',
      'Earn',
      'Avoid'
    ]
  },
  {
    numb: 15,
    question: 'Antonym of "BRUSQUE" is ____?',
    answer: 'Courteous',
    options: [
      'Corrupt',
      'Brash',
      'Energetic',
      'Courteous'
    ]
  },
  {
    numb: 16,
    question: 'Antonym of "Aberrant" is ____?',
    answer: 'Both a&b',
    options: [
      'Steadfast',
      'Persistent',
      'Devious',
      'Both a&b'
    ]
  },
  {
    numb: 17,
    question: 'Antonym of "Addendum" is ____?',
    answer: 'All of above',
    options: [
      'Detriment',
      'Lessening',
      'Subtraction',
      'All of above'
    ]
  },
  {
    numb: 18,
    question: 'Which one of the following is antonym of "IMPOVERISHED" while others are synonyms?',
    answer: 'Wealthy',
    options: [
      'Broke',
      'Destitute',
      'Impecunious',
      'Wealthy'
    ]
  },
  {
    numb: 19,
    question: 'Antonym of "PATHOLOGICAL" is ____?',
    answer: 'Healthy',
    options: [
      'Healthy',
      'Diseased',
      'Morbid',
      'None of these'
    ]
  },
  {
    numb: 20,
    question: 'Antonym of "Apposite" is ____?',
    answer: 'Inappropriate',
    options: [
      'Liable',
      'Connected',
      'Inappropriate',
      'None'
    ]
  },
  {
    numb: 21,
    question: 'Antonym of "PIQUE" is ____?',
    answer: 'Joy',
    options: [
      'Hurt',
      'Irk',
      'Joy',
      'Huff'
    ]
  },
  {
    numb: 22,
    question: 'Antonym of "NEBULOUS" is ____?',
    answer: 'Apparent',
    options: [
      'Misty',
      'Apparent',
      'Murky',
      'Shadowy'
    ]
  },
  {
    numb: 23,
    question: 'Antonym of "GARBLED" is ____?',
    answer: 'Unscramble',
    options: [
      'Slant',
      'Unscramble',
      'Obscure',
      'Pervert'
    ]
  },
  {
    numb: 24,
    question: 'Antonym of "Harmonious" is ____?',
    answer: 'Hostile',
    options: [
      'Peacful',
      'Hostile',
      'Dominant',
      'Tuneful'
    ]
  },
  {
    numb: 25,
    question: 'Antonym of "labor" is ____.',
    answer: 'Rest',
    options: [
      'Amuse',
      'Surrender',
      'Rest',
      'Strive'
    ]
  },
  {
    numb: 26,
    question: 'Antonym of "quiescent" is ____.',
    answer: 'Active',
    options: [
      'Lackadaisical',
      'Active',
      'Dull',
      'Prescient'
    ]
  },
  {
    numb: 27,
    question: 'Antonym of "accelerate" is ____?',
    answer: 'Delay',
    options: [
      'Delay',
      'Risk',
      'Monitor',
      'Deny'
    ]
  },
  {
    numb: 28,
    question: 'Antonym of "Provoke" is ____?',
    answer: 'Allay',
    options: [
      'Arouse',
      'Induce',
      'Evoke',
      'Allay'
    ]
  },
  {
    numb: 29,
    question: 'Antonym of "PATHOLOGICAL" is ____?',
    answer: 'Healthy',
    options: [
      'Sick',
      'Healthy',
      'Chemicals',
      'Selective'
    ]
  },
  {
    numb: 30,
    question: 'Antonym of "Abject" is ____?',
    answer: 'All of above',
    options: [
      'Commendable',
      'Exalted',
      'Excellent',
      'All of above'
    ]
  }
  
]
