import React, { useState } from "react";

interface User {
    name: string;
    age?: number;
}

const ObjState: React.FC = () => {
    const [user, setUser] = useState<User>({ name: "Kusum", age: 24 });

    // const updateInfo = () => {
    //     setUser({ name: "Bishal", age: 25 });
    // }
    const updateName = () => {
        setUser({ name: "Bishal" });
    }
    const updateAge = () => {
        setUser({ ...user, age: 25 });
    }
    console.log(user)

    return (
        <div>
            <h3>Object example using usestate</h3>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            {/* <button onClick={updateInfo}>Update information</button> */}
            <button onClick={updateName}>Update name</button>
            <button onClick={updateAge}>Update age</button>
        </div>
    )
}
export default ObjState;