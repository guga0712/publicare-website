import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#BFA4F8" />
        <meta name="description" content="PubliCare" />
        <meta name="keywords" content="PubliCare, Terapia, Publicidade" />
        <meta name="author" content="PubliCare" />
        <meta name="google" content="notranslate" />
        <meta name="og:title" content="PubliCare" />
        <meta
          name="og:description"
          content="Conecte-se a psicólogos que já ajudaram publicitários como você a lidar com os desafios do dia a dia."
        />
        <meta name="og:image" content="/logo-3.png" />
        <meta name="og:url" content="https://publicare.com.br" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="pt-BR" />
        <meta name="og:site_name" content="PubliCare" />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
