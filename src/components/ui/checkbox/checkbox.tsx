import { FC } from 'react';
import { InputCheckBoxProps } from './checkbox.props';
import styles from "./checkbox.module.css";
import clsx from 'clsx';


export const Checkbox: FC<InputCheckBoxProps> = ({className,variant, ...props }): JSX.Element => {
	return <div>
		<input  className={clsx(styles.checkbox, className, {
			[styles.active]: variant === "active",
			[styles.disable]: variant === "disable",
		})}
		{...props}>
		</input>
	</div>;
};