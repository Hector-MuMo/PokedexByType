import React, { useState, useEffect } from "react";

const PokemonInfo = ({ url }) => {
  const [pokemon, setPokemon] = useState();

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

  return (
    <>
      {pokemon === undefined ? (
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
      )}
    </>
  );
};

export default PokemonInfo;
