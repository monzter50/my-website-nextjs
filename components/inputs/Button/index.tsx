import React from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode
  className?: string

}
export default function Button({ children, className = "", ...props }: ButtonProps): React.ReactNode {
    const classes = classNames(className, styles.button);
    return <button className={classes} {...props}>{children}</button>;
}
