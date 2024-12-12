import React, { useEffect, useState } from "react";

const MultipleEffects: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect 1: Count changed", count);
    }, [count]);

    useEffect(() => {
        console.log("Effect 2: Component mounted or count changed");
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default MultipleEffects;
