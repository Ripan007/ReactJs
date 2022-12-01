// game constants
let direction = { x: 0, y: 0 };
const foodSound = new Audio('food');
const gameOverSound = new Audio('gameOver');
const moveSound = new Audio('move');
const musicSound = new Audio('music');
let board = document.querySelector("#board");
let speed = 2;
let lastPrintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]

let food = { x: 6, y: 7 }

// game  Functions

function main(cTime) {
    window.requestAnimationFrame(main)
    // console.log(cTime);
    if ((cTime - lastPrintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPrintTime = cTime;
    gameEngine();
}

function gameEngine() {
    // updating the snake array and food


    // render the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        // snakeElement.classList.add('snake');
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    // display the food
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement)


}



// main logic start here 
window.requestAnimationFrame(main);