const nombre = 'Juan';
const apellido = 'Perez';

//const nombreCompleto = nombre+' '+apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    //return Hola + nombre;
    return `Hola ${nombre}`;
}

console.log(getSaludo(nombre));
