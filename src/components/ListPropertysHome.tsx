/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 } from "uuid";
import { imoveis } from "../data/imoveis";
import { IProperty } from "../interfaces/Property";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function ListPropertysHome() {
  return (
    <section className="flex flex-col items-center justify-center p-3 bg-yellow-200">
      <h1 className="text-xl font-mono font-bold border-b-2 border-yellow-400 w-72 text-center">
        Imóveis para você!
      </h1>

      <div className="flex flex-wrap justify-evenly gap-3 pt-3">
        {imoveis.slice(0, 8).map((item: IProperty | any) => {
          return (
            <Card
              key={v4()}
              id={item.id}
              state={item.state}
              city={item.city}
              place={item.place}
              description={item.description.split(",").map((item: string) => {
                return (
                  <span key={v4()}>
                    {item} <br />
                  </span>
                );
              })}
              mainImg={item.mainImg}
              images={item.images}
              type={item.type}
              price={item.price}
            />
          );
        })}
      </div>
      <Link to="/imoveis" className="mt-3">
        <button className="border-2 p-2 w-44 border-yellow-400 font-bold font-serif text-xl hover:bg-yellow-400">
          Ver mais
        </button>
      </Link>
    </section>
  );
}
