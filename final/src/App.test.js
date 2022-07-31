import { fireEvent, render, screen } from "@testing-library/react"
import { Pokedex } from "pokeapi-js-wrapper";
import App from "./App"

jest.mock('pokeapi-js-wrapper')


beforeEach(() => {
  Pokedex.mockReturnValue({
    resource: jest.fn().mockResolvedValue({
      results: [{ name: 'national' }]
    }),
    getPokedexByName: jest.fn().mockResolvedValue({
      pokemon_entries: [{ entry_number: 1, pokemon_species: { name: "bulbasaur" } }],
    }),
    getPokemonByName: jest.fn().mockResolvedValue({
      abilities: [{ ability: { name: "overgrow" } }],
      name: "bulbasaur",
      types: [{ type: { name: "grass" } }],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      stats: [{ base_stat: 49, stat: { name: "attack" } }],
    }),
  });
});

afterEach(() => {
  jest.clearAllMocks();
})

test("A", async () => { render(<App />); await screen.findByText("national") })
test("B", async () => { render(<App />); fireEvent.click(await screen.findByText("View")); await screen.findByText("bulbasaur") })
test("C", async () => { render(<App />); fireEvent.click(await screen.findByText("View")); fireEvent.click(await screen.findByText("View")); await screen.findByText("bulbasaur"); expect(screen.getByText("overgrow")).toBeInTheDocument(); expect(screen.getByText("attack: 49")).toBeInTheDocument(); expect(screen.getByText("grass")).toBeInTheDocument(); })


