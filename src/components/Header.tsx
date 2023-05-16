import { Link } from "react-router-dom";
import logo from "../assets/logop11.jpeg";


export default function Header() {
  return (
    <header
      className={`bg-yellow-400 flex items-center flex-col gap-1 justify-center
       sm:flex-row  sm:justify-evenly`}
    >
      <div className="p-1">
        <img
          src={logo}
          alt="Logotipo empresarial"
          className="w-16 rounded-full"
        />
      </div>

      <nav className="flex gap-6 font-serif text-lg font-semibold">
        <Link to="/">Inicio</Link>
        <Link to="/imoveis">Imoveis</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
