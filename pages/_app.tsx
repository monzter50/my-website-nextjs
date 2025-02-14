import '@styles/globals.css'
import '@styles/prism-night-theme.css'
import type { AppProps } from 'next/app'
import { Roboto, Poppins, Cousine } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin']
})

const cousine = Cousine({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin']
})
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
        <Component {...pageProps} />

        <style jsx global>{`
        :root {
          --font-cousine: ${cousine.style.fontFamily};
          --font-family: ${roboto.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      </>
  )
}

export default MyApp
