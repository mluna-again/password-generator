import Slot from './Slot'

const PasswordGenerator = () => {
	const characters = 10

	return (
		<div>
			{[...Array(characters)].map((index) => {
        console.log(index)
				return <Slot key={index} />
			})}
		</div>
	)
}

export default PasswordGenerator
