function displayPokemon(obj) {
  // Name
  const name = obj.name;
  const pokemonNameMessage = "Pokemon Name: " + name;
  document.getElementById("name").innerHTML = pokemonNameMessage;

  // Image
  const imageUrl = obj.sprites.front_default;
  document.getElementById("image").src = imageUrl;

  // Move List
  let move1 = obj.moves[0].move;
  let move2 = obj.moves[1].move;
  let move3 = obj.moves[2].move;
  let move4 = obj.moves[3].move;
  document.getElementById("move-list").innerHTML = `<li>
  <a href="${move1.url}">${move1.name}</a>
  </li> <li>${move2.name}</li> <li>${move3.name}</li> <li>${move4.name}</li>`;
}

function fetchPokemon() {
  const requestURL = "https://pokeapi.co/api/v2/pokemon/";

  const searchTerm = document.getElementById("search-box").value;
  console.log(requestURL + searchTerm);
  fetch(requestURL + searchTerm)
    .then((x) => x.json())
    .then((obj) => {
      displayPokemon(obj);
    });
}