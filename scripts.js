document.addEventListener("DOMContentLoaded", function () {
    const subject = 'Maths';
    const year = '7';
    updateContent(subject, year);
});

function updateSubject() {
    const subject = document.getElementById('subject-select').value;
    const year = document.getElementById('year-select').value;
    updateContent(subject, year);
}

function updateYear() {
    const subject = document.getElementById('subject-select').value;
    const year = document.getElementById('year-select').value;
    updateContent(subject, year);
}

function updateContent(subject, year) {
    document.getElementById('subject-title').innerText = `${subject} - Year ${year}`;
    const content = document.getElementById('content');
    content.innerHTML = `<p>Welcome to the ${subject} Year ${year} page. Here you will find learning materials, interactive questions, videos, and explanations to help you understand the syllabus better.</p>`;
    document.getElementById('questions').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
}

function toggleQuestionsVisibility() {
    const questionsDiv = document.getElementById('questions');
    if (questionsDiv.style.display === 'none') {
        questionsDiv.style.display = 'block';
        loadQuestions();
    } else {
        questionsDiv.style.display = 'none';
    }
}

function loadQuestions() {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';  // Clear previous content

    const subject = document.getElementById('subject-select').value;
    const year = document.getElementById('year-select').value;

    const questionsDatabase = {
        "Maths": {
            "7": [
                { question: "What is 5 + 7?", options: ["10", "12", "11", "13"], answer: "12", explanation: "5 + 7 equals 12." },
                { question: "What is 9 - 4?", options: ["5", "6", "4", "7"], answer: "5", explanation: "9 - 4 equals 5." },
                { question: "What is 8 x 6?", options: ["48", "46", "54", "44"], answer: "48", explanation: "8 times 6 equals 48." },
                { question: "What is 56 ÷ 8?", options: ["6", "7", "8", "9"], answer: "7", explanation: "56 divided by 8 equals 7." },
                { question: "What is the perimeter of a rectangle with length 5 cm and width 3 cm?", options: ["16 cm", "15 cm", "14 cm", "18 cm"], answer: "16 cm", explanation: "Perimeter = 2(length + width) = 2(5 + 3) = 16 cm." },
                // Add 10 more questions for Maths Year 7
            ],
            "8": [
                { question: "What is 8 x 6?", options: ["48", "46", "54", "44"], answer: "48", explanation: "8 times 6 equals 48." },
                { question: "What is 12 ÷ 3?", options: ["4", "5", "6", "7"], answer: "4", explanation: "12 divided by 3 equals 4." },
                { question: "What is the area of a triangle with base 10 cm and height 5 cm?", options: ["25 cm²", "50 cm²", "75 cm²", "10 cm²"], answer: "25 cm²", explanation: "Area = 0.5 × base × height = 0.5 × 10 × 5 = 25 cm²." },
                { question: "What is the square root of 144?", options: ["12", "14", "10", "16"], answer: "12", explanation: "The square root of 144 is 12." },
                { question: "What is 7 + 6 x 2?", options: ["19", "20", "18", "22"], answer: "19", explanation: "According to the order of operations, 6 × 2 = 12, then 7 + 12 = 19." },
                // Add 10 more questions for Maths Year 8
            ],
            // Add more year levels for Maths
        },
        "Science": {
            "7": [
                { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", explanation: "Mars is known as the Red Planet." },
                { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "HO"], answer: "H2O", explanation: "H2O is the chemical formula for water." },
                { question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen", explanation: "Nitrogen makes up 78% of the air we breathe." },
                { question: "What is the boiling point of water?", options: ["90°C", "100°C", "80°C", "110°C"], answer: "100°C", explanation: "Water boils at 100°C at standard atmospheric pressure." },
                { question: "What is the basic unit of life?", options: ["Cell", "Tissue", "Organ", "Organism"], answer: "Cell", explanation: "The cell is the basic unit of life." },
                // Add 10 more questions for Science Year 7
            ],
            "8": [
                { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: "Mitochondria", explanation: "The mitochondria are known as the powerhouse of the cell." },
                { question: "What is the process by which plants make their own food?", options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], answer: "Photosynthesis", explanation: "Plants make their own food through photosynthesis." },
                { question: "What is the chemical formula for carbon dioxide?", options: ["CO2", "CO", "O2", "H2O"], answer: "CO2", explanation: "CO2 is the chemical formula for carbon dioxide." },
                { question: "What is the main source of energy for the Earth?", options: ["The Moon", "The Stars", "The Sun", "The Earth"], answer: "The Sun", explanation: "The Sun is the main source of energy for the Earth." },
                { question: "What type of bond is formed when atoms share electrons?", options: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"], answer: "Covalent Bond", explanation: "Covalent bonds are formed when atoms share electrons." },
                // Add 10 more questions for Science Year 8
            ],
            // Add more year levels for Science
        },
        "English": {
            "7": [
                { question: "What is a noun?", options: ["A verb", "A person, place, or thing", "An adjective", "A preposition"], answer: "A person, place, or thing", explanation: "A noun is a person, place, or thing." },
                { question: "Identify the adjective in the following sentence: 'The sky is blue.'", options: ["sky", "is", "blue", "The"], answer: "blue", explanation: "'Blue' describes the noun 'sky' and is an adjective." },
                { question: "What is the opposite of 'happy'?", options: ["Sad", "Joyful", "Angry", "Excited"], answer: "Sad", explanation: "The opposite of 'happy' is 'sad'." },
                { question: "Which of the following is a verb?", options: ["Quickly", "Happily", "Run", "Beautiful"], answer: "Run", explanation: "'Run' is an action word, which makes it a verb." },
                { question: "What is the subject of the sentence: 'The cat sat on the mat.'?", options: ["cat", "sat", "on", "mat"], answer: "cat", explanation: "The subject of the sentence is 'cat', which is what the sentence is about." },
                // Add 10 more questions for English Year 7
            ],
            "8": [
                { question: "What is a synonym for 'happy'?", options: ["Sad", "Angry", "Joyful", "Confused"], answer: "Joyful", explanation: "A synonym for 'happy' is 'joyful'." },
                { question: "What is an antonym for 'difficult'?", options: ["Easy", "Hard", "Complex", "Challenging"], answer: "Easy", explanation: "An antonym for 'difficult' is 'easy'." },
                { question: "In the sentence 'She sings beautifully', what part of speech is 'beautifully'?", options: ["Adjective", "Adverb", "Noun", "Verb"], answer: "Adverb", explanation: "'Beautifully' is an adverb that describes how she sings." },
                { question: "What is the past tense of 'go'?", options: ["Goes", "Going", "Went", "Gone"], answer: "Went", explanation: "The past tense of 'go' is 'went'." },
                { question: "Which of these sentences is correct?", options: ["He don't like ice cream.", "He doesn't like ice cream.", "He didn't likes ice cream.", "He don't likes ice cream."], answer: "He doesn't like ice cream.", explanation: "The correct sentence is 'He doesn't like ice cream.'." },
                // Add 10 more questions for English Year 8
            ],
            // Add more year levels for English
        },
        "History": {
            "7": [
                { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington", explanation: "George Washington was the first President of the United States." },
                { question: "What ancient civilization built the pyramids of Giza?", options: ["Romans", "Egyptians", "Greeks", "Mayans"], answer: "Egyptians", explanation: "The Egyptians built the pyramids of Giza." },
                { question: "Who was the leader of the Mongol Empire?", options: ["Genghis Khan", "Alexander the Great", "Julius Caesar", "Napoleon Bonaparte"], answer: "Genghis Khan", explanation: "Genghis Khan was the leader of the Mongol Empire." },
                { question: "In which year did the Titanic sink?", options: ["1912", "1905", "1915", "1920"], answer: "1912", explanation: "The Titanic sank in 1912." },
                { question: "Which war was fought between the North and South in the United States?", options: ["World War I", "World War II", "The Civil War", "The Revolutionary War"], answer: "The Civil War", explanation: "The Civil War was fought between the North and South in the United States." },
                // Add 10 more questions for History Year 7
            ],
            "8": [
                { question: "Who was the leader of the Russian Revolution?", options: ["Vladimir Lenin", "Joseph Stalin", "Nicholas II", "Leon Trotsky"], answer: "Vladimir Lenin", explanation: "Vladimir Lenin was the leader of the Russian Revolution." },
                { question: "What event started World War I?", options: ["Assassination of Archduke Franz Ferdinand", "The sinking of the Lusitania", "The signing of the Treaty of Versailles", "The invasion of Poland"], answer: "Assassination of Archduke Franz Ferdinand", explanation: "The assassination of Archduke Franz Ferdinand of Austria started World War I." },
                { question: "Which empire was known for building the Colosseum?", options: ["The Roman Empire", "The Byzantine Empire", "The Ottoman Empire", "The Persian Empire"], answer: "The Roman Empire", explanation: "The Roman Empire built the Colosseum in Rome." },
                { question: "What was the name of the period of great cultural and artistic change in Europe from the 14th to the 17th century?", options: ["The Renaissance", "The Enlightenment", "The Reformation", "The Industrial Revolution"], answer: "The Renaissance", explanation: "The Renaissance was a period of great cultural and artistic change in Europe." },
                { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Eleanor Roosevelt"], answer: "Margaret Thatcher", explanation: "Margaret Thatcher was the first female Prime Minister of the United Kingdom." },
                // Add 10 more questions for History Year 8
            ],
            // Add more year levels for History
        }
    };

    const questions = questionsDatabase[subject][year];
    questions.forEach((q, index) => {
        const questionElem = document.createElement('div');
        questionElem.className = 'question';
        questionElem.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            const optionElem = document.createElement('button');
            optionElem.innerText = option;
            optionElem.onclick = function () {
                alert(option === q.answer ? `Correct! ${q.explanation}` : `Incorrect. ${q.explanation}`);
            };
            questionElem.appendChild(optionElem);
        });
        questionsDiv.appendChild(questionElem);
    });
}

function loadQuiz() {
    const subject = document.getElementById('subject-select').value;
    const year = document.getElementById('year-select').value;
    const quizContainer = document.getElementById('quiz-container');
    
    // Fetch questions from the database for the quiz
    const quizQuestions = questionsDatabase[subject][year];
    let questionIndex = 0;
    let score = 0;

    function loadQuizQuestion() {
        if (questionIndex < quizQuestions.length) {
            const questionObj = quizQuestions[questionIndex];
            quizContainer.innerHTML = `<h2>Quiz Question ${questionIndex + 1}</h2><p>${questionObj.question}</p>`;

            questionObj.options.forEach(option => {
                const optionElement = document.createElement('button');
                optionElement.innerText = option;
                optionElement.onclick = function () {
                    if (option === questionObj.answer) {
                        score++;
                        alert("Correct! " + questionObj.explanation);
                    } else {
                        alert("Incorrect! " + questionObj.explanation);
                    }
                    questionIndex++;
                    loadQuizQuestion();
                };
                quizContainer.appendChild(optionElement);
            });
        } else {
            quizContainer.innerHTML = `<p>Your score is ${score} out of ${quizQuestions.length}.</p>`;
            const retryButton = document.createElement('button');
            retryButton.innerText = 'Retry Quiz';
            retryButton.onclick = function () {
                score = 0;
                questionIndex = 0;
                loadQuizQuestion();
            };
            quizContainer.appendChild(retryButton);
        }
    }

    loadQuizQuestion();
}
