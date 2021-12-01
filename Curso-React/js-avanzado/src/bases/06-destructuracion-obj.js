/**
 *  Desestructuración de objetos
 *  Asignación desestructurante
 */

const persona ={
    nombre: 'Diego',
    edad: 35,
    clave: 'xhdz'
}

//const {nombre, edad, clave} = persona;
/**
    console.log(nombre);
    console.log(edad);
    console.log(clave);
*/

const useContext = ({clave, nombre, edad, rango='civil'}) => {
    
    //console.log(clave, nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 23.23,
            lng: -32.32
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
