import useSimpleCustom from "./simpleCustomMain";

const SimpleCustomComp: React.FC = () => {
    const { count, inc, dec, reset } = useSimpleCustom();

    return (
        <div>
            <h3>Counter app using custom hook:</h3>
            <p>Count: {count}</p>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default SimpleCustomComp;