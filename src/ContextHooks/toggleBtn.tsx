import React from "react";
import { useToggle } from "./toggleContext";

const ToggleBtn: React.FC = () => {
    const { toggle } = useToggle(); //get toggle func from context

    return <button onClick={toggle}>Toggle Light</button>
}
export default ToggleBtn;