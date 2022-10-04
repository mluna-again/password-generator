const ASCII_BOUNDERIES = [33, 126] // ! up to ~ in ascii

const randomInRange = (min, max) => {
	return Math.random() * (max - min) + min
}

export const randomCharacter = () => {
	const [start, end] = ASCII_BOUNDERIES

	return String.fromCharCode(randomInRange(start, end))
}

export const randomPassword = (length) => {
	const chars = Array(length)
	for (let i = 0; i < length; i++) {
		chars[i] = randomCharacter()
	}

	return chars.join("")
}
