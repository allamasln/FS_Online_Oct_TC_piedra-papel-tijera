const buttons = document.querySelectorAll('.boton-jugada')

const resultsDisplay = document.getElementById('resultados')
const userScoreDisplay = document.querySelector('#contador-usuario span')
const computerScoreDisplay = document.querySelector('#contador-ordenador span')

const OPTIONS = ['piedra', 'papel', 'tijera', 'spock', 'lagarto']

const RESULTS = {
	TIE: 'EMPATE',
	USER_WIN: 'GANAS',
	COMPUTER_WIN: 'PIERDES',
}

const SCORE = {
	user: 0,
	computer: 0,
}

const RULES = {
	piedra: { beats: ['tijera', 'lagarto'] },
	papel: { beats: ['piedra', 'spock'] },
	tijera: { beats: ['papel', 'lagarto'] },
	lagarto: { beats: ['spock', 'papel'] },
	spock: { beats: ['tijera', 'piedra'] },
}

buttons.forEach((button) => {
	button.addEventListener('click', function () {
		const userChoice = this.dataset.jugada

		playRound(userChoice)
	})
})

function playRound(userChoice) {
	const computerChoice = generateComputerChoice()
	const result = determineRoundResult(userChoice, computerChoice)

	updateScore(result)
	showResult(result, userChoice, computerChoice)
}

function generateComputerChoice() {
	const randomIndex = Math.floor(Math.random() * OPTIONS.length)
	const computerChoice = OPTIONS[randomIndex]

	return computerChoice
}

function determineRoundResult(userChoice, computerChoice) {
	if (userChoice === computerChoice) return RESULTS.TIE

	if (RULES[userChoice].beats.includes(computerChoice)) {
		return RESULTS.USER_WIN
	}

	return RESULTS.COMPUTER_WIN
}

function updateScore(result) {
	if (result === RESULTS.TIE) return

	if (result === RESULTS.USER_WIN) {
		SCORE.user++
	} else {
		SCORE.computer++
	}
}

function showResult(result, userChoice, computerChoice) {
	resultsDisplay.textContent = `${result} ${userChoice} vs ${computerChoice} (cpu)`
	userScoreDisplay.textContent = SCORE.user
	computerScoreDisplay.textContent = SCORE.computer
}
