// Array of questions with options and correct answers
const questions = [
{
    numb: 1,
    question: 'If you have “caries” then which doctor you should consult?',
    answer: 'Dentist',
    options: [
        'Dermatologist',
        'Orthopaedist',
        'Dentist',
        'Neurologist'
    ]
},
{
    numb: 2,
    question: 'In Eye donation, which part of the eye is used?',
    answer: 'Cornea',
    options: [
        'Retina',
        'Iris',
        'Cornea',
        'Optic nerve'
    ]
},
{
    numb: 3,
    question: 'How many moons does Neptune have?',
    answer: '13',
    options: [
        '63',
        '12',
        '19',
        '13'
    ]
},
{
    numb: 4,
    question: 'What is the rarest blood type in humans?',
    answer: 'AB-',
    options: [
        'O-',
        'O+',
        'AB+',
        'AB-'
    ]
},
{
    numb: 5,
    question: 'The lowest region of the earth’s atmosphere, between the earth and stratosphere, is called?',
    answer: 'Troposphere',
    options: [
        'Ionosphere',
        'Troposphere',
        'Stratosphere',
        'Mesosphere'
    ]
},
{
    numb: 6,
    question: 'Which is the hottest planet in our Solar system?',
    answer: 'Venus',
    options: [
        'Venus',
        'Neptune',
        'Mars',
        'None of these'
    ]
},
{
    numb: 7,
    question: 'The heating element of an electric heater is made up of ____?',
    answer: 'Nichrome',
    options: [
        'Tungsten',
        'Graphite',
        'Chromium',
        'Nichrome'
    ]
},
{
    numb: 8,
    question: 'In the BTU system, one BTU is equal to ____?',
    answer: '1055 Joule',
    options: [
        '2055 Joule',
        '1155 Joule',
        '2155 Joule',
        '1055 Joule'
    ]
},
{
    numb: 9,
    question: 'For water purification, we use?',
    answer: 'Chlorine',
    options: [
        'Chlorine',
        'Bromine',
        'Plants',
        'Young man'
    ]
},
{
    numb: 10,
    question: 'Which of the following regulates the metabolism of sugar?',
    answer: 'Insulin',
    options: [
        'Thyroid',
        'Insulin',
        'Glucose',
        'None of These'
    ]
},
{
    numb: 11,
    question: 'What is a mixture of Potassium Nitrate, powdered charcoal, and Sulphur called?',
    answer: 'Gun Powder',
    options: [
        'Paint',
        'Glass',
        'Gun Powder',
        'Cement'
    ]
},
{
    numb: 12,
    question: 'Who created the periodic table?',
    answer: 'Mendeleev',
    options: [
        'Faraday',
        'Lavoisier',
        'Arrhenius',
        'Mendeleev'
    ]
},
{
    numb: 13,
    question: 'The term PVC used in the plastic industry stands for ____?',
    answer: 'Polyvinyl chloride',
    options: [
        'Phosphavinyl chloride',
        'Phosphor vanadium chloride',
        'Polyvinyl chloride',
        'Polyvinyl carbobate'
    ]
},
{
    numb: 14,
    question: 'Which drugs block the sensory nerves and prevent the patient from feeling pain?',
    answer: 'Anaesthetics',
    options: [
        'Analgesics',
        'Antibiotics',
        'Antihistamines',
        'Anaesthetics'
    ]
},
{
    numb: 15,
    question: 'Who invented Logarithm Tables?',
    answer: 'John Napier',
    options: [
        'John Napier',
        'John Doe',
        'John Harrison',
        'John Douglas'
    ]
},
{
    numb: 16,
    question: 'In which part of the Plant does photosynthesis take place?',
    answer: 'Leaves',
    options: [
        'Flowers',
        'Roots',
        'Stem',
        'Leaves'
    ]
},
{
    numb: 17,
    question: 'Which of the following is responsible for the largest amount of oxygen on earth?',
    answer: 'Algae',
    options: [
        'Peat bogs',
        'Algae',
        'Trees',
        'None of these'
    ]
},
{
    numb: 18,
    question: 'The luster of diamond is due to ____?',
    answer: 'Total internal reflection',
    options: [
        'Reflection',
        'Total internal reflection',
        'Refraction',
        'None of these'
    ]
},
{
    numb: 19,
    question: 'The type of glass used in making lenses and prisms is ____?',
    answer: 'Flintglass',
    options: [
        'Pyrex glass',
        'Jena glass',
        'Flintglass',
        'Soft glass'
    ]
},
{
    numb: 20,
    question: 'EEG records the activity of ____?',
    answer: 'Brain',
    options: [
        'Heart',
        'Lungs',
        'Brain',
        'Muscles'
    ]
},
{
    numb: 21,
    question: 'Earthquakes occur most frequently at ____?',
    answer: 'Plate boundaries',
    options: [
        'Plate boundaries',
        'Plate surface',
        'Ocean beds',
        'All of the above'
    ]
},
{
    numb: 22,
    question: 'What is anthracite?',
    answer: 'Hard coal',
    options: [
        'Carbon',
        'Hard coal',
        'Ammonia',
        'None of these'
    ]
},
{
    numb: 23,
    question: 'Which are the only two elements on the periodic table that are liquid at room temperature?',
    answer: 'Mercury and Bromine',
    options: [
        'Mercury and Bromine',
        'Carbon and helium',
        'Nitrogen and Hydrogen',
        'Oxygen and Neon'
    ]
},
{
    numb: 24,
    question: 'What is the body’s natural or acquired ability to resist certain diseases?',
    answer: 'Immunity',
    options: [
        'Immunity',
        'Endocrine',
        'Exocrine',
        'All of above'
    ]
},
{
    numb: 25,
    question: 'Dead red blood corpuscles are stored in ____?',
    answer: 'Spleen',
    options: [
        'Liver',
        'Spleen',
        'Kidney',
        'Heart'
    ]
},
{
    numb: 26,
    question: 'Granite is a____?',
    answer: 'Igneous rock',
    options: [
        'Metamorphic rock',
        'Igneous rock',
        'Sedimentary rock',
        'None of these'
    ]
},
{
    numb: 27,
    question: 'Where is the uvula located in the human body?',
    answer: 'Throat',
    options: [
        'Throat',
        'Stomach',
        'Scrotum',
        'None'
    ]
},
{
    numb: 28,
    question: 'Which animal has no vocal cords?',
    answer: 'Giraffe',
    options: [
        'Lion',
        'Zebra',
        'Dolphin',
        'Giraffe'
    ]
},
{
    numb: 29,
    question: 'Being Myopic means you have difficulty seeing ____?',
    answer: 'Distant objects clearly',
    options: [
        'Distant objects clearly',
        'Close objects clearly',
        'Both A and B',
        'Distant and close objects look unclear'
    ]
},
{
    numb: 30,
    question: 'The hormone that increases the rate of heartbeat and blood pressure after shock in a person is____?',
    answer: 'Adrenalin',
    options: [
        'Adrenalin',
        'Gastrin',
        'Thyroxin',
        'Pancreatic'
    ]
}

]
