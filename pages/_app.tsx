import PropTypes from "prop-types";
import "@styles/globals.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram,faLinkedin,faGithub,faCodepen,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(faInstagram, faLinkedin,faGithub,faCodepen,faTwitter,faChevronRight)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
