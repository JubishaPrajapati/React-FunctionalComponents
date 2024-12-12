import { useState, useRef } from "react";

interface DifferenceProps {

}

const DifferenceRefandState: React.FC = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleInc = () => {
        setCount(count + 1);
        countRef.current++;

        console.log('State:', count);
        console.log('Ref:', countRef.current);
    }
    return (
        <div>
            <h3>Counter app to check difference between useState and useRef</h3>
            <p>Count:{count}</p>
            <button onClick={handleInc}>Increase</button>
        </div>
    )

}
export default DifferenceRefandState;
