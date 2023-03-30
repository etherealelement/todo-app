import { FC } from 'react';
import { InputCheckBoxProps } from './checkbox.props';
import styles from "./checkbox.module.css";
import clsx from 'clsx';


export const Checkbox: FC<InputCheckBoxProps> = ({className,variant, placeholder, ...props }): JSX.Element => {
	return 	<div className={clsx(styles.wrapper, className)}>
	<label>
		<input
			className={styles.checkbox}

			type='checkbox'
			{...props}
		/>
		<span className={styles.fake}>
		</span>
		<span className={styles.text}>{placeholder}</span>
	</label>
</div>
};