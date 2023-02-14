import json
import random


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    pokemon_names = []
    for pokemon in pokemons:
        pokemon_names.append(pokemon["name"])

    random_pokemon = random.choice(pokemon_names)

answer = input("Quem é esse Pokémon? ")
hints = len(random_pokemon) - 1
while answer != random_pokemon:
    if hints < 1:
        break
    hint = random_pokemon[:-hints]
    answer = input(f"Quem é esse Pokémon? \n > dica: {hint}... < ")
    hints -= 1
print(f"It's {random_pokemon}!")
