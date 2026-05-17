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
import { AnimatePresence } from "framer-motion";
import ActiveNavContextProvider from "./context/ActiveNavContext";
import N8nChat from "./components/N8nChat";

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
function MyApp({ Component, pageProps, router }) {
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);
  return (
    <AnimatePresence>
      <ActiveNavContextProvider>
        {isClient && <Component key={pageProps.route} {...pageProps} />}
        {isClient && <N8nChat />}
      </ActiveNavContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
