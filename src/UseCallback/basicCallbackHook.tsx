import { useState, useCallback } from "react";

const BasicCallbackHook: React.FC = () => {
    const [count, setCount] = useState(0);

    //memoize inc function
    const inc = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [])   //empty dependency: function will not change

    return (
        <div>
            <h3>Using useCallback hook</h3>
            <p>Count:{count}</p>
            <button onClick={inc}>Inc</button>
        </div>
    )
}
export default BasicCallbackHook