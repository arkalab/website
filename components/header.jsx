export default function Header({ children }) {
    return <>
        <section id="home" className="flex flex-col relative">
            <img src="/image.png" alt="Description of image" className="w-screen h-screen object-cover" />
            <div className="flex items-start left-[20vw] right-[20vw] bottom-[25vh] absolute w-[80vw]">
                <img src="/logo.svg" alt="Arka logo" className="relative w-60 max-w-[40vw] left-0 top-0"/>
                <div className="relative max-w-[39vw] top-14 ml-6 text-white text-xl md:text-2xl font-jost">{children}</div>
            </div>
        </section>
    </>
}

