/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { imoveis } from "../data/imoveis";
import Card from "./Card";
import { IProperty } from "../interfaces/Property";

import { v4 } from "uuid";
import LoaderFilter from "./LoaderFilter";

export default function FilterType() {
  const [filterByType, setFilterByType] = useState("Todos");

  const filterPropertyByType = imoveis.filter((property) => {
    if (filterByType === "Todos") {
      return true;
    } else {
      return property.type === filterByType;
    }
  });

  return (
    <main>
      <section className="flex flex-col sm:flex-row w-full justify-between">
        <div>
          <select
            name="select"
            value={filterByType}
            onChange={(e) => setFilterByType(e.target.value)}
            className="bg-yellow-50 border-yellow-400 border-2 p-1 font-serif font-semibold w-72 mb-5"
          >
            <option value="Todos">Todos</option>
            <option value="Casa">Casa</option>
            <option value="Condominio">Condominio</option>
            <option value="Terreno">Terreno</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Predio">Predio</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-5 flex-1">
          {filterPropertyByType === undefined ||
          filterPropertyByType.length === 0 ? <div className="gap-5 flex h-screen items-center flex-col justify-center">
            <LoaderFilter /> 
            <p className="text-xl font-mono font-black">Não temos {filterByType.toLowerCase()} disponivel no momento! </p> 
          </div>: (
            filterPropertyByType.map((item: IProperty | any) => {
              return (
                <Card
                  key={v4()}
                  id={item.id}
                  state={item.state}
                  city={item.city}
                  place={item.place}
                  description={item.description
                    .split(",")
                    .map((item: string) => {
                      return (
                        <span key={v4()} className="flex items-center gap-1">
                          {" "}
                          {item} <br />
                        </span>
                      );
                    })}
                  mainImg={item.mainImg}
                  images={[]}
                  type={item.type}
                  price={item.price}
                />
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
