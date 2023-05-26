import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLogoContainer}>
				<img className={styles.headerLogo} src='src\assets\Troll Face.png' alt='Troll Face' />
				<h1 className={styles.heading}>Meme Generator</h1>
			</div>
			<h2 className={styles.projectName}>React Course - Project 3</h2>
		</header>
	);
};
