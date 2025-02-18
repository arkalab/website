import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import "../globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata = (locale: string): Metadata => {
  const commonMetadata = {
    title: "ARKA",
    openGraph: {
      url: "https://arka.la",
      images: [
        {
          url: "https://avatars.githubusercontent.com/u/152537545?s=200&v=4",
          width: 200,
          height: 200,
          alt: "Arka Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@arka",
      images: ["https://avatars.githubusercontent.com/u/152537545?s=200&v=4"],
    },
  };

  let description;
  let keywords;

  switch (locale) {
    case "en":
      description =
        "Arka is a digital studio specialized in digital collections, operating in Brazil and abroad";
      keywords = [
        "iiif",
        "collections",
        "machine learning",
        "consultancy",
        "digital humanities",
        "digital strategy",
        "museums",
        "galleries",
        "archives",
        "libraries",
        "cultural heritage",
      ];
      break;
    case "pt":
      description =
        "Arka é um estúdio digital especializado em coleções digitais, atuando no Brasil e em projetos internacionais";
      keywords = [
        "iiif",
        "acervos",
        "inteligência artificial",
        "patrimônio cultural",
        "consultoria",
        "humanidades digitais",
        "estratégia digital",
        "museus",
        "galerias",
        "arquivos",
        "bibliotecas",
      ];
      break;
    case "es":
      description =
        "Arka es un estudio digital especializado en colecciones digitales, que opera en Brasil y en el extranjero.";
      keywords = [
        "iiif",
        "colecciones",
        "museos",
        "galerias",
        "archivos",
        "bibliotecas",
        "humanidades digitales",
        "consultoria",
        "estrategia digital",
        "patrimonio cultural",
        "inteligencia artificial",
      ];
      break;
  }
  return {
    description: description,
    keywords: keywords,
    ...commonMetadata,
    openGraph: {
      ...commonMetadata.openGraph,
      description: description,
    },
    twitter: {
      ...commonMetadata.twitter,
      description: description,
    },
  };
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "pt"].map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-KRM0CXEF89" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Arka",
              url: "https://arka.la",
              logo: "https://avatars.githubusercontent.com/u/152537545?s=200&v=4",
              sameAs: [
                "https://arka.la",
                "https://www.linkedin.com/company/arkalab",
                "https://github.com/arkalab",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
