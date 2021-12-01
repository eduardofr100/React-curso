/**
 * function saludar(nombre) {
        return `Hola ${nombre}`;
    }
 */

/**
 * 
 * funcion de flecha
 * const saludar = (nombre) ={
        return `Hola ${nombre}`;
    }

    const saludar = function(nombre) {`Hola ${nombre}`;

    retornar un objeto con funcion flecha
    const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });
    const user = getUser();
    console.log(user);
 *
 */    

/**
 * const saludar = function(nombre) {
        return `Hola ${nombre}`;
    }
    console.log(saludar('Gustavo'));
 * 
 */

const getusuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getusuarioActivo('Gustavo');
console.log(usuarioActivo);



