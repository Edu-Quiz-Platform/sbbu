// Array of questions with options and correct answers
const questions = [
    {
      "numb": 1,
      "question": "When was Sui Northern Gas Pipelines Limited (SNGPL) converted into a public limited company?",
      "answer": "july 1962",
      "options": [
        "june 1961",
        "july 1962",
        "jan 1963",
        "jan 1964"
      ]
    },
    {
      "numb": 2,
      "question": "When did Mustafa Kemal Atatürk transform the Hagia Sophia building into a museum?",
      "answer": "1935",
      "options": [
        "1940",
        "1935",
        "1949",
        "1901"
      ]
    },
    {
      "numb": 3,
      "question": "When is UN Day celebrated every year?",
      "answer": "24 October",
      "options": [
        "21 October",
        "22 October",
        "23 October",
        "24 October"
      ]
    },
    {
      "numb": 4,
      "question": "When was the Utility Stores Corporation of Pakistan (Pvt.) Limited established?",
      "answer": "1971",
      "options": [
        "1971",
        "1972",
        "1973",
        "1974"
      ]
    },
    {
      "numb": 5,
      "question": "When was January 1st celebrated as New Year's Day for the first time?",
      "answer": "45 B.C",
      "options": [
        "45 B.C",
        "50 B.C",
        "40 B.C",
        "35 B.C"
      ]
    },
    {
      "numb": 6,
      "question": "When was SAARC founded?",
      "answer": "1985",
      "options": [
        "1982",
        "1984",
        "1985",
        "1983"
      ]
    },
    {
      "numb": 7,
      "question": "When was the second OIC Summit Conference held?",
      "answer": "1974",
      "options": [
        "1974",
        "1977",
        "1979",
        "None above"
      ]
    },
    {
      "numb": 8,
      "question": "When were the border disputes settled between the US and Mexico?",
      "answer": "1970",
      "options": [
        "1960",
        "1970",
        "1975",
        "1980"
      ]
    },
    {
      "numb": 9,
      "question": "When was the first International Human Solidarity Day observed by the United Nations?",
      "answer": "December 2005",
      "options": [
        "December 2004",
        "December 2005",
        "December 2006",
        "None of these"
      ]
    },
    {
      "numb": 10,
      "question": "When was the first petrol car developed?",
      "answer": "1885-1886",
      "options": [
        "1885-1886",
        "1887-1888",
        "1888-1889",
        "1889-1890"
      ]
    },
    {
      "numb": 11,
      "question": "Where was the first Hockey World Cup played in 1971?",
      "answer": "Barcelona",
      "options": [
        "Barcelona",
        "Madrid",
        "Lahore",
        "Sydney"
      ]
    },
    {
      "numb": 12,
      "question": "Where is the headquarters of the United Nations Population Fund (UNFPA) located?",
      "answer": "New York",
      "options": [
        "Geneva",
        "Paris",
        "New York",
        "Washington D.C"
      ]
    },
    {
      "numb":13,
      "question": "Who was the first Muslim leader selected as the president of the Indian National Congress in 1887?",
      "answer": "Badruddin Tayabi",
      "options": [
        "Badruddin Tayabi",
        "Ayub Khan",
        "Minhal Tayab",
        "Mirza Hasan"
      ]
    },
    {
      "numb": 14,
      "question": "Which American state is called 'The Mother of Presidents'?",
      "answer": "Virginia",
      "options": [
        "Ohio",
        "New York",
        "Florida",
        "Virginia"
      ]
    },
    {
      "numb": 15,
      "question": "Which army officer was the first recipient of 'Nishan-e-Haider'?",
      "answer": "Captain Sarwar Shaheed",
      "options": [
        "Major Aziz Bhatti Shaheed",
        "Major Muhammad Akram Shaheed",
        "Captain Sarwar Shaheed",
        "Major Shabir Sharif Shaheed"
      ]
    },
    {
      "numb": 16,
      "question": "Which city in Switzerland was the headquarters of the League of Nations?",
      "answer": "Geneva",
      "options": [
        "Brussels",
        "Geneva",
        "Canberra",
        "None of these"
      ]
    },
    {
      "numb": 17,
      "question": "Which city is also called 'The City of 1,000 Minarets'?",
      "answer": "Cairo",
      "options": [
        "Istanbul",
        "Cairo",
        "Makkah",
        "Islamabad"
      ]
    },
    {
      "numb": 18,
      "question": "Which city is called 'The city of silent thoroughfares'?",
      "answer": "Venice",
      "options": [
        "Amsterdam",
        "Venice",
        "Paris",
        "Stockholm"
      ]
    },
    {
      "numb": 19,
      "question": "Which company introduced the first handheld digital camera?",
      "answer": "Kodak",
      "options": [
        "Nikon",
        "Fuji",
        "Kodak",
        "Canon"
      ]
    },
    {
      "numb": 20,
      "question": "Which country is called 'Switzerland of Africa'?",
      "answer": "Swaziland",
      "options": [
        "Egypt",
        "Somalia",
        "Swaziland",
        "Algeria"
      ]
    },
    {
      "numb": 21,
      "question": "Which country built the world’s tallest timber tower named Mjos Tower?",
      "answer": "Norway",
      "options": [
        "Iran",
        "Japan",
        "France",
        "Norway"
      ]
    },
    {
      "numb": 22,
      "question": "Which country is called 'Land of Maple Leaf'?",
      "answer": "Canada",
      "options": [
        "Africa",
        "China",
        "Canada",
        "America"
      ]
    },
    {
      "numb": 23,
      "question": "Which country celebrated Valentine’s Day for the first time on 14 Feb. 2019?",
      "answer": "Saudi Arabia",
      "options": [
        "Yemen",
        "Qatar",
        "Saudi Arabia",
        "Kuwait"
      ]
    },
    {
      "numb": 24,
      "question": "Which country was known as Malagasy from 1958 to 1975?",
      "answer": "Madagascar",
      "options": [
        "Malaysia 1985 to 1990",
        "Bhutan 2000 to 2007",
        "Peru 1999 to 2001",
        "Madagascar 1958 to 1975"
      ]
    },
    {
      "numb": 25,
      "question": "Which country has no river?",
      "answer": "Saudi Arabia",
      "options": [
        "Qatar",
        "UAE",
        "Jordan",
        "Saudi Arabia"
      ]
    },
    {
      "numb": 26,
      "question": "Which country has the highest number of official languages?",
      "answer": "Zimbabwe",
      "options": [
        "Japan",
        "South Africa",
        "Zimbabwe",
        "Spain"
      ]
    },
    {
      "numb": 27,
      "question": "Which country had the most fatalities in World War II?",
      "answer": "Soviet Union",
      "options": [
        "Soviet Union",
        "UK",
        "USA",
        "Yugoslavia"
      ]
    },
    {
      "numb": 28,
      "question": "Which country has three capitals?",
      "answer": "South Africa",
      "options": [
        "South Africa",
        "Sri Lanka",
        "Yemen",
        "None of these"
      ]
    },
    {
      "numb": 29,
      "question": "Which country in South Asia has the highest literacy rate?",
      "answer": "Maldives",
      "options": [
        "Pakistan",
        "India",
        "Maldives",
        "Nepal"
      ]
    },
    {
      "numb": 30,
      "question": "Which country is called 'Great Britain of the Pacific'?",
      "answer": "Japan",
      "options": [
        "Taiwan",
        "New Zealand",
        "Japan",
        "Philippines"
      ]
    }
]
