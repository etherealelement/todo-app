import { FC } from 'react';
import { InputProps } from './input.props';
import styles from "./input.module.css"

export const Input: FC<InputProps> = ({name, className, ...props}) => {
	return <div>
		<input id={name} className={styles.input} {...props}>
		</input>
	</div>;
};