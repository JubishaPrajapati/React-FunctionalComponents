import { useState } from "react";
import { CreateContext } from "./createContext";
import RenderComps from "./renderComp";

export interface User {    //export interface so that other files can use it 
    isSub: boolean;
    name: String;
    age: number;
}

interface ParentProps {

}

export default function Parent({ }: ParentProps) {
    const [user] = useState<User>({ name: "Jubisha", isSub: true, age: 5 });    ///only curr state i.e user is taken 

    return (
        <div>
            <CreateContext.Provider value={user}>
                <RenderComps />
            </CreateContext.Provider>
        </div>
    )
}