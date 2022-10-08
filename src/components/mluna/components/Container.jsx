import PasswordGenerator from './PasswordGenerator'
import styles from '../styles/Container.module.css';

const Container = () => {
	return (
		<main className={styles.container}>
			<PasswordGenerator />
		</main>
	)
}

export default Container
