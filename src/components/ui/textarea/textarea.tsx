import { FC } from 'react';
import { InputTextarea } from './textarea.props';
import styles from "./textarea.module.css";


export const Textarea: FC<InputTextarea> = ({name, placeholder,value, className, ...props}) => {
	return <div>
		<textarea placeholder={placeholder} className={styles.textarea}></textarea>
	</div>;
};