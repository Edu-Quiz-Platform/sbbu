// Array of questions with options and correct answers
const questions = [
{
    numb: 191,
    question: 'The name of UNO was coined by?',
    answer: 'Frank Roosevelt',
    options: [
      'George Washington',
      'Frank Roosevelt',
      'John Kennedy',
      'Wickshell'
    ]
  },
  {
    numb: 192,
    question: 'The newest member of the Eurozone is ____?',
    answer: 'Lithuania',
    options: [
      'Lithuania',
      'Croatia',
      'Bulgaria',
      'Cyprus'
    ]
  },
  {
    numb: 193,
    question: 'The North Atlantic treaty (NATO) was signed in ____?',
    answer: '1949',
    options: [
      '1945',
      '1947',
      '1949',
      '1951'
    ]
  },
  {
    numb: 194,
    question: 'The number of countries which participated in the first Olympic games held at Athens was ____?',
    answer: '14',
    options: [
      '12',
      '15',
      '14',
      '21'
    ]
  },
  {
    numb: 195,
    question: 'The OIC was founded in ____?',
    answer: 'Morocco',
    options: [
      'Saudi Arabia',
      'Iraq',
      'Qatar',
      'Morocco'
    ]
  },
  {
    numb: 196,
    question: 'The old name of Jordan is ____?',
    answer: 'Transjordan',
    options: [
      'Transjordan',
      'French Sudan',
      'Magyar',
      'None'
    ]
  },
  {
    numb: 197,
    question: 'The oldest anthem of the world is?',
    answer: 'Japan',
    options: [
      'Japan',
      'China',
      'Russia',
      'Denmark'
    ]
  },
  {
    numb: 198,
    question: 'The Pearl River is located in which country?',
    answer: 'China',
    options: [
      'Philippines',
      'China',
      'Myanmar',
      'Bangladesh'
    ]
  },
  {
    numb: 199,
    question: 'The period from 1649-1660 is known as ____?',
    answer: 'Commonwealth period',
    options: [
      'Commonwealth period',
      'Jacobean period',
      'Caroline period',
      'Restoration period'
    ]
  },
  {
    numb: 200,
    question: 'The permanent Secretariat of SAARC is located in ____?',
    answer: 'Kathmandu, Nepal',
    options: [
      'Islamabad, Pakistan',
      'New Delhi, India',
      'Kathmandu, Nepal',
      'Colombo, Sri Lanka'
    ]
  },
  {
    numb: 201,
    question: 'The picture on the back of 10 Rupee Pakistani note?',
    answer: 'Khyber Pass',
    options: [
      'Bolan Pass',
      'Attock Pass',
      'Khyber Pass',
      'Khunjerab Pass'
    ]
  },
  {
    numb: 202,
    question: 'The process with the help of which the students are divided into high / low achievers is?',
    answer: 'Exam',
    options: [
      'Measurement',
      'Exam',
      'Evaluation',
      'Test'
    ]
  },
  {
    numb: 203,
    question: 'The real name of K.K Aziz a historian was ____?',
    answer: 'Khursheed Kamal Aziz',
    options: [
      'Kamal Khan Aziz',
      'Khursheed Kamal Aziz',
      'Kareem Khaliq Aziz',
      'None of Above'
    ]
  },
  {
    numb: 204,
    question: 'The SAFTA(South Asian Free Trade Agreement) entered into force on 1 January, ____?',
    answer: '2004',
    options: [
      '2004',
      '2005',
      '2006',
      '2007'
    ]
  },
  {
    numb: 205,
    question: 'The second largest cricket ground in the world?',
    answer: 'Melbourne Cricket Ground',
    options: [
      'Melbourne Cricket Ground',
      'Eden Gardens',
      'Shaheed Vir Narayan Singh International Cricket Stadium',
      'Jawaharlal Nehru International Stadium'
    ]
  },
  {
    numb: 206,
    question: 'The stick which is used to hit the ball in golf is called ____?',
    answer: 'Club',
    options: [
      'Club',
      'Golf stick',
      'Golf Hockey',
      'None of these'
    ]
  },
  {
    numb: 207,
    question: 'The term PVC used in the plastic industry stands for ____?',
    answer: 'Polyvinyl chloride',
    options: [
      'Phosphavinyl chloride',
      'Phosphor vanadium chloride',
      'Polyvinyl chloride',
      'Polyvinyl carbonate'
    ]
  },
  {
    numb: 208,
    question: 'The Way of the World is written by ____?',
    answer: 'William Congreve',
    options: [
      'William Congreve',
      'Ron Suskind',
      'H.V. Hudson',
      'Ayesha Jalal'
    ]
  },
  {
    numb: 209,
    question: 'The World Day for International Justice (WDIJ) is observed every year on ____?',
    answer: '17 July',
    options: [
      '16 July',
      '17 July',
      '18 July',
      '19 July'
    ]
  },
  {
    numb: 210,
    question: 'The world leader in geothermal electricity is ____?',
    answer: 'USA',
    options: [
      'New Zealand',
      'USA',
      'Iceland',
      'Pakistan'
    ]
  },
  {
    numb: 211,
    question: 'The World Leprosy Day 2019 will be observed on?',
    answer: '27 January',
    options: [
      '25 January',
      '26 January',
      '27 January',
      '28 January'
    ]
  },
  {
    numb: 212,
    question: 'The world’s first drainage system was built by the people of ____?',
    answer: 'Indus Valley civilization',
    options: [
      'Egyptian civilization',
      'Indus Valley civilization',
      'Chinese civilization',
      'Mesopotamian civilization'
    ]
  },
  {
    numb: 213,
    question: 'The world’s first nuclear power plant was built by ____?',
    answer: 'Russia',
    options: [
      'United States',
      'Russia',
      'France',
      'Germany'
    ]
  },
  {
    numb: 214,
    question: 'The world’s largest bird is ____?',
    answer: 'Common Ostrich',
    options: [
      'Kori Bustard',
      'Common Ostrich',
      'King Penguin',
      'Southern Cassowary'
    ]
  },
  {
    numb: 215,
    question: 'There are nearly ____ billion humans on planet Earth.',
    answer: '7.6',
    options: [
      '6',
      '6.5',
      '7',
      '7.6'
    ]
  },
  {
    numb: 216,
    question: 'Through which one of the following countries does the equator not pass?',
    answer: 'Tanzania',
    options: [
      'Zaire (Congo)',
      'Kenya',
      'Uganda',
      'Tanzania'
    ]
  },
  {
    numb: 217,
    question: 'Treaty of Lausanne was signed in ____?',
    answer: '1923',
    options: [
      '1922',
      '1924',
      '1923',
      '1921'
    ]
  },
  {
    numb: 218,
    question: 'UNITA has become a political party in Angola, but between the 1960s-1990s it was one of the chief rebel groups in the country. Who was its leader?',
    answer: 'Jonas Savimbi',
    options: [
      'Robert Mugabe',
      'Samuel Doe',
      'Jonas Savimbi',
      'Amilcar Cabral'
    ]
  },
  {
    numb: 219,
    question: 'Upper Volta is the new name of ____?',
    answer: 'Burkina Faso',
    options: [
      'USA',
      'Somalia',
      'Burkina Faso',
      'None of these'
    ]
  },
  {
    numb: 220,
    question: 'USA consists of ____ states?',
    answer: '50',
    options: [
      '52',
      '50',
      '54',
      '51'
    ]
  }
]
