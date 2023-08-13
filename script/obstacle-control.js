import { obstacle, setLevel , character  } from "./component.js";
import { runLevel} from "../app.js";
import { random } from "./component.js";
import { pause } from "./player-control.js";
import { lose , losed, onQuest,  } from "./question.js";


export function obstacleRepeat(speed) {
    if (obstacle.style.left.replace('px' , '') < -300) {
        let multiplier = random[runLevel -1]()
        obstacle.style.transition = ''
        obstacle.style.left = `${(speed * multiplier) + 150}px`
        setTimeout(() => {
            obstacle.style.transition = 'all linear 0.1s';
        } ,100 )
    }
}
function obstacleMove_Timeout () {
    let speed = setLevel(runLevel);
    obstacle.style.left = (parseInt(obstacle.style.left
        .remove('px')) - speed) + 'px';
    let characterHeigth = character.style.bottom.remove('px');
    let obstacleLeft = obstacle.style.left.remove('px')
    if (characterHeigth < 121 && obstacleLeft == 150 ) {
        lose()
    }
    if (characterHeigth < 121 && obstacleLeft <= 150 && obstacleLeft >= 30) {
        lose()
    }
    obstacleRepeat(speed);
    obstacleMove();
}

function obstacleMove () {
    if(!pause && !onQuest && !losed) {
        setTimeout( obstacleMove_Timeout , 100);
    } else {
        setTimeout( function () {
            obstacleMove();
        } , 100)
    }
}
obstacleMove()