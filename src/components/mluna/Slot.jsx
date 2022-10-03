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

    return () => {
      if (!intervalId.current) return;

      clearInterval(intervalId.current);
    }
	}, [value])

	return <span className='text-white text-3xl'>{displayValue}</span>
}

export default Slot
