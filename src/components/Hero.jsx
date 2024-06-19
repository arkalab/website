import LocaleSwitch from './LocaleSwitch'
import { useTranslations } from 'next-intl'

export default function Hero() {
    const t = useTranslations('HomePage.Hero')
    return <>
        <section id="home" className="relative" >
            <LocaleSwitch />
            <div className="flex flex-col lg:flex-row items-start w-full max-w-[1240px] px-[10%] bottom-[35vh] absolute left-1/2 transform -translate-x-1/2">
                <img src="/logo.svg" alt="Arka logo" className="relative h-[3.35rem] lg:h-[5.25rem] max-w-[40vw]" />
                <p className="relative top-8 lg:top-[3.5rem] ml-6 text-white text-2xl lg:text-3xl font-jost">
                    {t.rich('description', {
                        highlight: (chunks) => <b className="underline">{chunks}</b>,
                        nobreak: (chunks) => <span className="whitespace-nowrap">{chunks}</span>
                    })}
                </p>
            </div>
            <img src="/bg.png" alt="Background image" width="2880" height="2052" className="w-screen h-screen object-cover" />
        </section>
    </>
}