document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const width = 10
  let currentIndex = 0 // same as first div in our grid
  let appleIndex = 0  // same as first div in our grid
  let currentSnake = [2, 1, 0]  // divs with the value of 2 will be head, divs with value with 0 will be tail, divs that are 1 are body parts --> this array is our snake
  let direction = 1 // snake should always go 1 div down the array
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0

  //to start and restart the game
  function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    randomApple()
    direction = 1 //for the snake to go one div right
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
  }

  //function that deals with all outcomes of the snake
  function moveOutcomes() {

    //deals with snake hitting border and snake hitting itself
    if (
      (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
      squares[currentSnake[0] + direction].classList.contains('snake') //if snake hits itself
    ) {
      return classInterval(interval) // this will clear the interval if any of the above happens
    }

    const tail = currentSnake.pop() //removes last item of the array and shows it
    squares[tail].classList.remove('snake') //removes class of snake from the tail
    currentSnake.unshift(currentSnake[0] + direction) // gives direction to the head of the snake/array

    //deals with snake getting an apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
      squares[currentSnake[0]].classList.remove('apple')
      squares[tail].classList.add('snake')
      currentSnake.push(tail)
      randomApple()
      score++
      scoreDisplay.textContent = score
      clearInterval(interval)
      intervalTime = intervalTime * speed
      interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
  }

  //generates new apple once the old one had been eaten
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
  }

  //assign functions to the keycodes - each key on the keyboard has a keycode assigned to it
  function control(e) {
    squares[currentIndex].classList.remove('snake') //we are removing the class of snake from att the squares

    if (e.keyCode === 39) {
      direction = 1 //if we press the right arrow on our keyboard, the snake will go right one div
    } else if (e.keyCode === 38) {
      direction = -width //if we press the up arrow, the snake will go back ten divs, appearing to go up
    } else if (e.keyCode === 37) {
      direction = -1 //if we press left arrow, the snake will go left one div
    } else if (e.keyCode === 40) {
      direction = +width //if we press down arrow, the snake head will instantly appear in the div ten divs from where you are now
    }
  }

  document.addEventListener('keyup', control)
  startBtn.addEventListener('click', startGame)

  function keypadPress(code) {
    control({'keyCode': code})
  }

  document.querySelector('.button-up').addEventListener('click', () => keypadPress(38));
  document.querySelector('.button-down').addEventListener('click', () => keypadPress(40));
  document.querySelector('.button-right').addEventListener('click', () => keypadPress(37));
  document.querySelector('.button-left').addEventListener('click', () => keypadPress(39));
})

// add screen buttons

document.addEventListener("keyup", () => console.log(event.which))
