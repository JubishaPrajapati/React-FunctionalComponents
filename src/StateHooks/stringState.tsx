import React, { useState } from "react";


const StringState: React.FC = () => {
    const [name, setName] = useState<string>("");

    //func for updating the state
    const handlerFunc = (event: any) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Use state to update name string value</h3>
            <input type="text" placeholder="Enter your name" value={name} onChange={handlerFunc} />
        </div>
    )
}


// const StringState: React.FC = () => {
//     const [name, setName] = useState<string>("I am before state change");

//     const updateMsg = () => {
//         setName("I am after state change");
//     }

//     return (
//         <div>
//             <h3>Use state to update name string value</h3>
//             <p>Name:{name}</p>
//             <button onClick={updateMsg}>Change msg</button>
//         </div>
//     )
// }
export default StringState;