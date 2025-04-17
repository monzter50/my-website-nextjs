import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { Copy, Check } from "lucide-react";

import styles from "./Code.module.css";
interface CodeProps {
  className?: string
  children: ReactNode
}

export default function Code({ className, children }: CodeProps) {
    const classes = classNames(className, styles.code);
    const [ copied, setCopied ] = useState(false);

    const handleCopy = async () => {
        try {
            if (typeof children === "string") {
                await navigator.clipboard.writeText(children);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            // Failed to copy code to clipboard
        }
    };

    return (
        <div className={styles.codeWrapper}>
            <pre className={classes}>
                <button onClick={handleCopy} className={styles.copyButton} aria-label="Copy code to clipboard" title="Copy code to clipboard">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
                <code>
                    {children}
                </code>
            </pre>
        </div>
    );
}
