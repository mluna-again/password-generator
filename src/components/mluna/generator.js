const ASCII_BOUNDERIES = [33, 126] // ! up to ~ in ascii
const ASCII_UPPERCASE = [65, 90] // A up to Z
const ASCII_LOWERCASE = [97, 122] // a up to z
const ASCII_SYMBOLS = [
	'!',
	'"',
	'#',
	'$',
	'%',
	'&',
	'\'',
	'(',
	')',
	'*',
	'+',
	'`',
	'-',
	'.',
	'/',
	':',
	';',
	'<',
	'=',
	'>',
	'?',
	'@',
	'\\',
	'[',
	']',
	'^',
	'_',
	'{',
	'}',
	'|',
	'~'
]

const randomInRange = (min, max) => {
	return Math.round(Math.random() * (max - min) + min)
}

const randomInArray = (array) => {
	return array[randomInRange(0, array.length - 1)]
}

export const randomLetter = () => {
	const upper = String.fromCharCode(randomInRange(...ASCII_UPPERCASE))
	const lower = String.fromCharCode(randomInRange(...ASCII_LOWERCASE))

	return randomInRange(1, 10) >= 5 ? upper : lower
}

export const randomLetterOrNumber = () => {
	const letter = randomLetter()
	const number = randomInRange(1, 10)

	return randomInRange(1, 10) >= 5 ? letter : number
}

export const randomLetterOrSymbol = () => {
	const letter = randomLetter()
	const symbol = randomInArray(ASCII_SYMBOLS)

	return randomInRange(1, 10) >= 5 ? letter : symbol
}

export const randomCharacter = () => {
	const [start, end] = ASCII_BOUNDERIES

	return String.fromCharCode(randomInRange(start, end))
}

export const randomPassword = ({ passwordLength, includeSymbols, includeNumbers }) => {
	const chars = Array(passwordLength)
	for (let i = 0; i < passwordLength; i++) {
		let char = null

		if (includeNumbers && includeSymbols) char = randomCharacter()
		else if (includeNumbers) char = randomLetterOrNumber()
		else if (includeSymbols) char = randomLetterOrSymbol()
		else char = randomLetter()

		chars[i] = char
	}

	return chars.join('')
}
