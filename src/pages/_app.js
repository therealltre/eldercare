// i18n
import "../locales/i18n";

//fonts
import "../styles/index.css";

// map
import "mapbox-gl/dist/mapbox-gl.css";

// editor
import "react-quill/dist/quill.snow.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import PropTypes from "prop-types";
import cookie from "cookie";
// next
import Head from "next/head";
import App from "next/app";
//
import { PersistGate } from "redux-persist/lib/integration/react";
// redux
import { store, persistor } from "../redux/store";
// utils
import { getSettings } from "../utils/settings";
// theme
import ThemeProvider from "../theme";
// components
// import Settings from "../components/settings";
import ProgressBar from "../components/ProgressBar";
import ThemeColorPresets from "../components/ThemeColorPresets";
import ThemeLocalization from "../components/ThemeLocalization";
import MotionLazyContainer from "../components/animate/MotionLazyContainer";
import NotistackProvider from "@/components/NotistackProvider";

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object
};

export default function MyApp(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <MotionLazyContainer>
            <ThemeColorPresets>
              <ThemeLocalization>
                <NotistackProvider>
                  {/* <Settings /> */}
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                </NotistackProvider>
              </ThemeLocalization>
            </ThemeColorPresets>
          </MotionLazyContainer>
        </ThemeProvider>
      </PersistGate>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings
  };
};
