import React from "react";
import { useToggle } from "./toggleContext";

const ToggleDisplay: React.FC = () => {
    const { isToggled } = useToggle();       //get toggle state from context

    return (
        <div>
            <h3>The light is {isToggled ? 'On' : 'Off'}</h3>
        </div>
    )
}
export default ToggleDisplay;