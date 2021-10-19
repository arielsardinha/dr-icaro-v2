import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";
import { useRouter } from "next/router";
import theme from "ui/themes/theme";
import "@styles/globals.css";
import "@styles/anymate.css";
import { AppContainer } from "@styles/pages/_app.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Facebook Pixel Code
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("472487870322967"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    // ? remove o css que é gerado do lado servidor
    document.querySelector("#jss-server-side")?.remove();
  }, []);
  return (
    <>
      <Head>
        <title>{pageProps.title} | Dr. Ícaro Samuel</title>
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="author" content="dr ícaro samuel" />
        <meta
          name="keywords"
          content="cirurgia plástica, dr ícaro samuel, Membro da SBCP, Lipo, Lipo HD Total Definer, protese de silicone, abdominoplastia, mamoplastia, mastopexia,ninfoplastia, r24r"
        />
        <meta
          name="description"
          content="Através da cirurgia plástica busca encontrar harmonia entre o corpo e a mente, valorizando a mudança no estilo de vida, resultando na melhor performance das pessoas e impactando-as."
        ></meta>
      </Head>
      {/* Global site tag (gtag.js) - Google Ads: 752657861 */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-752657861"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
    
          gtag("config", "AW-752657861");
        `}
      </Script>
      {/* Global site tag (gtag.js) - Google Ads: 752657861 */}
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LK1Y654YW9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           dataLayer.push(arguments);
         }
         gtag("js", new Date());
   
         gtag("config", "G-LK1Y654YW9");
        `}
      </Script>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <ThemeProvider theme={theme}>
        <main>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
