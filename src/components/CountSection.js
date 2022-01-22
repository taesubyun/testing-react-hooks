import { useState } from 'react';

const CountSection = () => {
    const [count, setCount] = useState(100);

    const plusCount = () => {
        setCount((curCount) => curCount + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => plusCount()}>+1</button>
        </div>
    );
};

export default CountSection;
