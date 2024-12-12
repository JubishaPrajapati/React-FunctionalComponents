import React, { useState, useRef } from "react";

const MultipleRef: React.FC = () => {
    const fnameRef = useRef<HTMLInputElement>(null);
    const lnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    // const focusInput = (ref: React.RefObject<HTMLInputElement>) => {         //passing arg as ref a
    //     if (ref.current) {
    //       ref.current.focus();
    //     }
    //   };

    const fnameFocus = () => {
        if (fnameRef.current) {
            fnameRef.current.focus();
        }
    }
    const lnameFocus = () => {
        if (lnameRef.current) {
            lnameRef.current.focus();
        }
    }
    const emailFocus = () => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }
    return (
        <div>
            <div>
                <label>First name:</label>
                <input type="text" ref={fnameRef} placeholder="Enter first name" />
                {/* <button onClick={() => focusInput(firstNameRef)}>Focus First Name</button> */}
                <button onClick={fnameFocus}>Focus first name</button>
            </div>
            <div>
                <label>Last name:</label>
                <input type="text" ref={lnameRef} placeholder="Enter last name" />
                {/* <button onClick={() => focusInput(lastNameRef)}>Focus Last Name</button> */}
                <button onClick={lnameFocus}>Focus last name</button>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" ref={emailRef} placeholder="Enter email" />
                {/* <button onClick={() => focusInput(emailRef)}>Focus Email</button> */}
                <button onClick={emailFocus}>Focus email</button>
            </div>
        </div>
    )

}
export default MultipleRef;