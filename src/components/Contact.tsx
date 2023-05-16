import { Link } from "react-router-dom";
import logo from "../assets/logop11.jpeg";

import { Article, House, HouseSimple, Phone } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section className="flex flex-col justify-around items-center bg-yellow-100 p-5 gap-10
    laptop:flex-row">
      <div>
        <img
          src={logo}
          alt="Logotipo empresarial"
          className={`w-32 rounded-full border-2 border-yellow-400`}
        />
      </div>

      <nav className="flex flex-col gap-3 font-serif font-semibold">
        <Link className="flex items-center gap-1" to="/">
          <HouseSimple size={20} weight="fill"/>
          Inicio
        </Link>

        <Link className="flex items-center gap-1" to="/imoveis">
          <House size={20} weight="fill"/> 
          Imoveis
        </Link>

        <Link className="flex items-center gap-1" to="/blog">
          <Article size={20} weight="fill"/>
          Blog
        </Link>

        <Link className="flex items-center gap-1" to="/contato">
          <Phone size={20} weight="fill"/>
          Contato
        </Link>
      </nav>

      <div>
        <p className="text-lg font-mono font-black sm:w-[40rem]">
          Não perca mais tempo, venha para a nossa imobiliária e realize o sonho
          da casa própria agora mesmo!
        </p>
      </div>
    </section>
  );
}
