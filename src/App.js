import React, { useState, useEffect } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  const [inputValue, setInputValue] = useState("Ice");
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(10);

  //urlPokeType
  useEffect(() => {
    const getPokemons = async () => {
      try {
        let url = `https://pokeapi.co/api/v2/type/${inputValue.toLowerCase()}/`,
          urlPokemons = await fetch(url).then((result) => result.json());

        setData(urlPokemons.pokemon);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemons();
  }, [inputValue]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>POKÉMON</h1>
        <div className="search">
          <label htmlFor="">Search a Pokemon by type:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label htmlFor="">Select amount of Pokemons</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={() => {
              setInputValue("");
              setAmount(0);
            }}
          >
            Clear
          </button>
        </div>
        <div className="pokemons">
          {data.length <= 0 ? (
            <h3>Loading...</h3>
          ) : (
            data.map((u, index) =>
              index < amount ? (
                <Pokemon key={index} url={u.pokemon.url} />
              ) : (
                false
              )
            )
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
