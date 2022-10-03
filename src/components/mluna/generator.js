const ASCII_BOUNDERIES = [33, 126] // ! up to ~ in ascii

const randomInRange = (min, max) => {
	return Math.random() * (max - min) + min
}

export const randomCharacter = () => {
	const [start, end] = ASCII_BOUNDERIES

	return String.fromCharCode(randomInRange(start, end))
}
