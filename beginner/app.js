const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const btnItems = document.getElementsByClassName('btn-item')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult() 
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() *3) +1
 
  if (randomNumber == 1) {
    computerChoice = 'rock'
  }
 
  if (randomNumber == 2) {
    computerChoice = 'scissors'
  }
 
  if (randomNumber == 3) {
    computerChoice = 'paper'
  }
computerChoiceDisplay.innerHTML = computerChoice
}


 const btnOne = document.getElementById('rock')
 const btnTwo = document.getElementById('scissors')
 const btnThree = document.getElementById('paper')
if (btnOne) {
  btnOne.addEventListener('click', () => {
    btnOne.classList.add('btn-change-color')
    btnTwo.classList.remove('btn-change-color')
    btnThree.classList.remove('btn-change-color')
  })
}
  if (btnTwo) {
    btnTwo.addEventListener('click', () => {
      btnOne.classList.remove('btn-change-color')
      btnTwo.classList.add('btn-change-color')
      btnThree.classList.remove('btn-change-color')
    })
  }
  if (btnThree) {
    btnThree.addEventListener('click', () => {
      btnOne.classList.remove('btn-change-color')
      btnTwo.classList.remove('btn-change-color')
      btnThree.classList.add('btn-change-color')
    })
  }


function getResult() {

  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' &&  userChoice === 'paper') {
    result ='you win!'
  }
  if (computerChoice === 'rock' && userChoice ==='scissors') {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice ==='scissors') {
    result = 'you win!'
  }
   if (computerChoice === 'paper' && userChoice ==='rocks') {
    result = 'you lost!'
  }
  if (computerChoice === 'scissors' && userChoice ==='rocks') {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice ==='paper') {
    result = 'you lost!'
  }
  resultDisplay.innerHTML = result
}



