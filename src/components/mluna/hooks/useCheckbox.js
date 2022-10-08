import { useState } from 'react'

const useCheckbox = (defaultValue = true) => {
	const [value, setValue] = useState(defaultValue)
	const updateValue = (event) => {
		const value = event.currentTarget.checked
		setValue(value)
	}

	return [value, updateValue]
}

export default useCheckbox
