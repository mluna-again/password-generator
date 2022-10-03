import { useState } from 'react'

const useRange = (min, max) => {
	const [value, setValue] = useState(min)
  const updateValue = event => {
    const number = event.currentTarget.value;
    if (number < min) return;
    if (number > max) return;

    setValue(number);
  }

	return [value, updateValue]
}

export default useRange
