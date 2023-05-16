import { Link } from "react-router-dom";
import { IProperty } from "../interfaces/Property";
import "../styles/card.css";
import { House } from "@phosphor-icons/react";

export default function Card(props: IProperty) {
  const { id, state, city, place, description, mainImg, type, price, } =
    props;

  return (
    <Link to={`/imoveis/${id}`}>
      <div className="card w-80 h-[47.5rem]">
        <div className="card-img">
          <img src={mainImg} alt={type} className="h-80 w-full" />
        </div>
        <div className="card-info">
          <p className="text-title text-xl font-mono">{state}</p>
          <p className="text-body text-lg font-mono">{`${city} - ${place}`}</p>
          <p className="text-body text-lg font-mono">{type}</p>
          <p className="h-52 overflow-auto font-serif text-lg">{description}</p>
        </div>
        <div className="card-footer">
          <span className="text-title flex flex-col justify-end">{`R$${price}`}</span>
          <div className="card-button">
            <House color="#000" weight="fill" size={25}/>
          </div>
        </div>
      </div>
    </Link>
  );
}
