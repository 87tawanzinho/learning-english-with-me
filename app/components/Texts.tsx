"use client";
import { useEffect, useState } from "react";
import { textSections } from "./VarText";
interface Translation {
  id: string;
  text: string;
}

type markedText = string;
export default function Texts() {
  const isClient = typeof window !== "undefined";
  const [seeTranslation, setSeeTranslation] = useState<Translation[]>([]);

  const handleTranslation = (id: string, text: string) => {
    const existingTranslation = seeTranslation.find((t) => t.id === id);

    if (existingTranslation) {
      setSeeTranslation((prev) => prev.filter((x) => x.id !== id));
    } else {
      setSeeTranslation((prev) => [...prev, { id, text }]);
    }
  };

  const [texts, setTexts] = useState<markedText[]>(() => {
    const storedText = isClient ? localStorage.getItem("markedTexts") : null;
    return storedText ? JSON.parse(storedText) : [];
  });

  const handleText = (textId: string) => {
    const markedTexts = texts.includes(textId);

    const updatedMarkedTexts = markedTexts
      ? texts.filter((marked) => marked !== textId)
      : [...texts, textId];

    setTexts(updatedMarkedTexts);
  };

  const sortedItems = textSections.sort((a, b) => {
    const aIsMarked = texts.includes(a.id);
    const bIsMarked = texts.includes(b.id);

    if (aIsMarked && !bIsMarked) {
      return 1; // Move marked item down
    } else if (!aIsMarked && bIsMarked) {
      return -1; // Move marked item up
    }

    return 0; // Keep the order unchanged
  });

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("markedTexts", JSON.stringify(texts));
    }
  }, [texts]);

  return (
    <div className="flex flex-col h-screen items-center mt-10 ">
      <p className="text-2xl text-yellow-200 font-bold mb-10">
        Textos Intermediarios
      </p>

      {sortedItems.map((item) => (
        <div key={item.id} className="flex flex-col h-screen items-center  ">
          <div className="flex justify-between w-11/12 lg:w-1/2 mt-10">
            <p>{item.title}</p>
            <button
              className="p-2 bg-purple-800 opacity-100"
              onClick={() => handleTranslation(item.id, item.ptText)}
            >
              Tradução
            </button>
          </div>
          <div
            onClick={() => {
              handleText(item.id);
            }}
            className={`${
              !texts.includes(item.id) ? "bg-black" : "bg-green-900"
            } w-11/12 lg:w-1/2 h-40 mt-4 relative overflow-y-auto pt-10 px-8 mt-10 pb-8`}
          >
            <p>
              <p className="text-zinc-400">
                {seeTranslation.find((t) => t.id === item.id)?.text ||
                  item.englishText}
              </p>
            </p>
          </div>
        </div>
      ))}

      <div className="pb-10"></div>
    </div>
  );
}
