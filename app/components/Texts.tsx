"use client";
import { useEffect, useState } from "react";

type markedText = string;
export default function Texts() {
  const storedText = localStorage.getItem("markedTexts");
  const [seeTranslation, setSeeTranslation] = useState(false);
  const initialTexts: markedText[] = storedText ? JSON.parse(storedText) : [];

  const [texts, setTexts] = useState<markedText[]>(initialTexts);
  const handleText = (textId: string) => {
    const markedTexts = texts.includes(textId);

    const updatedMarkedTexts = markedTexts
      ? texts.filter((marked) => marked !== textId)
      : [...texts, textId];

    setTexts(updatedMarkedTexts);
  };

  useEffect(() => {
    localStorage.setItem("markedTexts", JSON.stringify(texts));
  }, [texts]);

  return (
    <div className="flex flex-col h-screen items-center mt-20 ">
      <div className="flex justify-around items-center mb-4 w-11/12 lg:3/6">
        <p className="">Jenna</p>
        <button
          onClick={() => setSeeTranslation(!seeTranslation)}
          className="bg-white text-black  font-bold rounded bg-green-400 px-2"
        >
          Tradução
        </button>
      </div>
      <div
        onClick={() => handleText("text1")}
        id="text1"
        className={` ${
          texts.includes("text1") && "bg-green-600 text-white"
        }  w-11/12 lg:w-3/6 h-48 rounded-lg overflow-y-auto  bg-black p-4 `}
      >
        {!seeTranslation ? (
          <p className=" rounded-2xl cursor-pointer  ">
            {" "}
            Jenna is a professional cook and today is her first day in a new
            restaurant. She is very excited, but also nervous because she
            doesn’t want to get late for her first day. She has to be there at 8
            o’clock and it is already 7. She is not ready yet and she is unsure
            how she should go to work. She is thinking maybe it is too late to
            take her car. She might get stuck in traffic and then for sure, she
            will be late. The same thing will happen if she calls a taxi.
            Instead, she thinks she should take the metro. She gets dressed
            quickly; she grabs some coffee and a sandwich from the coffee shop
            down the road and gets in the next metro going towards the direction
            of the restaurant. Time is running out and she is getting more and
            more anxious. When the doors open to the metro station, she starts
            running. Happily, she arrives right on time for her first day.{" "}
          </p>
        ) : (
          <p className=" rounded-2xl cursor-pointer  ">
            {" "}
            Jenna é uma cozinheira profissional e hoje é seu primeiro dia em um
            novo restaurante. Ela está muito animada, mas também nervosa porque
            não quer se atrasar para o primeiro dia. Ela tem que estar lá às 8
            horas e já são 7. Ela ainda não está pronta e não tem certeza de
            como deve ir trabalhar. Ela está pensando que talvez seja tarde
            demais para pegar seu carro. Ela pode ficar presa no trânsito e, com
            certeza, chegará atrasada. A mesma coisa acontecerá se ela chamar um
            táxi. Em vez disso, ela acha que deveria pegar o metrô. Ela se veste
            rapidamente; ela pega um café e um sanduíche na cafeteria da rua e
            pega o próximo metrô indo na direção do restaurante. O tempo está se
            esgotando e ela está ficando cada vez mais ansiosa. Quando as portas
            se abrem para a estação de metrô, ela começa a correr. Felizmente,
            ela chega na hora certa para seu primeiro dia.{" "}
          </p>
        )}
      </div>
    </div>
  );
}
