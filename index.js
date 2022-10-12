const containerPokemons = document.querySelector("#pokemons-container");

//Get pokemons
async function fetchPokemons(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  pokemonCard(data);
}

async function getPokemons() {
  const idPokemons = 150;
  for (let i = 1; i <= idPokemons; i++) {
    await fetchPokemons(i);
  }
}

function pokemonCard(pokemon) {
  const div = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const imgpokemon = pokemon.sprites.other.dream_world.front_default
  const span = document.createElement("span"); 

  div.classList.add("pokemon")

  span.textContent = `#${pokemon.id}`;
  title.textContent = pokemon.name;
  img.setAttribute("src", `${imgpokemon}`);

  div.appendChild(img);
  div.appendChild(span)
  div.appendChild(title);
  containerPokemons.appendChild(div);
}
getPokemons();
