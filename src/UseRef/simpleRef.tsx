import { useRef } from "react";

const SimpleRef: React.FC = () => {
    const countRef = useRef(0);

    const handleinc = () => {

        countRef.current++;

        console.log('Ref:', countRef.current);
    }

    //we donot use useref in return statement doesnot rerender the comp
    return (
        <div>
            <h3>Using useRef </h3>
            <p>Count: {countRef.current}</p>     {/*ref dosenot trigger a comp to rerender .... if we want updated val we need something else to make comp to rerender  */}
            <button onClick={handleinc}>Increase</button>
        </div>
    )
}
export default SimpleRef;