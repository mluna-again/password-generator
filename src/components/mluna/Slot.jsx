import { useEffect, useState, useRef } from 'react'
import * as Generator from './generator'

const Slot = ({ value }) => {
	const [displayValue, setDisplayValue] = useState(value)
	const intervalId = useRef()

	useEffect(() => {
		if (value) {
			clearInterval(intervalId.current)
			intervalId.current = null
			return
		}

		intervalId.current = setInterval(() => {
			setDisplayValue(Generator.randomCharacter())
		}, 100)
	}, [value])

	return (
		<div className='bg-white w-16 h-24 flex justify-center items-center rounded'>
			<span className='text-3xl'>{displayValue}</span>
		</div>
	)
}

export default Slot
