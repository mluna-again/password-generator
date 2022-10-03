import { useState, useEffect } from 'react'
import Slot from './Slot'
import useRange from './hooks/useRange'
import * as Generator from './generator'

const MIN_LENGTH = 6
const MAX_LENGTH = 72

const PasswordGenerator = () => {
	const [password, setPassword] = useState()
	const [passwordLength, setPasswordLength] = useRange(MIN_LENGTH)

	const slots = []
	for (let i = 0; i < passwordLength; i++) {
		slots.push(<Slot key={i} value={password?.at(i)} />)
	}

	const generatePassword = () => {
		setPassword(Generator.randomPassword(passwordLength))
	}

	useEffect(() => {
		setPassword(null)
	}, [passwordLength])

	return (
		<div>
			<input
				min={MIN_LENGTH}
				max={MAX_LENGTH}
				type='range'
				value={passwordLength}
				onChange={setPasswordLength}
			/>
			<div className='flex justify-center mx-16 w-5/4 overflow-scroll'>{slots}</div>

			<div className='mx-8'>
				<button className='bg-blue-400 py-4 w-full mt-8 rounded' onClick={generatePassword}>
					Generate Password
				</button>
			</div>
		</div>
	)
}

export default PasswordGenerator
