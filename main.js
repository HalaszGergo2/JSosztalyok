import Pokemon from "./Pokemon.js"

const pokemon = new Pokemon("Ditto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", $(".pokemonok"))
const pokemon2 = new Pokemon("Lucario", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png", $(".pokemonok"))
pokemon.beszel()

console.log(pokemon.nev)
console.log(pokemon.mondat)
pokemon.harciero=2;
delete pokemon.nev;
console.log(pokemon)

// privát adattagok elérése getterel!
// csak getternél nem lehet átírni:
//pokemon.nev="Roland"
pokemon.mondat="Szép napunk van!"
pokemon.beszel()
