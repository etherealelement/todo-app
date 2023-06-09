import { FC } from "react";
import { TitleProps } from "./title.props";
import clsx from "clsx";
import styles from "./title.module.css";

export const Title: FC<TitleProps> = ({
  weight,
  children,
  className,
  ...props
}) => {
  return (
    <div>
      <h1
        className={clsx(styles.title, className, {
          [styles.bold]: weight === "bold",
          [styles.regular]: weight === "regular",
        })}
        {...props}
      >
        {children}
      </h1>
    </div>
  );
};
