export const initialState = [{name: '', type: '', ability: '' }];

export function pokemonArrayReducer(state, action) {
  console.log(action.type + ' ' + action.pokeElement.name);
  switch (action.type) {
    case 'remove_Pokemon': {
      return state.filter((a) => a.name !== action.pokeElement.name);
    }
    case 'add_Pokemon': {
      return [].concat(state,[action.pokeElement]);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
} // end function 

