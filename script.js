
const startButton = document.getElementById('start-btn')
const nexttButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonElement = document.getElementById('answer-button')

let shuffleQuestion,currentQuestionIndex;
let quizScore =0;


startButton.addEventListener('click', startGame)

nexttButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setnextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    shuffleQuestion=questions.sort(() =>Math.random() -0.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffleQuestion[currentQuestionIndex])
}

function showQuestion(questions){
    questionElement.innerText= question.question;
    question.answer.forEach((answer) =>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })
}
 
function resetState(){
    clearStatusClass(document.body)
    nexttButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectButton=e.target
    const correct = selectButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffleQuestion.length > currentQuestionIndex +1){
        nexttButton.classList.remove("hide")
    }else{
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }
    if(shuffleQuestion.dataset = correct) {
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}




function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'which of these is a javascript framework?',
        answer :[
            { text: 'Python', correct: false},
            { text: 'Django', correct: false},
            { text: 'React', correct: true },
            { text: 'Eclipse', correct: false}
        ],
    },
    {
        question: 'Who is the President of Ghana?',
        answer :[
            { text: 'John Mahama', correct: false},
            { text: 'Nana Addo', correct: true },
        
        ],
    },
    {
        question: 'What is 4*3',
        answer :[
            { text: '12', correct: true},
            { text: '6', correct: false},
            
        ],
    },

]