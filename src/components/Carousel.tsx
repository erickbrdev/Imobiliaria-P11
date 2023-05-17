import { useState, useEffect } from "react";
import familia from "../assets/Familia.jpg";
import familia2 from "../assets/Familia2.jpg";
import familia3 from "../assets/Familia3.jpg";
import TextWrite from "./TextEffect";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [familia, familia2, familia3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      className={`w-full flex justify-center items-center p-1 bg-yellow-100 
    sm:p-5`}
    >
      <img
        src={images[index]}
        alt="Imagens de casas"
        className="sm:w-5/6 sm:h-[30rem] rounded-2xl relative"
      />

      <div className="absolute flex justify-center text-sm sm:text-xl md:text-2xl ladivtop:text-3xl font-mono text-yellow-950">
        <TextWrite text={"Aqui seus sonhos ganham um novo lar!"} />
      </div>
    </section>
  );
}
