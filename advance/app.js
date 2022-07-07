const resultDisplay = document.querySelector('.result')
const choiceDisplay = document.querySelector('.choices')
const choices = ['rock', 'paper', 'scissors']


const handleClick = (e) => {
 getResults(e.target.innerHTML, choices[Math.floor(Math.random()* choices.length)])
}


choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choiceDisplay.appendChild(button)
})

const getResults = (userChoice , computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' Computer chose ' + computerChoice +  " SO YOU WON!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
       resultDisplay.innerHTML = 'You chose ' + userChoice + ' Computer chose ' + computerChoice +  " SO YOU LOSE!"
      break
        case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
       resultDisplay.innerHTML = 'You chose ' + userChoice + ' Computer chose ' + computerChoice +  " SO ITS A DRAW!"
  }
}