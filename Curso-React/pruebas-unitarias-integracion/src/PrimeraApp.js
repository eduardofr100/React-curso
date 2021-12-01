import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, text}) => {  
    ///const saludo = 'Hola Mundo React'; 
    /**const saludo = {
        texto: 'Hola Mundo React',
        autor: 'Eduardo Flores'
    }*/
    ///console.log(props);

    return (
        <>
            <h1>{saludo}</h1>
            <p>{text}</p>
        </>
    );
    /**return (
        <>
            <h1>{JSON.stringify(saludo)}</h1>
            <p>Primera App de React</p>
        </>
    );*/
    /**return (
        <>
            <pre>{JSON.stringify(saludo, null, 3)}</pre>
            <p>Primera App de React</p>
        </>
    );*/
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    text: 'Primera App de React'
}

export default PrimeraApp;
