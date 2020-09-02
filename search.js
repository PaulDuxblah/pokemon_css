function fillForm(pokemon) {
    // Sprites
    let sprites = ""
    for (let key in pokemon.sprites) {
        if (!pokemon.sprites[key]) continue
        sprites += "<div>"
        sprites += "<img src=\"" + pokemon.sprites[key] + "\" />"
        sprites += "<span>" + key + "</span>"
        sprites += "</div>"
    }
    document.querySelector("div#pokemon-info div#sprites").innerHTML = sprites

    // Name
    document.querySelector("div#pokemon-info div#name").innerHTML = pokemon.name

    // ID
    document.querySelector("div#pokemon-info div#id span.value").innerHTML = pokemon.id

    // Abilities
    let abilities = "<ul>"
    for (let key in pokemon.abilities) {
        abilities += "<li>" + pokemon.abilities[key].ability.name + "</li>"
    }
    abilities += "</ul>"
    document.querySelector("div#pokemon-info div#abilities span.value").innerHTML = abilities

    // Types
    let types = ""
    for (let key in pokemon.types) {
        types += "<span class=\"type type-" + pokemon.types[key].type.name + "\">" + pokemon.types[key].type.name + "</span>"
    }
    document.querySelector("div#pokemon-info div#types").innerHTML = types

    // Stats
    document.querySelector("div#pokemon-info div#stats div#hp span.value").innerHTML = pokemon.hp
    document.querySelector("div#pokemon-info div#stats div#hp span.graph").style.width = pokemon.hp + "px"
    document.querySelector("div#pokemon-info div#stats div#hp span.graph").style.backgroundColor = getRGBForStat(pokemon.hp)

    document.querySelector("div#pokemon-info div#stats div#attack span.value").innerHTML = pokemon.attack
    document.querySelector("div#pokemon-info div#stats div#attack span.graph").style.width = pokemon.attack + "px"
    document.querySelector("div#pokemon-info div#stats div#attack span.graph").style.backgroundColor = getRGBForStat(pokemon.attack)

    document.querySelector("div#pokemon-info div#stats div#defense span.value").innerHTML = pokemon.defense
    document.querySelector("div#pokemon-info div#stats div#defense span.graph").style.width = pokemon.defense + "px"
    document.querySelector("div#pokemon-info div#stats div#defense span.graph").style.backgroundColor = getRGBForStat(pokemon.defense)

    document.querySelector("div#pokemon-info div#stats div#special-attack span.value").innerHTML = pokemon.specialAttack
    document.querySelector("div#pokemon-info div#stats div#special-attack span.graph").style.width = pokemon.specialAttack + "px"
    document.querySelector("div#pokemon-info div#stats div#special-attack span.graph").style.backgroundColor = getRGBForStat(pokemon.specialAttack)

    document.querySelector("div#pokemon-info div#stats div#special-defense span.value").innerHTML = pokemon.specialDefense
    document.querySelector("div#pokemon-info div#stats div#special-defense span.graph").style.width = pokemon.specialDefense + "px"
    document.querySelector("div#pokemon-info div#stats div#special-defense span.graph").style.backgroundColor = getRGBForStat(pokemon.specialDefense)

    document.querySelector("div#pokemon-info div#stats div#speed span.value").innerHTML = pokemon.speed
    document.querySelector("div#pokemon-info div#stats div#speed span.graph").style.width = pokemon.speed + "px"
    document.querySelector("div#pokemon-info div#stats div#speed span.graph").style.backgroundColor = getRGBForStat(pokemon.speed)

    document.querySelector("div#pokemon-info div#stats div#sum span.value").innerHTML = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.specialAttack + pokemon.specialDefense + pokemon.speed
}

function getRGBForStat(value) {
    return "rgb(" + (960 - value * 7) + ", " + (-70 + value * 3) + ", " + (-255 + value * 2) + ")"
}

function searchPokemon() {
    document.getElementById("search").addEventListener("submit", function(evt) {
        evt.preventDefault();

        (
            (async () => {
                await Pokemon.fetchPokemon(
                    document.querySelector("form#search input[name='pokemon']").value.toLowerCase().trim()
                )
                .then((pokemon) => {
                    fillForm(pokemon)
                })
            })()
        )
    }, true)
}

(() => {
    searchPokemon()
})()