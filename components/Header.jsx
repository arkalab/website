export default function Header({ children }) {
  return (
    <section className="flex flex-wrap flex-col w-full h-screen bg-home bg-cover bg-center font-jost text-white text-2xl sm:text-3xl sm:leading-normal">
      <div className="absolute w-10/12 sm:w-7/12 bottom-20 sm:bottom-48 left-1/2 transform -translate-x-1/2 space-y-6 sm:space-y-0">
        <div className="flex flex-row w-full">
          <div className="basis-1/2 sm:basis-1/5">
            <img src="/logo.svg" alt="Arka logo" className="w-full" />
          </div>
          <div className="basis-1/2 sm:basis-4/5"></div>
        </div>
        <div className="flex flex-row w-full sm:space-x-14">
          <div className="basis-1/5 sm:basis-1/5"></div>
          <div className="basis-4/5 sm:basis-4/5">{children}</div>
        </div>
      </div>
    </section>
  );
}
