// Array of questions with options and correct answers
const questions = [
  {
    "numb": 1,
    "question": 'How many Surahs names are with only one letter?',
    "answer": '4',
    "options": [
      '5',
      '4',
      '3',
      '6'
    ]
  },
  {
    "numb": 2,
    "question": 'Which Surah of Holy Quran has 200 VERSES?',
    "answer": 'Surah Al Imran',
    "options": [
      'Surah Al Imran',
      'Surah Hamd',
      'Surah Yusuf',
      'Surah Noon'
    ]
  },
  {
    "numb": 3,
    "question": '____ will be first person questioned on Day of Qiyamat.',
    "answer": 'Hazrat Muhammad ()',
    "options": [
      'Hazrat Muhammad ()',
      'Hazrat Adam (A.S)',
      'Jibreel (A.S)',
      'Iblees'
    ]
  },
  {
    "numb": 4,
    "question": 'Islamic official seal started in ____?',
    "answer": '7 A.H',
    "options": [
      '8 A.H',
      '7 A.H',
      '6 A.H',
      '9 A.H'
    ]
  },
  {
    "numb": 5,
    "question": 'Torat means ____?',
    "answer": 'Law',
    "options": [
      'Peace',
      'Sign',
      'Law',
      'Good news'
    ]
  },
  {
    "numb": 6,
    "question": 'How many types of Tawaf are there ____?',
    "answer": '7',
    "options": [
      'Four',
      'Three',
      'Two',
      'Seven'
    ]
  },
  {
    "numb": 7,
    "question": 'A person who has an intention to offer only Hajj at Meeqat is called ____?',
    "answer": 'Mufrid',
    "options": [
      'Mumtamae',
      'Mufrid',
      'Qaran',
      'None of them'
    ]
  },
  {
    "numb": 8,
    "question": 'Consensus of opinion stands for____?',
    "answer": 'Ijma',
    "options": [
      'Ijma',
      'Qiyas',
      'Ijtehad',
      'Jury'
    ]
  },
  {
    "numb": 9,
    "question": 'The name of the fifth Kalimah is?',
    "answer": 'Kalimah Istighfar',
    "options": [
      'Kalimah Shahdat',
      'Kalimah Istighfar',
      'Kalimah Tamjeed',
      'Kalimah Tauheed'
    ]
  },
  {
    "numb": 10,
    "question": 'Ayat ul Kursi (آيت الکرسی) is in which Surah of the Holy Quran?',
    "answer": 'Surah Al-Baqarah',
    "options": [
      'Surah Al-Baqarah',
      'Surah An-Nisa',
      'Surah Al-ma’ida',
      'Surah Al-A’raf'
    ]
  },
  {
    "numb": 11,
    "question": 'Surah Namal means a ____?',
    "answer": 'Ant',
    "options": [
      'Ant',
      'Camel',
      'Goat',
      'Dog'
    ]
  },
  {
    "numb": 12,
    "question": 'Hazrat Ibrahim (A.H) name mentioned in the Holy Quran ____ times.',
    "answer": '67',
    "options": [
      '66',
      '65',
      '64',
      '67'
    ]
  },
  {
    "numb": 13,
    "question": '____ city is called “home of hadith”.',
    "answer": 'Madina',
    "options": [
      'Baghdad',
      'Madina',
      'Makkah',
      'Basra'
    ]
  },
  {
    "numb": 14,
    "question": '____ is the best drink mentioned in Holy Qur’an.',
    "answer": 'Milk',
    "options": [
      'Water',
      'Milk',
      'Honey',
      'Juice'
    ]
  },
  {
    "numb": 15,
    "question": 'In Surah ____, every verse ends with letter ‘Dal’.',
    "answer": 'Ikhlas',
    "options": [
      'Falaq',
      'Ikhlas',
      'Iqra',
      'Balad'
    ]
  },
  {
    "numb": 16,
    "question": 'The third daughter of our Holy Prophet (SAW) was ____. ',
    "answer": 'Hazrat Umme Kulsom (R.A)',
    "options": [
      'Hazrat Umme Kulsom (R.A)',
      'Hazrat Fatima (R.A)',
      'Hazrat Zainab (R.A)',
      'Hazrat Ruqayah (R.A)'
    ]
  },
  {
    "numb": 17,
    "question": 'Which is sixth month of Islamic Calendar?',
    "answer": 'Jamadi-us-Sani',
    "options": [
      'Rabi-ul-Awwal',
      'Rajab',
      'Rabi-us-Sani',
      'Jamadi-us-Sani'
    ]
  },
  {
    "numb": 18,
    "question": 'In how many years Makhi Surahs were revealed?',
    "answer": '13',
    "options": [
      '15',
      '14',
      '13',
      '16'
    ]
  },
  {
    "numb": 19,
    "question": 'Fasting demands total abstinence from ____.',
    "answer": 'All of these',
    "options": [
      'Smoking',
      'Sex',
      'Eating & Drinking',
      'All of these'
    ]
  },
  {
    "numb": 20,
    "question": 'The second Ashra of Ramazan is called ?',
    "answer": 'Ashra-e-Maghfirat',
    "options": [
      'Ashra-e-Najat-e-Naar-e-Jahannum',
      'Ashra-e-Rehmat',
      'Ashra-e-Maghfirat',
      'All of these'
    ]
  },
  {
    "numb": 21,
    "question": 'Who was the Third Caliph?',
    "answer": 'Hazrat Usman(R.A)',
    "options": [
      'Hazrat Usman(R.A)',
      'Hazrat Ali(R.A)',
      'Hazrat Umar(R.A)',
      'Hazrat Abu Bakar(R.A)'
    ]
  },
  {
    "numb": 22,
    "question": 'How many sons Hazrat Muhammad (SAW) had with Hazrat Khadija (RA)?',
    "answer": '2',
    "options": [
      '3',
      '2',
      '1',
      '4'
    ]
  },
  {
    "numb": 23,
    "question": 'Hazrat Bibi Ruqayyah (R.A) was the daughter of Hazrat Muhammad (SAW) and ____?',
    "answer": 'Khadija bint Khuwaylid',
    "options": [
      'Khadija bint Khuwaylid',
      'Rayhana bint Zayd',
      'Zaynab bint Khuzayma',
      'Maria al-Qibtiyya'
    ]
  },
  {
    "numb": 24,
    "question": 'Ninth wife of Hazrat Muhammad (SAW) was ____. ',
    "answer": 'Hazrat Safiya (RA)',
    "options": [
      'Hazrat Zainab binte Khazeema(RA)',
      'Hazrat Safiya (RA)',
      'Hazrat Memona (RA)',
      'Hazrat Umeh Habiba (RA)'
    ]
  },
  {
    "numb": 25,
    "question": 'Which Sura is called the heart of Holy Qur’an?',
    "answer": 'Yaseen',
    "options": [
      'Fatiha',
      'Yaseen',
      'Iklas',
      'Mulk'
    ]
  },
  {
    "numb": 26,
    "question": 'Which Surah of the Holy Quran deals with the laws of marriage?',
    "answer": 'Nisa',
    "options": [
      'Nisa',
      'Mujadala',
      'Dalaq',
      'Mumtahina'
    ]
  },
  {
    "numb": 27,
    "question": 'What is the name of 17th Para of Holy Qur’an?',
    "answer": 'Aqtarabo',
    "options": [
      'Aqtarabo',
      'Qal Alam',
      'Subhanallazi',
      'Qadd Aflaha'
    ]
  },
  {
    "numb": 28,
    "question": 'First Ashra (First ten days of Ramadan) is known as?',
    "answer": 'Days of Mercy',
    "options": [
      'Days to seek refuge from Hellfire',
      'Days of Forgiveness',
      'Days of Mercy',
      'None of these'
    ]
  },
  {
    "numb": 29,
    "question": 'How many surahs of the Holy Quran starts with broken letters (مقطعات حروف)?',
    "answer": '29',
    "options": [
      '14',
      '7',
      '29',
      '21'
    ]
  },
  {
    "numb": 30,
    "question": 'Who is the gate-keeper of hell?',
    "answer": 'Malik',
    "options": [
      'Sabeel',
      'Malik',
      'Rizwan',
      'Tahir'
    ]
  }
]
