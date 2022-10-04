import { useEffect, useState } from 'react'
import * as Generator from './generator'
import styles from './styles/Slot.module.css'

const ANIMATION_LENGTH = 1500 // 1500 milisecs
const Slot = ({ value, index, limit }) => {
	const [tempCharacter, setTempCharacter] = useState('?')

	useEffect(() => {
		if (!value) {
      setTempCharacter('?')
      return
    }

		const intervalId = setInterval(() => {
			setTempCharacter(Generator.randomCharacter())
		}, 100)

		const offset = Math.round(ANIMATION_LENGTH / limit) * (index + 1)
		setTimeout(() => {
			clearInterval(intervalId)
			setTempCharacter(null)
		}, offset)
	}, [value])

  // when tempCharacter is null it means there is a value ***and*** the animation is done
	return <span className={`text-white text-3xl mx-1 ${tempCharacter || styles.selected}`}>{tempCharacter || value}</span>
}

export default Slot
