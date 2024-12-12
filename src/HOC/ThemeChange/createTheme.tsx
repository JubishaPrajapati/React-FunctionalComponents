import React, { useState } from "react";

// Define a theme interface
interface Theme {
    backgroundColor: string;
    textColor: string;
}

// Higher-Order Component for handling themes
const CreateTheme = (WrappedComponent: React.ComponentType<any>) => {
    const ThemedComponent = (props: any) => {
        const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

        const theme: Theme =
            themeMode === "light"
                ? { backgroundColor: "#fff", textColor: "#000" }
                : { backgroundColor: "#000", textColor: "#fff" };

        const toggleTheme = () => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
        };

        return (
            <>
                <button
                    style={{
                        marginBottom: "20px",
                        padding: "10px",
                        cursor: "pointer",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                    }}
                    onClick={toggleTheme}
                >
                    Switch Theme
                </button>
                <WrappedComponent {...(props)} theme={theme} />
            </>
        );
    };

    return ThemedComponent;
};

export default CreateTheme;
