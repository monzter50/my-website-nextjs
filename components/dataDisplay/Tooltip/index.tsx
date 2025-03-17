"use client";
import React, { useState } from "react";

import styles from "./Tooltip.module.css";

interface TooltipProps {
  title?: string
  children: React.ReactNode
  delay?: number
  direction?: "top" | "left" | "rigth" | "bottom"
}

export default function Tooltip({ title = "", children, delay, direction = "top" }: TooltipProps) {
    let timeout: any;
    const [ active, setActive ] = useState(false);

    const showTip = (): void => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay ?? 400);
    };

    const hideTip = (): void => {
        clearInterval(timeout);
        setActive(false);
    };
    return (
        <div
            className={styles.tooltip}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
            role="alert"
        >
            {active && (
                <span className={`${styles.tooltipText} ${styles[direction]}`}>
                    {title}
                </span>
            )}
            {children}
        </div>
    );
}
