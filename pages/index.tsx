import React from 'react';
import { useMachine } from '@xstate/react';
import { pokemonMachine } from '../machines/pokemon.machine';

function App() {
  const [state, send] = useMachine(pokemonMachine);

  const PokemonList = () => {
    if (state.matches('loadingPokemonList')) {
      return <div>Loading Pokemon list...</div>;
    }

    if (state.matches('pokemonListError')) {
      return (
        <div>
          Error loading Pokemon list.
          <button onClick={() => send({ type: 'onClickRefresh' })}>Refresh</button>
        </div>
      );
    }

    if (state.matches('pokemonList')) {
      return (
        <ul>
          {state.context.pokemonList?.results.map((pokemon) => (
            <li key={pokemon.name} onClick={() => send({ type: 'onPokemonSelect', name: pokemon.name })}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      );
    }

    return null
  };

  const PokemonDetails = () => {
    if (state.matches('pokemonList.loadingPokemonDetails')) {
      return <div>Loading Pokemon details...</div>;
    }

    if (state.matches('pokemonList.pokemonDetailsError')) {
      return (
        <div>
          Error loading Pokemon details.
          <button onClick={() => send({ type: 'onClickRefresh' })}>Refresh</button>
        </div>
      );
    }

    if (state.matches('pokemonList.pokemonDetails')) {
      return (
        <div>
          <h2>{state.context.pokemonDetails?.name}</h2>
          <p>Height: {state.context.pokemonDetails?.height}</p>
          <p>Weight: {state.context.pokemonDetails?.weight}</p>
        </div>
      );
    }

    return null
  };

  return (
    <div>
      <PokemonList />
      <PokemonDetails />
    </div>
  );
}

export default App;