// DOM && DISPLAY COMPONENT
import { background , question , character , scoreDOM , timeDOM, exitButton, leaveButton } from "./script/component.js";
// FUNCTION COMPONENT 
import { setLevel  , spawnQuestion } from "./script/component.js";

import { pause } from "./script/player-control.js";
import { extraBuff,  losed,  onQuest, questionMoment } from "./script/question.js";

export var score = 0;
export var time = 0;
export var runLevel = 1;

exitButton.addEventListener('click' , function () {
    location.reload()
})
leaveButton.addEventListener('click' , function () {
    location.reload()
})

setInterval(function () {
    if (!pause && !onQuest && !losed) {
        time++;
    }
    timeDOM.innerHTML = `TIME : ${time}s | LVL : ${runLevel}`;
} , 1000);


function bgMove_Timeout () {
    let speed = setLevel(runLevel)
    if (score % 5000 == 0 && runLevel < 6 && score != 0) {
        runLevel = runLevel + 1
    };
    background.style.backgroundPosition = (parseInt(background.style.backgroundPosition
        .remove('px')
        .remove('center')) - speed) + 'px'
    question.style.left = (parseInt(question.style.left
        .remove('px')) - speed) + 'px';
    let characterHeigth = character.style.bottom.remove('px');
    let questionLeft = question.style.left.remove('px')
    if (characterHeigth < 121 && questionLeft <= 150 && questionLeft >= 30) {
        spawnQuestion(speed , runLevel)
        questionMoment()
    }
    if (characterHeigth < 121 && questionLeft == 150 ) {
        questionMoment()
        spawnQuestion(speed , runLevel)
    }
    score = score + (1  * extraBuff)
    scoreDOM.innerHTML = `SCORE : ${score} | BUFF : ${extraBuff}`;
    if (question.style.left.replace('px' , '') < -300) {
        spawnQuestion(speed , runLevel)
    }
    bgMove()
}

function bgMove () {
    if (!pause && !onQuest && !losed) {
        setTimeout( bgMove_Timeout , 100)
    } else {
        setTimeout ( function () {
            bgMove()
        } , 100)
    }
}
bgMove()