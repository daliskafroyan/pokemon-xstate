import { createTestMachine, createTestModel } from '@xstate/test';
import { describe, it } from 'vitest';
import { PokemonDetailResponse, PokemonResponse, pokemonMachine } from '../machines/codegen.machine';

const machine = createTestMachine({
  tsTypes: {} as import("./Home.test.typegen").Typegen0,
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
  initial: "IDLE",
  states: {
    IDLE: {
      always: {
        target: "POKEMON_LIST",
      },
    },
    POKEMON_LIST: {
      initial: "SHOW_POKEMON_LIST_LOADING",
      states: {
        SHOW_POKEMON_LIST_LOADING: {},
        SHOW_POKEMON_LIST: {
          on: {
            onPokemonSelect: {
              target: "#POKEMON_PAGE.POKEMON_DETAILS",
              actions: "setPokemonName",
              description: "user press a pokemon",
            },
          },
        },
        SHOW_POKEMON_LIST_ERROR: {
          on: {
            onClickRefresh: {
              target: "SHOW_POKEMON_LIST_LOADING",
            },
          },
        },
      },
    },
    POKEMON_DETAILS: {
      initial: "SHOW_POKEMON_DETAILS_LOADING",
      states: {
        SHOW_POKEMON_DETAILS_LOADING: {},
        SHOW_POKEMON_DATA: {
          on: {
            onPokemonSelect: {
              target: "#POKEMON_PAGE.POKEMON_DETAILS",
              actions: "setPokemonName",
            },
          },
        },
        SHOW_POKEMON_DETAILS_ERROR: {
          on: {
            onClickRefresh: {
              target: "SHOW_POKEMON_DETAILS_LOADING",
            },
          },
        },
      },
    },
  },
});

describe('My app', () => {
  createTestModel(machine)
    .getPaths()
    .forEach((path) => {
      it(path.description, async () => {
        await path.test({
          states: {},
          events: {},
        });
      });
    });
});