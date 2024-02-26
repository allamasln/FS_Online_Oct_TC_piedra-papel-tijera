const buttons = document.querySelectorAll('.boton-jugada')

const resultsDisplay = document.getElementById('resultados')
const userScoreDisplay = document.querySelector('#contador-usuario span')
const computerScoreDisplay = document.querySelector('#contador-ordenador span')

const OPTIONS = ['piedra', 'papel', 'tijera']

const RESULTS = {
	TIE: 'EMPATE',
	USER_WIN: 'GANAS',
	COMPUTER_WIN: 'PIERDES',
}

const SCORE = {
	user: 0,
	computer: 0,
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		const userChoice = this.dataset.jugada

		const randomIndex = Math.floor(Math.random() * OPTIONS.length)
		const computerChoice = OPTIONS[randomIndex]

		let result = ''

		if (userChoice === computerChoice) result = RESULTS.TIE
		else if (
			(userChoice === 'piedra' && computerChoice == 'tijera') ||
			(userChoice === 'papel' && computerChoice === 'piedra') ||
			(userChoice === 'tijera' && computerChoice === 'papel')
		) {
			result = RESULTS.USER_WIN
			SCORE.user++
		} else {
			result = RESULTS.COMPUTER_WIN
			SCORE.computer++
		}

		resultsDisplay.textContent = `${result} ${userChoice} vs ${computerChoice} (cpu)`
		userScoreDisplay.textContent = SCORE.user
		computerScoreDisplay.textContent = SCORE.computer
	})
}
