import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

function ModPokeArr(props, addPokemontoFightArr, removePokemon) {
  ModPokeArr.defaultProps = {
    element: {},
    alreadyAdded: false
  };
  ModPokeArr.propTypes = {
    element: PropTypes.object,
    alreadyAdded: PropTypes.bool
  };

  const [fighting, setFighting] = useState(false);
  const mountedRef = useRef();
  let buttonType;

  /**
  * useEffect() wrapped around Parent method to ensure 
  * item is mounted & only added to array once
  */
  useEffect(() => {
      if (mountedRef.current) {
        addPokemontoFightArr(props.elementName, fighting);
        mountedRef.current = false;
      }
    }, [fighting]);

  if (fighting || props.alreadyAdded) {
    buttonType = ':';
  } else {
    buttonType = '-';
  }

  function handleClickADD() {
    console.log('clicked '+props.elementName.name);
    addPokemontoFightArr();
  }
  function handleClickREMOVE() {
    console.log('clicked '+props.elementName.name);
    removePokemon();
  }

  return (
    <div>
      <button onClick={handleClickADD}>
        ADD
      </button>
      <button onClick={handleClickREMOVE}>
        REMOVE
      </button>
    </div>
  );
}

export default ModPokeArr;
