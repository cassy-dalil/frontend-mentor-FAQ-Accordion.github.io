let downArrow1 = document.querySelector("#down-arrow1");
let answerText = document.getElementsByClassName("answer");
let question = document.getElementsByClassName("question-box");


function showAnswer() {
    answerText.classList.add('show');
    question.style.fontWeight = "bold";
}

downArrow1.addEventListener("click", showAnswer);