


export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    
    return {
        nombre: nombre,
        rango: rango,
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
 

