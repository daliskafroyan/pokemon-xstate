
// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    "": { type: "" };
    "done.invoke.POKEMON_PAGE.loadingPokemonList:invocation[0]": { type: "done.invoke.POKEMON_PAGE.loadingPokemonList:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
    "done.invoke.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]": { type: "done.invoke.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
    "error.platform.POKEMON_PAGE.loadingPokemonList:invocation[0]": { type: "error.platform.POKEMON_PAGE.loadingPokemonList:invocation[0]"; data: unknown };
    "error.platform.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]": { type: "error.platform.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]"; data: unknown };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    "getPokemonDetails": "done.invoke.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]";
    "getPokemonList": "done.invoke.POKEMON_PAGE.loadingPokemonList:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    "setPokemonDetailsData": "done.invoke.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]";
    "setPokemonDetailsError": "error.platform.POKEMON_PAGE.pokemonList.loadingPokemonDetails:invocation[0]";
    "setPokemonListData": "done.invoke.POKEMON_PAGE.loadingPokemonList:invocation[0]";
    "setPokemonListError": "error.platform.POKEMON_PAGE.loadingPokemonList:invocation[0]";
    "setPokemonName": "onPokemonSelect";
  };
  eventsCausingDelays: {

  };
  eventsCausingGuards: {

  };
  eventsCausingServices: {
    "getPokemonDetails": "onClickRefresh" | "onPokemonSelect";
    "getPokemonList": "" | "onClickRefresh";
  };
  matchesStates: "idle" | "loadingPokemonList" | "pokemonList" | "pokemonList.idle" | "pokemonList.loadingPokemonDetails" | "pokemonList.pokemonDetails" | "pokemonList.pokemonDetailsError" | "pokemonListError" | { "pokemonList"?: "idle" | "loadingPokemonDetails" | "pokemonDetails" | "pokemonDetailsError"; };
  tags: never;
}
