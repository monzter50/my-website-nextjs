import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faGithub, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faFile,faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faInstagram, faLinkedin, faGithub, faCodepen, faTwitter, faChevronRight, faFile, faChevronDown)
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
