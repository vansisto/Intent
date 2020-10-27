import React from 'react';

function Button(props) {
    const { count, setCount, index } = props;
    const button = count > 0 ? "+" + count : count;

    return (
        <div className="button">
            <button onClick={() => setCount(index, count)}>{button}</button>
        </div>
    );
}

export default Button;
