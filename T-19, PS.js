// Array of questions with options and correct answers
const questions = [
  {
    numb: 1,
    question: "The headquarters of Air Force is located in _________ ?",
    answer: "Islamabad",
    options: [
      "Islamabad",
      "Rawalpindi",
      "Peshawar",
      "Karachi"
    ]
  },
  {
    numb: 2,
    question: "The Range of Ghari-1 is ________ ?",
    answer: "1200-1500km",
    options: [
      "1200-1500km",
      "1200-1300km",
      "1500-2000km",
      "1500-1800km"
    ]
  },
  {
    numb: 3,
    question: "Tell the name of Chief of Staff of Pak Army who died in uniform ?",
    answer: "Both A & B",
    options: [
      "General Mohammad Zia-ul-Haq",
      "General Asif Nawaz",
      "Both A & B",
      "N.O.T"
    ]
  },
  {
    numb: 4,
    question: "In which of the following city National Defence University is located ?",
    answer: "Islamabad",
    options: [
      "Rawalpindi",
      "Quetta",
      "Islamabad",
      "Multan"
    ]
  },
  {
    numb: 5,
    question: "Lords of the Khyber is written by _________ ?",
    answer: "Andre Singer",
    options: [
      "Andre Joseph",
      "Kipling",
      "Yousuf Khan",
      "Andre Singer"
    ]
  },
  {
    numb: 6,
    question: "Chowk Yadgar Peshawar commemorates the heroes of the _________ ?",
    answer: "1965 Indo-Pakistan War",
    options: [
      "Kashmir War",
      "1965 Indo-Pakistan War",
      "1971 War",
      "None of them"
    ]
  },
  {
    numb: 7,
    question: "How many divisions are there in Sindh ?",
    answer: "4",
    options: [
      "9",
      "4",
      "7",
      "3"
    ]
  },
  {
    numb: 8,
    question: "Clifton Beach is located in _________ ?",
    answer: "Karachi",
    options: [
      "Hyderabad",
      "Karachi",
      "Jamshoro",
      "Kotri"
    ]
  },
  {
    numb: 9,
    question: "How many Barragas are there in Sindh ?",
    answer: "3",
    options: [
      "3",
      "4",
      "5",
      "7"
    ]
  },
  {
    numb: 10,
    question: "Largest city of Pakistan is __________ ?",
    answer: "Karachi",
    options: [
      "Karachi",
      "Sukkar",
      "Hyderabad",
      "Lahore"
    ]
  },
  {
    numb: 11,
    question: "Pakistan Air Force Day is celebrated on ___________ ?",
    answer: "7th September",
    options: [
      "21st February",
      "8th March",
      "21st March",
      "7th September"
    ]
  },
  {
    numb: 12,
    question: "K-2 is present in which mountains range ?",
    answer: "Karakoram",
    options: [
      "Pamir",
      "Hindu kush",
      "Karakoram",
      "Himalayas"
    ]
  },
  {
    numb: 13,
    question: "Baltura Glacier is located in _____________ ?",
    answer: "Gilgit Baltistan",
    options: [
      "Punjab",
      "Gilgit Baltistan",
      "Sindh",
      "KPK"
    ]
  },
  {
    numb: 14,
    question: "The Hindu kush range starts at the ?",
    answer: "Pamir Platean",
    options: [
      "China Border",
      "Pamir Platean",
      "Afghan border",
      "Karakoram"
    ]
  },
  {
    numb: 15,
    question: "Which is the Highest peak of Himalayas range in Pakistan ?",
    answer: "Nanga Parbat",
    options: [
      "Nanga Parbat",
      "K-2",
      "Tirichmir",
      "Sakasar"
    ]
  },
  {
    numb: 16,
    question: "What is the Height of Broad Peak?",
    answer: "8051 meters",
    options: [
      "8126 meters",
      "8092 meters",
      "8075 meters",
      "8051 meters"
    ]
  },
  {
    numb: 17,
    question: "The Naval Headquarters is located in _________ ?",
    answer: "Islamabad",
    options: [
      "Rawalpindi",
      "Islamabad",
      "Lahore",
      "None of them"
    ]
  },
  {
    numb: 18,
    question: "In FATA the tribal laws and judiciary function is looked by the _________?",
    answer: "All of them",
    options: [
      "Jirgha",
      "Federal Govt",
      "Tribes Council",
      "All of them"
    ]
  },
  {
    numb: 19,
    question: "Kotli is famous city of ________ ?",
    answer: "AJ&K",
    options: [
      "AJ&K",
      "KPK",
      "FATA",
      "ICT"
    ]
  },
  {
    numb: 20,
    question: "Polo game originated from __________ ?",
    answer: "Iran",
    options: [
      "Gilgit Baltistan",
      "Iran",
      "USA",
      "Subcontinent"
    ]
  },
  {
    numb: 21,
    question: "The Indian Councils Act (Minto-Morley Reforms) was enacted into law in ________?",
    answer: "1909",
    options: [
      "1909",
      "1910",
      "1911",
      "1912"
    ]
  },
  {
    numb: 22,
    question: "Who is the Current Chief of Army Staff (COAS), Pakistan?",
    answer: "Gen Qamar Javed Bajwa",
    options: [
      "Gen Raheel Sharif",
      "Gen Ashfaq Parvaz Kayani",
      "Gen Qamar Javed Bajwa",
      "Gen Zubair Hayat"
    ]
  },
  {
    numb: 23,
    question: "Name the Pakistan’s surface-to-surface ballistic missile, which is capable of delivering multiple warheads using Multiple Independent Re-entry Vehicle (MIRV) technology?",
    answer: "Ababeel",
    options: [
      "Shaheen-II",
      "Ababeel",
      "Nasr",
      "Ghauri"
    ]
  },
  {
    numb: 24,
    question: "Where did Benazir Bhutto die?",
    answer: "Rawalpindi",
    options: [
      "Karachi",
      "Lahore",
      "Rawalpindi",
      "London"
    ]
  },
  {
    numb: 25,
    question: "Who was Mohammad Ali Bogra?",
    answer: "Prime Minister",
    options: [
      "Prime Minister",
      "Foreign Minister",
      "Law Minister",
      "Parliament Minister"
    ]
  },
  {
    numb: 26,
    question: "When Ayub Khan enforced new constitution in Pakistan?",
    answer: "8th June 1962",
    options: [
      "9th January 1962",
      "6th February 1962",
      "13th March 1962",
      "8th June 1962"
    ]
  },
  {
    numb: 27,
    question: "In constitution 1973 what number of seats in Senate was set?",
    answer: "100 Seats",
    options: [
      "120 Seats",
      "115 Seats",
      "110 Seats",
      "100 Seats"
    ]
  },
  {
    numb: 28,
    question: "Pakistan’s first coin was issued on ___?",
    answer: "3rd January 1948",
    options: [
      "3rd June 1948",
      "6th June 1949",
      "3rd January 1948",
      "none of these"
    ]
  },
  {
    numb: 29,
    question: "Indian Independence Act’ was enforced on ?",
    answer: "14th August 1947",
    options: [
      "13th August 1947",
      "14th August 1947",
      "15th August 1947",
      "16th August 1947"
    ]
  },
  {
    numb: 30,
    question: "In which year Ali Garh Trusteeship bill was passed?",
    answer: "1889",
    options: [
      "1886",
      "1887",
      "1888",
      "1889"
    ]
  },
];
