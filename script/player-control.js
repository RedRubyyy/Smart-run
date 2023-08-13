import { character , menuBox, pausedButton , playButton, resumeButton} from "./component.js"
import { countdown , countdownText , frameAlert , alertPaused} from "./component.js";
import { jumpTime , paused } from "./component.js";
import { runLevel } from "../app.js";

export var pause = true

playButton.addEventListener('click' , function () {
    menuBox.style.display = 'none';
    frameAlert.style.display = 'none';
    pause = false
})
export function setPause (bool) {
    pause = bool
}
var jump = false
function characterAction (add , remove) {
    character.classList.add(add);;
    character.classList.remove(remove);
};

document.body.addEventListener('keypress' , function (e) {
    if (!jump && e.keyCode == 32) {
        jump = true
        let timer = jumpTime(runLevel);
        character.style.bottom = '170px';
        characterAction('character-jump' , 'character')
        setTimeout(function () {
            character.style.bottom = '21px';
            characterAction('character' , 'character-jump');
            setTimeout(function () {
                jump = false
            } , 300)
    } , timer);
    }
})

pausedButton.addEventListener('click' , function () {
    pause = true;
    paused()
})

let innerCountdown = 3
resumeButton.addEventListener('click' , function () {
    alertPaused.style.display = 'none'
    countdown.style.display = 'block'
    countdownText.innerHTML = innerCountdown;
    innerCountdown--
    let interval = setInterval(function () {
        countdownText.innerHTML = innerCountdown;
        innerCountdown--
        function startAfterCountdown () {
            clearInterval(interval)
            innerCountdown = 3
            frameAlert.style.display = 'none'
            alertPaused.style.display = 'none'
            countdown.style.display = 'none'
            pause = false
        }
        if (innerCountdown == 0){
            innerCountdown = 'START'
            setTimeout(startAfterCountdown, 1700)
        }
    } , 1000)
    
})

