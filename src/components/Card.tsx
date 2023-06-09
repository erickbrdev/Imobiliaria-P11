import { Link } from "react-router-dom";
import { IProperty } from "../interfaces/Property";
import "../styles/card.css";
import { House } from "@phosphor-icons/react";

export default function Card(props: IProperty) {
  const { id, state, city, place, description, mainImg, type, price, } =
    props;

  return (
    <Link to={`/imoveis/${id}`}>
      <div className="card w-[20rem] h-[47rem]">
        <div className="card-img">
          <img src={mainImg} alt={type} className="h-80 w-full" />
        </div>
        <div className="card-info">
          <p className="text-title text-xl font-serif">{city} - {state}</p>
          <p className="text-body text-lg font-serif">{place}</p>
          <p className="text-body text-lg font-serif">{type}</p>
          <p className="h-52 overflow-auto font-serif text-lg">{description}</p>
        </div>
        <div className="card-footer">
          <span className="text-title mt-3">{`R$${price}`}</span>
          <div className="card-button">
            <House color="#000" weight="fill" size={25}/>
          </div>
        </div>
      </div>
    </Link>
  );
}
