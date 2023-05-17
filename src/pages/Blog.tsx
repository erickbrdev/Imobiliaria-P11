import Footer from "../components/Footer";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";

export default function Blog() {
  return (
    <main className="">
      <Whatsapp />
      <Header />
      <section className="flex flex-col p-3 gap-2 bg-yellow-100 xl:flex-row">
        <div className="flex-1 items-center">
          <img
            src="https://i.postimg.cc/qqSzGTns/Casa-Z.jpg"
            alt="Casa com piscina"
            className="w-full sm:h-[50rem] h-auto border border-yellow-400 rounded-xl xl:h-[52rem]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5 font-serif font-semibold">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-mono border-b-2 border-yellow-400  sm:w-[28rem] text-center text-lg xl:text-xl">
              Como é a sua rotina?
            </h1>
            <p>
              O que você e sua família costumam fazer todos os dias? Procurar
              por um bairro que facilite a rotina dos moradores é o primeiro
              passo para acertar na decisão. Se você tem filhos, por exemplo,
              pode ser uma boa aposta optar por um bairro próximo à escola. Caso
              não seja possível morar perto dos locais que fazem parte da rotina
              dos moradores - como escola e trabalho - procure por bairros que
              ofereçam fácil acesso a esses pontos. Verifique as condições de
              trânsito e as linhas de ônibus ou metrô próximas à região.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-mono border-b-2 border-yellow-400  sm:w-[28rem] text-center text-lg lg:text-xl">
              Seu estilo de vida?
            </h1>
            <p>
              Aqui é importante ter em mente quais são suas principais
              necessidades e prioridades. Ainda que bairros familiares possam
              ser super tranquilos, podem não ser a escolha mais interessante
              para quem tem uma vida social ativa e gosta de estar em locais
              mais badalados, por exemplo. Do mesmo modo, uma família com
              crianças pequenas pode não se dar bem em um bairro universitário,
              que costuma ser mais movimentado.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-mono border-b-2 border-yellow-400 sm:w-[28rem] text-center text-lg lg:text-xl">
              Segurança é muito importante!
            </h1>
            <p>
              Segurança é indispensável. Antes de bater o martelo em um imóvel,
              não deixe de avaliar se o bairro é seguro. Observe as condições de
              iluminação pública, policiamento, câmeras de segurança e movimento
              na rua, especialmente durante a noite.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-mono border-b-2 border-yellow-400 sm:w-[28rem] text-center text-lg lg:text-xl">
              Trace seu perfil e suas expectativas!
            </h1>
            <p>
              Saber bem o que você quer vai diminuir as chances de acabar se
              mudando para um local equivocado. Depois de pensar em tudo o que é
              importante para você e avaliar suas possibilidades, vale a pena
              colocar tudo no papel para visualizar melhor o cenário geral e
              funciona como uma bússola para cada passo da procura.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-mono border-b-2 border-yellow-400 sm:w-[28rem] text-center text-lg lg:text-xl">
              Não deixe de lado o lazer e a vida social
            </h1>
            <p>
              Sabemos que as preocupações diárias existem, pensando nisso, não
              podemos abrir mão de um pouco de diversão. Por isso, um dos pontos
              que precisam ser observados no momento de escolher um bairro para
              morar é o lazer que o local tem a oferecer. Assim, você deve
              buscar por bairros que contem fácil acesso a parques, cinemas,
              shoppings, teatros, bares e restaurantes, clubes e locais que você
              procura para se divertir com a família e amigos.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
