import "../assets/css/bootstrap.min.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "react-image-lightbox/style.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../assets/css/style.scss";
import "../assets/css/responsive.scss";
import "../assets/css/animate.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";
import React from "react";
import "../fontAwesome";

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <DefaultSeo
          title="Brilliant Esystem Academy"
          description="Brilliant Esystem Academy"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://mannir.net",
            site_name: "BEA"
          }}
        />
        <Preloader>
          <Component {...pageProps} />
          <GoTop scrollStepInPx="50" delayInMs="20" />
          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </>
    );
  }
}
export default MyApp;
