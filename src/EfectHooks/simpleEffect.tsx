import React, { useState, useEffect } from "react";

const SimpleEffect: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("Component rendered or count changed");
    });

    const inc = () => setCount(count + 1);

    return (
        <div>
            <h3>This is simple useeffect hook</h3>
            <p>Count: {count}</p>
            <button onClick={inc}>Increase</button>
        </div>
    )
}
export default SimpleEffect;