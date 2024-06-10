import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';


describe('Prueba en <FirstApp/>', () => {
    const title = 'Hola soy Goku';
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el mensaje"Hola soy Goku"', () => {
        const {getByText} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeInTheDocument();
    }
    )
    
})