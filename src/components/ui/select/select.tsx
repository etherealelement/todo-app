import {  ForwardedRef, forwardRef } from "react";
import {SelectProps} from './select.props'
import styles from "./select.module.css";
import clsx from 'clsx'

export const Select = forwardRef(({

  className,
  error,
	values,
  ...props
} : SelectProps, ref:ForwardedRef<HTMLSelectElement>) => {

  return (
      <div>
				<select  className={clsx(styles.select, className)} ref={ref}>
			{values.map((opt, idx) => <option key={`${opt.label}-${opt.value}-${idx}`} value={opt.value}>
				{opt.label}
			</option>)}
			 </select>
			 {error &&  <div className={styles.error}>{error.message}</div>}
			</div>
  );
})


Select.displayName = 'Select'