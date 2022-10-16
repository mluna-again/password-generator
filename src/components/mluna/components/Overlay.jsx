import styles from '../styles/Overlay.module.css'

const Overlay = ({ text, visible, onClose }) => {
	return (
		<div
			className={`${styles.container} ${visible && styles.active}`}
			onClick={(event) => event.stopPropagation()}
		>
			<div className={styles.innerContainer}>
				<h1 className={styles.text}>{text}</h1>
				<button onClick={onClose}>OK</button>
			</div>
		</div>
	)
}

export default Overlay
