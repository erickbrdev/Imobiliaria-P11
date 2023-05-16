import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <section className="flex flex-col gap-5 p-3 bg-yellow-50 justify-center items-center">      
    
        <img src="https://i.postimg.cc/4NwJZZnB/Apartamento.jpg" alt="Dicas valiosas" className="w-[35em] h-auto rounded-xl border border-yellow-900 shadow-xl shadow-slate-700"/>
        <p className="font-serif font-bold text-xl">
          Veja como escolher o lugar ideal!!
        </p>
        <Link to="/blog" className="font-serif text-lg text-center">
          Confira algumas dicas para você escolher o <b className="text-yellow-900 hover:border-b-2 border-yellow-950">SEU LUGAR PERFEITO</b>!
        </Link>
      
    </section>
  );
}
