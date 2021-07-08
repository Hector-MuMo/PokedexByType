import React, { useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";

const Pokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState();
  const [typeTwo, setTypeTwo] = useState("");

  //urlPokemon
  useEffect(() => {
    try {
      const getinfoPkmn = async () => {
        let pokeinfo = await fetch(url).then((result) => result.json());

        setPokemon(pokeinfo);
      };

      getinfoPkmn();
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  /*  useEffect(() => {
    if (pokemon.types.length > 1) {
      setTypeTwo(pokemon.types[1].type.name);
    } else {
      setTypeTwo("");
    }
  }, [pokemon]); */

  return (
    <>
      {pokemon && (
        <PokemonItem
          img={pokemon.sprites.front_default}
          name={pokemon.name}
          typeOne={pokemon.types[0].type.name}
          //por esta linea falla
          //typeTwo={pokemon.types[1].type.name}
          typeTwo={typeTwo}
          length={pokemon.types.length}
        />
      )}

      {/*Funciona correctamente pokemon === undefined ? (
        false
      ) : (
        <figure className="poke-card">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <figcaption>
            <span>{pokemon.name}</span>
            <span>
              Type:
              {pokemon.types.length > 1
                ? ` ${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
                : ` ${pokemon.types[0].type.name}`}
            </span>
          </figcaption>
        </figure>
      ) */}
    </>
  );
};

export default Pokemon;
