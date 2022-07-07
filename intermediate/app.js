const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h2')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice


const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = ` Your Choice : ${userChoice}`
  generateComputerChoice()
  getResult()
}


const generateComputerChoice = () => {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = `Computer Choice : ${computerChoice}`
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperock':
      resultDisplay.innerHTML = "YOU WON!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'YOU LOSE!'
      break
        case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      resultDisplay.innerHTML = 'IT S A DRAW!'
  }
}


for (i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i]
  button.innerHTML = choices[i]
  gameGrid.appendChild(button)
  button.addEventListener('click' , handleClick)
}