export default function Home() {
  return (
    <main className="w-screen">
      <section className="w-screen h-screen">
        <div className="absolute w-3/4 h-fit bottom-48 left-32 font-jost">
          <h1 className="text-8xl font-medium mb-6">ARKA</h1>
          <p className="text-3xl font-light w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            varius libero. Fusce eu suscipit lacus. Aliquam sit amet lorem at
            est suscipit rutrum. Donec vitae mi et lectus aliquam pulvinar. Cras
            vestibulum diam id lorem elementum gravida.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap w-screen">
        <div className="w-full h-fit mx-auto px-32 pb-32">
          <div className="mb-20 font-jost">
            <h2 className="font-jost font-bold text-3xl mb-4">Projetos</h2>
            <ul className="text-2xl space-y-2">
              <li><a href="https://github.com/martimpassos/tropiiify" target="_blank" className="underline">tropiiify</a> faz isso e aquilo</li>
            </ul>
          </div>
          <div className="mb-20 font-jost">
            <h2 className="font-jost font-bold text-3xl mb-4">Pessoas</h2>
            <ul className="text-2xl space-y-2">
              <li>Bruno Buccalon faz isso e aquilo</li>
              <li>Martim Passos faz isso e aquilo</li>
              <li>Yuri Tavares faz isso e aquilo</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
