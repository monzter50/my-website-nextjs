import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import classNames from 'classnames'
import styles from './CodeBlock.module.css'
// Import popular vscode nightOwl theme
import theme from 'prism-react-renderer/themes/vsDark'

interface CodeBlockProps {
  syntax: Language
  containerStyles: string | string[]
  innerStyles: string | string[]
  code: string
}

type LanguageDict = { [key: string]: Language }

const supportedSyntax: LanguageDict = {
  bash: 'bash',
  javascript: 'javascript',
  tsx: 'tsx',
  typescript: 'typescript',
  json: 'json',
  css: 'css',
  jsx: 'jsx'
}
export default function CodeBlock({ code = '', syntax = 'json', containerStyles, innerStyles = '' }: CodeBlockProps): JSX.Element {
  const containerClass = classNames(containerStyles, styles.pre)
  const innerClass = classNames(innerStyles, styles.line)

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={code}
      language={supportedSyntax[syntax] ?? 'json'}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className={containerClass} style={style}>
          {/* Tokens are equivalent to each row/line of code text */}
          {tokens.map((line, index) => (
            <div
              key={index}
              {...getLineProps({ line, key: index })}
              className={innerClass}
            >
              <span className={styles.lineNumbers}>{index + 1}</span> {/* Show code line number */}
              <span className={styles.lineContent}>
                {/* Show code snippet for that line */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
