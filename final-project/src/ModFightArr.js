import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

function ModFightArr(props) {
  ModFightArr.defaultProps = {
    addPokemontoFightArr: () => [],
    elementName: '',
    alreadyAdded: false
  };
  ModFightArr.propTypes = {
    addPokemontoFightArr: PropTypes.func,
    elementName: PropTypes.string,
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
        props.addPokemontoFightArr(props.elementName, fighting);
        mountedRef.current = false;
      }
    }, [fighting]);

  if (fighting || props.alreadyAdded) {
    buttonType = ':';
  } else {
    buttonType = '-';
  }

  function handleClick() {
    console.log('clicked '+props.elementName);
    // not dependant on state change
    mountedRef.current = true;
    // this is from the already added array... the only option is to remove
    if (props.alreadyAdded) {
      props.addPokemontoFightArr(props.elementName, false);
    }
    setFighting(!fighting);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {buttonType}
      </button>
    </div>
  );
}

export default ModFightArr;
