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
        question: "How often are the Olympic games held?",
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
        question: "Which of these animals is indigenous to Africa?",
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
            { text: "Independence", correct: false },
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
        question: "What color do you get if you mix red and yellow?",
        answers: [
            { text: "Orange", correct: true },
            { text: "Green", correct: false },
            { text: "Blue", correct: false },
            { text: "Peach", correct: false }
        ]
    },
    {
        question: "What are the primary colors?",
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
        question: "What is the main ingredient in bread?",
        answers: [
            { text: "Water", correct: false },
            { text: "Butter", correct: false },
            { text: "Flour", correct: true },
            { text: "Sugar", correct: false }
        ]
    },
    
];

// Object containing medium questions.

const mediumQuestions =[
    {
        question: "When did Queen Elizebeth the second pass away?",
        answers: [
            { text: "February 2019", correct: false },
            { text: "September 2022", correct: true },
            { text: "August 2022", correct: false },
            { text: "September 2021", correct: false }
        ]
    },
    {
        question: "Where were the 2012 Olympic games held?",
        answers: [
            { text: "Tokyo", correct: false },
            { text: "Beijing", correct: false },
            { text: "London", correct: true },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "What is the name of the actor who acts as 'Mr. Bean'?",
        answers: [
            { text: "Hugh Jackman", correct: false },
            { text: "Trevor Noah", correct: false },
            { text: "Morgan Freeman", correct: false },
            { text: "Rowan Atkinson", correct: true }
        ]
    },
    {
        question: "How many states are there in the USA?",
        answers: [
            { text: "30", correct: false },
            { text: "60", correct: false },
            { text: "50", correct: true },
            { text: "40", correct: false }
        ]
    },
    {
        question: "What is the capital city of India?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Bangalore", correct: false },
            { text: "Pune", correct: false }
        ]
    },
    {
        question: "On a dartboard, what number is at the very top?",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "20", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Which of these is both a country and a continent?",
        answers: [
            { text: "India", correct: false },
            { text: "Madagascar", correct: false },
            { text: "Japan", correct: false },
            { text: "Australia", correct: true }
        ]
    },
    {
        question: "Which city is the tv show 'Friends' set in?",
        answers: [
            { text: "New York City", correct: true },
            { text: "Chicago", correct: false },
            { text: "Boston", correct: false },
            { text: "Seattle", correct: false }
        ]
    },
    {
        question: "The disease known as scurvy is due to a lack of what?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin b", correct: false },
            { text: "Vitamin c", correct: true },
            { text: "Vitamin d", correct: false }
        ]
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        answers: [
            { text: "Anne Frank", correct: false },
            { text: "JK Rowling", correct: true },
            { text: "John Green", correct: false },
            { text: "Stephenie Meyer", correct: false }
        ]
    },
    {
        question: "How many time zones are there in Africa?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true }
        ]
    },
    {
        question: "What units are used to measure sound?",
        answers: [
            { text: "Hertz", correct: false },
            { text: "Watts", correct: false },
            { text: "Decibels", correct: true },
            { text: "Yards", correct: false }
        ]
    },
    {
        question: "Who acted as Jack in the movie 'Titanic'?",
        answers: [
            { text: "Brad Pitt", correct: false },
            { text: "Leonardo Dicaprio", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Matt Damon", correct: false }
        ]
    },
    {
        question: "What is the biggest ocean on earth?",
        answers: [
            { text: "Pacific", correct: true },
            { text: "Atlantic", correct: false },
            { text: "Indian", correct: false },
            { text: "Arctic", correct: false }
        ]
    },
    {
        question: "Who sang 'Radio Ga Ga'?",
        answers: [
            { text: "Michael Jackson", correct: false },
            { text: "Lady Gaga", correct: false },
            { text: "Elton John", correct: false },
            { text: "Freddie Mercury", correct: true }
        ]
    },
    {
        question: "Who is famous for inventing the light bulb?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Benjamin Franklin", correct: false },
            { text: "Alexander Graham Bell", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false },
            { text: "Donatello", correct: false },
            { text: "Leonardo da Vinci", correct: true }
        ]
    },
    {
        question: "Which actor acted as Rambo?",
        answers: [
            { text: "Tom Cruise", correct: false },
            { text: "Arnold Schwarzenegger", correct: false },
            { text: "Keanu Reeves", correct: false },
            { text: "Sylvester Stallone", correct: true }
        ]
    },
    {
        question: "Where is Stonehenge?",
        answers: [
            { text: "America ", correct: false },
            { text: "India", correct: false },
            { text: "England", correct: true },
            { text: "France", correct: false }
        ]
    },
    {
        question: "What is the human population of the world in 2022?",
        answers: [
            { text: "7 billion", correct: false },
            { text: "8 billion", correct: false },
            { text: "7.45 billion", correct: false },
            { text: "7.75 billion", correct: true }
        ]
    },
    {
        question: "What currency is used in China?",
        answers: [
            { text: "Renminbi", correct: true },
            { text: "Chinese dollar", correct: false },
            { text: "Chinese Shillings", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Who was the British prime minister in 2021?",
        answers: [
            { text: "Borris Johnson", correct: true },
            { text: "Theresa May", correct: false },
            { text: "Tony Blair", correct: false },
            { text: "Gordon Brown", correct: false }
        ]
    },
    {
        question: "Who is the 2022 president of Zimbabwe?",
        answers: [
            { text: "Robert Mugabe", correct: false },
            { text: "Morgan Tsvangirai", correct: false },
            { text: "Jacob Zuma", correct: false },
            { text: "Emmerson Mnangagwa", correct: true }
        ]
    },
    {
        question: "Which year did the titanic sink?",
        answers: [
            { text: "1920", correct: false },
            { text: "1912", correct: true },
            { text: "1918", correct: false },
            { text: "1915", correct: false }
        ]
    },
    {
        question: "What sport did Harry Potter play?",
        answers: [
            { text: "Squamblich", correct: false },
            { text: "Nyorwagh", correct: false },
            { text: "Quidditch", correct: true },
            { text: "Sniditch", correct: false }
        ]
    },
    {
        question: "What is the name of the world's largest coral reef?",
        answers: [
            { text: "The North Pacific Reef", correct: false },
            { text: "The Great Barrier Reef", correct: true },
            { text: "The Great Border Reef", correct: false },
            { text: "The Great Boundary Reef", correct: false }
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Civil processing unit ", correct: false },
            { text: "Cascading proofing unit", correct: false },
            { text: "Central partial unit", correct: false },
            { text: "Central processing unit", correct: true }
        ]
    },
    {
        question: "What is water made up of?",
        answers: [
            { text: "Hydrogen and oxygen ", correct: true },
            { text: "Helium and hydrogen", correct: false },
            { text: "Helium and oxygen", correct: false },
            { text: "Oxygen and sodium", correct: false }
        ]
    },
    {
        question: "What is the major staple food in china?",
        answers: [
            { text: "Beans", correct: false },
            { text: "Noodles", correct: false },
            { text: "Fish", correct: false },
            { text: "Rice", correct: true }
        ]
    },
    {
        question: "Who is the 2022 CEO of apple?",
        answers: [
            { text: "Steve Jobs", correct: false },
            { text: "Tim Cook", correct: true },
            { text: "Mark Zuckerberg", correct: false },
            { text: "Elon Musk", correct: false }
        ]
    },
    {
        question: "How old is the shoe brand 'Nike' in 2022?",
        answers: [
            { text: "60 years", correct: false },
            { text: "70 years", correct: false },
            { text: "54 years", correct: false },
            { text: "58 years", correct: true }
        ]
    },
];

// Object containing hard questions.

const hardQuestions = [
    {
        question: "Loxodonta is the scientific name of which animal?",
        answers: [
            { text: "Rabbit", correct: false },
            { text: "Snake", correct: false },
            { text: "Elephant", correct: true },
            { text: "Kangaroo", correct: false }
        ]
    },
    {
        question: "Acrophobia is the fear of what?",
        answers: [
            { text: "Heights", correct: true },
            { text: "Dogs", correct: false },
            { text: "Driving", correct: false },
            { text: "Water", correct: false }
        ]
    },
    {
        question: "How many teeth does a typical human adult have?",
        answers: [
            { text: "26", correct: false },
            { text: "28", correct: false },
            { text: "30", correct: false },
            { text: "32", correct: true }
        ]
    },
    {
        question: "What is the average life expectancy in the Philippines?",
        answers: [
            { text: "68 years", correct: false },
            { text: "70 years", correct: false },
            { text: "71 years", correct: true },
            { text: "73 years", correct: false }
        ]
    },
    {
        question: "What is the world's largest reptile?",
        answers: [
            { text: "Snake", correct: false },
            { text: "Saltwater crocodile", correct: true },
            { text: "Alligator", correct: false },
            { text: "Sea turtle", correct: false }
        ]
    },
    {
        question: "Who won the 1987 football world cup championship?",
        answers: [
            { text: "Spain", correct: false },
            { text: "Yugoslavia", correct: true },
            { text: "France", correct: false },
            { text: "Britain", correct: false }
        ]
    },
    {
        question: "Entomology is the study of what?",
        answers: [
            { text: "Mammals", correct: false },
            { text: "Flowers", correct: false },
            { text: "Fish", correct: false },
            { text: "Insects", correct: true }
        ]
    },
    {
        question: "What is the only landlocked country in Southeast Asia?",
        answers: [
            { text: "Cambodia", correct: false },
            { text: "Myanmar", correct: false },
            { text: "Laos", correct: true },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the closest living relative of an elephant?",
        answers: [
            { text: "Rhinoceros", correct: false },
            { text: "Hippopotamus", correct: false },
            { text: "Elephant shrew", correct: false },
            { text: "Rock hyrax", correct: true }
        ]
    },
    {
        question: "What is the gestation period of a black rhinoceros?",
        answers: [
            { text: "9 - 10 months", correct: false },
            { text: "11 - 12 months", correct: false },
            { text: "15 - 16 months", correct: true },
            { text: "17 - 18 months", correct: false }
        ]
    },
    {
        question: "When was Lamborghini founded?",
        answers: [
            { text: "1963", correct: true },
            { text: "1967", correct: false },
            { text: "1973", correct: false },
            { text: "1977", correct: false }
        ]
    },
    {
        question: "What is a group of crows called?",
        answers: [
            { text: "A flock", correct: false },
            { text: "A gathering", correct: false },
            { text: "An uprise", correct: false },
            { text: "A murder", correct: true }
        ]
    },
    {
        question: "When did Mozambique gain independence?",
        answers: [
            { text: "1975", correct: true },
            { text: "1978", correct: false },
            { text: "1980", correct: false },
            { text: "1982", correct: false }
        ]
    },
    {
        question: "What is the star sign of people born on the 29th of February?",
        answers: [
            { text: "Capricorn", correct: false },
            { text: "Pisces", correct: true },
            { text: "Leo", correct: false },
            { text: "Cancer", correct: false }
        ]
    },
    {
        question: "What colors are on the Nigerian flag?",
        answers: [
            { text: "Red and green", correct: false },
            { text: "Red and white", correct: false },
            { text: "Green and white", correct: true },
            { text: "Green and blue", correct: false }
        ]
    },
    {
        question: "Who was the director of the godfather",
        answers: [
            { text: "Steven Spielberg", correct: false },
            { text: "Francis Ford Coppola", correct: true },
            { text: "Christopher Nolan", correct: false },
            { text: "Tim Burton", correct: false }
        ]
    },
    {
        question: "What is Lil Wayne's real name",
        answers: [
            { text: "Chris Wayne", correct: false },
            { text: "Dwayne Michael Carter, Jr.", correct: true },
            { text: "Dwayne Michael Carter the third", correct: false },
            { text: "Chris Wayne, Jr", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Green Mile?",
        answers: [
            { text: "Ian Fleming", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Jonathan Swift", correct: false },
            { text: "Stephen King", correct: true }
        ]
    },
    {
        question: "Who created the Pink Panther?",
        answers: [
            { text: "Roy O.Disney", correct: false },
            { text: "Walt Disney", correct: false },
            { text: "Blake Edwards", correct: true },
            { text: "Joanna Edwards", correct: false }
        ]
    },
    {
        question: "What is the national sport of India?",
        answers: [
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
            { text: "Tennis", correct: false },
            { text: "Football", correct: false }
        ]
    },
    {
        question: "How many players are in a polocrosse team?",
        answers: [
            { text: "8", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Where were the 1984 Olympic games held?",
        answers: [
            { text: "Los Angeles", correct: true },
            { text: "Beijing", correct: false },
            { text: "Rome", correct: false },
            { text: "London", correct: false }
        ]
    },
    {
        question: "How long did the oldest recorded person live?",
        answers: [
            { text: "105 years", correct: false },
            { text: "112 years", correct: false },
            { text: "118 years", correct: false },
            { text: "122 years", correct: true }
        ]
    },
    {
        question: "What is the square root of 196?",
        answers: [
            { text: "12", correct: false },
            { text: "15", correct: false },
            { text: "14", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Uranus", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the biggest living creature in the world?",
        answers: [
            { text: "African elephant", correct: false },
            { text: "Sperm whale", correct: false },
            { text: "Antarctic blue whale", correct: true },
            { text: "Indian elephant", correct: false }
        ]
    },
    {
        question: "What is the 2022 population of Sweden?",
        answers: [
            { text: "Just under 15 million", correct: false },
            { text: "Just over 15 million", correct: false },
            { text: "Just under 10 million", correct: false },
            { text: "Just over 10 million", correct: true }
        ]
    },
    {
        question: "How fast can an ostrich run?",
        answers: [
            { text: "40 km/h", correct: false },
            { text: "50 km/h", correct: false },
            { text: "60 km/h", correct: false },
            { text: "70 km/h", correct: true }
        ]
    },
    {
        question: "Roughly how tall is the Burj Khalifa?",
        answers: [
            { text: "830m", correct: true },
            { text: "850m", correct: false },
            { text: "880m", correct: false },
            { text: "900m", correct: false }
        ]
    },
    {
        question: "What is a cup anemometer used for?",
        answers: [
            { text: "Measuring humidity", correct: false },
            { text: "Measuring temperature", correct: false },
            { text: "Indicating wind direction", correct: false },
            { text: "Measuring wind speed", correct: true }
        ]
    },
];