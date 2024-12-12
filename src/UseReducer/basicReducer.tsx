import React, { useReducer } from "react";

type ReducerState = {
    count: number;
};

type ReducerAction = {
    type: 'increment' | 'decrement' | 'reset';
}

//initial state
const initialState: ReducerState = { count: 0 }

//reducer function
const reducerFunc = (state: ReducerState, action: ReducerAction): ReducerState => {     //ReducerState=> is the return type annotation
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <div>
            <h3>Using useReducer hook</h3>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )

}
export default UseReducerHook;