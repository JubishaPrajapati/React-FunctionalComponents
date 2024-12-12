import React, { createContext, useState, useContext, ReactNode } from "react";

interface ToggleProps {
    isToggled: boolean;
    toggle: () => void;
}

//creating context
export const ToggleContext = createContext<ToggleProps | undefined>(undefined);


interface ChildrenProps {
    children: ReactNode;
}
//creating provider component
export const ToggleProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const toggle = () => {
        setIsToggled((prev) => !prev);     //toggle the val
    };
    return (
        <ToggleContext.Provider value={{ isToggled, toggle }}>    {/*istoggle is curr state and toggle is function */}
            {children}
        </ToggleContext.Provider>
    )
}

//custom hook to access context
export const useToggle = () => {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error("usetoggle must be used within a toggleprovider")
    }
    return context;
}

