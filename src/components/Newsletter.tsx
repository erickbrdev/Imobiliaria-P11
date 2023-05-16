import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <section className="flex flex-col sm:flex-row gap-5 p-3 bg-yellow-300">
      <div className="flex-1">
        <img
          src="https://i.postimg.cc/G3PLnNFf/real-estate-broker-agent-presenting-consult-customer-decision-making-sign-insurance-form-agreement.jpg"
          alt="Compromisso"
          className="w-full h-[30rem] rounded-xl border border-yellow-900"
        />
        <p className="font-serif font-bold text-xl">Próspero 11 Imóveis!</p>
        <p className="font-serif text-lg">O seu lar, o nosso compromisso.</p>
      </div>
      <div className="flex-1">
        <img src="https://i.postimg.cc/4NwJZZnB/Apartamento.jpg" alt="Dicas valiosas" className="w-full h-[30rem] rounded-xl border border-yellow-900"/>
        <p className="font-serif font-bold text-xl">
          Veja como escolher o lugar ideal!!
        </p>
        <Link to="/blog" className="font-serif text-lg">
          Confira algumas dicas para você escolher o <b className="text-yellow-900 hover:border-b-2 border-yellow-950">SEU LUGAR PERFEITO</b>!
        </Link>
      </div>
    </section>
  );
}
