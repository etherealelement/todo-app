import { forwardRef, ForwardedRef } from 'react';
import { InputProps } from './input.props';
import styles from "./input.module.css"




export const Input = forwardRef(({className, placeholder, error, type, ...props }: InputProps, ref:ForwardedRef<HTMLInputElement>): JSX.Element =>  {
	return <div className={styles.input}>
		<label>
			<span>{placeholder}</span>
		<input ref={ref} type={type} {...props}  />
		</label>
		{error &&  <div className={styles.error}>{error.message}</div>}
	</div>
})


Input.displayName = 'Input'