// Array of questions with options and correct answers
const questions = [
{
    numb: 1,
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
    numb: 2,
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
    numb: 3,
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
    numb: 4,
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
    numb: 5,
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
    numb: 6,
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
    numb: 7,
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
    numb: 8,
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
    numb: 9,
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
    numb: 10,
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
    numb: 11,
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
    numb: 12,
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
    numb: 13,
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
    numb: 14,
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
    numb: 15,
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
    numb: 16,
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
    numb: 17,
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
    numb: 18,
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
    numb: 19,
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
    numb: 20,
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
    numb: 21,
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
    numb: 22,
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
    numb: 23,
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
    numb: 24,
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
    numb: 25,
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
    numb: 26,
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
    numb: 27,
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
    numb: 28,
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
    numb: 29,
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
    numb: 30,
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
