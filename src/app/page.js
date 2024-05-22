"use client";
import { useState, useEffect } from "react";
import Gradient from '../components/Gradient';
import Form from '../components/Form'

export default function Home() {
  const [email, setEmail] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <main className="w-full h-screen">
      {isReady ? (
        <>
          <section id="home" className="flex flex-col w-full h-full font-jost">
            <Gradient className="absolute" />
            <div className="absolute w-10/12 md:w-1/2 max-w-prose h-fit bottom-[20vh] ml-[8vw]">
              <h1 className="text-7xl md:text-8xl font-medium mb-6 ">ARKA</h1>
              <p className="text-xl md:text-2xl font-light">
                Somos uma consultoria de acervos digitais, especializada em pesquisa e
                desenvolvimento de tecnologias para instituições de memória e coleções particulares.
              </p>
            </div>
          </section>
          <section className="flex flex-wrap w-full font-jost mb-10">
            <div id="o-que-fazemos" className="w-10/12 h-fit mb-20 ml-[8vw]">
              <div className="max-w-prose">
                <h2 className="font-bold text-3xl mb-4">O que fazemos</h2>
                <ul className="text-xl font-light space-y-2">
                  <li>Trabalhamos com inteligência artificial e padrões abertos como o{' '}
                    <a href="https://iiif.io/" target="_blank" className="underline">IIIF</a>{' '}
                    na digitalização, catalogação e difusão de obras de arte e documentos históricos na internet.</li>
                </ul>
              </div>
            </div>
            <div id="projetos" className="w-10/12 h-fit mb-20 ml-[8vw]">
              <div className="">
                <h2 className="font-bold text-3xl mb-4">Projetos</h2>
                <ul className="text-xl font-light space-y-2">
                  <li><a href="https://github.com/martimpassos/tropiiify" target="_blank" className="underline">tropiiify</a> exporta projetos Tropy como coleções IIIF</li>
                </ul>
              </div>
            </div>
            <div id="pessoas" className="w-10/12 h-fit mb-20 ml-[8vw]">
              <h2 className="font-bold text-3xl mb-4">Pessoas</h2>
              <ul className="text-xl font-light space-y-2">
                <li>Anita Lucchesi é historiadora e pesquisadora</li>
                <li><a href="https://bruno.land/" target="_blank" className="underline">Bruno Buccalon</a> é pesquisador e designer</li>
                <li>Martim Passos é pesquisador e programador</li>
                <li>Yuri Tavares é jornalista e programador</li>
              </ul>
            </div>
            <div id="mailing" className="w-10/12 h-fit mb-20 ml-[8vw]">
              <h2 className="font-bold text-3xl mb-4">Saiba mais</h2>
              <p className="text-xl font-light">
                Cadastre seu e-mail para receber novidades
              </p>
              <Form />
            </div>
            <div id="contato" className="w-10/12 h-fit mb-20 ml-[8vw]">
              <h2 className="font-bold text-3xl mb-4">Contato</h2>
              <p className="text-xl font-light">arka@arka.la</p>
            </div>
          </section>
        </>
      )
        : (null)}
    </main>
  );
}
