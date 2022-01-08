const quizDB = [
    {
        question : "Q1: What is the full form of HTML? ",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Marup Language",
        d: "HyperText Marup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of the CSS?",
        a: "case cading style sheets",
        b: "case cading style sheep",
        c: "catoon style sheets",
        d: "cascading super sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer product ",
        b:"Hypertext Test protocol",
        c:"Hey Transfer protocol",
        d:"Hypertext Tarnsfer Protocol",
        ans: "ans4"
    },{
        question: "Q4: What is the full form of Js?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll(['.answer']);
const showScore = document.querySelector('#showScore');

let questionCount = 1;
let score = 0;

const loadQustion = () =>{

    const questionList =  quizDB[questionCount];

    question.innerHTML = quizDB.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

} 
loadQustion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

       
    } );
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    if(questionCount < quizDB.length){
        loadQustion();
    }
    else{
        showScore = innerHTML = `<h3> Your Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Start Again</button>`;
        
        showScore.classList.remove('scoreArea');

    }
});