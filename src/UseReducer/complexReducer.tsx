import { useReducer } from "react";

type ComplexState = {
    username: string;
    email: string;
};

type ComplexAction =
    | { type: 'setUsername'; payload: string }           //payload is additional data that is optional and used to perform upadates
    | { type: 'setEmail'; payload: string }
    | { type: 'reset' };


//initial state
const initialState: ComplexState = {
    username: '',
    email: '',
}

//reducer function
const reducer = (state: ComplexState, action: ComplexAction): ComplexState => {
    switch (action.type) {
        case 'setUsername':
            return { ...state, username: action.payload };
        case 'setEmail':
            return { ...state, email: action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const ComplexReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'username') {
            dispatch({ type: 'setUsername', payload: value });    //payload contains the new val for corresponding state property
        } else if (name === 'email') {
            dispatch({ type: 'setEmail', payload: value });
        }
    };


    return (
        <form>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </div>
            <button type="button" onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
            <div>
                <p>Username: {state.username}</p>
                <p>Email: {state.email}</p>
            </div>
        </form>
    );
}
export default ComplexReducerHook;