const inputEl = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const name = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchForm = document.getElementById("search-form");

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(inputEl.value);
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", (value) => {
  value = inputEl.value;
  console.log(value);
});
