const data =
    [
        {
            "id": 1,
            "question": "What does 'Generative AI' refer to?",
            "options": [
                "AI that generates random numbers",
                "AI that generates new data similar to the data it has been trained on",
                "AI that only processes existing data without creating new content",
                "AI that predicts future events based on past data"
            ],
            "correctAnswer": "B"
        },
        {
            "id": 2,
            "question": "Which model is commonly used for text generation in Generative AI?",
            "options": [
                "Convolutional Neural Networks (CNN)",
                "Support Vector Machine (SVM)",
                "Generative Pre-trained Transformer (GPT)",
                "Decision Tree"
            ],
            "correctAnswer": "C"
        },
        {
            "id": 3,
            "question": "What is one of the key features of Generative Adversarial Networks (GANs)?",
            "options": [
                "They use a generator and a discriminator network",
                "They predict stock prices",
                "They are used to sort large datasets",
                "They are mainly used for clustering tasks"
            ],
            "correctAnswer": "A"
        },
        {
            "id": 4,
            "question": "Which of the following is an example of a Generative AI application?",
            "options": [
                "Self-driving cars",
                "Image recognition",
                "AI that creates realistic images and art",
                "Speech-to-text transcription"
            ],
            "correctAnswer": "C"
        },
        {
            "id": 5,
            "question": "What is 'GPT' in GPT-3 and GPT-4?",
            "options": [
                "Generative Pre-trained Transformer",
                "Generalized Pre-text Task",
                "Geometric Programming Tool",
                "Global Performance Tracker"
            ],
            "correctAnswer": "A"
        },
        {
            "id": 6,
            "question": "Which technique is often used in training large language models like GPT?",
            "options": [
                "A) Reinforcement Learning",
                "B) Supervised Learning",
                "C) Self-Supervised Learning",
                "D) Unsupervised Learning"
            ],
            "correctAnswer": "C"
        },
        {
            "id": 7,
            "question": "What is a 'token' in the context of Natural Language Processing (NLP)?",
            "options": [
                "A) A piece of code used to access the API",
                "B) A word or a subword unit in a sentence",
                "C) A machine learning model",
                "D) A type of neural network"
            ],
            "correctAnswer": "B"
        },
        {
            "id": 8,
            "question": "Which of the following is an essential component in GANs?",
            "options": [
                "Encoder and Decoder",
                "Generator and Discriminator",
                "Optimizer and Loss Function",
                "Input and Output Layers"
            ],
            "correctAnswer": "B"
        },
        {
            "id": 9,
            "question": "Which company developed GPT-3 and GPT-4?",
            "options": [
                "Google",
                "Microsoft",
                "OpenAI",
                "Facebook"
            ],
            "correctAnswer": "C"
        },
        {
            "id": 10,
            "question": "What is 'fine-tuning' in the context of language models?",
            "options": [
                "Modifying the model's architecture",
                "Training a pre-trained model on a specific dataset to improve performance",
                "Changing the input format of the model",
                "Optimizing the model using a different algorithm"
            ],
            "correctAnswer": "B"
        }
    ]

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.querySelector('#question');
    const optionsElement = document.querySelectorAll('.opt');
    const submitBtn = document.querySelector(".submitbtn")
    const nextBtn = document.querySelector(".nextbtn")
    const restartBtn = document.querySelector(".restart-btn");
    let score = 0;
    let currentQuiz = 0;
    let originalQuizFormHTML = quizForm.innerHTML;



    function loadQuiz() {

        if (currentQuiz < data.length) {

            const { question, options } = data[currentQuiz]
            questionElement.innerHTML = question
            const optionsContainer = document.querySelector('.optionsContainer')
            optionsContainer.innerHTML = "";
            options.forEach((option, index) => {
                const label = document.createElement('label')
                const input = document.createElement('input')
                input.type = 'radio';
                input.name = 'answer';
                input.className = 'answer';
                input.value = String.fromCharCode(65 + index);
                input.classList.add('inputs')
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                label.classList.add('labels', 'options')
                optionsContainer.appendChild(label);

            });
        }


        else {
            const nexbtn = document.querySelector('.nextbtn')
            nexbtn.remove()
            const endMessage = document.querySelector('#endPara');


            endMessage.innerHTML = `Congratulations! You've completed your Quiz Press Submit To get score`;
            endMessage.classList.add('end-message')


        }
    }


    function evaluateanswer() {
        const allselectedOpt = document.querySelectorAll('input.answer');
        const selectedOne = Array.from(allselectedOpt).find(radio => radio.checked);

        if (selectedOne) {
            // Get the correct answer for the current question
            if (selectedOne.value === data[currentQuiz].correctAnswer) {
                score++;
            }
        }

    }

    function setupEventListeners() {
        nextBtn.addEventListener("click", () => {
            evaluateanswer();
            currentQuiz++; // Move to the next question
            loadQuiz();

        });


        submitBtn.addEventListener("click", () => {
            // Hide the quiz form
            const quizForm = document.querySelector("#quizForm");
            if (quizForm) {
                if (score > 6) {
                    quizForm.innerHTML = `Congratulation  ! You've scored ${score} out of ${data.length}`;
                }

                else {
                    quizForm.innerHTML = `Well Try ! You've scored ${score} out of ${data.length}`;
                }


                // quizForm.classList.add('end-message')
            }
            // Show the restart button
            const restartBtn = document.querySelector('.restart-btn');
            if (restartBtn) {
                restartBtn.style.display = "inline-block";
            }
        });

    }

    restartBtn.addEventListener("click", () => {

        alert("refresh the Page to start again ")
        score = 0;
        currentQuiz = 0;
        const restartBtn = document.querySelector('.restart-btn');
        restartBtn.style.display = "none"

        quizForm.innerHTML = originalQuizFormHTML;

        setupEventListeners();

        loadQuiz();
    })

    setupEventListeners();
    window.onload = loadQuiz();
});




