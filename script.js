let downArrow1 = document.querySelector("#down-arrow1");
let downArrow2 = document.querySelector("#down-arrow2");
let downArrow3 = document.querySelector("#down-arrow3");
let downArrow4 = document.querySelector("#down-arrow4");
let downArrow5 = document.querySelector("#down-arrow5");




function showAnswer1() {
    document.getElementById("answer-1").classList.toggle("show");
    // document.getElementById("question-1").style.fontWeight = "700";
    downArrow1.style.transform = 'rotate(180deg)';
    document.getElementById("answer-2").classList.remove("show");
    document.getElementById("answer-3").classList.remove("show");
    document.getElementById("answer-4").classList.remove("show");
    document.getElementById("answer-5").classList.remove("show");
    downArrow2.style.transform = 'rotate(360deg)';
    downArrow3.style.transform = 'rotate(360deg)';
    downArrow4.style.transform = 'rotate(360deg)';
    downArrow5.style.transform = 'rotate(360deg)';
}

downArrow1.addEventListener("click", showAnswer1);

function showAnswer2() {
    document.getElementById("answer-2").classList.toggle("show");
    // document.getElementById("question-2").style.fontWeight = "800";
    document.getElementById("answer-1").classList.remove("show");
    document.getElementById("answer-3").classList.remove("show");
    document.getElementById("answer-4").classList.remove("show");
    document.getElementById("answer-5").classList.remove("show");
    downArrow2.style.transform = 'rotate(180deg)';
    downArrow1.style.transform = 'rotate(360deg)';
    downArrow3.style.transform = 'rotate(360deg)';
    downArrow4.style.transform = 'rotate(360deg)';
    downArrow5.style.transform = 'rotate(360deg)';
}

downArrow2.addEventListener("click", showAnswer2);

function showAnswer3() {
    document.getElementById("answer-3").classList.toggle("show");
    // document.getElementById("question-3").style.fontWeight = "800";
    document.getElementById("answer-2").classList.remove("show");
    document.getElementById("answer-1").classList.remove("show");
    document.getElementById("answer-4").classList.remove("show");
    document.getElementById("answer-5").classList.remove("show");
    downArrow3.style.transform = 'rotate(180deg)';
    downArrow2.style.transform = 'rotate(360deg)';
    downArrow1.style.transform = 'rotate(360deg)';
    downArrow4.style.transform = 'rotate(360deg)';
    downArrow5.style.transform = 'rotate(360deg)';
}

downArrow3.addEventListener("click", showAnswer3);

function showAnswer4() {
    document.getElementById("answer-4").classList.toggle("show");
    // document.getElementById("question-4").style.fontWeight = "800";
    document.getElementById("answer-2").classList.remove("show");
    document.getElementById("answer-3").classList.remove("show");
    document.getElementById("answer-1").classList.remove("show");
    document.getElementById("answer-5").classList.remove("show");
    downArrow4.style.transform = 'rotate(180deg)';
    downArrow2.style.transform = 'rotate(360deg)';
    downArrow3.style.transform = 'rotate(360deg)';
    downArrow1.style.transform = 'rotate(360deg)';
    downArrow5.style.transform = 'rotate(360deg)';
}

downArrow4.addEventListener("click", showAnswer4);

function showAnswer5() {
    document.getElementById("answer-5").classList.toggle("show");
    // document.getElementById("question-5").style.fontWeight = "800";
    document.getElementById("answer-2").classList.remove("show");
    document.getElementById("answer-3").classList.remove("show");
    document.getElementById("answer-4").classList.remove("show");
    document.getElementById("answer-1").classList.remove("show");
    downArrow5.style.transform = 'rotate(180deg)';
    downArrow2.style.transform = 'rotate(360deg)';
    downArrow3.style.transform = 'rotate(360deg)';
    downArrow4.style.transform = 'rotate(360deg)';
    downArrow1.style.transform = 'rotate(360deg)';
}

downArrow5.addEventListener("click", showAnswer5);