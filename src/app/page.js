"use client";
import { useState, useEffect } from "react";
import { isMobile } from 'react-device-detect';

export default function Home() {
  const [email, setEmail] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <main className="w-screen">
      {isReady ? (
        isMobile ? (
          <>
            <section className="flex flex-col w-screen h-screen font-jost">
              <div className="w-10/12 h-fit mx-auto mt-auto mb-28">
                <h1 className="text-7xl font-medium mb-6">ARKA</h1>
                <p className="text-xl font-light">
                  Somos uma consultoria especializada na gestão de acervos, desenvolvendo soluções de tecnologia e treinamentos para instituições de memória. Trabalhamos com engenharia de dados, aprendizado de máquina e aplicações web com foco em acesso aberto e engajamento online.
                </p>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="w-screen h-screen">
              <div className="absolute w-3/4 h-fit bottom-48 left-32 font-jost">
                <h1 className="text-8xl font-medium mb-6">ARKA</h1>
                <p className="text-2xl font-light w-3/5">
                Somos uma consultoria especializada na gestão de acervos, desenvolvendo soluções de tecnologia 
                e treinamentos para instituições de memória. Trabalhamos com engenharia de dados, aprendizado de máquina e 
                aplicações web com foco em acesso aberto e engajamento online.
                </p>
              </div>
            </section>
            <section className="flex flex-wrap w-screen">
              <div className="w-full h-fit mx-auto px-32 pb-32">
                <div className="mb-20 font-jost">
                  <h2 className="font-jost font-bold text-3xl mb-4">Projetos</h2>
                  <ul className="text-2xl font-light space-y-2">
                    <li><a href="https://github.com/martimpassos/tropiiify" target="_blank" className="underline">tropiiify</a> exporta projetos Tropy como coleções IIIF</li>
                  </ul>
                </div>
                <div className="mb-20 font-jost">
                  <h2 className="font-jost font-bold text-3xl mb-4">Pessoas</h2>
                  <ul className="text-2xl font-light space-y-2">
                    <li><a href="https://bruno.land/" target="_blank" className="underline">Bruno Buccalon</a> é pesquisador e designer</li>
                    <li>Martim Passos é arquiteto e programador</li>
                    <li>Yuri Tavares é jornalista e programador</li>
                  </ul>
                </div>
                <div className="w-1/2 h-fit font-jost mb-20">
                  <h2 className="font-bold text-3xl mb-4">Saiba mais</h2>
                  <p className="text-2xl font-light">
                    Cadastre seu e-mail para receber novidades
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
                      placeholder="E-mail"
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
                <div className="font-jost">
                  <h2 className="font-bold text-3xl mb-4">Contato</h2>
                  <p className="text-2xl font-light">email@arka.la</p>
                </div>
              </div>
            </section>
          </>
        )) : (null)}
    </main>
  );
}
