import React from "react";
import CreateTheme from "./createTheme";

interface Props {
    theme: {
        bgColor: string;
        textColor: string;
    }
}
const BaseTheme: React.FC<Props> = ({ theme }) => {
    return (
        <div
            style={{
                backgroundColor: theme.bgColor,
                color: theme.textColor,
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
            }}>

            <h1>Welcome to Theme Component</h1>
        </div>
    )
}
//enhancing basecomp with hoc
const EnhanceCompTheme = CreateTheme(BaseTheme);

export default EnhanceCompTheme;