"use client";
import { useEffect, useState } from "react";

type markedText = string;
export default function Texts() {
  const storedText = localStorage.getItem("markedTexts");
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
      <div
        onClick={() => handleText("text1")}
        id="text1"
        className={` ${
          texts.includes("text1") && "bg-green-600 text-white"
        }  w-11/12 lg:w-3/6 h-48 rounded-lg overflow-y-auto  bg-black p-4 `}
      >
        <p className=" rounded-2xl cursor-pointer  ">
          Jenna is a professional cook and today is her first day in a new
          restaurant. She is very excited, but also nervous because she doesn’t
          want to get late for her first day. She has to be there at 8 o’clock
          and it is already 7. She is not ready yet and she is unsure how she
          should go to work. She is thinking maybe it is too late to take her
          car. She might get stuck in traffic and then for sure, she will be
          late. The same thing will happen if she calls a taxi. Instead, she
          thinks she should take the metro. She gets dressed quickly; she grabs
          some coffee and a sandwich from the coffee shop down the road and gets
          in the next metro going towards the direction of the restaurant. Time
          is running out and she is getting more and more anxious. When the
          doors open to the metro station, she starts running. Happily, she
          arrives right on time for her first day.
        </p>
      </div>
    </div>
  );
}
