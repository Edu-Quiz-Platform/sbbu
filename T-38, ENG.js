// Array of questions with options and correct answers
const questions = [
{
    numb: 51,
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
    numb: 52,
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
    numb: 53,
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
    numb: 54,
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
    numb: 55,
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
    numb: 56,
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
    numb: 57,
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
    numb: 58,
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
    numb: 59,
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
    numb: 60,
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
    numb: 61,
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
    numb: 62,
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
    numb: 63,
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
    numb: 64,
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
    numb: 65,
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
    numb: 66,
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
    numb: 67,
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
    numb: 68,
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
    numb: 69,
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
    numb: 70,
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
    numb: 71,
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
    numb: 72,
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
    numb: 73,
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
    numb: 74,
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
    numb: 75,
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
    numb: 76,
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
    numb: 77,
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
    numb: 78,
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
    numb: 79,
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
    numb: 80,
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
