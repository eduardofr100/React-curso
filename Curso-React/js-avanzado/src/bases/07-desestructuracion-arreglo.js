/**
 *  Desestructuración de arreglos
 *  Asignación desestructurante
 */

const personajes = ['Goku', 'Vegeta', 'Trunks', 'Piccolo', 'Gohan', 'Goten'];
const [ , , p3, , p5, p6] = personajes;
console.log(p3, p5, p6);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => {console.log('Thanos')}];
}
const [nombre, setNombre] = useState('Yo soy inevitable');
console.log(nombre);
setNombre();
