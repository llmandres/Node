import React, { useState } from 'react';
import '../styles/Counter.css';

export default function Counter(props) {
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [listaNombres, setListaNombres] = useState([]); 

    function handlerClickCounter() {
        setCounter(counter + 1);
        console.log(counter);
    }

    function handleClickVisibility() {
        setVisible(!visible);
    }

    function handleListNames() {
        setListaNombres([...listaNombres, 'Maria']);
    }

    return (
        <>
            {listaNombres.map((elem, index) => <p key={index}>{elem}</p>)}
            {visible ? <h1 className='counter__title'>COUNTER: {counter}</h1> : null}
            <div className='counter__botones'>
                <button onClick={handlerClickCounter}>Incrementar</button>
                <button onClick={handleClickVisibility}>Cambiar Visibilidad</button>
            </div>
            <button onClick={handleListNames}>Maria++</button>
        </>
    );
}