import { useState, useEffect } from 'react'
import Slot from './Slot'
import Button from './Button'
import useRange from '../hooks/useRange'
import useCheckbox from '../hooks/useCheckbox'
import * as Generator from '../generator'
import styles from '../styles/PasswordGenerator.module.css'

const MIN_LENGTH = 6
const MAX_LENGTH = 72

const PasswordGenerator = () => {
	const [password, setPassword] = useState()

	// config
	const [passwordLength, setPasswordLength] = useRange(MIN_LENGTH)
	const [includeSymbols, setIncludeSymbols] = useCheckbox()
	const [includeNumbers, setIncludeNumbers] = useCheckbox()
  console.log(includeNumbers)

	const slots = []
	for (let i = 0; i < passwordLength; i++) {
		slots.push(<Slot key={i} value={password?.at(i)} index={i} limit={passwordLength} />)
	}

	const generatePassword = () => {
		const password = Generator.randomPassword({ passwordLength, includeNumbers, includeSymbols })
		setPassword(password)
	}

	useEffect(() => {
		setPassword(null)
	}, [passwordLength])

	return (
		<div>
			<div className='flex justify-center mx-16 w-5/4 py-4'>{slots}</div>

			<p className={styles.passwordLength}>PASSWORD LENGTH</p>
			<div className={styles.rangeContainer}>
				<input
					min={MIN_LENGTH}
					max={MAX_LENGTH}
					type='range'
					value={passwordLength}
					onChange={setPasswordLength}
					className={styles.range}
				/>

				<div>
					<div>
						<label htmlFor='includeSymbols'>Include Symbols</label>
						<input
							type='checkbox'
							id='includeSymbols'
							onChange={setIncludeSymbols}
							checked={includeSymbols}
						/>
					</div>
					<div>
						<label htmlFor='includeNumbers'>Include Numbers</label>
						<input
							type='checkbox'
							id='includeNumbers'
							onChange={setIncludeNumbers}
							checked={includeNumbers}
						/>
					</div>
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<Button onClick={generatePassword}>Generate Password</Button>
			</div>
		</div>
	)
}

export default PasswordGenerator
