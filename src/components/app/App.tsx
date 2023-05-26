import { Header } from '../header/Header';
import styles from './app.module.css';

export const App = () => {
	return (
		<section className={styles.appSection}>
			<div className={styles.appContainer}>
				<Header />
			</div>
		</section>
	);
};
