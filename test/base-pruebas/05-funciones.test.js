import { getUsuarioActivo , getUser} from '../../src/base-pruebas/05-funciones';

describe('Pruebas en el archivo 05-funciones.test.js', () => {
    test('Debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    }
    );}
    );
    test('Debe retornar un objeto con el nombre enviado', () => {
        const nombre = 'Fernando';
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    }
    );