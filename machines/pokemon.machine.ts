import { assign, createMachine } from 'xstate';
import axios from "axios";

export interface PokemonResponse {
    count: number
    next: string
    previous: any
    results: Array<{ 
      name: string
      url: string
    }>  
}

export interface PokemonDetailResponse {
    abilities: Array<{
      ability: {
        name: string
        url: string
      }
      is_hidden: boolean
      slot: number
    }>
    base_experience: number
    forms: Array<{
      name: string
      url: string
    }>
    game_indices: Array<{
      game_index: number
      version: {
        name: string
        url: string
      }
    }>
    height: number
    held_items: Array<any>
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Array<{
      move: {
        name: string
        url: string
      }
      version_group_details: Array<{
        level_learned_at: number
        move_learn_method: {
          name: string
          url: string
        }
        version_group: {
          name: string
          url: string
        }
      }>
    }>
    name: string
    order: number
    past_types: Array<any>
    species: {
      name: string
      url: string
    }
    sprites: {
      back_default: string
      back_female: any
      back_shiny: string
      back_shiny_female: any
      front_default: string
      front_female: any
      front_shiny: string
      front_shiny_female: any
      other: {
        dream_world: {
          front_default: string
          front_female: any
        }
        home: {
          front_default: string
          front_female: any
          front_shiny: string
          front_shiny_female: any
        }
        "official-artwork": {
          front_default: string
          front_shiny: string
        }
      }
      versions: {
        "generation-i": {
          "red-blue": {
            back_default: string
            back_gray: string
            back_transparent: string
            front_default: string
            front_gray: string
            front_transparent: string
          }
          yellow: {
            back_default: string
            back_gray: string
            back_transparent: string
            front_default: string
            front_gray: string
            front_transparent: string
          }
        }
        "generation-ii": {
          crystal: {
            back_default: string
            back_shiny: string
            back_shiny_transparent: string
            back_transparent: string
            front_default: string
            front_shiny: string
            front_shiny_transparent: string
            front_transparent: string
          }
          gold: {
            back_default: string
            back_shiny: string
            front_default: string
            front_shiny: string
            front_transparent: string
          }
          silver: {
            back_default: string
            back_shiny: string
            front_default: string
            front_shiny: string
            front_transparent: string
          }
        }
        "generation-iii": {
          emerald: {
            front_default: string
            front_shiny: string
          }
          "firered-leafgreen": {
            back_default: string
            back_shiny: string
            front_default: string
            front_shiny: string
          }
          "ruby-sapphire": {
            back_default: string
            back_shiny: string
            front_default: string
            front_shiny: string
          }
        }
        "generation-iv": {
          "diamond-pearl": {
            back_default: string
            back_female: any
            back_shiny: string
            back_shiny_female: any
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
          "heartgold-soulsilver": {
            back_default: string
            back_female: any
            back_shiny: string
            back_shiny_female: any
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
          platinum: {
            back_default: string
            back_female: any
            back_shiny: string
            back_shiny_female: any
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
        }
        "generation-v": {
          "black-white": {
            animated: {
              back_default: string
              back_female: any
              back_shiny: string
              back_shiny_female: any
              front_default: string
              front_female: any
              front_shiny: string
              front_shiny_female: any
            }
            back_default: string
            back_female: any
            back_shiny: string
            back_shiny_female: any
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
        }
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
          "x-y": {
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
        }
        "generation-vii": {
          icons: {
            front_default: string
            front_female: any
          }
          "ultra-sun-ultra-moon": {
            front_default: string
            front_female: any
            front_shiny: string
            front_shiny_female: any
          }
        }
        "generation-viii": {
          icons: {
            front_default: string
            front_female: any
          }
        }
      }
    }
    stats: Array<{
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    }>
    types: Array<{
      slot: number
      type: {
        name: string
        url: string
      }
    }>
    weight: number
}


export const pokemonMachine = createMachine({
  tsTypes: {} as import("./pokemon.machine.typegen").Typegen0,
  schema: {
    context: {} as { 
      pokemonList: null | PokemonResponse
      pokemonDetails: null | PokemonDetailResponse
      pokemonName: string
      pokemonListError: unknown
      pokemonDetailsError: unknown
     },
     services: {} as {
      getPokemonList: {
        data: PokemonResponse
      },
      getPokemonDetails: {
        data: PokemonDetailResponse
      }
    },
    events: {} as { type: "onPokemonSelect", name: string } | { type: "onClickRefresh" } 
  },
  id: "POKEMON_PAGE",
  initial: "idle",
  states: {
    idle: {
      always: {
        target: "loadingPokemonList",
      },
    },
    loadingPokemonList: {
      invoke: {
        src: "getPokemonList",
        onDone: [
          {
            target: "pokemonList",
            actions: "setPokemonListData",
          },
        ],
        onError: [
          {
            target: "pokemonListError",
            actions: "setPokemonListError",
          },
        ],
      },
    },
    pokemonListError: {
      on: {
        onClickRefresh: {
          target: "loadingPokemonList",
        },
      },
    },
    pokemonList: {
      initial: "idle",
      states: {
        idle: {},
        loadingPokemonDetails: {
          invoke: {
            src: "getPokemonDetails",
            onDone: [
              {
                target: "pokemonDetails",
                actions: "setPokemonDetailsData",
              },
            ],
            onError: [
              {
                target: "pokemonDetailsError",
                actions: "setPokemonDetailsError",
              },
            ],
          },
        },
        pokemonDetailsError: {
          on: {
            onClickRefresh: {
              target: "loadingPokemonDetails",
            },
          },
        },
        pokemonDetails: {},
      },
      on: {
        onPokemonSelect: {
          target: ".loadingPokemonDetails",
          actions: "setPokemonName",
        },
      },
    },
  },
  predictableActionArguments: true,
  preserveActionOrder: true,
},  {
    services: {
      getPokemonList: async () => {
        const response = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100');
        return response.data;
      },
      getPokemonDetails: async (context, _) => {
        const response = await axios.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${context.pokemonName}`);
        return response.data;
      },
    },
    actions: {
      setPokemonListData: assign((_, event) => {
        return {pokemonList: event.data}
      }),
      setPokemonName: assign((_, event) => {
        return {pokemonName: event.name}
      }),
      setPokemonDetailsData: assign((_, event) => {
        return {pokemonDetails: event.data}
      }),
      setPokemonDetailsError: assign((_, event) => {
        return {pokemonDetailsError: event}
      }),
      setPokemonListError: assign((_, event) => {
        return {pokemonListError: event}
      })
    }
  });