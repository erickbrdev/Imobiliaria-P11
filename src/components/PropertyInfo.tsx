import { Link, useParams } from "react-router-dom";
import { imoveis } from "../data/imoveis";
import Header from "./Header";
import Footer from "./Footer";
import { Paperclip } from "@phosphor-icons/react";
import Loading from "./Loading";
import { v4 } from "uuid";

export default function PropertyInfo() {
  const { id } = useParams();
  const findProperty = imoveis.find((property) => {
    return id === property.id;
  });

  return (
    <section className="bg-yellow-100">
      <Header />
      <div className="p-3">
        {findProperty === null || findProperty === undefined ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-x-scroll hide-scrollbar">
              <div className="flex gap-5 flex-nowrap  border-4 rounded-xl">
                {findProperty.images.map((img) => {
                  return (
                    <div key={v4()} className="flex-shrink-0">
                      <img
                        src={img}
                        alt="Comodos da propriedade"
                        className="w-[25rem] h-[40rem] rounded-xl border"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-24 p-3 items-center justify-center">
              <div className="flex flex-col gap-2">
                <p className="font-mono font-bold text-xl">
                  {findProperty.state}
                </p>
                <p className="font-mono font-bold text-lg">
                  {findProperty.city} - {findProperty.place}
                </p>
                <p>
                  {findProperty.description.split(",").map((item) => {
                    return (
                      <span className="flex items-center gap-1" key={v4()}>
                        <Paperclip weight="fill" /> {item} <br />
                      </span>
                    );
                  })}
                </p>
                <p className="font-mono font-bold text-gl">
                  Investimento: R${findProperty.price}
                </p>
              </div>
              <img
                src={findProperty.mainImg}
                alt="Imagem ilustrativa"
                className="rounded-2xl w-[34rem] hidden laptop:flex border-2 border-yellow-200 h-[34rem]"
              />
            </div>
          </div>
        )}
      </div>

      <Link to={"/imoveis"} className="flex justify-center pb-3">
        <button className="border-2 border-yellow-400 p-1 w-56 font-serif font-black text-lg hover:bg-yellow-400 delay-75">
          Ver mais
        </button>
      </Link>
      <Footer />
    </section>
  );
}
