import React, { useRef } from "react";

const HtmlRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);   //ts type that represents the properties and methods available on input ele in DOM

    const inputFocus = () => {
        //using ref to focus input ele
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h3>Input focus using useref and simple function</h3>
            <input type="text" ref={inputRef} placeholder="Type something..." />
            <button onClick={inputFocus}>Focus the input</button>      {/* button thichesi input focus huni */}
        </div>
    )
}
export default HtmlRef;