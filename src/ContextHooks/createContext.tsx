import { createContext, useContext } from "react";
import { User } from "./parent";  //. means curr directory

//creating context
export const CreateContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(CreateContext);

    if (user === undefined) {
        throw new Error("useUserContext must be used with a CreateContext")
    }

    return user;
}