"use client";
import React, { useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import classNames from "classnames";
import theme from "prism-react-renderer/themes/vsDark";
import { Copy, Check } from "lucide-react";

import styles from "./CodeBlock.module.css";
// Import popular vscode nightOwl theme

interface CodeBlockProps {
  syntax: Language
  containerStyles: string | string[]
  innerStyles: string | string[]
  code: string
}

type LanguageDict = { [key: string]: Language }

const supportedSyntax: LanguageDict = {
    bash: "bash",
    javascript: "javascript",
    tsx: "tsx",
    typescript: "typescript",
    json: "json",
    css: "css",
    jsx: "jsx"
};
export default function CodeBlock({ code = "", syntax = "json", containerStyles, innerStyles = "" }: CodeBlockProps) {
    const containerClass = classNames(containerStyles, styles.pre);
    const [ copied, setCopied ] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Failed to copy code to clipboard
        }
    };

    return (
        <div className={styles.codeBlockWrapper}>
            <Highlight
                {...defaultProps}
                theme={theme}
                code={code}
                language={supportedSyntax[syntax] ?? "json"}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={containerClass} style={style}>
                        <button onClick={handleCopy} className={styles.copyButton} aria-label="Copy code to clipboard" title="Copy code to clipboard">
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                        {/* Tokens are equivalent to each row/line of code text */}
                        {tokens.map((line, index) => {
                            // Obtenemos las props de la línea
                            const lineProps = getLineProps({ line,
                                key: index });
                            // Extraemos la key (que ignoraremos) y el resto de props
                            const { key: lineKey, className: lineClassName, ...restLineProps } = lineProps;
                            // Combinamos las clases
                            const combinedLineClass = classNames(innerStyles, styles.line, lineClassName);

                            return (
                                <div
                                    key={index} // Key directa para React
                                    className={combinedLineClass} // Clases combinadas
                                    {...restLineProps} // Resto de props de la línea
                                >
                                    <span className={styles.lineNumbers}>{index + 1}</span> {/* Show code line number */}
                                    <span className={styles.lineContent}>
                                        {/* Show code snippet for that line */}
                                        {line.map((token, tokenKey) => {
                                            const tokenProps = getTokenProps({ token,
                                                key: tokenKey });
                                            const { key, ...restTokenProps } = tokenProps;
                                            return <span key={key} {...restTokenProps} />;
                                        })}
                                    </span>
                                </div>
                            );
                        })}
                    </pre>
                )}
            </Highlight>
        </div>
    );
}
