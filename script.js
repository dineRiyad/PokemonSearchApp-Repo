const inputEl = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");

const imageEl = document.getElementById("image-div");
const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const spAttackEl = document.getElementById("special-attack");
const spDefenseEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");
const statsArr = [hpEl, attackEl, defenseEl, spAttackEl, spDefenseEl, speedEl];
let pokemonArr = [];
let pokemonDataObj = {};

const allPokemon = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
let pokemonUrl = "";

const getData = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  console.log(data);
  return data;
};
getData(allPokemon)
  .then((data) => {
    pokemonArr = data.results;
    console.log(pokemonArr);
  })
  .catch((err) => console.error("a problem occur", err));

const updateUI = (pokemon) => {
  const { height, id, name, sprites, stats, types, weight } = pokemon;
  nameEl.textContent = name;
  idEl.textContent = "#" + id;
  weightEl.textContent = "Weight: " + weight;
  heightEl.textContent = "Height: " + height;
  imageEl.innerHTML = `<img src=${sprites.front_default} alt="${name}-img" class='pokemon-img'>`;
  types.forEach((obj) => {
    typesEl.innerHTML += `<span class="${obj.type.name} box">${obj.type.name}</span> `;
  });

  stats.forEach((obj, index) => {
    for (element of statsArr) {
      if (statsArr.indexOf(element) === index) {
        const { base_stat } = obj;
        element.textContent = base_stat;
      }
    }
  });
};

const checkInput = (value) => {
  value = inputEl.value.toLowerCase();
  console.log(value);
  if (!value) {
    alert("Enter valid Pokémon Name or Id");
    return;
  }
  pokemonArr.find(({ id, name }) => {
    if (name === value || id === parseInt(value)) {
      pokemonUrl = allPokemon + "/" + value;
    }
  });
  console.log(pokemonUrl);
  if (pokemonUrl) {
    getData(pokemonUrl)
      .then((data) => {
        pokemonDataObj = data;
        console.log(pokemonDataObj);
        typesEl.innerHTML = "";
        updateUI(pokemonDataObj);
      })
      .catch((err) => console.error("a problem occur", err));
  } else {
    alert("Pokémon not Found");
  }

  pokemonUrl = "";
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});

searchBtn.addEventListener("click", checkInput);
