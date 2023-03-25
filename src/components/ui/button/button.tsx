import { FC } from 'react';
import { ButtonProps } from './button.props';
import clsx from 'clsx';
import styles from './button.module.css'

export const Button: FC<ButtonProps> = ({icon, text, variant, className, children,...props}):JSX.Element => {
  return <button className={clsx(styles.button, className, {
    [styles.primary]: variant === 'primary',
    [styles.outlined]: variant === 'outlined',
    [styles.icon]: variant === 'iconed'

  })} {...props}>
    {text && <span>{text}</span>}
    {icon && <span>{icon}</span>}
  </button>;
};




