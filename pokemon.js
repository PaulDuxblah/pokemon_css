class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.types = data.types

        this.hp = data.stats[0].base_stat
        this.attack = data.stats[1].base_stat
        this.defense = data.stats[2].base_stat
        this.specialAttack = data.stats[3].base_stat
        this.specialDefense = data.stats[4].base_stat
        this.speed = data.stats[5].base_stat

        this.abilities = data.abilities
        this.moves = data.moves

        this.sprites = {
            frontDefault: data.sprites.front_default,
            frontFemale: data.sprites.front_female,
            frontShiny: data.sprites.front_shiny,
            frontShinyFemale: data.sprites.front_shiny_female,
            backDefault: data.sprites.back_default,
            backFemale: data.sprites.back_female,
            backShiny: data.sprites.back_shiny,
            backShinyFemale: data.sprites.back_shiny_female
        }
    }

    // Also works with the Pokédex entry
    static async fetchPokemon(nameOrPokedexEntry) {     
        return new Pokemon(
            await fetch("https://pokeapi.co/api/v2/pokemon/" + nameOrPokedexEntry)
                .then(response => response.json())
        )
    }
}
