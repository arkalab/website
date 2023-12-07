"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
  };

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
          <div className="w-1/2 h-fit font-jost mb-20">
            <h2 className="font-bold text-3xl mb-4">Fique por dentro</h2>
            <p className="text-2xl">
              Você quer saber mais, esse texto é tipo texto publicitário
            </p>
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex w-full mt-4"
            >
              <input
                id=""
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Cadastre seu e-mail"
                className="flex w-full h-12 border-2 border-cyan-500 bg-4 p-2 outline-none"
              />
              <button
                type="submit"
                className="flex h-12 bg-cyan-500 text-white my-auto place-content-center px-6 items-center"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
