import React, {useState} from 'react'
import PropTypes from 'prop-types'

const HooksCounterApp = ({value}) => {

    ///const state= useState();
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
        ///setCounter((c) => c + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>HooksCounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )
}

HooksCounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default HooksCounterApp
