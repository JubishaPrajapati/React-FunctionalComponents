import { useRef, useState } from "react";

const RenderingRef: React.FC = () => {
    const countRef = useRef(0);



    //to rerender we can use state 
    const [count, setCount] = useState(0);

    const handleinc = () => {
        setCount(count + 1);
        countRef.current++;

        console.log('Ref:', countRef);
    }

    //we donot use useref in return statement doesnot rerender the comp
    return (
        <div>
            <h3>Rendering counter in ref by using something else to make it rerender </h3>
            <p>Count: {countRef.current}</p>     {/*ref dosenot trigger a comp to rerender .... if we want updated val we need something else to make comp to rerender  */}
            <button onClick={handleinc}>Increase</button>
        </div>
    )
}
export default RenderingRef;