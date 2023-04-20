import {  ForwardedRef, forwardRef } from "react";
import { TextAreaProps } from "./textarea.props";
import styles from "./textarea.module.css";
import clsx from 'clsx'

export const Textarea = forwardRef( ({

  placeholder,
  className,
  error,
  ...props
} : TextAreaProps, ref:ForwardedRef<HTMLTextAreaElement>) => {

  return (
        <label>
          <textarea
          placeholder={placeholder}
          className={clsx(styles.textarea, className)}
          ref={ref}
          {...props}
        ></textarea>
        		{error &&  <div className={styles.error}>{error.message}</div>}
        </label>
  );
})


Textarea.displayName = 'Textarea'