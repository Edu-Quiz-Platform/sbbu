// Array of questions with options and correct answers
const questions = [
{
    numb: 1,
    question: 'Which Prophet invented Soap?',
    answer: 'Prophet Saleh (A.S)',
    options: [
        'Prophet Saleh (A.S)',
        'Prophet Ismail (A.S)',
        'Prophet Isa (A.S)',
        'Prophet Idress (A.S)'
    ]
},
{
    numb: 2,
    question: 'Who Introduced Police System?',
    answer: 'Hazrat Umer (R.A)',
    options: [
        'Hazrat Umer (R.A)',
        'Hazrat Abu Bakar (R.A)',
        'Hazrat Usman (R.A)',
        'None of these'
    ]
},
{
    numb: 3,
    question: 'Facsimile of Holy Prophet (SAWS) was?',
    answer: 'Hazrat Mus’ab bin Umair',
    options: [
        'Hazrat Zubair',
        'Hazrat Hassan',
        'Hazrat Hussain',
        'Hazrat Mus’ab bin Umair'
    ]
},
{
    numb: 4,
    question: 'Mughal emperor Akbar enforce Din-I-Ilahi in?',
    answer: '1582',
    options: [
        '1583',
        '1582',
        '1581',
        '1584'
    ]
},
{
    numb: 5,
    question: 'Who was made governor of south Yemen by Holy Prophet?',
    answer: 'Maaz Bin Jabal',
    options: [
        'Hazrat Amer Ibn Alas',
        'Hazrat Abu Musa Ashri R.A',
        'Maaz Bin Jabal',
        'None of these'
    ]
},
{
    numb: 6,
    question: 'The Khutba of Hajj (Hajj sermon) is delivered in which mosque?',
    answer: 'Masid-e-Nimra',
    options: [
        'Masid-e-Nimra',
        'Masjid Haram',
        'Masjid Khaif',
        'None of these'
    ]
},
{
    numb: 7,
    question: 'The book “Kitab al Amwal” (The book of Revenue) was written by?',
    answer: 'Abu Ubaid al Qasim Ibn Sallam',
    options: [
        'Abu Ubaid al Qasim Ibn Sallam',
        'Abu Yusuf',
        'Imam Bukhari',
        'Muhammad Al Shaybani'
    ]
},
{
    numb: 8,
    question: 'The famous Personalities who Accepted Islam after the Conquest of Makkah Were?',
    answer: 'All of these',
    options: [
        'Sohail Bin Amr',
        'Ikrima bin Abu Jahal (son of Abu Jahal)',
        'Abu sufyan & Hinda (Wife of Abu Sufyan)',
        'All of these'
    ]
},
{
    numb: 9,
    question: 'The Battle of Yarmouk was fought during the caliphate of?',
    answer: 'Hazrat Umar (RA)',
    options: [
        'Hazrat Umar (RA)',
        'Hazrat Usman (RA)',
        'Hazrat Abu Bakar (RA)',
        'Hazrat Ali (RA)'
    ]
},
{
    numb: 10,
    question: 'The Commandment for observing Fast has been stipulated in the Surah?',
    answer: 'Surah Baqara',
    options: [
        'Surah Baqara',
        'Surah Fateh',
        'Surah Namal',
        'Surah Yaseen'
    ]
},
{
    numb: 11,
    question: 'How many Rukus are there in Surah Al-Baqarah?',
    answer: '40',
    options: [
        '40',
        '39',
        '38',
        '41'
    ]
},
{
    numb: 12,
    question: 'Which was the first institution of Islam?',
    answer: 'Suffah',
    options: [
        'Rami',
        'Marwah',
        'Suffah',
        'Waquf'
    ]
},
{
    numb: 13,
    question: 'How many sunnah in the 4 faraiz of wudu/Abulution?',
    answer: '13',
    options: [
        '13',
        '12',
        '11',
        '14'
    ]
},
{
    numb: 14,
    question: 'Battle of Qadisiya was fought against the Persians in ____ A.D.',
    answer: '636 AD',
    options: [
        '644 AD',
        '632 AD',
        '636 AD',
        '639 AD'
    ]
},
{
    numb: 15,
    question: 'The first meal in Jannah will be?',
    answer: 'Fish Liver',
    options: [
        'Meat',
        'Honey',
        'Milk',
        'Fish Liver'
    ]
},
{
    numb: 16,
    question: 'Tafseer al Quran al Azeem was written by?',
    answer: 'Ismail bin Kathir (Ibn Al Athir)',
    options: [
        'Imam Ghazali',
        'Imam Abu Haneefa',
        'Ismail bin Kathir (Ibn Al Athir)',
        'Imam Razi'
    ]
},
{
    numb: 17,
    question: 'Hazrat Ubaidah bin al-Jarrah had the title of?',
    answer: 'Ameen-ul-Ummat',
    options: [
        'Khair-ul-Bashr',
        'Ameen-ul-Ummat',
        'Sayyed-ul-Muslimeen',
        'Khair-ul-Tabe’en'
    ]
},
{
    numb: 18,
    question: 'How many Verses in surah “An Nisa”?',
    answer: '176',
    options: [
        '286',
        '200',
        '176',
        'None'
    ]
},
{
    numb: 19,
    question: 'Who established the foundation of Umayyad dynasty?',
    answer: 'Hazrat Ameer Muawiya RA',
    options: [
        'Hazrat Abo Sufyan RA',
        'Hazrat Ameer Muawiya RA',
        'Hazrat Abubakr RA',
        'Hazrat Khalid Bin Waleed RA'
    ]
},
{
    numb: 20,
    question: 'Who was first preacher of Islam appointed by Hazrat Muhammad (S.A.W) for the people of Madina?',
    answer: 'Hazrat Musab ibn Umair (RA)',
    options: [
        'Hazrat Ayub Ansari (RA)',
        'Hazrat Jafar Tayyar (RA)',
        'Hazrat Musab ibn Umair (RA)',
        'Hazrat Usman (RA)'
    ]
},
{
    numb: 21,
    question: 'In which Surah of the Holy Quran, the word “Khatimun Nabiyen” is mentioned?',
    answer: 'Al Ahzab',
    options: [
        'Al Tauba',
        'Al Fateha',
        'Al Falq',
        'Al Ahzab'
    ]
},
{
    numb: 22,
    question: '“Dua e Qunoot” is recited in ____ prayer?',
    answer: 'Witr',
    options: [
        'Kasoof',
        'Khasoof',
        'Witr',
        'Istikhara'
    ]
},
{
    numb: 23,
    question: 'Current Hijri Year is ____?',
    answer: '1442 AH',
    options: [
        '1441 AH',
        '1440 AH',
        '1439 AH',
        '1442 AH'
    ]
},
{
    numb: 24,
    question: 'Which Surah of Holy Quran throws light on the Halal and Haram of sacrificial animals?',
    answer: 'Surah Al-Ma’idah',
    options: [
        'Surah Al Nehal',
        'Surah Al Imran',
        'Surah Al-Ma’idah',
        'Surah Al Raad'
    ]
},
{
    numb: 25,
    question: 'How many times, the word “Allah”, is repeated in the Holy Quran?',
    answer: '2698',
    options: [
        '2695',
        '2698',
        '2694',
        'None of these'
    ]
},
{
    numb: 26,
    question: 'Who Translated Holy Quran in Persian?',
    answer: 'Shah Wali Ullah',
    options: [
        'Hazrat Majdad Alif Sani',
        'Shah Wali Ullah',
        'Sheikh Abdul Qadir Jillani',
        'None of these'
    ]
},
{
    numb: 27,
    question: 'Who was called as kidnapper of the scholars?',
    answer: 'Mahmood Ghaznavi',
    options: [
        'Mahmood Ghaznavi',
        'Abu-Jafar al-Mansoor',
        'Haroon-ur-Rasheed',
        'None of the above'
    ]
},
{
    numb: 28,
    question: 'The order of appearance of Surah Al-Kahf in the Holy Quran is?',
    answer: '18',
    options: [
        '20',
        '18',
        '16',
        '37'
    ]
},
{
    numb: 29,
    question: 'Hazrat Asma (RA), the daughter of Hazrat Abu Bakr (RA), got married to?',
    answer: 'Hazrat Zubair Ibn al-Awam(RA)',
    options: [
        'Hazrat Zubair Ibn al-Awam(RA)',
        'Hazrat Abdur Rehman (RA)',
        'Hazrat Ubaidah (RA)',
        'None of these'
    ]
},
{
    numb: 30,
    question: 'Which Prophet earned his living by making wallets?',
    answer: 'Hazrat Suilaiman (AS)',
    options: [
        'Hazrat Suilaiman (AS)',
        'Hazrat Hood (AS)',
        'Hazrat Dawood (AS)',
        'Hazrat Yahya (AS)'
    ]
}

]
