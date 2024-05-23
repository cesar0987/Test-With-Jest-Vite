import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en el archivo 08-imp-exp.test.js', () => {

    test('getHeroeById Debe de retornar un héroe por id', () => {
            
            const id = 1;
            const heroe = getHeroeById(id);
    
            const heroeData = {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            };
    
            expect(heroe).toEqual(heroeData);
        }
    );

    test('getHeroeById Debe de retornar undefined si héroe no existe', () => {
                
                const id = 10;
                const heroe = getHeroeById(id);
        
                expect(heroe).toBe(undefined);
            }
        );

    test('getHeroesByOwner Debe de retornar un arreglo con los héroes de DC', () => {
                
                const owner = 'DC';
                const heroes = getHeroesByOwner(owner);
        
                const heroesData = [
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    },
                    {
                        id: 3,
                        name: 'Superman',
                        owner: 'DC'
                    },
                    {
                        id: 4,
                        name: 'Flash',
                        owner: 'DC'
                    }
                ];
        
                expect(heroes).toEqual(heroesData);
                expect(heroes.length).toBe(3);
                expect(heroes).toEqual(expect.any(Array));
                expect(heroes).toEqual(expect.arrayContaining(heroesData));
                expect(heroes).toContainEqual(heroesData[0]);
                expect(heroes).toContainEqual(heroesData[1]);
                expect(heroes).toContainEqual(heroesData[2]);
                expect(heroes).not.toContainEqual(heroesData[3]);
                expect(heroes).not.toContainEqual(heroesData[4]);
                
            }
        );
    });
