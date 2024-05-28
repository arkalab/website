import LocaleSwitch from './locale-switch'

export default function Header({ children }) {
    return <>
        <section id="home" className="flex flex-col relative">
            <img src="/image.png" alt="Description of image" className="w-screen h-screen object-cover" />
            <LocaleSwitch className="absolute right-0 top-0 mr-[10vw] mt-[10vh] text-zinc-200 font-light underline"/>
            <div className="flex items-start mx-auto bottom-[25vh] justify-center absolute left-0 right-0">
                <img src="/logo.svg" alt="Arka logo" className="relative w-60 max-w-[40vw]"/>
                <div className="relative max-w-[39vw] top-14 ml-6 text-white text-xl md:text-2xl font-jost">{children}</div>
            </div>
        </section>
    </>
}