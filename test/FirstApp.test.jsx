import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';
describe('Prueba en <FirstApp/>', () => {

    test('debe hacer match con el snapshot', () => {

        const title = 'Hola soy Fernando';
        const subTitle = 'Soy un subtitulo';
        const name = 'Cesar Fernando';
        const { container } = render( <FirstApp title={title} subTitle={subTitle} name={name}/> );

        expect( container ).toMatchSnapshot();

 }),
    test('debe de mostrar el titulo en un h1', () => {
            
            const title = 'Hola soy Fernando';
            const subTitle = 'Soy un subtitulo';
            const name = 'Cesar Fernando';
            const {container, getByText,getByTestId } = render( <FirstApp title={title} subTitle={subTitle} name={name}/> );
    
            expect( getByTestId("test-title").innerHTML ).toContain(title);

            // const h1 = container.querySelector('h1'); 
            // expect(h1.innerHTML).toContain(title);
    
        })
    test('debe de mostrar el subtitulo enviado por pros', () => {
        const title = 'Hola soy Fernando';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( <FirstApp title={title} subTitle={subTitle} /> );

        expect( getByText(subTitle).length ).toBeTruthy(2);
    })
})