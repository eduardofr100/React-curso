/**test('Esta es mi primera prueba', () => {
    const isActive = true;
    if(isActive){
        throw new Error('No esta activo');
        ///expect(true).toBe(true);
    }
});*/

describe('Pruebas dentro del archivo demo.test.js', () => {
    test('Los string deben de ser iguales', () => {
        /// 1. Inicialización
        const mensaje = 'Hola mundo';
        /// 2. Estimulo
        const mensaje2 = `Hola mundo`;
        /// 3. Observar comportamiento
        expect(mensaje).toBe(mensaje2); /// ===
    })
});
