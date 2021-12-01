import React from 'react';

const PrimraApp = (props) => {  
    ///const saludo = 'Hola Mundo React'; 
    /**const saludo = {
        texto: 'Hola Mundo React',
        autor: 'Eduardo Flores'
    }*/
    console.log(props);
    return (
        <>
            <h1>{props.saludo}</h1>
            <p>Primera App de React</p>
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
export default PrimraApp;
