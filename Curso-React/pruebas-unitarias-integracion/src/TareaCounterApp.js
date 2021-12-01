import React, {useState} from 'react';
import PropTypes from 'prop-types';


const TareaCounterApp = ({value}) => {

    let [counter] = useState(0);

    /// handleAdd
    const handleAdd = () => {
        counter++;
    }

    return (
        <>
            <h1>Tarea Counter App</h1>
            <h3>{counter}</h3>
            <button onClick={handleAdd}>Incrementar</button>
        </>
    );
} 

TareaCounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default TareaCounterApp;

/**
 * 
 *      Tip: para crear un componente funcional de manera mas rapida y sencilla
 * 
 *      rafcp + tab (tabulador)
 *      
 *      rafcp = significa create un funcional component con propTypes
 * 
 */
