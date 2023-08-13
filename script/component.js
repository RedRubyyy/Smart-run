export const character = document.getElementById('character');
export const background =  document.getElementById('background');
export const scoreDOM = document.getElementById('score');
export const timeDOM = document.getElementById('timer');
export const obstacle = document.getElementById('obstacle')
export const question = document.getElementById('question');
export const pausedButton = document.getElementById('pause-button');
export const frameAlert = document.getElementById('alert-frame');

export const alertPaused = document.getElementById('alert-paused');
export const resumeButton = document.getElementById('resume');
export const leaveButton = document.getElementById('leave')

export const countdown = document.getElementById('countdown')
export const countdownText = document.getElementById('countdown-text')

export const menuBox = document.getElementById('menu-box');
export const playButton = document.getElementById('play');

export const exitButton = document.getElementById('exit-menu');

export function paused () {
    frameAlert.style.display = 'block';
    alertPaused.style.display = 'block'
}
String.prototype.remove = function (string) {
    return this.replace(string , '');
}
export const random = [
    random35_45 , random30_40,
    random25_35 , random20_30,
    random15_20
]

export function random35_45 () {
    let random = Math.floor(Math.random() * (45 - 35) ) + 35;
    return random
}
export function random30_40 () {
    let random = Math.floor(Math.random() * (40 - 30) ) + 30;
    return random
}
export function random25_35 () {
    let random = Math.floor(Math.random() * (35 - 25) ) + 25;
    return random
}
export function random20_30 () {
    let random = Math.floor(Math.random() * (30 - 20) ) + 20;
    return random
}
export function random15_20 () {
    let random = Math.floor(Math.random() * (20 - 15) ) + 15;
    return random
}

export function spawnQuestion (speed , runLevel) {
        let multiplier = random[runLevel -1]() * 3;
        question.style.transition = '';
        question.style.left = `${(speed * multiplier) + 150}px`
        setTimeout(() => {
            question.style.transition = 'all linear 0.1s';
        } ,1000 )
}

export function jumpTime (level) {
    let jumpTimer = 1000;
    switch (level) {
        case 1 : jumpTimer = 1000;
            break;
        case 2 : jumpTimer = 900;
            break;
        case 3 : jumpTimer = 700;
            break;
        case 4 : jumpTimer = 650;
            break;
        default : jumpTimer = 550;
            break;
    }
    return jumpTimer
}

export function setLevel (level) {
    let speed = 0
    switch(level) {
        case 1 : speed = 50;
            break;
        case 2 : speed = 60;
            break;
        case 3 : speed = 70;
            break;
        case 4 : speed = 80;
            break;
        default : speed = 90;
            break;
    }
    return speed
}

