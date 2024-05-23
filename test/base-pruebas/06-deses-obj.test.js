import { usContext } from '../../src/base-pruebas/06-deses-obj';
test('Pruebas en el archivo 06-deses-obj.test.js', () => {
    const persona = {
        nombre: 'Tony',
        edad: 45,
        clave: 'Ironman'
    }
    const { nombreClave, anios, latlng } = usContext(persona);
    expect(persona).toEqual({ nombre: 'Tony', edad: 45, clave: 'Ironman' });
    expect(nombreClave).toBe(persona.clave);
    expect(anios).toBe(persona.edad);
    expect(latlng).toEqual({ lat: 14.1232, lng: -12.3232 });
}
);