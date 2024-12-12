import React, { useState, useEffect } from "react";

const WithDependencies: React.FC = () => {
    const [name, setName] = useState<string>("Alice");

    const changeName = () => {
        setName("Jubisha");
    }

    useEffect(() => {
        console.log(`Name has changed: ${name}`)
    }, [name]); //runs only when name changes 



    return (
        <div>
            <h3>This is useEffect with dependencies</h3>
            <p>Name:{name}</p>
            <button onClick={changeName}>Change name</button>
        </div>
    )
}
export default WithDependencies;