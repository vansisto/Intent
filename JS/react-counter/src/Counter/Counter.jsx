import React from 'react';
import Button from "./Button/Button";

const Counter = props => {
    const { counter, index, setCount } = props;

    return (
        <div className="counter">
            <div>Counter {index}: {counter[index]}</div>
            <Button count={5} setCount={setCount} index={index}/>
            <Button count={1} setCount={setCount} index={index}/>
            <Button count={-1} setCount={setCount} index={index}/>
            <Button count={-5} setCount={setCount} index={index}/>
        </div>
    );
}

export default Counter;
