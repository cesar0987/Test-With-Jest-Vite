import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';
describe('Prueba en <FirstApp/>', () => {

    test('debe hacer match con el snapshot', () => {

        const title = 'Hola soy Fernando';
        const subTitle = 'Soy un subtitulo';
        const name = 'Cesar Fernando';
        const { container } = render( <FirstApp title={title} subTitle={subTitle} name={name}/> );

        expect( container ).toMatchSnapshot();

 })

    test('debe de mostrar el titulo en un h1'), () => {
            
            const title = 'Hola soy Fernando';
            const subTitle = 'Soy un subtitulo';
            const name = 'Cesar Fernando';
            const { getByText } = render( <FirstApp title={title} subTitle={subTitle} name={name}/> );
    
            expect( getByText(title) ).toBeInTheDocument();
    
        }
})