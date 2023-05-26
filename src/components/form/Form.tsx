import { Input } from '../input/Input';
import { SubmitButton } from '../submitButton/SubmitButton';
import styles from './form.module.css';

export const Form = () => {
	return (
		<section className={styles.formSection}>
			<form className={styles.form}>
				<div className={styles.inputContainer}>
					<Input />
					<Input />
				</div>
				<SubmitButton />
			</form>
		</section>
	);
};
