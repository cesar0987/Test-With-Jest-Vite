import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en el archivo 07-deses-arr.test.js', () => {
    test('Debe de retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

        expect(letras).toEqual(expect.any(String));
    });
});