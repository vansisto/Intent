import React, { useState } from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import {rerender} from "./index";

const App = () => {
    const [counter, setCounter] = useState([3, 6, 1, 9]);

    let setCount = (index, value) => {
        let tmp = counter;
        tmp[index] = tmp[index] + value;
        setCounter(tmp);
        rerender();
    }

        return (
            <div className="App">
                <Counter counter={counter} setCount={setCount} index={0} />
                <Counter counter={counter} setCount={setCount} index={1} />
                <Counter counter={counter} setCount={setCount} index={2} />
                <Counter counter={counter} setCount={setCount} index={3} />
            </div>
        );
}

export default App;
