document.querySelector("#search").addEventListener("click", getPokemon);


function getPokemon() {

    const name = document.querySelector("#pokemonName").value.toLowerCase();
    const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"+name;

    fetch(pokemonURL)
    .then((response) => response.json())
    .then((data) => {

    document.querySelector(".pokemonBox").innerHTML = `
    
    <div>
    
    <img src="${data.sprites.other["official-artwork"].front_default}" 
        alt="${data.name}"/>
    
    </div>

    <div class="pokemonInfo">
    
    <h1>${data.name}</h1>
    <h3>ID: ${data.id}</h3>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
    <p>Base Experience: ${data.base_experience}</p>
   
    </div>

    </div>
    
    `;

    }).catch((error) =>{
        console.log("Pokemon not found", error);
    });

    
}

getPokemon();