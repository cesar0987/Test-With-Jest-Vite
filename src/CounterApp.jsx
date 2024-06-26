import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
export const CounterApp = ({value}) => {

    console.log('Render')

    const [counter,setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubstract = () => {
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
        <h1>Counter Appp</h1>
        <p> {counter} </p>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubstract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        </>
    );
    }

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


