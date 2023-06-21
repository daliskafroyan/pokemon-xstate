
// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {

  };
  missingImplementations: {
    actions: "setPokemonName";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    "setPokemonName": "onPokemonSelect";
  };
  eventsCausingDelays: {

  };
  eventsCausingGuards: {

  };
  eventsCausingServices: {

  };
  matchesStates: "IDLE" | "POKEMON_DETAILS" | "POKEMON_DETAILS.SHOW_POKEMON_DATA" | "POKEMON_DETAILS.SHOW_POKEMON_DETAILS_ERROR" | "POKEMON_DETAILS.SHOW_POKEMON_DETAILS_LOADING" | "POKEMON_LIST" | "POKEMON_LIST.SHOW_POKEMON_LIST" | "POKEMON_LIST.SHOW_POKEMON_LIST_ERROR" | "POKEMON_LIST.SHOW_POKEMON_LIST_LOADING" | {
    "POKEMON_DETAILS"?: "SHOW_POKEMON_DATA" | "SHOW_POKEMON_DETAILS_ERROR" | "SHOW_POKEMON_DETAILS_LOADING";
    "POKEMON_LIST"?: "SHOW_POKEMON_LIST" | "SHOW_POKEMON_LIST_ERROR" | "SHOW_POKEMON_LIST_LOADING";
  };
  tags: never;
}
