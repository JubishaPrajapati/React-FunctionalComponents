import React, { useRef, useEffect, useState } from "react";

const TrackPrev: React.FC = () => {
    const [count, setCount] = useState(0);
    const prevCount = useRef<number>();

    useEffect(() => {
        //update ref to curr val after render
        prevCount.current = count;
    })

    const handleCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h3>I am testing storing and using prev values using useRef</h3>
            <p>Count: {count}</p>
            <p>Previous count: {prevCount.current}</p>
            <button onClick={handleCount}>Increment</button>
        </div>
    )
}
export default TrackPrev;