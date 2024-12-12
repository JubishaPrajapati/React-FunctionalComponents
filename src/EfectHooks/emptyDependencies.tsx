import React, { useState, useEffect } from "react";

const EmptyDependencies: React.FC = () => {
    const [msg, setMsg] = useState<string>("Hello");


    const updateMsg = () => {
        setMsg("Hello everyone this is me after state change.")
    }


    useEffect(() => {
        console.log("Component is mounted in empty dependency");

        // setMsg("Hello everyone this is me after state change.");

        //this is clean up function
        return () => {
            console.log("Component is unmounted in empty dependency")
        }
    }, []);   //empty array dependency means the effect will run only once 



    return (
        <div>
            <h3>This is useeffect with empty dependencies</h3>
            <p>Message: {msg}</p>
            <button onClick={updateMsg}>Update Message</button>
        </div>
    )
}
export default EmptyDependencies;