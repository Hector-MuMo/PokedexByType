import React from "react";

const PokemonItem = ({ img, name, typeOne, typeTwo, length }) => {
  return (
    <>
      <figure className="poke-card">
        <img src={img} alt={name} />
        <figcaption>
          <span>{name}</span>
          <span>
            Type:
            {length > 1 ? ` ${typeOne} / ${typeTwo}` : ` ${typeOne}`}
          </span>
        </figcaption>
      </figure>
    </>
  );
};

export default PokemonItem;

/*  */
