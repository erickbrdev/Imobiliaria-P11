import SocialMedia from "./SocialMedia";

export default function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer
      className={`flex flex-col items-center justify-center bg-yellow-400 font-serif text-sm font-semibold 
    sm:text-lg gap-3 p-2`}
    >
      <p className="font-mono font-bold text-xl sm:text-2xl">Confira nossas Redes Sociais!</p>
      <SocialMedia />
      <p className="">
        {`Copyright © ${data} Próspero 11 - Todos os direitos reservados`}
      </p>
    </footer>
  );
}
