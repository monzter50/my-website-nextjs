import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};
