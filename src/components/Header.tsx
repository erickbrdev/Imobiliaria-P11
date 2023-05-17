import { Link } from "react-router-dom";
import logo from "../assets/logop11.jpeg";

export default function Header() {
  return (
    <header
      className={`bg-yellow-300 flex items-center flex-col gap-1 justify-center
       sm:flex-row  sm:justify-evenly h-auto p-1`}
    >
      <div className="p-1 font-serif text-lg sm:text-xl font-black flex items-center gap-2">
        <img
          src={logo}
          alt="Logotipo empresarial"
          className="w-24 sm:w-[7rem] rounded-full"
        />
        <h1 className="text-slate-900">Próspero11 Imóveis</h1>
      </div>

      <nav className="flex gap-6 font-serif text-lg font-semibold">
        <Link className="hover:border-b border-slate-900" to="/">
          Início
        </Link>
        <Link className="hover:border-b border-slate-900" to="/imoveis">
          Imóveis
        </Link>
        <Link className="hover:border-b border-slate-900" to="/blog">
          Blog
        </Link>
        <Link className="hover:border-b border-slate-900" to="/contato">
          Contato
        </Link>
      </nav>
    </header>
  );
}
