// 'use client'
import { unstable_setRequestLocale } from "next-intl/server";

import Hero from "@components/Hero";
import About from "@components/About";
import Team from "@components/Team";
import Projects from "@components/Projects";
import Services from "@components/Services";
import MainContent from "@components/MainContent";
import Footer from "@components/Footer";
import Link from "next/link";

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <MainContent>
        <About />
        <Services />
        <Team />
        <Projects />
      </MainContent>
      <Footer>
        <Link href="mailto:arka@arka.la">arka@arka.la</Link>
      </Footer>
    </>
  );
}
