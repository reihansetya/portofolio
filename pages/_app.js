import "../styles/globals.css";
import { useEffect, useState } from "react";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faGithub,
  fa,
  faLinkedin,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faFontAwesome,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faInstagram,
  faEnvelope
);
function MyApp({ Component, pageProps }) {
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);
  return <>{isClient && <Component {...pageProps} />}</>;
}

export default MyApp;
