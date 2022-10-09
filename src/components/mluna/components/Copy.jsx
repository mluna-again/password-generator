import styles from '../styles/Copy.module.css'

const Copy = ({ password }) => {
  const copyHandler = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
  }

	return (
		<div className={styles.container}>
			<svg
				viewBox='0 0 95 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					id='topleft'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M95 0H0V80H13V15H95V0Z'
				/>
			</svg>
			<button onClick={copyHandler}>COPY</button>
			<svg
				viewBox='0 0 95 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					id='bottomright'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 80L95 80L95 0H82L82 65L0 65V80Z'
				/>
			</svg>
		</div>
	)
}

export default Copy
