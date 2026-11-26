import classNames from "classnames";
import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode
  className?: string

}
export default function Button({ children, className = "", ...props }: ButtonProps) {
  const classes = classNames(className, styles.button);
  return <button className={classes} {...props}>{children}</button>;
}
