import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server';
import { Metadata } from 'next'
import '../globals.css'

type Props = {
    children: ReactNode
    params: { locale: string }
  }

export const metadata: Metadata = {
    title: 'ARKA',
    description: 'Arka é uma consultoria especializada em gestão de coleções digitais atuando no Brasil e em projetos internacionais.',
}

//function to get the translations
async function getMessages(locale: string) {
    try {
        return (await import(`../../messages/${locale}.json`)).default
    } catch (error) {
        notFound()
    }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
    return ['en', 'pt'].map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages(locale)
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
