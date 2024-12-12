import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0); //usestate of type number with initial val as 0

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h3>Use state to chnage count value</h3>
            <p>Count:{count}</p>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;