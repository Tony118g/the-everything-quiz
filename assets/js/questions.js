/*
ideas on how to implement questions and answers structure 
were taken from the following youtube tutorial:
https://www.youtube.com/watch?v=riDzcEQbX6k 
*/

// Object containing easy questions.

const easyQuestions = [
    {
        question: "What is the capital city of England?",
        answers: [
            { text: "Brighton", correct: false },
            { text: "London", correct: true },
            { text: "Birmingham", correct: false },
            { text: "Liverpool", correct: false }
        ]
    },
    {
        question: "What sport did Mike Tyson compete in?",
        answers: [
            { text: "Rugby", correct: false },
            { text: "Tennis", correct: false },
            { text: "Boxing", correct: true },
            { text: "Swimming", correct: false }
        ]
    },
    {
        question: "How many days are there in a leap year?",
        answers: [
            { text: "365", correct: false },
            { text: "364", correct: false },
            { text: "367", correct: false },
            { text: "366", correct: true }
        ]
    },
    {
        question: "How often are the olympic games held?",
        answers: [
            { text: "Every two weeks", correct: false },
            { text: "Once a year", correct: false },
            { text: "Once every 10 years", correct: false },
            { text: "Every 4 years", correct: true }
        ]
    },
    {
        question: "Who is the 2022 President of America?",
        answers: [
            { text: "Barrack Obama", correct: false },
            { text: "Johnny Depp", correct: false },
            { text: "Hillary Clinton", correct: false },
            { text: "None of the above", correct: true }
        ]
    },
    {
        question: "How many meters are in one kilometer?",
        answers: [
            { text: "1000", correct: true },
            { text: "100", correct: false },
            { text: "10000", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "What is the biggest land mammal in the world?",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false },
            { text: "Cow", correct: false },
            { text: "Elephant", correct: true }
        ]
    },
    {
        question: "Which country was Donald Trump the president of?",
        answers: [
            { text: "Austria", correct: false },
            { text: "America", correct: true },
            { text: "Australia", correct: false },
            { text: "France", correct: false }
        ]
    },
    {
        question: "How many world wars have there been?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "0", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "What is 50% of 420?",
        answers: [
            { text: "390", correct: false },
            { text: "400", correct: false },
            { text: "220", correct: false },
            { text: "210", correct: true }
        ]
    },
    {
        question: "How many hours are there in one full day?",
        answers: [
            { text: "24", correct: true },
            { text: "20", correct: false },
            { text: "12", correct: false },
            { text: "42", correct: false }
        ]
    },
    {
        question: "What is the opposite of awake?",
        answers: [
            { text: "Asleep", correct: true },
            { text: "Tired", correct: false },
            { text: "Rest", correct: false },
            { text: "Sleepy", correct: false }
        ]
    },
    {
        question: "Which food consists of grains of seeds?",
        answers: [
            { text: "Soup", correct: false },
            { text: "Rice", correct: true },
            { text: "potato", correct: false },
            { text: "Cheese", correct: false }
        ]
    },
    {
        question: "What is associated with the word 'orange'? ",
        answers: [
            { text: "A fruit", correct: false },
            { text: "A colour", correct: false },
            { text: "Both a fruit and colour", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What state is water in at room temperature?",
        answers: [
            { text: "Solid", correct: false },
            { text: "Gas", correct: false },
            { text: "Liquid", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which common tool is used to fix screws into wood? ",
        answers: [
            { text: "Screwdriver", correct: true },
            { text: "Hammer", correct: false },
            { text: "Pliers", correct: false },
            { text: "Spanner", correct: false }
        ]
    },
    {
        question: "Which animated movie is about talking toys starring 'Woody and Buzz'?",
        answers: [
            { text: "The lion king", correct: false },
            { text: "Toy Story", correct: true },
            { text: "Frozen", correct: false },
            { text: "Brother bear", correct: false }
        ]
    },
    {
        question: "What mode of transport is long and travels on tracks?",
        answers: [
            { text: "Train", correct: true },
            { text: "Bus", correct: false },
            { text: "Submarine", correct: false },
            { text: "Car", correct: false }
        ]
    },
    {
        question: "Which of these animals is indiginous to africa?",
        answers: [
            { text: "Red deer", correct: false },
            { text: "Elk", correct: false },
            { text: "Lion", correct: true },
            { text: "Bengal Tiger", correct: false }
        ]
    },
    {
        question: "What is the brand 'Tesla' famous for?",
        answers: [
            { text: "Shoes", correct: false },
            { text: "Designer bags", correct: false },
            { text: "Sport equipment", correct: false },
            { text: "Electric Cars", correct: true }
        ]
    },
    {
        question: "At which gathering do people often wear black?",
        answers: [
            { text: "Wedding", correct: false },
            { text: "Independance", correct: false },
            { text: "Funeral", correct: true },
            { text: "Birthday", correct: false }
        ]
    },
    {
        question: "What is the coldest season?",
        answers: [
            { text: "Summer", correct: false },
            { text: "Winter", correct: true },
            { text: "Spring", correct: false },
            { text: "Autumn", correct: false }
        ]
    },
    {
        question: "What is Lionel Messi famous for?",
        answers: [
            { text: "Being a musician", correct: false },
            { text: "Being a politician", correct: false },
            { text: "Being a gymnast", correct: false },
            { text: "Being a footballer", correct: true }
        ]
    },
    {
        question: "What colour do you get if you mix red and yellow?",
        answers: [
            { text: "Orange", correct: true },
            { text: "Green", correct: false },
            { text: "Blue", correct: false },
            { text: "Peach", correct: false }
        ]
    },
    {
        question: "What are the primary colours?",
        answers: [
            { text: "Orange, yellow and blue", correct: false },
            { text: "Red, yellow and blue", correct: true },
            { text: "Blue, green and yellow", correct: false },
            { text: "Red, yellow and orange", correct: false }
        ]
    },
    {
        question: "How many cm are there in one foot?",
        answers: [
            { text: "10m", correct: false },
            { text: "20cm", correct: false },
            { text: "60cm", correct: false },
            { text: "30cm", correct: true }
        ]
    },
    {
        question: "How many sides does a square have?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is 4 times 8?",
        answers: [
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "40", correct: false },
            { text: "36", correct: false }
        ]
    },
    {
        question: "What is another word for rubbish?",
        answers: [
            { text: "Garbage", correct: true },
            { text: "Compost", correct: false },
            { text: "Shavings", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the main engridient in bread?",
        answers: [
            { text: "Water", correct: false },
            { text: "Butter", correct: false },
            { text: "Flour", correct: true },
            { text: "Sugar", correct: false }
        ]
    },
    
];

// Object containing medium questions.

const mediumQuestions = [
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "medium question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
];

// Object containing hard questions.

const hardQuestions = [
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
    {
        question: "hard question",
        answers: [
            { text: "answer 1", correct: false },
            { text: "answer 2", correct: true },
            { text: "answer 3", correct: false },
            { text: "answer 4", correct: false }
        ]
    },
];