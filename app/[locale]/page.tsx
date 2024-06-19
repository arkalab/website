// 'use client'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server';

import Hero from '../../src/components/Hero'
import About from '../../src/components/About'
import Team from '../../src/components/Team'
import Partners from '../../src/components/Partners'
import Projects from '../../src/components/Projects'
import MainContent from '../../src/components/MainContent'
import Footer from "../../src/components/Footer"
import Link from 'next/link'


export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <MainContent>
        <About />
        <Team />
        <Partners />
        <Projects />
      </MainContent>
      <Footer>
        <Link href="mailto:arka@arka.la">arka@arka.la</Link>
      </Footer>
    </>
  );
}
