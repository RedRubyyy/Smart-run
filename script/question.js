
export const loseBox = document.getElementById('lose-box');

export const questionBox = document.getElementById('question-box');
export const questionText = document.getElementById('question-text');
export const answerButton = document.querySelectorAll('.button-answer');
export const answerA = document.getElementById('answer-1');
export const answerB = document.getElementById('answer-2');
const frameAlert = document.getElementById('alert-frame');
const uri = '../question.json'
export var onQuest = false
export var extraBuff = 1;
export var losed = false
var correctAnswer;
const datas = await fetch(uri).then(data => data.json())
        .then(body => body.questionPack)
        .catch(()=> 'connection error')

export function lose() {
        frameAlert.style.display = 'block';
        loseBox.style.display = 'block'
        losed = true
}
export function resetBuff () {
    extraBuff = 1
}
function randomQuestion (datas) {
    const index = datas.length - 1
    const randomQuestion = Math.floor(Math.random() * (index - 0) ) + 0
    return datas[randomQuestion]
}

function setAnswer (dataQuestion) {
    const answerDOM = [answerA , answerB];
    const random = Math.floor(Math.random() * (2 - 0) ) + 0
    correctAnswer = answerDOM[random].id;
    answerDOM.forEach((select , index) => {
        if (index == random) {
            select.innerHTML = dataQuestion.correct
        } else {
            select.innerHTML = dataQuestion.wrong
        }
    })
}

function solveQuestion () {
    questionBox.style.display = 'none'
    frameAlert.style.display = 'none'
    onQuest = false
}
export async function questionMoment () {
    questionBox.style.display = 'block'
    frameAlert.style.display = 'block'
    onQuest = true
    const datasFetch = datas
    const randomQuest = await randomQuestion(datasFetch)
    questionText.innerHTML = randomQuest.question;
    setAnswer(randomQuest);
    questionBox.style.display = 'block';
    setTimeout(function () {
            questionBox.style.display = 'none'
            frameAlert.style.display = 'none'
            onQuest = false
    } , 7000)
}

answerButton.forEach(button => {
    button.addEventListener('click' , function (e) {
        if (button.id == correctAnswer) {
            button.style.background = 'green'
            extraBuff++
            setTimeout(() => {
                button.style.background = ''
            }, 1000);
            setTimeout(solveQuestion , 500)
        }else {
            button.style.background = 'red'
            questionBox.style.display = 'none'
            frameAlert.style.display = 'none'
            if (extraBuff == 1) {
                location.reload()
            }else {
                resetBuff()
            }
            setTimeout(() => {
                button.style.background = ''
            }, 1000);
            setTimeout(solveQuestion , 500)
        }
    })
})
