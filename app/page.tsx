import Image from "next/image";
import Texts from "./components/Texts";
import dynamic from "next/dynamic";
const DynamicTexts = dynamic(() => import("./components/Texts"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="text-white">
      <div className="flex flex-col justify-center items-center p-10">
        <p className="text-md lg:text-4xl">Hey, aprenda inglês comigo</p>
        <p className="text-xs text-gray-400  mt-10">
          Será colocado diversos textos, e seu objetivo é entende-los, pouco a
          pouco e ir marcando como <span className="text-green-400">verde</span>
          , para ir marcando, basta clicar no texto. use o metodo que quiser
          para aprender ✔
        </p>
      </div>
      <DynamicTexts />
    </main>
  );
}
