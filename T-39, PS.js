// Array of questions with options and correct answers
const questions = [
{
    numb: 241,
    question: 'The Salt range is situated between rivers Soan and _____________?',
    answer: 'Jhelum',
    options: [
      'Chenab',
      'Jhelum',
      'Kabul',
      'Huro'
    ]
},
{
    numb: 242,
    question: 'What is the average height of Takhat-e-Sulaiman peak?',
    answer: '3300 meters',
    options: [
      '3200 meters',
      '3500 meters',
      '3300 meters',
      '3310 meters'
    ]
},
{
    numb: 243,
    question: 'What is the average height of Karakoram range?',
    answer: '7000 meters',
    options: [
      '7000 meters',
      '7500 meters',
      '7100 meters',
      '7300 meters'
    ]
},
{
    numb: 244,
    question: 'Gasherbrum I is also known as _____________?',
    answer: 'Hidden Peak',
    options: [
      'Hidden Peak',
      'Killer Peak',
      'White Peak',
      'Black Peak'
    ]
},
{
    numb: 245,
    question: 'Daman-e-Koh is located in ____________?',
    answer: 'Islamabad',
    options: [
      'Rawalpindi',
      'Abbottabad',
      'Multan',
      'Islamabad'
    ]
},
{
    numb: 246,
    question: 'National Language of AJ&K is __________?',
    answer: 'Urdu',
    options: [
      'Urdu',
      'Kashmiri',
      'Punjabi',
      'None of them'
    ]
},
{
    numb: 247,
    question: 'Who was the first Women Governor of Gilgit Baltistan?',
    answer: 'Begum Shama Khalid',
    options: [
      'Begum Shama Khalid',
      'Qamar-u-Zaman Kaira',
      'Wazir Baig',
      'Pir Karam Shah'
    ]
},
{
    numb: 248,
    question: 'The common value among the people of Pakistan is?',
    answer: 'Islam',
    options: [
      'Dress',
      'Language',
      'Habits',
      'Islam'
    ]
},
{
    numb: 249,
    question: 'The National Anthem of Pakistan is written by?',
    answer: 'Hafiz Jalandhri',
    options: [
      'Quaid-e-Azam',
      'Allama Iqbal',
      'Hafiz Jalandhri',
      'Chaudry Rehmat Ali'
    ]
},
{
    numb: 250,
    question: 'General Qamar Javed Bajwa took oath as Army Chief on __________?',
    answer: '29 November 2016',
    options: [
      '23 November 2016',
      '25 November 2016',
      '27 November 2016',
      '29 November 2016'
    ]
},
{
    numb: 251,
    question: 'In _____ the Shah Jahan Mosque was built during the Mughal period?',
    answer: 'Thatha',
    options: [
      'Pakpattan',
      'Thatha',
      'Multan',
      'Attock'
    ]
},
{
    numb: 252,
    question: 'Benazir Bhutto was the chairman of which political party?',
    answer: 'PPP',
    options: [
      'PML (N)',
      'MQM',
      'PPP',
      'PTI'
    ]
},
{
    numb: 253,
    question: 'Who was the Prime Minister of Pakistan during the enforcement of the first constitution?',
    answer: 'Choudhry Mohammad Ali',
    options: [
      'Mohammad Ali Bogra',
      'Khwaja Nazim Uddin',
      'Choudhry Mohammad Ali',
      'Ibrahim Ismail Chundrigar'
    ]
},
{
    numb: 254,
    question: 'Who abrogated the 1962 constitution and became CMLA?',
    answer: 'Gen Yahya Khan',
    options: [
      'Gen. Tikka Khan',
      'Gen. Ahsan Khan',
      'Gen. Mansoor Khan',
      'Gen Yahya Khan'
    ]
},
{
    numb: 255,
    question: 'How many articles were there in the constitution of 1956?',
    answer: '234 Articles',
    options: [
      '200 Articles',
      '259 Articles',
      '254 Articles',
      '234 Articles'
    ]
},
{
    numb: 256,
    question: 'Which is the national flower of Pakistan?',
    answer: 'Jasmine',
    options: [
      'Lilly',
      'Rose',
      'Jasmine',
      'Tulip'
    ]
},
{
    numb: 257,
    question: 'At the time of Independence which community was in majority in the state of Kashmir?',
    answer: 'Muslim',
    options: [
      'Muslim',
      'Hindu',
      'Sikh',
      'Christian'
    ]
},
{
    numb: 258,
    question: 'Which pass connects Pakistan with Afghanistan?',
    answer: 'Khyber Pass',
    options: [
      'Khunjerab Pass',
      'Khyber Pass',
      'Tochi Pass',
      'Gomal Pass'
    ]
},
{
    numb: 259,
    question: 'The 1962 Constitution of Pakistan was passed during the regime of?',
    answer: 'Ayoub Khan',
    options: [
      'Sikandar Mirza',
      'Ayoub Khan',
      'Yahya Khan',
      'Ch. Muhammad Ali'
    ]
},
{
    numb: 260,
    question: 'Sadqain is famous for?',
    answer: 'A & B',
    options: [
      'Painting',
      'Calligraphy',
      'Music',
      'A & B'
    ]
},
{
    numb: 261,
    question: 'Who was the hero of Pak India 1965 war?',
    answer: 'Major Raja Aziz Bhatti',
    options: [
      'Major Raja Aziz Bhatti',
      'Major Tufail',
      'Lalik Jan',
      'Mulla Faqir'
    ]
},
{
    numb: 262,
    question: 'National code of Pakistan is?',
    answer: 'PK',
    options: [
      'PAK',
      'PK',
      'PAK 1',
      'None of them'
    ]
},
{
    numb: 263,
    question: 'Who was the first woman Governor of State Bank of Pakistan?',
    answer: 'Dr Shamshad Akhter',
    options: [
      'Noor Jahan',
      'Dr Shamshad Akhter',
      'Farzana Raja',
      'Dr Ashraf Abbasi'
    ]
},
{
    numb: 264,
    question: 'Frank Meseri was the first C-in-C of ____.',
    answer: 'Pak Army',
    options: [
      'Pak Army',
      'Air Force',
      'Navy',
      'None of them'
    ]
},
{
    numb: 265,
    question: 'The range of Hatf-1 is ____?',
    answer: '100km',
    options: [
      '90km',
      '100km',
      '65km',
      '105km'
    ]
},
{
    numb: 266,
    question: 'The largest cantonment of Pakistan army is located in?',
    answer: 'Kharian',
    options: [
      'Jhelum',
      'Kharian',
      'Karachi',
      'Multan'
    ]
},
{
    numb: 267,
    question: 'On which of the following date Captain Karnal Sher Khan was martyred at Kargil?',
    answer: '5th July 1999',
    options: [
      '5th June 1999',
      '5th July 1999',
      '5th August 1999',
      '5th October 1999'
    ]
},
{
    numb: 268,
    question: 'The capital of KPK is ____?',
    answer: 'Peshawar',
    options: [
      'Peshawar',
      'Abbottabad',
      'D.I.Khan',
      'None of them'
    ]
},
{
    numb: 269,
    question: 'Jamrud Fort is located near ____?',
    answer: 'Peshawar',
    options: [
      'Peshawar',
      'Abbottabad',
      'Charsadda',
      'Attock'
    ]
},
{
    numb: 270,
    question: 'The local languages of KPK are?',
    answer: 'All of them',
    options: [
      'Pushto',
      'Hindko',
      'Chitrali',
      'All of them'
    ]
}

]
