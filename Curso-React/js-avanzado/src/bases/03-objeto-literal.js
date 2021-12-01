const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        calle: 'Avenida Central Park',
        zip: 246897531,
        lat: 40.730610,
        lng: -73.935242
    }
}

//console.table(persona);
/**
 * Copia del objeto persona
 */
const persona2 ={ ...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
