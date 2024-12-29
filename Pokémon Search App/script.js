const searchInput = document.getElementById("search-input");
const searchButton=document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImg = document.querySelector(".pokemon-img");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getPokemon=async()=>{
  try{
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
    const data = await res.json();
    console.log(data);

    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonId.textContent = `#${data.id}`;
    pokemonWeight.textContent = `Weight: ${data.weight}`;
    pokemonHeight.textContent = `Height: ${data.height}`;
    pokemonImg.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} sprite front_default ">`;

    types.innerHTML = data.types.map((obj)=>`<span class=" type ${obj.type.name}">${obj.type.name.toUpperCase()}</span>`).join(' ');

    hp.textContent = `${data.stats[0].base_stat}`;
    attack.textContent = `${data.stats[1].base_stat}`;
    defense.textContent = `${data.stats[2].base_stat}`;
    spAttack.textContent = `${data.stats[3].base_stat}`;
    spDefense.textContent = `${data.stats[4].base_stat}`;
    speed.textContent = `${data.stats[5].base_stat}`;
    
  }catch(err){
    clearDisplay();
    searchInput.value = '';
    alert("Pokemon not found");
    console.log(`Pokemon not found ${err}`);
  }
}

const clearDisplay=()=>{
  const sprite = document.getElementById("sprite");
  if(sprite) sprite.remove();

  pokemonName.textContent='';
  pokemonId.textContent='';
  pokemonWeight.textContent='';
  pokemonHeight.textContent='';
  pokemonImg.innerHTML ='';
  types.innerHTML = '';

  hp.textContent='';
  attack.textContent='';
  defense.textContent='';
  spAttack.textContent='';
  spDefense.textContent='';
  speed.textContent='';

}

searchButton.addEventListener("click",getPokemon);
searchInput.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    getPokemon();
  }
})
